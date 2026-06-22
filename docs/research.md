# DamnGoal — Research & Evidence Base

**Status:** Internal reference (v1)  
**Last updated:** June 2025

Evidence base and design rationale. Informs `product.md`; does not override it.  
For product definition → `product.md`. For UI copy → `copy.md`.

---

## 1. The problem space

Most goal-setting tools assume the user already has:

- A clear goal
- Enough capacity to pursue it
- A reliable plan
- Stable motivation
- A predictable environment
- The ability to recover after disruption

Representative surveys and longitudinal goal research suggest many people do not have those conditions consistently.

They may want change but not know what to choose. They may know what to do but lack time, money, energy, access, confidence, or support. They may begin strongly and lose contact with the goal. Sometimes the goal itself stops fitting.

Conventional digital products often respond with more structure: fields, plans, schedules, reminders, streaks, dashboards, and overdue work. Behavior-change literature suggests this can turn a meaningful goal into another source of administrative pressure.

Some obstacles require money, care, access, safety, permission, or professional support. Research on self-regulation and goal adjustment consistently shows these cannot be reduced to a motivation or willpower problem.

### Who the research describes

People with meaningful personal goals whose available clarity, time, energy, confidence, or resources are inconsistent.

They may be making a career decision, rebuilding health, learning something, finishing a project, improving a relationship, returning to creativity, or trying to understand what should change.

---

## 2. Key findings

There is no single study that explains why people fail to complete personal goals. The useful picture comes from representative surveys, longitudinal goal studies, and recent behavior-change research.

### Planning burden rises under stress

Stress, uncertainty, and limited capacity make future planning harder. Adding structure before a goal feels workable may increase dropout rather than help.

*Sources: APA Stress in America 2023; Hennessy et al. on self-regulation mechanisms.*

### Many people do not arrive with a polished goal

Formal goal-setting does not appeal to everyone. Pew Research finds most Americans don't make New Year's resolutions — and among those who do, motivations and approaches vary widely. Many people only know what feels wrong or what they want to feel different.

*Source: Pew Research Center, 2024.*

### New Year's resolutions mostly fail — but support changes the odds

Oscarsson et al. ran a large-scale experiment on New Year's resolutions. A meaningful share of participants did not sustain their goals over the year. Supportive framing — especially approach-oriented goals with some external support — improved outcomes compared to going it alone.

*Source: Oscarsson et al., 2020.*

### Obstacles are often material and social

Money, health, work, care responsibilities, access, confidence, and social conditions shape what is possible. Smaller tasks or reminders alone do not resolve structural constraints.

### Goals usually drift rather than end cleanly

People commonly pause, reduce effort, or quietly stop rather than completing or formally abandoning a goal. Binary active/completed models miss most real trajectories.

*Sources: Moshontz & Hoyle on goal disengagement in everyday life; Moshontz et al. on goal adjustment in response to striving difficulties.*

### Goal adjustment is normal, not failure

Recent work treats revising, pausing, and releasing goals as adaptive responses to striving difficulties — not as character flaws or lack of discipline.

*Source: Moshontz et al., 2025.*

### More support is not automatically better

Clear framing and modest support may help, but excessive intervention creates burden. Digital behavior-change reviews emphasize fit and timing over intensity.

*Sources: Xu & Smit JITAI meta-analysis; Hardeman et al. scoping review on just-in-time adaptive interventions.*

### Adaptation helps when bounded and explainable

Just-in-time adaptive interventions can improve outcomes at decision points, but the evidence base is uneven across domains. Adaptation works best when the person understands why something changed.

*Sources: Xu & Smit, 2023; Hardeman et al., 2024.*

### Personality-based matching is weakly supported

Current evidence does not support assigning interventions from demographic or personality type. eHealth personalization works better when tied to changing context than to stable user labels.

*Source: ten Klooster et al. on eHealth personalization approaches.*

### Values clarification has modest evidence

Systematic reviews show values-clarification interventions produce small but meaningful effects — especially when someone is uncertain about direction.

*Source: Witteman et al., 2021.*

### Implementation intentions are among the strongest behavior-change tools

If-then plans ("If X happens, I will do Y") show robust effects across hundreds of studies — particularly when context is stable enough to support the cue.

*Source: Sheeran, Listrom & Gollwitzer, 2024 — meta-analysis across 642 tests.*

### Habit formation in digital products needs stable context

Digital designs for habit formation work when there is a reliable cue, place, or routine — not when life conditions are unpredictable.

*Source: Zhu et al. on digital behavior-change designs for habit formation.*

### Self-compassion supports re-engagement after lapse

Self-compassion correlates with healthier behavior self-regulation after setback — shame and harsh self-judgment tend to reduce re-engagement.

*Source: Biber & Ellis on self-compassion and health-behavior self-regulation.*

### Motivational interviewing principles transfer to digital support

Non-directive, empathetic support that explores ambivalence without pushing — rather than cheerleading persistence — has evidence in behavior-change contexts.

*Source: O'Halloran et al. on motivational interviewing and physical activity.*

### Social support helps when chosen, not forced

Social support in digital interventions improves outcomes when the user opts in — not when competition or public accountability creates pressure.

*Source: Mutter et al. on social support in digital interventions.*

---

## 3. What the research supports — and what it doesn't

### Well supported

- Reducing planning burden before asking for commitment
- Matching support to the current barrier, not a permanent user type
- Offering the smallest relevant response at the right moment
- Letting people pause, revise, or release goals without framing it as failure
- If-then plans and habits when context is stable
- Values clarification when direction is unclear
- Self-compassion over shame after lapse
- User-controlled, optional motivation — not constant cheerleading
- Bounded, explainable adaptation at decision points

### Weak or mixed evidence

- Personality-based intervention matching
- Streaks and gamification as long-term behavior-change tools
- More reminders and structure as a default response to disengagement
- Applying health-domain digital intervention results directly to career, creative, or life-direction goals

### Not covered by this literature

- Whether a specific app UX (natural-language goal creation, five stuck states, etc.) works in practice
- Optimal AI recommendation patterns for personal goals
- How people respond to contextual motivational content in non-health domains

Those are product design decisions informed by — but not proven by — the research above.

---

## 4. Limits of the evidence

Much behavior-change research comes from health contexts — exercise, diet, medication adherence. Applying those findings to career decisions, creative goals, or relationship change is reasonable but not directly validated.

Most studies measure short-to-medium-term behavior, not whether someone maintains a meaningful relationship with a long-term personal goal over years.

Survey data describes what people report, not what they actually do day to day.

No published study validates a complete adaptive goal product like DamnGoal. The research informs design direction; it does not prescribe a finished product.

---

## 5. Evidence base

- American Psychological Association. [Stress in America 2023](https://www.apa.org/news/press/releases/stress/2023/collective-trauma-recovery).
- Pew Research Center. [New Year's resolutions: Who makes them and why](https://www.pewresearch.org/short-reads/2024/01/29/new-years-resolutions-who-makes-them-and-why/), 2024.
- Oscarsson et al. [A large-scale experiment on New Year's resolutions](https://doi.org/10.1371/journal.pone.0234097), 2020.
- Moshontz and Hoyle. [Goal Disengagement in Everyday Life](https://doi.org/10.31234/osf.io/3zex9), 2022.
- Hennessy et al. [Self-regulation mechanisms in health behavior change](https://pubmed.ncbi.nlm.nih.gov/31662031/), 2020.
- Witteman et al. [Clarifying Values: Updated systematic review and meta-analysis](https://pmc.ncbi.nlm.nih.gov/articles/PMC8482297/), 2021.
- Sheeran, Listrom, and Gollwitzer. [Implementation intentions across 642 tests](https://doi.org/10.1080/10463283.2024.2334563), 2024.
- Zhu et al. [Digital behavior-change designs for habit formation](https://doi.org/10.2196/54375), 2024.
- Xu and Smit. [Just-in-time adaptive interventions meta-analysis](https://doi.org/10.1177/20552076231183543), 2023.
- Hardeman et al. [Scoping review of just-in-time adaptive interventions](https://pmc.ncbi.nlm.nih.gov/articles/PMC11583291/), 2024.
- ten Klooster et al. [eHealth personalization approaches](https://pmc.ncbi.nlm.nih.gov/articles/PMC11406103/), 2024.
- Moshontz et al. [Goal adjustment in response to striving difficulties](https://pmc.ncbi.nlm.nih.gov/articles/PMC12932095/), 2025.
- O'Halloran et al. [Motivational interviewing and physical activity](https://www.bmj.com/content/386/bmj-2023-078713), 2024.
- Mutter et al. [Social support in digital interventions](https://pubmed.ncbi.nlm.nih.gov/39521463/), 2024.
- Biber and Ellis. [Self-compassion and health-behavior self-regulation](https://pubmed.ncbi.nlm.nih.gov/28810473/), 2019.
