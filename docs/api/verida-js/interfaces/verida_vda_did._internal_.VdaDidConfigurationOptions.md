[root](../README.md) / [Modules](../modules.md) / [@verida/vda-did](../modules/verida_vda_did.md) / [<internal\>](../modules/verida_vda_did._internal_.md) / VdaDidConfigurationOptions

# Interface: VdaDidConfigurationOptions

[@verida/vda-did](../modules/verida_vda_did.md).[<internal\>](../modules/verida_vda_did._internal_.md).VdaDidConfigurationOptions

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

- [callType](verida_vda_did._internal_.VdaDidConfigurationOptions.md#calltype)
- [chainNameOrId](verida_vda_did._internal_.VdaDidConfigurationOptions.md#chainnameorid)
- [identifier](verida_vda_did._internal_.VdaDidConfigurationOptions.md#identifier)
- [signKey](verida_vda_did._internal_.VdaDidConfigurationOptions.md#signkey)
- [web3Options](verida_vda_did._internal_.VdaDidConfigurationOptions.md#web3options)

### Methods

- [signer](verida_vda_did._internal_.VdaDidConfigurationOptions.md#signer)

## Properties

### callType

• **callType**: [`Web3CallType`](../modules/verida_vda_did._internal_.md#web3calltype)

#### Defined in

packages/types/dist/Web3Interfaces.d.ts:93

___

### chainNameOrId

• `Optional` **chainNameOrId**: `string` \| `number`

#### Defined in

packages/types/dist/Web3Interfaces.d.ts:92

___

### identifier

• **identifier**: `string`

#### Defined in

packages/types/dist/Web3Interfaces.d.ts:89

___

### signKey

• `Optional` **signKey**: `string`

#### Defined in

packages/types/dist/Web3Interfaces.d.ts:90

___

### web3Options

• **web3Options**: [`VeridaWeb3ConfigurationOptions`](../modules/verida_vda_did._internal_.md#veridaweb3configurationoptions)

#### Defined in

packages/types/dist/Web3Interfaces.d.ts:94

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

packages/types/dist/Web3Interfaces.d.ts:91
