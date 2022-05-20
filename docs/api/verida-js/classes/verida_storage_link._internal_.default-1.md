[root](../README.md) / [Modules](../modules.md) / [@verida/storage-link](../modules/verida_storage_link.md) / [<internal\>](../modules/verida_storage_link._internal_.md) / default

# Class: default

[@verida/storage-link](../modules/verida_storage_link.md).[<internal\>](../modules/verida_storage_link._internal_.md).default

## Table of contents

### Constructors

- [constructor](verida_storage_link._internal_.default-1.md#constructor)

### Properties

- [doc](verida_storage_link._internal_.default-1.md#doc)
- [errors](verida_storage_link._internal_.default-1.md#errors)
- [getProofData](verida_storage_link._internal_.default-1.md#getproofdata)

### Accessors

- [id](verida_storage_link._internal_.default-1.md#id)

### Methods

- [addContext](verida_storage_link._internal_.default-1.md#addcontext)
- [addContextAsymKey](verida_storage_link._internal_.default-1.md#addcontextasymkey)
- [addContextService](verida_storage_link._internal_.default-1.md#addcontextservice)
- [addContextSignKey](verida_storage_link._internal_.default-1.md#addcontextsignkey)
- [export](verida_storage_link._internal_.default-1.md#export)
- [getErrors](verida_storage_link._internal_.default-1.md#geterrors)
- [import](verida_storage_link._internal_.default-1.md#import)
- [locateServiceEndpoint](verida_storage_link._internal_.default-1.md#locateserviceendpoint)
- [removeContext](verida_storage_link._internal_.default-1.md#removecontext)
- [signProof](verida_storage_link._internal_.default-1.md#signproof)
- [verifyContextSignature](verida_storage_link._internal_.default-1.md#verifycontextsignature)
- [verifyProof](verida_storage_link._internal_.default-1.md#verifyproof)
- [verifySig](verida_storage_link._internal_.default-1.md#verifysig)
- [generateContextHash](verida_storage_link._internal_.default-1.md#generatecontexthash)

## Constructors

### constructor

• **new default**(`doc`, `publicKeyHex?`)

Force lower case DID as we can't guarantee the DID will always be provided with checksum

#### Parameters

| Name | Type |
| :------ | :------ |
| `doc` | `string` \| [`DIDDocumentStruct`](../interfaces/verida_storage_link._internal_.DIDDocumentStruct.md) |
| `publicKeyHex?` | `string` |

#### Defined in

packages/did-document/dist/did-document.d.ts:12

## Properties

### doc

• `Private` **doc**: `any`

#### Defined in

packages/did-document/dist/did-document.d.ts:5

___

### errors

• `Protected` **errors**: `string`[]

#### Defined in

packages/did-document/dist/did-document.d.ts:6

___

### getProofData

• `Private` **getProofData**: `any`

#### Defined in

packages/did-document/dist/did-document.d.ts:33

## Accessors

### id

• `get` **id**(): `string`

#### Returns

`string`

#### Defined in

packages/did-document/dist/did-document.d.ts:13

## Methods

### addContext

▸ **addContext**(`contextName`, `keyring`, `endpoints`): `Promise`<`void`\>

Not used directly, used for testing

#### Parameters

| Name | Type |
| :------ | :------ |
| `contextName` | `string` |
| `keyring` | [`default`](verida_storage_link._internal_.default-2.md) |
| `endpoints` | [`Endpoints`](../interfaces/verida_storage_link._internal_.Endpoints.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/did-document/dist/did-document.d.ts:22

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

packages/did-document/dist/did-document.d.ts:28

___

### addContextService

▸ **addContextService**(`contextHash`, `endpointType`, `serviceType`, `endpointUri`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `contextHash` | `string` |
| `endpointType` | [`EndpointType`](../enums/verida_storage_link._internal_.EndpointType.md) |
| `serviceType` | `string` |
| `endpointUri` | `string` |

#### Returns

`void`

#### Defined in

packages/did-document/dist/did-document.d.ts:26

___

### addContextSignKey

▸ **addContextSignKey**(`contextHash`, `publicKeyHex`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `contextHash` | `string` |
| `publicKeyHex` | `string` |

#### Returns

`void`

#### Defined in

packages/did-document/dist/did-document.d.ts:27

___

### export

▸ **export**(): [`DIDDocumentStruct`](../interfaces/verida_storage_link._internal_.DIDDocumentStruct.md)

#### Returns

[`DIDDocumentStruct`](../interfaces/verida_storage_link._internal_.DIDDocumentStruct.md)

#### Defined in

packages/did-document/dist/did-document.d.ts:25

___

### getErrors

▸ **getErrors**(): `string`[]

#### Returns

`string`[]

#### Defined in

packages/did-document/dist/did-document.d.ts:14

___

### import

▸ **import**(`doc`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `doc` | [`DIDDocumentStruct`](../interfaces/verida_storage_link._internal_.DIDDocumentStruct.md) |

#### Returns

`void`

#### Defined in

packages/did-document/dist/did-document.d.ts:24

___

### locateServiceEndpoint

▸ **locateServiceEndpoint**(`contextName`, `endpointType`): `undefined` \| [`ServiceEndpoint`](../interfaces/verida_storage_link._internal_.ServiceEndpoint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `contextName` | `string` |
| `endpointType` | [`EndpointType`](../enums/verida_storage_link._internal_.EndpointType.md) |

#### Returns

`undefined` \| [`ServiceEndpoint`](../interfaces/verida_storage_link._internal_.ServiceEndpoint.md)

#### Defined in

packages/did-document/dist/did-document.d.ts:35

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

packages/did-document/dist/did-document.d.ts:23

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

packages/did-document/dist/did-document.d.ts:29

___

### verifyContextSignature

▸ **verifyContextSignature**(`data`, `contextName`, `signature`, `contextIsHash?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |
| `contextName` | `string` |
| `signature` | `string` |
| `contextIsHash?` | `boolean` |

#### Returns

`boolean`

#### Defined in

packages/did-document/dist/did-document.d.ts:32

___

### verifyProof

▸ **verifyProof**(): `boolean`

#### Returns

`boolean`

#### Defined in

packages/did-document/dist/did-document.d.ts:30

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

packages/did-document/dist/did-document.d.ts:31

___

### generateContextHash

▸ `Static` **generateContextHash**(`did`, `contextName`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `string` |
| `contextName` | `string` |

#### Returns

`string`

#### Defined in

packages/did-document/dist/did-document.d.ts:34
