[root](../README.md) / [Modules](../modules.md) / [@verida/types](../modules/verida_types.md) / IProfile

# Interface: IProfile

[@verida/types](../modules/verida_types.md).IProfile

## Table of contents

### Methods

- [delete](verida_types.IProfile.md#delete)
- [get](verida_types.IProfile.md#get)
- [getMany](verida_types.IProfile.md#getmany)
- [listen](verida_types.IProfile.md#listen)
- [set](verida_types.IProfile.md#set)
- [setMany](verida_types.IProfile.md#setmany)

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

[packages/types/src/IProfile.ts:13](https://github.com/verida/verida-js/blob/032961c/packages/types/src/IProfile.ts#L13)

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

[packages/types/src/IProfile.ts:7](https://github.com/verida/verida-js/blob/032961c/packages/types/src/IProfile.ts#L7)

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

[packages/types/src/IProfile.ts:15](https://github.com/verida/verida-js/blob/032961c/packages/types/src/IProfile.ts#L15)

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

[packages/types/src/IProfile.ts:21](https://github.com/verida/verida-js/blob/032961c/packages/types/src/IProfile.ts#L21)

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

[packages/types/src/IProfile.ts:17](https://github.com/verida/verida-js/blob/032961c/packages/types/src/IProfile.ts#L17)

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

[packages/types/src/IProfile.ts:19](https://github.com/verida/verida-js/blob/032961c/packages/types/src/IProfile.ts#L19)
