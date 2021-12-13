---
sidebar_position: 10
description: A short description of this page
image: https://uploads-ssl.webflow.com/60e8365cd5794f8db04151ed/6107868980521e0acf27b2d9_favicon.svg
keywords: [keywords, describing, the main topics]
---
# Configuration

# Client configuration

An options parameter can be passed to the `Client` object:

```tsx
const options = {}
const client = new Client(options)
```

Some key options are:

- `environment` — Sets default configuration settings for the specified environment. Options are; `local`, `testnet`, `mainnet` (not yet enabled)
- `schemaPaths` — Routing rules to discover schemas

# Environment Variables

**VERIDA_ENVIRONMENT**

You can use the `VERIDA_ENVIRONMENT` environment variable in your Node.js application to choose the `environment` to use by default. Create a `.env` file (if not already existing) in your application root and set your own options.

For example:

```
VERIDA_APP_NAME="My Company: My Application"
```

<aside>
💡 Vue.js mangles environment variables. See VueJs for details.

</aside>