# Know thyself

Personal website: Vite + React + TypeScript + React Router.

## Development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

Output goes to `dist/`. The build also copies the root `img/` folder into `dist/img` for Hostinger.

## Deploy to Hostinger

1. Run `npm run build`.
2. Upload the contents of `dist/` to `public_html` (include `.htaccess`).
3. `.htaccess` enables Apache SPA fallback so routes like `/books` work on refresh.

Domain target: aquamarinea.com
