[root](../README.md) / [Modules](../modules.md) / [@verida/did-document](../modules/verida_did_document.md) / [<internal\>](../modules/verida_did_document._internal_.md) / IDIDDocument

# Interface: IDIDDocument

[@verida/did-document](../modules/verida_did_document.md).[<internal\>](../modules/verida_did_document._internal_.md).IDIDDocument

## Implemented by

- [`DIDDocument`](../classes/verida_did_document.DIDDocument.md)

## Table of contents

### Accessors

- [id](verida_did_document._internal_.IDIDDocument.md#id)

### Methods

- [addContext](verida_did_document._internal_.IDIDDocument.md#addcontext)
- [addContextAsymKey](verida_did_document._internal_.IDIDDocument.md#addcontextasymkey)
- [addContextService](verida_did_document._internal_.IDIDDocument.md#addcontextservice)
- [addContextSignKey](verida_did_document._internal_.IDIDDocument.md#addcontextsignkey)
- [buildTimestamp](verida_did_document._internal_.IDIDDocument.md#buildtimestamp)
- [export](verida_did_document._internal_.IDIDDocument.md#export)
- [getErrors](verida_did_document._internal_.IDIDDocument.md#geterrors)
- [import](verida_did_document._internal_.IDIDDocument.md#import)
- [locateContextProof](verida_did_document._internal_.IDIDDocument.md#locatecontextproof)
- [locateServiceEndpoint](verida_did_document._internal_.IDIDDocument.md#locateserviceendpoint)
- [removeContext](verida_did_document._internal_.IDIDDocument.md#removecontext)
- [setAttributes](verida_did_document._internal_.IDIDDocument.md#setattributes)
- [signProof](verida_did_document._internal_.IDIDDocument.md#signproof)
- [verifyContextSignature](verida_did_document._internal_.IDIDDocument.md#verifycontextsignature)
- [verifyProof](verida_did_document._internal_.IDIDDocument.md#verifyproof)
- [verifySig](verida_did_document._internal_.IDIDDocument.md#verifysig)

## Accessors

### id

• `get` **id**(): `string`

#### Returns

`string`

#### Defined in

packages/types/dist/IDIDDocument.d.ts:5

## Methods

### addContext

▸ **addContext**(`contextName`, `keyring`, `privateKey`, `endpoints`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `contextName` | `string` |
| `keyring` | [`IKeyring`](verida_did_document._internal_.IKeyring.md) |
| `privateKey` | `string` |
| `endpoints` | [`SecureContextEndpoints`](verida_did_document._internal_.SecureContextEndpoints.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/types/dist/IDIDDocument.d.ts:7

___

### addContextAsymKey

▸ **addContextAsymKey**(`contextHash`, `publicKeyHex`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `contextHash` | `string` |
| `publicKeyHex` | `string` |

#### Returns

`void`

#### Defined in

packages/types/dist/IDIDDocument.d.ts:14

___

### addContextService

▸ **addContextService**(`contextHash`, `endpointType`, `serviceType`, `endpointUris`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `contextHash` | `string` |
| `endpointType` | [`SecureContextEndpointType`](../enums/verida_did_document._internal_.SecureContextEndpointType.md) |
| `serviceType` | `string` |
| `endpointUris` | [`ServiceEndpoint`](../modules/verida_did_document._internal_.md#serviceendpoint)[] |

#### Returns

`void`

#### Defined in

packages/types/dist/IDIDDocument.d.ts:12

___

### addContextSignKey

▸ **addContextSignKey**(`contextHash`, `publicKeyHex`, `proof`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `contextHash` | `string` |
| `publicKeyHex` | `string` |
| `proof` | `string` |

#### Returns

`void`

#### Defined in

packages/types/dist/IDIDDocument.d.ts:13

___

### buildTimestamp

▸ **buildTimestamp**(`date`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `Date` |

#### Returns

`string`

#### Defined in

packages/types/dist/IDIDDocument.d.ts:21

___

### export

▸ **export**(): [`VeridaDocInterface`](verida_did_document._internal_.VeridaDocInterface.md)

#### Returns

[`VeridaDocInterface`](verida_did_document._internal_.VeridaDocInterface.md)

#### Defined in

packages/types/dist/IDIDDocument.d.ts:11

___

### getErrors

▸ **getErrors**(): `string`[]

#### Returns

`string`[]

#### Defined in

packages/types/dist/IDIDDocument.d.ts:6

___

### import

▸ **import**(`doc`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `doc` | [`VeridaDocInterface`](verida_did_document._internal_.VeridaDocInterface.md) |

#### Returns

`void`

#### Defined in

packages/types/dist/IDIDDocument.d.ts:10

___

### locateContextProof

▸ **locateContextProof**(`contextName`): `undefined` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `contextName` | `string` |

#### Returns

`undefined` \| `string`

#### Defined in

packages/types/dist/IDIDDocument.d.ts:18

___

### locateServiceEndpoint

▸ **locateServiceEndpoint**(`contextName`, `endpointType`): `undefined` \| [`Service`](verida_did_document._internal_.Service.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `contextName` | `string` |
| `endpointType` | [`SecureContextEndpointType`](../enums/verida_did_document._internal_.SecureContextEndpointType.md) |

#### Returns

`undefined` \| [`Service`](verida_did_document._internal_.Service.md)

#### Defined in

packages/types/dist/IDIDDocument.d.ts:17

___

### removeContext

▸ **removeContext**(`contextName`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `contextName` | `string` |

#### Returns

`boolean`

#### Defined in

packages/types/dist/IDIDDocument.d.ts:8

___

### setAttributes

▸ **setAttributes**(`attributes`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `attributes` | [`Record`](../modules/verida_did_document._internal_.md#record)<`string`, `any`\> |

#### Returns

`void`

#### Defined in

packages/types/dist/IDIDDocument.d.ts:9

___

### signProof

▸ **signProof**(`privateKey`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `privateKey` | `string` \| `Uint8Array` |

#### Returns

`void`

#### Defined in

packages/types/dist/IDIDDocument.d.ts:19

___

### verifyContextSignature

▸ **verifyContextSignature**(`data`, `contextName`, `signature`, `contextIsHash`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |
| `contextName` | `string` |
| `signature` | `string` |
| `contextIsHash` | `boolean` |

#### Returns

`boolean`

#### Defined in

packages/types/dist/IDIDDocument.d.ts:16

___

### verifyProof

▸ **verifyProof**(): `boolean`

#### Returns

`boolean`

#### Defined in

packages/types/dist/IDIDDocument.d.ts:20

___

### verifySig

▸ **verifySig**(`data`, `signature`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |
| `signature` | `string` |

#### Returns

`boolean`

#### Defined in

packages/types/dist/IDIDDocument.d.ts:15
