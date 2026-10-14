# Ryan Halligan — Portfolio V2

## Goal and non-negotiable boundaries
Build a recruiter-focused portfolio following the uploaded **PROJECT: RYAN HALLIGAN — PERSONAL PORTFOLIO V2** brief, rather than reskinning the old site.

- **Separate new Lovable project**, confirmed by Ryan. Do not rebuild in this project, alter the existing GitHub repository, publish changes to the current site, or change DNS.
- Keep **ryanhalligan.me** live until V2 is reviewed and explicitly approved.
- Contact: **rhalligan@gmail.com**, confirmed by Ryan.
- Use **public-safe summaries only**. Exclude confidential employer metrics, internal reports, athlete/customer records, unpublished datasets, and unauthorized group artifacts.
- Use Ryan’s genuine headshot, preserve image proportions, and avoid fabricated visuals or claims.

## 1. Start in the correct project
Create a **blank new Lovable project**, not a remix of the old technical foundation. This chat is attached to the existing project; creating the separate blank project requires Ryan’s action in Lovable. Carry the approved plan, original brief, supplied resume, and genuine photograph into that new project before implementation.

Use the existing site only as a factual/asset reference. Do not copy its bulk galleries, confidential documents, deployed functions, credentials, or old project configuration. Do not connect V2 to the old website repository. GitHub sync, if desired, must use a separate new repository.

## 2. Evidence-led content
Use the September 14, 2026 resume as the primary source for roles, dates, education, and leadership. Use the public Ryan-OS README, CASE_STUDY.md, and VALIDATION.md for engineering claims; these were successfully read through **Ryan’s GitHub API** connection.

Confirmed updates include:
- PGA TOUR Superstore — Business Intelligence Intern, **June–July 2026**; public-safe summaries of Snowflake/SQL customer modeling and Power BI reporting, without commercial counts or outcome percentages.
- Georgia Tech Football — Player Personnel Intern, **January 2026–Present**.
- Georgia Tech Football — Student Equipment Manager, **July 2024–April 2026**, correcting the old site’s December 2025 end date.
- Reel Analytics — Scouting & Data Analytics Intern, **January–December 2025**.
- Georgia Tech Sports Business Club — VP of Marketing, Project Team Lead, **August 2024–Present**; distinguish student competitions from employment and avoid implied client adoption.
- BS Business Administration, Information Technology Management; **Computing & Business (Denning T&M Program)** first, then **Business of Sport & Entertainment**; Denning program and formal Dow Chemical – P.C. McCutcheon award wording from the resume.

Maintain an internal content checklist with evidence sources, approval state, missing inputs, and completed versus planned functionality. Do not expose draft notes on the public site.

## 3. Visual direction and homepage
Use a restrained **charcoal, soft off-white, muted teal** palette, contemporary sans-serif display headings, Inter body text, and sparing monospace metadata. Keep generous whitespace, readable line lengths, subtle borders, and purposeful motion with reduced-motion support.

Build the homepage in this order:
1. Ryan’s identity and the brief’s exact headline: **“Building intelligent systems that turn data into decisions.”** Use its prescribed introduction, **Georgia Tech · Atlanta, GA · Class of 2028**, and **“Seeking Summer 2027 internships.”** Provide Explore My Work, View Resume when approved, GitHub, and LinkedIn.
2. **Selected Work**, with functional All / AI & Engineering / Data & Analytics / Research filters.
3. Concise relevant experience preview.
4. **Technical Toolkit**, connecting verified technologies to evidence rather than ratings or a logo wall.
5. **“A little about me.”** First-person education, engineering/data interests, research involvement, and selected recognition; endurance interests only as a small human detail.
6. Direct email and professional links, with prominent resume access once public distribution is cleared.

Use authentic project material and a readable architecture visual, not stock imagery, fake terminal output, fabricated charts, or generated screenshots. Keep the first screen unframed and show the start of the next section.

## 4. Projects and case studies
Cards show role, problem, verified tools, implementation highlights, evidence where available, accurate status, and only working approved links.

| Project | Initial presentation |
|---|---|
| **Ryan-OS** | Flagship; complete public technical case study, clearly separate from the private application. |
| **Sports Creator Intelligence** | R&D / In Development summary of the shadow-only research question. Separate research areas from implemented capabilities; no invented stack, production workflow, or SaaS claim. Keep detailed page draft until implementation evidence is supplied. |
| **Football Analytics** | Public-safe experience/process summary. Reusable analytical case-study framework kept internal until safe sources, methods, and demonstrable findings are available. No employer reports or grades. |
| **Business Intelligence** | Resume-supported internship summary using Snowflake, SQL, and Power BI. Detailed case study remains draft until approved specifics or sanitized artifacts are supplied. |
| **Sports Business Research** | Internal draft until publication permission, sources, contributions, and teammate/faculty attribution are supplied. Do not display unauthorized research figures or a fake case-study link. |

Aim for four evidence-supported homepage previews initially; accuracy takes precedence over filling all five slots. Only Ryan-OS receives a complete technical case-study page initially. Cards without complete case studies must not masquerade as finished work or show dead buttons.

### Ryan-OS page
Cover Overview, Problem, Architecture, My Approach, AI Integration, Reliability & Validation, Technical Tradeoffs, Results & Limitations, and What I Would Improve Next. Include an accessible architecture/data-flow diagram and expandable implementation detail.

Explain structured capture, transcription review, classification, validated persistence, task-ID grounding, and cached calendar ingestion. Distinguish probabilistic language interpretation from deterministic checks. Attribute **41 passing offline calendar acceptance checks** to the published evidence—not model accuracy, production tests we ran, or measured time savings. Separate rerun calendar evidence, public guard tests, and historical capture checks.

Public demo imagery must be labeled **synthetic/illustrative**; the repository itself describes its demo as an illustrative presentation, not a screenshot of live private data. Do not invent measured relevance, calibrated confidence, productivity gains, or access to the private application.

## 5. Experience, About, navigation, and contact
Provide Work, Experience, About, Resume, and Contact navigation; dedicated `/experience`, `/about`, and `/contact` views alongside homepage previews. Include Back navigation on subpages and scroll-to-top on route changes.

Use concise role summaries and only supported accomplishments; do not pad roles to an arbitrary bullet count. Prioritize BI, personnel analytics, and engineering relevance; place selected leadership separately. Keep degree and minors explicit, never imply a Computer Science degree.

Use working mailto contact rather than a decorative delivery form. Verify GitHub and LinkedIn links. Resume access should be prominent and work from navigation, homepage, and contact.

**Resume privacy gate:** the supplied PDF contains commercial customer counts and employer outcome metrics. Ryan chose public-safe summaries only. Prepare the resume control and file slot, but do not distribute that unredacted PDF publicly until Ryan supplies a public-safe PDF or explicitly clears distribution of this exact resume. Do not silently edit the resume or fall back to the old version.

## 6. Technical implementation
- Fresh **React + Vite + TypeScript**, Tailwind and accessible existing-style UI primitives supported by Lovable. Next.js belongs in Ryan-OS’s documented stack, not this site’s framework.
- Reusable navigation, project preview, case-study, timeline, toolkit, and metadata components.
- Central editable content configuration for roles, projects, technology evidence, statuses, links, availability, resume, photo, and featured ordering.
- Public routes: `/`, `/projects`, `/projects/ryan-os`, `/experience`, `/about`, `/contact`. Activate the brief’s other `/projects/*` routes only when sufficient approved content exists.
- No authentication, static-content database, model calls, unnecessary paid integrations, or browser-side GitHub credentials. Use GitHub for read-only verification; the published site can use approved static content and ordinary links without a runtime API connection.
- Preserve the old project’s MCP setup untouched. A replacement agent integration is outside this V2 brief and must not be copied with outdated facts or confidential links.
- Semantic CSS tokens for all colors/shadows; optimized real assets via the asset flow; keyboard-accessible filters and expandable sections.
- Unique page titles/descriptions, matching Open Graph/Twitter metadata, canonical URLs, sitemap, robots, and Person structured data. Final production canonical targets change only at the approved domain cutover. Use hosting’s social preview unless Ryan supplies an approved absolute image URL.
- Record structural decisions in the new project’s AGENTS.md and maintain a concise implementation roadmap.

## 7. QA and delivery
Verify desktop, tablet, and mobile layouts; no horizontal overflow, overlapping text, image distortion, layout shifts, inaccessible controls, or distracting motion. Exercise filters, direct routes and refresh, navigation, Back buttons, external links, and approved resume download end-to-end.

Check automated content rules for draft exclusion, approved-link gating, dates/statuses, and the distinction between acceptance checks and model-quality claims. Run relevant tests and check build/runtime signals before claiming completion.

Audit every published statement for evidence, confidentiality, endorsement implications, verified technologies, and completed/planned status. Do not copy the old site’s scouting PDF or unapproved VIP/Hawks artifacts. The existing site has a linked scouting report; leaving the old site untouched does not establish publication clearance for it.

Deliver a reviewable V2 preview, concise implementation summary, and prioritized remaining-input checklist. **Do not publish, connect ryanhalligan.me, or modify DNS without explicit approval.**

## Remaining inputs, in priority order
1. **Separate blank Lovable project** to implement this plan without changing the existing site/repository.
2. **Public-safe resume PDF or explicit distribution permission** for the supplied PDF; blocks public resume download, not the rest of the site.
3. Safe implementation evidence for Sports Creator Intelligence and approved analytical artifacts for Football Analytics/BI; blocks detailed case-study publication, not honest summaries.
4. Publication authorization, contribution details, and attribution for VIP/Hawks research; blocks that project’s public page.
5. Explicit approval after review for publishing and the eventual domain cutover.