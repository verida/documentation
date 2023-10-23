[root](../README.md) / [Modules](../modules.md) / [@verida/types](../modules/verida_types.md) / IContext

# Interface: IContext

[@verida/types](../modules/verida_types.md).IContext

## Table of contents

### Methods

- [addEndpoint](verida_types.IContext.md#addendpoint)
- [clearDatabaseCache](verida_types.IContext.md#cleardatabasecache)
- [close](verida_types.IContext.md#close)
- [disconnect](verida_types.IContext.md#disconnect)
- [getAccount](verida_types.IContext.md#getaccount)
- [getAuthContext](verida_types.IContext.md#getauthcontext)
- [getClient](verida_types.IContext.md#getclient)
- [getContextConfig](verida_types.IContext.md#getcontextconfig)
- [getContextName](verida_types.IContext.md#getcontextname)
- [getDatabaseEngine](verida_types.IContext.md#getdatabaseengine)
- [getDbRegistry](verida_types.IContext.md#getdbregistry)
- [getDidContextManager](verida_types.IContext.md#getdidcontextmanager)
- [getMessaging](verida_types.IContext.md#getmessaging)
- [getNotification](verida_types.IContext.md#getnotification)
- [info](verida_types.IContext.md#info)
- [openDatabase](verida_types.IContext.md#opendatabase)
- [openDatastore](verida_types.IContext.md#opendatastore)
- [openExternalDatabase](verida_types.IContext.md#openexternaldatabase)
- [openExternalDatastore](verida_types.IContext.md#openexternaldatastore)
- [openProfile](verida_types.IContext.md#openprofile)

## Methods

### addEndpoint

▸ **addEndpoint**(`engineType`, `endpointUri`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `engineType` | [`ContextEngineType`](../enums/verida_types.ContextEngineType.md) |
| `endpointUri` | `string` |

#### Returns

`void`

#### Defined in

[packages/types/src/IContext.ts:77](https://github.com/verida/verida-js/blob/032961c/packages/types/src/IContext.ts#L77)

___

### clearDatabaseCache

▸ **clearDatabaseCache**(`did`, `databaseName`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `string` |
| `databaseName` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/types/src/IContext.ts:81](https://github.com/verida/verida-js/blob/032961c/packages/types/src/IContext.ts#L81)

___

### close

▸ **close**(`options?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ContextCloseOptions`](verida_types.ContextCloseOptions.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/types/src/IContext.ts:79](https://github.com/verida/verida-js/blob/032961c/packages/types/src/IContext.ts#L79)

___

### disconnect

▸ **disconnect**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

#### Defined in

[packages/types/src/IContext.ts:30](https://github.com/verida/verida-js/blob/032961c/packages/types/src/IContext.ts#L30)

___

### getAccount

▸ **getAccount**(): [`IAccount`](verida_types.IAccount.md)

#### Returns

[`IAccount`](verida_types.IAccount.md)

#### Defined in

[packages/types/src/IContext.ts:24](https://github.com/verida/verida-js/blob/032961c/packages/types/src/IContext.ts#L24)

___

### getAuthContext

▸ **getAuthContext**(`authConfig?`, `authType?`): `Promise`<[`AuthContext`](verida_types.AuthContext.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `authConfig?` | [`AuthTypeConfig`](verida_types.AuthTypeConfig.md) |
| `authType?` | `string` |

#### Returns

`Promise`<[`AuthContext`](verida_types.AuthContext.md)\>

#### Defined in

[packages/types/src/IContext.ts:75](https://github.com/verida/verida-js/blob/032961c/packages/types/src/IContext.ts#L75)

___

### getClient

▸ **getClient**(): [`IClient`](verida_types.IClient.md)

#### Returns

[`IClient`](verida_types.IClient.md)

#### Defined in

[packages/types/src/IContext.ts:28](https://github.com/verida/verida-js/blob/032961c/packages/types/src/IContext.ts#L28)

___

### getContextConfig

▸ **getContextConfig**(`did?`, `forceCreate?`, `customContextName?`): `Promise`<[`SecureContextConfig`](verida_types.SecureContextConfig.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did?` | `string` |
| `forceCreate?` | `boolean` |
| `customContextName?` | `string` |

#### Returns

`Promise`<[`SecureContextConfig`](verida_types.SecureContextConfig.md)\>

#### Defined in

[packages/types/src/IContext.ts:16](https://github.com/verida/verida-js/blob/032961c/packages/types/src/IContext.ts#L16)

___

### getContextName

▸ **getContextName**(): `string`

#### Returns

`string`

#### Defined in

[packages/types/src/IContext.ts:22](https://github.com/verida/verida-js/blob/032961c/packages/types/src/IContext.ts#L22)

___

### getDatabaseEngine

▸ **getDatabaseEngine**(`did`, `createContext?`): `Promise`<[`IStorageEngine`](verida_types.IStorageEngine.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `string` |
| `createContext?` | `boolean` |

#### Returns

`Promise`<[`IStorageEngine`](verida_types.IStorageEngine.md)\>

#### Defined in

[packages/types/src/IContext.ts:32](https://github.com/verida/verida-js/blob/032961c/packages/types/src/IContext.ts#L32)

___

### getDbRegistry

▸ **getDbRegistry**(): [`IDbRegistry`](verida_types.IDbRegistry.md)

#### Returns

[`IDbRegistry`](verida_types.IDbRegistry.md)

#### Defined in

[packages/types/src/IContext.ts:71](https://github.com/verida/verida-js/blob/032961c/packages/types/src/IContext.ts#L71)

___

### getDidContextManager

▸ **getDidContextManager**(): [`IDIDContextManager`](verida_types.IDIDContextManager.md)

#### Returns

[`IDIDContextManager`](verida_types.IDIDContextManager.md)

#### Defined in

[packages/types/src/IContext.ts:26](https://github.com/verida/verida-js/blob/032961c/packages/types/src/IContext.ts#L26)

___

### getMessaging

▸ **getMessaging**(`messageConfig`): `Promise`<[`IMessaging`](verida_types.IMessaging.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `messageConfig` | [`MessagesConfig`](verida_types.MessagesConfig.md) |

#### Returns

`Promise`<[`IMessaging`](verida_types.IMessaging.md)\>

#### Defined in

[packages/types/src/IContext.ts:37](https://github.com/verida/verida-js/blob/032961c/packages/types/src/IContext.ts#L37)

___

### getNotification

▸ **getNotification**(`did`, `contextName`): `Promise`<`undefined` \| [`INotification`](verida_types.INotification.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `string` |
| `contextName` | `string` |

#### Returns

`Promise`<`undefined` \| [`INotification`](verida_types.INotification.md)\>

#### Defined in

[packages/types/src/IContext.ts:39](https://github.com/verida/verida-js/blob/032961c/packages/types/src/IContext.ts#L39)

___

### info

▸ **info**(): `Promise`<[`ContextInfo`](verida_types.ContextInfo.md)\>

#### Returns

`Promise`<[`ContextInfo`](verida_types.ContextInfo.md)\>

#### Defined in

[packages/types/src/IContext.ts:73](https://github.com/verida/verida-js/blob/032961c/packages/types/src/IContext.ts#L73)

___

### openDatabase

▸ **openDatabase**(`databaseName`, `config?`): `Promise`<[`IDatabase`](verida_types.IDatabase.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `databaseName` | `string` |
| `config?` | [`DatabaseOpenConfig`](verida_types.DatabaseOpenConfig.md) |

#### Returns

`Promise`<[`IDatabase`](verida_types.IDatabase.md)\>

#### Defined in

[packages/types/src/IContext.ts:46](https://github.com/verida/verida-js/blob/032961c/packages/types/src/IContext.ts#L46)

___

### openDatastore

▸ **openDatastore**(`schemaUri`, `config?`): `Promise`<[`IDatastore`](verida_types.IDatastore.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `schemaUri` | `string` |
| `config?` | [`DatastoreOpenConfig`](verida_types.DatastoreOpenConfig.md) |

#### Returns

`Promise`<[`IDatastore`](verida_types.IDatastore.md)\>

#### Defined in

[packages/types/src/IContext.ts:59](https://github.com/verida/verida-js/blob/032961c/packages/types/src/IContext.ts#L59)

___

### openExternalDatabase

▸ **openExternalDatabase**(`databaseName`, `did`, `config?`): `Promise`<[`IDatabase`](verida_types.IDatabase.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `databaseName` | `string` |
| `did` | `string` |
| `config?` | [`DatabaseOpenConfig`](verida_types.DatabaseOpenConfig.md) |

#### Returns

`Promise`<[`IDatabase`](verida_types.IDatabase.md)\>

#### Defined in

[packages/types/src/IContext.ts:52](https://github.com/verida/verida-js/blob/032961c/packages/types/src/IContext.ts#L52)

___

### openExternalDatastore

▸ **openExternalDatastore**(`schemaUri`, `did`, `options?`): `Promise`<[`IDatastore`](verida_types.IDatastore.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `schemaUri` | `string` |
| `did` | `string` |
| `options?` | [`DatastoreOpenConfig`](verida_types.DatastoreOpenConfig.md) |

#### Returns

`Promise`<[`IDatastore`](verida_types.IDatastore.md)\>

#### Defined in

[packages/types/src/IContext.ts:65](https://github.com/verida/verida-js/blob/032961c/packages/types/src/IContext.ts#L65)

___

### openProfile

▸ **openProfile**(`profileName?`, `did?`): `Promise`<`undefined` \| [`IProfile`](verida_types.IProfile.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `profileName?` | `string` |
| `did?` | `string` |

#### Returns

`Promise`<`undefined` \| [`IProfile`](verida_types.IProfile.md)\>

#### Defined in

[packages/types/src/IContext.ts:41](https://github.com/verida/verida-js/blob/032961c/packages/types/src/IContext.ts#L41)
