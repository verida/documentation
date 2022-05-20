[root](../README.md) / [Modules](../modules.md) / [@verida/account-web-vault](../modules/verida_account_web_vault.md) / [<internal\>](../modules/verida_account_web_vault._internal_.md) / default

# Class: default

[@verida/account-web-vault](../modules/verida_account_web_vault.md).[<internal\>](../modules/verida_account_web_vault._internal_.md).default

An Authenticator that automatically signs everything

## Hierarchy

- **`default`**

  ↳ [`VaultAccount`](verida_account_web_vault.VaultAccount.md)

## Table of contents

### Constructors

- [constructor](verida_account_web_vault._internal_.default.md#constructor)

### Methods

- [createDidJwt](verida_account_web_vault._internal_.default.md#createdidjwt)
- [did](verida_account_web_vault._internal_.default.md#did)
- [disconnect](verida_account_web_vault._internal_.default.md#disconnect)
- [getDidClient](verida_account_web_vault._internal_.default.md#getdidclient)
- [keyring](verida_account_web_vault._internal_.default.md#keyring)
- [linkStorage](verida_account_web_vault._internal_.default.md#linkstorage)
- [linkStorageContextService](verida_account_web_vault._internal_.default.md#linkstoragecontextservice)
- [sign](verida_account_web_vault._internal_.default.md#sign)
- [storageConfig](verida_account_web_vault._internal_.default.md#storageconfig)
- [unlinkStorage](verida_account_web_vault._internal_.default.md#unlinkstorage)

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

▸ **keyring**(`contextName`): `Promise`<[`default`](verida_account_web_vault._internal_.default-1.md)\>

Generate a keyring for this user for a given storage context.

#### Parameters

| Name | Type |
| :------ | :------ |
| `contextName` | `string` |

#### Returns

`Promise`<[`default`](verida_account_web_vault._internal_.default-1.md)\>

#### Defined in

packages/account/dist/account.d.ts:12

___

### linkStorage

▸ **linkStorage**(`storageConfig`): `Promise`<`void`\>

Link storage to this user

#### Parameters

| Name | Type |
| :------ | :------ |
| `storageConfig` | [`SecureContextConfig`](../interfaces/verida_account_web_vault._internal_.SecureContextConfig.md) |

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

▸ **storageConfig**(`contextName`, `forceCreate?`): `Promise`<`undefined` \| [`SecureContextConfig`](../interfaces/verida_account_web_vault._internal_.SecureContextConfig.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `contextName` | `string` |
| `forceCreate?` | `boolean` |

#### Returns

`Promise`<`undefined` \| [`SecureContextConfig`](../interfaces/verida_account_web_vault._internal_.SecureContextConfig.md)\>

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
