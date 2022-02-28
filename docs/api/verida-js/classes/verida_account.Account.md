[root](../README.md) / [Modules](../modules.md) / [@verida/account](../modules/verida_account.md) / Account

# Class: Account

[@verida/account](../modules/verida_account.md).Account

An Authenticator that automatically signs everything

## Table of contents

### Constructors

- [constructor](verida_account.Account.md#constructor)

### Methods

- [createDidJwt](verida_account.Account.md#createdidjwt)
- [did](verida_account.Account.md#did)
- [disconnect](verida_account.Account.md#disconnect)
- [getDidClient](verida_account.Account.md#getdidclient)
- [keyring](verida_account.Account.md#keyring)
- [linkStorage](verida_account.Account.md#linkstorage)
- [linkStorageContextService](verida_account.Account.md#linkstoragecontextservice)
- [sign](verida_account.Account.md#sign)
- [storageConfig](verida_account.Account.md#storageconfig)
- [unlinkStorage](verida_account.Account.md#unlinkstorage)

## Constructors

### constructor

• **new Account**()

## Methods

### createDidJwt

▸ **createDidJwt**(`contextName`, `data`, `config?`): `Promise`<`string`\>

Create a DID-JWT from a data object

#### Parameters

| Name | Type |
| :------ | :------ |
| `contextName` | `string` |
| `data` | `object` |
| `config` | `any` |

#### Returns

`Promise`<`string`\>

#### Defined in

[account/src/account.ts:72](https://github.com/verida/verida-js/blob/7bffc4e/packages/account/src/account.ts#L72)

___

### did

▸ **did**(): `Promise`<`string`\>

Get the DID of the current user

#### Returns

`Promise`<`string`\>

#### Defined in

[account/src/account.ts:34](https://github.com/verida/verida-js/blob/7bffc4e/packages/account/src/account.ts#L34)

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

[account/src/account.ts:104](https://github.com/verida/verida-js/blob/7bffc4e/packages/account/src/account.ts#L104)

___

### getDidClient

▸ **getDidClient**(): `void`

#### Returns

`void`

#### Defined in

[account/src/account.ts:64](https://github.com/verida/verida-js/blob/7bffc4e/packages/account/src/account.ts#L64)

___

### keyring

▸ **keyring**(`contextName`): `Promise`<`default`\>

Generate a keyring for this user for a given storage context.

#### Parameters

| Name | Type |
| :------ | :------ |
| `contextName` | `string` |

#### Returns

`Promise`<`default`\>

#### Defined in

[account/src/account.ts:18](https://github.com/verida/verida-js/blob/7bffc4e/packages/account/src/account.ts#L18)

___

### linkStorage

▸ **linkStorage**(`storageConfig`): `Promise`<`void`\>

Link storage to this user

#### Parameters

| Name | Type |
| :------ | :------ |
| `storageConfig` | `SecureContextConfig` |

#### Returns

`Promise`<`void`\>

#### Defined in

[account/src/account.ts:43](https://github.com/verida/verida-js/blob/7bffc4e/packages/account/src/account.ts#L43)

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

[account/src/account.ts:60](https://github.com/verida/verida-js/blob/7bffc4e/packages/account/src/account.ts#L60)

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

[account/src/account.ts:27](https://github.com/verida/verida-js/blob/7bffc4e/packages/account/src/account.ts#L27)

___

### storageConfig

▸ **storageConfig**(`contextName`, `forceCreate?`): `Promise`<`undefined` \| `SecureContextConfig`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `contextName` | `string` | `undefined` |
| `forceCreate` | `boolean` | `false` |

#### Returns

`Promise`<`undefined` \| `SecureContextConfig`\>

#### Defined in

[account/src/account.ts:56](https://github.com/verida/verida-js/blob/7bffc4e/packages/account/src/account.ts#L56)

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

[account/src/account.ts:52](https://github.com/verida/verida-js/blob/7bffc4e/packages/account/src/account.ts#L52)
