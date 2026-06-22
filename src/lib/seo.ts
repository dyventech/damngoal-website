import {
	SITE_DESCRIPTION,
	SITE_PRODUCT_LINE,
	SITE_TAGLINE,
	SITE_TITLE,
	SITE_URL,
} from '../consts';

export const defaultOgImage = `${SITE_URL}/damngoal-logo.jpeg`;

export const siteOrganization = {
	'@context': 'https://schema.org',
	'@type': 'Organization',
	name: SITE_TITLE,
	url: SITE_URL,
	logo: defaultOgImage,
	description: SITE_PRODUCT_LINE,
	slogan: SITE_TAGLINE,
};

export const siteWebSite = {
	'@context': 'https://schema.org',
	'@type': 'WebSite',
	name: SITE_TITLE,
	url: SITE_URL,
	description: `${SITE_PRODUCT_LINE} ${SITE_TAGLINE}`,
	publisher: { '@type': 'Organization', name: SITE_TITLE },
};

export const siteSoftwareApp = {
	'@context': 'https://schema.org',
	'@type': 'SoftwareApplication',
	name: SITE_TITLE,
	applicationCategory: 'LifestyleApplication',
	operatingSystem: 'iOS, Android',
	description: SITE_DESCRIPTION,
	url: SITE_URL,
	offers: {
		'@type': 'Offer',
		price: '0',
		priceCurrency: 'USD',
		availability: 'https://schema.org/PreOrder',
	},
};

export const homeFaqs = [
	{
		question: 'What is DamnGoal?',
		answer:
			'DamnGoal is a calm goal-tracking app that helps you stay connected to meaningful goals through habits and next steps — without streaks, guilt, or forced motivation. It adapts when your energy or life circumstances change.',
	},
	{
		question: 'Does DamnGoal use streaks?',
		answer:
			'No. DamnGoal deliberately avoids streaks, points, leaderboards, and compliance scores. Skipping a day does not reset your progress.',
	},
	{
		question: 'How does DamnGoal adapt on hard days?',
		answer:
			'You can check in as Good, Low, or Rough. On Low or Rough days, habits and tasks without a lighter version step aside so Today stays right-sized to your capacity.',
	},
	{
		question: 'Is DamnGoal research-informed?',
		answer:
			'Yes. DamnGoal is informed by behavior-change research on goal adjustment, self-compassion, and just-in-time support. See the Research page for sources and honest limits.',
	},
];

export function buildFaqSchema(faqs: { question: string; answer: string }[]) {
	return {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: faqs.map((faq) => ({
			'@type': 'Question',
			name: faq.question,
			acceptedAnswer: {
				'@type': 'Answer',
				text: faq.answer,
			},
		})),
	};
}

export function buildWebPageSchema({
	title,
	description,
	path,
}: {
	title: string;
	description: string;
	path: string;
}) {
	return {
		'@context': 'https://schema.org',
		'@type': 'WebPage',
		name: title,
		description,
		url: `${SITE_URL}${path}`,
		isPartOf: { '@type': 'WebSite', name: SITE_TITLE, url: SITE_URL },
	};
}
