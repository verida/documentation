[root](../README.md) / [Modules](../modules.md) / [@verida/web-helpers](../modules/verida_web_helpers.md) / [<internal\>](../modules/verida_web_helpers._internal_.md) / IDatabase

# Interface: IDatabase

[@verida/web-helpers](../modules/verida_web_helpers.md).[<internal\>](../modules/verida_web_helpers._internal_.md).IDatabase

Interface for any database returned from a storage engine

## Table of contents

### Methods

- [changes](verida_web_helpers._internal_.IDatabase.md#changes)
- [close](verida_web_helpers._internal_.IDatabase.md#close)
- [delete](verida_web_helpers._internal_.IDatabase.md#delete)
- [deleteAll](verida_web_helpers._internal_.IDatabase.md#deleteall)
- [destroy](verida_web_helpers._internal_.IDatabase.md#destroy)
- [get](verida_web_helpers._internal_.IDatabase.md#get)
- [getDb](verida_web_helpers._internal_.IDatabase.md#getdb)
- [getMany](verida_web_helpers._internal_.IDatabase.md#getmany)
- [info](verida_web_helpers._internal_.IDatabase.md#info)
- [registryEntry](verida_web_helpers._internal_.IDatabase.md#registryentry)
- [save](verida_web_helpers._internal_.IDatabase.md#save)
- [updateUsers](verida_web_helpers._internal_.IDatabase.md#updateusers)
- [usage](verida_web_helpers._internal_.IDatabase.md#usage)

## Methods

### changes

▸ **changes**(`cb`, `options?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | `Function` |
| `options?` | `any` |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/types/dist/IDatabase.d.ts:11

___

### close

▸ **close**(`options?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DatabaseCloseOptions`](verida_web_helpers._internal_.DatabaseCloseOptions.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/types/dist/IDatabase.d.ts:16

___

### delete

▸ **delete**(`doc`, `options?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `doc` | `any` |
| `options?` | `any` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

packages/types/dist/IDatabase.d.ts:9

___

### deleteAll

▸ **deleteAll**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

packages/types/dist/IDatabase.d.ts:10

___

### destroy

▸ **destroy**(`options?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DatabaseDeleteConfig`](verida_web_helpers._internal_.DatabaseDeleteConfig.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/types/dist/IDatabase.d.ts:17

___

### get

▸ **get**(`docId`, `options?`): `Promise`<`undefined` \| `object`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `docId` | `any` |
| `options?` | `any` |

#### Returns

`Promise`<`undefined` \| `object`\>

#### Defined in

packages/types/dist/IDatabase.d.ts:8

___

### getDb

▸ **getDb**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

packages/types/dist/IDatabase.d.ts:13

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

#### Defined in

packages/types/dist/IDatabase.d.ts:7

___

### info

▸ **info**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

packages/types/dist/IDatabase.d.ts:14

___

### registryEntry

▸ **registryEntry**(): `Promise`<[`DbRegistryEntry`](verida_web_helpers._internal_.DbRegistryEntry.md)\>

#### Returns

`Promise`<[`DbRegistryEntry`](verida_web_helpers._internal_.DbRegistryEntry.md)\>

#### Defined in

packages/types/dist/IDatabase.d.ts:15

___

### save

▸ **save**(`data`, `options?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |
| `options?` | `any` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

packages/types/dist/IDatabase.d.ts:6

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

packages/types/dist/IDatabase.d.ts:12

___

### usage

▸ **usage**(): `Promise`<[`EndpointUsage`](verida_web_helpers._internal_.EndpointUsage.md)\>

#### Returns

`Promise`<[`EndpointUsage`](verida_web_helpers._internal_.EndpointUsage.md)\>

#### Defined in

packages/types/dist/IDatabase.d.ts:18
