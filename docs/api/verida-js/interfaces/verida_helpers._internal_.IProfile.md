[root](../README.md) / [Modules](../modules.md) / [@verida/helpers](../modules/verida_helpers.md) / [<internal\>](../modules/verida_helpers._internal_.md) / IProfile

# Interface: IProfile

[@verida/helpers](../modules/verida_helpers.md).[<internal\>](../modules/verida_helpers._internal_.md).IProfile

## Table of contents

### Methods

- [delete](verida_helpers._internal_.IProfile.md#delete)
- [get](verida_helpers._internal_.IProfile.md#get)
- [getMany](verida_helpers._internal_.IProfile.md#getmany)
- [listen](verida_helpers._internal_.IProfile.md#listen)
- [set](verida_helpers._internal_.IProfile.md#set)
- [setMany](verida_helpers._internal_.IProfile.md#setmany)

## Methods

### delete

▸ **delete**(`key`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

packages/types/dist/IProfile.d.ts:7

___

### get

▸ **get**(`key`, `options?`, `extended?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `options?` | `any` |
| `extended?` | `boolean` |

#### Returns

`Promise`<`any`\>

#### Defined in

packages/types/dist/IProfile.d.ts:6

___

### getMany

▸ **getMany**(`filter`, `options`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter` | `any` |
| `options` | `any` |

#### Returns

`Promise`<`any`\>

#### Defined in

packages/types/dist/IProfile.d.ts:8

___

### listen

▸ **listen**(`callback`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | `any` |

#### Returns

`Promise`<`any`\>

#### Defined in

packages/types/dist/IProfile.d.ts:11

___

### set

▸ **set**(`key`, `value`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `any` |

#### Returns

`Promise`<`any`\>

#### Defined in

packages/types/dist/IProfile.d.ts:9

___

### setMany

▸ **setMany**(`data`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`Promise`<`any`\>

#### Defined in

packages/types/dist/IProfile.d.ts:10
