---
title: Advanced
sidebar_position: 12
description: Verida Developer Documentation
keywords: [Verida, Web3, Developers]
---

## Closing a database

Databases should be closed when you have finished using them. This closes socket connections associated with syncing and cleans up other internal resources such as caching.

```tsx
await database.close()
```

## Datastore v Database

You can access the underlying `database` object from a `datastore` object:

```tsx
const db = await datastore.getDb()
```

The Verida database object is a wrapper around a native [PouchDb instance](https://pouchdb.com/api.html). You can fetch this PouchDb instance from a `database` object:

```tsx
const pouchDb = await db.getDb()
```

## Database info

Additional information about a database can be retrieved:

```tsx
const dbInfo = await database.info()
console.log(dbInfo)
```

Here’s example output for an encrypted database:

```tsx
{
  type: 'VeridaDatabase',
  privacy: 'encrypted',
  did: 'did:vda:0x6B2a1bE81ee770cbB4648801e343E135e8D2Aa6F',
  dsn: 'https://<username>:<password>@db.testnet.verida.io:5984',
  storageContext: 'Verida Test: Test Application 1',
  databaseName: 'SyncTestDb',
  databaseHash: '<databaseHash>',
  encryptionKey: Uint8Array(32) [
    ...
  ],
  sync: {
    canceled: true,
    pull: { status: 'cancelled', canceled: undefined },
    push: { status: 'cancelled', canceled: undefined }
  }
}
```