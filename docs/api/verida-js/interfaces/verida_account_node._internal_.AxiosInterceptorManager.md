[root](../README.md) / [Modules](../modules.md) / [@verida/account-node](../modules/verida_account_node.md) / [<internal\>](../modules/verida_account_node._internal_.md) / AxiosInterceptorManager

# Interface: AxiosInterceptorManager<V\>

[@verida/account-node](../modules/verida_account_node.md).[<internal\>](../modules/verida_account_node._internal_.md).AxiosInterceptorManager

## Type parameters

| Name |
| :------ |
| `V` |

## Table of contents

### Methods

- [eject](verida_account_node._internal_.AxiosInterceptorManager.md#eject)
- [use](verida_account_node._internal_.AxiosInterceptorManager.md#use)

## Methods

### eject

▸ **eject**(`id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

`void`

#### Defined in

packages/account-node/node_modules/axios/index.d.ts:211

___

### use

▸ **use**<`T`\>(`onFulfilled?`, `onRejected?`, `options?`): `number`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `V` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `onFulfilled?` | (`value`: `V`) => `T` \| `Promise`<`T`\> |
| `onRejected?` | (`error`: `any`) => `any` |
| `options?` | [`AxiosInterceptorOptions`](verida_account_node._internal_.AxiosInterceptorOptions.md) |

#### Returns

`number`

#### Defined in

packages/account-node/node_modules/axios/index.d.ts:210
