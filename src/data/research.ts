export interface ResearchFinding {
	title: string;
	summary: string;
	source: string;
	href?: string;
}

export const researchFindings: ResearchFinding[] = [
	{
		title: "Planning burden rises under stress",
		summary:
			"When capacity is low, adding structure before a goal feels workable can increase dropout rather than help.",
		source: "APA Stress in America 2023; Hennessy et al.",
		href: "https://www.apa.org/news/press/releases/stress/2023/collective-trauma-recovery",
	},
	{
		title: "Many people don't arrive with a polished goal",
		summary:
			"Most Americans don't make New Year's resolutions — and many only know what feels wrong, not what to choose.",
		source: "Pew Research Center, 2024",
		href: "https://www.pewresearch.org/short-reads/2024/01/29/new-years-resolutions-who-makes-them-and-why/",
	},
	{
		title: "Support changes the odds",
		summary:
			"Large-scale resolution research shows supportive framing — especially approach-oriented goals with some external support — improves outcomes versus going it alone.",
		source: "Oscarsson et al., 2020",
		href: "https://doi.org/10.1371/journal.pone.0234097",
	},
	{
		title: "Goals usually drift — they don't end cleanly",
		summary:
			"People commonly pause, reduce effort, or quietly stop. Binary active/completed models miss most real trajectories.",
		source: "Moshontz & Hoyle; Moshontz et al.",
		href: "https://doi.org/10.31234/osf.io/3zex9",
	},
	{
		title: "Goal adjustment is normal, not failure",
		summary:
			"Revising, pausing, and releasing goals are adaptive responses to striving difficulties — not character flaws.",
		source: "Moshontz et al., 2025",
		href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12932095/",
	},
	{
		title: "More support is not automatically better",
		summary:
			"Digital behavior-change reviews emphasize fit and timing over intensity. Excessive intervention creates burden.",
		source: "Xu & Smit, 2023; Hardeman et al., 2024",
		href: "https://doi.org/10.1177/20552076231183543",
	},
	{
		title: "Self-compassion supports re-engagement",
		summary:
			"After a setback, shame and harsh self-judgment tend to reduce re-engagement. Self-compassion does the opposite.",
		source: "Biber & Ellis, 2019",
		href: "https://pubmed.ncbi.nlm.nih.gov/28810473/",
	},
	{
		title: "Non-directive support transfers to digital",
		summary:
			"Empathetic support that explores ambivalence without pushing — rather than cheerleading persistence — has evidence in behavior-change contexts.",
		source: "O'Halloran et al., 2024",
		href: "https://www.bmj.com/content/386/bmj-2023-078713",
	},
	{
		title: "Social support helps when chosen",
		summary:
			"Opt-in support improves outcomes. Competition and forced public accountability create pressure.",
		source: "Mutter et al., 2024",
		href: "https://pubmed.ncbi.nlm.nih.gov/39521463/",
	},
];

export const researchSupported = [
	"Reducing planning burden before asking for commitment",
	"Matching support to the current barrier, not a permanent user type",
	"Offering the smallest relevant response at the right moment",
	"Letting people pause, revise, or release goals without framing it as failure",
	"Self-compassion over shame after a lapse",
	"User-controlled motivation — not constant cheerleading",
	"Bounded, explainable adaptation at decision points",
];

export const researchWeak = [
	"Personality-based intervention matching",
	"Streaks and gamification as long-term behavior-change tools",
	"More reminders and structure as a default response to disengagement",
	"Applying health-domain results directly to career, creative, or life-direction goals",
];

export const researchCitations = [
	{
		label: "American Psychological Association — Stress in America 2023",
		href: "https://www.apa.org/news/press/releases/stress/2023/collective-trauma-recovery",
	},
	{
		label: "Pew Research Center — New Year's resolutions, 2024",
		href: "https://www.pewresearch.org/short-reads/2024/01/29/new-years-resolutions-who-makes-them-and-why/",
	},
	{
		label: "Oscarsson et al. — A large-scale experiment on New Year's resolutions, 2020",
		href: "https://doi.org/10.1371/journal.pone.0234097",
	},
	{
		label: "Moshontz & Hoyle — Goal Disengagement in Everyday Life, 2022",
		href: "https://doi.org/10.31234/osf.io/3zex9",
	},
	{
		label: "Moshontz et al. — Goal adjustment in response to striving difficulties, 2025",
		href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12932095/",
	},
	{
		label: "Witteman et al. — Values clarification systematic review, 2021",
		href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8482297/",
	},
	{
		label: "Sheeran, Listrom & Gollwitzer — Implementation intentions meta-analysis, 2024",
		href: "https://doi.org/10.1080/10463283.2024.2334563",
	},
	{
		label: "Xu & Smit — Just-in-time adaptive interventions meta-analysis, 2023",
		href: "https://doi.org/10.1177/20552076231183543",
	},
	{
		label: "Hardeman et al. — Scoping review of JITAIs, 2024",
		href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11583291/",
	},
	{
		label: "O'Halloran et al. — Motivational interviewing and physical activity, 2024",
		href: "https://www.bmj.com/content/386/bmj-2023-078713",
	},
	{
		label: "Mutter et al. — Social support in digital interventions, 2024",
		href: "https://pubmed.ncbi.nlm.nih.gov/39521463/",
	},
	{
		label: "Biber & Ellis — Self-compassion and health-behavior self-regulation, 2019",
		href: "https://pubmed.ncbi.nlm.nih.gov/28810473/",
	},
];
