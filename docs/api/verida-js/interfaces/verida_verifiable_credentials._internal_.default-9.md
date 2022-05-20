[root](../README.md) / [Modules](../modules.md) / [@verida/verifiable-credentials](../modules/verida_verifiable_credentials.md) / [<internal\>](../modules/verida_verifiable_credentials._internal_.md) / default

# Interface: default

[@verida/verifiable-credentials](../modules/verida_verifiable_credentials.md).[<internal\>](../modules/verida_verifiable_credentials._internal_.md).default

Interface for any database returned from a storage engine

## Table of contents

### Methods

- [changes](verida_verifiable_credentials._internal_.default-9.md#changes)
- [delete](verida_verifiable_credentials._internal_.default-9.md#delete)
- [deleteAll](verida_verifiable_credentials._internal_.default-9.md#deleteall)
- [get](verida_verifiable_credentials._internal_.default-9.md#get)
- [getDb](verida_verifiable_credentials._internal_.default-9.md#getdb)
- [getMany](verida_verifiable_credentials._internal_.default-9.md#getmany)
- [info](verida_verifiable_credentials._internal_.default-9.md#info)
- [init](verida_verifiable_credentials._internal_.default-9.md#init)
- [registryEntry](verida_verifiable_credentials._internal_.default-9.md#registryentry)
- [save](verida_verifiable_credentials._internal_.default-9.md#save)
- [updateUsers](verida_verifiable_credentials._internal_.default-9.md#updateusers)

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

packages/client-ts/dist/context/database.d.ts:11

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

packages/client-ts/dist/context/database.d.ts:9

___

### deleteAll

▸ **deleteAll**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

packages/client-ts/dist/context/database.d.ts:10

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

packages/client-ts/dist/context/database.d.ts:8

___

### getDb

▸ **getDb**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

packages/client-ts/dist/context/database.d.ts:13

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

packages/client-ts/dist/context/database.d.ts:7

___

### info

▸ **info**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

packages/client-ts/dist/context/database.d.ts:15

___

### init

▸ **init**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

packages/client-ts/dist/context/database.d.ts:14

___

### registryEntry

▸ **registryEntry**(): `Promise`<[`DbRegistryEntry`](verida_verifiable_credentials._internal_.DbRegistryEntry.md)\>

#### Returns

`Promise`<[`DbRegistryEntry`](verida_verifiable_credentials._internal_.DbRegistryEntry.md)\>

#### Defined in

packages/client-ts/dist/context/database.d.ts:16

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

packages/client-ts/dist/context/database.d.ts:6

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

packages/client-ts/dist/context/database.d.ts:12
