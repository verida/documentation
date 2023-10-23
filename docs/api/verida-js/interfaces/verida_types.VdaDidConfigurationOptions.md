[root](../README.md) / [Modules](../modules.md) / [@verida/types](../modules/verida_types.md) / VdaDidConfigurationOptions

# Interface: VdaDidConfigurationOptions

[@verida/types](../modules/verida_types.md).VdaDidConfigurationOptions

Interface for VDA-DID instance creation.

`signKey` or `signer` must be provided

**`param`** DID

**`param`** private key of DID's controller. Used to generate signature in transactions to chains

**`param`** Signing function that accepts a private key and returns a signature in hex format

**`param`** Target chain name or chain id.

**`param`** : VDA-DID run mode. Values from vda-did-resolver

**`param`** Web3 configuration depending on call type. Values from vda-did-resolver

## Table of contents

### Properties

- [callType](verida_types.VdaDidConfigurationOptions.md#calltype)
- [chainNameOrId](verida_types.VdaDidConfigurationOptions.md#chainnameorid)
- [identifier](verida_types.VdaDidConfigurationOptions.md#identifier)
- [signKey](verida_types.VdaDidConfigurationOptions.md#signkey)
- [web3Options](verida_types.VdaDidConfigurationOptions.md#web3options)

### Methods

- [signer](verida_types.VdaDidConfigurationOptions.md#signer)

## Properties

### callType

• **callType**: [`Web3CallType`](../modules/verida_types.md#web3calltype)

#### Defined in

[packages/types/src/Web3Interfaces.ts:112](https://github.com/verida/verida-js/blob/032961c/packages/types/src/Web3Interfaces.ts#L112)

___

### chainNameOrId

• `Optional` **chainNameOrId**: `string` \| `number`

#### Defined in

[packages/types/src/Web3Interfaces.ts:110](https://github.com/verida/verida-js/blob/032961c/packages/types/src/Web3Interfaces.ts#L110)

___

### identifier

• **identifier**: `string`

#### Defined in

[packages/types/src/Web3Interfaces.ts:107](https://github.com/verida/verida-js/blob/032961c/packages/types/src/Web3Interfaces.ts#L107)

___

### signKey

• `Optional` **signKey**: `string`

#### Defined in

[packages/types/src/Web3Interfaces.ts:108](https://github.com/verida/verida-js/blob/032961c/packages/types/src/Web3Interfaces.ts#L108)

___

### web3Options

• **web3Options**: [`VeridaWeb3ConfigurationOptions`](../modules/verida_types.md#veridaweb3configurationoptions)

#### Defined in

[packages/types/src/Web3Interfaces.ts:113](https://github.com/verida/verida-js/blob/032961c/packages/types/src/Web3Interfaces.ts#L113)

## Methods

### signer

▸ `Optional` **signer**(`data`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`Promise`<`string`\>

#### Defined in

[packages/types/src/Web3Interfaces.ts:109](https://github.com/verida/verida-js/blob/032961c/packages/types/src/Web3Interfaces.ts#L109)
