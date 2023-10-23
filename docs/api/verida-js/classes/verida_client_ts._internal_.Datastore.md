[root](../README.md) / [Modules](../modules.md) / [@verida/client-ts](../modules/verida_client_ts.md) / [<internal\>](../modules/verida_client_ts._internal_.md) / Datastore

# Class: Datastore

[@verida/client-ts](../modules/verida_client_ts.md).[<internal\>](../modules/verida_client_ts._internal_.md).Datastore

## Implements

- [`IDatastore`](../interfaces/verida_client_ts._internal_.IDatastore.md)

## Table of contents

### Constructors

- [constructor](verida_client_ts._internal_.Datastore.md#constructor)

### Properties

- [config](verida_client_ts._internal_.Datastore.md#config)
- [context](verida_client_ts._internal_.Datastore.md#context)
- [db](verida_client_ts._internal_.Datastore.md#db)
- [errors](verida_client_ts._internal_.Datastore.md#errors)
- [schema](verida_client_ts._internal_.Datastore.md#schema)
- [schemaName](verida_client_ts._internal_.Datastore.md#schemaname)
- [schemaPath](verida_client_ts._internal_.Datastore.md#schemapath)

### Methods

- [changes](verida_client_ts._internal_.Datastore.md#changes)
- [close](verida_client_ts._internal_.Datastore.md#close)
- [delete](verida_client_ts._internal_.Datastore.md#delete)
- [deleteAll](verida_client_ts._internal_.Datastore.md#deleteall)
- [ensureIndexes](verida_client_ts._internal_.Datastore.md#ensureindexes)
- [get](verida_client_ts._internal_.Datastore.md#get)
- [getDb](verida_client_ts._internal_.Datastore.md#getdb)
- [getMany](verida_client_ts._internal_.Datastore.md#getmany)
- [getOne](verida_client_ts._internal_.Datastore.md#getone)
- [init](verida_client_ts._internal_.Datastore.md#init)
- [save](verida_client_ts._internal_.Datastore.md#save)
- [updateUsers](verida_client_ts._internal_.Datastore.md#updateusers)

## Constructors

### constructor

• **new Datastore**(`schemaName`, `context`, `config?`)

Create a new Datastore.

**Do not instantiate directly.**

#### Parameters

| Name | Type |
| :------ | :------ |
| `schemaName` | `string` |
| `context` | [`Context`](verida_client_ts.Context.md) |
| `config` | [`DatastoreOpenConfig`](../interfaces/verida_client_ts._internal_.DatastoreOpenConfig.md) |

#### Defined in

[packages/client-ts/src/context/datastore.ts:41](https://github.com/verida/verida-js/blob/032961c/packages/client-ts/src/context/datastore.ts#L41)

## Properties

### config

• `Protected` **config**: [`DatastoreOpenConfig`](../interfaces/verida_client_ts._internal_.DatastoreOpenConfig.md)

#### Defined in

[packages/client-ts/src/context/datastore.ts:23](https://github.com/verida/verida-js/blob/032961c/packages/client-ts/src/context/datastore.ts#L23)

___

### context

• `Protected` **context**: [`Context`](verida_client_ts.Context.md)

#### Defined in

[packages/client-ts/src/context/datastore.ts:22](https://github.com/verida/verida-js/blob/032961c/packages/client-ts/src/context/datastore.ts#L22)

___

### db

• `Private` **db**: `any`

#### Defined in

[packages/client-ts/src/context/datastore.ts:25](https://github.com/verida/verida-js/blob/032961c/packages/client-ts/src/context/datastore.ts#L25)

___

### errors

• **errors**: `object` = `{}`

A list of the latest database errors.

Any errors from saving a record will be available on this public object.

The errors remain until they are replaced by any new errors.

#### Implementation of

[IDatastore](../interfaces/verida_client_ts._internal_.IDatastore.md).[errors](../interfaces/verida_client_ts._internal_.IDatastore.md#errors)

#### Defined in

[packages/client-ts/src/context/datastore.ts:34](https://github.com/verida/verida-js/blob/032961c/packages/client-ts/src/context/datastore.ts#L34)

___

### schema

• `Protected` `Optional` **schema**: `any`

#### Defined in

[packages/client-ts/src/context/datastore.ts:20](https://github.com/verida/verida-js/blob/032961c/packages/client-ts/src/context/datastore.ts#L20)

___

### schemaName

• `Protected` **schemaName**: `string`

#### Defined in

[packages/client-ts/src/context/datastore.ts:18](https://github.com/verida/verida-js/blob/032961c/packages/client-ts/src/context/datastore.ts#L18)

___

### schemaPath

• `Protected` `Optional` **schemaPath**: `string`

#### Defined in

[packages/client-ts/src/context/datastore.ts:19](https://github.com/verida/verida-js/blob/032961c/packages/client-ts/src/context/datastore.ts#L19)

## Methods

### changes

▸ **changes**(`cb`, `options?`): `Promise`<`any`\>

Bind to changes to this datastore

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cb` | `any` | Callback function that fires when new data is received |
| `options` | `any` | Options to be passed to the listener. See https://pouchdb.com/api.html#changes |

#### Returns

`Promise`<`any`\>

Returns an object with a `.cancel()` method to cancel the listener

#### Implementation of

[IDatastore](../interfaces/verida_client_ts._internal_.IDatastore.md).[changes](../interfaces/verida_client_ts._internal_.IDatastore.md#changes)

#### Defined in

[packages/client-ts/src/context/datastore.ts:195](https://github.com/verida/verida-js/blob/032961c/packages/client-ts/src/context/datastore.ts#L195)

___

### close

▸ **close**(`options?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`DatabaseCloseOptions`](../interfaces/verida_client_ts._internal_.DatabaseCloseOptions.md) |

#### Returns

`Promise`<`void`\>

#### Implementation of

[IDatastore](../interfaces/verida_client_ts._internal_.IDatastore.md).[close](../interfaces/verida_client_ts._internal_.IDatastore.md#close)

#### Defined in

[packages/client-ts/src/context/datastore.ts:264](https://github.com/verida/verida-js/blob/032961c/packages/client-ts/src/context/datastore.ts#L264)

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

[IDatastore](../interfaces/verida_client_ts._internal_.IDatastore.md).[delete](../interfaces/verida_client_ts._internal_.IDatastore.md#delete)

#### Defined in

[packages/client-ts/src/context/datastore.ts:168](https://github.com/verida/verida-js/blob/032961c/packages/client-ts/src/context/datastore.ts#L168)

___

### deleteAll

▸ **deleteAll**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Implementation of

[IDatastore](../interfaces/verida_client_ts._internal_.IDatastore.md).[deleteAll](../interfaces/verida_client_ts._internal_.IDatastore.md#deleteall)

#### Defined in

[packages/client-ts/src/context/datastore.ts:173](https://github.com/verida/verida-js/blob/032961c/packages/client-ts/src/context/datastore.ts#L173)

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

[IDatastore](../interfaces/verida_client_ts._internal_.IDatastore.md).[ensureIndexes](../interfaces/verida_client_ts._internal_.IDatastore.md#ensureindexes)

#### Defined in

[packages/client-ts/src/context/datastore.ts:239](https://github.com/verida/verida-js/blob/032961c/packages/client-ts/src/context/datastore.ts#L239)

___

### get

▸ **get**(`key`, `options?`): `Promise`<`any`\>

Get a record by ID.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | Unique ID of the record to fetch |
| `options` | `any` | - |

#### Returns

`Promise`<`any`\>

#### Implementation of

[IDatastore](../interfaces/verida_client_ts._internal_.IDatastore.md).[get](../interfaces/verida_client_ts._internal_.IDatastore.md#get)

#### Defined in

[packages/client-ts/src/context/datastore.ts:158](https://github.com/verida/verida-js/blob/032961c/packages/client-ts/src/context/datastore.ts#L158)

___

### getDb

▸ **getDb**(): `Promise`<`any`\>

Get the underlying database instance associated with this datastore.

**Note: Do not use unless you know what you're doing as you can easily corrupt a database by breaking schema data.**

#### Returns

`Promise`<`any`\>

#### Implementation of

[IDatastore](../interfaces/verida_client_ts._internal_.IDatastore.md).[getDb](../interfaces/verida_client_ts._internal_.IDatastore.md#getdb)

#### Defined in

[packages/client-ts/src/context/datastore.ts:183](https://github.com/verida/verida-js/blob/032961c/packages/client-ts/src/context/datastore.ts#L183)

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
| `customFilter` | `any` |
| `options` | `any` |

#### Returns

`Promise`<`object`[]\>

An array of database records.

#### Implementation of

[IDatastore](../interfaces/verida_client_ts._internal_.IDatastore.md).[getMany](../interfaces/verida_client_ts._internal_.IDatastore.md#getmany)

#### Defined in

[packages/client-ts/src/context/datastore.ts:119](https://github.com/verida/verida-js/blob/032961c/packages/client-ts/src/context/datastore.ts#L119)

___

### getOne

▸ **getOne**(`customFilter?`, `options?`): `Promise`<`undefined` \| `object`\>

Get a single database record that matches.

#### Parameters

| Name | Type |
| :------ | :------ |
| `customFilter` | `any` |
| `options` | `any` |

#### Returns

`Promise`<`undefined` \| `object`\>

A database record

#### Implementation of

[IDatastore](../interfaces/verida_client_ts._internal_.IDatastore.md).[getOne](../interfaces/verida_client_ts._internal_.IDatastore.md#getone)

#### Defined in

[packages/client-ts/src/context/datastore.ts:142](https://github.com/verida/verida-js/blob/032961c/packages/client-ts/src/context/datastore.ts#L142)

___

### init

▸ `Private` **init**(): `Promise`<`void`\>

Initialize this datastore instance before use.

**`todo:`** move this into context.openDatastore???

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/client-ts/src/context/datastore.ts:205](https://github.com/verida/verida-js/blob/032961c/packages/client-ts/src/context/datastore.ts#L205)

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
| `options` | `any` | - |

#### Returns

`Promise`<`boolean` \| `object`\>

Boolean indicating if the save was successful. If not successful `this.errors` will be populated.

#### Implementation of

[IDatastore](../interfaces/verida_client_ts._internal_.IDatastore.md).[save](../interfaces/verida_client_ts._internal_.IDatastore.md#save)

#### Defined in

[packages/client-ts/src/context/datastore.ts:75](https://github.com/verida/verida-js/blob/032961c/packages/client-ts/src/context/datastore.ts#L75)

___

### updateUsers

▸ **updateUsers**(`readList?`, `writeList?`): `Promise`<`void`\>

Update the list of valid users for this datastore.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `readList` | `string`[] | `[]` | List of DID's that can read from this datastore. |
| `writeList` | `string`[] | `[]` | List of DID's that can write to this datastore. |

#### Returns

`Promise`<`void`\>

#### Implementation of

[IDatastore](../interfaces/verida_client_ts._internal_.IDatastore.md).[updateUsers](../interfaces/verida_client_ts._internal_.IDatastore.md#updateusers)

#### Defined in

[packages/client-ts/src/context/datastore.ts:256](https://github.com/verida/verida-js/blob/032961c/packages/client-ts/src/context/datastore.ts#L256)
