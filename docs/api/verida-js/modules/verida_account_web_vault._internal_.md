[root](../README.md) / [Modules](../modules.md) / [@verida/account-web-vault](verida_account_web_vault.md) / <internal\>

# Namespace: <internal\>

[@verida/account-web-vault](verida_account_web_vault.md).<internal\>

## Table of contents

### Enumerations

- [EnvironmentType](../enums/verida_account_web_vault._internal_.EnvironmentType.md)

### Classes

- [Axios](../classes/verida_account_web_vault._internal_.Axios.md)
- [default](../classes/verida_account_web_vault._internal_.default.md)
- [default](../classes/verida_account_web_vault._internal_.default-1.md)

### Interfaces

- [AccountConfig](../interfaces/verida_account_web_vault._internal_.AccountConfig.md)
- [AccountVaultConfig](../interfaces/verida_account_web_vault._internal_.AccountVaultConfig.md)
- [AccountVaultRequest](../interfaces/verida_account_web_vault._internal_.AccountVaultRequest.md)
- [AuthContext](../interfaces/verida_account_web_vault._internal_.AuthContext.md)
- [AuthResponse](../interfaces/verida_account_web_vault._internal_.AuthResponse.md)
- [AuthTypeConfig](../interfaces/verida_account_web_vault._internal_.AuthTypeConfig.md)
- [AxiosAdapter](../interfaces/verida_account_web_vault._internal_.AxiosAdapter.md)
- [AxiosBasicCredentials](../interfaces/verida_account_web_vault._internal_.AxiosBasicCredentials.md)
- [AxiosDefaults](../interfaces/verida_account_web_vault._internal_.AxiosDefaults.md)
- [AxiosInstance](../interfaces/verida_account_web_vault._internal_.AxiosInstance.md)
- [AxiosInterceptorManager](../interfaces/verida_account_web_vault._internal_.AxiosInterceptorManager.md)
- [AxiosInterceptorOptions](../interfaces/verida_account_web_vault._internal_.AxiosInterceptorOptions.md)
- [AxiosPromise](../interfaces/verida_account_web_vault._internal_.AxiosPromise.md)
- [AxiosProxyConfig](../interfaces/verida_account_web_vault._internal_.AxiosProxyConfig.md)
- [AxiosRequestConfig](../interfaces/verida_account_web_vault._internal_.AxiosRequestConfig.md)
- [AxiosRequestTransformer](../interfaces/verida_account_web_vault._internal_.AxiosRequestTransformer.md)
- [AxiosResponse](../interfaces/verida_account_web_vault._internal_.AxiosResponse.md)
- [AxiosResponseTransformer](../interfaces/verida_account_web_vault._internal_.AxiosResponseTransformer.md)
- [Cancel](../interfaces/verida_account_web_vault._internal_.Cancel.md)
- [CancelToken](../interfaces/verida_account_web_vault._internal_.CancelToken.md)
- [HeadersDefaults](../interfaces/verida_account_web_vault._internal_.HeadersDefaults.md)
- [IAccount](../interfaces/verida_account_web_vault._internal_.IAccount.md)
- [IKeyring](../interfaces/verida_account_web_vault._internal_.IKeyring.md)
- [KeyringPublicKeys](../interfaces/verida_account_web_vault._internal_.KeyringPublicKeys.md)
- [PromiseLike](../interfaces/verida_account_web_vault._internal_.PromiseLike.md)
- [SecureContextConfig](../interfaces/verida_account_web_vault._internal_.SecureContextConfig.md)
- [SecureContextEndpoint](../interfaces/verida_account_web_vault._internal_.SecureContextEndpoint.md)
- [SecureContextPublicKey](../interfaces/verida_account_web_vault._internal_.SecureContextPublicKey.md)
- [SecureContextServices](../interfaces/verida_account_web_vault._internal_.SecureContextServices.md)
- [SecureStorageContextPublicKeys](../interfaces/verida_account_web_vault._internal_.SecureStorageContextPublicKeys.md)
- [TransitionalOptions](../interfaces/verida_account_web_vault._internal_.TransitionalOptions.md)
- [VeridaDatabaseAuthContext](../interfaces/verida_account_web_vault._internal_.VeridaDatabaseAuthContext.md)

### Type aliases

- [AxiosRequestHeaders](verida_account_web_vault._internal_.md#axiosrequestheaders)
- [AxiosResponseHeaders](verida_account_web_vault._internal_.md#axiosresponseheaders)
- [Exclude](verida_account_web_vault._internal_.md#exclude)
- [Omit](verida_account_web_vault._internal_.md#omit)
- [Pick](verida_account_web_vault._internal_.md#pick)
- [Record](verida_account_web_vault._internal_.md#record)
- [ResponseType](verida_account_web_vault._internal_.md#responsetype)
- [ServiceEndpoint](verida_account_web_vault._internal_.md#serviceendpoint)

## Type aliases

### AxiosRequestHeaders

Ƭ **AxiosRequestHeaders**: [`Record`](verida_account_web_vault._internal_.md#record)<`string`, `string` \| `number` \| `boolean`\>

#### Defined in

node_modules/axios/index.d.ts:2

___

### AxiosResponseHeaders

Ƭ **AxiosResponseHeaders**: [`Record`](verida_account_web_vault._internal_.md#record)<`string`, `string`\> & { `set-cookie?`: `string`[]  }

#### Defined in

node_modules/axios/index.d.ts:4

___

### Exclude

Ƭ **Exclude**<`T`, `U`\>: `T` extends `U` ? `never` : `T`

Exclude from T those types that are assignable to U

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1506

___

### Omit

Ƭ **Omit**<`T`, `K`\>: [`Pick`](verida_account_web_vault._internal_.md#pick)<`T`, [`Exclude`](verida_account_web_vault._internal_.md#exclude)<keyof `T`, `K`\>\>

Construct a type with the properties of T except for those in type K.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `K` | extends keyof `any` |

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1516

___

### Pick

Ƭ **Pick**<`T`, `K`\>: { [P in K]: T[P] }

From T, pick a set of properties whose keys are in the union K

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `K` | extends keyof `T` |

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1492

___

### Record

Ƭ **Record**<`K`, `T`\>: { [P in K]: T }

Construct a type with a set of properties K of type T

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `any` |
| `T` | `T` |

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1499

___

### ResponseType

Ƭ **ResponseType**: ``"arraybuffer"`` \| ``"blob"`` \| ``"document"`` \| ``"json"`` \| ``"text"`` \| ``"stream"``

#### Defined in

node_modules/axios/index.d.ts:47

___

### ServiceEndpoint

Ƭ **ServiceEndpoint**: `string` \| [`Record`](verida_account_web_vault._internal_.md#record)<`string`, `any`\>

Represents an endpoint of a Service entry in a DID document.

**`see`** [https://www.w3.org/TR/did-core/#dfn-serviceendpoint](https://www.w3.org/TR/did-core/#dfn-serviceendpoint)

**`see`** [https://www.w3.org/TR/did-core/#services](https://www.w3.org/TR/did-core/#services)

#### Defined in

node_modules/did-resolver/lib/resolver.d.ts:92
