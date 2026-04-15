# GeoExploration Frontend

Next.js 15 application with i18n (ru/kk/en), deployed as a Node.js standalone bundle to Plesk via GitHub Actions + FTPS.

## Local Development

```bash
bun dev
```

Create `.env.local` in the project root with the values below (see [Environment Variables](#environment-variables)).

## Production Build

`output: "standalone"` is set in `next.config.ts`. `bun run build` produces a self-contained standalone bundle:

```
.next/standalone/   ← server.js + minimal node_modules (default entry point)
.next/static/       ← client JS/CSS  (copied in by CI)
public/             ← static assets  (copied in by CI)
```

Start the raw standalone bundle locally:

```bash
node .next/standalone/server.js
```

## GitHub Actions Deployment

Workflow: `.github/workflows/deploy-plesk.yml`  
Trigger: push to `dev`

Flow:

1. Install dependencies (`bun install --frozen-lockfile`)
2. Lint
3. Build — `NEXT_PUBLIC_*` secrets are injected here and baked into the client bundle
4. Copy `.next/static/` and `public/` into `.next/standalone/`
5. Copy `server.js` → `app.js` (Plesk startup file)
6. Upload `.next/standalone/` as a versioned artifact (14-day retention)
7. Deploy `.next/standalone/` via FTPS to `/httpdocs/` on Plesk

## Plesk Node.js App Setup (one-time, manual)

1. In Plesk panel → **Node.js**, create an application:
   - Application root: `/httpdocs`
   - Startup file: `app.js`
   - Node.js version: 20+
2. Set runtime environment variables in Plesk:
   - `NODE_ENV=production`
   - `PORT=3000`
   - `TELEGRAM_BOT_TOKEN`
   - `TELEGRAM_CHAT_ID`
3. After first deploy, restart the Node.js app manually. Subsequent deploys restart automatically via Passenger.

## Environment Variables

### Build-time (`NEXT_PUBLIC_*`, baked into client bundle)

Set as GitHub Actions secrets (or Variables — these values are public):

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_PHONE_MAIN` | Phone number in E.164 format, e.g. `+77755020555` |
| `NEXT_PUBLIC_PHONE_DISPLAY` | Formatted display phone, e.g. `+7 (775) 502-05-55` |
| `NEXT_PUBLIC_WHATSAPP_BASE` | Full WhatsApp link with pre-filled message |
| `NEXT_PUBLIC_INSTAGRAM_URL` | Instagram profile URL |
| `NEXT_PUBLIC_EMAIL` | Contact email address |
| `NEXT_PUBLIC_MAP_IFRAME_SRC` | Yandex Maps embed `src` attribute |

### Runtime (server-side only, set in Plesk — never in CI)

| Variable | Description |
|---|---|
| `TELEGRAM_BOT_TOKEN` | Bot token from @BotFather |
| `TELEGRAM_CHAT_ID` | Target chat/group ID (obtain via @userinfobot) |

### FTP (GitHub Actions secrets)

| Secret | Description |
|---|---|
| `FTP_SERVER` | Plesk hostname, e.g. `pkz33.hoster.kz` |
| `FTP_PORT` | FTPS port (typically `21` for explicit mode) |
| `FTP_USERNAME` | Plesk FTP account username |
| `FTP_PASSWORD` | Plesk FTP account password |

