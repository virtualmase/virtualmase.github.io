# virtualmase.github.io

The public home of [virtualmase](https://virtualmase.github.io/).

virtualmase is an open workshop for practical skills, technical work, and the lessons that survive contact with real projects. This repository publishes the root site that connects those pieces and gives each one a clear place to live.

The site is intentionally small. It is built with HTML, CSS, SVG, and vanilla JavaScript, published directly through GitHub Pages, and designed to remain understandable without a framework or build system standing between the source and the page.

## What this site is for

The root site has three jobs:

1. **Orient.** Give a new visitor a clear picture of what virtualmase is and where to start.
2. **Teach.** Surface reusable skills for prototyping, building, cleaning up, sharing, maintaining, and studying real work.
3. **Connect.** Point to projects, references, field guides, and small utilities without collapsing them into one product or one claim.

It is a directory with an editorial point of view, not a landing page for everything we have ever made.

## The workshop

The main collection is [`lifecycle-skills`](https://github.com/virtualmase/lifecycle-skills), a set of working guides organized around moments that recur across projects.

| Skill | Use it when you need to |
|---|---|
| **Prototype** | test an important assumption before committing to a full build |
| **Builder** | turn a reviewed plan into tested, reviewable work |
| **Sweeper** | remove old work, reduce clutter, and verify the cleanup |
| **Grower** | help a worthwhile project reach the people it serves |
| **Maintainer** | keep released work healthy and understandable |
| **Experience Research** | study a product or journey and turn observations into improvements |

The skills are not a mandatory process. They are small methods meant to be inspected, adapted, tested, and improved.

## Projects and references

The root site also connects work that has its own purpose and boundary.

### [AI Mastery](https://virtualmase.github.io/ai-mastery/)

A learning resource for building technical judgment through software, systems, architecture, and deliberate practice.

### [ARM Reference](https://autonomousresourcemanagement.com/)

A reference for reasoning about who may act, which resources may be used, what limits apply, and when intervention is required.

### [Public practice](https://autonomousresourcemanagement.com/practice/)

Source-linked work records that make completed actions, supporting evidence, and remaining uncertainty easier to inspect.

### [Earthward Foundry](https://virtualmase.github.io/earthward-foundry/)

A field guide for clearer, more reviewable quality decisions in physical work.

## Small utilities

Two focused tools sit beside the larger projects:

- [`action-boundary-brief`](https://virtualmase.github.io/action-boundary-brief/) helps define access, limits, oversight, and stop conditions before a consequential action.
- [`ai-change-record`](https://virtualmase.github.io/ai-change-record/) records what changed, why it changed, who is accountable, what was checked, what should be watched, and how to roll back after a material change.

They solve different problems on opposite sides of a change: one before action, one after.

## How we work

The site reflects the same habits we want the projects to encourage:

- start with the smallest useful version
- make important decisions visible
- prefer clear names over clever abstractions
- keep consequential changes reviewable
- test the unusual cases, not only the happy path
- document what happened and what remains uncertain
- keep a way back when change carries real cost
- remove things that no longer earn their place

The goal is not minimalism for its own sake. The goal is work that another person can understand, inspect, maintain, and improve.

## Repository structure

The published site is deliberately conventional:

```text
.
├── index.html
├── styles.css
├── site.js
├── 404.html
├── assets/
├── docs/
├── scripts/
├── manifest.webmanifest
├── llms.txt
└── README.md
```

There is no application framework to install before reading the source.

## Run it locally

From the repository root:

```bash
python3 -m http.server 8080
```

Then open:

```text
http://localhost:8080/
```

## Validate a change

Run both repository checks before publishing:

```bash
node scripts/validate-static.mjs
node scripts/test-site-js.mjs
```

The static validator checks the files and boundaries the public directory depends on, including canonical metadata, required destinations, accessibility basics, source assets, and the site's no-storage and no-network expectations.

The JavaScript check exercises the small amount of client-side behavior used by the site.

Release notes and manual checks live in [`QA.md`](./QA.md).

## Publishing

This is the special GitHub Pages user-site repository for `virtualmase`, so the `main` branch publishes to:

**https://virtualmase.github.io/**

A normal release is:

1. make the smallest complete change
2. preview it locally
3. run the validation scripts
4. review affected routes and links
5. commit to `main`
6. verify the live page after GitHub Pages finishes building

If a release introduces a problem, prefer reverting the responsible change over adding a redirect or another layer of behavior to hide it.

## Boundaries

The root site helps people find work. It does not make every linked project part of one system, transfer authority between independent properties, or turn a reference, field guide, or public record into a certification claim.

Each linked project should be judged by its own source, documentation, evidence, and stated limits.

## Contributing

If you find a broken route, unclear explanation, accessibility problem, or a place where the directory no longer matches the work it points to, open an issue with enough detail to reproduce or inspect the problem.

For changes to a specific project or skill, use that project's repository when possible. Keeping responsibility close to the source makes changes easier to review and maintain.

---

**virtualmase**

*build quietly.*