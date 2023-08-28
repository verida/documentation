[root](../README.md) / [Modules](../modules.md) / [@verida/account-node](../modules/verida_account_node.md) / [<internal\>](../modules/verida_account_node._internal_.md) / Axios

# Class: Axios

[@verida/account-node](../modules/verida_account_node.md).[<internal\>](../modules/verida_account_node._internal_.md).Axios

## Hierarchy

- **`Axios`**

  ↳ [`AxiosInstance`](../interfaces/verida_account_node._internal_.AxiosInstance.md)

## Table of contents

### Constructors

- [constructor](verida_account_node._internal_.Axios.md#constructor)

### Properties

- [defaults](verida_account_node._internal_.Axios.md#defaults)
- [interceptors](verida_account_node._internal_.Axios.md#interceptors)

### Methods

- [delete](verida_account_node._internal_.Axios.md#delete)
- [get](verida_account_node._internal_.Axios.md#get)
- [getUri](verida_account_node._internal_.Axios.md#geturi)
- [head](verida_account_node._internal_.Axios.md#head)
- [options](verida_account_node._internal_.Axios.md#options)
- [patch](verida_account_node._internal_.Axios.md#patch)
- [patchForm](verida_account_node._internal_.Axios.md#patchform)
- [post](verida_account_node._internal_.Axios.md#post)
- [postForm](verida_account_node._internal_.Axios.md#postform)
- [put](verida_account_node._internal_.Axios.md#put)
- [putForm](verida_account_node._internal_.Axios.md#putform)
- [request](verida_account_node._internal_.Axios.md#request)

## Constructors

### constructor

• **new Axios**(`config?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config?` | [`AxiosRequestConfig`](../interfaces/verida_account_node._internal_.AxiosRequestConfig.md)<`any`\> |

#### Defined in

node_modules/axios/index.d.ts:215

## Properties

### defaults

• **defaults**: [`AxiosDefaults`](../interfaces/verida_account_node._internal_.AxiosDefaults.md)<`any`\>

#### Defined in

node_modules/axios/index.d.ts:216

___

### interceptors

• **interceptors**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `request` | [`AxiosInterceptorManager`](../interfaces/verida_account_node._internal_.AxiosInterceptorManager.md)<[`AxiosRequestConfig`](../interfaces/verida_account_node._internal_.AxiosRequestConfig.md)<`any`\>\> |
| `response` | [`AxiosInterceptorManager`](../interfaces/verida_account_node._internal_.AxiosInterceptorManager.md)<[`AxiosResponse`](../interfaces/verida_account_node._internal_.AxiosResponse.md)<`any`, `any`\>\> |

#### Defined in

node_modules/axios/index.d.ts:217

## Methods

### delete

▸ **delete**<`T`, `R`, `D`\>(`url`, `config?`): `Promise`<`R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `R` | [`AxiosResponse`](../interfaces/verida_account_node._internal_.AxiosResponse.md)<`T`, `any`\> |
| `D` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `config?` | [`AxiosRequestConfig`](../interfaces/verida_account_node._internal_.AxiosRequestConfig.md)<`D`\> |

#### Returns

`Promise`<`R`\>

#### Defined in

node_modules/axios/index.d.ts:224

___

### get

▸ **get**<`T`, `R`, `D`\>(`url`, `config?`): `Promise`<`R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `R` | [`AxiosResponse`](../interfaces/verida_account_node._internal_.AxiosResponse.md)<`T`, `any`\> |
| `D` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `config?` | [`AxiosRequestConfig`](../interfaces/verida_account_node._internal_.AxiosRequestConfig.md)<`D`\> |

#### Returns

`Promise`<`R`\>

#### Defined in

node_modules/axios/index.d.ts:223

___

### getUri

▸ **getUri**(`config?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `config?` | [`AxiosRequestConfig`](../interfaces/verida_account_node._internal_.AxiosRequestConfig.md)<`any`\> |

#### Returns

`string`

#### Defined in

node_modules/axios/index.d.ts:221

___

### head

▸ **head**<`T`, `R`, `D`\>(`url`, `config?`): `Promise`<`R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `R` | [`AxiosResponse`](../interfaces/verida_account_node._internal_.AxiosResponse.md)<`T`, `any`\> |
| `D` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `config?` | [`AxiosRequestConfig`](../interfaces/verida_account_node._internal_.AxiosRequestConfig.md)<`D`\> |

#### Returns

`Promise`<`R`\>

#### Defined in

node_modules/axios/index.d.ts:225

___

### options

▸ **options**<`T`, `R`, `D`\>(`url`, `config?`): `Promise`<`R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `R` | [`AxiosResponse`](../interfaces/verida_account_node._internal_.AxiosResponse.md)<`T`, `any`\> |
| `D` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `config?` | [`AxiosRequestConfig`](../interfaces/verida_account_node._internal_.AxiosRequestConfig.md)<`D`\> |

#### Returns

`Promise`<`R`\>

#### Defined in

node_modules/axios/index.d.ts:226

___

### patch

▸ **patch**<`T`, `R`, `D`\>(`url`, `data?`, `config?`): `Promise`<`R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `R` | [`AxiosResponse`](../interfaces/verida_account_node._internal_.AxiosResponse.md)<`T`, `any`\> |
| `D` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `data?` | `D` |
| `config?` | [`AxiosRequestConfig`](../interfaces/verida_account_node._internal_.AxiosRequestConfig.md)<`D`\> |

#### Returns

`Promise`<`R`\>

#### Defined in

node_modules/axios/index.d.ts:229

___

### patchForm

▸ **patchForm**<`T`, `R`, `D`\>(`url`, `data?`, `config?`): `Promise`<`R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `R` | [`AxiosResponse`](../interfaces/verida_account_node._internal_.AxiosResponse.md)<`T`, `any`\> |
| `D` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `data?` | `D` |
| `config?` | [`AxiosRequestConfig`](../interfaces/verida_account_node._internal_.AxiosRequestConfig.md)<`D`\> |

#### Returns

`Promise`<`R`\>

#### Defined in

node_modules/axios/index.d.ts:232

___

### post

▸ **post**<`T`, `R`, `D`\>(`url`, `data?`, `config?`): `Promise`<`R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `R` | [`AxiosResponse`](../interfaces/verida_account_node._internal_.AxiosResponse.md)<`T`, `any`\> |
| `D` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `data?` | `D` |
| `config?` | [`AxiosRequestConfig`](../interfaces/verida_account_node._internal_.AxiosRequestConfig.md)<`D`\> |

#### Returns

`Promise`<`R`\>

#### Defined in

node_modules/axios/index.d.ts:227

___

### postForm

▸ **postForm**<`T`, `R`, `D`\>(`url`, `data?`, `config?`): `Promise`<`R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `R` | [`AxiosResponse`](../interfaces/verida_account_node._internal_.AxiosResponse.md)<`T`, `any`\> |
| `D` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `data?` | `D` |
| `config?` | [`AxiosRequestConfig`](../interfaces/verida_account_node._internal_.AxiosRequestConfig.md)<`D`\> |

#### Returns

`Promise`<`R`\>

#### Defined in

node_modules/axios/index.d.ts:230

___

### put

▸ **put**<`T`, `R`, `D`\>(`url`, `data?`, `config?`): `Promise`<`R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `R` | [`AxiosResponse`](../interfaces/verida_account_node._internal_.AxiosResponse.md)<`T`, `any`\> |
| `D` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `data?` | `D` |
| `config?` | [`AxiosRequestConfig`](../interfaces/verida_account_node._internal_.AxiosRequestConfig.md)<`D`\> |

#### Returns

`Promise`<`R`\>

#### Defined in

node_modules/axios/index.d.ts:228

___

### putForm

▸ **putForm**<`T`, `R`, `D`\>(`url`, `data?`, `config?`): `Promise`<`R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `R` | [`AxiosResponse`](../interfaces/verida_account_node._internal_.AxiosResponse.md)<`T`, `any`\> |
| `D` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `data?` | `D` |
| `config?` | [`AxiosRequestConfig`](../interfaces/verida_account_node._internal_.AxiosRequestConfig.md)<`D`\> |

#### Returns

`Promise`<`R`\>

#### Defined in

node_modules/axios/index.d.ts:231

___

### request

▸ **request**<`T`, `R`, `D`\>(`config`): `Promise`<`R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `R` | [`AxiosResponse`](../interfaces/verida_account_node._internal_.AxiosResponse.md)<`T`, `any`\> |
| `D` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`AxiosRequestConfig`](../interfaces/verida_account_node._internal_.AxiosRequestConfig.md)<`D`\> |

#### Returns

`Promise`<`R`\>

#### Defined in

node_modules/axios/index.d.ts:222
