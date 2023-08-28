[root](../README.md) / [Modules](../modules.md) / [@verida/web-helpers](../modules/verida_web_helpers.md) / [<internal\>](../modules/verida_web_helpers._internal_.md) / PromiseLike

# Interface: PromiseLike<T\>

[@verida/web-helpers](../modules/verida_web_helpers.md).[<internal\>](../modules/verida_web_helpers._internal_.md).PromiseLike

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Methods

- [then](verida_web_helpers._internal_.PromiseLike.md#then)

## Methods

### then

▸ **then**<`TResult1`, `TResult2`\>(`onfulfilled?`, `onrejected?`): [`PromiseLike`](verida_web_helpers._internal_.PromiseLike.md)<`TResult1` \| `TResult2`\>

Attaches callbacks for the resolution and/or rejection of the Promise.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TResult1` | `T` |
| `TResult2` | `never` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `onfulfilled?` | ``null`` \| (`value`: `T`) => `TResult1` \| [`PromiseLike`](verida_web_helpers._internal_.PromiseLike.md)<`TResult1`\> | The callback to execute when the Promise is resolved. |
| `onrejected?` | ``null`` \| (`reason`: `any`) => `TResult2` \| [`PromiseLike`](verida_web_helpers._internal_.PromiseLike.md)<`TResult2`\> | The callback to execute when the Promise is rejected. |

#### Returns

[`PromiseLike`](verida_web_helpers._internal_.PromiseLike.md)<`TResult1` \| `TResult2`\>

A Promise for the completion of which ever callback is executed.

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1440
