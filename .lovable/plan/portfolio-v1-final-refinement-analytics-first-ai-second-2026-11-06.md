# Portfolio V1 — Final Refinement (Analytics first, AI second)

Changes the existing site only. Nothing gets rebuilt from scratch, no new project, no publishing, no DNS changes.

## 1. Pillar order and navigation
- Pillar order everywhere: **01 Data & Analytics, 02 AI, 03 Creative & Design**.
- Nav: Home | Projects | Analytics | AI | Design | Experience | About | Contact, plus the Resume button and social links.
- "Engineering" becomes "AI" in labels, filters and homepage cards. Technical details in project write-ups stay as they are.
- `/engineering` redirects to `/ai`, and `/engineering/ryan-os` redirects to `/ai/ryan-os`.
- The headline stays the same. The intro gets broader so it doesn't read as sports-only.

## 2. Analytics page (main upgrade)
- **Hero:** "Turning complex data into better decisions." plus your supporting copy, with a subtle gold data-flow line drawing behind it (decoration only).
- **Featured work grid:** PGA TOUR Superstore BI (SQL, Snowflake, data modeling, customer analytics, Power BI), Reel Analytics (data quality, comparisons, research, decision support) and GT VIP Sports Valuation, all described at a high level. There's also an "Independent Data Projects" slot, hidden until you add a real project. Future ideas, including the anonymized Sigma Nu workflow, stay unpublished.
- **Analytical approach:** a six-step visual workflow (Question, Collect, Clean, Analyze, Decide, Improve). Each step lists the roles where you actually did it, with a note that not every project used every step.
- **Toolkit by function:** Data querying, Programming and analysis, BI, Statistics and modeling, Data systems, Communication. Each tool links to the role or project where you used it. No ratings, and only tools already confirmed in your resume and experience.
- **Case-study template:** a reusable layout with Problem, Dataset, Contribution, Prep, Method, Tools, Visualization, Results, Limitations and Lessons. It stays off the site until you supply a real study.
- **Visual proof:** one small chart built from made-up numbers, clearly labeled "Illustrative, synthetic data", showing how you would present a segmentation analysis. It contains no employer data and doesn't look like a company dashboard.

## 3. AI page
- Moves to `/ai` with the title "AI". Ryan-OS stays the flagship, with a short list of what it shows: AI-assisted workflows, structured outputs, architecture, data storage, deterministic validation, testing and automation.
- The Ryan-OS case study is kept as it is. Box Score's experiments are labeled "In development".

## 4. Stadium background and original look
- Bring back `projects-bg.png` at about 15% opacity with a gradient fade behind the homepage Featured Projects section. `gt-aerial-stadium.jpg` stays as the alternative, so it's a one-line swap.
- Keep text contrast strong and check it on mobile. Add more gold accents and gentle hover lift on cards, while respecting reduced-motion settings.

## 5. Projects directory (`/projects`)
- Filter by All, Data & Analytics, AI and Creative & Design. Sort by Featured, Newest (verified dates only) and A–Z.
- Every card shows a status badge (Completed, In progress or Coming Soon) and links only to pages or links that exist.
- Uses real project images and the same central projects file.

## 6. Design gallery
- Two filter rows: **Collection** (RHxVisuals, TheGRFXCommittee, ATLFalconsCountry, Gridiron Drive, Other) and **Category**. They work together.
- Fix titles that were generated from file names. Keep natural image proportions, the lightbox and the mobile layout.
- Box Score stays featured as "Box Score — Coming Soon".

## 7. About page personal section
- Endurance sports and the Ironman 70.3 finish in 6:49, personal interests, and selected creative projects.
- Add Instagram and other personal links only if I can verify them in the old site's code. Otherwise I'll ask you for them. Old training goals are not brought back.

## 8. Safety review and closing report
- Re-check that the scouting, Hawks and Big East files stay removed and that nothing on the site links to them.
- Review the resume PDF for employer metrics. I'll flag anything I find instead of editing your resume myself.
- The `.env` file in GitHub holds only the public site connection keys, which are safe to share by design. I'll confirm this and report it. I won't rewrite Git history or change any keys.
- Final check in a browser of every page, on desktop and mobile.

## Technical details
- `site.ts` nav updated; new route `/ai`, `/ai/ryan-os`; `Engineering.tsx` → `AI.tsx`; legacy map gains `/engineering*`.
- `projects.ts`: pillar type becomes `"Analytics" | "AI" | "Design"`, plus `status`, optional `date`, `published` flag.
- New `src/content/analytics.ts` (featured work, approach steps with linked roles, toolkit groups, case studies array, initially empty).
- New components: `ApproachFlow`, `ToolkitGrid`, `AnalyticsCaseStudy`, synthetic chart (inline SVG, no new deps).
- `gallery.ts`: add `collection` field, clean titles; `Gallery.tsx` gets dual filters.
- Update memory: nav order and pillar naming; AGENTS.md rule for analytics content file.
