---
title: Blockchain Support
sidebar_position: 5
description: Verida Developer Documentation
keywords: [Verida, Web3, Developers, Blockchain, Ethereum, Polygon, NEAR]
---

# Blockchains

The Verida Network is a decentralized storage network, not a blockchain, however it is designed to be blockchain agnostic and support bridging private user data onto the blockchain, where appropriate.

The Verida Network does use some blockchains as part of the core protocol. See [Infrastructure &rarr; Networks](../infrastructure/networks)

The Verida Wallet is a mobile wallet that supports multiple blockchains and provides a simple user interface for end users to manage with their decentralized identity, private user data and public blockchain interactions.

## Supported Blockchains

### NEAR Protocol

The Verida Wallet supports:

- Returning a key pair
- Creating implicit accounts
- Identification of named account
- Support for viewing, sending and receiving NEP-141 tokens
- WalletConnect connections

All user data on the Verida network is hashed using `keccak256` and signed using `secp256K1` which means smart contracts can be written to verify user data published on chain.

### EVM Networks

The Verida Wallet supports:

- Support for viewing, sending and receiving ERC-20 tokens
- WalletConnect connections

All user data on the Verida network is hashed using `keccak256` and signed using `secp256K1` which means smart contracts can be written to verify user data published on chain.

We have developed a [Personal Data Bridge](./personal-data-bridge) solidity library that can be added to existing smart contracts. This library allows your smart contract to specify a list of trusted off-chain data signers, and then verify the data submitted to the smart contract has been signed by one of those trusted third parties. This is like an oracle service for personal data.

### Polygon ID

While not specifically a blockchain, the Verida Wallet supports the Polygon ID protocol which enables the submission of zero-knowledge proofs on EVM blockchains. The underlying data is stored as a Verifiable Credential in the Verida Wallet, which can then generate a ZKP of the correct format to submit to a smart contract that implements the Polygon ID verification capabilities.