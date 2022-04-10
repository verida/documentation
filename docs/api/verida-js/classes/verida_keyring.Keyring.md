[root](../README.md) / [Modules](../modules.md) / [@verida/keyring](../modules/verida_keyring.md) / Keyring

# Class: Keyring

[@verida/keyring](../modules/verida_keyring.md).Keyring

Class that takes a signature (generated from a signed consent message) and generates a
collection of asymmetric keys, symmetric key and signing key for a given secure storage
context.

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
The seed should be a hex signature obtained by 3ID signed consent message.

#### Parameters

| Name | Type |
| :------ | :------ |
| `seed` | `string` |

#### Defined in

[keyring/src/keyring.ts:27](https://github.com/verida/verida-js/blob/a39619b/packages/keyring/src/keyring.ts#L27)

## Properties

### asymKeyPair

• `Optional` **asymKeyPair**: `BoxKeyPair`

#### Defined in

[keyring/src/keyring.ts:14](https://github.com/verida/verida-js/blob/a39619b/packages/keyring/src/keyring.ts#L14)

___

### seed

• `Private` **seed**: `string`

#### Defined in

[keyring/src/keyring.ts:18](https://github.com/verida/verida-js/blob/a39619b/packages/keyring/src/keyring.ts#L18)

___

### signKeyPair

• `Optional` **signKeyPair**: `SignKeyPair`

#### Defined in

[keyring/src/keyring.ts:15](https://github.com/verida/verida-js/blob/a39619b/packages/keyring/src/keyring.ts#L15)

___

### storageContextKeys

• `Private` **storageContextKeys**: `any` = `{}`

#### Defined in

[keyring/src/keyring.ts:19](https://github.com/verida/verida-js/blob/a39619b/packages/keyring/src/keyring.ts#L19)

___

### symKey

• `Optional` **symKey**: `Uint8Array`

#### Defined in

[keyring/src/keyring.ts:16](https://github.com/verida/verida-js/blob/a39619b/packages/keyring/src/keyring.ts#L16)

## Methods

### \_init

▸ **_init**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[keyring/src/keyring.ts:50](https://github.com/verida/verida-js/blob/a39619b/packages/keyring/src/keyring.ts#L50)

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

[keyring/src/keyring.ts:135](https://github.com/verida/verida-js/blob/a39619b/packages/keyring/src/keyring.ts#L135)

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

[keyring/src/keyring.ts:130](https://github.com/verida/verida-js/blob/a39619b/packages/keyring/src/keyring.ts#L130)

___

### buildKey

▸ `Private` **buildKey**(`seed`, `keyType`): `Promise`<`BoxKeyPair`\>

Helper function that generates a key of the appropriate type

#### Parameters

| Name | Type |
| :------ | :------ |
| `seed` | `string` |
| `keyType` | `KeyringKeyType` |

#### Returns

`Promise`<`BoxKeyPair`\>

#### Defined in

[keyring/src/keyring.ts:69](https://github.com/verida/verida-js/blob/a39619b/packages/keyring/src/keyring.ts#L69)

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

[keyring/src/keyring.ts:145](https://github.com/verida/verida-js/blob/a39619b/packages/keyring/src/keyring.ts#L145)

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

[keyring/src/keyring.ts:140](https://github.com/verida/verida-js/blob/a39619b/packages/keyring/src/keyring.ts#L140)

___

### getKeys

▸ **getKeys**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

[keyring/src/keyring.ts:31](https://github.com/verida/verida-js/blob/a39619b/packages/keyring/src/keyring.ts#L31)

___

### getSeed

▸ **getSeed**(): `string`

#### Returns

`string`

#### Defined in

[keyring/src/keyring.ts:150](https://github.com/verida/verida-js/blob/a39619b/packages/keyring/src/keyring.ts#L150)

___

### getStorageContextKey

▸ **getStorageContextKey**(`databaseName`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `databaseName` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[keyring/src/keyring.ts:154](https://github.com/verida/verida-js/blob/a39619b/packages/keyring/src/keyring.ts#L154)

___

### publicKeys

▸ **publicKeys**(): `Promise`<{ `asymPublicKey`: `Uint8Array` ; `asymPublicKeyBase58`: `string` ; `asymPublicKeyHex`: `string` ; `signPublicKey`: `Uint8Array` ; `signPublicKeyBase58`: `string` ; `signPublicKeyHex`: `string`  }\>

Generate an object containing all the public keys for this Keyring

#### Returns

`Promise`<{ `asymPublicKey`: `Uint8Array` ; `asymPublicKeyBase58`: `string` ; `asymPublicKeyHex`: `string` ; `signPublicKey`: `Uint8Array` ; `signPublicKeyBase58`: `string` ; `signPublicKeyHex`: `string`  }\>

#### Defined in

[keyring/src/keyring.ts:97](https://github.com/verida/verida-js/blob/a39619b/packages/keyring/src/keyring.ts#L97)

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

[keyring/src/keyring.ts:110](https://github.com/verida/verida-js/blob/a39619b/packages/keyring/src/keyring.ts#L110)

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

[keyring/src/keyring.ts:125](https://github.com/verida/verida-js/blob/a39619b/packages/keyring/src/keyring.ts#L125)

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

[keyring/src/keyring.ts:120](https://github.com/verida/verida-js/blob/a39619b/packages/keyring/src/keyring.ts#L120)

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

[keyring/src/keyring.ts:115](https://github.com/verida/verida-js/blob/a39619b/packages/keyring/src/keyring.ts#L115)
