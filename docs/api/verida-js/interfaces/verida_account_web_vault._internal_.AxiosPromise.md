[root](../README.md) / [Modules](../modules.md) / [@verida/account-web-vault](../modules/verida_account_web_vault.md) / [<internal\>](../modules/verida_account_web_vault._internal_.md) / AxiosPromise

# Interface: AxiosPromise<T\>

[@verida/account-web-vault](../modules/verida_account_web_vault.md).[<internal\>](../modules/verida_account_web_vault._internal_.md).AxiosPromise

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

## Hierarchy

- `Promise`<[`AxiosResponse`](verida_account_web_vault._internal_.AxiosResponse.md)<`T`\>\>

  ↳ **`AxiosPromise`**

## Table of contents

### Properties

- [[toStringTag]](verida_account_web_vault._internal_.AxiosPromise.md#[tostringtag])

### Methods

- [catch](verida_account_web_vault._internal_.AxiosPromise.md#catch)
- [finally](verida_account_web_vault._internal_.AxiosPromise.md#finally)
- [then](verida_account_web_vault._internal_.AxiosPromise.md#then)

## Properties

### [toStringTag]

• `Readonly` **[toStringTag]**: `string`

#### Inherited from

Promise.\_\_@toStringTag@928

#### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:174

## Methods

### catch

▸ **catch**<`TResult`\>(`onrejected?`): `Promise`<[`AxiosResponse`](verida_account_web_vault._internal_.AxiosResponse.md)<`T`, `any`\> \| `TResult`\>

Attaches a callback for only the rejection of the Promise.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TResult` | `never` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `onrejected?` | ``null`` \| (`reason`: `any`) => `TResult` \| [`PromiseLike`](verida_account_web_vault._internal_.PromiseLike.md)<`TResult`\> | The callback to execute when the Promise is rejected. |

#### Returns

`Promise`<[`AxiosResponse`](verida_account_web_vault._internal_.AxiosResponse.md)<`T`, `any`\> \| `TResult`\>

A Promise for the completion of the callback.

#### Inherited from

Promise.catch

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1460

___

### finally

▸ **finally**(`onfinally?`): `Promise`<[`AxiosResponse`](verida_account_web_vault._internal_.AxiosResponse.md)<`T`, `any`\>\>

Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
resolved value cannot be modified from the callback.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `onfinally?` | ``null`` \| () => `void` | The callback to execute when the Promise is settled (fulfilled or rejected). |

#### Returns

`Promise`<[`AxiosResponse`](verida_account_web_vault._internal_.AxiosResponse.md)<`T`, `any`\>\>

A Promise for the completion of the callback.

#### Inherited from

Promise.finally

#### Defined in

node_modules/typescript/lib/lib.es2018.promise.d.ts:31

___

### then

▸ **then**<`TResult1`, `TResult2`\>(`onfulfilled?`, `onrejected?`): `Promise`<`TResult1` \| `TResult2`\>

Attaches callbacks for the resolution and/or rejection of the Promise.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TResult1` | [`AxiosResponse`](verida_account_web_vault._internal_.AxiosResponse.md)<`T`, `any`\> |
| `TResult2` | `never` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `onfulfilled?` | ``null`` \| (`value`: [`AxiosResponse`](verida_account_web_vault._internal_.AxiosResponse.md)<`T`, `any`\>) => `TResult1` \| [`PromiseLike`](verida_account_web_vault._internal_.PromiseLike.md)<`TResult1`\> | The callback to execute when the Promise is resolved. |
| `onrejected?` | ``null`` \| (`reason`: `any`) => `TResult2` \| [`PromiseLike`](verida_account_web_vault._internal_.PromiseLike.md)<`TResult2`\> | The callback to execute when the Promise is rejected. |

#### Returns

`Promise`<`TResult1` \| `TResult2`\>

A Promise for the completion of which ever callback is executed.

#### Inherited from

Promise.then

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1453
