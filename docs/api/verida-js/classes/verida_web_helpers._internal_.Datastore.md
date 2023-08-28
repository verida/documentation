[root](../README.md) / [Modules](../modules.md) / [@verida/web-helpers](../modules/verida_web_helpers.md) / [<internal\>](../modules/verida_web_helpers._internal_.md) / Datastore

# Class: Datastore

[@verida/web-helpers](../modules/verida_web_helpers.md).[<internal\>](../modules/verida_web_helpers._internal_.md).Datastore

## Implements

- [`IDatastore`](../interfaces/verida_web_helpers._internal_.IDatastore.md)

## Table of contents

### Constructors

- [constructor](verida_web_helpers._internal_.Datastore.md#constructor)

### Properties

- [config](verida_web_helpers._internal_.Datastore.md#config)
- [context](verida_web_helpers._internal_.Datastore.md#context)
- [db](verida_web_helpers._internal_.Datastore.md#db)
- [errors](verida_web_helpers._internal_.Datastore.md#errors)
- [init](verida_web_helpers._internal_.Datastore.md#init)
- [schema](verida_web_helpers._internal_.Datastore.md#schema)
- [schemaName](verida_web_helpers._internal_.Datastore.md#schemaname)
- [schemaPath](verida_web_helpers._internal_.Datastore.md#schemapath)

### Methods

- [changes](verida_web_helpers._internal_.Datastore.md#changes)
- [close](verida_web_helpers._internal_.Datastore.md#close)
- [delete](verida_web_helpers._internal_.Datastore.md#delete)
- [deleteAll](verida_web_helpers._internal_.Datastore.md#deleteall)
- [ensureIndexes](verida_web_helpers._internal_.Datastore.md#ensureindexes)
- [get](verida_web_helpers._internal_.Datastore.md#get)
- [getDb](verida_web_helpers._internal_.Datastore.md#getdb)
- [getMany](verida_web_helpers._internal_.Datastore.md#getmany)
- [getOne](verida_web_helpers._internal_.Datastore.md#getone)
- [save](verida_web_helpers._internal_.Datastore.md#save)
- [updateUsers](verida_web_helpers._internal_.Datastore.md#updateusers)

## Constructors

### constructor

• **new Datastore**(`schemaName`, `context`, `config?`)

Create a new Datastore.

**Do not instantiate directly.**

#### Parameters

| Name | Type |
| :------ | :------ |
| `schemaName` | `string` |
| `context` | [`Context`](verida_web_helpers._internal_.Context.md) |
| `config?` | [`DatastoreOpenConfig`](../interfaces/verida_web_helpers._internal_.DatastoreOpenConfig.md) |

#### Defined in

packages/client-ts/dist/context/datastore.d.ts:33

## Properties

### config

• `Protected` **config**: [`DatastoreOpenConfig`](../interfaces/verida_web_helpers._internal_.DatastoreOpenConfig.md)

#### Defined in

packages/client-ts/dist/context/datastore.d.ts:18

___

### context

• `Protected` **context**: [`Context`](verida_web_helpers._internal_.Context.md)

#### Defined in

packages/client-ts/dist/context/datastore.d.ts:17

___

### db

• `Private` **db**: `any`

#### Defined in

packages/client-ts/dist/context/datastore.d.ts:19

___

### errors

• **errors**: `object`

A list of the latest database errors.

Any errors from saving a record will be available on this public object.

The errors remain until they are replaced by any new errors.

#### Implementation of

[IDatastore](../interfaces/verida_web_helpers._internal_.IDatastore.md).[errors](../interfaces/verida_web_helpers._internal_.IDatastore.md#errors)

#### Defined in

packages/client-ts/dist/context/datastore.d.ts:27

___

### init

• `Private` **init**: `any`

Initialize this datastore instance before use.

**`todo:`** move this into context.openDatastore???

#### Defined in

packages/client-ts/dist/context/datastore.d.ts:128

___

### schema

• `Protected` `Optional` **schema**: `any`

#### Defined in

packages/client-ts/dist/context/datastore.d.ts:16

___

### schemaName

• `Protected` **schemaName**: `string`

#### Defined in

packages/client-ts/dist/context/datastore.d.ts:14

___

### schemaPath

• `Protected` `Optional` **schemaPath**: `string`

#### Defined in

packages/client-ts/dist/context/datastore.d.ts:15

## Methods

### changes

▸ **changes**(`cb`, `options?`): `Promise`<`any`\>

Bind to changes to this datastore

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cb` | `any` | Callback function that fires when new data is received |
| `options?` | `any` | Options to be passed to the listener. See https://pouchdb.com/api.html#changes |

#### Returns

`Promise`<`any`\>

Returns an object with a `.cancel()` method to cancel the listener

#### Implementation of

[IDatastore](../interfaces/verida_web_helpers._internal_.IDatastore.md).[changes](../interfaces/verida_web_helpers._internal_.IDatastore.md#changes)

#### Defined in

packages/client-ts/dist/context/datastore.d.ts:122

___

### close

▸ **close**(`options?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DatabaseCloseOptions`](../interfaces/verida_web_helpers._internal_.DatabaseCloseOptions.md) |

#### Returns

`Promise`<`void`\>

#### Implementation of

[IDatastore](../interfaces/verida_web_helpers._internal_.IDatastore.md).[close](../interfaces/verida_web_helpers._internal_.IDatastore.md#close)

#### Defined in

packages/client-ts/dist/context/datastore.d.ts:143

___

### delete

▸ **delete**(`docId`): `Promise`<`any`\>

Delete a record by ID.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `docId` | `string` | Unique ID of the record to delete |

#### Returns

`Promise`<`any`\>

#### Implementation of

[IDatastore](../interfaces/verida_web_helpers._internal_.IDatastore.md).[delete](../interfaces/verida_web_helpers._internal_.IDatastore.md#delete)

#### Defined in

packages/client-ts/dist/context/datastore.d.ts:107

___

### deleteAll

▸ **deleteAll**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Implementation of

[IDatastore](../interfaces/verida_web_helpers._internal_.IDatastore.md).[deleteAll](../interfaces/verida_web_helpers._internal_.IDatastore.md#deleteall)

#### Defined in

packages/client-ts/dist/context/datastore.d.ts:108

___

### ensureIndexes

▸ **ensureIndexes**(`indexes`): `Promise`<`void`\>

**`todo:`** Support removing indexes that were deleted from the spec

**`todo:`** Validate indexes

#### Parameters

| Name | Type |
| :------ | :------ |
| `indexes` | `any` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[IDatastore](../interfaces/verida_web_helpers._internal_.IDatastore.md).[ensureIndexes](../interfaces/verida_web_helpers._internal_.IDatastore.md#ensureindexes)

#### Defined in

packages/client-ts/dist/context/datastore.d.ts:135

___

### get

▸ **get**(`key`, `options?`): `Promise`<`any`\>

Get a record by ID.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | Unique ID of the record to fetch |
| `options?` | `any` | - |

#### Returns

`Promise`<`any`\>

#### Implementation of

[IDatastore](../interfaces/verida_web_helpers._internal_.IDatastore.md).[get](../interfaces/verida_web_helpers._internal_.IDatastore.md#get)

#### Defined in

packages/client-ts/dist/context/datastore.d.ts:101

___

### getDb

▸ **getDb**(): `Promise`<`any`\>

Get the underlying database instance associated with this datastore.

**Note: Do not use unless you know what you're doing as you can easily corrupt a database by breaking schema data.**

#### Returns

`Promise`<`any`\>

#### Implementation of

[IDatastore](../interfaces/verida_web_helpers._internal_.IDatastore.md).[getDb](../interfaces/verida_web_helpers._internal_.IDatastore.md#getdb)

#### Defined in

packages/client-ts/dist/context/datastore.d.ts:114

___

### getMany

▸ **getMany**(`customFilter?`, `options?`): `Promise`<`object`[]\>

Fetch a list of records from this Datastore.

Only returns records that belong to this Datastore's schema.

Example filters and options:

```
let filter = {
     organization: 'Google'
};

let options = {
     limit: 20,
     skip: 0,
     sort: ['firstName'
};
```

**`example`**
let results = datastore.getMany({
 name: 'John'
});

console.log(results);

#### Parameters

| Name | Type |
| :------ | :------ |
| `customFilter?` | `any` |
| `options?` | `any` |

#### Returns

`Promise`<`object`[]\>

An array of database records.

#### Implementation of

[IDatastore](../interfaces/verida_web_helpers._internal_.IDatastore.md).[getMany](../interfaces/verida_web_helpers._internal_.IDatastore.md#getmany)

#### Defined in

packages/client-ts/dist/context/datastore.d.ts:86

___

### getOne

▸ **getOne**(`customFilter?`, `options?`): `Promise`<`undefined` \| `object`\>

Get a single database record that matches.

#### Parameters

| Name | Type |
| :------ | :------ |
| `customFilter?` | `any` |
| `options?` | `any` |

#### Returns

`Promise`<`undefined` \| `object`\>

A database record

#### Implementation of

[IDatastore](../interfaces/verida_web_helpers._internal_.IDatastore.md).[getOne](../interfaces/verida_web_helpers._internal_.IDatastore.md#getone)

#### Defined in

packages/client-ts/dist/context/datastore.d.ts:94

___

### save

▸ **save**(`data`, `options?`): `Promise`<`boolean` \| `object`\>

Save data to an application schema.

**`fires`** Database#beforeInsert Event fired before inserting a new record

**`fires`** Database#beforeUpdate Event fired before updating a new record

**`fires`** Database#afterInsert Event fired after inserting a new record

**`fires`** Database#afterUpdate Event fired after updating a new record

**`example`**
let result = await datastore.save({
 "firstName": "John",
 "lastName": "Doe"
});

if (!result) {
 console.errors(datastore.errors);
} else {
 console.log("Successfully saved");
}

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `any` | Data to be saved. Will be validated against the schema associated with this Datastore. |
| `options?` | `any` | - |

#### Returns

`Promise`<`boolean` \| `object`\>

Boolean indicating if the save was successful. If not successful `this.errors` will be populated.

#### Implementation of

[IDatastore](../interfaces/verida_web_helpers._internal_.IDatastore.md).[save](../interfaces/verida_web_helpers._internal_.IDatastore.md#save)

#### Defined in

packages/client-ts/dist/context/datastore.d.ts:56

___

### updateUsers

▸ **updateUsers**(`readList?`, `writeList?`): `Promise`<`void`\>

Update the list of valid users for this datastore.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `readList?` | `string`[] | List of DID's that can read from this datastore. |
| `writeList?` | `string`[] | List of DID's that can write to this datastore. |

#### Returns

`Promise`<`void`\>

#### Implementation of

[IDatastore](../interfaces/verida_web_helpers._internal_.IDatastore.md).[updateUsers](../interfaces/verida_web_helpers._internal_.IDatastore.md#updateusers)

#### Defined in

packages/client-ts/dist/context/datastore.d.ts:142
