[root](../README.md) / [Modules](../modules.md) / [@verida/vda-did](../modules/verida_vda_did.md) / [<internal\>](../modules/verida_vda_did._internal_.md) / IKeyring

# Interface: IKeyring

[@verida/vda-did](../modules/verida_vda_did.md).[<internal\>](../modules/verida_vda_did._internal_.md).IKeyring

## Table of contents

### Methods

- [\_init](verida_vda_did._internal_.IKeyring.md#_init)
- [asymDecrypt](verida_vda_did._internal_.IKeyring.md#asymdecrypt)
- [asymEncrypt](verida_vda_did._internal_.IKeyring.md#asymencrypt)
- [buildSharedKeyEnd](verida_vda_did._internal_.IKeyring.md#buildsharedkeyend)
- [buildSharedKeyStart](verida_vda_did._internal_.IKeyring.md#buildsharedkeystart)
- [getKeys](verida_vda_did._internal_.IKeyring.md#getkeys)
- [getSeed](verida_vda_did._internal_.IKeyring.md#getseed)
- [getStorageContextKey](verida_vda_did._internal_.IKeyring.md#getstoragecontextkey)
- [publicKeys](verida_vda_did._internal_.IKeyring.md#publickeys)
- [sign](verida_vda_did._internal_.IKeyring.md#sign)
- [symDecrypt](verida_vda_did._internal_.IKeyring.md#symdecrypt)
- [symEncrypt](verida_vda_did._internal_.IKeyring.md#symencrypt)
- [verifySig](verida_vda_did._internal_.IKeyring.md#verifysig)

## Methods

### \_init

▸ **_init**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

packages/types/dist/IKeyring.d.ts:3

___

### asymDecrypt

▸ **asymDecrypt**(`messageWithNonce`, `secretOrSharedKey`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `messageWithNonce` | `string` |
| `secretOrSharedKey` | `Uint8Array` |

#### Returns

`Promise`<`any`\>

#### Defined in

packages/types/dist/IKeyring.d.ts:10

___

### asymEncrypt

▸ **asymEncrypt**(`data`, `secretOrSharedKey`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` |
| `secretOrSharedKey` | `Uint8Array` |

#### Returns

`Promise`<`string`\>

#### Defined in

packages/types/dist/IKeyring.d.ts:9

___

### buildSharedKeyEnd

▸ **buildSharedKeyEnd**(`publicKey`): `Promise`<`Uint8Array`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicKey` | `Uint8Array` |

#### Returns

`Promise`<`Uint8Array`\>

#### Defined in

packages/types/dist/IKeyring.d.ts:12

___

### buildSharedKeyStart

▸ **buildSharedKeyStart**(`privateKey`): `Promise`<`Uint8Array`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `privateKey` | `Uint8Array` |

#### Returns

`Promise`<`Uint8Array`\>

#### Defined in

packages/types/dist/IKeyring.d.ts:11

___

### getKeys

▸ **getKeys**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

packages/types/dist/IKeyring.d.ts:2

___

### getSeed

▸ **getSeed**(): `string`

#### Returns

`string`

#### Defined in

packages/types/dist/IKeyring.d.ts:13

___

### getStorageContextKey

▸ **getStorageContextKey**(`databaseName`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `databaseName` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

packages/types/dist/IKeyring.d.ts:14

___

### publicKeys

▸ **publicKeys**(): `Promise`<[`KeyringPublicKeys`](verida_vda_did._internal_.KeyringPublicKeys.md)\>

#### Returns

`Promise`<[`KeyringPublicKeys`](verida_vda_did._internal_.KeyringPublicKeys.md)\>

#### Defined in

packages/types/dist/IKeyring.d.ts:4

___

### sign

▸ **sign**(`data`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`Promise`<`string`\>

#### Defined in

packages/types/dist/IKeyring.d.ts:5

___

### symDecrypt

▸ **symDecrypt**(`data`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

packages/types/dist/IKeyring.d.ts:8

___

### symEncrypt

▸ **symEncrypt**(`data`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

packages/types/dist/IKeyring.d.ts:7

___

### verifySig

▸ **verifySig**(`data`, `sig`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` |
| `sig` | `string` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

packages/types/dist/IKeyring.d.ts:6
