[root](../README.md) / [Modules](../modules.md) / [@verida/vda-sbt-client](../modules/verida_vda_sbt_client.md) / SBTClientConfig

# Interface: SBTClientConfig

[@verida/vda-sbt-client](../modules/verida_vda_sbt_client.md).SBTClientConfig

Interface for vda-sbt-client instance creation. Same as VDA-DID configuration

**`param`** @string DID

**`param`** @string Private key of DID (hex string). Used to generate signature in transactions to chains

**`param`** @string Target chain name or chain id.

**`param`** @string 'web3' | 'gasless'

**`param`** object Web3 configuration depending on call type. Same as vda-did-resolver

## Table of contents

### Properties

- [callType](verida_vda_sbt_client.SBTClientConfig.md#calltype)
- [did](verida_vda_sbt_client.SBTClientConfig.md#did)
- [network](verida_vda_sbt_client.SBTClientConfig.md#network)
- [signKey](verida_vda_sbt_client.SBTClientConfig.md#signkey)
- [web3Options](verida_vda_sbt_client.SBTClientConfig.md#web3options)

## Properties

### callType

• `Optional` **callType**: [`Web3CallType`](../modules/verida_vda_sbt_client._internal_.md#web3calltype)

#### Defined in

[packages/vda-sbt-client/src/blockchain/blockchainApi.ts:30](https://github.com/verida/verida-js/blob/032961c/packages/vda-sbt-client/src/blockchain/blockchainApi.ts#L30)

___

### did

• `Optional` **did**: `string`

#### Defined in

[packages/vda-sbt-client/src/blockchain/blockchainApi.ts:28](https://github.com/verida/verida-js/blob/032961c/packages/vda-sbt-client/src/blockchain/blockchainApi.ts#L28)

___

### network

• **network**: [`EnvironmentType`](../enums/verida_vda_sbt_client._internal_.EnvironmentType.md)

#### Defined in

[packages/vda-sbt-client/src/blockchain/blockchainApi.ts:27](https://github.com/verida/verida-js/blob/032961c/packages/vda-sbt-client/src/blockchain/blockchainApi.ts#L27)

___

### signKey

• `Optional` **signKey**: `string`

#### Defined in

[packages/vda-sbt-client/src/blockchain/blockchainApi.ts:29](https://github.com/verida/verida-js/blob/032961c/packages/vda-sbt-client/src/blockchain/blockchainApi.ts#L29)

___

### web3Options

• `Optional` **web3Options**: [`Web3SelfTransactionConfig`](verida_vda_sbt_client._internal_.Web3SelfTransactionConfig.md) \| [`Web3MetaTransactionConfig`](verida_vda_sbt_client._internal_.Web3MetaTransactionConfig.md)

#### Defined in

[packages/vda-sbt-client/src/blockchain/blockchainApi.ts:31](https://github.com/verida/verida-js/blob/032961c/packages/vda-sbt-client/src/blockchain/blockchainApi.ts#L31)
