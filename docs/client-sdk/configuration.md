---
title: Configuration
sidebar_position: 10
description: Verida Developer Documentation
keywords: [Verida, Web3, Developers]
---

## Client configuration

An options parameter can be passed to the `Client` object:

```tsx
const options = {}
const client = new Client(options)
```

Some key options are:

- `environment` — Sets default configuration settings for the specified environment. Options are; `local`, `testnet`, `mainnet` (not yet enabled)
- `schemaPaths` — Routing rules to discover schemas

## Environment Variables

**VERIDA_ENVIRONMENT**

You can use the `VERIDA_ENVIRONMENT` environment variable in your Node.js application to choose the `environment` to use by default. Create a `.env` file (if not already existing) in your application root and set your own options.

For example:

```
VERIDA_APP_NAME="My Company: My Application"
```

<aside>
💡 Vue.js mangles environment variables. See VueJs for details.

</aside>