[root](../README.md) / [Modules](../modules.md) / [@verida/types](../modules/verida_types.md) / IDIDClient

# Interface: IDIDClient

[@verida/types](../modules/verida_types.md).IDIDClient

## Table of contents

### Methods

- [authenticate](verida_types.IDIDClient.md#authenticate)
- [authenticated](verida_types.IDIDClient.md#authenticated)
- [get](verida_types.IDIDClient.md#get)
- [getDid](verida_types.IDIDClient.md#getdid)
- [getLastEndpointErrors](verida_types.IDIDClient.md#getlastendpointerrors)
- [getPublicKey](verida_types.IDIDClient.md#getpublickey)
- [getRpcUrl](verida_types.IDIDClient.md#getrpcurl)
- [save](verida_types.IDIDClient.md#save)

## Methods

### authenticate

▸ **authenticate**(`veridaPrivateKey`, `callType`, `web3Config`, `defaultEndpoints`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `veridaPrivateKey` | `string` |
| `callType` | [`Web3CallType`](../modules/verida_types.md#web3calltype) |
| `web3Config` | [`Web3MetaTransactionConfig`](verida_types.Web3MetaTransactionConfig.md) \| [`Web3SelfTransactionConfigPart`](verida_types.Web3SelfTransactionConfigPart.md) |
| `defaultEndpoints` | `string`[] |

#### Returns

`void`

#### Defined in

[packages/types/src/IDIDClient.ts:6](https://github.com/verida/verida-js/blob/032961c/packages/types/src/IDIDClient.ts#L6)

___

### authenticated

▸ **authenticated**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/types/src/IDIDClient.ts:13](https://github.com/verida/verida-js/blob/032961c/packages/types/src/IDIDClient.ts#L13)

___

### get

▸ **get**(`did`): `Promise`<[`IDIDDocument`](verida_types.IDIDDocument.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `string` |

#### Returns

`Promise`<[`IDIDDocument`](verida_types.IDIDDocument.md)\>

#### Defined in

[packages/types/src/IDIDClient.ts:23](https://github.com/verida/verida-js/blob/032961c/packages/types/src/IDIDClient.ts#L23)

___

### getDid

▸ **getDid**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

[packages/types/src/IDIDClient.ts:15](https://github.com/verida/verida-js/blob/032961c/packages/types/src/IDIDClient.ts#L15)

___

### getLastEndpointErrors

▸ **getLastEndpointErrors**(): [`VdaDidEndpointResponses`](../modules/verida_types.md#vdadidendpointresponses)

#### Returns

[`VdaDidEndpointResponses`](../modules/verida_types.md#vdadidendpointresponses)

#### Defined in

[packages/types/src/IDIDClient.ts:21](https://github.com/verida/verida-js/blob/032961c/packages/types/src/IDIDClient.ts#L21)

___

### getPublicKey

▸ **getPublicKey**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

[packages/types/src/IDIDClient.ts:17](https://github.com/verida/verida-js/blob/032961c/packages/types/src/IDIDClient.ts#L17)

___

### getRpcUrl

▸ **getRpcUrl**(): `string`

#### Returns

`string`

#### Defined in

[packages/types/src/IDIDClient.ts:25](https://github.com/verida/verida-js/blob/032961c/packages/types/src/IDIDClient.ts#L25)

___

### save

▸ **save**(`document`): `Promise`<[`VdaDidEndpointResponses`](../modules/verida_types.md#vdadidendpointresponses)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `document` | [`IDIDDocument`](verida_types.IDIDDocument.md) |

#### Returns

`Promise`<[`VdaDidEndpointResponses`](../modules/verida_types.md#vdadidendpointresponses)\>

#### Defined in

[packages/types/src/IDIDClient.ts:19](https://github.com/verida/verida-js/blob/032961c/packages/types/src/IDIDClient.ts#L19)
