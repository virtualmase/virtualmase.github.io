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

The source is published to the special `virtualmase/virtualmase.github.io` user-site repository at commit `f8f80ba`. GitHub Pages is enabled from `main` and reports status `built` at `https://virtualmase.github.io/`. The public root now renders the directory title, atlas mark, property routes, independent-property boundary, and accessible primary navigation, replacing the prior account-root 404.

The first release carried a stale source-ready status line because the production build completed during the release check. That wording is corrected in the follow-up source update before final release verification. No custom domain, DNS, analytics, Search Console, Vercel, or cross-domain canonical change occurred.

The corrected production page was verified with a cache-bypassing URL after GitHub Pages again reported status `built`. It now visibly identifies the root directory as published from the source-controlled GitHub Pages route. The account-root 404 recovery and status correction are both complete.
