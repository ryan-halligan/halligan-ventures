# Project rules

- Editable portfolio content (profile, projects, experience, gallery) lives in `src/content/*.ts`; pages only render it. Why: Ryan updates content without touching layout.
- Gallery/project images are referenced by filename and resolved through `src/lib/assets.ts`. Why: adding art means dropping a file in `src/assets` and one content line.
- Never place confidential documents in `public/`; anything there is publicly downloadable even if unlinked.
