# Contributing

Thanks for your interest in Climent Ads Assistant.

## Ground rules

- Keep **provider writes and Ads writes blocked** unless a future explicit change updates the policy — this project reads and reports, it doesn't change campaigns.
- Do not commit `.env*`, secrets, tokens, vaults, logs, screenshots, raw provider payloads, or any real customer data.
- Use **synthetic fixtures** for tests and demos.
- Prefer narrow, account-scoped contracts and explicit no-data / blocker states over guessing.

## Before opening a PR

```bash
npm install
npm start        # sanity-check the demo boots and serves synthetic data
```

Please describe what you changed and why, and confirm no real credentials or customer data are included.

## Questions

For anything bigger — a feature idea, a managed setup, or maintainer questions — reach [Climent Media](https://climentmedia.com).
