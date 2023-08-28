[root](../README.md) / [Modules](../modules.md) / [@verida/vda-name-client](../modules/verida_vda_name_client.md) / NameClientConfig

# Interface: NameClientConfig

[@verida/vda-name-client](../modules/verida_vda_name_client.md).NameClientConfig

Interface for vda-name-client instance creation. Same as VDA-DID configuration

**`param`** DID

**`param`** private key of DID. Used to generate signature in transactions to chains

**`param`** Target chain name or chain id.

**`param`** : VDA-DID run mode. Values from vda-did-resolver

**`param`** Web3 configuration depending on call type. Values from vda-did-resolver

## Table of contents

### Properties

- [callType](verida_vda_name_client.NameClientConfig.md#calltype)
- [did](verida_vda_name_client.NameClientConfig.md#did)
- [network](verida_vda_name_client.NameClientConfig.md#network)
- [signKey](verida_vda_name_client.NameClientConfig.md#signkey)
- [web3Options](verida_vda_name_client.NameClientConfig.md#web3options)

## Properties

### callType

• `Optional` **callType**: [`Web3CallType`](../modules/verida_vda_name_client._internal_.md#web3calltype)

#### Defined in

[packages/vda-name-client/src/blockchain/blockchainApi.ts:28](https://github.com/verida/verida-js/blob/a690f60/packages/vda-name-client/src/blockchain/blockchainApi.ts#L28)

___

### did

• `Optional` **did**: `string`

#### Defined in

[packages/vda-name-client/src/blockchain/blockchainApi.ts:26](https://github.com/verida/verida-js/blob/a690f60/packages/vda-name-client/src/blockchain/blockchainApi.ts#L26)

___

### network

• **network**: [`EnvironmentType`](../enums/verida_vda_name_client._internal_.EnvironmentType.md)

#### Defined in

[packages/vda-name-client/src/blockchain/blockchainApi.ts:25](https://github.com/verida/verida-js/blob/a690f60/packages/vda-name-client/src/blockchain/blockchainApi.ts#L25)

___

### signKey

• `Optional` **signKey**: `string`

#### Defined in

[packages/vda-name-client/src/blockchain/blockchainApi.ts:27](https://github.com/verida/verida-js/blob/a690f60/packages/vda-name-client/src/blockchain/blockchainApi.ts#L27)

___

### web3Options

• `Optional` **web3Options**: [`Web3SelfTransactionConfig`](verida_vda_name_client._internal_.Web3SelfTransactionConfig.md) \| [`Web3MetaTransactionConfig`](verida_vda_name_client._internal_.Web3MetaTransactionConfig.md)

#### Defined in

[packages/vda-name-client/src/blockchain/blockchainApi.ts:29](https://github.com/verida/verida-js/blob/a690f60/packages/vda-name-client/src/blockchain/blockchainApi.ts#L29)
