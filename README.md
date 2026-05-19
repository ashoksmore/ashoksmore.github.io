# Ashok S. More — Portfolio

Multi-page React portfolio deployed to [ashoksmore.github.io](https://ashoksmore.github.io).

## Stack

- React 18 + Vite
- React Router 6
- Framer Motion (page transitions)

## Routes

| Path | Page |
|------|------|
| `/` | Home |
| `/about` | About |
| `/work` | Experience |
| `/projects` | Projects |
| `/beyond-code` | Skills & education |
| `/contact` | Contact |

## Headshot

Add your professional photo as `public/headshot.jpg` (square, ~600×600px recommended). Until then, a placeholder SVG is shown automatically.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

GitHub Actions builds `dist/` and deploys to GitHub Pages on push to `main`.
