---
title: Web User
sidebar_position: 2
description: Verida Developer Documentation
keywords: [Verida, Web3, Developers]
---

This is a helper class that simplifies using the Verida network in a web application. It represents a global user that is either `connected` or `disconnected` from the network.

## Usage

Create a file in your project `VeridaUser.js`:

```tsx
import { EnvironmentType } from '@verida/types'
import { WebUser } from '@verida/account-web-vault'

export class MyAppUser extends WebUser {
    // Implement any custom logic for your user
}

// Your application context name
const CONTEXT_NAME = '<Company name>: <Application Name>'

// Your logo URL (appears in the Vault)
const LOGO_URL = ''

// Create a singleton instance of your user with network connection configuration
// Return this singleton instance so there is only ever one user object
// in your application.
export const VeridaUser = new MyAppUser({
    accountConfig: {
        request: {
            logoUrl: LOGO_URL
        }
    },
    clientConfig: {
        environment: VERIDA_ENVIRONMENT
    },
    contextConfig: {
        name: CONTEXT_NAME
    },
    debug: true
})
```

Note: `accountConfig`, `clientConfig`, `contextConfig` are all configuration objects that match their respective `account-web-vault`, `client` and `context` configuration objects.

You can now import your `VeridaUser` in any other project files:

```tsx
import VeridaUser from './VeridaUser'

// Bind some event listeners
VeridaUser.on('profileChanged',(profile) => { console.log('Profile changed!', profile) })
VeridaUser.on('connected',(profile) => { console.log('User connected!') })
VeridaUser.on('disconnect',(profile) => { console.log('User connected!') })

const isConnected = await VeridaUser.isConnected()
if (!isConnected) {
    const success = await VeridaUser.connect()
    if (!success) {
        throw Error('User cancelled connect')
    }
}

// Send a message to the logged in user on their mobile device
const did = await VeridaUser.getDid()
console.log(`Logged in with ${did}`)

const publicProfile = await VeridaUser.getPublicProfile()
console.log(`Public profile:`, publicProfile)

await VeridaUser.sendMessage(did, 'Hello!')

// Open a private encrypted user database and save a row
const db = await VeridaUser.openDatabase('test_db')
const row = await db.save({'hello': 'world'})
console.log(row)

// Open a private encrypted user datastore and save a row
const ds = await VeridaUser.openDatastore('https://common.schemas.verida.io/social/contact/v0.1.0/schema.json')
const row = await ds.save({
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane_smith@example.com'
})
console.log(row)

// Disconnect the user
await VeridaUser.disconnect()
```