[root](../README.md) / [Modules](../modules.md) / [@verida/types](../modules/verida_types.md) / IDIDDocument

# Interface: IDIDDocument

[@verida/types](../modules/verida_types.md).IDIDDocument

## Table of contents

### Accessors

- [id](verida_types.IDIDDocument.md#id)

### Methods

- [addContext](verida_types.IDIDDocument.md#addcontext)
- [addContextAsymKey](verida_types.IDIDDocument.md#addcontextasymkey)
- [addContextService](verida_types.IDIDDocument.md#addcontextservice)
- [addContextSignKey](verida_types.IDIDDocument.md#addcontextsignkey)
- [buildTimestamp](verida_types.IDIDDocument.md#buildtimestamp)
- [export](verida_types.IDIDDocument.md#export)
- [getErrors](verida_types.IDIDDocument.md#geterrors)
- [import](verida_types.IDIDDocument.md#import)
- [locateContextProof](verida_types.IDIDDocument.md#locatecontextproof)
- [locateServiceEndpoint](verida_types.IDIDDocument.md#locateserviceendpoint)
- [removeContext](verida_types.IDIDDocument.md#removecontext)
- [setAttributes](verida_types.IDIDDocument.md#setattributes)
- [signProof](verida_types.IDIDDocument.md#signproof)
- [verifyContextSignature](verida_types.IDIDDocument.md#verifycontextsignature)
- [verifyProof](verida_types.IDIDDocument.md#verifyproof)
- [verifySig](verida_types.IDIDDocument.md#verifysig)

## Accessors

### id

• `get` **id**(): `string`

#### Returns

`string`

#### Defined in

[packages/types/src/IDIDDocument.ts:6](https://github.com/verida/verida-js/blob/5040472/packages/types/src/IDIDDocument.ts#L6)

## Methods

### addContext

▸ **addContext**(`contextName`, `keyring`, `privateKey`, `endpoints`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `contextName` | `string` |
| `keyring` | [`IKeyring`](verida_types.IKeyring.md) |
| `privateKey` | `string` |
| `endpoints` | [`SecureContextEndpoints`](verida_types.SecureContextEndpoints.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/types/src/IDIDDocument.ts:10](https://github.com/verida/verida-js/blob/5040472/packages/types/src/IDIDDocument.ts#L10)

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

[packages/types/src/IDIDDocument.ts:24](https://github.com/verida/verida-js/blob/5040472/packages/types/src/IDIDDocument.ts#L24)

___

### addContextService

▸ **addContextService**(`contextHash`, `endpointType`, `serviceType`, `endpointUris`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `contextHash` | `string` |
| `endpointType` | [`SecureContextEndpointType`](../enums/verida_types.SecureContextEndpointType.md) |
| `serviceType` | `string` |
| `endpointUris` | [`ServiceEndpoint`](../modules/verida_types._internal_.md#serviceendpoint)[] |

#### Returns

`void`

#### Defined in

[packages/types/src/IDIDDocument.ts:20](https://github.com/verida/verida-js/blob/5040472/packages/types/src/IDIDDocument.ts#L20)

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

[packages/types/src/IDIDDocument.ts:22](https://github.com/verida/verida-js/blob/5040472/packages/types/src/IDIDDocument.ts#L22)

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

[packages/types/src/IDIDDocument.ts:38](https://github.com/verida/verida-js/blob/5040472/packages/types/src/IDIDDocument.ts#L38)

___

### export

▸ **export**(): [`VeridaDocInterface`](verida_types.VeridaDocInterface.md)

#### Returns

[`VeridaDocInterface`](verida_types.VeridaDocInterface.md)

#### Defined in

[packages/types/src/IDIDDocument.ts:18](https://github.com/verida/verida-js/blob/5040472/packages/types/src/IDIDDocument.ts#L18)

___

### getErrors

▸ **getErrors**(): `string`[]

#### Returns

`string`[]

#### Defined in

[packages/types/src/IDIDDocument.ts:8](https://github.com/verida/verida-js/blob/5040472/packages/types/src/IDIDDocument.ts#L8)

___

### import

▸ **import**(`doc`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `doc` | [`VeridaDocInterface`](verida_types.VeridaDocInterface.md) |

#### Returns

`void`

#### Defined in

[packages/types/src/IDIDDocument.ts:16](https://github.com/verida/verida-js/blob/5040472/packages/types/src/IDIDDocument.ts#L16)

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

[packages/types/src/IDIDDocument.ts:32](https://github.com/verida/verida-js/blob/5040472/packages/types/src/IDIDDocument.ts#L32)

___

### locateServiceEndpoint

▸ **locateServiceEndpoint**(`contextName`, `endpointType`): `undefined` \| [`Service`](verida_types._internal_.Service.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `contextName` | `string` |
| `endpointType` | [`SecureContextEndpointType`](../enums/verida_types.SecureContextEndpointType.md) |

#### Returns

`undefined` \| [`Service`](verida_types._internal_.Service.md)

#### Defined in

[packages/types/src/IDIDDocument.ts:30](https://github.com/verida/verida-js/blob/5040472/packages/types/src/IDIDDocument.ts#L30)

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

[packages/types/src/IDIDDocument.ts:12](https://github.com/verida/verida-js/blob/5040472/packages/types/src/IDIDDocument.ts#L12)

___

### setAttributes

▸ **setAttributes**(`attributes`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `attributes` | [`Record`](../modules/verida_types._internal_.md#record)<`string`, `any`\> |

#### Returns

`void`

#### Defined in

[packages/types/src/IDIDDocument.ts:14](https://github.com/verida/verida-js/blob/5040472/packages/types/src/IDIDDocument.ts#L14)

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

[packages/types/src/IDIDDocument.ts:34](https://github.com/verida/verida-js/blob/5040472/packages/types/src/IDIDDocument.ts#L34)

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

[packages/types/src/IDIDDocument.ts:28](https://github.com/verida/verida-js/blob/5040472/packages/types/src/IDIDDocument.ts#L28)

___

### verifyProof

▸ **verifyProof**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/types/src/IDIDDocument.ts:36](https://github.com/verida/verida-js/blob/5040472/packages/types/src/IDIDDocument.ts#L36)

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

[packages/types/src/IDIDDocument.ts:26](https://github.com/verida/verida-js/blob/5040472/packages/types/src/IDIDDocument.ts#L26)
