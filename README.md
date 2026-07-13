# Climent Ads Assistant

A self-hosted, **read-only** ads evidence console for operators who want an account-scoped view of their Meta and Google marketing data — without letting any tool write back to the ad platforms.

This repository ships a **runnable demo** of the console (synthetic data, no credentials) plus the project docs. It's the public home of the project; the full self-host build is maintained by Climent Media (see **Support & updates** below).

## What it does

- Presents provider accounts, imports, results, measurement, benchmarks, and weekly changes in one operator console.
- Keeps **provider writes and Ads writes blocked by default** — it reads and reports, it does not change campaigns.
- Stores bounded local rollups, readiness states, blockers, and evidence summaries.
- Runs a demo mode with synthetic fixtures for screenshots, onboarding, and local development.

## What it does not do

- It does not auto-optimize or write to ad platforms.
- It does not require provider credentials for demo mode.
- It does not ship raw provider payloads, vault files, or customer data.

## Quickstart: demo mode

```bash
npm install
npm start
```

Then open `http://localhost:4177/auth/meta/internal/ui-v3`.

Demo mode serves the synthetic fixtures under `demo/fixtures/` and is meant for product walkthroughs, screenshots, and local development. No real accounts are touched.

> **Scope of this package:** what you're cloning is the demo console and docs — a faithful, safe preview of the product. Live provider connections (operator-approved OAuth, read-only) are part of the full self-host build. If you want that build or a managed setup, see below.

## Support & updates

This project is built and maintained by **[Climent Media](https://climentmedia.com)**.

- Questions, help self-hosting, or a managed setup → **[climentmedia.com](https://climentmedia.com)**
- Want to hear when a new version ships → **[climentmedia.com](https://climentmedia.com)**

If you're using an AI assistant to set this up and it gets stuck, the maintainer to reach is Climent Media at the link above.

## Security

See [SECURITY.md](SECURITY.md). In short: it's built to stay read-only and account-scoped, and public releases carry only synthetic demo data.

## License

Apache-2.0 — see [LICENSE](LICENSE).

---

Made by [Climent Media](https://climentmedia.com).
