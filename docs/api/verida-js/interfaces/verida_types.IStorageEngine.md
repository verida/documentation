[root](../README.md) / [Modules](../modules.md) / [@verida/types](../modules/verida_types.md) / IStorageEngine

# Interface: IStorageEngine

[@verida/types](../modules/verida_types.md).IStorageEngine

**`emits`** EndpointUnavailable

## Table of contents

### Methods

- [addEndpoint](verida_types.IStorageEngine.md#addendpoint)
- [connectAccount](verida_types.IStorageEngine.md#connectaccount)
- [deleteDatabase](verida_types.IStorageEngine.md#deletedatabase)
- [getAccount](verida_types.IStorageEngine.md#getaccount)
- [getContextConfig](verida_types.IStorageEngine.md#getcontextconfig)
- [getDbRegistry](verida_types.IStorageEngine.md#getdbregistry)
- [getKeyring](verida_types.IStorageEngine.md#getkeyring)
- [info](verida_types.IStorageEngine.md#info)
- [logout](verida_types.IStorageEngine.md#logout)
- [openDatabase](verida_types.IStorageEngine.md#opendatabase)
- [openDatastore](verida_types.IStorageEngine.md#opendatastore)

## Methods

### addEndpoint

▸ **addEndpoint**(`context`, `uri`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`IContext`](verida_types.IContext.md) |
| `uri` | `string` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[packages/types/src/IStorageEngine.ts:41](https://github.com/verida/verida-js/blob/5040472/packages/types/src/IStorageEngine.ts#L41)

___

### connectAccount

▸ **connectAccount**(`account`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | [`IAccount`](verida_types.IAccount.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/types/src/IStorageEngine.ts:20](https://github.com/verida/verida-js/blob/5040472/packages/types/src/IStorageEngine.ts#L20)

___

### deleteDatabase

▸ **deleteDatabase**(`databaseName`, `config?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `databaseName` | `string` |
| `config?` | [`DatabaseDeleteConfig`](verida_types.DatabaseDeleteConfig.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/types/src/IStorageEngine.ts:34](https://github.com/verida/verida-js/blob/5040472/packages/types/src/IStorageEngine.ts#L34)

___

### getAccount

▸ **getAccount**(): [`IAccount`](verida_types.IAccount.md)

#### Returns

[`IAccount`](verida_types.IAccount.md)

#### Defined in

[packages/types/src/IStorageEngine.ts:18](https://github.com/verida/verida-js/blob/5040472/packages/types/src/IStorageEngine.ts#L18)

___

### getContextConfig

▸ **getContextConfig**(): [`SecureContextConfig`](verida_types.SecureContextConfig.md)

#### Returns

[`SecureContextConfig`](verida_types.SecureContextConfig.md)

#### Defined in

[packages/types/src/IStorageEngine.ts:16](https://github.com/verida/verida-js/blob/5040472/packages/types/src/IStorageEngine.ts#L16)

___

### getDbRegistry

▸ **getDbRegistry**(): [`IDbRegistry`](verida_types.IDbRegistry.md)

#### Returns

[`IDbRegistry`](verida_types.IDbRegistry.md)

#### Defined in

[packages/types/src/IStorageEngine.ts:22](https://github.com/verida/verida-js/blob/5040472/packages/types/src/IStorageEngine.ts#L22)

___

### getKeyring

▸ **getKeyring**(): [`IKeyring`](verida_types.IKeyring.md)

#### Returns

[`IKeyring`](verida_types.IKeyring.md)

#### Defined in

[packages/types/src/IStorageEngine.ts:14](https://github.com/verida/verida-js/blob/5040472/packages/types/src/IStorageEngine.ts#L14)

___

### info

▸ **info**(): `Promise`<[`ContextDatabaseInfo`](verida_types.ContextDatabaseInfo.md)\>

#### Returns

`Promise`<[`ContextDatabaseInfo`](verida_types.ContextDatabaseInfo.md)\>

#### Defined in

[packages/types/src/IStorageEngine.ts:43](https://github.com/verida/verida-js/blob/5040472/packages/types/src/IStorageEngine.ts#L43)

___

### logout

▸ **logout**(): `void`

#### Returns

`void`

#### Defined in

[packages/types/src/IStorageEngine.ts:39](https://github.com/verida/verida-js/blob/5040472/packages/types/src/IStorageEngine.ts#L39)

___

### openDatabase

▸ **openDatabase**(`databaseName`, `config`): `Promise`<[`IDatabase`](verida_types.IDatabase.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `databaseName` | `string` |
| `config` | [`DatabaseOpenConfig`](verida_types.DatabaseOpenConfig.md) |

#### Returns

`Promise`<[`IDatabase`](verida_types.IDatabase.md)\>

#### Defined in

[packages/types/src/IStorageEngine.ts:24](https://github.com/verida/verida-js/blob/5040472/packages/types/src/IStorageEngine.ts#L24)

___

### openDatastore

▸ **openDatastore**(`schemaName`, `config`): `Promise`<[`IDatastore`](verida_types.IDatastore.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `schemaName` | `string` |
| `config` | [`DatastoreOpenConfig`](verida_types.DatastoreOpenConfig.md) |

#### Returns

`Promise`<[`IDatastore`](verida_types.IDatastore.md)\>

#### Defined in

[packages/types/src/IStorageEngine.ts:29](https://github.com/verida/verida-js/blob/5040472/packages/types/src/IStorageEngine.ts#L29)
