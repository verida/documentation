[root](../README.md) / [Modules](../modules.md) / [@verida/web-helpers](../modules/verida_web_helpers.md) / [<internal\>](../modules/verida_web_helpers._internal_.md) / DbRegistry

# Class: DbRegistry

[@verida/web-helpers](../modules/verida_web_helpers.md).[<internal\>](../modules/verida_web_helpers._internal_.md).DbRegistry

## Implements

- [`IDbRegistry`](../interfaces/verida_web_helpers._internal_.IDbRegistry.md)

## Table of contents

### Constructors

- [constructor](verida_web_helpers._internal_.DbRegistry.md#constructor)

### Properties

- [buildDatabaseId](verida_web_helpers._internal_.DbRegistry.md#builddatabaseid)
- [context](verida_web_helpers._internal_.DbRegistry.md#context)
- [dbStore](verida_web_helpers._internal_.DbRegistry.md#dbstore)

### Methods

- [get](verida_web_helpers._internal_.DbRegistry.md#get)
- [getMany](verida_web_helpers._internal_.DbRegistry.md#getmany)
- [init](verida_web_helpers._internal_.DbRegistry.md#init)
- [removeDb](verida_web_helpers._internal_.DbRegistry.md#removedb)
- [saveDb](verida_web_helpers._internal_.DbRegistry.md#savedb)

## Constructors

### constructor

• **new DbRegistry**(`context`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`Context`](verida_web_helpers._internal_.Context.md) |

#### Defined in

packages/client-ts/dist/context/db-registry.d.ts:14

## Properties

### buildDatabaseId

• `Private` **buildDatabaseId**: `any`

#### Defined in

packages/client-ts/dist/context/db-registry.d.ts:28

___

### context

• `Private` **context**: `any`

#### Defined in

packages/client-ts/dist/context/db-registry.d.ts:12

___

### dbStore

• `Private` `Optional` **dbStore**: `any`

#### Defined in

packages/client-ts/dist/context/db-registry.d.ts:13

## Methods

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

[IDbRegistry](../interfaces/verida_web_helpers._internal_.IDbRegistry.md).[get](../interfaces/verida_web_helpers._internal_.IDbRegistry.md#get)

#### Defined in

packages/client-ts/dist/context/db-registry.d.ts:27

___

### getMany

▸ **getMany**(`filter?`, `options?`): `Promise`<`object`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter?` | `any` |
| `options?` | `any` |

#### Returns

`Promise`<`object`[]\>

#### Implementation of

[IDbRegistry](../interfaces/verida_web_helpers._internal_.IDbRegistry.md).[getMany](../interfaces/verida_web_helpers._internal_.IDbRegistry.md#getmany)

#### Defined in

packages/client-ts/dist/context/db-registry.d.ts:26

___

### init

▸ **init**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Implementation of

[IDbRegistry](../interfaces/verida_web_helpers._internal_.IDbRegistry.md).[init](../interfaces/verida_web_helpers._internal_.IDbRegistry.md#init)

#### Defined in

packages/client-ts/dist/context/db-registry.d.ts:29

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

[IDbRegistry](../interfaces/verida_web_helpers._internal_.IDbRegistry.md).[removeDb](../interfaces/verida_web_helpers._internal_.IDbRegistry.md#removedb)

#### Defined in

packages/client-ts/dist/context/db-registry.d.ts:25

___

### saveDb

▸ **saveDb**(`database`, `checkPermissions?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `database` | [`IDatabase`](../interfaces/verida_web_helpers._internal_.IDatabase.md) |
| `checkPermissions?` | `boolean` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[IDbRegistry](../interfaces/verida_web_helpers._internal_.IDbRegistry.md).[saveDb](../interfaces/verida_web_helpers._internal_.IDbRegistry.md#savedb)

#### Defined in

packages/client-ts/dist/context/db-registry.d.ts:24
