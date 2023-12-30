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

[packages/types/src/Web3Interfaces.ts:126](https://github.com/verida/verida-js/blob/5040472/packages/types/src/Web3Interfaces.ts#L126)

___

### chainNameOrId

• `Optional` **chainNameOrId**: `string` \| `number`

#### Defined in

[packages/types/src/Web3Interfaces.ts:124](https://github.com/verida/verida-js/blob/5040472/packages/types/src/Web3Interfaces.ts#L124)

___

### identifier

• **identifier**: `string`

#### Defined in

[packages/types/src/Web3Interfaces.ts:121](https://github.com/verida/verida-js/blob/5040472/packages/types/src/Web3Interfaces.ts#L121)

___

### signKey

• `Optional` **signKey**: `string`

#### Defined in

[packages/types/src/Web3Interfaces.ts:122](https://github.com/verida/verida-js/blob/5040472/packages/types/src/Web3Interfaces.ts#L122)

___

### web3Options

• **web3Options**: [`VeridaWeb3ConfigurationOptions`](../modules/verida_types.md#veridaweb3configurationoptions)

#### Defined in

[packages/types/src/Web3Interfaces.ts:127](https://github.com/verida/verida-js/blob/5040472/packages/types/src/Web3Interfaces.ts#L127)

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

[packages/types/src/Web3Interfaces.ts:123](https://github.com/verida/verida-js/blob/5040472/packages/types/src/Web3Interfaces.ts#L123)
