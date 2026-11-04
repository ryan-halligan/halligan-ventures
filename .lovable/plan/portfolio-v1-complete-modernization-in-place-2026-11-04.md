# Portfolio V1 — Complete Modernization (in place)

Update this existing site. No new project, no domain purchase, no DNS changes, no auto-publish.

## 1. Confidentiality cleanup (first)
- Delete from public files: `colorado-scouting-report.pdf` (scouting report), `hawks-case-competition.pdf` (Hawks deliverable), `big-east-revenue-sharing.pdf` (unapproved research). Deleting is required — hiding from navigation still leaves them downloadable.
- Audit all 208 images: remove anything that shows Reel Analytics reports/boards, Hawks or US Soccer slides, internal dashboards, or NDA documents.
- Rewrite Reel Analytics, GT Football, SBC/Hawks and VIP pages as high-level role descriptions; remove financial/impact claims and links to deleted files.

## 2. Structure and navigation
`Home | Engineering | Analytics | Design | Experience | About | Contact`, mobile menu included. Education folds into About/Experience (minors kept). Old routes redirect to their new homes so links never break.

## 3. Home
Headline "Building intelligent systems that turn data into decisions.", identity "Engineering • Analytics • Creative", real headshot, three pillar cards, featured work (Ryan-OS, PGA TOUR Superstore BI, RHxVisuals, Box Score — Coming Soon). Remove "seeking internship" style wording.

## 4. Pillars
- **Engineering & AI**: Ryan-OS flagship case study from the public GitHub case-study repo (Next.js, TypeScript, Supabase/Postgres, model APIs, GitHub Actions; 41 offline calendar acceptance checks, described as such). Box Score's technical experiments mentioned as in development.
- **Data & Analytics**: PGA TOUR Superstore BI (SQL, Snowflake, Power BI — high-level only), Reel Analytics and GT Football as experience summaries, public-safe skills. No fake case studies.
- **Design**: large masonry gallery of existing authentic artwork (RHxVisuals swaps/comps/projects, Gridiron Drive, Falcons Country, TGC, posters), filters (Sports Graphics, Branding & Identity, Social Media & Content, Digital Design), fullscreen lightbox with optional captions. Prominent Box Score "Coming Soon" card; hidden placeholder slots in config for future assets.

## 5. Experience
PGA TOUR Superstore (BI Intern, Summer 2026); GT Football Player Personnel Intern (Jan 2026–Present); Reel Analytics (Scouting & Data Analytics Intern, Jan–Dec 2025); GT Football Student Equipment Manager (Jul 2024–Apr 2026); selected leadership/research (Sigma Nu, SBC, VIP). Concise bullets.

## 6. Design
Charcoal, off-white, restrained gold accent; modern display + body type; generous spacing; subtle transitions respecting reduced motion. Keep RH logo and natural (uncropped) image ratios.

## 7. Editable content
One content file each for projects, experience, and gallery items (order, captions, categories, links) so updates need no layout work.

## 8. Free URL and QA
- Check whether `ryanhalligan.lovable.app` is available and show you the result before changing anything; update SEO/canonical metadata to match.
- Remove the AI-agent (MCP) server added earlier since the brief asks for no unnecessary backend — tell me if you want it kept.
- QA in a browser: every page, images, nav, mobile layout, links, and confirm deleted files return 404.

## Technical details
- New routes: `/engineering`, `/engineering/ryan-os`, `/analytics`, `/design`, `/experience`, `/about`, `/contact`; legacy `/work/*` and `/education` redirect.
- Content in `src/content/*.ts`; gallery reuses existing `src/assets` imports.
- Update memory: theme palette and navigation order change; record structure rule in AGENTS.md.
