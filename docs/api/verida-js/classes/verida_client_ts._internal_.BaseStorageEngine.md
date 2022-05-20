[root](../README.md) / [Modules](../modules.md) / [@verida/client-ts](../modules/verida_client_ts.md) / [<internal\>](../modules/verida_client_ts._internal_.md) / BaseStorageEngine

# Class: BaseStorageEngine

[@verida/client-ts](../modules/verida_client_ts.md).[<internal\>](../modules/verida_client_ts._internal_.md).BaseStorageEngine

## Table of contents

### Constructors

- [constructor](verida_client_ts._internal_.BaseStorageEngine.md#constructor)

### Properties

- [account](verida_client_ts._internal_.BaseStorageEngine.md#account)
- [dbRegistry](verida_client_ts._internal_.BaseStorageEngine.md#dbregistry)
- [endpointUri](verida_client_ts._internal_.BaseStorageEngine.md#endpointuri)
- [keyring](verida_client_ts._internal_.BaseStorageEngine.md#keyring)
- [storageContext](verida_client_ts._internal_.BaseStorageEngine.md#storagecontext)

### Methods

- [connectAccount](verida_client_ts._internal_.BaseStorageEngine.md#connectaccount)
- [logout](verida_client_ts._internal_.BaseStorageEngine.md#logout)
- [openDatabase](verida_client_ts._internal_.BaseStorageEngine.md#opendatabase)
- [openDatastore](verida_client_ts._internal_.BaseStorageEngine.md#opendatastore)

## Constructors

### constructor

• **new BaseStorageEngine**(`storageContext`, `dbRegistry`, `endpointUri`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `storageContext` | `string` |
| `dbRegistry` | [`DbRegistry`](verida_client_ts._internal_.DbRegistry.md) |
| `endpointUri` | `string` |

#### Defined in

[packages/client-ts/src/context/engines/base.ts:20](https://github.com/verida/verida-js/blob/039856c/packages/client-ts/src/context/engines/base.ts#L20)

## Properties

### account

• `Protected` `Optional` **account**: [`default`](verida_client_ts._internal_.default-1.md)

#### Defined in

[packages/client-ts/src/context/engines/base.ts:17](https://github.com/verida/verida-js/blob/039856c/packages/client-ts/src/context/engines/base.ts#L17)

___

### dbRegistry

• `Protected` **dbRegistry**: [`DbRegistry`](verida_client_ts._internal_.DbRegistry.md)

#### Defined in

[packages/client-ts/src/context/engines/base.ts:14](https://github.com/verida/verida-js/blob/039856c/packages/client-ts/src/context/engines/base.ts#L14)

___

### endpointUri

• `Protected` **endpointUri**: `string`

#### Defined in

[packages/client-ts/src/context/engines/base.ts:15](https://github.com/verida/verida-js/blob/039856c/packages/client-ts/src/context/engines/base.ts#L15)

___

### keyring

• `Protected` `Optional` **keyring**: [`default`](verida_client_ts._internal_.default-2.md)

#### Defined in

[packages/client-ts/src/context/engines/base.ts:18](https://github.com/verida/verida-js/blob/039856c/packages/client-ts/src/context/engines/base.ts#L18)

___

### storageContext

• `Protected` **storageContext**: `string`

#### Defined in

[packages/client-ts/src/context/engines/base.ts:13](https://github.com/verida/verida-js/blob/039856c/packages/client-ts/src/context/engines/base.ts#L13)

## Methods

### connectAccount

▸ **connectAccount**(`account`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | [`default`](verida_client_ts._internal_.default-1.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/client-ts/src/context/engines/base.ts:30](https://github.com/verida/verida-js/blob/039856c/packages/client-ts/src/context/engines/base.ts#L30)

___

### logout

▸ **logout**(): `void`

#### Returns

`void`

#### Defined in

[packages/client-ts/src/context/engines/base.ts:49](https://github.com/verida/verida-js/blob/039856c/packages/client-ts/src/context/engines/base.ts#L49)

___

### openDatabase

▸ **openDatabase**(`databaseName`, `config`): `Promise`<[`Database`](../interfaces/verida_client_ts.Database.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `databaseName` | `string` |
| `config` | [`DatabaseOpenConfig`](../interfaces/verida_client_ts.ContextInterfaces.DatabaseOpenConfig.md) |

#### Returns

`Promise`<[`Database`](../interfaces/verida_client_ts.Database.md)\>

#### Defined in

[packages/client-ts/src/context/engines/base.ts:35](https://github.com/verida/verida-js/blob/039856c/packages/client-ts/src/context/engines/base.ts#L35)

___

### openDatastore

▸ **openDatastore**(`schemaName`, `config`): `Promise`<[`Datastore`](verida_client_ts.Datastore.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `schemaName` | `string` |
| `config` | [`DatastoreOpenConfig`](../interfaces/verida_client_ts.ContextInterfaces.DatastoreOpenConfig.md) |

#### Returns

`Promise`<[`Datastore`](verida_client_ts.Datastore.md)\>

#### Defined in

[packages/client-ts/src/context/engines/base.ts:42](https://github.com/verida/verida-js/blob/039856c/packages/client-ts/src/context/engines/base.ts#L42)
