[root](../README.md) / [Modules](../modules.md) / [@verida/verifiable-credentials](../modules/verida_verifiable_credentials.md) / [<internal\>](../modules/verida_verifiable_credentials._internal_.md) / AsyncIterableIterator

# Interface: AsyncIterableIterator<T\>

[@verida/verifiable-credentials](../modules/verida_verifiable_credentials.md).[<internal\>](../modules/verida_verifiable_credentials._internal_.md).AsyncIterableIterator

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`AsyncIterator`](verida_verifiable_credentials._internal_.AsyncIterator.md)<`T`\>

  ↳ **`AsyncIterableIterator`**

## Table of contents

### Methods

- [[asyncIterator]](verida_verifiable_credentials._internal_.AsyncIterableIterator.md#[asynciterator])
- [next](verida_verifiable_credentials._internal_.AsyncIterableIterator.md#next)
- [return](verida_verifiable_credentials._internal_.AsyncIterableIterator.md#return)
- [throw](verida_verifiable_credentials._internal_.AsyncIterableIterator.md#throw)

## Methods

### [asyncIterator]

▸ **[asyncIterator]**(): [`AsyncIterableIterator`](verida_verifiable_credentials._internal_.AsyncIterableIterator.md)<`T`\>

#### Returns

[`AsyncIterableIterator`](verida_verifiable_credentials._internal_.AsyncIterableIterator.md)<`T`\>

#### Defined in

node_modules/typescript/lib/lib.es2018.asynciterable.d.ts:44

___

### next

▸ **next**(...`args`): `Promise`<[`IteratorResult`](../modules/verida_verifiable_credentials._internal_.md#iteratorresult)<`T`, `any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [] \| [`undefined`] |

#### Returns

`Promise`<[`IteratorResult`](../modules/verida_verifiable_credentials._internal_.md#iteratorresult)<`T`, `any`\>\>

#### Inherited from

[AsyncIterator](verida_verifiable_credentials._internal_.AsyncIterator.md).[next](verida_verifiable_credentials._internal_.AsyncIterator.md#next)

#### Defined in

node_modules/typescript/lib/lib.es2018.asynciterable.d.ts:34

___

### return

▸ `Optional` **return**(`value?`): `Promise`<[`IteratorResult`](../modules/verida_verifiable_credentials._internal_.md#iteratorresult)<`T`, `any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | `any` |

#### Returns

`Promise`<[`IteratorResult`](../modules/verida_verifiable_credentials._internal_.md#iteratorresult)<`T`, `any`\>\>

#### Inherited from

[AsyncIterator](verida_verifiable_credentials._internal_.AsyncIterator.md).[return](verida_verifiable_credentials._internal_.AsyncIterator.md#return)

#### Defined in

node_modules/typescript/lib/lib.es2018.asynciterable.d.ts:35

___

### throw

▸ `Optional` **throw**(`e?`): `Promise`<[`IteratorResult`](../modules/verida_verifiable_credentials._internal_.md#iteratorresult)<`T`, `any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | `any` |

#### Returns

`Promise`<[`IteratorResult`](../modules/verida_verifiable_credentials._internal_.md#iteratorresult)<`T`, `any`\>\>

#### Inherited from

[AsyncIterator](verida_verifiable_credentials._internal_.AsyncIterator.md).[throw](verida_verifiable_credentials._internal_.AsyncIterator.md#throw)

#### Defined in

node_modules/typescript/lib/lib.es2018.asynciterable.d.ts:36
