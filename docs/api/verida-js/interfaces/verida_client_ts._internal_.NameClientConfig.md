[root](../README.md) / [Modules](../modules.md) / [@verida/client-ts](../modules/verida_client_ts.md) / [<internal\>](../modules/verida_client_ts._internal_.md) / NameClientConfig

# Interface: NameClientConfig

[@verida/client-ts](../modules/verida_client_ts.md).[<internal\>](../modules/verida_client_ts._internal_.md).NameClientConfig

Interface for vda-name-client instance creation. Same as VDA-DID configuration

**`param`** DID

**`param`** private key of DID. Used to generate signature in transactions to chains

**`param`** Target chain name or chain id.

**`param`** : VDA-DID run mode. Values from vda-did-resolver

**`param`** Web3 configuration depending on call type. Values from vda-did-resolver

## Table of contents

### Properties

- [callType](verida_client_ts._internal_.NameClientConfig.md#calltype)
- [did](verida_client_ts._internal_.NameClientConfig.md#did)
- [network](verida_client_ts._internal_.NameClientConfig.md#network)
- [signKey](verida_client_ts._internal_.NameClientConfig.md#signkey)
- [web3Options](verida_client_ts._internal_.NameClientConfig.md#web3options)

## Properties

### callType

• `Optional` **callType**: [`Web3CallType`](../modules/verida_client_ts._internal_.md#web3calltype)

#### Defined in

packages/vda-name-client/build/src/blockchain/blockchainApi.d.ts:14

___

### did

• `Optional` **did**: `string`

#### Defined in

packages/vda-name-client/build/src/blockchain/blockchainApi.d.ts:12

___

### network

• **network**: [`EnvironmentType`](../enums/verida_client_ts._internal_.EnvironmentType.md)

#### Defined in

packages/vda-name-client/build/src/blockchain/blockchainApi.d.ts:11

___

### signKey

• `Optional` **signKey**: `string`

#### Defined in

packages/vda-name-client/build/src/blockchain/blockchainApi.d.ts:13

___

### web3Options

• `Optional` **web3Options**: [`Web3MetaTransactionConfig`](verida_client_ts._internal_.Web3MetaTransactionConfig.md) \| [`Web3SelfTransactionConfig`](verida_client_ts._internal_.Web3SelfTransactionConfig.md)

#### Defined in

packages/vda-name-client/build/src/blockchain/blockchainApi.d.ts:15
