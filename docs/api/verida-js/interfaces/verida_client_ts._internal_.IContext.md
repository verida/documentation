[root](../README.md) / [Modules](../modules.md) / [@verida/client-ts](../modules/verida_client_ts.md) / [<internal\>](../modules/verida_client_ts._internal_.md) / IContext

# Interface: IContext

[@verida/client-ts](../modules/verida_client_ts.md).[<internal\>](../modules/verida_client_ts._internal_.md).IContext

## Implemented by

- [`Context`](../classes/verida_client_ts.Context.md)

## Table of contents

### Methods

- [addEndpoint](verida_client_ts._internal_.IContext.md#addendpoint)
- [clearDatabaseCache](verida_client_ts._internal_.IContext.md#cleardatabasecache)
- [close](verida_client_ts._internal_.IContext.md#close)
- [disconnect](verida_client_ts._internal_.IContext.md#disconnect)
- [getAccount](verida_client_ts._internal_.IContext.md#getaccount)
- [getAuthContext](verida_client_ts._internal_.IContext.md#getauthcontext)
- [getClient](verida_client_ts._internal_.IContext.md#getclient)
- [getContextConfig](verida_client_ts._internal_.IContext.md#getcontextconfig)
- [getContextName](verida_client_ts._internal_.IContext.md#getcontextname)
- [getDatabaseEngine](verida_client_ts._internal_.IContext.md#getdatabaseengine)
- [getDbRegistry](verida_client_ts._internal_.IContext.md#getdbregistry)
- [getDidContextManager](verida_client_ts._internal_.IContext.md#getdidcontextmanager)
- [getMessaging](verida_client_ts._internal_.IContext.md#getmessaging)
- [getNotification](verida_client_ts._internal_.IContext.md#getnotification)
- [info](verida_client_ts._internal_.IContext.md#info)
- [openDatabase](verida_client_ts._internal_.IContext.md#opendatabase)
- [openDatastore](verida_client_ts._internal_.IContext.md#opendatastore)
- [openExternalDatabase](verida_client_ts._internal_.IContext.md#openexternaldatabase)
- [openExternalDatastore](verida_client_ts._internal_.IContext.md#openexternaldatastore)
- [openProfile](verida_client_ts._internal_.IContext.md#openprofile)

## Methods

### addEndpoint

▸ **addEndpoint**(`engineType`, `endpointUri`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `engineType` | [`ContextEngineType`](../enums/verida_client_ts._internal_.ContextEngineType.md) |
| `endpointUri` | `string` |

#### Returns

`void`

#### Defined in

packages/types/dist/IContext.d.ts:32

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

packages/types/dist/IContext.d.ts:34

___

### close

▸ **close**(`options?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ContextCloseOptions`](verida_client_ts._internal_.ContextCloseOptions.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/types/dist/IContext.d.ts:33

___

### disconnect

▸ **disconnect**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

#### Defined in

packages/types/dist/IContext.d.ts:20

___

### getAccount

▸ **getAccount**(): [`IAccount`](verida_client_ts._internal_.IAccount.md)

#### Returns

[`IAccount`](verida_client_ts._internal_.IAccount.md)

#### Defined in

packages/types/dist/IContext.d.ts:17

___

### getAuthContext

▸ **getAuthContext**(`authConfig?`, `authType?`): `Promise`<[`AuthContext`](verida_client_ts._internal_.AuthContext.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `authConfig?` | [`AuthTypeConfig`](verida_client_ts._internal_.AuthTypeConfig.md) |
| `authType?` | `string` |

#### Returns

`Promise`<[`AuthContext`](verida_client_ts._internal_.AuthContext.md)\>

#### Defined in

packages/types/dist/IContext.d.ts:31

___

### getClient

▸ **getClient**(): [`IClient`](verida_client_ts._internal_.IClient.md)

#### Returns

[`IClient`](verida_client_ts._internal_.IClient.md)

#### Defined in

packages/types/dist/IContext.d.ts:19

___

### getContextConfig

▸ **getContextConfig**(`did?`, `forceCreate?`, `customContextName?`): `Promise`<[`SecureContextConfig`](verida_client_ts._internal_.SecureContextConfig.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did?` | `string` |
| `forceCreate?` | `boolean` |
| `customContextName?` | `string` |

#### Returns

`Promise`<[`SecureContextConfig`](verida_client_ts._internal_.SecureContextConfig.md)\>

#### Defined in

packages/types/dist/IContext.d.ts:15

___

### getContextName

▸ **getContextName**(): `string`

#### Returns

`string`

#### Defined in

packages/types/dist/IContext.d.ts:16

___

### getDatabaseEngine

▸ **getDatabaseEngine**(`did`, `createContext?`): `Promise`<[`IStorageEngine`](verida_client_ts._internal_.IStorageEngine.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `string` |
| `createContext?` | `boolean` |

#### Returns

`Promise`<[`IStorageEngine`](verida_client_ts._internal_.IStorageEngine.md)\>

#### Defined in

packages/types/dist/IContext.d.ts:21

___

### getDbRegistry

▸ **getDbRegistry**(): [`IDbRegistry`](verida_client_ts._internal_.IDbRegistry.md)

#### Returns

[`IDbRegistry`](verida_client_ts._internal_.IDbRegistry.md)

#### Defined in

packages/types/dist/IContext.d.ts:29

___

### getDidContextManager

▸ **getDidContextManager**(): [`IDIDContextManager`](verida_client_ts._internal_.IDIDContextManager.md)

#### Returns

[`IDIDContextManager`](verida_client_ts._internal_.IDIDContextManager.md)

#### Defined in

packages/types/dist/IContext.d.ts:18

___

### getMessaging

▸ **getMessaging**(`messageConfig`): `Promise`<[`IMessaging`](verida_client_ts._internal_.IMessaging.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `messageConfig` | [`MessagesConfig`](verida_client_ts._internal_.MessagesConfig.md) |

#### Returns

`Promise`<[`IMessaging`](verida_client_ts._internal_.IMessaging.md)\>

#### Defined in

packages/types/dist/IContext.d.ts:22

___

### getNotification

▸ **getNotification**(`did`, `contextName`): `Promise`<`undefined` \| [`INotification`](verida_client_ts._internal_.INotification.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `string` |
| `contextName` | `string` |

#### Returns

`Promise`<`undefined` \| [`INotification`](verida_client_ts._internal_.INotification.md)\>

#### Defined in

packages/types/dist/IContext.d.ts:23

___

### info

▸ **info**(): `Promise`<[`ContextInfo`](verida_client_ts._internal_.ContextInfo.md)\>

#### Returns

`Promise`<[`ContextInfo`](verida_client_ts._internal_.ContextInfo.md)\>

#### Defined in

packages/types/dist/IContext.d.ts:30

___

### openDatabase

▸ **openDatabase**(`databaseName`, `config?`): `Promise`<[`IDatabase`](verida_client_ts._internal_.IDatabase.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `databaseName` | `string` |
| `config?` | [`DatabaseOpenConfig`](verida_client_ts._internal_.DatabaseOpenConfig.md) |

#### Returns

`Promise`<[`IDatabase`](verida_client_ts._internal_.IDatabase.md)\>

#### Defined in

packages/types/dist/IContext.d.ts:25

___

### openDatastore

▸ **openDatastore**(`schemaUri`, `config?`): `Promise`<[`IDatastore`](verida_client_ts._internal_.IDatastore.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `schemaUri` | `string` |
| `config?` | [`DatastoreOpenConfig`](verida_client_ts._internal_.DatastoreOpenConfig.md) |

#### Returns

`Promise`<[`IDatastore`](verida_client_ts._internal_.IDatastore.md)\>

#### Defined in

packages/types/dist/IContext.d.ts:27

___

### openExternalDatabase

▸ **openExternalDatabase**(`databaseName`, `did`, `config?`): `Promise`<[`IDatabase`](verida_client_ts._internal_.IDatabase.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `databaseName` | `string` |
| `did` | `string` |
| `config?` | [`DatabaseOpenConfig`](verida_client_ts._internal_.DatabaseOpenConfig.md) |

#### Returns

`Promise`<[`IDatabase`](verida_client_ts._internal_.IDatabase.md)\>

#### Defined in

packages/types/dist/IContext.d.ts:26

___

### openExternalDatastore

▸ **openExternalDatastore**(`schemaUri`, `did`, `options?`): `Promise`<[`IDatastore`](verida_client_ts._internal_.IDatastore.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `schemaUri` | `string` |
| `did` | `string` |
| `options?` | [`DatastoreOpenConfig`](verida_client_ts._internal_.DatastoreOpenConfig.md) |

#### Returns

`Promise`<[`IDatastore`](verida_client_ts._internal_.IDatastore.md)\>

#### Defined in

packages/types/dist/IContext.d.ts:28

___

### openProfile

▸ **openProfile**(`profileName?`, `did?`): `Promise`<`undefined` \| [`IProfile`](verida_client_ts._internal_.IProfile.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `profileName?` | `string` |
| `did?` | `string` |

#### Returns

`Promise`<`undefined` \| [`IProfile`](verida_client_ts._internal_.IProfile.md)\>

#### Defined in

packages/types/dist/IContext.d.ts:24
