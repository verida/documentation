[root](../README.md) / [Modules](../modules.md) / [@verida/account](../modules/verida_account.md) / [<internal\>](../modules/verida_account._internal_.md) / default

# Class: default

[@verida/account](../modules/verida_account.md).[<internal\>](../modules/verida_account._internal_.md).default

Class that takes a signature (generated from a signed consent message) and generates a
collection of asymmetric keys, symmetric key and signing key for a given secure storage
context.

## Table of contents

### Constructors

- [constructor](verida_account._internal_.default.md#constructor)

### Properties

- [asymKeyPair](verida_account._internal_.default.md#asymkeypair)
- [buildKey](verida_account._internal_.default.md#buildkey)
- [seed](verida_account._internal_.default.md#seed)
- [signKeyPair](verida_account._internal_.default.md#signkeypair)
- [storageContextKeys](verida_account._internal_.default.md#storagecontextkeys)
- [symKey](verida_account._internal_.default.md#symkey)

### Methods

- [\_init](verida_account._internal_.default.md#_init)
- [asymDecrypt](verida_account._internal_.default.md#asymdecrypt)
- [asymEncrypt](verida_account._internal_.default.md#asymencrypt)
- [buildSharedKeyEnd](verida_account._internal_.default.md#buildsharedkeyend)
- [buildSharedKeyStart](verida_account._internal_.default.md#buildsharedkeystart)
- [getKeys](verida_account._internal_.default.md#getkeys)
- [getSeed](verida_account._internal_.default.md#getseed)
- [getStorageContextKey](verida_account._internal_.default.md#getstoragecontextkey)
- [publicKeys](verida_account._internal_.default.md#publickeys)
- [sign](verida_account._internal_.default.md#sign)
- [symDecrypt](verida_account._internal_.default.md#symdecrypt)
- [symEncrypt](verida_account._internal_.default.md#symencrypt)
- [verifySig](verida_account._internal_.default.md#verifysig)

## Constructors

### constructor

• **new default**(`seed`)

A string used as a seed for this keyring.
The seed should be a hex signature obtained by 3ID signed consent message.

#### Parameters

| Name | Type |
| :------ | :------ |
| `seed` | `string` |

#### Defined in

packages/keyring/dist/keyring.d.ts:19

## Properties

### asymKeyPair

• `Optional` **asymKeyPair**: `any`

#### Defined in

packages/keyring/dist/keyring.d.ts:8

___

### buildKey

• `Private` **buildKey**: `any`

Helper function that generates a key of the appropriate type

**`param`**

**`param`**

**`returns`**

#### Defined in

packages/keyring/dist/keyring.d.ts:29

___

### seed

• `Private` **seed**: `any`

#### Defined in

packages/keyring/dist/keyring.d.ts:11

___

### signKeyPair

• `Optional` **signKeyPair**: `any`

#### Defined in

packages/keyring/dist/keyring.d.ts:9

___

### storageContextKeys

• `Private` **storageContextKeys**: `any`

#### Defined in

packages/keyring/dist/keyring.d.ts:12

___

### symKey

• `Optional` **symKey**: `Uint8Array`

#### Defined in

packages/keyring/dist/keyring.d.ts:10

## Methods

### \_init

▸ **_init**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

packages/keyring/dist/keyring.d.ts:21

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

packages/keyring/dist/keyring.d.ts:48

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

packages/keyring/dist/keyring.d.ts:47

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

packages/keyring/dist/keyring.d.ts:50

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

packages/keyring/dist/keyring.d.ts:49

___

### getKeys

▸ **getKeys**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

packages/keyring/dist/keyring.d.ts:20

___

### getSeed

▸ **getSeed**(): `string`

#### Returns

`string`

#### Defined in

packages/keyring/dist/keyring.d.ts:51

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

packages/keyring/dist/keyring.d.ts:52

___

### publicKeys

▸ **publicKeys**(): `Promise`<{ `asymPublicKey`: `Uint8Array` ; `asymPublicKeyBase58`: `string` ; `asymPublicKeyHex`: `string` ; `signPublicKey`: `Uint8Array` ; `signPublicKeyBase58`: `string` ; `signPublicKeyHex`: `string`  }\>

Generate an object containing all the public keys for this Keyring

#### Returns

`Promise`<{ `asymPublicKey`: `Uint8Array` ; `asymPublicKeyBase58`: `string` ; `asymPublicKeyHex`: `string` ; `signPublicKey`: `Uint8Array` ; `signPublicKeyBase58`: `string` ; `signPublicKeyHex`: `string`  }\>

#### Defined in

packages/keyring/dist/keyring.d.ts:35

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

packages/keyring/dist/keyring.d.ts:43

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

packages/keyring/dist/keyring.d.ts:46

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

packages/keyring/dist/keyring.d.ts:45

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

packages/keyring/dist/keyring.d.ts:44
