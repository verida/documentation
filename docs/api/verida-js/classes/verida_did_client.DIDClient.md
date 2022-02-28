[root](../README.md) / [Modules](../modules.md) / [@verida/did-client](../modules/verida_did_client.md) / DIDClient

# Class: DIDClient

[@verida/did-client](../modules/verida_did_client.md).DIDClient

## Table of contents

### Constructors

- [constructor](verida_did_client.DIDClient.md#constructor)

### Properties

- [did](verida_did_client.DIDClient.md#did)
- [endpointUrl](verida_did_client.DIDClient.md#endpointurl)
- [privateKey](verida_did_client.DIDClient.md#privatekey)
- [wallet](verida_did_client.DIDClient.md#wallet)

### Methods

- [authenticate](verida_did_client.DIDClient.md#authenticate)
- [get](verida_did_client.DIDClient.md#get)
- [getDid](verida_did_client.DIDClient.md#getdid)
- [getPublicKey](verida_did_client.DIDClient.md#getpublickey)
- [save](verida_did_client.DIDClient.md#save)

## Constructors

### constructor

• **new DIDClient**(`endpointUrl`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpointUrl` | `string` |

#### Defined in

[did-client/src/did-client.ts:13](https://github.com/verida/verida-js/blob/7bffc4e/packages/did-client/src/did-client.ts#L13)

## Properties

### did

• `Private` `Optional` **did**: `string`

#### Defined in

[did-client/src/did-client.ts:10](https://github.com/verida/verida-js/blob/7bffc4e/packages/did-client/src/did-client.ts#L10)

___

### endpointUrl

• `Private` **endpointUrl**: `string`

#### Defined in

[did-client/src/did-client.ts:7](https://github.com/verida/verida-js/blob/7bffc4e/packages/did-client/src/did-client.ts#L7)

___

### privateKey

• `Private` `Optional` **privateKey**: `Uint8Array`

#### Defined in

[did-client/src/did-client.ts:9](https://github.com/verida/verida-js/blob/7bffc4e/packages/did-client/src/did-client.ts#L9)

___

### wallet

• `Private` `Optional` **wallet**: [`Wallet`](verida_did_client.Wallet.md)

#### Defined in

[did-client/src/did-client.ts:11](https://github.com/verida/verida-js/blob/7bffc4e/packages/did-client/src/did-client.ts#L11)

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

[did-client/src/did-client.ts:25](https://github.com/verida/verida-js/blob/7bffc4e/packages/did-client/src/did-client.ts#L25)

___

### get

▸ **get**(`did`): `Promise`<`undefined` \| `default`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `string` |

#### Returns

`Promise`<`undefined` \| `default`\>

#### Defined in

[did-client/src/did-client.ts:69](https://github.com/verida/verida-js/blob/7bffc4e/packages/did-client/src/did-client.ts#L69)

___

### getDid

▸ **getDid**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

[did-client/src/did-client.ts:31](https://github.com/verida/verida-js/blob/7bffc4e/packages/did-client/src/did-client.ts#L31)

___

### getPublicKey

▸ **getPublicKey**(): `string`

#### Returns

`string`

#### Defined in

[did-client/src/did-client.ts:35](https://github.com/verida/verida-js/blob/7bffc4e/packages/did-client/src/did-client.ts#L35)

___

### save

▸ **save**(`document`): `Promise`<`boolean`\>

Save a DID document

#### Parameters

| Name | Type |
| :------ | :------ |
| `document` | `default` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[did-client/src/did-client.ts:45](https://github.com/verida/verida-js/blob/7bffc4e/packages/did-client/src/did-client.ts#L45)
