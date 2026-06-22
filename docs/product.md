# DamnGoal — Product Documentation

**Status:** Single source of truth (v1)  
**Last updated:** June 2025

**Start here (readable):** [`how-damngoal-works.md`](how-damngoal-works.md) — one narrative doc covering vision, how it works, and all features.

This file is the **detailed spec** — tables, field rules, lifecycles, maintenance reference.

| Need | Go to |
|------|--------|
| How it works (narrative) | [`how-damngoal-works.md`](how-damngoal-works.md) |
| UI copy & onboarding text | [`copy.md`](copy.md) |
| Research citations | [`research.md`](research.md) |
| Screen map, fields, mermaid | [`screens-fields.md`](screens-fields.md) |
| Archived UI reference (optional) | [`sample/README.md`](sample/README.md) |

When anything conflicts, **this file wins**.

---

## One-line

A calm, emotionally intelligent goal-tracking app that helps people stay connected to long-term goals through pressure-free daily habits and tasks — with AI guidance instead of guilt, streaks, or forced motivation.

---

## Problem

Most goal apps assume the user already has a clear goal, stable motivation, enough energy, and a predictable environment. Many people don't — not consistently.

They may want change but not know what to choose. They may know what to do but lack time, money, energy, or confidence. They may start strong and quietly drift away. Sometimes the goal itself stops fitting.

Conventional products respond with more structure: fields, plans, reminders, streaks, overdue lists. That often turns a meaningful goal into another source of pressure.

Some obstacles need money, care, access, or professional support. Those cannot be solved with willpower alone.

---

## Who it's for

People with meaningful personal goals whose clarity, time, energy, confidence, or resources are inconsistent.

Examples: career decisions, rebuilding health, learning something, finishing a project, improving a relationship, returning to creativity, figuring out what should change.

Not for: people who want aggressive gamification, competitive accountability, or clinical treatment.

---

## Product thesis

1. **Connection over completion** — Staying in relationship with a goal matters more than binary done/not-done.
2. **Adaptation is normal** — Pausing, revising, or releasing a goal is healthy, not failure.
3. **Small counts** — Partial effort on a hard day is real progress.
4. **Right moment, right dose** — Support at decision points, not constant intervention.
5. **Context, not type** — Adapt to how today feels, not a permanent user profile.
6. **Science in the kitchen, not on the menu** — Research informs design; users feel it, rarely read about it.

---

## Design principles

| Principle | In practice |
|-----------|-------------|
| Trust before commitment | Minimal onboarding; no intrusive questions upfront |
| Ask about life, not psychology | "How are you feeling?" not "Rate your motivation" |
| No streaks, no shame | Never punish skips; no red overdue guilt |
| Three completion states | Timed: Done / Partial / Skipped. Check-off: Done / Skip — partial counts as consistency |
| Goals can rest | Release archives; never frame as "failed" |
| Bounded adaptation | Lighter versions, timing shifts — explain once, then just do it |
| Optional depth | Why layer, routine trigger — never required |
| Rest is built in | Do Nothing Mode; no reminders on reset days |
| Listen, don't cheerlead | AI reflects and asks; no "You got this!!!" |
| Social when chosen | Opt-in sharing; reactions only; no comments or competition |

---

## What we deliberately don't do

- Streaks, points, leaderboards, or compliance scores
- Personality quizzes or "user type" matching
- Clinical language (lapse, adherence, disengagement, intervention)
- Forced public accountability
- More reminders as the default response to disengagement
- Binary active/completed goal models without a pause/release path
- Diagnosing or treating mental health conditions

---

## How DamnGoal works

DamnGoal is built for real life — messy weeks, low-energy days, goals that shift halfway through.

**Three layers:**
1. **Goals** — long-term direction (can be vague). Optional why + tags. Can be adjusted, reached, or released.
2. **Habits** — recurring actions linked to goals (optional). Surface on **Today** daily until graduated or paused.
3. **Tasks** — one-off actions for today or a future date. Done → off the list, kept in history.

**A typical day:** Optional energy check-in (Good / Low / Rough) → **Today** tab grouped by time of day → mark items done, partial, or skip → quiet celebration → on hard days, only items with a **lighter version** stay visible.

**Adaptation without guilt:** Lighter versions, Do Nothing Mode, partial completion, goal rest, and habit graduation are all first-class — not failure states. No streaks, scores, or overdue shame.

**AI role:** Opt-in helper at creation (talk through a goal, break into habits, suggest tasks) and ongoing Companion. Reflects and asks; never assigns, cheerleads, or diagnoses. User always confirms before save.

---

## App structure

**Main tabs**

| Tab | Purpose |
|-----|---------|
| **Today** | Daily home — habits + tasks by time of day, energy check-in, Coming up (future tasks) |
| **Goals** | Active, Reached, and Resting goals; tap for detail, habits, lifecycle actions |
| **Path** | Present → future journey; graduated habits and reached goals as milestones |
| **Insights** | Weekly/monthly awareness — showed up, partials, patterns (not grades) |
| **Social** | Opt-in public goals (goal network); reactions only |
| **Profile** | Settings, How it works, subscription |

**Key entities → screens:** See [`screens-fields.md`](screens-fields.md) for navigation diagrams, every input field, and what is manual vs AI vs edit.

---

## Naming glossary

| Term | Meaning |
|------|---------|
| **Goal** | Long-term direction; states: active, adjusted, reached, released |
| **Habit** | Recurring action; states: active, paused, graduated, released |
| **Task** | One-off or dated action; archived after completion |
| **Today / daily home** | Primary tab — today's habits and tasks |
| **Daily completion** | Done / partial / skip today — not graduation or goal reached |
| **Lighter version** | Smaller alternative for hard days; needed for Low/Rough filtering |
| **Graduated** | User-confirmed habit "formed" — off Today, on Path |
| **Reached** | Positive goal closure — distinct from released (rest) |
| **Routine trigger** | Optional habit chips (After coffee, etc.) — no location |
| **Check-off / timed** | Just show up (Done/Skip) vs spend time (Done/Partial/Skip) |
| **Why layer** | Private goal reason; resurfaced on low-motivation days |
| **Do Nothing Mode** | Intentional rest day — no reminders |

**Static goal tags:** Health · Energy · Career · Creative · Relationships · Learning · Personal

---

## Core concepts

### Goal
A long-term direction the user is moving toward. Can be vague at start. Optional **static tags** (pick from fixed list — no custom tags). Optional "Why does this matter?" (private, shown in low-motivation moments).

**States:**
| State | Meaning | Shown on Goals tab |
|-------|---------|-------------------|
| **Active** | Working toward this now | Active |
| **Adjusted** | Still pursuing; title, habits, or scope changed | Active |
| **Reached** | User feels they've gotten what they needed — positive closure | Reached |
| **Released** | No longer fits right now — rest, not failure | Resting |

**Reached vs released:** Reached is "I did it" or "I'm living this now." Released is "not for me at the moment." Neither is framed as failure. Both archive the goal from daily focus; history stays in Insights and Path.

**Static tags:** Health · Energy · Career · Creative · Relationships · Learning · Personal

### Habit
A recurring action, optionally linked to a goal. Converts to daily items on Today. Optional **routine trigger** — single-select chips (e.g. After coffee, After waking). No free text, no location permission. **Tracking type:** check-off ("just show up") or timed (target minutes). Can follow stage-wise progression when user wants structure.

**States:**
| State | On Today? | Meaning |
|-------|-----------|---------|
| **Active** | Yes | Daily item surfaces each scheduled day |
| **Paused** | No | Temporary break; user can resume |
| **Graduated** | No | Feels automatic or no longer needs daily prompting — success, not abandonment |
| **Released** | No | Done with this habit (often when goal is released) |

**When is a habit "formed"?** The app never declares this automatically (no streak thresholds, no "21-day badge"). Formation is **user-chosen graduation**: after sustained showing up, a soft prompt may ask whether to keep it daily or move it to the background. User confirms **Graduate** — habit leaves Today, appears as a step on **Path**, and counts in Insights. Staged goals treat **stage completion** as the formation moment for that phase before unlocking the next.

### Task
A one-off or dated action. Goal-linked or standalone. Scheduled for today or a future date. Same tracking types as habits: check-off or timed.

**Lifecycle:** Appears on Today (today) or **Coming up** (future) → user marks done/skip (or partial if timed) → logged in history → removed from active lists. No recurring state. Edit or delete anytime before or after completion.

### Daily completion
What happens **today** when the user taps an item — not the same as graduating a habit or reaching a goal.

- **Check-off items:** Done or Skip. Partial is hidden — doing a micro-version counts as Done.
- **Timed items:** Done, Partial, or Skip. Partial counts as consistency ("showed up a little").
- At creation, user picks: **Just show up** or **Spend time** (minutes field only shown for timed).
- Micro-celebration on done/partial; skip triggers soft check-in (see `copy.md`).

### Showing closure & progress
Where long-term outcomes appear — without streaks, scores, or guilt.

| Moment | Where it shows | Tone |
|--------|----------------|------|
| Daily done/partial | Today tile + micro-celebration | Quiet affirmation |
| Task finished | Drops off Today / Coming up; logged in Insights | Matter-of-fact |
| Habit graduated | Path step unlocked; optional gentle acknowledgment | "Part of your rhythm now" |
| Stage completed | Goal detail stage path + Path tab | Progression, not gamification |
| Goal reached | Goals tab → **Reached** section; Path milestone; monthly recap | Positive closure |
| Goal released | Goals tab → **Resting** section; monthly recap | Neutral rest |
| Ongoing patterns | Insights (weekly/monthly), Path visual | Awareness, not report card |

**Goal detail actions (anytime):** edit · adjust habits · mark as **reached** · **release** (rest) · reactivate from reached/resting.

**Habit detail actions:** edit · pause · **graduate** · release · reactivate.

**Goal health check (day 7–10):** Keep going · adjust (AI suggestions) · let rest — plus, if it fits context, a fourth path: **"This feels close — mark as reached?"** (never forced).

### Daily home (Today tab)
Primary screen — labeled **Today** in the app. Habits and tasks grouped by time of day: Morning, Afternoon, Evening, Whole Day. Actions depend on tracking type: check-off (done/skip) or timed (done/partial/skip), plus add, edit, delete. Future tasks appear in **Coming up**, not in today's timeline.

### Energy level
Daily soft check-in: Good / Low / Rough. Adapts which tasks surface and how much is shown. Not a permanent label.

**Filtering (Low / Rough):** Pending habits and tasks **without** a lighter version are hidden. Already touched items (done / partial / skipped) always stay visible. **Good** shows the full list. See **Lighter versions** below.

### Lighter versions

A **lighter version** is a smaller, specific alternative to a habit or task — used on low-energy days, in the skip flow, and by the AI Companion. **Goals do not have lighter versions** — only habits and tasks on Today.

| Source | When | Quality |
|--------|------|---------|
| **AI at create** | Habit breakdown, task suggest, optional AI-assisted create | Best — specific to the item ("One sip at the sink") |
| **Rule fallback** | Manual create if nothing else provided | Timed >5 min → ~⅓ target minutes; check-off → generic "Micro version" |
| **AI at edit** | Habit/task detail → "Suggest a lighter version" | Refines or replaces after user has lived with the item |
| **User edit** | Optional field on habit/task edit | User writes their own |

**Rules:**
- Not required to save — but without one, the item **disappears on Low/Rough** energy days (intentional).
- Timed items ≤5 min may have no fallback rule; AI or user should add one if the item should surface on hard days.
- Lighter version is **not** a separate habit — it's the same item at a smaller dose. Check-off micro-version counts as **Done**, not Partial.
- Explain once on first skip or first low-energy filter; then just apply silently.

**At create:** AI-assisted paths should **prefill a specific lighter line** when suggesting habits/tasks. Manual create uses rule fallback immediately; user or AI can improve it later in edit.

**At edit:** Optional "Lighter version" field + **"Suggest a lighter version"** (AI, one tap) — user confirms before save.

### AI Companion
Contextual support for habits, tasks, and emotional moments. Recommendations, lighter alternatives, adjustment suggestions. Non-directive tone (motivational interviewing style).

### Creation inputs

**Goal (manual)**
- Required: title
- Optional: why, static tags (multi-select from fixed list)
- Not at create: public/private

**Habit (manual)**
- Required: name
- Visible: time of day, tracking type, target minutes if timed
- Optional: goal link, routine trigger (single-select chips), lighter version (below fold or via AI suggest)
- Primary alt path: pick from AI suggestions ("Break into steps") — includes lighter version

**Task (manual)**
- Required: name
- When: today (default) or pick a date
- Tracking: check-off or timed (+ target minutes if timed)
- Optional: goal link (below fold), lighter version (via edit / AI suggest)
- Time of day: whole day default; shown only when scheduled for today
- Primary alt path: "Suggest for today" chips — includes lighter version when relevant

### AI-assisted creation (opt-in)

Manual create always available. AI helps clarify — never assigns.

| Entity | Entry | Format | Output |
|--------|-------|--------|--------|
| **Goal** | "Not sure yet? Talk it through" | Short conversation (3–5 turns) | Draft goal → user confirms |
| **Habit** | "Help me break this into small steps" (goal detail) / "Need help figuring this out?" (habit form) | 2–3 suggestions from context | User picks one → edit → save (includes lighter version) |
| **Task** | "Suggest for today" | 2–3 tap-to-fill chips (energy-aware) | Pre-fills form → user confirms (includes lighter version when relevant) |

Rules: always skippable; user confirms before save; vague goals valid; bounded (no long intake); Companion tab stays for ongoing chat. Copy in `copy.md`.

---

## Features

v1 scope — all features ship together.

| # | Feature | Notes |
|---|---------|-------|
| 1 | Trust-first onboarding | 4 screens; philosophy + first goal (see `copy.md`) |
| 2 | Authentication | Google, Apple, Email + OTP |
| 3 | Habits & tasks (Today / daily home) | Time-of-day grouping (Morning, Afternoon, Evening, Whole Day); complete / partial / skip / add / edit / delete — actions depend on tracking type |
| 4 | Goals management | Create, edit, delete; states: active, adjusted, reached, released; optional static tags |
| 5 | Goal-bound habits | Habits linked to goals → daily tasks; flexible duration |
| 6 | Flexible tasks | Goal-linked or standalone; today or future date; full edit/delete |
| 7 | AI-powered guidance | Contextual habit/task recommendations; AI Companion for tips and emotional support |
| 8 | Emotion-aware notifications | Daily presence, consistency acknowledgment, inactivity reassurance, extended re-entry — all pressure-free |
| 9 | Insights & progress tracking | Weekly/monthly summaries; visual growth (monthly, tag, yearly views); contextual AI prompts |
| 10 | Profile & settings | Email change, theme (light/dark/system), subscription management, free/gift section |
| 11 | Focus mode | Isolate a single habit or task for a focused session |
| 12 | Haptic feedback | Subtle haptic on habit/task completion |
| 13 | Minimal & stable UI | Subtle premium animations; consistent core identity across updates |
| 14 | Why layer | Optional "Why does this matter?" on goal creation; private; resurfaced in low-motivation moments; updatable after 10 days |
| 15 | Partial completion | Timed: Done / Partial / Skipped. Check-off: Done / Skip (micro-version = Done) |
| 16 | Routine trigger | Optional single-select chips on habit setup — no location permission |
| 17 | Micro-celebrations | Subtle animation, affirming message, and haptic on every completion |
| 18 | Daily energy check-in | Good / Low / Rough → adaptive task display |
| 19 | Goal health check | Day 7–10: continue / adjust (AI suggestions) / release / optionally mark reached |
| 20 | Soft skip check-in | "What made today hard?" → lighter versions, timing shifts, micro-versions, motivational stories |
| 21 | Stage-wise habit progression | Progressive unlocking with intelligent sequencing (e.g., Sleep → Eat clean → Workout) |
| 22 | Present → future self path | Visual identity journey; graduated habits and reached goals build the path |
| 23 | Do Nothing Mode | "Today is a reset day" — no guilt, no reminders; rest is part of the system |
| 24 | Pattern recognition nudges | Silent tracking of skip patterns; gentle nudges to lighten heavy days |
| 25 | Sharing cards (friend edition) | Weekly summary for chosen friends; quiet witnessing, no competition |
| 26 | Monthly recap | Awareness-focused summary: consistency, adjusted/released goals, completed habits, emotional journey |
| 27 | Motivational stories | Contextual real-people stories when demotivated or skipping repeatedly |
| 28 | Goal network | Public goals visible to others; reactions only — no comments or messages |

---

## Key user flows

### First launch
Onboarding (philosophy) → optional first goal → home screen (may be empty or with starter suggestion) → no forced habit creation.

### Daily use
Optional energy check-in → home screen by time of day → complete / partial / skip → micro-celebration on done/partial → skip triggers soft check-in (first time: one-liner from `copy.md`).

### Goal lifecycle
Create (optional why + tags) → bind habits → daily showing up → optional habit graduation / stage completion → day 7–10 health check → continue, adjust, **mark reached**, or release (rest). Reached and released goals leave Today; both remain in history, Insights, and Path.

### Habit lifecycle
Create → surfaces on Today daily → user marks done/partial/skip each day → after sustained showing up, optional prompt to **graduate** (formed / in the background) or **pause** → graduated habits appear on Path, not Today → can reactivate anytime.

### Task lifecycle
Create for today or future → appears on Today or Coming up → done/skip (partial if timed) → removed from active lists → visible in Insights history only.

### Low-motivation recovery
Skip pattern detected OR user opens companion → lighter task versions, timing shifts, micro-versions, motivational stories, why layer resurfaced.

### Intentional rest
Do Nothing Mode → acknowledgment → silence for the day → gentle re-entry notification later.

---

## Voice & copy

**Tone:** Calm, honest, warm — a thoughtful friend, not a coach or clinic.

**Rules:**
- Show the behavior; whisper the philosophy once (first encounter only).
- Never cite studies in product flows.
- Optional "How DamnGoal works" in Settings (~200 words).

All finalized copy lives in `copy.md`.

---

## AI, notifications & insights

**AI companion:** Reflect and ask; offer lighter alternatives; suggest adjustments at health checks. Never cheerlead, diagnose, or assign user types.

**Notifications:** Daily presence, consistency acknowledgment, inactivity reassurance, extended re-entry — all pressure-free. Silent on Do Nothing Mode days. Less is more.

**Insights:** Awareness-focused — consistency patterns, partial completions, adjusted goals, energy trends. No compliance %, streaks, or red/green grades. Journey framing, not report card.

---

## Document map

| File | Role |
|------|------|
| **`how-damngoal-works.md`** | **Primary** — narrative: what it is, how it works, features |
| **`product.md`** (this file) | Detailed spec — tables, rules, lifecycles |
| `copy.md` | UI copy & voice |
| `research.md` | Evidence & citations (internal) |
| `screens-fields.md` | Screen/field reference & mermaid |
| `features.md` | Redirect → `how-damngoal-works.md` / `product.md#features` |

When product changes, update this file first, then align companion docs.
