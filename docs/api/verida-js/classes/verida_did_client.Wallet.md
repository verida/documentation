[root](../README.md) / [Modules](../modules.md) / [@verida/did-client](../modules/verida_did_client.md) / Wallet

# Class: Wallet

[@verida/did-client](../modules/verida_did_client.md).Wallet

## Table of contents

### Constructors

- [constructor](verida_did_client.Wallet.md#constructor)

### Properties

- [\_did](verida_did_client.Wallet.md#_did)
- [\_network](verida_did_client.Wallet.md#_network)
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

• **new Wallet**(`privateKey`, `network`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `privateKey` | `string` |
| `network` | `string` |

#### Defined in

[packages/did-client/src/wallet.ts:14](https://github.com/verida/verida-js/blob/5040472/packages/did-client/src/wallet.ts#L14)

## Properties

### \_did

• `Private` **\_did**: `string`

#### Defined in

[packages/did-client/src/wallet.ts:6](https://github.com/verida/verida-js/blob/5040472/packages/did-client/src/wallet.ts#L6)

___

### \_network

• `Private` **\_network**: `string`

#### Defined in

[packages/did-client/src/wallet.ts:12](https://github.com/verida/verida-js/blob/5040472/packages/did-client/src/wallet.ts#L12)

___

### \_privateKey

• `Private` **\_privateKey**: `string`

#### Defined in

[packages/did-client/src/wallet.ts:10](https://github.com/verida/verida-js/blob/5040472/packages/did-client/src/wallet.ts#L10)

___

### \_publicKey

• `Private` **\_publicKey**: `string`

#### Defined in

[packages/did-client/src/wallet.ts:8](https://github.com/verida/verida-js/blob/5040472/packages/did-client/src/wallet.ts#L8)

## Accessors

### did

• `get` **did**(): `string`

#### Returns

`string`

#### Defined in

[packages/did-client/src/wallet.ts:37](https://github.com/verida/verida-js/blob/5040472/packages/did-client/src/wallet.ts#L37)

___

### privateKey

• `get` **privateKey**(): `string`

#### Returns

`string`

#### Defined in

[packages/did-client/src/wallet.ts:41](https://github.com/verida/verida-js/blob/5040472/packages/did-client/src/wallet.ts#L41)

___

### privateKeyBase58

• `get` **privateKeyBase58**(): `string`

#### Returns

`string`

#### Defined in

[packages/did-client/src/wallet.ts:57](https://github.com/verida/verida-js/blob/5040472/packages/did-client/src/wallet.ts#L57)

___

### privateKeyBuffer

• `get` **privateKeyBuffer**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

[packages/did-client/src/wallet.ts:49](https://github.com/verida/verida-js/blob/5040472/packages/did-client/src/wallet.ts#L49)

___

### publicKey

• `get` **publicKey**(): `string`

#### Returns

`string`

#### Defined in

[packages/did-client/src/wallet.ts:45](https://github.com/verida/verida-js/blob/5040472/packages/did-client/src/wallet.ts#L45)

___

### publicKeyBase58

• `get` **publicKeyBase58**(): `string`

#### Returns

`string`

#### Defined in

[packages/did-client/src/wallet.ts:61](https://github.com/verida/verida-js/blob/5040472/packages/did-client/src/wallet.ts#L61)

___

### publicKeyBuffer

• `get` **publicKeyBuffer**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

[packages/did-client/src/wallet.ts:53](https://github.com/verida/verida-js/blob/5040472/packages/did-client/src/wallet.ts#L53)

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

[packages/did-client/src/wallet.ts:24](https://github.com/verida/verida-js/blob/5040472/packages/did-client/src/wallet.ts#L24)

___

### createRandom

▸ `Static` **createRandom**(`network?`): [`Wallet`](verida_did_client.Wallet.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `network` | `string` | `'testnet'` |

#### Returns

[`Wallet`](verida_did_client.Wallet.md)

#### Defined in

[packages/did-client/src/wallet.ts:19](https://github.com/verida/verida-js/blob/5040472/packages/did-client/src/wallet.ts#L19)
