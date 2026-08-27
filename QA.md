# Release QA — Virtualmase Public Directory

## Local visual review — 2026-08-27

The first local-preview attempt on port `8093` was discarded because that port was already owned by an unrelated legacy site. A second preview on a confirmed-free port served the actual root-directory source and rendered the intended light editorial atlas composition: the high-contrast Virtualmase atlas mark, asymmetric directory metadata rail, original SVG property atlas, clear property-question route cards, explicit operating boundary, and expanded operating footer.

The root directory is a **route map**, not a content or canonical consolidation layer. Visible copy distinguishes AI Mastery learning, ARM reference, public practice, and participation source. It marks the root directory source as awaiting owner-approved publication and the portal hostname as owner-gated.

## Static checks

| Check | Result |
|---|---|
| Required files, favicon and social fallbacks, manifest, metadata, JSON-LD, footer routes, property boundaries, and prohibited runtime patterns | Passed with `node scripts/validate-static.mjs` |
| Accessible menu behavior and no visitor storage | Passed with `node scripts/test-site-js.mjs` |
| 48×48 atlas favicon readability | Checked; the cobalt atlas route and rust reference point remain recognizable without tiny text. |

## Publication boundary

The source is not yet published to the special `virtualmase/virtualmase.github.io` user-site repository. Publishing that repository would resolve the account-root 404 at `https://virtualmase.github.io/`; it requires the previously requested owner confirmation before the source is pushed and GitHub Pages is enabled.
