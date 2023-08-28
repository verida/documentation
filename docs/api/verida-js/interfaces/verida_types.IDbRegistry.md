[root](../README.md) / [Modules](../modules.md) / [@verida/types](../modules/verida_types.md) / IDbRegistry

# Interface: IDbRegistry

[@verida/types](../modules/verida_types.md).IDbRegistry

## Table of contents

### Methods

- [get](verida_types.IDbRegistry.md#get)
- [getMany](verida_types.IDbRegistry.md#getmany)
- [init](verida_types.IDbRegistry.md#init)
- [removeDb](verida_types.IDbRegistry.md#removedb)
- [saveDb](verida_types.IDbRegistry.md#savedb)

## Methods

### get

▸ **get**(`dbName`, `did`, `contextName`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `dbName` | `string` |
| `did` | `string` |
| `contextName` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[packages/types/src/IDbRegistry.ts:11](https://github.com/verida/verida-js/blob/a690f60/packages/types/src/IDbRegistry.ts#L11)

___

### getMany

▸ **getMany**(`filter`, `options`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter` | `any` |
| `options` | `any` |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[packages/types/src/IDbRegistry.ts:9](https://github.com/verida/verida-js/blob/a690f60/packages/types/src/IDbRegistry.ts#L9)

___

### init

▸ **init**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/types/src/IDbRegistry.ts:17](https://github.com/verida/verida-js/blob/a690f60/packages/types/src/IDbRegistry.ts#L17)

___

### removeDb

▸ **removeDb**(`databaseName`, `did`, `contextName`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `databaseName` | `string` |
| `did` | `string` |
| `contextName` | `string` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[packages/types/src/IDbRegistry.ts:7](https://github.com/verida/verida-js/blob/a690f60/packages/types/src/IDbRegistry.ts#L7)

___

### saveDb

▸ **saveDb**(`database`, `checkPermissions`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `database` | [`IDatabase`](verida_types.IDatabase.md) |
| `checkPermissions` | `boolean` |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/types/src/IDbRegistry.ts:5](https://github.com/verida/verida-js/blob/a690f60/packages/types/src/IDbRegistry.ts#L5)
