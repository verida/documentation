[root](../README.md) / [Modules](../modules.md) / [@verida/web-helpers](../modules/verida_web_helpers.md) / [<internal\>](../modules/verida_web_helpers._internal_.md) / IStorageEngine

# Interface: IStorageEngine

[@verida/web-helpers](../modules/verida_web_helpers.md).[<internal\>](../modules/verida_web_helpers._internal_.md).IStorageEngine

**`emits`** EndpointUnavailable

## Table of contents

### Methods

- [addEndpoint](verida_web_helpers._internal_.IStorageEngine.md#addendpoint)
- [connectAccount](verida_web_helpers._internal_.IStorageEngine.md#connectaccount)
- [deleteDatabase](verida_web_helpers._internal_.IStorageEngine.md#deletedatabase)
- [getAccount](verida_web_helpers._internal_.IStorageEngine.md#getaccount)
- [getContextConfig](verida_web_helpers._internal_.IStorageEngine.md#getcontextconfig)
- [getDbRegistry](verida_web_helpers._internal_.IStorageEngine.md#getdbregistry)
- [getKeyring](verida_web_helpers._internal_.IStorageEngine.md#getkeyring)
- [info](verida_web_helpers._internal_.IStorageEngine.md#info)
- [logout](verida_web_helpers._internal_.IStorageEngine.md#logout)
- [openDatabase](verida_web_helpers._internal_.IStorageEngine.md#opendatabase)
- [openDatastore](verida_web_helpers._internal_.IStorageEngine.md#opendatastore)

## Methods

### addEndpoint

▸ **addEndpoint**(`context`, `uri`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`IContext`](verida_web_helpers._internal_.IContext.md) |
| `uri` | `string` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

packages/types/dist/IStorageEngine.d.ts:22

___

### connectAccount

▸ **connectAccount**(`account`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | [`IAccount`](verida_web_helpers._internal_.IAccount.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/types/dist/IStorageEngine.d.ts:16

___

### deleteDatabase

▸ **deleteDatabase**(`databaseName`, `config?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `databaseName` | `string` |
| `config?` | [`DatabaseDeleteConfig`](verida_web_helpers._internal_.DatabaseDeleteConfig.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/types/dist/IStorageEngine.d.ts:20

___

### getAccount

▸ **getAccount**(): [`IAccount`](verida_web_helpers._internal_.IAccount.md)

#### Returns

[`IAccount`](verida_web_helpers._internal_.IAccount.md)

#### Defined in

packages/types/dist/IStorageEngine.d.ts:15

___

### getContextConfig

▸ **getContextConfig**(): [`SecureContextConfig`](verida_web_helpers._internal_.SecureContextConfig.md)

#### Returns

[`SecureContextConfig`](verida_web_helpers._internal_.SecureContextConfig.md)

#### Defined in

packages/types/dist/IStorageEngine.d.ts:14

___

### getDbRegistry

▸ **getDbRegistry**(): [`IDbRegistry`](verida_web_helpers._internal_.IDbRegistry.md)

#### Returns

[`IDbRegistry`](verida_web_helpers._internal_.IDbRegistry.md)

#### Defined in

packages/types/dist/IStorageEngine.d.ts:17

___

### getKeyring

▸ **getKeyring**(): [`IKeyring`](verida_web_helpers._internal_.IKeyring.md)

#### Returns

[`IKeyring`](verida_web_helpers._internal_.IKeyring.md)

#### Defined in

packages/types/dist/IStorageEngine.d.ts:13

___

### info

▸ **info**(): `Promise`<[`ContextDatabaseInfo`](verida_web_helpers._internal_.ContextDatabaseInfo.md)\>

#### Returns

`Promise`<[`ContextDatabaseInfo`](verida_web_helpers._internal_.ContextDatabaseInfo.md)\>

#### Defined in

packages/types/dist/IStorageEngine.d.ts:23

___

### logout

▸ **logout**(): `void`

#### Returns

`void`

#### Defined in

packages/types/dist/IStorageEngine.d.ts:21

___

### openDatabase

▸ **openDatabase**(`databaseName`, `config`): `Promise`<[`IDatabase`](verida_web_helpers._internal_.IDatabase.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `databaseName` | `string` |
| `config` | [`DatabaseOpenConfig`](verida_web_helpers._internal_.DatabaseOpenConfig.md) |

#### Returns

`Promise`<[`IDatabase`](verida_web_helpers._internal_.IDatabase.md)\>

#### Defined in

packages/types/dist/IStorageEngine.d.ts:18

___

### openDatastore

▸ **openDatastore**(`schemaName`, `config`): `Promise`<[`IDatastore`](verida_web_helpers._internal_.IDatastore.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `schemaName` | `string` |
| `config` | [`DatastoreOpenConfig`](verida_web_helpers._internal_.DatastoreOpenConfig.md) |

#### Returns

`Promise`<[`IDatastore`](verida_web_helpers._internal_.IDatastore.md)\>

#### Defined in

packages/types/dist/IStorageEngine.d.ts:19
