[root](../README.md) / [Modules](../modules.md) / [@verida/storage-link](../modules/verida_storage_link.md) / [<internal\>](../modules/verida_storage_link._internal_.md) / default

# Class: default

[@verida/storage-link](../modules/verida_storage_link.md).[<internal\>](../modules/verida_storage_link._internal_.md).default

## Table of contents

### Constructors

- [constructor](verida_storage_link._internal_.default.md#constructor)

### Properties

- [did](verida_storage_link._internal_.default.md#did)
- [endpointUrl](verida_storage_link._internal_.default.md#endpointurl)
- [privateKey](verida_storage_link._internal_.default.md#privatekey)
- [wallet](verida_storage_link._internal_.default.md#wallet)

### Methods

- [authenticate](verida_storage_link._internal_.default.md#authenticate)
- [get](verida_storage_link._internal_.default.md#get)
- [getDid](verida_storage_link._internal_.default.md#getdid)
- [getPublicKey](verida_storage_link._internal_.default.md#getpublickey)
- [save](verida_storage_link._internal_.default.md#save)

## Constructors

### constructor

• **new default**(`endpointUrl`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpointUrl` | `string` |

#### Defined in

packages/did-client/dist/did-client.d.ts:7

## Properties

### did

• `Private` `Optional` **did**: `any`

#### Defined in

packages/did-client/dist/did-client.d.ts:5

___

### endpointUrl

• `Private` **endpointUrl**: `any`

#### Defined in

packages/did-client/dist/did-client.d.ts:3

___

### privateKey

• `Private` `Optional` **privateKey**: `any`

#### Defined in

packages/did-client/dist/did-client.d.ts:4

___

### wallet

• `Private` `Optional` **wallet**: `any`

#### Defined in

packages/did-client/dist/did-client.d.ts:6

## Methods

### authenticate

▸ **authenticate**(`privateKey`): `void`

Authenticate using a privateKey or seed phrase.

This allows the DIDClient to sign DIDDocuments before saving

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `privateKey` | `string` | Hex representation of the private key or a mnemonic |

#### Returns

`void`

#### Defined in

packages/did-client/dist/did-client.d.ts:15

___

### get

▸ **get**(`did`): `Promise`<`undefined` \| [`default`](verida_storage_link._internal_.default-1.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `string` |

#### Returns

`Promise`<`undefined` \| [`default`](verida_storage_link._internal_.default-1.md)\>

#### Defined in

packages/did-client/dist/did-client.d.ts:25

___

### getDid

▸ **getDid**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

packages/did-client/dist/did-client.d.ts:16

___

### getPublicKey

▸ **getPublicKey**(): `string`

#### Returns

`string`

#### Defined in

packages/did-client/dist/did-client.d.ts:17

___

### save

▸ **save**(`document`): `Promise`<`boolean`\>

Save a DID document

#### Parameters

| Name | Type |
| :------ | :------ |
| `document` | [`default`](verida_storage_link._internal_.default-1.md) |

#### Returns

`Promise`<`boolean`\>

#### Defined in

packages/did-client/dist/did-client.d.ts:24
