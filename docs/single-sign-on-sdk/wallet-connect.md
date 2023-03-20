---
title: WalletConnect Support
sidebar_position: 3
description: Verida Developer Documentation
keywords: [Verida, Web3, Developers]
---

The Verida SSO supports establishing WalletConnect (v1 on Ethereum, Polygon and Algorand or v2 on NEAR) connections when a user signs into your application. This allows your application to get both; private storage for your dApp and a direct wallet connection for blockchain transactions.

WalletConnect is a bridge server that sits in between Dapps and wallets to transmit requests and results through web socket connections.

When the user authorizes a connection to your application they can also be prompted to establish a WalletConnect connection.

![wallet-connect.png](wallet-connect.png)

Currently WalletConnect v1 is the most used version on EVM chains (ie, Ethereum and Polygon) and on Algorand. NEAR only supports WalletConnet v2. 


## Enabling WalletConnect

You can enable WalletConnect in your application by specifying the `walletConnect` configuration when creating a `VaultAccount` instance.

```jsx
// Create WalletConnect instance
const DEFAULT_CHAIN_ID = "eip155:5"
connector = new WalletConnect({
    bridge: 'https://bridge.walletconnect.org',
});

// Configure the `VaultAccount` instance with WalletConnect
const account = new VaultAccount({
  walletConnect: {
    version: connector.version,
    uri: connector.uri,
    chainId: DEFAULT_CHAIN_ID,
  },
});
```

The `walletConnect` configuration options are:

- `version`: (required) Wallet connect version (`1` or `2`)
- `uri`: (required) URI of the WalletConnect bridging server
- `chainId` (required) A CAIP chain ID such as `eip155:5` for Ethereum Goerli. See below for details

### Chain ID

The `chainId` must be a CAIP compatible blockchain identifier (See [CAIP-2](https://github.com/ChainAgnostic/CAIPs/blob/master/CAIPs/caip-2.md)).

The Verida Wallet currently supports the following testnet networks:

1. `eip155:5` Ethereum Goerli Testnet
2. `eip155:80001` Polygon Mumbai Testnet
3. `algorand:SGO1GKSzyE7IEPItTxCByw9x8FmnrCDexi9` Algorand Testnet
4. `near:testnet` NEAR Testnet

Full mainnet support for Ethereum, Polygon, Algorand and NEAR will be available shortly.