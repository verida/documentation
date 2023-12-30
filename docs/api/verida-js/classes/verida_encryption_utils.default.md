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
- [getSigner](verida_encryption_utils.default.md#getsigner)
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

[packages/encryption-utils/src/index.ts:80](https://github.com/verida/verida-js/blob/5040472/packages/encryption-utils/src/index.ts#L80)

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

[packages/encryption-utils/src/index.ts:67](https://github.com/verida/verida-js/blob/5040472/packages/encryption-utils/src/index.ts#L67)

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

[packages/encryption-utils/src/index.ts:182](https://github.com/verida/verida-js/blob/5040472/packages/encryption-utils/src/index.ts#L182)

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

[packages/encryption-utils/src/index.ts:194](https://github.com/verida/verida-js/blob/5040472/packages/encryption-utils/src/index.ts#L194)

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

[packages/encryption-utils/src/index.ts:157](https://github.com/verida/verida-js/blob/5040472/packages/encryption-utils/src/index.ts#L157)

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

[packages/encryption-utils/src/index.ts:161](https://github.com/verida/verida-js/blob/5040472/packages/encryption-utils/src/index.ts#L161)

___

### getSigner

▸ `Static` **getSigner**(`data`, `signature`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |
| `signature` | `string` |

#### Returns

`string`

#### Defined in

[packages/encryption-utils/src/index.ts:142](https://github.com/verida/verida-js/blob/5040472/packages/encryption-utils/src/index.ts#L142)

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

[packages/encryption-utils/src/index.ts:165](https://github.com/verida/verida-js/blob/5040472/packages/encryption-utils/src/index.ts#L165)

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

[packages/encryption-utils/src/index.ts:177](https://github.com/verida/verida-js/blob/5040472/packages/encryption-utils/src/index.ts#L177)

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

[packages/encryption-utils/src/index.ts:186](https://github.com/verida/verida-js/blob/5040472/packages/encryption-utils/src/index.ts#L186)

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

[packages/encryption-utils/src/index.ts:190](https://github.com/verida/verida-js/blob/5040472/packages/encryption-utils/src/index.ts#L190)

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

[packages/encryption-utils/src/index.ts:198](https://github.com/verida/verida-js/blob/5040472/packages/encryption-utils/src/index.ts#L198)

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

[packages/encryption-utils/src/index.ts:102](https://github.com/verida/verida-js/blob/5040472/packages/encryption-utils/src/index.ts#L102)

___

### randomKeyPair

▸ `Static` **randomKeyPair**(): [`BoxKeyPair`](../interfaces/verida_encryption_utils._internal_.BoxKeyPair.md)

#### Returns

[`BoxKeyPair`](../interfaces/verida_encryption_utils._internal_.BoxKeyPair.md)

#### Defined in

[packages/encryption-utils/src/index.ts:106](https://github.com/verida/verida-js/blob/5040472/packages/encryption-utils/src/index.ts#L106)

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

[packages/encryption-utils/src/index.ts:98](https://github.com/verida/verida-js/blob/5040472/packages/encryption-utils/src/index.ts#L98)

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

[packages/encryption-utils/src/index.ts:110](https://github.com/verida/verida-js/blob/5040472/packages/encryption-utils/src/index.ts#L110)

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

[packages/encryption-utils/src/index.ts:61](https://github.com/verida/verida-js/blob/5040472/packages/encryption-utils/src/index.ts#L61)

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

[packages/encryption-utils/src/index.ts:36](https://github.com/verida/verida-js/blob/5040472/packages/encryption-utils/src/index.ts#L36)

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

[packages/encryption-utils/src/index.ts:52](https://github.com/verida/verida-js/blob/5040472/packages/encryption-utils/src/index.ts#L52)

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

[packages/encryption-utils/src/index.ts:23](https://github.com/verida/verida-js/blob/5040472/packages/encryption-utils/src/index.ts#L23)

___

### verifySig

▸ `Static` **verifySig**(`data`, `signature`, `publicKeyOrAddress`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |
| `signature` | `string` |
| `publicKeyOrAddress` | `string` |

#### Returns

`boolean`

#### Defined in

[packages/encryption-utils/src/index.ts:132](https://github.com/verida/verida-js/blob/5040472/packages/encryption-utils/src/index.ts#L132)
