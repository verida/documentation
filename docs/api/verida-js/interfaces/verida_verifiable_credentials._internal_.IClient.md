[root](../README.md) / [Modules](../modules.md) / [@verida/verifiable-credentials](../modules/verida_verifiable_credentials.md) / [<internal\>](../modules/verida_verifiable_credentials._internal_.md) / IClient

# Interface: IClient

[@verida/verifiable-credentials](../modules/verida_verifiable_credentials.md).[<internal\>](../modules/verida_verifiable_credentials._internal_.md).IClient

## Table of contents

### Methods

- [connect](verida_verifiable_credentials._internal_.IClient.md#connect)
- [getContextConfig](verida_verifiable_credentials._internal_.IClient.md#getcontextconfig)
- [getSchema](verida_verifiable_credentials._internal_.IClient.md#getschema)
- [getValidDataSignatures](verida_verifiable_credentials._internal_.IClient.md#getvaliddatasignatures)
- [isConnected](verida_verifiable_credentials._internal_.IClient.md#isconnected)
- [openContext](verida_verifiable_credentials._internal_.IClient.md#opencontext)
- [openExternalContext](verida_verifiable_credentials._internal_.IClient.md#openexternalcontext)
- [openPublicProfile](verida_verifiable_credentials._internal_.IClient.md#openpublicprofile)

## Methods

### connect

▸ **connect**(`account`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | [`IAccount`](verida_verifiable_credentials._internal_.IAccount.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/types/dist/IClient.d.ts:7

___

### getContextConfig

▸ **getContextConfig**(`did`, `contextName`): `Promise`<`undefined` \| [`SecureContextConfig`](verida_verifiable_credentials._internal_.SecureContextConfig.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `string` |
| `contextName` | `string` |

#### Returns

`Promise`<`undefined` \| [`SecureContextConfig`](verida_verifiable_credentials._internal_.SecureContextConfig.md)\>

#### Defined in

packages/types/dist/IClient.d.ts:11

___

### getSchema

▸ **getSchema**(`schemaUri`): `Promise`<[`ISchema`](verida_verifiable_credentials._internal_.ISchema.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `schemaUri` | `string` |

#### Returns

`Promise`<[`ISchema`](verida_verifiable_credentials._internal_.ISchema.md)\>

#### Defined in

packages/types/dist/IClient.d.ts:14

___

### getValidDataSignatures

▸ **getValidDataSignatures**(`data`, `did?`): `Promise`<`string`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |
| `did?` | `string` |

#### Returns

`Promise`<`string`[]\>

#### Defined in

packages/types/dist/IClient.d.ts:13

___

### isConnected

▸ **isConnected**(): `void`

#### Returns

`void`

#### Defined in

packages/types/dist/IClient.d.ts:8

___

### openContext

▸ **openContext**(`contextName`, `forceCreate`): `Promise`<`undefined` \| [`IContext`](verida_verifiable_credentials._internal_.IContext.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `contextName` | `string` |
| `forceCreate` | `boolean` |

#### Returns

`Promise`<`undefined` \| [`IContext`](verida_verifiable_credentials._internal_.IContext.md)\>

#### Defined in

packages/types/dist/IClient.d.ts:9

___

### openExternalContext

▸ **openExternalContext**(`contextName`, `did`): `Promise`<[`IContext`](verida_verifiable_credentials._internal_.IContext.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `contextName` | `string` |
| `did` | `string` |

#### Returns

`Promise`<[`IContext`](verida_verifiable_credentials._internal_.IContext.md)\>

#### Defined in

packages/types/dist/IClient.d.ts:10

___

### openPublicProfile

▸ **openPublicProfile**(`did`, `contextName`, `profileName`, `fallbackContext`): `Promise`<`undefined` \| [`IProfile`](verida_verifiable_credentials._internal_.IProfile.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `string` |
| `contextName` | `string` |
| `profileName` | `string` |
| `fallbackContext` | ``null`` \| `string` |

#### Returns

`Promise`<`undefined` \| [`IProfile`](verida_verifiable_credentials._internal_.IProfile.md)\>

#### Defined in

packages/types/dist/IClient.d.ts:12
