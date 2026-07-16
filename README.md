# Flavio Raise — Portfolio

My personal portfolio: a minimal, dark, monochrome single-page site with a beam-formed **FR** opening animation, neon hover effects and a fully responsive layout.

🔗 **Live:** [flavioraise.com](https://flavioraise.com) · **GitHub:** [@flavioraise](https://github.com/flavioraise)

![Portfolio opening animation and main page](docs/preview.gif)

## About me

Hi, I'm **Flavio Raise** — a junior software developer based near Venice, Italy. I recently
graduated in Computer Science (Systems & Networks) and I like building things that live
across the whole stack: web apps on the front, databases and services in the middle, and
the networking layer underneath.

I enjoy small, well-crafted projects — a routing engine that finds the *most fun* bike ride
instead of the fastest, or tooling that makes Claude Code build features step by step. I'm
currently looking for my first role in tech and always open to interesting problems.

📍 Mestre, Italy · ✉️ [flavio.raise07@gmail.com](mailto:flavio.raise07@gmail.com)

## The build

The site is a single-page app built on [Next.js 16](https://nextjs.org) (App Router,
Turbopack) and [React 19](https://react.dev), styled with [Tailwind CSS 4](https://tailwindcss.com)
and written in TypeScript. It opens with an animation powered by [Motion](https://motion.dev):
light beams sweep in from the screen edges, resolve into the **FR** wordmark, then lift away
to reveal the page. That same white neon glow carries through to the favicon and the
project-card hover states, tying the whole minimal, monochrome look together.

Everything is tuned to be responsive across mobile (including tall phones like the Z Fold 5
and iPhone Pro), tablet and desktop, and motion-aware — the opening sequence respects
`prefers-reduced-motion` for anyone who'd rather skip it.
