# Ronnie Nights Development Notes

This file is a must-read knowledge base for future development on the Ronnie Nights website. It records the important commands, decisions, and gotchas from the current build so future agents can move faster and avoid repeating the same mistakes.

## Project Overview

Ronnie Nights is a Next.js 15 App Router landing page for a boutique cocktail bar and live entertainment venue in Fremantle, Western Australia.

Core stack:

- Next.js 15 App Router
- TypeScript
- Tailwind CSS
- shadcn-style local UI primitives
- Framer Motion
- Lucide Icons

Main implementation files:

- `app/page.tsx` renders the site.
- `components/ronnie-nights-site.tsx` contains the full landing page UI and animation logic.
- `app/globals.css` contains global styles, font imports, helper classes, and theme utilities.
- `components/ui/` contains local shadcn-style primitives.
- `public/images/` contains all public image assets used by the site.

## Common Commands

Install dependencies:

```bash
npm install
```

Start local development server:

```bash
npm run dev
```

Production build verification:

```bash
npm run build
```

Check repository status:

```bash
git status --short --branch
```

Review changes before committing:

```bash
git diff --stat && git diff
```

Commit changes:

```bash
git add <files>
git commit -m "$(cat <<'EOF'
Short commit message

EOF
)"
```

Push to GitHub:

```bash
git push origin main
```

## Build Notes

`npm run build` passes, but Next.js can spend several minutes in the final `Collecting build traces ...` phase. Do not interrupt too early if compile, type checking, and static generation have already passed.

Known install/build noise:

- The terminal may print `/usr/bin/base64 ... Operation not permitted`. This has appeared repeatedly and has not blocked successful commands.
- `npm` may warn about unknown env config `devdir`. This has not blocked the build.
- `npm audit` reported moderate vulnerabilities through Next's internal `postcss`. The suggested `npm audit fix --force` would downgrade/install a breaking Next version, so do not run it blindly.

If `npm install` gets stuck due to a sandbox permission issue in `node_modules`, clean the partial install and reinstall:

```bash
rm -rf node_modules package-lock.json
npm install
```

In Cursor, broader permissions may be needed for cleanup if the sandbox leaves locked partial folders.

## GitHub State

Remote:

```bash
origin https://github.com/jamesraj2050/ronnienights.git
```

Main branch is used directly. Previous push command:

```bash
git push origin main
```

Recent committed work included:

- Hero headline styling update
- Heart image used as the dot above lowercase `i`
- `public/images/heart-dot.png`

## Design System Notes

Primary colors:

- Background: `#080808`, `#121212`
- Gold: `#D4AF37`
- Amber: `#D89B2B`
- Text: white and light gray

Fonts:

- Headings generally use `Playfair Display`.
- Body text uses `Inter`.
- `Calistoga` was tested for the hero but the hero was changed back to `Playfair Display`.
- `app/globals.css` still imports Calistoga and defines `.font-hero`; remove later only if confirmed unused.

Important global classes:

- `.font-display` maps to `"Playfair Display", serif`.
- `.font-hero` maps to `"Calistoga", serif`.
- `.gold-text` creates the gold gradient text.
- `.glass` creates the glassmorphism card style.
- `.section-shell` constrains section width.

## Hero Section Notes

The hero background is a Framer Motion image carousel, not a CSS background anymore.

Hero images:

```ts
const heroImages = [
  "/images/hero-ronnie-1.png",
  "/images/hero-ronnie-2.png",
  "/images/hero-ronnie-3.png",
  "/images/hero-ronnie-4.png",
  "/images/hero-ronnie-5.png"
];
```

The active hero image changes every `4800ms`.

Hero heading currently displays as two forced lines:

```text
For the LOVE
of it!
```

The heart is not an emoji. It is an image:

```text
public/images/heart-dot.png
```

It is positioned as the dot above the lowercase `i` in `it`.

Do not replace it with the original heart emoji unless requested.

## Mobile Navigation Notes

The desktop nav is hidden below `lg`. A mobile hamburger menu was added because the menu was not visible on mobile.

Important behavior:

- Hamburger appears on mobile/tablet widths.
- Uses Lucide `Menu` and `X`.
- Opens an animated dropdown with all nav links.
- Closes when the logo or any nav item is tapped.

If editing the header, preserve this mobile fallback.

## About Section Notes

Mobile layout was corrected to match the requested screenshot:

- Text appears first on mobile.
- Image moves below text on mobile.
- Desktop keeps the split image/content layout.

This is controlled with Tailwind order classes:

```tsx
className="relative order-2 ... lg:order-1"
className="order-1 lg:order-2"
```

Do not accidentally put the image first on mobile again.

## Gallery Notes

The gallery was changed from masonry columns to an even responsive grid so the bottom edges align.

Current gallery uses equal-height cards:

```tsx
className="group block h-72 w-full ... md:h-80"
```

Removed from Gallery:

- `Ronnie3.jpeg` bar-interior image
- Two previously bottom images to fix layout balance

Current gallery image list is defined in `components/ronnie-nights-site.tsx` as `galleryImages`.

## Section Spacing Changes

Several vertical spacings were reduced by request:

- Quote section top spacing reduced: `pt-16 pb-28`
- Gallery top spacing reduced: `pt-16 pb-28`
- Events top spacing reduced by 50%: `pt-14 pb-28`
- Reviews top spacing reduced by 50%: `pt-14 pb-28`
- About mobile top spacing tightened: `pt-20`, desktop remains `lg:py-28`

Check these before increasing section padding globally.

## Typography Adjustments

Hero headline:

- Smaller than original.
- Uses `Playfair Display`.
- Letter spacing increased to `tracking-[0.015em]`.
- Forced into two lines.

Quote section:

- Reduced from very large cinematic text to `text-3xl md:text-5xl`.

Gallery heading:

- Reduced to `text-4xl md:text-5xl`.

Experience heading:

- Reduced to `text-4xl md:text-6xl`.
- User requested it must not be smaller than the Events heading feel.

## Lucide Icon Gotcha

`lucide-react` does not export brand icons like `Instagram` or `Facebook` in this installed version. Inline SVG components were added instead:

- `InstagramIcon`
- `FacebookIcon`

Do not import `Instagram` or `Facebook` from `lucide-react`; the build failed when this was attempted.

## Metadata Notes

`app/layout.tsx` includes SEO metadata and `metadataBase`.

`metadataBase` was added to avoid Next.js Open Graph warning:

```ts
metadataBase: new URL("https://ronnienights.com.au")
```

If the live domain changes, update this value.

## Asset Workflow

User-provided assets are often saved by Cursor outside the project workspace. Copy any needed image into `public/images/` before using it in Next `<Image />`.

Example:

```bash
cp "/path/to/user/asset.png" public/images/name.png
```

Use stable names in `public/images/` rather than long generated upload names.

## Final Reminder For Future Agents

Before making visual changes:

1. Read `components/ronnie-nights-site.tsx`.
2. Check whether the requested section already has mobile-specific classes.
3. Preserve the mobile menu, hero two-line text, heart-dot image, and About mobile ordering unless the user explicitly asks to change them.
4. Run `npm run build` before reporting completion when JSX, imports, images, or TypeScript change.
