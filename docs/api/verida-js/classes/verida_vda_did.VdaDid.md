[root](../README.md) / [Modules](../modules.md) / [@verida/vda-did](../modules/verida_vda_did.md) / VdaDid

# Class: VdaDid

[@verida/vda-did](../modules/verida_vda_did.md).VdaDid

## Table of contents

### Constructors

- [constructor](verida_vda_did.VdaDid.md#constructor)

### Properties

- [blockchain](verida_vda_did.VdaDid.md#blockchain)
- [lastEndpointErrors](verida_vda_did.VdaDid.md#lastendpointerrors)
- [options](verida_vda_did.VdaDid.md#options)

### Methods

- [addEndpoint](verida_vda_did.VdaDid.md#addendpoint)
- [create](verida_vda_did.VdaDid.md#create)
- [delete](verida_vda_did.VdaDid.md#delete)
- [deleteFromEndpoints](verida_vda_did.VdaDid.md#deletefromendpoints)
- [fetchDocumentHistory](verida_vda_did.VdaDid.md#fetchdocumenthistory)
- [getLastEndpointErrors](verida_vda_did.VdaDid.md#getlastendpointerrors)
- [removeEndpoint](verida_vda_did.VdaDid.md#removeendpoint)
- [update](verida_vda_did.VdaDid.md#update)

## Constructors

### constructor

• **new VdaDid**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`VdaDidConfigurationOptions`](../interfaces/verida_vda_did._internal_.VdaDidConfigurationOptions.md) |

#### Defined in

[packages/vda-did/src/vdaDid.ts:15](https://github.com/verida/verida-js/blob/032961c/packages/vda-did/src/vdaDid.ts#L15)

## Properties

### blockchain

• `Private` **blockchain**: [`default`](verida_vda_did._internal_.default.md)

#### Defined in

[packages/vda-did/src/vdaDid.ts:12](https://github.com/verida/verida-js/blob/032961c/packages/vda-did/src/vdaDid.ts#L12)

___

### lastEndpointErrors

• `Private` `Optional` **lastEndpointErrors**: [`VdaDidEndpointResponses`](../modules/verida_vda_did._internal_.md#vdadidendpointresponses)

#### Defined in

[packages/vda-did/src/vdaDid.ts:13](https://github.com/verida/verida-js/blob/032961c/packages/vda-did/src/vdaDid.ts#L13)

___

### options

• `Private` **options**: [`VdaDidConfigurationOptions`](../interfaces/verida_vda_did._internal_.VdaDidConfigurationOptions.md)

#### Defined in

[packages/vda-did/src/vdaDid.ts:11](https://github.com/verida/verida-js/blob/032961c/packages/vda-did/src/vdaDid.ts#L11)

## Methods

### addEndpoint

▸ **addEndpoint**(`endpointUri`, `verifyAllVersions?`): `Promise`<`void`\>

Add a new to an existing DID

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `endpointUri` | `string` | `undefined` |
| `verifyAllVersions` | `boolean` | `false` |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/vda-did/src/vdaDid.ts:281](https://github.com/verida/verida-js/blob/032961c/packages/vda-did/src/vdaDid.ts#L281)

___

### create

▸ **create**(`didDocument`, `endpoints`): `Promise`<[`VdaDidEndpointResponses`](../modules/verida_vda_did._internal_.md#vdadidendpointresponses)\>

Publish the first version of a DIDDocument to a list of endpoints.

If an endpoint fails to accept the DID Document, that endpoint will be ignored and won't be included in the
list of valid endpoints on chain.

#### Parameters

| Name | Type |
| :------ | :------ |
| `didDocument` | [`default`](verida_vda_did._internal_.default-1.md) |
| `endpoints` | `string`[] |

#### Returns

`Promise`<[`VdaDidEndpointResponses`](../modules/verida_vda_did._internal_.md#vdadidendpointresponses)\>

VdaDidEndpointResponses Map of endpoints where the DID Document was successfully published

#### Defined in

[packages/vda-did/src/vdaDid.ts:30](https://github.com/verida/verida-js/blob/032961c/packages/vda-did/src/vdaDid.ts#L30)

___

### delete

▸ **delete**(): `Promise`<[`VdaDidEndpointResponses`](../modules/verida_vda_did._internal_.md#vdadidendpointresponses)\>

#### Returns

`Promise`<[`VdaDidEndpointResponses`](../modules/verida_vda_did._internal_.md#vdadidendpointresponses)\>

#### Defined in

[packages/vda-did/src/vdaDid.ts:247](https://github.com/verida/verida-js/blob/032961c/packages/vda-did/src/vdaDid.ts#L247)

___

### deleteFromEndpoints

▸ `Private` **deleteFromEndpoints**(`endpoints`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoints` | `string`[] |

#### Returns

`Promise`<`any`\>

#### Defined in

[packages/vda-did/src/vdaDid.ts:200](https://github.com/verida/verida-js/blob/032961c/packages/vda-did/src/vdaDid.ts#L200)

___

### fetchDocumentHistory

▸ `Private` **fetchDocumentHistory**(`endpoints`): `Promise`<[`default`](verida_vda_did._internal_.default-1.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoints` | `string`[] |

#### Returns

`Promise`<[`default`](verida_vda_did._internal_.default-1.md)[]\>

#### Defined in

[packages/vda-did/src/vdaDid.ts:333](https://github.com/verida/verida-js/blob/032961c/packages/vda-did/src/vdaDid.ts#L333)

___

### getLastEndpointErrors

▸ **getLastEndpointErrors**(): `undefined` \| [`VdaDidEndpointResponses`](../modules/verida_vda_did._internal_.md#vdadidendpointresponses)

#### Returns

`undefined` \| [`VdaDidEndpointResponses`](../modules/verida_vda_did._internal_.md#vdadidendpointresponses)

#### Defined in

[packages/vda-did/src/vdaDid.ts:329](https://github.com/verida/verida-js/blob/032961c/packages/vda-did/src/vdaDid.ts#L329)

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

[packages/vda-did/src/vdaDid.ts:321](https://github.com/verida/verida-js/blob/032961c/packages/vda-did/src/vdaDid.ts#L321)

___

### update

▸ **update**(`didDocument`, `controllerPrivateKey?`): `Promise`<[`VdaDidEndpointResponses`](../modules/verida_vda_did._internal_.md#vdadidendpointresponses)\>

Publish an updated version of a DIDDocument to a list of endpoints.

If an endpoint fails to accept the DID Document, that will be reflected in the response.

Note: Any failed endpoints will remain on-chain and will need to have the update re-attempted or remove the endpoint from the DID Registry

#### Parameters

| Name | Type |
| :------ | :------ |
| `didDocument` | [`default`](verida_vda_did._internal_.default-1.md) |
| `controllerPrivateKey?` | `string` |

#### Returns

`Promise`<[`VdaDidEndpointResponses`](../modules/verida_vda_did._internal_.md#vdadidendpointresponses)\>

VdaDidEndpointResponses Map of endpoints where the DID Document was successfully published

#### Defined in

[packages/vda-did/src/vdaDid.ts:110](https://github.com/verida/verida-js/blob/032961c/packages/vda-did/src/vdaDid.ts#L110)
