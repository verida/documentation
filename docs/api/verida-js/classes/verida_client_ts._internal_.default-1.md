[root](../README.md) / [Modules](../modules.md) / [@verida/client-ts](../modules/verida_client_ts.md) / [<internal\>](../modules/verida_client_ts._internal_.md) / default

# Class: default

[@verida/client-ts](../modules/verida_client_ts.md).[<internal\>](../modules/verida_client_ts._internal_.md).default

An Authenticator that automatically signs everything

## Table of contents

### Constructors

- [constructor](verida_client_ts._internal_.default-1.md#constructor)

### Methods

- [createDidJwt](verida_client_ts._internal_.default-1.md#createdidjwt)
- [did](verida_client_ts._internal_.default-1.md#did)
- [disconnect](verida_client_ts._internal_.default-1.md#disconnect)
- [getDidClient](verida_client_ts._internal_.default-1.md#getdidclient)
- [keyring](verida_client_ts._internal_.default-1.md#keyring)
- [linkStorage](verida_client_ts._internal_.default-1.md#linkstorage)
- [linkStorageContextService](verida_client_ts._internal_.default-1.md#linkstoragecontextservice)
- [sign](verida_client_ts._internal_.default-1.md#sign)
- [storageConfig](verida_client_ts._internal_.default-1.md#storageconfig)
- [unlinkStorage](verida_client_ts._internal_.default-1.md#unlinkstorage)

## Constructors

### constructor

• **new default**()

## Methods

### createDidJwt

▸ **createDidJwt**(`contextName`, `data`, `config?`): `Promise`<`string`\>

Create a DID-JWT from a data object

#### Parameters

| Name | Type |
| :------ | :------ |
| `contextName` | `string` |
| `data` | `object` |
| `config?` | `any` |

#### Returns

`Promise`<`string`\>

#### Defined in

packages/account/dist/account.d.ts:42

___

### did

▸ **did**(): `Promise`<`string`\>

Get the DID of the current user

#### Returns

`Promise`<`string`\>

#### Defined in

packages/account/dist/account.d.ts:22

___

### disconnect

▸ **disconnect**(`contextName?`): `Promise`<`void`\>

An optional method that can be used to disconnect the current user.

For example, in a web browser context, it would remove any stored signatures from local storage.

#### Parameters

| Name | Type |
| :------ | :------ |
| `contextName?` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/account/dist/account.d.ts:48

___

### getDidClient

▸ **getDidClient**(): `void`

#### Returns

`void`

#### Defined in

packages/account/dist/account.d.ts:37

___

### keyring

▸ **keyring**(`contextName`): `Promise`<[`default`](verida_client_ts._internal_.default-2.md)\>

Generate a keyring for this user for a given storage context.

#### Parameters

| Name | Type |
| :------ | :------ |
| `contextName` | `string` |

#### Returns

`Promise`<[`default`](verida_client_ts._internal_.default-2.md)\>

#### Defined in

packages/account/dist/account.d.ts:12

___

### linkStorage

▸ **linkStorage**(`storageConfig`): `Promise`<`void`\>

Link storage to this user

#### Parameters

| Name | Type |
| :------ | :------ |
| `storageConfig` | [`SecureContextConfig`](../interfaces/verida_client_ts._internal_.SecureContextConfig.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/account/dist/account.d.ts:28

___

### linkStorageContextService

▸ **linkStorageContextService**(`contextName`, `endpointType`, `serverType`, `endpointUri`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `contextName` | `string` |
| `endpointType` | `string` |
| `serverType` | `string` |
| `endpointUri` | `string` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

packages/account/dist/account.d.ts:36

___

### sign

▸ **sign**(`input`): `Promise`<`string`\>

Sign a string as the current user

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

packages/account/dist/account.d.ts:18

___

### storageConfig

▸ **storageConfig**(`contextName`, `forceCreate?`): `Promise`<`undefined` \| [`SecureContextConfig`](../interfaces/verida_client_ts._internal_.SecureContextConfig.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `contextName` | `string` |
| `forceCreate?` | `boolean` |

#### Returns

`Promise`<`undefined` \| [`SecureContextConfig`](../interfaces/verida_client_ts._internal_.SecureContextConfig.md)\>

#### Defined in

packages/account/dist/account.d.ts:35

___

### unlinkStorage

▸ **unlinkStorage**(`contextName`): `Promise`<`boolean`\>

Unlink storage for this user

#### Parameters

| Name | Type |
| :------ | :------ |
| `contextName` | `string` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

packages/account/dist/account.d.ts:34
