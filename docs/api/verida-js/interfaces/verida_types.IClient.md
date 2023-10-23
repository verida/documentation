[root](../README.md) / [Modules](../modules.md) / [@verida/types](../modules/verida_types.md) / IClient

# Interface: IClient

[@verida/types](../modules/verida_types.md).IClient

## Table of contents

### Methods

- [connect](verida_types.IClient.md#connect)
- [getContextConfig](verida_types.IClient.md#getcontextconfig)
- [getSchema](verida_types.IClient.md#getschema)
- [getValidDataSignatures](verida_types.IClient.md#getvaliddatasignatures)
- [isConnected](verida_types.IClient.md#isconnected)
- [openContext](verida_types.IClient.md#opencontext)
- [openExternalContext](verida_types.IClient.md#openexternalcontext)
- [openPublicProfile](verida_types.IClient.md#openpublicprofile)

## Methods

### connect

▸ **connect**(`account`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | [`IAccount`](verida_types.IAccount.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/types/src/IClient.ts:8](https://github.com/verida/verida-js/blob/032961c/packages/types/src/IClient.ts#L8)

___

### getContextConfig

▸ **getContextConfig**(`did`, `contextName`): `Promise`<`undefined` \| [`SecureContextConfig`](verida_types.SecureContextConfig.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `string` |
| `contextName` | `string` |

#### Returns

`Promise`<`undefined` \| [`SecureContextConfig`](verida_types.SecureContextConfig.md)\>

#### Defined in

[packages/types/src/IClient.ts:19](https://github.com/verida/verida-js/blob/032961c/packages/types/src/IClient.ts#L19)

___

### getSchema

▸ **getSchema**(`schemaUri`): `Promise`<[`ISchema`](verida_types.ISchema.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `schemaUri` | `string` |

#### Returns

`Promise`<[`ISchema`](verida_types.ISchema.md)\>

#### Defined in

[packages/types/src/IClient.ts:36](https://github.com/verida/verida-js/blob/032961c/packages/types/src/IClient.ts#L36)

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

[packages/types/src/IClient.ts:31](https://github.com/verida/verida-js/blob/032961c/packages/types/src/IClient.ts#L31)

___

### isConnected

▸ **isConnected**(): `void`

#### Returns

`void`

#### Defined in

[packages/types/src/IClient.ts:10](https://github.com/verida/verida-js/blob/032961c/packages/types/src/IClient.ts#L10)

___

### openContext

▸ **openContext**(`contextName`, `forceCreate`): `Promise`<`undefined` \| [`IContext`](verida_types.IContext.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `contextName` | `string` |
| `forceCreate` | `boolean` |

#### Returns

`Promise`<`undefined` \| [`IContext`](verida_types.IContext.md)\>

#### Defined in

[packages/types/src/IClient.ts:12](https://github.com/verida/verida-js/blob/032961c/packages/types/src/IClient.ts#L12)

___

### openExternalContext

▸ **openExternalContext**(`contextName`, `did`): `Promise`<[`IContext`](verida_types.IContext.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `contextName` | `string` |
| `did` | `string` |

#### Returns

`Promise`<[`IContext`](verida_types.IContext.md)\>

#### Defined in

[packages/types/src/IClient.ts:17](https://github.com/verida/verida-js/blob/032961c/packages/types/src/IClient.ts#L17)

___

### openPublicProfile

▸ **openPublicProfile**(`did`, `contextName`, `profileName`, `fallbackContext`): `Promise`<`undefined` \| [`IProfile`](verida_types.IProfile.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `string` |
| `contextName` | `string` |
| `profileName` | `string` |
| `fallbackContext` | ``null`` \| `string` |

#### Returns

`Promise`<`undefined` \| [`IProfile`](verida_types.IProfile.md)\>

#### Defined in

[packages/types/src/IClient.ts:24](https://github.com/verida/verida-js/blob/032961c/packages/types/src/IClient.ts#L24)
