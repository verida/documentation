[root](../README.md) / [Modules](../modules.md) / [@verida/account-node](../modules/verida_account_node.md) / [<internal\>](../modules/verida_account_node._internal_.md) / default

# Class: default

[@verida/account-node](../modules/verida_account_node.md).[<internal\>](../modules/verida_account_node._internal_.md).default

## Table of contents

### Constructors

- [constructor](verida_account_node._internal_.default-1.md#constructor)

### Properties

- [\_did](verida_account_node._internal_.default-1.md#_did)
- [\_network](verida_account_node._internal_.default-1.md#_network)
- [\_privateKey](verida_account_node._internal_.default-1.md#_privatekey)
- [\_publicKey](verida_account_node._internal_.default-1.md#_publickey)
- [load](verida_account_node._internal_.default-1.md#load)

### Accessors

- [did](verida_account_node._internal_.default-1.md#did)
- [privateKey](verida_account_node._internal_.default-1.md#privatekey)
- [privateKeyBase58](verida_account_node._internal_.default-1.md#privatekeybase58)
- [privateKeyBuffer](verida_account_node._internal_.default-1.md#privatekeybuffer)
- [publicKey](verida_account_node._internal_.default-1.md#publickey)
- [publicKeyBase58](verida_account_node._internal_.default-1.md#publickeybase58)
- [publicKeyBuffer](verida_account_node._internal_.default-1.md#publickeybuffer)

### Methods

- [createRandom](verida_account_node._internal_.default-1.md#createrandom)

## Constructors

### constructor

• **new default**(`privateKey`, `network`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `privateKey` | `string` |
| `network` | `string` |

#### Defined in

packages/did-client/dist/wallet.d.ts:6

## Properties

### \_did

• `Private` **\_did**: `any`

#### Defined in

packages/did-client/dist/wallet.d.ts:2

___

### \_network

• `Private` **\_network**: `any`

#### Defined in

packages/did-client/dist/wallet.d.ts:5

___

### \_privateKey

• `Private` **\_privateKey**: `any`

#### Defined in

packages/did-client/dist/wallet.d.ts:4

___

### \_publicKey

• `Private` **\_publicKey**: `any`

#### Defined in

packages/did-client/dist/wallet.d.ts:3

___

### load

• `Private` **load**: `any`

#### Defined in

packages/did-client/dist/wallet.d.ts:8

## Accessors

### did

• `get` **did**(): `string`

#### Returns

`string`

#### Defined in

packages/did-client/dist/wallet.d.ts:9

___

### privateKey

• `get` **privateKey**(): `string`

#### Returns

`string`

#### Defined in

packages/did-client/dist/wallet.d.ts:10

___

### privateKeyBase58

• `get` **privateKeyBase58**(): `string`

#### Returns

`string`

#### Defined in

packages/did-client/dist/wallet.d.ts:14

___

### privateKeyBuffer

• `get` **privateKeyBuffer**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

packages/did-client/dist/wallet.d.ts:12

___

### publicKey

• `get` **publicKey**(): `string`

#### Returns

`string`

#### Defined in

packages/did-client/dist/wallet.d.ts:11

___

### publicKeyBase58

• `get` **publicKeyBase58**(): `string`

#### Returns

`string`

#### Defined in

packages/did-client/dist/wallet.d.ts:15

___

### publicKeyBuffer

• `get` **publicKeyBuffer**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

packages/did-client/dist/wallet.d.ts:13

## Methods

### createRandom

▸ `Static` **createRandom**(`network?`): [`default`](verida_account_node._internal_.default-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `network?` | `string` |

#### Returns

[`default`](verida_account_node._internal_.default-1.md)

#### Defined in

packages/did-client/dist/wallet.d.ts:7
