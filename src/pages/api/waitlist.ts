import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';

export const prerender = false;

function getFormAction(): string | undefined {
	return env.BREVO_FORM_ACTION ?? import.meta.env.BREVO_FORM_ACTION;
}

function getTurnstileSecret(): string | undefined {
	return env.TURNSTILE_SECRET_KEY ?? import.meta.env.TURNSTILE_SECRET_KEY;
}

function getApiConfig() {
	return {
		apiKey: env.BREVO_API_KEY ?? import.meta.env.BREVO_API_KEY,
		listId: env.BREVO_LIST_ID ?? import.meta.env.BREVO_LIST_ID,
	};
}

async function verifyTurnstile(token: string, secret: string, remoteip?: string) {
	const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			secret,
			response: token,
			remoteip,
		}),
	});

	const data = (await res.json()) as { success?: boolean };
	return data.success === true;
}

async function submitToBrevoForm(formAction: string, email: string) {
	const body = new URLSearchParams({
		EMAIL: email,
		email_address_check: '',
		locale: 'en',
	});

	const res = await fetch(formAction, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
			Accept: 'text/html,application/json',
		},
		body: body.toString(),
		redirect: 'manual',
	});

	return res.ok || res.status === 302 || res.status === 303;
}

export const POST: APIRoute = async ({ request }) => {
	let body: { email?: string; turnstileToken?: string };

	try {
		body = await request.json();
	} catch {
		return new Response(JSON.stringify({ error: 'Invalid request body' }), {
			status: 400,
			headers: { 'Content-Type': 'application/json' },
		});
	}

	const turnstileSecret = getTurnstileSecret();
	if (turnstileSecret) {
		const token = body.turnstileToken?.trim();
		if (!token) {
			return new Response(JSON.stringify({ error: 'Please complete the verification check.' }), {
				status: 400,
				headers: { 'Content-Type': 'application/json' },
			});
		}

		const remoteip = request.headers.get('CF-Connecting-IP') ?? undefined;
		const verified = await verifyTurnstile(token, turnstileSecret, remoteip);
		if (!verified) {
			return new Response(
				JSON.stringify({ error: 'Verification failed. Please try again.' }),
				{ status: 403, headers: { 'Content-Type': 'application/json' } },
			);
		}
	}

	const email = body.email?.trim().toLowerCase();
	if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
		return new Response(JSON.stringify({ error: 'Please enter a valid email address' }), {
			status: 400,
			headers: { 'Content-Type': 'application/json' },
		});
	}

	const formAction = getFormAction();

	if (formAction) {
		try {
			const ok = await submitToBrevoForm(formAction, email);
			if (ok) {
				return new Response(
					JSON.stringify({ message: "You're on the list. We'll be in touch soon." }),
					{ status: 200, headers: { 'Content-Type': 'application/json' } },
				);
			}
		} catch {
			// fall through to error response
		}

		return new Response(
			JSON.stringify({ error: 'Could not add you to the waitlist. Please try again.' }),
			{ status: 500, headers: { 'Content-Type': 'application/json' } },
		);
	}

	const { apiKey, listId } = getApiConfig();

	if (!apiKey || !listId) {
		return new Response(
			JSON.stringify({ error: 'Waitlist is not configured yet.' }),
			{ status: 503, headers: { 'Content-Type': 'application/json' } },
		);
	}

	const brevoRes = await fetch('https://api.brevo.com/v3/contacts', {
		method: 'POST',
		headers: {
			'api-key': apiKey,
			'Content-Type': 'application/json',
			Accept: 'application/json',
		},
		body: JSON.stringify({
			email,
			listIds: [Number(listId)],
			updateEnabled: true,
		}),
	});

	if (brevoRes.ok || brevoRes.status === 204) {
		return new Response(
			JSON.stringify({ message: "You're on the list. We'll be in touch soon." }),
			{ status: 200, headers: { 'Content-Type': 'application/json' } },
		);
	}

	if (brevoRes.status === 400) {
		const err = (await brevoRes.json()) as { message?: string };
		if (err.message?.toLowerCase().includes('already')) {
			return new Response(
				JSON.stringify({ message: "You're already on the waitlist." }),
				{ status: 200, headers: { 'Content-Type': 'application/json' } },
			);
		}
	}

	return new Response(
		JSON.stringify({ error: 'Could not add you to the waitlist. Please try again.' }),
		{ status: 500, headers: { 'Content-Type': 'application/json' } },
	);
};
