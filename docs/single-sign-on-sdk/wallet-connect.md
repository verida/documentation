---
title: WalletConnect Support
sidebar_position: 3
description: Verida Developer Documentation
keywords: [Verida, Web3, Developers]
---

The Verida Wallet supports [WalletConnect](https://walletconnect.com/) (v2) to connect crypto wallets with dApps. It enables seamless integration and communication between applications and supported blockchains.

Currently, the following blockchains and networks are supported:

- Ethereum Mainnet (mainnet) - ChainID `eip155:1`
- Ethereum Sepolia (testnet) - ChainID `eip155:11155111`
- Polygon PoS (mainnet) - ChainID `eip155:137`
- Polygon Mumbai (testnet) - ChainID `eip155:80001`
- NEAR Testnet - ChainID `near:testnet`
- NEAR Mainnet - ChainID `near:mainnet`

## Verida Connect and WalletConnect Integration

Verida Connect facilitates the connection between the application and the Verida Network, offering powerful storage capabilities. By integrating WalletConnect, Verida Connect enables a unified authentication flow for users, streamlining the process.

When users authorize a connection to your application in the Verida Wallet, they will also be prompted to establish a WalletConnect connection simultaneously.

### API

To combine Verida Connect and WalletConnect, you need to specify the `walletConnect` configuration when creating a `VaultAccount` instance. The `walletConnect` configuration requires the following property:

- `uri`: (required) URI of the WalletConnect request

### Example

Consider the following example code, which demonstrates the integration of WalletConnect with Verida Connect:

```ts
// Example simplified for brevity

import AuthClient, { generateNonce } from "@walletconnect/auth-client";

// Initialise the AuthClient
const walletConnectClient = await AuthClient.init({
  projectId: process.env.PROJECT_ID,
  relayUrl: process.env.RELAY_URL,
  // ...
  // Refer to the WalletConnect AuthClient documentation for the full required configuration
});

// Set the listeners on the client
walletConnectClient.on("auth_response", () => {
  // logic to handle the response event
})

// Build the request URI
const walletConnectUri = await walletConnectClient.request({
  chainId: "eip155:5", // The Verida Wallet will reject blockchain network that are not supported
  // ...
  // Refer to the WalletConnect AuthClient documentation for the full required configuration
})

// Configure the `VaultAccount` instance with WalletConnect
const account = new VaultAccount({
  walletConnect: {
    uri: walletConnectUri,
  },
  // ...
  // Refer to the Verida Connect documentation for the full configuration
});

// Trigger the connection with Verida Connect
const context = await Network.connect({
  account: account,
  // ...
  // Refer to the Verida Connect documentation for the full configuration
});
```

Refer to the WalletConnect documentation and  for using the `AuthClient` in your application.


For further guidance on using the `AuthClient` in your application, consult the WalletConnect [documentation](https://walletconnect.com/) and review the provided [examples](https://github.com/WalletConnect/web-examples/blob/main/dapps/react-dapp-auth/pages/index.tsx).
