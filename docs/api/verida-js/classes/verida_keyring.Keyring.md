[root](../README.md) / [Modules](../modules.md) / [@verida/keyring](../modules/verida_keyring.md) / Keyring

# Class: Keyring

[@verida/keyring](../modules/verida_keyring.md).Keyring

Class that takes a signature (generated from a signed consent message) and generates a
collection of asymmetric keys, symmetric key and signing key for a given secure storage
context.

## Implements

- [`IKeyring`](../interfaces/verida_keyring._internal_.IKeyring.md)

## Table of contents

### Constructors

- [constructor](verida_keyring.Keyring.md#constructor)

### Properties

- [asymKeyPair](verida_keyring.Keyring.md#asymkeypair)
- [seed](verida_keyring.Keyring.md#seed)
- [signKeyPair](verida_keyring.Keyring.md#signkeypair)
- [storageContextKeys](verida_keyring.Keyring.md#storagecontextkeys)
- [symKey](verida_keyring.Keyring.md#symkey)

### Methods

- [\_init](verida_keyring.Keyring.md#_init)
- [asymDecrypt](verida_keyring.Keyring.md#asymdecrypt)
- [asymEncrypt](verida_keyring.Keyring.md#asymencrypt)
- [buildKey](verida_keyring.Keyring.md#buildkey)
- [buildSharedKeyEnd](verida_keyring.Keyring.md#buildsharedkeyend)
- [buildSharedKeyStart](verida_keyring.Keyring.md#buildsharedkeystart)
- [getKeys](verida_keyring.Keyring.md#getkeys)
- [getSeed](verida_keyring.Keyring.md#getseed)
- [getStorageContextKey](verida_keyring.Keyring.md#getstoragecontextkey)
- [publicKeys](verida_keyring.Keyring.md#publickeys)
- [sign](verida_keyring.Keyring.md#sign)
- [symDecrypt](verida_keyring.Keyring.md#symdecrypt)
- [symEncrypt](verida_keyring.Keyring.md#symencrypt)
- [verifySig](verida_keyring.Keyring.md#verifysig)

## Constructors

### constructor

• **new Keyring**(`seed`)

A string used as a seed for this keyring.

#### Parameters

| Name | Type |
| :------ | :------ |
| `seed` | `string` |

#### Defined in

[packages/keyring/src/keyring.ts:25](https://github.com/verida/verida-js/blob/5040472/packages/keyring/src/keyring.ts#L25)

## Properties

### asymKeyPair

• `Optional` **asymKeyPair**: [`BoxKeyPair`](../interfaces/verida_keyring._internal_.BoxKeyPair.md)

#### Defined in

[packages/keyring/src/keyring.ts:13](https://github.com/verida/verida-js/blob/5040472/packages/keyring/src/keyring.ts#L13)

___

### seed

• `Private` **seed**: `string`

#### Defined in

[packages/keyring/src/keyring.ts:17](https://github.com/verida/verida-js/blob/5040472/packages/keyring/src/keyring.ts#L17)

___

### signKeyPair

• `Optional` **signKeyPair**: [`SignKeyPair`](../interfaces/verida_keyring._internal_.SignKeyPair.md)

#### Defined in

[packages/keyring/src/keyring.ts:14](https://github.com/verida/verida-js/blob/5040472/packages/keyring/src/keyring.ts#L14)

___

### storageContextKeys

• `Private` **storageContextKeys**: `any` = `{}`

#### Defined in

[packages/keyring/src/keyring.ts:18](https://github.com/verida/verida-js/blob/5040472/packages/keyring/src/keyring.ts#L18)

___

### symKey

• `Optional` **symKey**: `Uint8Array`

#### Defined in

[packages/keyring/src/keyring.ts:15](https://github.com/verida/verida-js/blob/5040472/packages/keyring/src/keyring.ts#L15)

## Methods

### \_init

▸ **_init**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Implementation of

[IKeyring](../interfaces/verida_keyring._internal_.IKeyring.md).[_init](../interfaces/verida_keyring._internal_.IKeyring.md#_init)

#### Defined in

[packages/keyring/src/keyring.ts:53](https://github.com/verida/verida-js/blob/5040472/packages/keyring/src/keyring.ts#L53)

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

#### Implementation of

[IKeyring](../interfaces/verida_keyring._internal_.IKeyring.md).[asymDecrypt](../interfaces/verida_keyring._internal_.IKeyring.md#asymdecrypt)

#### Defined in

[packages/keyring/src/keyring.ts:138](https://github.com/verida/verida-js/blob/5040472/packages/keyring/src/keyring.ts#L138)

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

#### Implementation of

[IKeyring](../interfaces/verida_keyring._internal_.IKeyring.md).[asymEncrypt](../interfaces/verida_keyring._internal_.IKeyring.md#asymencrypt)

#### Defined in

[packages/keyring/src/keyring.ts:133](https://github.com/verida/verida-js/blob/5040472/packages/keyring/src/keyring.ts#L133)

___

### buildKey

▸ `Private` **buildKey**(`seed`, `keyType`): `Promise`<[`BoxKeyPair`](../interfaces/verida_keyring._internal_.BoxKeyPair.md)\>

Helper function that generates a key of the appropriate type

#### Parameters

| Name | Type |
| :------ | :------ |
| `seed` | `string` |
| `keyType` | [`KeyringKeyType`](../enums/verida_keyring._internal_.KeyringKeyType.md) |

#### Returns

`Promise`<[`BoxKeyPair`](../interfaces/verida_keyring._internal_.BoxKeyPair.md)\>

#### Defined in

[packages/keyring/src/keyring.ts:72](https://github.com/verida/verida-js/blob/5040472/packages/keyring/src/keyring.ts#L72)

___

### buildSharedKeyEnd

▸ **buildSharedKeyEnd**(`publicKey`): `Promise`<`Uint8Array`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicKey` | `Uint8Array` |

#### Returns

`Promise`<`Uint8Array`\>

#### Implementation of

[IKeyring](../interfaces/verida_keyring._internal_.IKeyring.md).[buildSharedKeyEnd](../interfaces/verida_keyring._internal_.IKeyring.md#buildsharedkeyend)

#### Defined in

[packages/keyring/src/keyring.ts:148](https://github.com/verida/verida-js/blob/5040472/packages/keyring/src/keyring.ts#L148)

___

### buildSharedKeyStart

▸ **buildSharedKeyStart**(`privateKey`): `Promise`<`Uint8Array`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `privateKey` | `Uint8Array` |

#### Returns

`Promise`<`Uint8Array`\>

#### Implementation of

[IKeyring](../interfaces/verida_keyring._internal_.IKeyring.md).[buildSharedKeyStart](../interfaces/verida_keyring._internal_.IKeyring.md#buildsharedkeystart)

#### Defined in

[packages/keyring/src/keyring.ts:143](https://github.com/verida/verida-js/blob/5040472/packages/keyring/src/keyring.ts#L143)

___

### getKeys

▸ **getKeys**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Implementation of

[IKeyring](../interfaces/verida_keyring._internal_.IKeyring.md).[getKeys](../interfaces/verida_keyring._internal_.IKeyring.md#getkeys)

#### Defined in

[packages/keyring/src/keyring.ts:29](https://github.com/verida/verida-js/blob/5040472/packages/keyring/src/keyring.ts#L29)

___

### getSeed

▸ **getSeed**(): `string`

#### Returns

`string`

#### Implementation of

[IKeyring](../interfaces/verida_keyring._internal_.IKeyring.md).[getSeed](../interfaces/verida_keyring._internal_.IKeyring.md#getseed)

#### Defined in

[packages/keyring/src/keyring.ts:153](https://github.com/verida/verida-js/blob/5040472/packages/keyring/src/keyring.ts#L153)

___

### getStorageContextKey

▸ **getStorageContextKey**(`databaseName`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `databaseName` | `string` |

#### Returns

`Promise`<`any`\>

#### Implementation of

[IKeyring](../interfaces/verida_keyring._internal_.IKeyring.md).[getStorageContextKey](../interfaces/verida_keyring._internal_.IKeyring.md#getstoragecontextkey)

#### Defined in

[packages/keyring/src/keyring.ts:157](https://github.com/verida/verida-js/blob/5040472/packages/keyring/src/keyring.ts#L157)

___

### publicKeys

▸ **publicKeys**(): `Promise`<[`KeyringPublicKeys`](../interfaces/verida_keyring._internal_.KeyringPublicKeys.md)\>

Generate an object containing all the public keys for this Keyring

#### Returns

`Promise`<[`KeyringPublicKeys`](../interfaces/verida_keyring._internal_.KeyringPublicKeys.md)\>

#### Implementation of

[IKeyring](../interfaces/verida_keyring._internal_.IKeyring.md).[publicKeys](../interfaces/verida_keyring._internal_.IKeyring.md#publickeys)

#### Defined in

[packages/keyring/src/keyring.ts:100](https://github.com/verida/verida-js/blob/5040472/packages/keyring/src/keyring.ts#L100)

___

### sign

▸ **sign**(`data`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`Promise`<`string`\>

#### Implementation of

[IKeyring](../interfaces/verida_keyring._internal_.IKeyring.md).[sign](../interfaces/verida_keyring._internal_.IKeyring.md#sign)

#### Defined in

[packages/keyring/src/keyring.ts:113](https://github.com/verida/verida-js/blob/5040472/packages/keyring/src/keyring.ts#L113)

___

### symDecrypt

▸ **symDecrypt**(`data`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` |

#### Returns

`Promise`<`any`\>

#### Implementation of

[IKeyring](../interfaces/verida_keyring._internal_.IKeyring.md).[symDecrypt](../interfaces/verida_keyring._internal_.IKeyring.md#symdecrypt)

#### Defined in

[packages/keyring/src/keyring.ts:128](https://github.com/verida/verida-js/blob/5040472/packages/keyring/src/keyring.ts#L128)

___

### symEncrypt

▸ **symEncrypt**(`data`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` |

#### Returns

`Promise`<`string`\>

#### Implementation of

[IKeyring](../interfaces/verida_keyring._internal_.IKeyring.md).[symEncrypt](../interfaces/verida_keyring._internal_.IKeyring.md#symencrypt)

#### Defined in

[packages/keyring/src/keyring.ts:123](https://github.com/verida/verida-js/blob/5040472/packages/keyring/src/keyring.ts#L123)

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

#### Implementation of

[IKeyring](../interfaces/verida_keyring._internal_.IKeyring.md).[verifySig](../interfaces/verida_keyring._internal_.IKeyring.md#verifysig)

#### Defined in

[packages/keyring/src/keyring.ts:118](https://github.com/verida/verida-js/blob/5040472/packages/keyring/src/keyring.ts#L118)
