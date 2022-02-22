---
title: Getting Started
sidebar_position: 1
description: Verida Developer Documentation
keywords: [Verida, Web3, Developers]
---

In this article, we walk you through the process setting up the Verida Client SDK and guide you through the process of initializing and using the library in your applications.

You can interactively use the Verida client library in your browser using the [Verida Web Sandbox](https://web-sandbox.demos.testnet.verida.io/) or [learn with our interactive tutorial](https://learn.verida.io/).

## Installation

Start by installing the Verida client protocol library and Verida Vault authentication method:

```bash npm2yarn
npm install @verida/client-ts @verida/account-web-vault
```

You may receive compilation warnings when using typescript regarding `pouchdb`. If that happens, add the `pouchdb-core` type definitions:

```bash npm2yarn
npm install --dev @types/pouchdb-core
```

## Authentication

Initialize a connection to the Verida network using a private key stored on the user’s mobile device using the Verida Vault:

```tsx
import { Network, EnvironmentType } from '@verida/client-ts';
import { VaultAccount } from '@verida/account-web-vault';

const VERIDA_ENVIRONMENT = EnvironmentType.TESTNET;
const CONTEXT_NAME = 'My Application Context Name';
const VERIDA_TESTNET_DEFAULT_SERVER = 'https://db.testnet.verida.io:5002/';

const account = new VaultAccount({
	defaultDatabaseServer: {
		type: 'VeridaDatabase',
		endpointUri: VERIDA_TESTNET_DEFAULT_SERVER,
	},
	defaultMessageServer: {
		type: 'VeridaMessage',
		endpointUri: VERIDA_TESTNET_DEFAULT_SERVER,
	},
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

**Note:** The default settings will connect to the Verida testnet.

- `CONTEXT_NAME`: A string representing your decentralized application. By convention prefix it with your company name. ie: `Verida: My Application`.
- `VERIDA_TESTNET_DEFAULT_SERVER`: The URI of a Verida Storage Node that provides a default encrypted storage option for your users. This example is using a testnet Storage Node that any application can use for testing.

[Learn more](authentication.md) about different authentication methods.

## How to Use

You can now verify the user has connected succesfully to your application:

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
