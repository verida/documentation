[root](../README.md) / [Modules](../modules.md) / [@verida/client-ts](../modules/verida_client_ts.md) / [<internal\>](../modules/verida_client_ts._internal_.md) / IDatastore

# Interface: IDatastore

[@verida/client-ts](../modules/verida_client_ts.md).[<internal\>](../modules/verida_client_ts._internal_.md).IDatastore

## Implemented by

- [`Datastore`](../classes/verida_client_ts._internal_.Datastore.md)

## Table of contents

### Properties

- [errors](verida_client_ts._internal_.IDatastore.md#errors)

### Methods

- [changes](verida_client_ts._internal_.IDatastore.md#changes)
- [close](verida_client_ts._internal_.IDatastore.md#close)
- [delete](verida_client_ts._internal_.IDatastore.md#delete)
- [deleteAll](verida_client_ts._internal_.IDatastore.md#deleteall)
- [ensureIndexes](verida_client_ts._internal_.IDatastore.md#ensureindexes)
- [get](verida_client_ts._internal_.IDatastore.md#get)
- [getDb](verida_client_ts._internal_.IDatastore.md#getdb)
- [getMany](verida_client_ts._internal_.IDatastore.md#getmany)
- [getOne](verida_client_ts._internal_.IDatastore.md#getone)
- [save](verida_client_ts._internal_.IDatastore.md#save)
- [updateUsers](verida_client_ts._internal_.IDatastore.md#updateusers)

## Properties

### errors

• **errors**: `any`

#### Defined in

packages/types/dist/IDatastore.d.ts:4

## Methods

### changes

▸ **changes**(`cb`, `options`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | `any` |
| `options` | `any` |

#### Returns

`Promise`<`any`\>

#### Defined in

packages/types/dist/IDatastore.d.ts:12

___

### close

▸ **close**(`options?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DatabaseCloseOptions`](verida_client_ts._internal_.DatabaseCloseOptions.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/types/dist/IDatastore.d.ts:15

___

### delete

▸ **delete**(`docId`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `docId` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

packages/types/dist/IDatastore.d.ts:9

___

### deleteAll

▸ **deleteAll**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

packages/types/dist/IDatastore.d.ts:10

___

### ensureIndexes

▸ **ensureIndexes**(`indexes`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `indexes` | `any` |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/types/dist/IDatastore.d.ts:13

___

### get

▸ **get**(`key`, `options`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `options` | `any` |

#### Returns

`Promise`<`any`\>

#### Defined in

packages/types/dist/IDatastore.d.ts:8

___

### getDb

▸ **getDb**(): `Promise`<[`IDatabase`](verida_client_ts._internal_.IDatabase.md)\>

#### Returns

`Promise`<[`IDatabase`](verida_client_ts._internal_.IDatabase.md)\>

#### Defined in

packages/types/dist/IDatastore.d.ts:11

___

### getMany

▸ **getMany**(`customFilter?`, `options?`): `Promise`<`object`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `customFilter?` | `any` |
| `options?` | `any` |

#### Returns

`Promise`<`object`[]\>

#### Defined in

packages/types/dist/IDatastore.d.ts:6

___

### getOne

▸ **getOne**(`customFilter?`, `options?`): `Promise`<`undefined` \| `object`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `customFilter?` | `any` |
| `options?` | `any` |

#### Returns

`Promise`<`undefined` \| `object`\>

#### Defined in

packages/types/dist/IDatastore.d.ts:7

___

### save

▸ **save**(`data`, `options`): `Promise`<`boolean` \| `object`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |
| `options` | `any` |

#### Returns

`Promise`<`boolean` \| `object`\>

#### Defined in

packages/types/dist/IDatastore.d.ts:5

___

### updateUsers

▸ **updateUsers**(`readList`, `writeList`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `readList` | `string`[] |
| `writeList` | `string`[] |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/types/dist/IDatastore.d.ts:14
