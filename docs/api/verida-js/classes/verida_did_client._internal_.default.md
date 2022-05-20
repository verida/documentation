[root](../README.md) / [Modules](../modules.md) / [@verida/did-client](../modules/verida_did_client.md) / [<internal\>](../modules/verida_did_client._internal_.md) / default

# Class: default

[@verida/did-client](../modules/verida_did_client.md).[<internal\>](../modules/verida_did_client._internal_.md).default

## Table of contents

### Constructors

- [constructor](verida_did_client._internal_.default.md#constructor)

### Properties

- [doc](verida_did_client._internal_.default.md#doc)
- [errors](verida_did_client._internal_.default.md#errors)
- [getProofData](verida_did_client._internal_.default.md#getproofdata)

### Accessors

- [id](verida_did_client._internal_.default.md#id)

### Methods

- [addContext](verida_did_client._internal_.default.md#addcontext)
- [addContextAsymKey](verida_did_client._internal_.default.md#addcontextasymkey)
- [addContextService](verida_did_client._internal_.default.md#addcontextservice)
- [addContextSignKey](verida_did_client._internal_.default.md#addcontextsignkey)
- [export](verida_did_client._internal_.default.md#export)
- [getErrors](verida_did_client._internal_.default.md#geterrors)
- [import](verida_did_client._internal_.default.md#import)
- [locateServiceEndpoint](verida_did_client._internal_.default.md#locateserviceendpoint)
- [removeContext](verida_did_client._internal_.default.md#removecontext)
- [signProof](verida_did_client._internal_.default.md#signproof)
- [verifyContextSignature](verida_did_client._internal_.default.md#verifycontextsignature)
- [verifyProof](verida_did_client._internal_.default.md#verifyproof)
- [verifySig](verida_did_client._internal_.default.md#verifysig)
- [generateContextHash](verida_did_client._internal_.default.md#generatecontexthash)

## Constructors

### constructor

• **new default**(`doc`, `publicKeyHex?`)

Force lower case DID as we can't guarantee the DID will always be provided with checksum

#### Parameters

| Name | Type |
| :------ | :------ |
| `doc` | `string` \| [`DIDDocumentStruct`](../interfaces/verida_did_client._internal_.DIDDocumentStruct.md) |
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
| `keyring` | [`default`](verida_did_client._internal_.default-1.md) |
| `endpoints` | [`Endpoints`](../interfaces/verida_did_client._internal_.Endpoints.md) |

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
| `endpointType` | [`EndpointType`](../enums/verida_did_client._internal_.EndpointType.md) |
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

▸ **export**(): [`DIDDocumentStruct`](../interfaces/verida_did_client._internal_.DIDDocumentStruct.md)

#### Returns

[`DIDDocumentStruct`](../interfaces/verida_did_client._internal_.DIDDocumentStruct.md)

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
| `doc` | [`DIDDocumentStruct`](../interfaces/verida_did_client._internal_.DIDDocumentStruct.md) |

#### Returns

`void`

#### Defined in

packages/did-document/dist/did-document.d.ts:24

___

### locateServiceEndpoint

▸ **locateServiceEndpoint**(`contextName`, `endpointType`): `undefined` \| [`ServiceEndpoint`](../interfaces/verida_did_client._internal_.ServiceEndpoint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `contextName` | `string` |
| `endpointType` | [`EndpointType`](../enums/verida_did_client._internal_.EndpointType.md) |

#### Returns

`undefined` \| [`ServiceEndpoint`](../interfaces/verida_did_client._internal_.ServiceEndpoint.md)

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
