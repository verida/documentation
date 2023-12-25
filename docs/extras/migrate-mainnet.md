---
sidebar_position: 4
title: Migrate to Mainnet
description: How to migrate to Verida Mainnet
keywords: [Verida, Web3, Data, Storage, Mainnet,  Migration]
---

# Migrate to Mainnet

The Verida Mainnet is now live and the Verida protocol libraries have been updated to manage most of the complexity of the mainnet upgrade.

As a developer, there are just three things you need to focus on.

### 1. Upgrade to the latest libraries

There is a new `3.0.0` release of the protocol that supports mainnet.

You will need to run `yarn update` on all `@verida/xxx` packages used by your project.

ie: `yarn update @verida/client-ts @verida/account-web-vault`

## 2. Specify Verida EnvironmentType.MAINNET

In your code that connects to the Verida network, replace references of `EnvironmentType.TESTNET` to `EnvironmentType.MAINNET` 

## 3. Server side app changes

(Not required for web applications)

Server side applications may be manually creating accounts on the Verida network and paying MATIC for those blockchain transactions. The Verida mainnet runs on Polygon PoS network, so you will need to replace your [authentication code](http://localhost:3000/docs/client-sdk/authentication#example) `webConfig.privateKey` with a Polygon PoS mainnet private key with sufficient MATIC to create blockchain accounts.