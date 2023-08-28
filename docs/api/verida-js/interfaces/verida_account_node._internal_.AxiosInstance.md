[root](../README.md) / [Modules](../modules.md) / [@verida/account-node](../modules/verida_account_node.md) / [<internal\>](../modules/verida_account_node._internal_.md) / AxiosInstance

# Interface: AxiosInstance

[@verida/account-node](../modules/verida_account_node.md).[<internal\>](../modules/verida_account_node._internal_.md).AxiosInstance

## Hierarchy

- [`Axios`](../classes/verida_account_node._internal_.Axios.md)

  ↳ **`AxiosInstance`**

## Callable

### AxiosInstance

▸ **AxiosInstance**(`config`): [`AxiosPromise`](verida_account_node._internal_.AxiosPromise.md)<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`AxiosRequestConfig`](verida_account_node._internal_.AxiosRequestConfig.md)<`any`\> |

#### Returns

[`AxiosPromise`](verida_account_node._internal_.AxiosPromise.md)<`any`\>

#### Defined in

node_modules/axios/index.d.ts:236

### AxiosInstance

▸ **AxiosInstance**(`url`, `config?`): [`AxiosPromise`](verida_account_node._internal_.AxiosPromise.md)<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `config?` | [`AxiosRequestConfig`](verida_account_node._internal_.AxiosRequestConfig.md)<`any`\> |

#### Returns

[`AxiosPromise`](verida_account_node._internal_.AxiosPromise.md)<`any`\>

#### Defined in

node_modules/axios/index.d.ts:237

## Table of contents

### Properties

- [defaults](verida_account_node._internal_.AxiosInstance.md#defaults)
- [interceptors](verida_account_node._internal_.AxiosInstance.md#interceptors)

### Methods

- [delete](verida_account_node._internal_.AxiosInstance.md#delete)
- [get](verida_account_node._internal_.AxiosInstance.md#get)
- [getUri](verida_account_node._internal_.AxiosInstance.md#geturi)
- [head](verida_account_node._internal_.AxiosInstance.md#head)
- [options](verida_account_node._internal_.AxiosInstance.md#options)
- [patch](verida_account_node._internal_.AxiosInstance.md#patch)
- [patchForm](verida_account_node._internal_.AxiosInstance.md#patchform)
- [post](verida_account_node._internal_.AxiosInstance.md#post)
- [postForm](verida_account_node._internal_.AxiosInstance.md#postform)
- [put](verida_account_node._internal_.AxiosInstance.md#put)
- [putForm](verida_account_node._internal_.AxiosInstance.md#putform)
- [request](verida_account_node._internal_.AxiosInstance.md#request)

## Properties

### defaults

• **defaults**: [`AxiosDefaults`](verida_account_node._internal_.AxiosDefaults.md)<`any`\>

#### Inherited from

[Axios](../classes/verida_account_node._internal_.Axios.md).[defaults](../classes/verida_account_node._internal_.Axios.md#defaults)

#### Defined in

node_modules/axios/index.d.ts:216

___

### interceptors

• **interceptors**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `request` | [`AxiosInterceptorManager`](verida_account_node._internal_.AxiosInterceptorManager.md)<[`AxiosRequestConfig`](verida_account_node._internal_.AxiosRequestConfig.md)<`any`\>\> |
| `response` | [`AxiosInterceptorManager`](verida_account_node._internal_.AxiosInterceptorManager.md)<[`AxiosResponse`](verida_account_node._internal_.AxiosResponse.md)<`any`, `any`\>\> |

#### Inherited from

[Axios](../classes/verida_account_node._internal_.Axios.md).[interceptors](../classes/verida_account_node._internal_.Axios.md#interceptors)

#### Defined in

node_modules/axios/index.d.ts:217

## Methods

### delete

▸ **delete**<`T`, `R`, `D`\>(`url`, `config?`): `Promise`<`R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `R` | [`AxiosResponse`](verida_account_node._internal_.AxiosResponse.md)<`T`, `any`\> |
| `D` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `config?` | [`AxiosRequestConfig`](verida_account_node._internal_.AxiosRequestConfig.md)<`D`\> |

#### Returns

`Promise`<`R`\>

#### Inherited from

[Axios](../classes/verida_account_node._internal_.Axios.md).[delete](../classes/verida_account_node._internal_.Axios.md#delete)

#### Defined in

node_modules/axios/index.d.ts:224

___

### get

▸ **get**<`T`, `R`, `D`\>(`url`, `config?`): `Promise`<`R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `R` | [`AxiosResponse`](verida_account_node._internal_.AxiosResponse.md)<`T`, `any`\> |
| `D` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `config?` | [`AxiosRequestConfig`](verida_account_node._internal_.AxiosRequestConfig.md)<`D`\> |

#### Returns

`Promise`<`R`\>

#### Inherited from

[Axios](../classes/verida_account_node._internal_.Axios.md).[get](../classes/verida_account_node._internal_.Axios.md#get)

#### Defined in

node_modules/axios/index.d.ts:223

___

### getUri

▸ **getUri**(`config?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `config?` | [`AxiosRequestConfig`](verida_account_node._internal_.AxiosRequestConfig.md)<`any`\> |

#### Returns

`string`

#### Inherited from

[Axios](../classes/verida_account_node._internal_.Axios.md).[getUri](../classes/verida_account_node._internal_.Axios.md#geturi)

#### Defined in

node_modules/axios/index.d.ts:221

___

### head

▸ **head**<`T`, `R`, `D`\>(`url`, `config?`): `Promise`<`R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `R` | [`AxiosResponse`](verida_account_node._internal_.AxiosResponse.md)<`T`, `any`\> |
| `D` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `config?` | [`AxiosRequestConfig`](verida_account_node._internal_.AxiosRequestConfig.md)<`D`\> |

#### Returns

`Promise`<`R`\>

#### Inherited from

[Axios](../classes/verida_account_node._internal_.Axios.md).[head](../classes/verida_account_node._internal_.Axios.md#head)

#### Defined in

node_modules/axios/index.d.ts:225

___

### options

▸ **options**<`T`, `R`, `D`\>(`url`, `config?`): `Promise`<`R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `R` | [`AxiosResponse`](verida_account_node._internal_.AxiosResponse.md)<`T`, `any`\> |
| `D` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `config?` | [`AxiosRequestConfig`](verida_account_node._internal_.AxiosRequestConfig.md)<`D`\> |

#### Returns

`Promise`<`R`\>

#### Inherited from

[Axios](../classes/verida_account_node._internal_.Axios.md).[options](../classes/verida_account_node._internal_.Axios.md#options)

#### Defined in

node_modules/axios/index.d.ts:226

___

### patch

▸ **patch**<`T`, `R`, `D`\>(`url`, `data?`, `config?`): `Promise`<`R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `R` | [`AxiosResponse`](verida_account_node._internal_.AxiosResponse.md)<`T`, `any`\> |
| `D` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `data?` | `D` |
| `config?` | [`AxiosRequestConfig`](verida_account_node._internal_.AxiosRequestConfig.md)<`D`\> |

#### Returns

`Promise`<`R`\>

#### Inherited from

[Axios](../classes/verida_account_node._internal_.Axios.md).[patch](../classes/verida_account_node._internal_.Axios.md#patch)

#### Defined in

node_modules/axios/index.d.ts:229

___

### patchForm

▸ **patchForm**<`T`, `R`, `D`\>(`url`, `data?`, `config?`): `Promise`<`R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `R` | [`AxiosResponse`](verida_account_node._internal_.AxiosResponse.md)<`T`, `any`\> |
| `D` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `data?` | `D` |
| `config?` | [`AxiosRequestConfig`](verida_account_node._internal_.AxiosRequestConfig.md)<`D`\> |

#### Returns

`Promise`<`R`\>

#### Inherited from

[Axios](../classes/verida_account_node._internal_.Axios.md).[patchForm](../classes/verida_account_node._internal_.Axios.md#patchform)

#### Defined in

node_modules/axios/index.d.ts:232

___

### post

▸ **post**<`T`, `R`, `D`\>(`url`, `data?`, `config?`): `Promise`<`R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `R` | [`AxiosResponse`](verida_account_node._internal_.AxiosResponse.md)<`T`, `any`\> |
| `D` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `data?` | `D` |
| `config?` | [`AxiosRequestConfig`](verida_account_node._internal_.AxiosRequestConfig.md)<`D`\> |

#### Returns

`Promise`<`R`\>

#### Inherited from

[Axios](../classes/verida_account_node._internal_.Axios.md).[post](../classes/verida_account_node._internal_.Axios.md#post)

#### Defined in

node_modules/axios/index.d.ts:227

___

### postForm

▸ **postForm**<`T`, `R`, `D`\>(`url`, `data?`, `config?`): `Promise`<`R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `R` | [`AxiosResponse`](verida_account_node._internal_.AxiosResponse.md)<`T`, `any`\> |
| `D` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `data?` | `D` |
| `config?` | [`AxiosRequestConfig`](verida_account_node._internal_.AxiosRequestConfig.md)<`D`\> |

#### Returns

`Promise`<`R`\>

#### Inherited from

[Axios](../classes/verida_account_node._internal_.Axios.md).[postForm](../classes/verida_account_node._internal_.Axios.md#postform)

#### Defined in

node_modules/axios/index.d.ts:230

___

### put

▸ **put**<`T`, `R`, `D`\>(`url`, `data?`, `config?`): `Promise`<`R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `R` | [`AxiosResponse`](verida_account_node._internal_.AxiosResponse.md)<`T`, `any`\> |
| `D` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `data?` | `D` |
| `config?` | [`AxiosRequestConfig`](verida_account_node._internal_.AxiosRequestConfig.md)<`D`\> |

#### Returns

`Promise`<`R`\>

#### Inherited from

[Axios](../classes/verida_account_node._internal_.Axios.md).[put](../classes/verida_account_node._internal_.Axios.md#put)

#### Defined in

node_modules/axios/index.d.ts:228

___

### putForm

▸ **putForm**<`T`, `R`, `D`\>(`url`, `data?`, `config?`): `Promise`<`R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `R` | [`AxiosResponse`](verida_account_node._internal_.AxiosResponse.md)<`T`, `any`\> |
| `D` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `data?` | `D` |
| `config?` | [`AxiosRequestConfig`](verida_account_node._internal_.AxiosRequestConfig.md)<`D`\> |

#### Returns

`Promise`<`R`\>

#### Inherited from

[Axios](../classes/verida_account_node._internal_.Axios.md).[putForm](../classes/verida_account_node._internal_.Axios.md#putform)

#### Defined in

node_modules/axios/index.d.ts:231

___

### request

▸ **request**<`T`, `R`, `D`\>(`config`): `Promise`<`R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `R` | [`AxiosResponse`](verida_account_node._internal_.AxiosResponse.md)<`T`, `any`\> |
| `D` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`AxiosRequestConfig`](verida_account_node._internal_.AxiosRequestConfig.md)<`D`\> |

#### Returns

`Promise`<`R`\>

#### Inherited from

[Axios](../classes/verida_account_node._internal_.Axios.md).[request](../classes/verida_account_node._internal_.Axios.md#request)

#### Defined in

node_modules/axios/index.d.ts:222
