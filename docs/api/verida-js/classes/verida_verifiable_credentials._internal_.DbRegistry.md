[root](../README.md) / [Modules](../modules.md) / [@verida/verifiable-credentials](../modules/verida_verifiable_credentials.md) / [<internal\>](../modules/verida_verifiable_credentials._internal_.md) / DbRegistry

# Class: DbRegistry

[@verida/verifiable-credentials](../modules/verida_verifiable_credentials.md).[<internal\>](../modules/verida_verifiable_credentials._internal_.md).DbRegistry

## Table of contents

### Constructors

- [constructor](verida_verifiable_credentials._internal_.DbRegistry.md#constructor)

### Properties

- [buildDatabaseId](verida_verifiable_credentials._internal_.DbRegistry.md#builddatabaseid)
- [context](verida_verifiable_credentials._internal_.DbRegistry.md#context)
- [dbStore](verida_verifiable_credentials._internal_.DbRegistry.md#dbstore)

### Methods

- [get](verida_verifiable_credentials._internal_.DbRegistry.md#get)
- [getMany](verida_verifiable_credentials._internal_.DbRegistry.md#getmany)
- [init](verida_verifiable_credentials._internal_.DbRegistry.md#init)
- [saveDb](verida_verifiable_credentials._internal_.DbRegistry.md#savedb)

## Constructors

### constructor

• **new DbRegistry**(`context`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`Context`](verida_verifiable_credentials._internal_.Context.md) |

#### Defined in

packages/client-ts/dist/context/db-registry.d.ts:34

## Properties

### buildDatabaseId

• `Private` **buildDatabaseId**: `any`

#### Defined in

packages/client-ts/dist/context/db-registry.d.ts:47

___

### context

• `Private` **context**: `any`

#### Defined in

packages/client-ts/dist/context/db-registry.d.ts:32

___

### dbStore

• `Private` `Optional` **dbStore**: `any`

#### Defined in

packages/client-ts/dist/context/db-registry.d.ts:33

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

#### Defined in

packages/client-ts/dist/context/db-registry.d.ts:46

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

packages/client-ts/dist/context/db-registry.d.ts:45

___

### init

▸ **init**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

packages/client-ts/dist/context/db-registry.d.ts:48

___

### saveDb

▸ **saveDb**(`database`, `checkPermissions?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `database` | [`default`](../interfaces/verida_verifiable_credentials._internal_.default-9.md) |
| `checkPermissions?` | `boolean` |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/client-ts/dist/context/db-registry.d.ts:44
