---
title: Verida Connect SDK
sidebar_position: 0
description: Verida Developer Documentation
keywords: [Verida, Web3, Developers]
---

The Verida Connect SDK is a decentralized single sign-on client library and server API that enables seamless QR code authentication via the Verida Wallet mobile application.

![QR_modal.png](QR_modal.png)

It is an easy-to-use integration method that allows a user to scan a QR code to sign into your application. If the user doesn't have the Verida Wallet installed, they will be prompted to install it. Existing users will be prompted to authorize your application to access encrypted storage for that 
application.

### How it works

A user downloads the Verida Wallet onto their mobile device which generates a private key on a supported blockchain. This private key is used to generated a Decentralized Identity (DID). The user then scans a QR code on their phone which prompts the user to sign a consent message using the Verida Wallet to unlock the secure enclave for that application.

![sso_overview.png](sso_overview.png)

### Further Information

- [How to use the Verida Connect SDK](getting-started.md)
- [Authentication Server](the-sso-authentication-server.md)