---
sidebar_position: 3
description: Verida Developer Documentation
keywords: [Verida, Web3, Developers]
---
# Authentication

There are multiple ways to connect a user’s account to the Verida protocol with different packages provided for different use cases.

Your application must install the appropriate account package and connect it to your client instance. The account package handles:

- Signing consent messages to unlock application contexts
- Creating a new decentralized identity if required
- Publishing endpoints to the account’s DID document for all the account’s application contexts

There are two ways to authenticate a user to your application:

# 1. Verida Vault

Designed *for secure web applications*

Your web application integrates the [Verida Single Sign On SDK](../single-sign-on-sdk/single-sign-on-sdk.md) which displays a QR code to a user. A user scans the QR code and is walked through an onboarding process of installing the Verida Vault, creating a blockchain account and then authenticating with your application.

See the [Single Sign On SDK](../single-sign-on-sdk/single-sign-on-sdk.md) for more details.

# 2. Private Key

Designed *for NodeJs and Mobile Apps*

An existing Verida account seed phrase is used to authenticate a user to your application.

This approach is ideal for integrating the Verida protocol into a server side NodeJs application or embedding Verida into an existing mobile application using the [React Native client](react-native.md)

## Example

```tsx
import { Network, EnvironmentType } from '@verida/client-ts'
import { AutoAccount } from '@verida/account-node'

const VERIDA_ENVIRONMENT = EnvironmentType.TESTNET
const CONTEXT_NAME = 'My Application Context Name'
const VERIDA_TESTNET_DEFAULT_SERVER = 'https://db.testnet.verida.io:5002/'

const context = Network.connect({
    context: {
        name: CONTEXT_NAME
    },
    client: {
        environment: VERIDA_ENVIRONMENT
    },
    account: new AutoAccount({
        defaultDatabaseServer: {
            type: 'VeridaDatabase',
            endpointUri: VERIDA_TESTNET_DEFAULT_SERVER
        },
        defaultMessageServer: {
            type: 'VeridaMessage',
            endpointUri: VERIDA_TESTNET_DEFAULT_SERVER
        }
    }, {
        privateKey: '0x...' // or Verida mnemonic seed phrase
    })
})
```

See the [@verida/account-node package](https://github.com/verida/verida-js/tree/main/packages/account-node) for more details.

<aside>
💡 Verida accounts use the same standard the same as Ethereum accounts, so Ethers.js can be used to generate a new seed phrase or private key.

</aside>

# Advanced

The above examples initialize a connection to the Verida network and a single context. Sometimes it’s useful to connect to the network and then connect to multiple application contexts for the connected user. The code sample below generates a re-usable client instance, then uses that to open a specific application context.

In your application, include the dependency and create a new client network instance:

```tsx
import { Client, EnvironmentType } from '@verida/client-ts'
import { AutoAccount } from '@verida/account-node'

const VERIDA_ENVIRONMENT = EnvironmentType.TESTNET
const CONTEXT_NAME = 'My Application Context Name'
const VERIDA_TESTNET_DEFAULT_SERVER = 'https://db.testnet.verida.io:5002/'

// establish a network connection
const client = new Client({
    environment: VERIDA_ENVIRONMENT
})

// create a Verida account instance that wraps the authorized Verida DID server connection
// The `AutoAccount` instance will automatically sign any consent messages
const account = new AutoAccount({
    defaultDatabaseServer: {
        type: 'VeridaDatabase',
        endpointUri: VERIDA_TESTNET_DEFAULT_SERVER
    },
    defaultMessageServer: {
        type: 'VeridaMessage',
        endpointUri: VERIDA_TESTNET_DEFAULT_SERVER
    }
}, {
    privateKey: '0x...'
})

// Connect the Verida account to the Verida client
await client.connect(account)

// Open an application context (forcing creation of a new context if it doesn't already exist)
const context = await client.openContext(CONTEXT_NAME, true)

// Open a database
const database = await context.openDatabase('my_database')
```