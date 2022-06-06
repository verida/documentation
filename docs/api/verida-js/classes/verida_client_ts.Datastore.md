[root](../README.md) / [Modules](../modules.md) / [@verida/client-ts](../modules/verida_client_ts.md) / Datastore

# Class: Datastore

[@verida/client-ts](../modules/verida_client_ts.md).Datastore

## Table of contents

### Constructors

- [constructor](verida_client_ts.Datastore.md#constructor)

### Properties

- [config](verida_client_ts.Datastore.md#config)
- [context](verida_client_ts.Datastore.md#context)
- [db](verida_client_ts.Datastore.md#db)
- [errors](verida_client_ts.Datastore.md#errors)
- [schema](verida_client_ts.Datastore.md#schema)
- [schemaName](verida_client_ts.Datastore.md#schemaname)
- [schemaPath](verida_client_ts.Datastore.md#schemapath)

### Methods

- [changes](verida_client_ts.Datastore.md#changes)
- [delete](verida_client_ts.Datastore.md#delete)
- [deleteAll](verida_client_ts.Datastore.md#deleteall)
- [ensureIndexes](verida_client_ts.Datastore.md#ensureindexes)
- [get](verida_client_ts.Datastore.md#get)
- [getDb](verida_client_ts.Datastore.md#getdb)
- [getMany](verida_client_ts.Datastore.md#getmany)
- [getOne](verida_client_ts.Datastore.md#getone)
- [init](verida_client_ts.Datastore.md#init)
- [save](verida_client_ts.Datastore.md#save)
- [updateUsers](verida_client_ts.Datastore.md#updateusers)

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
| `config` | [`DatastoreOpenConfig`](../interfaces/verida_client_ts.ContextInterfaces.DatastoreOpenConfig.md) |

#### Defined in

[packages/client-ts/src/context/datastore.ts:42](https://github.com/verida/verida-js/blob/c03b336/packages/client-ts/src/context/datastore.ts#L42)

## Properties

### config

• `Protected` **config**: [`DatastoreOpenConfig`](../interfaces/verida_client_ts.ContextInterfaces.DatastoreOpenConfig.md)

#### Defined in

[packages/client-ts/src/context/datastore.ts:24](https://github.com/verida/verida-js/blob/c03b336/packages/client-ts/src/context/datastore.ts#L24)

___

### context

• `Protected` **context**: [`Context`](verida_client_ts.Context.md)

#### Defined in

[packages/client-ts/src/context/datastore.ts:23](https://github.com/verida/verida-js/blob/c03b336/packages/client-ts/src/context/datastore.ts#L23)

___

### db

• `Private` **db**: `any`

#### Defined in

[packages/client-ts/src/context/datastore.ts:26](https://github.com/verida/verida-js/blob/c03b336/packages/client-ts/src/context/datastore.ts#L26)

___

### errors

• **errors**: `object` = `{}`

A list of the latest database errors.

Any errors from saving a record will be available on this public object.

The errors remain until they are replaced by any new errors.

#### Defined in

[packages/client-ts/src/context/datastore.ts:35](https://github.com/verida/verida-js/blob/c03b336/packages/client-ts/src/context/datastore.ts#L35)

___

### schema

• `Protected` `Optional` **schema**: `any`

#### Defined in

[packages/client-ts/src/context/datastore.ts:21](https://github.com/verida/verida-js/blob/c03b336/packages/client-ts/src/context/datastore.ts#L21)

___

### schemaName

• `Protected` **schemaName**: `string`

#### Defined in

[packages/client-ts/src/context/datastore.ts:19](https://github.com/verida/verida-js/blob/c03b336/packages/client-ts/src/context/datastore.ts#L19)

___

### schemaPath

• `Protected` `Optional` **schemaPath**: `string`

#### Defined in

[packages/client-ts/src/context/datastore.ts:20](https://github.com/verida/verida-js/blob/c03b336/packages/client-ts/src/context/datastore.ts#L20)

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

#### Defined in

[packages/client-ts/src/context/datastore.ts:196](https://github.com/verida/verida-js/blob/c03b336/packages/client-ts/src/context/datastore.ts#L196)

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

[packages/client-ts/src/context/datastore.ts:169](https://github.com/verida/verida-js/blob/c03b336/packages/client-ts/src/context/datastore.ts#L169)

___

### deleteAll

▸ **deleteAll**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/client-ts/src/context/datastore.ts:174](https://github.com/verida/verida-js/blob/c03b336/packages/client-ts/src/context/datastore.ts#L174)

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

[packages/client-ts/src/context/datastore.ts:240](https://github.com/verida/verida-js/blob/c03b336/packages/client-ts/src/context/datastore.ts#L240)

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

#### Defined in

[packages/client-ts/src/context/datastore.ts:159](https://github.com/verida/verida-js/blob/c03b336/packages/client-ts/src/context/datastore.ts#L159)

___

### getDb

▸ **getDb**(): `Promise`<`any`\>

Get the underlying database instance associated with this datastore.

**Note: Do not use unless you know what you're doing as you can easily corrupt a database by breaking schema data.**

#### Returns

`Promise`<`any`\>

#### Defined in

[packages/client-ts/src/context/datastore.ts:184](https://github.com/verida/verida-js/blob/c03b336/packages/client-ts/src/context/datastore.ts#L184)

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

#### Defined in

[packages/client-ts/src/context/datastore.ts:120](https://github.com/verida/verida-js/blob/c03b336/packages/client-ts/src/context/datastore.ts#L120)

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

#### Defined in

[packages/client-ts/src/context/datastore.ts:143](https://github.com/verida/verida-js/blob/c03b336/packages/client-ts/src/context/datastore.ts#L143)

___

### init

▸ `Private` **init**(): `Promise`<`void`\>

Initialize this datastore instance before use.

**`todo:`** move this into context.openDatastore???

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/client-ts/src/context/datastore.ts:206](https://github.com/verida/verida-js/blob/c03b336/packages/client-ts/src/context/datastore.ts#L206)

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

#### Defined in

[packages/client-ts/src/context/datastore.ts:76](https://github.com/verida/verida-js/blob/c03b336/packages/client-ts/src/context/datastore.ts#L76)

___

### updateUsers

▸ **updateUsers**(`readList?`, `writeList?`): `Promise`<`void`\>

Update the list of valid users for this datastore.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `readList` | `string`[] | `[]` | List of DID's that can read from this datastore. |
| `writeList` | `string`[] | `[]` | List of DID's that can wrtie to this datastore. |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/client-ts/src/context/datastore.ts:257](https://github.com/verida/verida-js/blob/c03b336/packages/client-ts/src/context/datastore.ts#L257)
