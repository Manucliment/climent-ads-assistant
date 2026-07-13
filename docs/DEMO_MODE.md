# Demo mode & data safety

## What demo mode is

The public package runs in **demo mode**: it serves synthetic fixtures from `demo/fixtures/` so you can explore the console, take screenshots, and develop locally without connecting any real account.

- No provider credentials are required.
- No calls are made to Meta, Google, or any ad platform.
- The demo data is invented (e.g. "Demo Dental Studio") and never represents a real advertiser.

Responses are marked with an `x-demo-mode: true` header so it's always clear you're looking at demo data.

## Design principles

- **Read-only by default.** The product reads and reports; it does not write to ad platforms. Provider writes and Ads writes stay blocked.
- **Account-scoped.** Live connections (in the full build) are operator-approved and read-only.
- **No sensitive data in the open-source distribution.** Public releases ship only synthetic demo data — no real credentials, tokens, provider payloads, or customer information.

## Reporting a problem

Found something that looks unsafe? See [SECURITY.md](../SECURITY.md) and report it privately.

## Maintainer

Built and maintained by [Climent Media](https://climentmedia.com).
