// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import cloudflare from "@astrojs/cloudflare";

const marketingPages = new Set(["/", "/research"]);

// https://astro.build/config
export default defineConfig({
	site: "https://damngoal.app",
	integrations: [
		mdx(),
		sitemap({
			filter: (page) => {
				const path = new URL(page).pathname.replace(/\/$/, "") || "/";
				return marketingPages.has(path);
			},
		}),
	],
	adapter: cloudflare({
		platformProxy: {
			enabled: true,
		},
	}),
});
