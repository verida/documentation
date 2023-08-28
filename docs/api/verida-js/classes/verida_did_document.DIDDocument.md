[root](../README.md) / [Modules](../modules.md) / [@verida/did-document](../modules/verida_did_document.md) / DIDDocument

# Class: DIDDocument

[@verida/did-document](../modules/verida_did_document.md).DIDDocument

## Implements

- [`IDIDDocument`](../interfaces/verida_did_document._internal_.IDIDDocument.md)

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
- [buildTimestamp](verida_did_document.DIDDocument.md#buildtimestamp)
- [export](verida_did_document.DIDDocument.md#export)
- [getErrors](verida_did_document.DIDDocument.md#geterrors)
- [getProofData](verida_did_document.DIDDocument.md#getproofdata)
- [import](verida_did_document.DIDDocument.md#import)
- [locateContextProof](verida_did_document.DIDDocument.md#locatecontextproof)
- [locateServiceEndpoint](verida_did_document.DIDDocument.md#locateserviceendpoint)
- [removeContext](verida_did_document.DIDDocument.md#removecontext)
- [setAttributes](verida_did_document.DIDDocument.md#setattributes)
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

| Name | Type | Description |
| :------ | :------ | :------ |
| `doc` | `string` \| [`VeridaDocInterface`](../interfaces/verida_did_document._internal_.VeridaDocInterface.md) | this value can be a DocInterface or DID. |
| `publicKeyHex?` | `string` | - |

#### Defined in

[packages/did-document/src/did-document.ts:44](https://github.com/verida/verida-js/blob/a690f60/packages/did-document/src/did-document.ts#L44)

## Properties

### doc

• `Private` **doc**: [`VeridaDocInterface`](../interfaces/verida_did_document._internal_.VeridaDocInterface.md)

#### Defined in

[packages/did-document/src/did-document.ts:36](https://github.com/verida/verida-js/blob/a690f60/packages/did-document/src/did-document.ts#L36)

___

### errors

• `Protected` **errors**: `string`[] = `[]`

#### Defined in

[packages/did-document/src/did-document.ts:37](https://github.com/verida/verida-js/blob/a690f60/packages/did-document/src/did-document.ts#L37)

## Accessors

### id

• `get` **id**(): `string`

#### Returns

`string`

#### Implementation of

IDIDDocument.id

#### Defined in

[packages/did-document/src/did-document.ts:100](https://github.com/verida/verida-js/blob/a690f60/packages/did-document/src/did-document.ts#L100)

## Methods

### addContext

▸ **addContext**(`contextName`, `keyring`, `privateKey`, `endpoints`): `Promise`<`void`\>

Not used directly, used for testing

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `contextName` | `string` | string |
| `keyring` | [`IKeyring`](../interfaces/verida_did_document._internal_.IKeyring.md) | Keyring |
| `privateKey` | `string` | Private key of the DID that controls this DID Document |
| `endpoints` | [`SecureContextEndpoints`](../interfaces/verida_did_document._internal_.SecureContextEndpoints.md) | Endpoints |

#### Returns

`Promise`<`void`\>

#### Implementation of

[IDIDDocument](../interfaces/verida_did_document._internal_.IDIDDocument.md).[addContext](../interfaces/verida_did_document._internal_.IDIDDocument.md#addcontext)

#### Defined in

[packages/did-document/src/did-document.ts:116](https://github.com/verida/verida-js/blob/a690f60/packages/did-document/src/did-document.ts#L116)

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

#### Implementation of

[IDIDDocument](../interfaces/verida_did_document._internal_.IDIDDocument.md).[addContextAsymKey](../interfaces/verida_did_document._internal_.IDIDDocument.md#addcontextasymkey)

#### Defined in

[packages/did-document/src/did-document.ts:243](https://github.com/verida/verida-js/blob/a690f60/packages/did-document/src/did-document.ts#L243)

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

#### Implementation of

[IDIDDocument](../interfaces/verida_did_document._internal_.IDIDDocument.md).[addContextService](../interfaces/verida_did_document._internal_.IDIDDocument.md#addcontextservice)

#### Defined in

[packages/did-document/src/did-document.ts:206](https://github.com/verida/verida-js/blob/a690f60/packages/did-document/src/did-document.ts#L206)

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

#### Implementation of

[IDIDDocument](../interfaces/verida_did_document._internal_.IDIDDocument.md).[addContextSignKey](../interfaces/verida_did_document._internal_.IDIDDocument.md#addcontextsignkey)

#### Defined in

[packages/did-document/src/did-document.ts:219](https://github.com/verida/verida-js/blob/a690f60/packages/did-document/src/did-document.ts#L219)

___

### buildTimestamp

▸ **buildTimestamp**(`date`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `Date` |

#### Returns

`string`

#### Implementation of

[IDIDDocument](../interfaces/verida_did_document._internal_.IDIDDocument.md).[buildTimestamp](../interfaces/verida_did_document._internal_.IDIDDocument.md#buildtimestamp)

#### Defined in

[packages/did-document/src/did-document.ts:361](https://github.com/verida/verida-js/blob/a690f60/packages/did-document/src/did-document.ts#L361)

___

### export

▸ **export**(): [`VeridaDocInterface`](../interfaces/verida_did_document._internal_.VeridaDocInterface.md)

#### Returns

[`VeridaDocInterface`](../interfaces/verida_did_document._internal_.VeridaDocInterface.md)

#### Implementation of

[IDIDDocument](../interfaces/verida_did_document._internal_.IDIDDocument.md).[export](../interfaces/verida_did_document._internal_.IDIDDocument.md#export)

#### Defined in

[packages/did-document/src/did-document.ts:202](https://github.com/verida/verida-js/blob/a690f60/packages/did-document/src/did-document.ts#L202)

___

### getErrors

▸ **getErrors**(): `string`[]

#### Returns

`string`[]

#### Implementation of

[IDIDDocument](../interfaces/verida_did_document._internal_.IDIDDocument.md).[getErrors](../interfaces/verida_did_document._internal_.IDIDDocument.md#geterrors)

#### Defined in

[packages/did-document/src/did-document.ts:104](https://github.com/verida/verida-js/blob/a690f60/packages/did-document/src/did-document.ts#L104)

___

### getProofData

▸ `Private` **getProofData**(): `any`

#### Returns

`any`

#### Defined in

[packages/did-document/src/did-document.ts:355](https://github.com/verida/verida-js/blob/a690f60/packages/did-document/src/did-document.ts#L355)

___

### import

▸ **import**(`doc`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `doc` | [`VeridaDocInterface`](../interfaces/verida_did_document._internal_.VeridaDocInterface.md) |

#### Returns

`void`

#### Implementation of

[IDIDDocument](../interfaces/verida_did_document._internal_.IDIDDocument.md).[import](../interfaces/verida_did_document._internal_.IDIDDocument.md#import)

#### Defined in

[packages/did-document/src/did-document.ts:197](https://github.com/verida/verida-js/blob/a690f60/packages/did-document/src/did-document.ts#L197)

___

### locateContextProof

▸ **locateContextProof**(`contextName`): `undefined` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `contextName` | `string` |

#### Returns

`undefined` \| `string`

#### Implementation of

[IDIDDocument](../interfaces/verida_did_document._internal_.IDIDDocument.md).[locateContextProof](../interfaces/verida_did_document._internal_.IDIDDocument.md#locatecontextproof)

#### Defined in

[packages/did-document/src/did-document.ts:314](https://github.com/verida/verida-js/blob/a690f60/packages/did-document/src/did-document.ts#L314)

___

### locateServiceEndpoint

▸ **locateServiceEndpoint**(`contextName`, `endpointType`): `undefined` \| [`Service`](../interfaces/verida_did_document._internal_.Service.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `contextName` | `string` |
| `endpointType` | [`SecureContextEndpointType`](../enums/verida_did_document._internal_.SecureContextEndpointType.md) |

#### Returns

`undefined` \| [`Service`](../interfaces/verida_did_document._internal_.Service.md)

#### Implementation of

[IDIDDocument](../interfaces/verida_did_document._internal_.IDIDDocument.md).[locateServiceEndpoint](../interfaces/verida_did_document._internal_.IDIDDocument.md#locateserviceendpoint)

#### Defined in

[packages/did-document/src/did-document.ts:307](https://github.com/verida/verida-js/blob/a690f60/packages/did-document/src/did-document.ts#L307)

___

### removeContext

▸ **removeContext**(`contextName`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `contextName` | `string` |

#### Returns

`boolean`

#### Implementation of

[IDIDDocument](../interfaces/verida_did_document._internal_.IDIDDocument.md).[removeContext](../interfaces/verida_did_document._internal_.IDIDDocument.md#removecontext)

#### Defined in

[packages/did-document/src/did-document.ts:154](https://github.com/verida/verida-js/blob/a690f60/packages/did-document/src/did-document.ts#L154)

___

### setAttributes

▸ **setAttributes**(`attributes`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `attributes` | [`Record`](../modules/verida_did_document._internal_.md#record)<`string`, `any`\> |

#### Returns

`void`

#### Implementation of

[IDIDDocument](../interfaces/verida_did_document._internal_.IDIDDocument.md).[setAttributes](../interfaces/verida_did_document._internal_.IDIDDocument.md#setattributes)

#### Defined in

[packages/did-document/src/did-document.ts:190](https://github.com/verida/verida-js/blob/a690f60/packages/did-document/src/did-document.ts#L190)

___

### signProof

▸ **signProof**(`privateKey`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `privateKey` | `string` \| `Uint8Array` |

#### Returns

`void`

#### Implementation of

[IDIDDocument](../interfaces/verida_did_document._internal_.IDIDDocument.md).[signProof](../interfaces/verida_did_document._internal_.IDIDDocument.md#signproof)

#### Defined in

[packages/did-document/src/did-document.ts:328](https://github.com/verida/verida-js/blob/a690f60/packages/did-document/src/did-document.ts#L328)

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

#### Implementation of

[IDIDDocument](../interfaces/verida_did_document._internal_.IDIDDocument.md).[verifyContextSignature](../interfaces/verida_did_document._internal_.IDIDDocument.md#verifycontextsignature)

#### Defined in

[packages/did-document/src/did-document.ts:285](https://github.com/verida/verida-js/blob/a690f60/packages/did-document/src/did-document.ts#L285)

___

### verifyProof

▸ **verifyProof**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IDIDDocument](../interfaces/verida_did_document._internal_.IDIDDocument.md).[verifyProof](../interfaces/verida_did_document._internal_.IDIDDocument.md#verifyproof)

#### Defined in

[packages/did-document/src/did-document.ts:344](https://github.com/verida/verida-js/blob/a690f60/packages/did-document/src/did-document.ts#L344)

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

#### Implementation of

[IDIDDocument](../interfaces/verida_did_document._internal_.IDIDDocument.md).[verifySig](../interfaces/verida_did_document._internal_.IDIDDocument.md#verifysig)

#### Defined in

[packages/did-document/src/did-document.ts:273](https://github.com/verida/verida-js/blob/a690f60/packages/did-document/src/did-document.ts#L273)

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

[packages/did-document/src/did-document.ts:302](https://github.com/verida/verida-js/blob/a690f60/packages/did-document/src/did-document.ts#L302)
