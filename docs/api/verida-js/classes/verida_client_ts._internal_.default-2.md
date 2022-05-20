[root](../README.md) / [Modules](../modules.md) / [@verida/client-ts](../modules/verida_client_ts.md) / [<internal\>](../modules/verida_client_ts._internal_.md) / default

# Class: default

[@verida/client-ts](../modules/verida_client_ts.md).[<internal\>](../modules/verida_client_ts._internal_.md).default

Class that takes a signature (generated from a signed consent message) and generates a
collection of asymmetric keys, symmetric key and signing key for a given secure storage
context.

## Table of contents

### Constructors

- [constructor](verida_client_ts._internal_.default-2.md#constructor)

### Properties

- [asymKeyPair](verida_client_ts._internal_.default-2.md#asymkeypair)
- [buildKey](verida_client_ts._internal_.default-2.md#buildkey)
- [seed](verida_client_ts._internal_.default-2.md#seed)
- [signKeyPair](verida_client_ts._internal_.default-2.md#signkeypair)
- [storageContextKeys](verida_client_ts._internal_.default-2.md#storagecontextkeys)
- [symKey](verida_client_ts._internal_.default-2.md#symkey)

### Methods

- [\_init](verida_client_ts._internal_.default-2.md#_init)
- [asymDecrypt](verida_client_ts._internal_.default-2.md#asymdecrypt)
- [asymEncrypt](verida_client_ts._internal_.default-2.md#asymencrypt)
- [buildSharedKeyEnd](verida_client_ts._internal_.default-2.md#buildsharedkeyend)
- [buildSharedKeyStart](verida_client_ts._internal_.default-2.md#buildsharedkeystart)
- [getKeys](verida_client_ts._internal_.default-2.md#getkeys)
- [getSeed](verida_client_ts._internal_.default-2.md#getseed)
- [getStorageContextKey](verida_client_ts._internal_.default-2.md#getstoragecontextkey)
- [publicKeys](verida_client_ts._internal_.default-2.md#publickeys)
- [sign](verida_client_ts._internal_.default-2.md#sign)
- [symDecrypt](verida_client_ts._internal_.default-2.md#symdecrypt)
- [symEncrypt](verida_client_ts._internal_.default-2.md#symencrypt)
- [verifySig](verida_client_ts._internal_.default-2.md#verifysig)

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

• `Optional` **asymKeyPair**: [`BoxKeyPair`](../interfaces/verida_client_ts._internal_.BoxKeyPair.md)

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

• `Optional` **signKeyPair**: [`SignKeyPair`](../interfaces/verida_client_ts._internal_.SignKeyPair.md)

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
