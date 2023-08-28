[root](../README.md) / [Modules](../modules.md) / [@verida/types](../modules/verida_types.md) / IKeyring

# Interface: IKeyring

[@verida/types](../modules/verida_types.md).IKeyring

## Table of contents

### Methods

- [\_init](verida_types.IKeyring.md#_init)
- [asymDecrypt](verida_types.IKeyring.md#asymdecrypt)
- [asymEncrypt](verida_types.IKeyring.md#asymencrypt)
- [buildSharedKeyEnd](verida_types.IKeyring.md#buildsharedkeyend)
- [buildSharedKeyStart](verida_types.IKeyring.md#buildsharedkeystart)
- [getKeys](verida_types.IKeyring.md#getkeys)
- [getSeed](verida_types.IKeyring.md#getseed)
- [getStorageContextKey](verida_types.IKeyring.md#getstoragecontextkey)
- [publicKeys](verida_types.IKeyring.md#publickeys)
- [sign](verida_types.IKeyring.md#sign)
- [symDecrypt](verida_types.IKeyring.md#symdecrypt)
- [symEncrypt](verida_types.IKeyring.md#symencrypt)
- [verifySig](verida_types.IKeyring.md#verifysig)

## Methods

### \_init

▸ **_init**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/types/src/IKeyring.ts:5](https://github.com/verida/verida-js/blob/a690f60/packages/types/src/IKeyring.ts#L5)

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

[packages/types/src/IKeyring.ts:19](https://github.com/verida/verida-js/blob/a690f60/packages/types/src/IKeyring.ts#L19)

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

[packages/types/src/IKeyring.ts:17](https://github.com/verida/verida-js/blob/a690f60/packages/types/src/IKeyring.ts#L17)

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

[packages/types/src/IKeyring.ts:23](https://github.com/verida/verida-js/blob/a690f60/packages/types/src/IKeyring.ts#L23)

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

[packages/types/src/IKeyring.ts:21](https://github.com/verida/verida-js/blob/a690f60/packages/types/src/IKeyring.ts#L21)

___

### getKeys

▸ **getKeys**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

[packages/types/src/IKeyring.ts:3](https://github.com/verida/verida-js/blob/a690f60/packages/types/src/IKeyring.ts#L3)

___

### getSeed

▸ **getSeed**(): `string`

#### Returns

`string`

#### Defined in

[packages/types/src/IKeyring.ts:25](https://github.com/verida/verida-js/blob/a690f60/packages/types/src/IKeyring.ts#L25)

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

[packages/types/src/IKeyring.ts:27](https://github.com/verida/verida-js/blob/a690f60/packages/types/src/IKeyring.ts#L27)

___

### publicKeys

▸ **publicKeys**(): `Promise`<[`KeyringPublicKeys`](verida_types.KeyringPublicKeys.md)\>

#### Returns

`Promise`<[`KeyringPublicKeys`](verida_types.KeyringPublicKeys.md)\>

#### Defined in

[packages/types/src/IKeyring.ts:7](https://github.com/verida/verida-js/blob/a690f60/packages/types/src/IKeyring.ts#L7)

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

[packages/types/src/IKeyring.ts:9](https://github.com/verida/verida-js/blob/a690f60/packages/types/src/IKeyring.ts#L9)

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

[packages/types/src/IKeyring.ts:15](https://github.com/verida/verida-js/blob/a690f60/packages/types/src/IKeyring.ts#L15)

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

[packages/types/src/IKeyring.ts:13](https://github.com/verida/verida-js/blob/a690f60/packages/types/src/IKeyring.ts#L13)

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

[packages/types/src/IKeyring.ts:11](https://github.com/verida/verida-js/blob/a690f60/packages/types/src/IKeyring.ts#L11)
