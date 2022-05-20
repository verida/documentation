[root](../README.md) / [Modules](../modules.md) / [@verida/client-ts](../modules/verida_client_ts.md) / Database

# Interface: Database

[@verida/client-ts](../modules/verida_client_ts.md).Database

Interface for any database returned from a storage engine

## Table of contents

### Methods

- [changes](verida_client_ts.Database.md#changes)
- [delete](verida_client_ts.Database.md#delete)
- [deleteAll](verida_client_ts.Database.md#deleteall)
- [get](verida_client_ts.Database.md#get)
- [getDb](verida_client_ts.Database.md#getdb)
- [getMany](verida_client_ts.Database.md#getmany)
- [info](verida_client_ts.Database.md#info)
- [init](verida_client_ts.Database.md#init)
- [registryEntry](verida_client_ts.Database.md#registryentry)
- [save](verida_client_ts.Database.md#save)
- [updateUsers](verida_client_ts.Database.md#updateusers)

## Methods

### changes

▸ **changes**(`cb`, `options`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | `Function` |
| `options` | `any` |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/client-ts/src/context/database.ts:13](https://github.com/verida/verida-js/blob/039856c/packages/client-ts/src/context/database.ts#L13)

___

### delete

▸ **delete**(`doc`, `options`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `doc` | `any` |
| `options` | `any` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[packages/client-ts/src/context/database.ts:11](https://github.com/verida/verida-js/blob/039856c/packages/client-ts/src/context/database.ts#L11)

___

### deleteAll

▸ **deleteAll**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/client-ts/src/context/database.ts:12](https://github.com/verida/verida-js/blob/039856c/packages/client-ts/src/context/database.ts#L12)

___

### get

▸ **get**(`docId`, `options`): `Promise`<`undefined` \| `object`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `docId` | `any` |
| `options` | `any` |

#### Returns

`Promise`<`undefined` \| `object`\>

#### Defined in

[packages/client-ts/src/context/database.ts:10](https://github.com/verida/verida-js/blob/039856c/packages/client-ts/src/context/database.ts#L10)

___

### getDb

▸ **getDb**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

[packages/client-ts/src/context/database.ts:15](https://github.com/verida/verida-js/blob/039856c/packages/client-ts/src/context/database.ts#L15)

___

### getMany

▸ **getMany**(`filter`, `options`): `Promise`<`undefined` \| `object`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter` | `any` |
| `options` | `any` |

#### Returns

`Promise`<`undefined` \| `object`[]\>

#### Defined in

[packages/client-ts/src/context/database.ts:9](https://github.com/verida/verida-js/blob/039856c/packages/client-ts/src/context/database.ts#L9)

___

### info

▸ **info**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

[packages/client-ts/src/context/database.ts:17](https://github.com/verida/verida-js/blob/039856c/packages/client-ts/src/context/database.ts#L17)

___

### init

▸ **init**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/client-ts/src/context/database.ts:16](https://github.com/verida/verida-js/blob/039856c/packages/client-ts/src/context/database.ts#L16)

___

### registryEntry

▸ **registryEntry**(): `Promise`<[`DbRegistryEntry`](verida_client_ts._internal_.DbRegistryEntry.md)\>

#### Returns

`Promise`<[`DbRegistryEntry`](verida_client_ts._internal_.DbRegistryEntry.md)\>

#### Defined in

[packages/client-ts/src/context/database.ts:18](https://github.com/verida/verida-js/blob/039856c/packages/client-ts/src/context/database.ts#L18)

___

### save

▸ **save**(`data`, `options`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |
| `options` | `any` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[packages/client-ts/src/context/database.ts:8](https://github.com/verida/verida-js/blob/039856c/packages/client-ts/src/context/database.ts#L8)

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

[packages/client-ts/src/context/database.ts:14](https://github.com/verida/verida-js/blob/039856c/packages/client-ts/src/context/database.ts#L14)
