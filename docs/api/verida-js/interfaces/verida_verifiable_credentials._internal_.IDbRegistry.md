[root](../README.md) / [Modules](../modules.md) / [@verida/verifiable-credentials](../modules/verida_verifiable_credentials.md) / [<internal\>](../modules/verida_verifiable_credentials._internal_.md) / IDbRegistry

# Interface: IDbRegistry

[@verida/verifiable-credentials](../modules/verida_verifiable_credentials.md).[<internal\>](../modules/verida_verifiable_credentials._internal_.md).IDbRegistry

## Table of contents

### Methods

- [get](verida_verifiable_credentials._internal_.IDbRegistry.md#get)
- [getMany](verida_verifiable_credentials._internal_.IDbRegistry.md#getmany)
- [init](verida_verifiable_credentials._internal_.IDbRegistry.md#init)
- [removeDb](verida_verifiable_credentials._internal_.IDbRegistry.md#removedb)
- [saveDb](verida_verifiable_credentials._internal_.IDbRegistry.md#savedb)

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

packages/types/dist/IDbRegistry.d.ts:6

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

packages/types/dist/IDbRegistry.d.ts:5

___

### init

▸ **init**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

packages/types/dist/IDbRegistry.d.ts:7

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

packages/types/dist/IDbRegistry.d.ts:4

___

### saveDb

▸ **saveDb**(`database`, `checkPermissions`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `database` | [`IDatabase`](verida_verifiable_credentials._internal_.IDatabase.md) |
| `checkPermissions` | `boolean` |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/types/dist/IDbRegistry.d.ts:3
