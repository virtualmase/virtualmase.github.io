# Virtualmase root property

This repository is the **user-site root** for `https://virtualmase.github.io/`. It exists to resolve a simple reader question:

> Where does Virtualmase’s public systems work live, and which property should a reader use first?

It is a portable static directory built from HTML, CSS, SVG, and minimal vanilla JavaScript. It is deliberately distinct from the AI Mastery learning property, the Autonomous Resource Management reference property, the public-practice index, and the source-ready participation interface.

## Property boundary

| Property | Reader task | URL | Status |
|---|---|---|---|
| Virtualmase root | Choose the right public route | `https://virtualmase.github.io/` | Static GitHub Pages user site |
| AI Mastery | Learn systems concepts | `https://virtualmase.github.io/ai-mastery/` | Published learning property |
| ARM reference | Inspect cited definition and governance context | `https://autonomousresourcemanagement.com/` | Published reference property |
| Public practice | Inspect source-linked work records | `https://autonomousresourcemanagement.com/practice/` | Published reference sub-route |
| Participation source | Review contribution design and governance | GitHub source route | Source-ready; hostname owner-gated |

The root property uses only its own canonical URL. It does not redirect readers, set cross-domain canonical tags, duplicate destination content, collect data, or make certification claims.

## Local preview and validation

```bash
python3 -m http.server 8080
node scripts/validate-static.mjs
node scripts/test-site-js.mjs
```

Open `http://localhost:8080/` for a local preview. The static validator has no package dependencies and fails if the directory’s canonical, property destinations, accessibility basics, source files, or no-network/no-storage boundary regress.

## Publishing and rollback

GitHub Pages publishes the `main` branch of this special user-site repository. A rollback is a revert of the release commit followed by the normal GitHub Pages build; do not redirect the root to an unrelated property as a substitute for a corrected root page.

The deployment owner is the repository owner. A Maintainer should check the live root response, visible routes, destination links, and 404 behavior after any public release.
