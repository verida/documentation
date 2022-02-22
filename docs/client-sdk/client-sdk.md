---
sidebar_position: 0
description: Verida Developer Documentation
keywords: [Verida, Web3, Developers]
---
# What is the Verida Client SDK?

The Verida Client SDK is an open source implementation of a Verida network client providing encrypted storage, identity, messaging, and schemas capabilities. It is an easy-to-use library that abstracts the complexities behind these capabilities, thereby allowing developers to build self-sovereign applications.

This Verida Client SDK is the main library used by developers to add Verida 
protocol support into an application. There are two implementations for 
the Client SDK:

- [NodeJs Client](https://github.com/verida/verida-js/tree/main/packages/client-ts) — A package that can be used in a web browser or NodeJs environment.
- [React Native client](https://github.com/verida/client-rn) — A package that can be used in React Native mobile applications ([Learn more](client-sdk/react-native.md)).

The Client SDK provides the following core capabilities:

- Authenticate a user via a known private key or a Web3 modal popup
- Access encrypted database storage for your application for the authenticated user
- Send / receive messages between different users and applications

A user can have multiple [Application Contexts](concepts/application-contexts.md) that provide completely separate databases, messaging and storage.

## More about the Client SDK

[Getting Started](client-sdk/getting-started.md)

[How it Works](client-sdk/how-it-works.md)

[Authentication](client-sdk/authentication.md)

[Data](client-sdk/data.md)

[Queries](client-sdk/queries.md)

[Permissions](client-sdk/permissions.md)

[Messaging](client-sdk/messaging.md)

[Profiles](client-sdk/profiles.md)

[Events](client-sdk/events.md)

[Configuration](client-sdk/configuration.md)

[React Native](client-sdk/react-native.md)

[Advanced](client-sdk/advanced.md)