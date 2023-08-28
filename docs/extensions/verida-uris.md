---
title: Verida URIs
sidebar_position: 2
description: Verida Developer Documentation
keywords: [Verida, Web3, Developers, Data Bridge]
---

# Verida URIs

Verida supports URI's that reference a specific record on the network.

## URI helper library

The `@verida/helpers` library provides tools to create and load Verida URI's.

### Installation

```
yarn add @verida/helpers
```

### Generating a URI

```js
import { buildVeridaUri } from '@verida/helpers'

const did = 'did:vda:0x...'
const contextName: 'Verida: Vault'
const databaseName: 'test_db'
const rowId: '123456'

const uri = buildVeridaUri(did, contextName, databaseName, rowId)
console.log(`Generated URI: ${uri}`)
```

### Fetching a URI

```js
import { fetchVeridaUri } from '@verida/helpers'

const context = client.openContext('Verida: Vault')

try {
    const row = fetchVeridaUri(uri, context)
    console.log('Fetched row')
    console.log(row)
} catch (err) {
    // May throw document not found if it doesn't exist
    // or no permission to access
    console.log(err)
}
```

### Parsing a URI

```js
import { explodeVeridaUri } from '@verida/helpers'

const {
    did,
    contextName,
    dbName,
    id,
    query
} = explodeVeridaUri(uri)
```