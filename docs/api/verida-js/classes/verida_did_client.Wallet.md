[root](../README.md) / [Modules](../modules.md) / [@verida/did-client](../modules/verida_did_client.md) / Wallet

# Class: Wallet

[@verida/did-client](../modules/verida_did_client.md).Wallet

## Table of contents

### Constructors

- [constructor](verida_did_client.Wallet.md#constructor)

### Properties

- [\_did](verida_did_client.Wallet.md#_did)
- [\_privateKey](verida_did_client.Wallet.md#_privatekey)
- [\_publicKey](verida_did_client.Wallet.md#_publickey)

### Accessors

- [did](verida_did_client.Wallet.md#did)
- [privateKey](verida_did_client.Wallet.md#privatekey)
- [privateKeyBase58](verida_did_client.Wallet.md#privatekeybase58)
- [privateKeyBuffer](verida_did_client.Wallet.md#privatekeybuffer)
- [publicKey](verida_did_client.Wallet.md#publickey)
- [publicKeyBase58](verida_did_client.Wallet.md#publickeybase58)
- [publicKeyBuffer](verida_did_client.Wallet.md#publickeybuffer)

### Methods

- [load](verida_did_client.Wallet.md#load)
- [createRandom](verida_did_client.Wallet.md#createrandom)

## Constructors

### constructor

• **new Wallet**(`privateKey`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `privateKey` | `string` |

#### Defined in

[did-client/src/wallet.ts:12](https://github.com/verida/verida-js/blob/7bffc4e/packages/did-client/src/wallet.ts#L12)

## Properties

### \_did

• `Private` **\_did**: `string`

#### Defined in

[did-client/src/wallet.ts:6](https://github.com/verida/verida-js/blob/7bffc4e/packages/did-client/src/wallet.ts#L6)

___

### \_privateKey

• `Private` **\_privateKey**: `string`

#### Defined in

[did-client/src/wallet.ts:10](https://github.com/verida/verida-js/blob/7bffc4e/packages/did-client/src/wallet.ts#L10)

___

### \_publicKey

• `Private` **\_publicKey**: `string`

#### Defined in

[did-client/src/wallet.ts:8](https://github.com/verida/verida-js/blob/7bffc4e/packages/did-client/src/wallet.ts#L8)

## Accessors

### did

• `get` **did**(): `string`

#### Returns

`string`

#### Defined in

[did-client/src/wallet.ts:34](https://github.com/verida/verida-js/blob/7bffc4e/packages/did-client/src/wallet.ts#L34)

___

### privateKey

• `get` **privateKey**(): `string`

#### Returns

`string`

#### Defined in

[did-client/src/wallet.ts:38](https://github.com/verida/verida-js/blob/7bffc4e/packages/did-client/src/wallet.ts#L38)

___

### privateKeyBase58

• `get` **privateKeyBase58**(): `string`

#### Returns

`string`

#### Defined in

[did-client/src/wallet.ts:54](https://github.com/verida/verida-js/blob/7bffc4e/packages/did-client/src/wallet.ts#L54)

___

### privateKeyBuffer

• `get` **privateKeyBuffer**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

[did-client/src/wallet.ts:46](https://github.com/verida/verida-js/blob/7bffc4e/packages/did-client/src/wallet.ts#L46)

___

### publicKey

• `get` **publicKey**(): `string`

#### Returns

`string`

#### Defined in

[did-client/src/wallet.ts:42](https://github.com/verida/verida-js/blob/7bffc4e/packages/did-client/src/wallet.ts#L42)

___

### publicKeyBase58

• `get` **publicKeyBase58**(): `string`

#### Returns

`string`

#### Defined in

[did-client/src/wallet.ts:58](https://github.com/verida/verida-js/blob/7bffc4e/packages/did-client/src/wallet.ts#L58)

___

### publicKeyBuffer

• `get` **publicKeyBuffer**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

[did-client/src/wallet.ts:50](https://github.com/verida/verida-js/blob/7bffc4e/packages/did-client/src/wallet.ts#L50)

## Methods

### load

▸ `Private` **load**(`privateKey`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `privateKey` | `string` |

#### Returns

`void`

#### Defined in

[did-client/src/wallet.ts:21](https://github.com/verida/verida-js/blob/7bffc4e/packages/did-client/src/wallet.ts#L21)

___

### createRandom

▸ `Static` **createRandom**(): [`Wallet`](verida_did_client.Wallet.md)

#### Returns

[`Wallet`](verida_did_client.Wallet.md)

#### Defined in

[did-client/src/wallet.ts:16](https://github.com/verida/verida-js/blob/7bffc4e/packages/did-client/src/wallet.ts#L16)
