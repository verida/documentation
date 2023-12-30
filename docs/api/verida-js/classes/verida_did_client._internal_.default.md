[root](../README.md) / [Modules](../modules.md) / [@verida/did-client](../modules/verida_did_client.md) / [<internal\>](../modules/verida_did_client._internal_.md) / default

# Class: default

[@verida/did-client](../modules/verida_did_client.md).[<internal\>](../modules/verida_did_client._internal_.md).default

## Table of contents

### Constructors

- [constructor](verida_did_client._internal_.default.md#constructor)

### Properties

- [blockchain](verida_did_client._internal_.default.md#blockchain)
- [deleteFromEndpoints](verida_did_client._internal_.default.md#deletefromendpoints)
- [fetchDocumentHistory](verida_did_client._internal_.default.md#fetchdocumenthistory)
- [lastEndpointErrors](verida_did_client._internal_.default.md#lastendpointerrors)
- [options](verida_did_client._internal_.default.md#options)

### Methods

- [addEndpoint](verida_did_client._internal_.default.md#addendpoint)
- [create](verida_did_client._internal_.default.md#create)
- [delete](verida_did_client._internal_.default.md#delete)
- [getLastEndpointErrors](verida_did_client._internal_.default.md#getlastendpointerrors)
- [removeEndpoint](verida_did_client._internal_.default.md#removeendpoint)
- [update](verida_did_client._internal_.default.md#update)

## Constructors

### constructor

• **new default**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`VdaDidConfigurationOptions`](../interfaces/verida_did_client._internal_.VdaDidConfigurationOptions.md) |

#### Defined in

packages/vda-did/dist/vdaDid.d.ts:7

## Properties

### blockchain

• `Private` **blockchain**: `any`

#### Defined in

packages/vda-did/dist/vdaDid.d.ts:5

___

### deleteFromEndpoints

• `Private` **deleteFromEndpoints**: `any`

#### Defined in

packages/vda-did/dist/vdaDid.d.ts:30

___

### fetchDocumentHistory

• `Private` **fetchDocumentHistory**: `any`

#### Defined in

packages/vda-did/dist/vdaDid.d.ts:41

___

### lastEndpointErrors

• `Private` `Optional` **lastEndpointErrors**: `any`

#### Defined in

packages/vda-did/dist/vdaDid.d.ts:6

___

### options

• `Private` **options**: `any`

#### Defined in

packages/vda-did/dist/vdaDid.d.ts:4

## Methods

### addEndpoint

▸ **addEndpoint**(`endpointUri`, `verifyAllVersions?`): `Promise`<`void`\>

Add a new to an existing DID

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpointUri` | `string` |
| `verifyAllVersions?` | `boolean` |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/vda-did/dist/vdaDid.d.ts:38

___

### create

▸ **create**(`didDocument`, `endpoints`, `retries?`): `Promise`<[`VdaDidEndpointResponses`](../modules/verida_did_client._internal_.md#vdadidendpointresponses)\>

Publish the first version of a DIDDocument to a list of endpoints.

If an endpoint fails to accept the DID Document, that endpoint will be ignored and won't be included in the
list of valid endpoints on chain.

#### Parameters

| Name | Type |
| :------ | :------ |
| `didDocument` | [`default`](verida_did_client._internal_.default-1.md) |
| `endpoints` | `string`[] |
| `retries?` | `number` |

#### Returns

`Promise`<[`VdaDidEndpointResponses`](../modules/verida_did_client._internal_.md#vdadidendpointresponses)\>

VdaDidEndpointResponses Map of endpoints where the DID Document was successfully published

#### Defined in

packages/vda-did/dist/vdaDid.d.ts:18

___

### delete

▸ **delete**(): `Promise`<[`VdaDidEndpointResponses`](../modules/verida_did_client._internal_.md#vdadidendpointresponses)\>

#### Returns

`Promise`<[`VdaDidEndpointResponses`](../modules/verida_did_client._internal_.md#vdadidendpointresponses)\>

#### Defined in

packages/vda-did/dist/vdaDid.d.ts:31

___

### getLastEndpointErrors

▸ **getLastEndpointErrors**(): `undefined` \| [`VdaDidEndpointResponses`](../modules/verida_did_client._internal_.md#vdadidendpointresponses)

#### Returns

`undefined` \| [`VdaDidEndpointResponses`](../modules/verida_did_client._internal_.md#vdadidendpointresponses)

#### Defined in

packages/vda-did/dist/vdaDid.d.ts:40

___

### removeEndpoint

▸ **removeEndpoint**(`did`, `endpoint`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `string` |
| `endpoint` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/vda-did/dist/vdaDid.d.ts:39

___

### update

▸ **update**(`didDocument`, `controllerPrivateKey?`): `Promise`<[`VdaDidEndpointResponses`](../modules/verida_did_client._internal_.md#vdadidendpointresponses)\>

Publish an updated version of a DIDDocument to a list of endpoints.

If an endpoint fails to accept the DID Document, that will be reflected in the response.

Note: Any failed endpoints will remain on-chain and will need to have the update re-attempted or remove the endpoint from the DID Registry

#### Parameters

| Name | Type |
| :------ | :------ |
| `didDocument` | [`default`](verida_did_client._internal_.default-1.md) |
| `controllerPrivateKey?` | `string` |

#### Returns

`Promise`<[`VdaDidEndpointResponses`](../modules/verida_did_client._internal_.md#vdadidendpointresponses)\>

VdaDidEndpointResponses Map of endpoints where the DID Document was successfully published

#### Defined in

packages/vda-did/dist/vdaDid.d.ts:29
