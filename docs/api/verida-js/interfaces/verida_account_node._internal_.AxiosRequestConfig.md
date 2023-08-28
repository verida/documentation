[root](../README.md) / [Modules](../modules.md) / [@verida/account-node](../modules/verida_account_node.md) / [<internal\>](../modules/verida_account_node._internal_.md) / AxiosRequestConfig

# Interface: AxiosRequestConfig<D\>

[@verida/account-node](../modules/verida_account_node.md).[<internal\>](../modules/verida_account_node._internal_.md).AxiosRequestConfig

## Type parameters

| Name | Type |
| :------ | :------ |
| `D` | `any` |

## Table of contents

### Properties

- [adapter](verida_account_node._internal_.AxiosRequestConfig.md#adapter)
- [auth](verida_account_node._internal_.AxiosRequestConfig.md#auth)
- [baseURL](verida_account_node._internal_.AxiosRequestConfig.md#baseurl)
- [cancelToken](verida_account_node._internal_.AxiosRequestConfig.md#canceltoken)
- [data](verida_account_node._internal_.AxiosRequestConfig.md#data)
- [decompress](verida_account_node._internal_.AxiosRequestConfig.md#decompress)
- [env](verida_account_node._internal_.AxiosRequestConfig.md#env)
- [headers](verida_account_node._internal_.AxiosRequestConfig.md#headers)
- [httpAgent](verida_account_node._internal_.AxiosRequestConfig.md#httpagent)
- [httpsAgent](verida_account_node._internal_.AxiosRequestConfig.md#httpsagent)
- [insecureHTTPParser](verida_account_node._internal_.AxiosRequestConfig.md#insecurehttpparser)
- [maxBodyLength](verida_account_node._internal_.AxiosRequestConfig.md#maxbodylength)
- [maxContentLength](verida_account_node._internal_.AxiosRequestConfig.md#maxcontentlength)
- [maxRedirects](verida_account_node._internal_.AxiosRequestConfig.md#maxredirects)
- [method](verida_account_node._internal_.AxiosRequestConfig.md#method)
- [params](verida_account_node._internal_.AxiosRequestConfig.md#params)
- [proxy](verida_account_node._internal_.AxiosRequestConfig.md#proxy)
- [responseEncoding](verida_account_node._internal_.AxiosRequestConfig.md#responseencoding)
- [responseType](verida_account_node._internal_.AxiosRequestConfig.md#responsetype)
- [signal](verida_account_node._internal_.AxiosRequestConfig.md#signal)
- [socketPath](verida_account_node._internal_.AxiosRequestConfig.md#socketpath)
- [timeout](verida_account_node._internal_.AxiosRequestConfig.md#timeout)
- [timeoutErrorMessage](verida_account_node._internal_.AxiosRequestConfig.md#timeouterrormessage)
- [transformRequest](verida_account_node._internal_.AxiosRequestConfig.md#transformrequest)
- [transformResponse](verida_account_node._internal_.AxiosRequestConfig.md#transformresponse)
- [transitional](verida_account_node._internal_.AxiosRequestConfig.md#transitional)
- [url](verida_account_node._internal_.AxiosRequestConfig.md#url)
- [validateStatus](verida_account_node._internal_.AxiosRequestConfig.md#validatestatus)
- [withCredentials](verida_account_node._internal_.AxiosRequestConfig.md#withcredentials)
- [xsrfCookieName](verida_account_node._internal_.AxiosRequestConfig.md#xsrfcookiename)
- [xsrfHeaderName](verida_account_node._internal_.AxiosRequestConfig.md#xsrfheadername)

### Methods

- [beforeRedirect](verida_account_node._internal_.AxiosRequestConfig.md#beforeredirect)
- [onDownloadProgress](verida_account_node._internal_.AxiosRequestConfig.md#ondownloadprogress)
- [onUploadProgress](verida_account_node._internal_.AxiosRequestConfig.md#onuploadprogress)
- [paramsSerializer](verida_account_node._internal_.AxiosRequestConfig.md#paramsserializer)

## Properties

### adapter

• `Optional` **adapter**: [`AxiosAdapter`](verida_account_node._internal_.AxiosAdapter.md)

#### Defined in

node_modules/axios/index.d.ts:88

___

### auth

• `Optional` **auth**: [`AxiosBasicCredentials`](verida_account_node._internal_.AxiosBasicCredentials.md)

#### Defined in

node_modules/axios/index.d.ts:89

___

### baseURL

• `Optional` **baseURL**: `string`

#### Defined in

node_modules/axios/index.d.ts:78

___

### cancelToken

• `Optional` **cancelToken**: [`CancelToken`](verida_account_node._internal_.CancelToken.md)

#### Defined in

node_modules/axios/index.d.ts:105

___

### data

• `Optional` **data**: `D`

#### Defined in

node_modules/axios/index.d.ts:84

___

### decompress

• `Optional` **decompress**: `boolean`

#### Defined in

node_modules/axios/index.d.ts:106

___

### env

• `Optional` **env**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `FormData?` | (...`args`: `any`[]) => `object` |

#### Defined in

node_modules/axios/index.d.ts:110

___

### headers

• `Optional` **headers**: [`AxiosRequestHeaders`](../modules/verida_account_node._internal_.md#axiosrequestheaders)

#### Defined in

node_modules/axios/index.d.ts:81

___

### httpAgent

• `Optional` **httpAgent**: `any`

#### Defined in

node_modules/axios/index.d.ts:102

___

### httpsAgent

• `Optional` **httpsAgent**: `any`

#### Defined in

node_modules/axios/index.d.ts:103

___

### insecureHTTPParser

• `Optional` **insecureHTTPParser**: `boolean`

#### Defined in

node_modules/axios/index.d.ts:109

___

### maxBodyLength

• `Optional` **maxBodyLength**: `number`

#### Defined in

node_modules/axios/index.d.ts:98

___

### maxContentLength

• `Optional` **maxContentLength**: `number`

#### Defined in

node_modules/axios/index.d.ts:96

___

### maxRedirects

• `Optional` **maxRedirects**: `number`

#### Defined in

node_modules/axios/index.d.ts:99

___

### method

• `Optional` **method**: `string`

#### Defined in

node_modules/axios/index.d.ts:77

___

### params

• `Optional` **params**: `any`

#### Defined in

node_modules/axios/index.d.ts:82

___

### proxy

• `Optional` **proxy**: ``false`` \| [`AxiosProxyConfig`](verida_account_node._internal_.AxiosProxyConfig.md)

#### Defined in

node_modules/axios/index.d.ts:104

___

### responseEncoding

• `Optional` **responseEncoding**: `string`

#### Defined in

node_modules/axios/index.d.ts:91

___

### responseType

• `Optional` **responseType**: [`ResponseType`](../modules/verida_account_node._internal_.md#responsetype)

#### Defined in

node_modules/axios/index.d.ts:90

___

### signal

• `Optional` **signal**: [`AbortSignal`](../modules/verida_account_node._internal_.md#abortsignal)

#### Defined in

node_modules/axios/index.d.ts:108

___

### socketPath

• `Optional` **socketPath**: ``null`` \| `string`

#### Defined in

node_modules/axios/index.d.ts:101

___

### timeout

• `Optional` **timeout**: `number`

#### Defined in

node_modules/axios/index.d.ts:85

___

### timeoutErrorMessage

• `Optional` **timeoutErrorMessage**: `string`

#### Defined in

node_modules/axios/index.d.ts:86

___

### transformRequest

• `Optional` **transformRequest**: [`AxiosRequestTransformer`](verida_account_node._internal_.AxiosRequestTransformer.md) \| [`AxiosRequestTransformer`](verida_account_node._internal_.AxiosRequestTransformer.md)[]

#### Defined in

node_modules/axios/index.d.ts:79

___

### transformResponse

• `Optional` **transformResponse**: [`AxiosResponseTransformer`](verida_account_node._internal_.AxiosResponseTransformer.md) \| [`AxiosResponseTransformer`](verida_account_node._internal_.AxiosResponseTransformer.md)[]

#### Defined in

node_modules/axios/index.d.ts:80

___

### transitional

• `Optional` **transitional**: [`TransitionalOptions`](verida_account_node._internal_.TransitionalOptions.md)

#### Defined in

node_modules/axios/index.d.ts:107

___

### url

• `Optional` **url**: `string`

#### Defined in

node_modules/axios/index.d.ts:76

___

### validateStatus

• `Optional` **validateStatus**: ``null`` \| (`status`: `number`) => `boolean`

#### Defined in

node_modules/axios/index.d.ts:97

___

### withCredentials

• `Optional` **withCredentials**: `boolean`

#### Defined in

node_modules/axios/index.d.ts:87

___

### xsrfCookieName

• `Optional` **xsrfCookieName**: `string`

#### Defined in

node_modules/axios/index.d.ts:92

___

### xsrfHeaderName

• `Optional` **xsrfHeaderName**: `string`

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

#### Defined in

node_modules/axios/index.d.ts:83
