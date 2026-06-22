# Romeo's Auto Spa — Demo Site (v2, redesigned)

This is an upgraded version of the original demo — same business info, but a
more dynamic, full-bleed layout inspired by premium auto detailing brands.

## What changed from v1
- **Wider layout** — content now spans up to 1480px instead of 1180px, with
  responsive padding that scales with screen size, so it fills the screen
  on bigger monitors instead of leaving large empty margins.
- **Draggable before/after slider** in the hero — drag to compare a dull/swirled
  finish against a corrected one. This is a CSS/JS effect, not a real photo,
  but it's the same interaction style used on high-end detailing sites to
  show paint correction results.
- **Scrolling marquee strip** under the header (service keywords looping).
- **Full-width stat band** (200+ vehicles, 5.0 rating, etc.) instead of a
  small boxed card.
- **Bigger, bolder typography** using `clamp()` so headlines scale with the
  viewport instead of staying a fixed size.
- **Horizontal timeline** for the "how it works" steps instead of a vertical
  list — fills width better on desktop.
- **Pull-quote about section** instead of a plain paragraph block.

## How to update your existing GitHub repo
You don't need a new repo — just replace 3 files in your existing
`romeo-auto-spa-demo` repo:

1. Go to your repo on GitHub
2. Click on `index.html` → click the pencil (edit) icon → select all the
   existing content and delete it → paste in the new `index.html` content →
   **Commit changes**
3. Repeat the same for `styles.css` and `script.js`

**Or, the simpler way:**
1. Delete the old `index.html`, `styles.css`, and `script.js` from the repo
   (click each file → trash icon → commit)
2. Click **Add file → Upload files**
3. Drag in the new versions of all three
4. **Commit changes**

Either way, once committed, go to **Vercel → Deployments → Redeploy** (or it
may auto-redeploy within a minute since it's connected to GitHub).

## Notes
- The slider, marquee, and stat numbers are all demo content — swap the
  numbers in the stat band and the review names whenever you get real data
  from Romeo.
- Everything is still plain HTML/CSS/JS — no build step, no new tools needed.
