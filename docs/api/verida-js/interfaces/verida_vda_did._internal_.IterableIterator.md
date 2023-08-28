[root](../README.md) / [Modules](../modules.md) / [@verida/vda-did](../modules/verida_vda_did.md) / [<internal\>](../modules/verida_vda_did._internal_.md) / IterableIterator

# Interface: IterableIterator<T\>

[@verida/vda-did](../modules/verida_vda_did.md).[<internal\>](../modules/verida_vda_did._internal_.md).IterableIterator

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`Iterator`](verida_vda_did._internal_.Iterator.md)<`T`\>

  ↳ **`IterableIterator`**

## Table of contents

### Methods

- [[iterator]](verida_vda_did._internal_.IterableIterator.md#[iterator])
- [next](verida_vda_did._internal_.IterableIterator.md#next)
- [return](verida_vda_did._internal_.IterableIterator.md#return)
- [throw](verida_vda_did._internal_.IterableIterator.md#throw)

## Methods

### [iterator]

▸ **[iterator]**(): [`IterableIterator`](verida_vda_did._internal_.IterableIterator.md)<`T`\>

#### Returns

[`IterableIterator`](verida_vda_did._internal_.IterableIterator.md)<`T`\>

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:55

___

### next

▸ **next**(...`args`): [`IteratorResult`](../modules/verida_vda_did._internal_.md#iteratorresult)<`T`, `any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [] \| [`undefined`] |

#### Returns

[`IteratorResult`](../modules/verida_vda_did._internal_.md#iteratorresult)<`T`, `any`\>

#### Inherited from

[Iterator](verida_vda_did._internal_.Iterator.md).[next](verida_vda_did._internal_.Iterator.md#next)

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:45

___

### return

▸ `Optional` **return**(`value?`): [`IteratorResult`](../modules/verida_vda_did._internal_.md#iteratorresult)<`T`, `any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | `any` |

#### Returns

[`IteratorResult`](../modules/verida_vda_did._internal_.md#iteratorresult)<`T`, `any`\>

#### Inherited from

[Iterator](verida_vda_did._internal_.Iterator.md).[return](verida_vda_did._internal_.Iterator.md#return)

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:46

___

### throw

▸ `Optional` **throw**(`e?`): [`IteratorResult`](../modules/verida_vda_did._internal_.md#iteratorresult)<`T`, `any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | `any` |

#### Returns

[`IteratorResult`](../modules/verida_vda_did._internal_.md#iteratorresult)<`T`, `any`\>

#### Inherited from

[Iterator](verida_vda_did._internal_.Iterator.md).[throw](verida_vda_did._internal_.Iterator.md#throw)

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:47
