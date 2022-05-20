[root](../README.md) / [Modules](../modules.md) / [@verida/verifiable-credentials](../modules/verida_verifiable_credentials.md) / [<internal\>](../modules/verida_verifiable_credentials._internal_.md) / Datastore

# Class: Datastore

[@verida/verifiable-credentials](../modules/verida_verifiable_credentials.md).[<internal\>](../modules/verida_verifiable_credentials._internal_.md).Datastore

## Table of contents

### Constructors

- [constructor](verida_verifiable_credentials._internal_.Datastore.md#constructor)

### Properties

- [config](verida_verifiable_credentials._internal_.Datastore.md#config)
- [context](verida_verifiable_credentials._internal_.Datastore.md#context)
- [db](verida_verifiable_credentials._internal_.Datastore.md#db)
- [errors](verida_verifiable_credentials._internal_.Datastore.md#errors)
- [init](verida_verifiable_credentials._internal_.Datastore.md#init)
- [schema](verida_verifiable_credentials._internal_.Datastore.md#schema)
- [schemaName](verida_verifiable_credentials._internal_.Datastore.md#schemaname)
- [schemaPath](verida_verifiable_credentials._internal_.Datastore.md#schemapath)

### Methods

- [changes](verida_verifiable_credentials._internal_.Datastore.md#changes)
- [delete](verida_verifiable_credentials._internal_.Datastore.md#delete)
- [deleteAll](verida_verifiable_credentials._internal_.Datastore.md#deleteall)
- [ensureIndexes](verida_verifiable_credentials._internal_.Datastore.md#ensureindexes)
- [get](verida_verifiable_credentials._internal_.Datastore.md#get)
- [getDb](verida_verifiable_credentials._internal_.Datastore.md#getdb)
- [getMany](verida_verifiable_credentials._internal_.Datastore.md#getmany)
- [getOne](verida_verifiable_credentials._internal_.Datastore.md#getone)
- [save](verida_verifiable_credentials._internal_.Datastore.md#save)
- [updateUsers](verida_verifiable_credentials._internal_.Datastore.md#updateusers)

## Constructors

### constructor

• **new Datastore**(`schemaName`, `context`, `config?`)

Create a new Datastore.

**Do not instantiate directly.**

#### Parameters

| Name | Type |
| :------ | :------ |
| `schemaName` | `string` |
| `context` | [`Context`](verida_verifiable_credentials._internal_.Context.md) |
| `config?` | [`DatastoreOpenConfig`](../interfaces/verida_verifiable_credentials._internal_.DatastoreOpenConfig.md) |

#### Defined in

packages/client-ts/dist/context/datastore.d.ts:33

## Properties

### config

• `Protected` **config**: [`DatastoreOpenConfig`](../interfaces/verida_verifiable_credentials._internal_.DatastoreOpenConfig.md)

#### Defined in

packages/client-ts/dist/context/datastore.d.ts:18

___

### context

• `Protected` **context**: [`Context`](verida_verifiable_credentials._internal_.Context.md)

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

#### Defined in

packages/client-ts/dist/context/datastore.d.ts:122

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

#### Defined in

packages/client-ts/dist/context/datastore.d.ts:107

___

### deleteAll

▸ **deleteAll**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

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

#### Defined in

packages/client-ts/dist/context/datastore.d.ts:101

___

### getDb

▸ **getDb**(): `Promise`<`any`\>

Get the underlying database instance associated with this datastore.

**Note: Do not use unless you know what you're doing as you can easily corrupt a database by breaking schema data.**

#### Returns

`Promise`<`any`\>

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
| `writeList?` | `string`[] | List of DID's that can wrtie to this datastore. |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/client-ts/dist/context/datastore.d.ts:142
