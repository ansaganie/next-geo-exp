# GeoExploration Frontend

Next.js 15 application configured for static export deployment.

## Local Development

Run one of the following commands:

```bash
bun dev
# or
npm run dev
```

## Static Build

The project is configured with `output: "export"`, so `next build` generates static files in `out/`.

```bash
bun run build
# or
npm run build
```

## Contact Form Backend on Static Hosting

The frontend submits leads to `NEXT_PUBLIC_LEAD_ENDPOINT`, defaulting to `/api/lead.php`.

The PHP endpoint template is stored at `public/api/lead.php` and contains placeholders:

- `__TELEGRAM_BOT_CONNECTION_STRING__`
- `__TELEGRAM_CHAT_ID__`

During CI deployment, placeholders are replaced with GitHub Actions secrets and the generated file is uploaded with static assets.

## GitHub Actions Deployment

Workflow: `.github/workflows/deploy-static.yml`

Trigger:

- push to `dev`

Flow:

1. Install dependencies
2. Lint + static build
3. Inject Telegram secrets into `out/api/lead.php`
4. Upload artifact
5. Deploy via FTPS to `/httpdocs/`

Required GitHub secrets:

- `PLESK_FTP_SERVER`
- `PLESK_FTP_USERNAME`
- `PLESK_FTP_PASSWORD`
- `NEXT_PUBLIC_PHONE_MAIN`
- `NEXT_PUBLIC_PHONE_DISPLAY`
- `NEXT_PUBLIC_EMAIL`
- `NEXT_PUBLIC_INSTAGRAM_URL`
- `NEXT_PUBLIC_WHATSAPP_BASE`
- `NEXT_PUBLIC_MAP_IFRAME_SRC`
- `TELEGRAM_BOT_CONNECTION_STRING`
- `TELEGRAM_CHAT_ID`

`TELEGRAM_BOT_CONNECTION_STRING` should be a full Telegram sendMessage endpoint URL, for example:

`https://api.telegram.org/bot123456:ABC/sendMessage`
