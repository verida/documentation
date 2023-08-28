[root](../README.md) / [Modules](../modules.md) / [@verida/storage-link](../modules/verida_storage_link.md) / [<internal\>](../modules/verida_storage_link._internal_.md) / IDIDClient

# Interface: IDIDClient

[@verida/storage-link](../modules/verida_storage_link.md).[<internal\>](../modules/verida_storage_link._internal_.md).IDIDClient

## Implemented by

- [`DIDClient`](../classes/verida_storage_link._internal_.DIDClient.md)

## Table of contents

### Methods

- [authenticate](verida_storage_link._internal_.IDIDClient.md#authenticate)
- [authenticated](verida_storage_link._internal_.IDIDClient.md#authenticated)
- [get](verida_storage_link._internal_.IDIDClient.md#get)
- [getDid](verida_storage_link._internal_.IDIDClient.md#getdid)
- [getLastEndpointErrors](verida_storage_link._internal_.IDIDClient.md#getlastendpointerrors)
- [getPublicKey](verida_storage_link._internal_.IDIDClient.md#getpublickey)
- [getRpcUrl](verida_storage_link._internal_.IDIDClient.md#getrpcurl)
- [save](verida_storage_link._internal_.IDIDClient.md#save)

## Methods

### authenticate

▸ **authenticate**(`veridaPrivateKey`, `callType`, `web3Config`, `defaultEndpoints`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `veridaPrivateKey` | `string` |
| `callType` | [`Web3CallType`](../modules/verida_storage_link._internal_.md#web3calltype) |
| `web3Config` | [`Web3SelfTransactionConfigPart`](verida_storage_link._internal_.Web3SelfTransactionConfigPart.md) \| [`Web3MetaTransactionConfig`](verida_storage_link._internal_.Web3MetaTransactionConfig.md) |
| `defaultEndpoints` | `string`[] |

#### Returns

`void`

#### Defined in

packages/types/dist/IDIDClient.d.ts:4

___

### authenticated

▸ **authenticated**(): `boolean`

#### Returns

`boolean`

#### Defined in

packages/types/dist/IDIDClient.d.ts:5

___

### get

▸ **get**(`did`): `Promise`<[`IDIDDocument`](verida_storage_link._internal_.IDIDDocument.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `string` |

#### Returns

`Promise`<[`IDIDDocument`](verida_storage_link._internal_.IDIDDocument.md)\>

#### Defined in

packages/types/dist/IDIDClient.d.ts:10

___

### getDid

▸ **getDid**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

packages/types/dist/IDIDClient.d.ts:6

___

### getLastEndpointErrors

▸ **getLastEndpointErrors**(): [`VdaDidEndpointResponses`](../modules/verida_storage_link._internal_.md#vdadidendpointresponses)

#### Returns

[`VdaDidEndpointResponses`](../modules/verida_storage_link._internal_.md#vdadidendpointresponses)

#### Defined in

packages/types/dist/IDIDClient.d.ts:9

___

### getPublicKey

▸ **getPublicKey**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

packages/types/dist/IDIDClient.d.ts:7

___

### getRpcUrl

▸ **getRpcUrl**(): `string`

#### Returns

`string`

#### Defined in

packages/types/dist/IDIDClient.d.ts:11

___

### save

▸ **save**(`document`): `Promise`<[`VdaDidEndpointResponses`](../modules/verida_storage_link._internal_.md#vdadidendpointresponses)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `document` | [`IDIDDocument`](verida_storage_link._internal_.IDIDDocument.md) |

#### Returns

`Promise`<[`VdaDidEndpointResponses`](../modules/verida_storage_link._internal_.md#vdadidendpointresponses)\>

#### Defined in

packages/types/dist/IDIDClient.d.ts:8
