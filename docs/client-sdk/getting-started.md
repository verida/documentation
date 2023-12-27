---
title: Getting Started
sidebar_position: 1
description: Verida Developer Documentation
keywords: [Verida, Web3, Developers]
---

In this article, we walk you through the process setting up the Verida Client SDK and guide you through the process of initializing and using the library in your applications.

You can interactively use the Verida client library in your browser using the [Verida Web Sandbox](https://web-sandbox.demos.testnet.verida.io/) or [learn with our interactive tutorial](https://learn.verida.io/).

## Installation

Start by installing the Verida client protocol library and Verida Wallet authentication method:

```bash npm2yarn
npm install @verida/client-ts @verida/account-web-vault
```

You may receive compilation warnings when using typescript regarding `pouchdb`. If that happens, add the `pouchdb-core` type definitions:

```bash npm2yarn
npm install --dev @types/pouchdb-core
```

## Authentication

Initialize a connection to the Verida network using a private key stored on the user’s mobile device using the Verida Wallet:

```tsx
import { Network } from '@verida/client-ts';
import { EnvironmentType } from '@verida/types';
import { VaultAccount } from '@verida/account-web-vault';

const VERIDA_ENVIRONMENT = EnvironmentType.TESTNET;
const CONTEXT_NAME = 'My Application Context Name';

// The LOGO_URL should be a 170x170 PNG file
const LOGO_URL = "https://assets.verida.io/verida_login_request_logo_170x170.png";

const account = new VaultAccount({
	logoUrl: LOGO_URL
});

const context = Network.connect({
	client: {
		environment: VERIDA_ENVIRONMENT,
	},
	account: account,
	context: {
		name: CONTEXT_NAME,
	},
});
```

Note: Change `EnvironmentType.TESTNET` to `EnvironmentType.MAINNET` if connecting to Verida Mainnet.

- `CONTEXT_NAME`: A string representing your decentralized application. By convention prefix it with your company name. ie: `Verida: My Application`.

[Learn more](authentication.md) about different authentication methods.

## How to Use

You can now verify the user has connected successfully to your application:

```tsx
const did = await account.did();
console.log('User is connected with Verida Account DID: ' + did);
```

You can open a database, save a record and then fetch it:

```jsx
const db = await context.openDatabase('test_db');
const item = await db.save({
	hello: 'world',
});
const items = await db.getMany();
console.log(items);
```

Learn more about building applications with decentralized [databases](data.md), [datastores](data.md) and [messaging](messaging.md).
