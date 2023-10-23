[root](../README.md) / [Modules](../modules.md) / [@verida/types](../modules/verida_types.md) / IDatabase

# Interface: IDatabase

[@verida/types](../modules/verida_types.md).IDatabase

Interface for any database returned from a storage engine

## Table of contents

### Methods

- [changes](verida_types.IDatabase.md#changes)
- [close](verida_types.IDatabase.md#close)
- [delete](verida_types.IDatabase.md#delete)
- [deleteAll](verida_types.IDatabase.md#deleteall)
- [destroy](verida_types.IDatabase.md#destroy)
- [get](verida_types.IDatabase.md#get)
- [getDb](verida_types.IDatabase.md#getdb)
- [getMany](verida_types.IDatabase.md#getmany)
- [info](verida_types.IDatabase.md#info)
- [registryEntry](verida_types.IDatabase.md#registryentry)
- [save](verida_types.IDatabase.md#save)
- [updateUsers](verida_types.IDatabase.md#updateusers)
- [usage](verida_types.IDatabase.md#usage)

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

[packages/types/src/IDatabase.ts:17](https://github.com/verida/verida-js/blob/032961c/packages/types/src/IDatabase.ts#L17)

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

[packages/types/src/IDatabase.ts:27](https://github.com/verida/verida-js/blob/032961c/packages/types/src/IDatabase.ts#L27)

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

[packages/types/src/IDatabase.ts:13](https://github.com/verida/verida-js/blob/032961c/packages/types/src/IDatabase.ts#L13)

___

### deleteAll

▸ **deleteAll**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/types/src/IDatabase.ts:15](https://github.com/verida/verida-js/blob/032961c/packages/types/src/IDatabase.ts#L15)

___

### destroy

▸ **destroy**(`options`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`DatabaseDeleteConfig`](verida_types.DatabaseDeleteConfig.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/types/src/IDatabase.ts:29](https://github.com/verida/verida-js/blob/032961c/packages/types/src/IDatabase.ts#L29)

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

[packages/types/src/IDatabase.ts:11](https://github.com/verida/verida-js/blob/032961c/packages/types/src/IDatabase.ts#L11)

___

### getDb

▸ **getDb**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

[packages/types/src/IDatabase.ts:21](https://github.com/verida/verida-js/blob/032961c/packages/types/src/IDatabase.ts#L21)

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

[packages/types/src/IDatabase.ts:9](https://github.com/verida/verida-js/blob/032961c/packages/types/src/IDatabase.ts#L9)

___

### info

▸ **info**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

[packages/types/src/IDatabase.ts:23](https://github.com/verida/verida-js/blob/032961c/packages/types/src/IDatabase.ts#L23)

___

### registryEntry

▸ **registryEntry**(): `Promise`<[`DbRegistryEntry`](verida_types.DbRegistryEntry.md)\>

#### Returns

`Promise`<[`DbRegistryEntry`](verida_types.DbRegistryEntry.md)\>

#### Defined in

[packages/types/src/IDatabase.ts:25](https://github.com/verida/verida-js/blob/032961c/packages/types/src/IDatabase.ts#L25)

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

[packages/types/src/IDatabase.ts:7](https://github.com/verida/verida-js/blob/032961c/packages/types/src/IDatabase.ts#L7)

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

[packages/types/src/IDatabase.ts:19](https://github.com/verida/verida-js/blob/032961c/packages/types/src/IDatabase.ts#L19)

___

### usage

▸ **usage**(): `Promise`<[`EndpointUsage`](verida_types.EndpointUsage.md)\>

#### Returns

`Promise`<[`EndpointUsage`](verida_types.EndpointUsage.md)\>

#### Defined in

[packages/types/src/IDatabase.ts:31](https://github.com/verida/verida-js/blob/032961c/packages/types/src/IDatabase.ts#L31)
