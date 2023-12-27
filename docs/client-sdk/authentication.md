---
title: Authentication
sidebar_position: 3
description: Verida Developer Documentation
keywords: [Verida, Web3, Developers]
---

There are multiple ways to connect a user’s account to the Verida protocol with different packages provided for different use cases.

Your application must install the appropriate account package and connect it to your client instance. The account package handles:

- Signing consent messages to unlock application contexts
- Creating a new decentralized identity if required
- Publishing endpoints to the account’s DID document for all the account’s application contexts

There are two ways to authenticate a user to your application:

## 1. Verida Wallet

Designed *for secure web applications*

Your web application integrates the [Verida Connect SDK](../single-sign-on-sdk/single-sign-on-sdk.md) which displays a QR code to a user. A user scans the QR code and is walked through an onboarding process of installing the Verida Wallet, creating a blockchain account and then authenticating with your application.

See the [Verida Connect SDK](../single-sign-on-sdk/single-sign-on-sdk.md) for more details.

## 2. Private Key

Designed *for NodeJs and Mobile Apps*

An existing Verida account private key is used to authenticate a user to your application.

This approach is ideal for integrating the Verida protocol into a server side NodeJs application or embedding Verida into an existing mobile application using the [React Native client](react-native.md)

### Example

```tsx
import { Network, EnvironmentType } from '@verida/client-ts'
import { AutoAccount } from '@verida/account-node'

const VERIDA_ENVIRONMENT = EnvironmentType.TESTNET
const CONTEXT_NAME = 'My Application: Context Name'

// Configuration for the DID client
// `privateKey` must be a Polygon private key that has enough
// MATIC to perform a blockchain transaction to create your DID
// (If it doesn't exist)
const DID_CLIENT_CONFIG = {
    callType: 'web3',
    web3Config: {
        // Polygon private key
        privateKey: '0x...',
    }
}

// Create a connection to the network and open your context
const context = await Network.connect({
    context: {
        name: CONTEXT_NAME
    },
    client: {
        environment: VERIDA_ENVIRONMENT
    },
    account: new AutoAccount({
        privateKey: '0x...' // or Verida mnemonic seed phrase
        environment: VERIDA_ENVIRONMENT,
        didClientConfig: DID_CLIENT_CONFIG
    })
})
```

Note: Change `EnvironmentType.TESTNET` to `EnvironmentType.MAINNET` if connecting to Verida Mainnet.

See the [@verida/account-node package](https://github.com/verida/verida-js/tree/main/packages/account-node) for more details.

### Web3Config

`DID_CLIENT_CONFIG.web3Config` supports additional options used when communicating with the blockchain. Here's the default configuration when using Verida Mainnet (Polygon PoS network):

```tsx
const DID_CLIENT_CONFIG = {
    callType: 'web3',
    web3Config: {
        // Polygon private key
        privateKey: '0x...',
        // Polygon network RPC URL
        rpcUrl: 'https://polygon-rpc.com/',
        eip1559Mode: 'fast',
        eip1559gasStationUrl: 'https://gasstation.polygon.technology/v2'
    }
}
```

Note: Only `privateKey` is required, the other values (`rpcUrl`, `eip1559xxx` will be populated with defaults in the protocol based on the Verida network selected)

### Generate private key

Verida accounts use the same standard the same as Ethereum accounts, so Ethers.js can be used to generate a new seed phrase or private key.

```tsx
import { ethers } from 'ethers'
const wallet = new ethers.Wallet()
const privateKey = wallet.privateKey
```

## Advanced

The above examples initialize a connection to the Verida network and a single context. Sometimes it’s useful to connect to the network and then connect to multiple application contexts for the connected user. The code sample below generates a re-usable client instance, then uses that to open a specific application context.

In your application, include the dependency and create a new client network instance:

```tsx
import { Client, EnvironmentType } from '@verida/client-ts'
import { AutoAccount } from '@verida/account-node'

const VERIDA_ENVIRONMENT = EnvironmentType.TESTNET
const CONTEXT_NAME = 'My Application: Context Name'

const DID_CLIENT_CONFIG = {
    callType: 'web3',
    web3Config: {
        privateKey: '0x...',
    }
}

// establish a network connection
const client = new Client({
    environment: VERIDA_ENVIRONMENT
})

// create a Verida account instance that wraps the authorized Verida DID server connection
// The `AutoAccount` instance will automatically sign any consent messages
const account = new AutoAccount({
    privateKey: '0x...' // or Verida mnemonic seed phrase
    environment: VERIDA_ENVIRONMENT,
    didClientConfig: DID_CLIENT_CONFIG
})

// Connect the Verida account to the Verida client
await client.connect(account)

// Open an application context (forcing creation of a new context if it doesn't already exist)
const context = await client.openContext(CONTEXT_NAME, true)

// Open a database
const database = await context.openDatabase('my_database')
```

### AccountNode Config

The first parameter for `AutoAccount()` is an interface that meets the `AccountNodeConfig` definition:

```ts
export interface AccountNodeConfig {
    privateKey: string;
    environment: EnvironmentType;
    didClientConfig: AccountNodeDIDClientConfig;
    options?: any;
    countryCode?: string;
}
```

- `privateKey` - Verida network private key for the account
- `environment` - Verida environment (`EnvironmentType.TESTNET` or `EnvironmentType.MAINNET`)
- `didClientConfig` - Instance of `AccountNodeDIDClientConfig`
- `countryCode` - (optional) Country to use for selecting storage and DID nodes on the network. If not specified, will choose random global nodes. If specified, will use nodes in that country. If not enough nodes are available in that country, it will fallback to selecting nodes in the same region as that country, then fallback to global nodes.