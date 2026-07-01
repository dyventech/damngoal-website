# Privacy Policy

**Effective date:** July 1, 2026  
**Last updated:** July 1, 2026

DamnGoal (“**DamnGoal**,” “**we**,” “**us**,” or “**our**”) is operated by **DyvenTech**. This Privacy Policy explains how we collect, use, disclose, and protect information when you use the DamnGoal mobile application and related services (collectively, the “**Service**”), including our website at [https://damngoal.app](https://damngoal.app) and API at [https://api.damngoal.app](https://api.damngoal.app).

By using the Service, you agree to this Privacy Policy. If you do not agree, please do not use the Service.

---

## 1. Who we are

**Data controller:** DyvenTech  
**Contact:** [privacy@damngoal.app](mailto:privacy@damngoal.app)  
**Product:** DamnGoal — a calm goal, habit, and task companion for iOS and Android.

---

## 2. Information we collect

### 2.1 Information you provide

| Category | Examples | Why we collect it |
|----------|----------|-------------------|
| **Account** | Email address, sign-in method (email, Google, or Apple) | Create and secure your account |
| **Profile** | Time zone, theme and haptics preferences, onboarding status | Personalize the app and schedule daily views correctly |
| **Goals & planning** | Goal titles and descriptions, habits, tasks, adjustments, health-check answers | Core product functionality |
| **Daily journal** | Completions, partial/skipped actions, energy check-ins, rest days, skip reflections, focus sessions | Track progress without guilt-based metrics |
| **Companion (AI)** | Chat messages you send, and structured inputs for goal/habit/task suggestions | Provide AI guidance and drafts you can confirm |
| **Witness (optional)** | Goals you choose to make public, reactions you send or receive | Opt-in community sharing — never on by default |
| **Notification preferences** | Push/email toggles, quiet hours, reminder tone | Honor how you want to be reminded |
| **Support** | Information you send if you contact us | Respond to your request |

We do **not** require a display name. Your email is used for authentication and account-related communication.

### 2.2 Information collected automatically

| Category | Examples | Why we collect it |
|----------|----------|-------------------|
| **Device & app** | App version, platform (iOS/Android), device identifier used for analytics before sign-in | Operate the app, diagnose issues, measure product usage |
| **Usage analytics** | Screen views, feature interactions, enums (e.g. energy level, outcome type), internal entity IDs | Understand what helps people stay connected to their goals |
| **Technical logs** | Error and diagnostic logs (may include device/app metadata) | Security, reliability, and debugging |
| **Sync metadata** | Timestamps, sync cursors, device id for offline sync | Keep your data consistent across devices |

**What we deliberately avoid in analytics:** we design our analytics so that events do **not** include the text of your goals, journal entries, or companion messages. Analytics uses categories, counts, and internal IDs — not your personal writing.

### 2.3 Information from third-party sign-in

If you sign in with **Google** or **Apple**, we receive information from that provider (such as a verified email address and a stable provider subject id) to create or link your DamnGoal account. We do not receive your Google or Apple password.

### 2.4 Local storage on your device

The app stores a local copy of your data (for offline use) and stores authentication tokens in your device’s secure storage. This local data is cleared when you sign out of your account on that device.

---

## 3. How we use information

We use information to:

- Provide, maintain, and improve the Service
- Authenticate you and keep your account secure
- Sync your data between your device and our servers
- Power the **Companion** AI features (see Section 5)
- Send **one-time passcodes** and optional **email notifications** you enable
- Operate optional **Witness** sharing when you turn it on
- Measure aggregated product usage and fix bugs
- Comply with law and protect our users and the Service

We do **not** sell your personal information. We do **not** use your goal content to train our own models for unrelated purposes.

---

## 4. Witness sharing (opt-in)

Goals, habits, and journal notes are **private by default**.

If you enable **Witness** and mark a goal as public:

- A **summary** of that goal may appear to other signed-in DamnGoal users in the Witness feed
- Other users may leave a limited reaction (e.g. encouragement-style reactions)
- We do **not** show live activity feeds, streaks, or real-time scores

You can turn Witness off or make goals private again at any time. Content you shared while public may remain visible to others until you change those settings.

---

## 5. AI Companion processing

When you use Companion chat or AI-assisted flows (clarify goal, suggest habit/task):

- Your **messages** and relevant **context** (such as active goals, today’s habits/tasks, completions, and energy level) are sent to our backend
- Our backend uses **Google Cloud Vertex AI (Gemini)** to generate responses
- **Companion messages** are stored in your account so you can read conversation history and sync across devices

Do not share sensitive information (health diagnoses, financial account numbers, passwords, etc.) in Companion chat unless you are comfortable with it being processed by our AI subprocessors for the purpose of providing the feature.

---

## 6. How we share information

We share information only in these situations:

| Recipient | Purpose |
|-----------|---------|
| **Service providers** | Hosting, database, email delivery, analytics, and AI inference — only as needed to run the Service |
| **Other DamnGoal users** | Only what you choose to make public via Witness |
| **Legal & safety** | If required by law, court order, or to protect rights, safety, and integrity of the Service |
| **Business transfer** | In connection with a merger, acquisition, or sale of assets, with notice where required |

### Subprocessors we use today

| Provider | Role | Location (typical) |
|----------|------|------------------|
| **Cloudflare** | API hosting and edge infrastructure | Global / US |
| **CockroachDB / PostgreSQL-compatible database** | Encrypted data storage | As configured for production |
| **Google Cloud (Vertex AI)** | AI Companion inference | US (e.g. `us-central1`) |
| **Brevo** | Transactional email (e.g. sign-in codes) | EU / global |
| **PostHog** | Product analytics and optional app logs | US (`us.i.posthog.com`) |
| **Google** | Google Sign-In | Global |
| **Apple** | Sign in with Apple | Global |
| **Google Play / Apple App Store** | App distribution and (if applicable) subscription management | Per store policies |

We require service providers to handle data only on our instructions and subject to appropriate safeguards.

---

## 7. Data retention

- **Account data** is kept while your account is active.
- **Companion messages** and **planning/journal data** are kept to provide the Service and your history.
- **Analytics** is retained according to our PostHog project settings (aggregated usage data).
- **Authentication tokens** expire on a rolling basis (short-lived access tokens; longer-lived refresh tokens that can be revoked on sign-out).
- When you **delete your account** or request deletion, we delete or anonymize your personal data from our production systems within a reasonable period, except where we must retain limited information for legal, security, or backup purposes.

Backup copies may persist for a limited time before being overwritten.

---

## 8. Your choices and rights

Depending on where you live, you may have the right to:

- **Access** a copy of your personal data
- **Correct** inaccurate data
- **Delete** your account and associated data
- **Export** your data (portability)
- **Object to or restrict** certain processing
- **Withdraw consent** where processing is based on consent (without affecting prior lawful processing)

### Account deletion

You can request account deletion by emailing **[privacy@damngoal.app](mailto:privacy@damngoal.app)** from the address linked to your account. We will verify your request and delete your account data from our servers.

*(When in-app account deletion is available, you may also delete your account from Profile → Account.)*

### Marketing

We do not send promotional email by default. Transactional messages (e.g. sign-in codes) are necessary to use email sign-in.

### Analytics

Production builds use analytics to improve the product. You may contact us if you have questions about analytics data linked to your account.

---

## 9. Security

We use technical and organizational measures appropriate to the data we process, including:

- Encryption in transit (HTTPS/TLS)
- Encrypted database connections in production
- Hashed storage of one-time sign-in codes
- Hashed refresh tokens server-side
- JWT-based API authentication

No method of transmission or storage is 100% secure. Please use a strong, unique email account and keep your device secure.

---

## 10. International transfers

We and our subprocessors may process data in the **United States** and other countries. If you are in the European Economic Area, UK, or Switzerland, we rely on appropriate safeguards (such as Standard Contractual Clauses where applicable) for transfers outside your region.

---

## 11. Children

DamnGoal is **not directed to children under 13** (or the minimum age required in your country). We do not knowingly collect personal information from children. If you believe a child has provided us data, contact **[privacy@damngoal.app](mailto:privacy@damngoal.app)** and we will delete it.

---

## 12. California privacy rights (CCPA/CPRA)

If you are a California resident, you have the right to know what categories of personal information we collect, request deletion, and not be discriminated against for exercising your rights. We do **not** sell or share personal information for cross-context behavioral advertising as defined under California law.

To exercise rights, email **[privacy@damngoal.app](mailto:privacy@damngoal.app)**.

---

## 13. European privacy rights (GDPR)

If you are in the EEA or UK, our lawful bases include:

- **Contract** — to provide the Service you signed up for
- **Legitimate interests** — security, analytics, and product improvement (balanced against your rights)
- **Consent** — where required (e.g. optional features you enable)

You may lodge a complaint with your local supervisory authority. We encourage you to contact us first so we can help.

---

## 14. Changes to this policy

We may update this Privacy Policy from time to time. We will post the new version on [https://damngoal.app/privacy](https://damngoal.app/privacy) (or equivalent URL) and update the “Last updated” date. Material changes may be notified in-app or by email where appropriate.

---

## 15. Contact us

**DyvenTech — DamnGoal**  
Email: [privacy@damngoal.app](mailto:privacy@damngoal.app)  
Website: [https://damngoal.app](https://damngoal.app)

---

*This document is provided for your website and app store listings. It is not legal advice. Have a qualified attorney review it for your jurisdiction, corporate entity, and data flows before publishing.*
