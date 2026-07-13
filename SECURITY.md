# Security Policy

## Supported surface

This project is designed for self-hosted local/internal operation. Public SaaS deployment, provider writes, Ads writes, external automation, and production exposure require separate security review.

## Reporting vulnerabilities

Open a private security report with:

- affected version or snapshot hash,
- reproduction steps,
- expected versus actual behavior,
- whether provider credentials, OAuth callbacks, vault files, raw IDs, or customer data may be involved.

Do not include real secrets, raw provider payloads, OAuth callback URLs with code/state, vault files, or customer data in reports.

## Secret handling

- Real credentials belong in local env/vault configuration only.
- `.env*`, `.runtime/`, vaults, logs, screenshots, and raw provider payloads must not be committed.
- Public releases must be generated from a scrubbed snapshot and scanned before publication.
