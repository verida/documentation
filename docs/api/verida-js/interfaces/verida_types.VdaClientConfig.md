[root](../README.md) / [Modules](../modules.md) / [@verida/types](../modules/verida_types.md) / VdaClientConfig

# Interface: VdaClientConfig

[@verida/types](../modules/verida_types.md).VdaClientConfig

Interface for vda-xxx-client instance creation.

**`param`** DID

**`param`** private key of DID. Used to generate signature in transactions to chains

**`param`** Target chain name or chain id.

**`param`** : VDA-DID run mode. Values from vda-did-resolver

**`param`** Web3 configuration depending on call type. Values from vda-did-resolver

## Table of contents

### Properties

- [callType](verida_types.VdaClientConfig.md#calltype)
- [did](verida_types.VdaClientConfig.md#did)
- [network](verida_types.VdaClientConfig.md#network)
- [signKey](verida_types.VdaClientConfig.md#signkey)
- [web3Options](verida_types.VdaClientConfig.md#web3options)

## Properties

### callType

• `Optional` **callType**: [`Web3CallType`](../modules/verida_types.md#web3calltype)

#### Defined in

[packages/types/src/VdaClientConfig.ts:15](https://github.com/verida/verida-js/blob/5040472/packages/types/src/VdaClientConfig.ts#L15)

___

### did

• `Optional` **did**: `string`

#### Defined in

[packages/types/src/VdaClientConfig.ts:13](https://github.com/verida/verida-js/blob/5040472/packages/types/src/VdaClientConfig.ts#L13)

___

### network

• **network**: [`EnvironmentType`](../enums/verida_types.EnvironmentType.md)

#### Defined in

[packages/types/src/VdaClientConfig.ts:12](https://github.com/verida/verida-js/blob/5040472/packages/types/src/VdaClientConfig.ts#L12)

___

### signKey

• `Optional` **signKey**: `string`

#### Defined in

[packages/types/src/VdaClientConfig.ts:14](https://github.com/verida/verida-js/blob/5040472/packages/types/src/VdaClientConfig.ts#L14)

___

### web3Options

• `Optional` **web3Options**: [`Web3SelfTransactionConfig`](verida_types.Web3SelfTransactionConfig.md) \| [`Web3MetaTransactionConfig`](verida_types.Web3MetaTransactionConfig.md)

#### Defined in

[packages/types/src/VdaClientConfig.ts:16](https://github.com/verida/verida-js/blob/5040472/packages/types/src/VdaClientConfig.ts#L16)
