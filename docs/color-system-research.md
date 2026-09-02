# virtualmase Color-System Research — 2026-09-02

## Finding

There is no universally best-performing website color palette. Color response depends on surrounding colors, task, audience, brand meaning, and cultural context. A defensible production system therefore optimizes for legibility, contextual fit, hierarchy, and testable visitor behavior rather than copying a purported high-converting button color.

## Primary references

- [WCAG 2.2: Contrast Minimum](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html) defines the minimum text-contrast requirements used as the release floor.
- [WCAG 2.2: Use of Color](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html) requires information and state to have cues beyond color alone.
- [WCAG 2.2: Focus Appearance](https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html) informs the visible keyboard-focus treatment.
- Labrecque and Milne, [“Exciting red and competent blue: the importance of color in marketing”](https://doi.org/10.1007/s11747-010-0245-y), supports treating color meaning as dependent on the intended brand personality rather than as a universal performance ranking.
- Hall and Hanna, [“The impact of web page text-background colour combinations on readability, retention, aesthetics and behavioural intention”](https://doi.org/10.1080/01449290410001669932), examines the relationship between foreground/background combinations and user response rather than attributing performance to a single hue.

## Applied palette

| Role | Color | Purpose |
|---|---|---|
| Obsidian | `#171612` | Navigation, footer, and high-contrast controls |
| Mineral green | `#304D4B` | Primary field and owned identity color |
| Aged brass | `#D2AD70` | Active states, paths, emphasis, and project field |
| Limestone | `#E8E0D3` | Main reading background |
| Warm plaster | `#F8F3E9` | Panels and focused reading surfaces |
| Graphite | `#5D5A52` | Secondary text on light surfaces |

The palette is derived from the supplied virtualmase visual studies: warm stone, dark rock, fine brass paths, moss, water, and architectural shadow. Color never carries state alone; active skill tabs also change text, panel content, ARIA state, and SVG position.

## Release test

The palette must retain a Lighthouse accessibility score of 100, visible keyboard focus, zero horizontal overflow at 390–1440 CSS pixels, and no color-only instructions. Conversion performance remains an empirical question for later privacy-respecting field measurement; the release makes no conversion claim.
