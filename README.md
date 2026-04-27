# John Doe — Personal About Page (Demo)

A **frontend-only** “about me” site for a fictional **John Doe**: warm editorial typography, a sticky side rail on large screens, a **numbered list of mock projects** with client-side tag filtering, and a decorative contact block. No backend, email, or analytics.

## Live Demo

Coming soon.

## Video demo

Screen recording of the UI in motion (WebM, committed in this repo):

<video src="public/videos/john-doe-about.webm" controls playsinline muted width="100%"></video>

If the player does not load in your viewer, open [`public/videos/john-doe-about.webm`](./public/videos/john-doe-about.webm) locally or via **Raw** on GitHub.

## Features

- Literata + DM Sans pairing, paper-toned background (`#faf7f2`)
- Two-column layout on desktop: quiet rail + main column; single column on mobile
- Drop-cap intro paragraph and pull-quote rail copy
- **Mock projects** from `src/data/mockProjects.js` with filter chips (All + per-tag)
- Illustrative timeline and “Say hello” form (submit prevented)
- Fictional locale and career copy — clearly labeled as demo

## Tech Stack

- React
- Vite
- Tailwind CSS

## Run Locally

```bash
npm install
npm run dev
```

## Possible Future Improvements

- Add a real blog / MDX journal route
- Wire the form to Formspree or Resend
- Light/dark reader mode toggle
- OG image and JSON-LD for `Person` schema when you replace with a real name
