[root](../README.md) / [Modules](../modules.md) / [@verida/client-ts](../modules/verida_client_ts.md) / [DbRegistry](../modules/verida_client_ts.DbRegistry.md) / default

# Class: default

[@verida/client-ts](../modules/verida_client_ts.md).[DbRegistry](../modules/verida_client_ts.DbRegistry.md).default

## Table of contents

### Constructors

- [constructor](verida_client_ts.DbRegistry.default.md#constructor)

### Properties

- [context](verida_client_ts.DbRegistry.default.md#context)
- [dbStore](verida_client_ts.DbRegistry.default.md#dbstore)

### Methods

- [buildDatabaseId](verida_client_ts.DbRegistry.default.md#builddatabaseid)
- [get](verida_client_ts.DbRegistry.default.md#get)
- [getMany](verida_client_ts.DbRegistry.default.md#getmany)
- [init](verida_client_ts.DbRegistry.default.md#init)
- [saveDb](verida_client_ts.DbRegistry.default.md#savedb)

## Constructors

### constructor

• **new default**(`context`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`Context`](verida_client_ts.Context.md) |

#### Defined in

[packages/client-ts/src/context/db-registry.ts:42](https://github.com/verida/verida-js/blob/fa48d0d/packages/client-ts/src/context/db-registry.ts#L42)

## Properties

### context

• `Private` **context**: [`Context`](verida_client_ts.Context.md)

#### Defined in

[packages/client-ts/src/context/db-registry.ts:39](https://github.com/verida/verida-js/blob/fa48d0d/packages/client-ts/src/context/db-registry.ts#L39)

___

### dbStore

• `Private` `Optional` **dbStore**: [`Datastore`](verida_client_ts.Datastore.md)

#### Defined in

[packages/client-ts/src/context/db-registry.ts:40](https://github.com/verida/verida-js/blob/fa48d0d/packages/client-ts/src/context/db-registry.ts#L40)

## Methods

### buildDatabaseId

▸ `Private` **buildDatabaseId**(`dbName`, `did`, `contextName`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dbName` | `string` |
| `did` | `string` |
| `contextName` | `string` |

#### Returns

`string`

#### Defined in

[packages/client-ts/src/context/db-registry.ts:127](https://github.com/verida/verida-js/blob/fa48d0d/packages/client-ts/src/context/db-registry.ts#L127)

___

### get

▸ **get**(`dbName`, `did`, `contextName`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `dbName` | `string` |
| `did` | `string` |
| `contextName` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[packages/client-ts/src/context/db-registry.ts:107](https://github.com/verida/verida-js/blob/fa48d0d/packages/client-ts/src/context/db-registry.ts#L107)

___

### getMany

▸ **getMany**(`filter`, `options`): `Promise`<`object`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter` | `any` |
| `options` | `any` |

#### Returns

`Promise`<`object`[]\>

#### Defined in

[packages/client-ts/src/context/db-registry.ts:101](https://github.com/verida/verida-js/blob/fa48d0d/packages/client-ts/src/context/db-registry.ts#L101)

___

### init

▸ **init**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/client-ts/src/context/db-registry.ts:142](https://github.com/verida/verida-js/blob/fa48d0d/packages/client-ts/src/context/db-registry.ts#L142)

___

### saveDb

▸ **saveDb**(`database`, `checkPermissions?`): `Promise`<`void`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `database` | [`Database`](../interfaces/verida_client_ts.Database.md) | `undefined` |
| `checkPermissions` | `boolean` | `true` |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/client-ts/src/context/db-registry.ts:55](https://github.com/verida/verida-js/blob/fa48d0d/packages/client-ts/src/context/db-registry.ts#L55)
