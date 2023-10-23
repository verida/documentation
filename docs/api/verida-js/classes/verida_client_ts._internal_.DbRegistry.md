[root](../README.md) / [Modules](../modules.md) / [@verida/client-ts](../modules/verida_client_ts.md) / [<internal\>](../modules/verida_client_ts._internal_.md) / DbRegistry

# Class: DbRegistry

[@verida/client-ts](../modules/verida_client_ts.md).[<internal\>](../modules/verida_client_ts._internal_.md).DbRegistry

## Implements

- [`IDbRegistry`](../interfaces/verida_client_ts._internal_.IDbRegistry.md)

## Table of contents

### Constructors

- [constructor](verida_client_ts._internal_.DbRegistry.md#constructor)

### Properties

- [context](verida_client_ts._internal_.DbRegistry.md#context)
- [dbStore](verida_client_ts._internal_.DbRegistry.md#dbstore)

### Methods

- [buildDatabaseId](verida_client_ts._internal_.DbRegistry.md#builddatabaseid)
- [get](verida_client_ts._internal_.DbRegistry.md#get)
- [getMany](verida_client_ts._internal_.DbRegistry.md#getmany)
- [init](verida_client_ts._internal_.DbRegistry.md#init)
- [removeDb](verida_client_ts._internal_.DbRegistry.md#removedb)
- [saveDb](verida_client_ts._internal_.DbRegistry.md#savedb)

## Constructors

### constructor

• **new DbRegistry**(`context`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`Context`](verida_client_ts.Context.md) |

#### Defined in

[packages/client-ts/src/context/db-registry.ts:20](https://github.com/verida/verida-js/blob/032961c/packages/client-ts/src/context/db-registry.ts#L20)

## Properties

### context

• `Private` **context**: [`Context`](verida_client_ts.Context.md)

#### Defined in

[packages/client-ts/src/context/db-registry.ts:17](https://github.com/verida/verida-js/blob/032961c/packages/client-ts/src/context/db-registry.ts#L17)

___

### dbStore

• `Private` `Optional` **dbStore**: [`Datastore`](verida_client_ts._internal_.Datastore.md)

#### Defined in

[packages/client-ts/src/context/db-registry.ts:18](https://github.com/verida/verida-js/blob/032961c/packages/client-ts/src/context/db-registry.ts#L18)

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

[packages/client-ts/src/context/db-registry.ts:117](https://github.com/verida/verida-js/blob/032961c/packages/client-ts/src/context/db-registry.ts#L117)

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

#### Implementation of

[IDbRegistry](../interfaces/verida_client_ts._internal_.IDbRegistry.md).[get](../interfaces/verida_client_ts._internal_.IDbRegistry.md#get)

#### Defined in

[packages/client-ts/src/context/db-registry.ts:97](https://github.com/verida/verida-js/blob/032961c/packages/client-ts/src/context/db-registry.ts#L97)

___

### getMany

▸ **getMany**(`filter?`, `options?`): `Promise`<`object`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter` | `any` |
| `options` | `any` |

#### Returns

`Promise`<`object`[]\>

#### Implementation of

[IDbRegistry](../interfaces/verida_client_ts._internal_.IDbRegistry.md).[getMany](../interfaces/verida_client_ts._internal_.IDbRegistry.md#getmany)

#### Defined in

[packages/client-ts/src/context/db-registry.ts:91](https://github.com/verida/verida-js/blob/032961c/packages/client-ts/src/context/db-registry.ts#L91)

___

### init

▸ **init**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Implementation of

[IDbRegistry](../interfaces/verida_client_ts._internal_.IDbRegistry.md).[init](../interfaces/verida_client_ts._internal_.IDbRegistry.md#init)

#### Defined in

[packages/client-ts/src/context/db-registry.ts:132](https://github.com/verida/verida-js/blob/032961c/packages/client-ts/src/context/db-registry.ts#L132)

___

### removeDb

▸ **removeDb**(`databaseName`, `did`, `contextName`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `databaseName` | `string` |
| `did` | `string` |
| `contextName` | `string` |

#### Returns

`Promise`<`boolean`\>

#### Implementation of

[IDbRegistry](../interfaces/verida_client_ts._internal_.IDbRegistry.md).[removeDb](../interfaces/verida_client_ts._internal_.IDbRegistry.md#removedb)

#### Defined in

[packages/client-ts/src/context/db-registry.ts:79](https://github.com/verida/verida-js/blob/032961c/packages/client-ts/src/context/db-registry.ts#L79)

___

### saveDb

▸ **saveDb**(`database`, `checkPermissions?`): `Promise`<`void`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `database` | [`IDatabase`](../interfaces/verida_client_ts._internal_.IDatabase.md) | `undefined` |
| `checkPermissions` | `boolean` | `true` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[IDbRegistry](../interfaces/verida_client_ts._internal_.IDbRegistry.md).[saveDb](../interfaces/verida_client_ts._internal_.IDbRegistry.md#savedb)

#### Defined in

[packages/client-ts/src/context/db-registry.ts:33](https://github.com/verida/verida-js/blob/032961c/packages/client-ts/src/context/db-registry.ts#L33)
