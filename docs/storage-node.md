---
sidebar_position: 4
description: Verida Developer Documentation
image: https://uploads-ssl.webflow.com/60e8365cd5794f8db04151ed/6107868980521e0acf27b2d9_favicon.svg
keywords: [Verida, Web3, Developers]
---
# Storage Node

The Verida protocol provides an open source [Storage Node](https://github.com/verida/storage-node) server that provides encrypted database storage for one or more Verida accounts.

The server provides a middleware that connects decentralized identities on the Verida network with authenticated users in a CouchDB database cluster.

## Use cases

1. Application developers can provide their own default storage nodes for their users
2. End users can can have increased privacy and control by hosting storage nodes for their own personal data
3. Enterprise users can provide highly secure, private storage for all it's employees

## Key features

- Ensuring all API requests come from verified Verida network users (via user signed messages)
- Managing database users, linking them to valid DID's
- Managing permissions for individual databases
- Adding a second layer of security by managing per-database ACL validation rules
- Providing applications with user's database connection strings

## Learn more

Learn more at the [Storage Node github repo](https://github.com/verida/storage-node).