[root](../README.md) / [Modules](../modules.md) / [@verida/account-node](../modules/verida_account_node.md) / [<internal\>](../modules/verida_account_node._internal_.md) / AxiosDefaults

# Interface: AxiosDefaults<D\>

[@verida/account-node](../modules/verida_account_node.md).[<internal\>](../modules/verida_account_node._internal_.md).AxiosDefaults

## Type parameters

| Name | Type |
| :------ | :------ |
| `D` | `any` |

## Hierarchy

- [`Omit`](../modules/verida_account_node._internal_.md#omit)<[`AxiosRequestConfig`](verida_account_node._internal_.AxiosRequestConfig.md)<`D`\>, ``"headers"``\>

  ↳ **`AxiosDefaults`**

## Table of contents

### Properties

- [adapter](verida_account_node._internal_.AxiosDefaults.md#adapter)
- [auth](verida_account_node._internal_.AxiosDefaults.md#auth)
- [baseURL](verida_account_node._internal_.AxiosDefaults.md#baseurl)
- [cancelToken](verida_account_node._internal_.AxiosDefaults.md#canceltoken)
- [data](verida_account_node._internal_.AxiosDefaults.md#data)
- [decompress](verida_account_node._internal_.AxiosDefaults.md#decompress)
- [env](verida_account_node._internal_.AxiosDefaults.md#env)
- [headers](verida_account_node._internal_.AxiosDefaults.md#headers)
- [httpAgent](verida_account_node._internal_.AxiosDefaults.md#httpagent)
- [httpsAgent](verida_account_node._internal_.AxiosDefaults.md#httpsagent)
- [insecureHTTPParser](verida_account_node._internal_.AxiosDefaults.md#insecurehttpparser)
- [maxBodyLength](verida_account_node._internal_.AxiosDefaults.md#maxbodylength)
- [maxContentLength](verida_account_node._internal_.AxiosDefaults.md#maxcontentlength)
- [maxRedirects](verida_account_node._internal_.AxiosDefaults.md#maxredirects)
- [method](verida_account_node._internal_.AxiosDefaults.md#method)
- [params](verida_account_node._internal_.AxiosDefaults.md#params)
- [proxy](verida_account_node._internal_.AxiosDefaults.md#proxy)
- [responseEncoding](verida_account_node._internal_.AxiosDefaults.md#responseencoding)
- [responseType](verida_account_node._internal_.AxiosDefaults.md#responsetype)
- [signal](verida_account_node._internal_.AxiosDefaults.md#signal)
- [socketPath](verida_account_node._internal_.AxiosDefaults.md#socketpath)
- [timeout](verida_account_node._internal_.AxiosDefaults.md#timeout)
- [timeoutErrorMessage](verida_account_node._internal_.AxiosDefaults.md#timeouterrormessage)
- [transformRequest](verida_account_node._internal_.AxiosDefaults.md#transformrequest)
- [transformResponse](verida_account_node._internal_.AxiosDefaults.md#transformresponse)
- [transitional](verida_account_node._internal_.AxiosDefaults.md#transitional)
- [url](verida_account_node._internal_.AxiosDefaults.md#url)
- [validateStatus](verida_account_node._internal_.AxiosDefaults.md#validatestatus)
- [withCredentials](verida_account_node._internal_.AxiosDefaults.md#withcredentials)
- [xsrfCookieName](verida_account_node._internal_.AxiosDefaults.md#xsrfcookiename)
- [xsrfHeaderName](verida_account_node._internal_.AxiosDefaults.md#xsrfheadername)

### Methods

- [beforeRedirect](verida_account_node._internal_.AxiosDefaults.md#beforeredirect)
- [onDownloadProgress](verida_account_node._internal_.AxiosDefaults.md#ondownloadprogress)
- [onUploadProgress](verida_account_node._internal_.AxiosDefaults.md#onuploadprogress)
- [paramsSerializer](verida_account_node._internal_.AxiosDefaults.md#paramsserializer)

## Properties

### adapter

• `Optional` **adapter**: [`AxiosAdapter`](verida_account_node._internal_.AxiosAdapter.md)

#### Inherited from

Omit.adapter

#### Defined in

node_modules/axios/index.d.ts:88

___

### auth

• `Optional` **auth**: [`AxiosBasicCredentials`](verida_account_node._internal_.AxiosBasicCredentials.md)

#### Inherited from

Omit.auth

#### Defined in

node_modules/axios/index.d.ts:89

___

### baseURL

• `Optional` **baseURL**: `string`

#### Inherited from

Omit.baseURL

#### Defined in

node_modules/axios/index.d.ts:78

___

### cancelToken

• `Optional` **cancelToken**: [`CancelToken`](verida_account_node._internal_.CancelToken.md)

#### Inherited from

Omit.cancelToken

#### Defined in

node_modules/axios/index.d.ts:105

___

### data

• `Optional` **data**: `D`

#### Inherited from

Omit.data

#### Defined in

node_modules/axios/index.d.ts:84

___

### decompress

• `Optional` **decompress**: `boolean`

#### Inherited from

Omit.decompress

#### Defined in

node_modules/axios/index.d.ts:106

___

### env

• `Optional` **env**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `FormData?` | (...`args`: `any`[]) => `object` |

#### Inherited from

Omit.env

#### Defined in

node_modules/axios/index.d.ts:110

___

### headers

• **headers**: [`HeadersDefaults`](verida_account_node._internal_.HeadersDefaults.md)

#### Defined in

node_modules/axios/index.d.ts:130

___

### httpAgent

• `Optional` **httpAgent**: `any`

#### Inherited from

Omit.httpAgent

#### Defined in

node_modules/axios/index.d.ts:102

___

### httpsAgent

• `Optional` **httpsAgent**: `any`

#### Inherited from

Omit.httpsAgent

#### Defined in

node_modules/axios/index.d.ts:103

___

### insecureHTTPParser

• `Optional` **insecureHTTPParser**: `boolean`

#### Inherited from

Omit.insecureHTTPParser

#### Defined in

node_modules/axios/index.d.ts:109

___

### maxBodyLength

• `Optional` **maxBodyLength**: `number`

#### Inherited from

Omit.maxBodyLength

#### Defined in

node_modules/axios/index.d.ts:98

___

### maxContentLength

• `Optional` **maxContentLength**: `number`

#### Inherited from

Omit.maxContentLength

#### Defined in

node_modules/axios/index.d.ts:96

___

### maxRedirects

• `Optional` **maxRedirects**: `number`

#### Inherited from

Omit.maxRedirects

#### Defined in

node_modules/axios/index.d.ts:99

___

### method

• `Optional` **method**: `string`

#### Inherited from

Omit.method

#### Defined in

node_modules/axios/index.d.ts:77

___

### params

• `Optional` **params**: `any`

#### Inherited from

Omit.params

#### Defined in

node_modules/axios/index.d.ts:82

___

### proxy

• `Optional` **proxy**: ``false`` \| [`AxiosProxyConfig`](verida_account_node._internal_.AxiosProxyConfig.md)

#### Inherited from

Omit.proxy

#### Defined in

node_modules/axios/index.d.ts:104

___

### responseEncoding

• `Optional` **responseEncoding**: `string`

#### Inherited from

Omit.responseEncoding

#### Defined in

node_modules/axios/index.d.ts:91

___

### responseType

• `Optional` **responseType**: [`ResponseType`](../modules/verida_account_node._internal_.md#responsetype)

#### Inherited from

Omit.responseType

#### Defined in

node_modules/axios/index.d.ts:90

___

### signal

• `Optional` **signal**: [`AbortSignal`](../modules/verida_account_node._internal_.md#abortsignal)

#### Inherited from

Omit.signal

#### Defined in

node_modules/axios/index.d.ts:108

___

### socketPath

• `Optional` **socketPath**: ``null`` \| `string`

#### Inherited from

Omit.socketPath

#### Defined in

node_modules/axios/index.d.ts:101

___

### timeout

• `Optional` **timeout**: `number`

#### Inherited from

Omit.timeout

#### Defined in

node_modules/axios/index.d.ts:85

___

### timeoutErrorMessage

• `Optional` **timeoutErrorMessage**: `string`

#### Inherited from

Omit.timeoutErrorMessage

#### Defined in

node_modules/axios/index.d.ts:86

___

### transformRequest

• `Optional` **transformRequest**: [`AxiosRequestTransformer`](verida_account_node._internal_.AxiosRequestTransformer.md) \| [`AxiosRequestTransformer`](verida_account_node._internal_.AxiosRequestTransformer.md)[]

#### Inherited from

Omit.transformRequest

#### Defined in

node_modules/axios/index.d.ts:79

___

### transformResponse

• `Optional` **transformResponse**: [`AxiosResponseTransformer`](verida_account_node._internal_.AxiosResponseTransformer.md) \| [`AxiosResponseTransformer`](verida_account_node._internal_.AxiosResponseTransformer.md)[]

#### Inherited from

Omit.transformResponse

#### Defined in

node_modules/axios/index.d.ts:80

___

### transitional

• `Optional` **transitional**: [`TransitionalOptions`](verida_account_node._internal_.TransitionalOptions.md)

#### Inherited from

Omit.transitional

#### Defined in

node_modules/axios/index.d.ts:107

___

### url

• `Optional` **url**: `string`

#### Inherited from

Omit.url

#### Defined in

node_modules/axios/index.d.ts:76

___

### validateStatus

• `Optional` **validateStatus**: ``null`` \| (`status`: `number`) => `boolean`

#### Inherited from

Omit.validateStatus

#### Defined in

node_modules/axios/index.d.ts:97

___

### withCredentials

• `Optional` **withCredentials**: `boolean`

#### Inherited from

Omit.withCredentials

#### Defined in

node_modules/axios/index.d.ts:87

___

### xsrfCookieName

• `Optional` **xsrfCookieName**: `string`

#### Inherited from

Omit.xsrfCookieName

#### Defined in

node_modules/axios/index.d.ts:92

___

### xsrfHeaderName

• `Optional` **xsrfHeaderName**: `string`

#### Inherited from

Omit.xsrfHeaderName

#### Defined in

node_modules/axios/index.d.ts:93

## Methods

### beforeRedirect

▸ `Optional` **beforeRedirect**(`options`, `responseDetails`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`Record`](../modules/verida_account_node._internal_.md#record)<`string`, `any`\> |
| `responseDetails` | `Object` |
| `responseDetails.headers` | [`Record`](../modules/verida_account_node._internal_.md#record)<`string`, `string`\> |

#### Returns

`void`

#### Inherited from

Omit.beforeRedirect

#### Defined in

node_modules/axios/index.d.ts:100

___

### onDownloadProgress

▸ `Optional` **onDownloadProgress**(`progressEvent`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `progressEvent` | `any` |

#### Returns

`void`

#### Inherited from

Omit.onDownloadProgress

#### Defined in

node_modules/axios/index.d.ts:95

___

### onUploadProgress

▸ `Optional` **onUploadProgress**(`progressEvent`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `progressEvent` | `any` |

#### Returns

`void`

#### Inherited from

Omit.onUploadProgress

#### Defined in

node_modules/axios/index.d.ts:94

___

### paramsSerializer

▸ `Optional` **paramsSerializer**(`params`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `any` |

#### Returns

`string`

#### Inherited from

Omit.paramsSerializer

#### Defined in

node_modules/axios/index.d.ts:83
