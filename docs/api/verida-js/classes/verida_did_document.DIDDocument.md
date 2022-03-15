[root](../README.md) / [Modules](../modules.md) / [@verida/did-document](../modules/verida_did_document.md) / DIDDocument

# Class: DIDDocument

[@verida/did-document](../modules/verida_did_document.md).DIDDocument

## Table of contents

### Constructors

- [constructor](verida_did_document.DIDDocument.md#constructor)

### Properties

- [doc](verida_did_document.DIDDocument.md#doc)
- [errors](verida_did_document.DIDDocument.md#errors)

### Accessors

- [id](verida_did_document.DIDDocument.md#id)

### Methods

- [addContext](verida_did_document.DIDDocument.md#addcontext)
- [addContextAsymKey](verida_did_document.DIDDocument.md#addcontextasymkey)
- [addContextService](verida_did_document.DIDDocument.md#addcontextservice)
- [addContextSignKey](verida_did_document.DIDDocument.md#addcontextsignkey)
- [export](verida_did_document.DIDDocument.md#export)
- [getErrors](verida_did_document.DIDDocument.md#geterrors)
- [getProofData](verida_did_document.DIDDocument.md#getproofdata)
- [import](verida_did_document.DIDDocument.md#import)
- [locateServiceEndpoint](verida_did_document.DIDDocument.md#locateserviceendpoint)
- [removeContext](verida_did_document.DIDDocument.md#removecontext)
- [signProof](verida_did_document.DIDDocument.md#signproof)
- [verifyContextSignature](verida_did_document.DIDDocument.md#verifycontextsignature)
- [verifyProof](verida_did_document.DIDDocument.md#verifyproof)
- [verifySig](verida_did_document.DIDDocument.md#verifysig)
- [generateContextHash](verida_did_document.DIDDocument.md#generatecontexthash)

## Constructors

### constructor

• **new DIDDocument**(`doc`, `publicKeyHex?`)

Force lower case DID as we can't guarantee the DID will always be provided with checksum

#### Parameters

| Name | Type |
| :------ | :------ |
| `doc` | `string` \| [`DIDDocumentStruct`](../interfaces/verida_did_document.Interfaces.DIDDocumentStruct.md) |
| `publicKeyHex?` | `string` |

#### Defined in

[did-document/src/did-document.ts:16](https://github.com/verida/verida-js/blob/a39619b/packages/did-document/src/did-document.ts#L16)

## Properties

### doc

• `Private` **doc**: [`DIDDocumentStruct`](../interfaces/verida_did_document.Interfaces.DIDDocumentStruct.md)

#### Defined in

[did-document/src/did-document.ts:8](https://github.com/verida/verida-js/blob/a39619b/packages/did-document/src/did-document.ts#L8)

___

### errors

• `Protected` **errors**: `string`[] = `[]`

#### Defined in

[did-document/src/did-document.ts:9](https://github.com/verida/verida-js/blob/a39619b/packages/did-document/src/did-document.ts#L9)

## Accessors

### id

• `get` **id**(): `string`

#### Returns

`string`

#### Defined in

[did-document/src/did-document.ts:44](https://github.com/verida/verida-js/blob/a39619b/packages/did-document/src/did-document.ts#L44)

## Methods

### addContext

▸ **addContext**(`contextName`, `keyring`, `endpoints`): `Promise`<`void`\>

Not used directly, used for testing

#### Parameters

| Name | Type |
| :------ | :------ |
| `contextName` | `string` |
| `keyring` | `default` |
| `endpoints` | [`Endpoints`](../interfaces/verida_did_document.Interfaces.Endpoints.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[did-document/src/did-document.ts:59](https://github.com/verida/verida-js/blob/a39619b/packages/did-document/src/did-document.ts#L59)

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

[did-document/src/did-document.ts:160](https://github.com/verida/verida-js/blob/a39619b/packages/did-document/src/did-document.ts#L160)

___

### addContextService

▸ **addContextService**(`contextHash`, `endpointType`, `serviceType`, `endpointUri`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `contextHash` | `string` |
| `endpointType` | [`EndpointType`](../enums/verida_did_document.Interfaces.EndpointType.md) |
| `serviceType` | `string` |
| `endpointUri` | `string` |

#### Returns

`void`

#### Defined in

[did-document/src/did-document.ts:127](https://github.com/verida/verida-js/blob/a39619b/packages/did-document/src/did-document.ts#L127)

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

[did-document/src/did-document.ts:139](https://github.com/verida/verida-js/blob/a39619b/packages/did-document/src/did-document.ts#L139)

___

### export

▸ **export**(): [`DIDDocumentStruct`](../interfaces/verida_did_document.Interfaces.DIDDocumentStruct.md)

#### Returns

[`DIDDocumentStruct`](../interfaces/verida_did_document.Interfaces.DIDDocumentStruct.md)

#### Defined in

[did-document/src/did-document.ts:123](https://github.com/verida/verida-js/blob/a39619b/packages/did-document/src/did-document.ts#L123)

___

### getErrors

▸ **getErrors**(): `string`[]

#### Returns

`string`[]

#### Defined in

[did-document/src/did-document.ts:48](https://github.com/verida/verida-js/blob/a39619b/packages/did-document/src/did-document.ts#L48)

___

### getProofData

▸ `Private` **getProofData**(): [`DIDDocumentStruct`](../interfaces/verida_did_document.Interfaces.DIDDocumentStruct.md)

#### Returns

[`DIDDocumentStruct`](../interfaces/verida_did_document.Interfaces.DIDDocumentStruct.md)

#### Defined in

[did-document/src/did-document.ts:236](https://github.com/verida/verida-js/blob/a39619b/packages/did-document/src/did-document.ts#L236)

___

### import

▸ **import**(`doc`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `doc` | [`DIDDocumentStruct`](../interfaces/verida_did_document.Interfaces.DIDDocumentStruct.md) |

#### Returns

`void`

#### Defined in

[did-document/src/did-document.ts:118](https://github.com/verida/verida-js/blob/a39619b/packages/did-document/src/did-document.ts#L118)

___

### locateServiceEndpoint

▸ **locateServiceEndpoint**(`contextName`, `endpointType`): `undefined` \| `ServiceEndpoint`

#### Parameters

| Name | Type |
| :------ | :------ |
| `contextName` | `string` |
| `endpointType` | [`EndpointType`](../enums/verida_did_document.Interfaces.EndpointType.md) |

#### Returns

`undefined` \| `ServiceEndpoint`

#### Defined in

[did-document/src/did-document.ts:247](https://github.com/verida/verida-js/blob/a39619b/packages/did-document/src/did-document.ts#L247)

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

[did-document/src/did-document.ts:84](https://github.com/verida/verida-js/blob/a39619b/packages/did-document/src/did-document.ts#L84)

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

[did-document/src/did-document.ts:181](https://github.com/verida/verida-js/blob/a39619b/packages/did-document/src/did-document.ts#L181)

___

### verifyContextSignature

▸ **verifyContextSignature**(`data`, `contextName`, `signature`, `contextIsHash?`): `boolean`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `data` | `any` | `undefined` |
| `contextName` | `string` | `undefined` |
| `signature` | `string` | `undefined` |
| `contextIsHash` | `boolean` | `false` |

#### Returns

`boolean`

#### Defined in

[did-document/src/did-document.ts:219](https://github.com/verida/verida-js/blob/a39619b/packages/did-document/src/did-document.ts#L219)

___

### verifyProof

▸ **verifyProof**(): `boolean`

#### Returns

`boolean`

#### Defined in

[did-document/src/did-document.ts:197](https://github.com/verida/verida-js/blob/a39619b/packages/did-document/src/did-document.ts#L197)

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

[did-document/src/did-document.ts:208](https://github.com/verida/verida-js/blob/a39619b/packages/did-document/src/did-document.ts#L208)

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

[did-document/src/did-document.ts:242](https://github.com/verida/verida-js/blob/a39619b/packages/did-document/src/did-document.ts#L242)
