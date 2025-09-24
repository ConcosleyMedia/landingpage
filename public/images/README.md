# Image Map & Templates

All imagery for the landing funnel lives in `public/images`. The React components reference specific filenames — drop your production artwork in this folder using the names below and Vite will serve them automatically.

## Quick Reference

| Section | Filename | Suggested Size | Description |
| --- | --- | --- | --- |
| Hero | `hero.png` | 1280×720 | Course or dashboard hero mockup. |
| Modules | `module1.png` – `module7.png` | 620×720 | Visual for each day’s workflow (screen grabs, diagrams, etc.). |
| Bonuses | `bonus1.png` – `bonus4.png` | 560×560 | Covers or previews for the bonus assets. |
| Perks | `perk1.png` – `perk4.png` | 640×520 | Visuals for the extra perks / playbooks. |

## Using the Templates

A starter SVG for each image type sits in [`public/images/_templates`](./_templates). Duplicate the one you need, customize it in Figma/Illustrator (or export as PNG), and rename it to the exact filename above. Example workflow:

1. Open `public/images/_templates/hero-template.svg` in your design tool.
2. Replace the placeholder with your real artwork and export it as `hero.png` into `public/images`.
3. Repeat for each module/bonus/perk slot (`module-template.svg`, `bonus-template.svg`, `perk-template.svg`).

> Tip: keep exported images under ~400 KB each so the mobile experience stays snappy.

## Final Checklist

- ✅ Every file listed above exists in `public/images` with the correct name and extension.
- ✅ Images are exported at 2× resolution (Retina-friendly) where possible.
- ✅ Transparent backgrounds work great against the gradient backdrop, otherwise use the provided dark fill.

Once the files are in place, rebuild (`npm run build`) or let Vercel redeploy; no code changes required.
