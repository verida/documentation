---
title: Verida Networks
sidebar_position: 1
description: Verida Networks
keywords: [Verida, Web3, Developers]
---

# Verida Networks

| Name | Description | Mainnet (Myrtle) | Testnet (Acacia) |
| -- | --- | --- | --- |
| Storage Node Registry | List of all storage nodes on the network. This will be replaced with a smart contract in Q1 2024. | [mainnet.json](https://assets.verida.io/registry/storageNodes/mainnet.json) | [testnet.json](https://assets.verida.io/registry/storageNodes/mainnet.json)
| Auth Server | A generic authentication server operated by the Verida Foundation to facilitate SSO between dApps and the Verida Wallet mobile application | [Mainnet](https://auth.testnet.verida.io/) (shared with Testnet) | [Testnet](https://auth.testnet.verida.io/) |
| DID Registry | Smart contract that maintains a registry of all DID accounts on the Verida network | [Mainnet](https://www.polygonscan.com/address/0x6FF180EF62FA57e611E91bdDaDadB6635D6b9Af7) | [Testnet](https://mumbai.polygonscan.com/address/0x08CB4462958e6462Cc899862393f0b3bB6664efD) |
| Name Registry | Smart contract that maintains a mapping of Verida network usernames to DIDs | [Mainnet](https://www.polygonscan.com/address/0xc9ce048b464034C53207Bf120bF85f317fdb38C8) | [Testnet](https://mumbai.polygonscan.com/address/0x1dD6AAc1858100091BEbb867C7628DA639F7C16E) |
| Verida Token | Smart contract for the Verida Token (VDA) | [Mainnet](https://www.polygonscan.com/address/0x683565196C3EAb450003C964D4bad1fd3068D4cC) | [Testnet](https://mumbai.polygonscan.com/address/0x745Db51351015d61573db37bC16C49B8506B93c8) |
| Verida Rewards | Smart contract that manages rewards for users who claim their data from centralized platforms | [Mainnet](https://www.polygonscan.com/address/0xBAeEA910f6BBe29Ef33e0051e51dc60f9702B7b9) | [Testnet](https://mumbai.polygonscan.com/address/0x5044bba95ad5a526c83086966B00F5ebB47A6673)
| Network Explorer | Simple interface to view the activity on the Verida Network | [Mainnet](https://explorer.verida.network) | [Testnet](https://explorer.testnet.verida.network)

The protocol also maintains a [registry of smart contract addresses](https://github.com/verida/verida-js/blob/main/packages/vda-common/src/contract.ts) in code.

Verida currently operates all the storage nodes on the network while it measures performance and rapidly resolves issues during development.

We will soon be opening up storage nodes for third parties to operate. You can [learn more here](https://news.verida.io/decentralizing-the-verida-network-become-a-node-operator-e31a6a31daf1) or [register your interest in providing storage nodes for the network](https://www.verida.network/storage-node-providers).