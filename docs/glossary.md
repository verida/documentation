---
sidebar_position: 10
description: Verida Developer Documentation
keywords: [Verida, Web3, Developers]
---
# Glossary

To better understand the Verida protocol and its documentation, we recommend reviewing the following terms:

- **Application Context** — Application contexts are connections created when a Verida account connects to multiple applications. An application context has a unique name and provides a specific set of capabilities such as database storage, messaging, data requests, and more. These application contexts are accessed by applications via the Client SDK and are usually siloed from each other. A Verida account connected to one application context has no access to data in a different application context. This ensures applications can only access the data they own or are consented to access.
- **DID** — Decentralized identifiers are a new type globally unique identifiers that are cryptographically verifiable and can therefore be used as an authentication mechanism. DIDs are a core component of the decentralized digital identity layer and public key infrastructure (PKI) across the web3 ecosystem. Example DID: `did:vda:0x6B2a1bE81ee770cbB4648801e343E135e8D2Aa6F`.
- **Storage Node** — The Verida storage node serves as middleware between web applications built using the Verida Client SDK and the underlying databases storing user data.
- **Verida Account** — Verida accounts are decentralized identities (DID) created on the Verida DID Server and controlled by an end user's private keys. The account is uniquely identified with a string such as `did:vda:0xe613A46C48f3805B05500bF7dBff00A1dd3Ba0e6`. This allows users to identify themselves to other users or applications by sharing their unique DID string.
- **Verida Identity** - See Verida Account.
- **Verida Network** — The Verida Network is the live network of applications using the Verida Client Libraries, Storage Nodes providing decentralized storage and DID server providing identity discovery.
- **Verida Protocol** — The Verida Protocol is a collection of open source libraries that enables developers to quickly build secure self-sovereign decentralized applications. It consists of the Verida Client SDK, Verida Connect SDK, and the storage node. The protocol enables developers building on Verida to create Web3 applications where users own their data, identity, and can perform blockchain transactions.
- **Verida Protocol Client Library** — The Client library that you install in your project to add support for the Verida protocol. To support a wide range of applications, we have Typescript and React Native versions of this Client Library.
- **Verida Connect SDK** — The Verida Connect SDK is a decentralized single sign-on client and server SDK that enables seamless QR code authentication via the Verida Wallet mobile application
- **Verida Wallet** — A mobile app for end-users that facilitates single sign-on and secure messaging. Verida DIDs are used for identity management on the Verida Wallet where users are authenticated using by simply scanning a QR code.