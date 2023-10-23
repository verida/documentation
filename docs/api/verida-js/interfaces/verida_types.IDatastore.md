[root](../README.md) / [Modules](../modules.md) / [@verida/types](../modules/verida_types.md) / IDatastore

# Interface: IDatastore

[@verida/types](../modules/verida_types.md).IDatastore

## Table of contents

### Properties

- [errors](verida_types.IDatastore.md#errors)

### Methods

- [changes](verida_types.IDatastore.md#changes)
- [close](verida_types.IDatastore.md#close)
- [delete](verida_types.IDatastore.md#delete)
- [deleteAll](verida_types.IDatastore.md#deleteall)
- [ensureIndexes](verida_types.IDatastore.md#ensureindexes)
- [get](verida_types.IDatastore.md#get)
- [getDb](verida_types.IDatastore.md#getdb)
- [getMany](verida_types.IDatastore.md#getmany)
- [getOne](verida_types.IDatastore.md#getone)
- [save](verida_types.IDatastore.md#save)
- [updateUsers](verida_types.IDatastore.md#updateusers)

## Properties

### errors

• **errors**: `any`

#### Defined in

[packages/types/src/IDatastore.ts:6](https://github.com/verida/verida-js/blob/032961c/packages/types/src/IDatastore.ts#L6)

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

[packages/types/src/IDatastore.ts:28](https://github.com/verida/verida-js/blob/032961c/packages/types/src/IDatastore.ts#L28)

___

### close

▸ **close**(`options`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`DatabaseCloseOptions`](verida_types.DatabaseCloseOptions.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/types/src/IDatastore.ts:37](https://github.com/verida/verida-js/blob/032961c/packages/types/src/IDatastore.ts#L37)

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

[packages/types/src/IDatastore.ts:22](https://github.com/verida/verida-js/blob/032961c/packages/types/src/IDatastore.ts#L22)

___

### deleteAll

▸ **deleteAll**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/types/src/IDatastore.ts:24](https://github.com/verida/verida-js/blob/032961c/packages/types/src/IDatastore.ts#L24)

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

[packages/types/src/IDatastore.ts:30](https://github.com/verida/verida-js/blob/032961c/packages/types/src/IDatastore.ts#L30)

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

[packages/types/src/IDatastore.ts:20](https://github.com/verida/verida-js/blob/032961c/packages/types/src/IDatastore.ts#L20)

___

### getDb

▸ **getDb**(): `Promise`<[`IDatabase`](verida_types.IDatabase.md)\>

#### Returns

`Promise`<[`IDatabase`](verida_types.IDatabase.md)\>

#### Defined in

[packages/types/src/IDatastore.ts:26](https://github.com/verida/verida-js/blob/032961c/packages/types/src/IDatastore.ts#L26)

___

### getMany

▸ **getMany**(`customFilter`, `options`): `Promise`<`object`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `customFilter` | `any` |
| `options` | `any` |

#### Returns

`Promise`<`object`[]\>

#### Defined in

[packages/types/src/IDatastore.ts:10](https://github.com/verida/verida-js/blob/032961c/packages/types/src/IDatastore.ts#L10)

___

### getOne

▸ **getOne**(`customFilter`, `options`): `Promise`<`undefined` \| `object`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `customFilter` | `any` |
| `options` | `any` |

#### Returns

`Promise`<`undefined` \| `object`\>

#### Defined in

[packages/types/src/IDatastore.ts:15](https://github.com/verida/verida-js/blob/032961c/packages/types/src/IDatastore.ts#L15)

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

[packages/types/src/IDatastore.ts:8](https://github.com/verida/verida-js/blob/032961c/packages/types/src/IDatastore.ts#L8)

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

[packages/types/src/IDatastore.ts:32](https://github.com/verida/verida-js/blob/032961c/packages/types/src/IDatastore.ts#L32)
