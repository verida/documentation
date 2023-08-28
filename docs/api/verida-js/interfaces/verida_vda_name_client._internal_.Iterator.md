[root](../README.md) / [Modules](../modules.md) / [@verida/vda-name-client](../modules/verida_vda_name_client.md) / [<internal\>](../modules/verida_vda_name_client._internal_.md) / Iterator

# Interface: Iterator<T, TReturn, TNext\>

[@verida/vda-name-client](../modules/verida_vda_name_client.md).[<internal\>](../modules/verida_vda_name_client._internal_.md).Iterator

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TReturn` | `any` |
| `TNext` | `undefined` |

## Hierarchy

- **`Iterator`**

  ↳ [`IterableIterator`](verida_vda_name_client._internal_.IterableIterator.md)

## Table of contents

### Methods

- [next](verida_vda_name_client._internal_.Iterator.md#next)
- [return](verida_vda_name_client._internal_.Iterator.md#return)
- [throw](verida_vda_name_client._internal_.Iterator.md#throw)

## Methods

### next

▸ **next**(...`args`): [`IteratorResult`](../modules/verida_vda_name_client._internal_.md#iteratorresult)<`T`, `TReturn`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [] \| [`TNext`] |

#### Returns

[`IteratorResult`](../modules/verida_vda_name_client._internal_.md#iteratorresult)<`T`, `TReturn`\>

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:45

___

### return

▸ `Optional` **return**(`value?`): [`IteratorResult`](../modules/verida_vda_name_client._internal_.md#iteratorresult)<`T`, `TReturn`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | `TReturn` |

#### Returns

[`IteratorResult`](../modules/verida_vda_name_client._internal_.md#iteratorresult)<`T`, `TReturn`\>

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:46

___

### throw

▸ `Optional` **throw**(`e?`): [`IteratorResult`](../modules/verida_vda_name_client._internal_.md#iteratorresult)<`T`, `TReturn`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | `any` |

#### Returns

[`IteratorResult`](../modules/verida_vda_name_client._internal_.md#iteratorresult)<`T`, `TReturn`\>

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:47
