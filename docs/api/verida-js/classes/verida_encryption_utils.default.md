[root](../README.md) / [Modules](../modules.md) / [@verida/encryption-utils](../modules/verida_encryption_utils.md) / default

# Class: default

[@verida/encryption-utils](../modules/verida_encryption_utils.md).default

Utilizes `tweetnacl` for symmetric and asymmetric encryption.

Utilizes `keccak256` algorithm to hash signed data and `secp256k1` signature algorithm for the resulting signature.

## Table of contents

### Constructors

- [constructor](verida_encryption_utils.default.md#constructor)

### Methods

- [asymDecrypt](verida_encryption_utils.default.md#asymdecrypt)
- [asymEncrypt](verida_encryption_utils.default.md#asymencrypt)
- [base58ToHex](verida_encryption_utils.default.md#base58tohex)
- [bytesToHex](verida_encryption_utils.default.md#bytestohex)
- [decodeBase64](verida_encryption_utils.default.md#decodebase64)
- [encodeBase64](verida_encryption_utils.default.md#encodebase64)
- [hash](verida_encryption_utils.default.md#hash)
- [hashBytes](verida_encryption_utils.default.md#hashbytes)
- [hexToBase58](verida_encryption_utils.default.md#hextobase58)
- [hexToBytes](verida_encryption_utils.default.md#hextobytes)
- [publicKeyToAddress](verida_encryption_utils.default.md#publickeytoaddress)
- [randomKey](verida_encryption_utils.default.md#randomkey)
- [randomKeyPair](verida_encryption_utils.default.md#randomkeypair)
- [sharedKey](verida_encryption_utils.default.md#sharedkey)
- [signData](verida_encryption_utils.default.md#signdata)
- [symDecrypt](verida_encryption_utils.default.md#symdecrypt)
- [symDecryptBuffer](verida_encryption_utils.default.md#symdecryptbuffer)
- [symEncrypt](verida_encryption_utils.default.md#symencrypt)
- [symEncryptBuffer](verida_encryption_utils.default.md#symencryptbuffer)
- [verifySig](verida_encryption_utils.default.md#verifysig)

## Constructors

### constructor

• **new default**()

## Methods

### asymDecrypt

▸ `Static` **asymDecrypt**(`messageWithNonce`, `secretOrSharedKey`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `messageWithNonce` | `any` |
| `secretOrSharedKey` | `Uint8Array` |

#### Returns

`any`

#### Defined in

[encryption-utils/src/index.ts:79](https://github.com/verida/verida-js/blob/a39619b/packages/encryption-utils/src/index.ts#L79)

___

### asymEncrypt

▸ `Static` **asymEncrypt**(`data`, `secretOrSharedKey`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |
| `secretOrSharedKey` | `Uint8Array` |

#### Returns

`string`

#### Defined in

[encryption-utils/src/index.ts:66](https://github.com/verida/verida-js/blob/a39619b/packages/encryption-utils/src/index.ts#L66)

___

### base58ToHex

▸ `Static` **base58ToHex**(`b58`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `b58` | `string` |

#### Returns

`Uint8Array`

#### Defined in

[encryption-utils/src/index.ts:152](https://github.com/verida/verida-js/blob/a39619b/packages/encryption-utils/src/index.ts#L152)

___

### bytesToHex

▸ `Static` **bytesToHex**(`bytes`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |

#### Returns

`string`

#### Defined in

[encryption-utils/src/index.ts:164](https://github.com/verida/verida-js/blob/a39619b/packages/encryption-utils/src/index.ts#L164)

___

### decodeBase64

▸ `Static` **decodeBase64**(`data`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`Uint8Array`

#### Defined in

[encryption-utils/src/index.ts:131](https://github.com/verida/verida-js/blob/a39619b/packages/encryption-utils/src/index.ts#L131)

___

### encodeBase64

▸ `Static` **encodeBase64**(`data`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`string`

#### Defined in

[encryption-utils/src/index.ts:135](https://github.com/verida/verida-js/blob/a39619b/packages/encryption-utils/src/index.ts#L135)

___

### hash

▸ `Static` **hash**(`data`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`string`

#### Defined in

[encryption-utils/src/index.ts:139](https://github.com/verida/verida-js/blob/a39619b/packages/encryption-utils/src/index.ts#L139)

___

### hashBytes

▸ `Static` **hashBytes**(`data`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`Uint8Array`

#### Defined in

[encryption-utils/src/index.ts:147](https://github.com/verida/verida-js/blob/a39619b/packages/encryption-utils/src/index.ts#L147)

___

### hexToBase58

▸ `Static` **hexToBase58**(`hex`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `hex` | `string` |

#### Returns

`string`

#### Defined in

[encryption-utils/src/index.ts:156](https://github.com/verida/verida-js/blob/a39619b/packages/encryption-utils/src/index.ts#L156)

___

### hexToBytes

▸ `Static` **hexToBytes**(`hex`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `hex` | `string` |

#### Returns

`Uint8Array`

#### Defined in

[encryption-utils/src/index.ts:160](https://github.com/verida/verida-js/blob/a39619b/packages/encryption-utils/src/index.ts#L160)

___

### publicKeyToAddress

▸ `Static` **publicKeyToAddress**(`publicKeyHex`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicKeyHex` | `string` |

#### Returns

`string`

#### Defined in

[encryption-utils/src/index.ts:168](https://github.com/verida/verida-js/blob/a39619b/packages/encryption-utils/src/index.ts#L168)

___

### randomKey

▸ `Static` **randomKey**(`length`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `length` | `number` |

#### Returns

`Uint8Array`

#### Defined in

[encryption-utils/src/index.ts:101](https://github.com/verida/verida-js/blob/a39619b/packages/encryption-utils/src/index.ts#L101)

___

### randomKeyPair

▸ `Static` **randomKeyPair**(): `BoxKeyPair`

#### Returns

`BoxKeyPair`

#### Defined in

[encryption-utils/src/index.ts:105](https://github.com/verida/verida-js/blob/a39619b/packages/encryption-utils/src/index.ts#L105)

___

### sharedKey

▸ `Static` **sharedKey**(`publicKeyBytes`, `privateKeyBytes`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicKeyBytes` | `Uint8Array` |
| `privateKeyBytes` | `Uint8Array` |

#### Returns

`Uint8Array`

#### Defined in

[encryption-utils/src/index.ts:97](https://github.com/verida/verida-js/blob/a39619b/packages/encryption-utils/src/index.ts#L97)

___

### signData

▸ `Static` **signData**(`data`, `privateKeyBytes`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |
| `privateKeyBytes` | `Uint8Array` |

#### Returns

`string`

#### Defined in

[encryption-utils/src/index.ts:109](https://github.com/verida/verida-js/blob/a39619b/packages/encryption-utils/src/index.ts#L109)

___

### symDecrypt

▸ `Static` **symDecrypt**(`messageWithNonce`, `keyUint8Array`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `messageWithNonce` | `any` |
| `keyUint8Array` | `Uint8Array` |

#### Returns

`any`

#### Defined in

[encryption-utils/src/index.ts:60](https://github.com/verida/verida-js/blob/a39619b/packages/encryption-utils/src/index.ts#L60)

___

### symDecryptBuffer

▸ `Static` **symDecryptBuffer**(`messageWithNonce`, `keyUint8Array`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `messageWithNonce` | `any` |
| `keyUint8Array` | `Uint8Array` |

#### Returns

`Uint8Array`

#### Defined in

[encryption-utils/src/index.ts:35](https://github.com/verida/verida-js/blob/a39619b/packages/encryption-utils/src/index.ts#L35)

___

### symEncrypt

▸ `Static` **symEncrypt**(`data`, `keyUint8Array`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |
| `keyUint8Array` | `Uint8Array` |

#### Returns

`string`

#### Defined in

[encryption-utils/src/index.ts:51](https://github.com/verida/verida-js/blob/a39619b/packages/encryption-utils/src/index.ts#L51)

___

### symEncryptBuffer

▸ `Static` **symEncryptBuffer**(`data`, `keyUint8Array`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |
| `keyUint8Array` | `Uint8Array` |

#### Returns

`string`

#### Defined in

[encryption-utils/src/index.ts:22](https://github.com/verida/verida-js/blob/a39619b/packages/encryption-utils/src/index.ts#L22)

___

### verifySig

▸ `Static` **verifySig**(`data`, `signature`, `publicKey`): `boolean`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `any` |  |
| `signature` | `string` |  |
| `publicKey` | `string` | Hex encoded public key |

#### Returns

`boolean`

#### Defined in

[encryption-utils/src/index.ts:123](https://github.com/verida/verida-js/blob/a39619b/packages/encryption-utils/src/index.ts#L123)
