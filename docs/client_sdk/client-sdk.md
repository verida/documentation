---
sidebar_position: 0
description: A short description of this page
image: https://uploads-ssl.webflow.com/60e8365cd5794f8db04151ed/6107868980521e0acf27b2d9_favicon.svg
keywords: [keywords, describing, the main topics]
---
# What is the Verida Client SDK?

The Verida Client SDK is an open source implementation of a Verida network client providing encrypted storage, identity, messaging, and schemas capabilities. It is an easy-to-use library that abstracts the complexities behind these capabilities, thereby allowing developers to build self-sovereign applications.

This Verida Client SDK is the main library used by developers to add Verida 
protocol support into an application. There are two implementations for 
the Client SDK:

- [NodeJs Client](https://github.com/verida/verida-js/tree/main/packages/client-ts) — A package that can be used in a web browser or NodeJs environment.
- [React Native client](https://github.com/verida/client-rn) — A package that can be used in React Native mobile applications ([Learn more](client_sdk/react-native.md)).

The Client SDK provides the following core capabilities:

- Authenticate a user via a known private key or a Web3 modal popup
- Access encrypted database storage for your application for the authenticated user
- Send / receive messages between different users and applications

A user can have multiple [Application Contexts](concepts/application-contexts.md) that provide completely separate databases, messaging and storage.

## More about the Client SDK

[Getting Started](client_sdk/getting-started.md)

[How it Works](client_sdk/how-it-works.md)

[Authentication](client_sdk/authentication.md)

[Data](client_sdk/data.md)

[Queries](client_sdk/queries.md)

[Permissions](client_sdk/permissions.md)

[Messaging](client_sdk/messaging.md)

[Profiles](client_sdk/profiles.md)

[Events](client_sdk/events.md)

[Configuration](client_sdk/configuration.md)

[React Native](client_sdk/react-native.md)

[Advanced](client_sdk/advanced.md)