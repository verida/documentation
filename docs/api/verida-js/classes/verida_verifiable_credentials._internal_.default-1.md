[root](../README.md) / [Modules](../modules.md) / [@verida/verifiable-credentials](../modules/verida_verifiable_credentials.md) / [<internal\>](../modules/verida_verifiable_credentials._internal_.md) / default

# Class: default

[@verida/verifiable-credentials](../modules/verida_verifiable_credentials.md).[<internal\>](../modules/verida_verifiable_credentials._internal_.md).default

## Table of contents

### Constructors

- [constructor](verida_verifiable_credentials._internal_.default-1.md#constructor)

### Properties

- [did](verida_verifiable_credentials._internal_.default-1.md#did)
- [endpointUrl](verida_verifiable_credentials._internal_.default-1.md#endpointurl)
- [privateKey](verida_verifiable_credentials._internal_.default-1.md#privatekey)
- [wallet](verida_verifiable_credentials._internal_.default-1.md#wallet)

### Methods

- [authenticate](verida_verifiable_credentials._internal_.default-1.md#authenticate)
- [get](verida_verifiable_credentials._internal_.default-1.md#get)
- [getDid](verida_verifiable_credentials._internal_.default-1.md#getdid)
- [getPublicKey](verida_verifiable_credentials._internal_.default-1.md#getpublickey)
- [save](verida_verifiable_credentials._internal_.default-1.md#save)

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

▸ **get**(`did`): `Promise`<`undefined` \| [`default`](verida_verifiable_credentials._internal_.default-3.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `string` |

#### Returns

`Promise`<`undefined` \| [`default`](verida_verifiable_credentials._internal_.default-3.md)\>

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
| `document` | [`default`](verida_verifiable_credentials._internal_.default-3.md) |

#### Returns

`Promise`<`boolean`\>

#### Defined in

packages/did-client/dist/did-client.d.ts:24
