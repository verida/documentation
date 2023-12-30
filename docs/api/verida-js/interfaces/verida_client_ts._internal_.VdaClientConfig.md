[root](../README.md) / [Modules](../modules.md) / [@verida/client-ts](../modules/verida_client_ts.md) / [<internal\>](../modules/verida_client_ts._internal_.md) / VdaClientConfig

# Interface: VdaClientConfig

[@verida/client-ts](../modules/verida_client_ts.md).[<internal\>](../modules/verida_client_ts._internal_.md).VdaClientConfig

Interface for vda-xxx-client instance creation.

**`param`** DID

**`param`** private key of DID. Used to generate signature in transactions to chains

**`param`** Target chain name or chain id.

**`param`** : VDA-DID run mode. Values from vda-did-resolver

**`param`** Web3 configuration depending on call type. Values from vda-did-resolver

## Table of contents

### Properties

- [callType](verida_client_ts._internal_.VdaClientConfig.md#calltype)
- [did](verida_client_ts._internal_.VdaClientConfig.md#did)
- [network](verida_client_ts._internal_.VdaClientConfig.md#network)
- [signKey](verida_client_ts._internal_.VdaClientConfig.md#signkey)
- [web3Options](verida_client_ts._internal_.VdaClientConfig.md#web3options)

## Properties

### callType

• `Optional` **callType**: [`Web3CallType`](../modules/verida_client_ts._internal_.md#web3calltype)

#### Defined in

packages/types/dist/VdaClientConfig.d.ts:15

___

### did

• `Optional` **did**: `string`

#### Defined in

packages/types/dist/VdaClientConfig.d.ts:13

___

### network

• **network**: [`EnvironmentType`](../enums/verida_client_ts._internal_.EnvironmentType.md)

#### Defined in

packages/types/dist/VdaClientConfig.d.ts:12

___

### signKey

• `Optional` **signKey**: `string`

#### Defined in

packages/types/dist/VdaClientConfig.d.ts:14

___

### web3Options

• `Optional` **web3Options**: [`Web3MetaTransactionConfig`](verida_client_ts._internal_.Web3MetaTransactionConfig.md) \| [`Web3SelfTransactionConfig`](verida_client_ts._internal_.Web3SelfTransactionConfig.md)

#### Defined in

packages/types/dist/VdaClientConfig.d.ts:16
