[root](../README.md) / [Modules](../modules.md) / [@verida/did-client](../modules/verida_did_client.md) / [<internal\>](../modules/verida_did_client._internal_.md) / default

# Class: default

[@verida/did-client](../modules/verida_did_client.md).[<internal\>](../modules/verida_did_client._internal_.md).default

## Implements

- [`IDIDDocument`](../interfaces/verida_did_client._internal_.IDIDDocument.md)

## Table of contents

### Constructors

- [constructor](verida_did_client._internal_.default-1.md#constructor)

### Properties

- [doc](verida_did_client._internal_.default-1.md#doc)
- [errors](verida_did_client._internal_.default-1.md#errors)
- [getProofData](verida_did_client._internal_.default-1.md#getproofdata)

### Accessors

- [id](verida_did_client._internal_.default-1.md#id)

### Methods

- [addContext](verida_did_client._internal_.default-1.md#addcontext)
- [addContextAsymKey](verida_did_client._internal_.default-1.md#addcontextasymkey)
- [addContextService](verida_did_client._internal_.default-1.md#addcontextservice)
- [addContextSignKey](verida_did_client._internal_.default-1.md#addcontextsignkey)
- [buildTimestamp](verida_did_client._internal_.default-1.md#buildtimestamp)
- [export](verida_did_client._internal_.default-1.md#export)
- [getErrors](verida_did_client._internal_.default-1.md#geterrors)
- [import](verida_did_client._internal_.default-1.md#import)
- [locateContextProof](verida_did_client._internal_.default-1.md#locatecontextproof)
- [locateServiceEndpoint](verida_did_client._internal_.default-1.md#locateserviceendpoint)
- [removeContext](verida_did_client._internal_.default-1.md#removecontext)
- [setAttributes](verida_did_client._internal_.default-1.md#setattributes)
- [signProof](verida_did_client._internal_.default-1.md#signproof)
- [verifyContextSignature](verida_did_client._internal_.default-1.md#verifycontextsignature)
- [verifyProof](verida_did_client._internal_.default-1.md#verifyproof)
- [verifySig](verida_did_client._internal_.default-1.md#verifysig)
- [generateContextHash](verida_did_client._internal_.default-1.md#generatecontexthash)

## Constructors

### constructor

• **new default**(`doc`, `publicKeyHex?`)

Force lower case DID as we can't guarantee the DID will always be provided with checksum

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `doc` | `string` \| [`VeridaDocInterface`](../interfaces/verida_did_client._internal_.VeridaDocInterface.md) | this value can be a DocInterface or DID. |
| `publicKeyHex?` | `string` | - |

#### Defined in

packages/did-document/dist/did-document.d.ts:11

## Properties

### doc

• `Private` **doc**: `any`

#### Defined in

packages/did-document/dist/did-document.d.ts:4

___

### errors

• `Protected` **errors**: `string`[]

#### Defined in

packages/did-document/dist/did-document.d.ts:5

___

### getProofData

• `Private` **getProofData**: `any`

#### Defined in

packages/did-document/dist/did-document.d.ts:37

## Accessors

### id

• `get` **id**(): `string`

#### Returns

`string`

#### Implementation of

IDIDDocument.id

#### Defined in

packages/did-document/dist/did-document.d.ts:12

## Methods

### addContext

▸ **addContext**(`contextName`, `keyring`, `privateKey`, `endpoints`): `Promise`<`void`\>

Not used directly, used for testing

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `contextName` | `string` | string |
| `keyring` | [`IKeyring`](../interfaces/verida_did_client._internal_.IKeyring.md) | Keyring |
| `privateKey` | `string` | Private key of the DID that controls this DID Document |
| `endpoints` | [`SecureContextEndpoints`](../interfaces/verida_did_client._internal_.SecureContextEndpoints.md) | Endpoints |

#### Returns

`Promise`<`void`\>

#### Implementation of

[IDIDDocument](../interfaces/verida_did_client._internal_.IDIDDocument.md).[addContext](../interfaces/verida_did_client._internal_.IDIDDocument.md#addcontext)

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

#### Implementation of

[IDIDDocument](../interfaces/verida_did_client._internal_.IDIDDocument.md).[addContextAsymKey](../interfaces/verida_did_client._internal_.IDIDDocument.md#addcontextasymkey)

#### Defined in

packages/did-document/dist/did-document.d.ts:29

___

### addContextService

▸ **addContextService**(`contextHash`, `endpointType`, `serviceType`, `endpointUris`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `contextHash` | `string` |
| `endpointType` | [`SecureContextEndpointType`](../enums/verida_did_client._internal_.SecureContextEndpointType.md) |
| `serviceType` | `string` |
| `endpointUris` | [`ServiceEndpoint`](../modules/verida_did_client._internal_.md#serviceendpoint)[] |

#### Returns

`void`

#### Implementation of

[IDIDDocument](../interfaces/verida_did_client._internal_.IDIDDocument.md).[addContextService](../interfaces/verida_did_client._internal_.IDIDDocument.md#addcontextservice)

#### Defined in

packages/did-document/dist/did-document.d.ts:27

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

[IDIDDocument](../interfaces/verida_did_client._internal_.IDIDDocument.md).[addContextSignKey](../interfaces/verida_did_client._internal_.IDIDDocument.md#addcontextsignkey)

#### Defined in

packages/did-document/dist/did-document.d.ts:28

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

[IDIDDocument](../interfaces/verida_did_client._internal_.IDIDDocument.md).[buildTimestamp](../interfaces/verida_did_client._internal_.IDIDDocument.md#buildtimestamp)

#### Defined in

packages/did-document/dist/did-document.d.ts:38

___

### export

▸ **export**(): [`VeridaDocInterface`](../interfaces/verida_did_client._internal_.VeridaDocInterface.md)

#### Returns

[`VeridaDocInterface`](../interfaces/verida_did_client._internal_.VeridaDocInterface.md)

#### Implementation of

[IDIDDocument](../interfaces/verida_did_client._internal_.IDIDDocument.md).[export](../interfaces/verida_did_client._internal_.IDIDDocument.md#export)

#### Defined in

packages/did-document/dist/did-document.d.ts:26

___

### getErrors

▸ **getErrors**(): `string`[]

#### Returns

`string`[]

#### Implementation of

[IDIDDocument](../interfaces/verida_did_client._internal_.IDIDDocument.md).[getErrors](../interfaces/verida_did_client._internal_.IDIDDocument.md#geterrors)

#### Defined in

packages/did-document/dist/did-document.d.ts:13

___

### import

▸ **import**(`doc`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `doc` | [`VeridaDocInterface`](../interfaces/verida_did_client._internal_.VeridaDocInterface.md) |

#### Returns

`void`

#### Implementation of

[IDIDDocument](../interfaces/verida_did_client._internal_.IDIDDocument.md).[import](../interfaces/verida_did_client._internal_.IDIDDocument.md#import)

#### Defined in

packages/did-document/dist/did-document.d.ts:25

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

[IDIDDocument](../interfaces/verida_did_client._internal_.IDIDDocument.md).[locateContextProof](../interfaces/verida_did_client._internal_.IDIDDocument.md#locatecontextproof)

#### Defined in

packages/did-document/dist/did-document.d.ts:34

___

### locateServiceEndpoint

▸ **locateServiceEndpoint**(`contextName`, `endpointType`): `undefined` \| [`Service`](../interfaces/verida_did_client._internal_.Service.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `contextName` | `string` |
| `endpointType` | [`SecureContextEndpointType`](../enums/verida_did_client._internal_.SecureContextEndpointType.md) |

#### Returns

`undefined` \| [`Service`](../interfaces/verida_did_client._internal_.Service.md)

#### Implementation of

[IDIDDocument](../interfaces/verida_did_client._internal_.IDIDDocument.md).[locateServiceEndpoint](../interfaces/verida_did_client._internal_.IDIDDocument.md#locateserviceendpoint)

#### Defined in

packages/did-document/dist/did-document.d.ts:33

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

[IDIDDocument](../interfaces/verida_did_client._internal_.IDIDDocument.md).[removeContext](../interfaces/verida_did_client._internal_.IDIDDocument.md#removecontext)

#### Defined in

packages/did-document/dist/did-document.d.ts:23

___

### setAttributes

▸ **setAttributes**(`attributes`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `attributes` | [`Record`](../modules/verida_did_client._internal_.md#record)<`string`, `any`\> |

#### Returns

`void`

#### Implementation of

[IDIDDocument](../interfaces/verida_did_client._internal_.IDIDDocument.md).[setAttributes](../interfaces/verida_did_client._internal_.IDIDDocument.md#setattributes)

#### Defined in

packages/did-document/dist/did-document.d.ts:24

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

[IDIDDocument](../interfaces/verida_did_client._internal_.IDIDDocument.md).[signProof](../interfaces/verida_did_client._internal_.IDIDDocument.md#signproof)

#### Defined in

packages/did-document/dist/did-document.d.ts:35

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

#### Implementation of

[IDIDDocument](../interfaces/verida_did_client._internal_.IDIDDocument.md).[verifyContextSignature](../interfaces/verida_did_client._internal_.IDIDDocument.md#verifycontextsignature)

#### Defined in

packages/did-document/dist/did-document.d.ts:31

___

### verifyProof

▸ **verifyProof**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IDIDDocument](../interfaces/verida_did_client._internal_.IDIDDocument.md).[verifyProof](../interfaces/verida_did_client._internal_.IDIDDocument.md#verifyproof)

#### Defined in

packages/did-document/dist/did-document.d.ts:36

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

[IDIDDocument](../interfaces/verida_did_client._internal_.IDIDDocument.md).[verifySig](../interfaces/verida_did_client._internal_.IDIDDocument.md#verifysig)

#### Defined in

packages/did-document/dist/did-document.d.ts:30

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

packages/did-document/dist/did-document.d.ts:32
