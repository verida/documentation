[root](../README.md) / [Modules](../modules.md) / [@verida/verifiable-credentials](../modules/verida_verifiable_credentials.md) / [<internal\>](../modules/verida_verifiable_credentials._internal_.md) / AsyncIterator

# Interface: AsyncIterator<T, TReturn, TNext\>

[@verida/verifiable-credentials](../modules/verida_verifiable_credentials.md).[<internal\>](../modules/verida_verifiable_credentials._internal_.md).AsyncIterator

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TReturn` | `any` |
| `TNext` | `undefined` |

## Hierarchy

- **`AsyncIterator`**

  ↳ [`AsyncIterableIterator`](verida_verifiable_credentials._internal_.AsyncIterableIterator.md)

## Table of contents

### Methods

- [next](verida_verifiable_credentials._internal_.AsyncIterator.md#next)
- [return](verida_verifiable_credentials._internal_.AsyncIterator.md#return)
- [throw](verida_verifiable_credentials._internal_.AsyncIterator.md#throw)

## Methods

### next

▸ **next**(...`args`): `Promise`<[`IteratorResult`](../modules/verida_verifiable_credentials._internal_.md#iteratorresult)<`T`, `TReturn`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [] \| [`TNext`] |

#### Returns

`Promise`<[`IteratorResult`](../modules/verida_verifiable_credentials._internal_.md#iteratorresult)<`T`, `TReturn`\>\>

#### Defined in

node_modules/typescript/lib/lib.es2018.asynciterable.d.ts:34

___

### return

▸ `Optional` **return**(`value?`): `Promise`<[`IteratorResult`](../modules/verida_verifiable_credentials._internal_.md#iteratorresult)<`T`, `TReturn`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | `TReturn` \| [`PromiseLike`](verida_verifiable_credentials._internal_.PromiseLike.md)<`TReturn`\> |

#### Returns

`Promise`<[`IteratorResult`](../modules/verida_verifiable_credentials._internal_.md#iteratorresult)<`T`, `TReturn`\>\>

#### Defined in

node_modules/typescript/lib/lib.es2018.asynciterable.d.ts:35

___

### throw

▸ `Optional` **throw**(`e?`): `Promise`<[`IteratorResult`](../modules/verida_verifiable_credentials._internal_.md#iteratorresult)<`T`, `TReturn`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | `any` |

#### Returns

`Promise`<[`IteratorResult`](../modules/verida_verifiable_credentials._internal_.md#iteratorresult)<`T`, `TReturn`\>\>

#### Defined in

node_modules/typescript/lib/lib.es2018.asynciterable.d.ts:36
