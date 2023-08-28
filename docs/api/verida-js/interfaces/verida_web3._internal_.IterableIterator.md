[root](../README.md) / [Modules](../modules.md) / [@verida/web3](../modules/verida_web3.md) / [<internal\>](../modules/verida_web3._internal_.md) / IterableIterator

# Interface: IterableIterator<T\>

[@verida/web3](../modules/verida_web3.md).[<internal\>](../modules/verida_web3._internal_.md).IterableIterator

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`Iterator`](verida_web3._internal_.Iterator.md)<`T`\>

  ↳ **`IterableIterator`**

## Table of contents

### Methods

- [[iterator]](verida_web3._internal_.IterableIterator.md#[iterator])
- [next](verida_web3._internal_.IterableIterator.md#next)
- [return](verida_web3._internal_.IterableIterator.md#return)
- [throw](verida_web3._internal_.IterableIterator.md#throw)

## Methods

### [iterator]

▸ **[iterator]**(): [`IterableIterator`](verida_web3._internal_.IterableIterator.md)<`T`\>

#### Returns

[`IterableIterator`](verida_web3._internal_.IterableIterator.md)<`T`\>

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:55

___

### next

▸ **next**(...`args`): [`IteratorResult`](../modules/verida_web3._internal_.md#iteratorresult)<`T`, `any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [] \| [`undefined`] |

#### Returns

[`IteratorResult`](../modules/verida_web3._internal_.md#iteratorresult)<`T`, `any`\>

#### Inherited from

[Iterator](verida_web3._internal_.Iterator.md).[next](verida_web3._internal_.Iterator.md#next)

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:45

___

### return

▸ `Optional` **return**(`value?`): [`IteratorResult`](../modules/verida_web3._internal_.md#iteratorresult)<`T`, `any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | `any` |

#### Returns

[`IteratorResult`](../modules/verida_web3._internal_.md#iteratorresult)<`T`, `any`\>

#### Inherited from

[Iterator](verida_web3._internal_.Iterator.md).[return](verida_web3._internal_.Iterator.md#return)

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:46

___

### throw

▸ `Optional` **throw**(`e?`): [`IteratorResult`](../modules/verida_web3._internal_.md#iteratorresult)<`T`, `any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | `any` |

#### Returns

[`IteratorResult`](../modules/verida_web3._internal_.md#iteratorresult)<`T`, `any`\>

#### Inherited from

[Iterator](verida_web3._internal_.Iterator.md).[throw](verida_web3._internal_.Iterator.md#throw)

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:47
