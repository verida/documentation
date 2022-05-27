[root](../README.md) / [Modules](../modules.md) / [@verida/account-web-vault](../modules/verida_account_web_vault.md) / VaultAccount

# Class: VaultAccount

[@verida/account-web-vault](../modules/verida_account_web_vault.md).VaultAccount

An Authenticator that requests for authorization from the Vault

## Hierarchy

- [`default`](verida_account_web_vault._internal_.default.md)

  ↳ **`VaultAccount`**

## Table of contents

### Constructors

- [constructor](verida_account_web_vault.VaultAccount.md#constructor)

### Properties

- [accountDid](verida_account_web_vault.VaultAccount.md#accountdid)
- [config](verida_account_web_vault.VaultAccount.md#config)
- [contextCache](verida_account_web_vault.VaultAccount.md#contextcache)

### Methods

- [addContext](verida_account_web_vault.VaultAccount.md#addcontext)
- [connectContext](verida_account_web_vault.VaultAccount.md#connectcontext)
- [createDidJwt](verida_account_web_vault.VaultAccount.md#createdidjwt)
- [did](verida_account_web_vault.VaultAccount.md#did)
- [disconnect](verida_account_web_vault.VaultAccount.md#disconnect)
- [getDidClient](verida_account_web_vault.VaultAccount.md#getdidclient)
- [keyring](verida_account_web_vault.VaultAccount.md#keyring)
- [linkStorage](verida_account_web_vault.VaultAccount.md#linkstorage)
- [linkStorageContextService](verida_account_web_vault.VaultAccount.md#linkstoragecontextservice)
- [loadFromSession](verida_account_web_vault.VaultAccount.md#loadfromsession)
- [setDid](verida_account_web_vault.VaultAccount.md#setdid)
- [sign](verida_account_web_vault.VaultAccount.md#sign)
- [storageConfig](verida_account_web_vault.VaultAccount.md#storageconfig)
- [unlinkStorage](verida_account_web_vault.VaultAccount.md#unlinkstorage)

## Constructors

### constructor

• **new VaultAccount**(`config?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`VaultAccountConfig`](../interfaces/verida_account_web_vault.VaultAccountConfig.md) |

#### Overrides

[default](verida_account_web_vault._internal_.default.md).[constructor](verida_account_web_vault._internal_.default.md#constructor)

#### Defined in

[packages/account-web-vault/src/vault-account.ts:69](https://github.com/verida/verida-js/blob/c03b336/packages/account-web-vault/src/vault-account.ts#L69)

## Properties

### accountDid

• `Private` `Optional` **accountDid**: `string`

#### Defined in

[packages/account-web-vault/src/vault-account.ts:66](https://github.com/verida/verida-js/blob/c03b336/packages/account-web-vault/src/vault-account.ts#L66)

___

### config

• `Private` **config**: [`VaultAccountConfig`](../interfaces/verida_account_web_vault.VaultAccountConfig.md)

#### Defined in

[packages/account-web-vault/src/vault-account.ts:64](https://github.com/verida/verida-js/blob/c03b336/packages/account-web-vault/src/vault-account.ts#L64)

___

### contextCache

• `Private` **contextCache**: `any` = `{}`

#### Defined in

[packages/account-web-vault/src/vault-account.ts:67](https://github.com/verida/verida-js/blob/c03b336/packages/account-web-vault/src/vault-account.ts#L67)

## Methods

### addContext

▸ **addContext**(`contextName`, `contextConfig`, `keyring`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `contextName` | `string` |
| `contextConfig` | [`SecureContextConfig`](../interfaces/verida_account_web_vault._internal_.SecureContextConfig.md) |
| `keyring` | [`default`](verida_account_web_vault._internal_.default-1.md) |

#### Returns

`void`

#### Defined in

[packages/account-web-vault/src/vault-account.ts:161](https://github.com/verida/verida-js/blob/c03b336/packages/account-web-vault/src/vault-account.ts#L161)

___

### connectContext

▸ **connectContext**(`contextName`): `Promise`<`boolean` \| [`SecureContextConfig`](../interfaces/verida_account_web_vault._internal_.SecureContextConfig.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `contextName` | `string` |

#### Returns

`Promise`<`boolean` \| [`SecureContextConfig`](../interfaces/verida_account_web_vault._internal_.SecureContextConfig.md)\>

#### Defined in

[packages/account-web-vault/src/vault-account.ts:74](https://github.com/verida/verida-js/blob/c03b336/packages/account-web-vault/src/vault-account.ts#L74)

___

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

#### Inherited from

[default](verida_account_web_vault._internal_.default.md).[createDidJwt](verida_account_web_vault._internal_.default.md#createdidjwt)

#### Defined in

packages/account/dist/account.d.ts:42

___

### did

▸ **did**(): `Promise`<`string`\>

Get the DID of the current user

#### Returns

`Promise`<`string`\>

#### Overrides

[default](verida_account_web_vault._internal_.default.md).[did](verida_account_web_vault._internal_.default.md#did)

#### Defined in

[packages/account-web-vault/src/vault-account.ts:186](https://github.com/verida/verida-js/blob/c03b336/packages/account-web-vault/src/vault-account.ts#L186)

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

#### Overrides

[default](verida_account_web_vault._internal_.default.md).[disconnect](verida_account_web_vault._internal_.default.md#disconnect)

#### Defined in

[packages/account-web-vault/src/vault-account.ts:212](https://github.com/verida/verida-js/blob/c03b336/packages/account-web-vault/src/vault-account.ts#L212)

___

### getDidClient

▸ **getDidClient**(): `void`

#### Returns

`void`

#### Inherited from

[default](verida_account_web_vault._internal_.default.md).[getDidClient](verida_account_web_vault._internal_.default.md#getdidclient)

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

#### Overrides

[default](verida_account_web_vault._internal_.default.md).[keyring](verida_account_web_vault._internal_.default.md#keyring)

#### Defined in

[packages/account-web-vault/src/vault-account.ts:153](https://github.com/verida/verida-js/blob/c03b336/packages/account-web-vault/src/vault-account.ts#L153)

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

#### Overrides

[default](verida_account_web_vault._internal_.default.md).[linkStorage](verida_account_web_vault._internal_.default.md#linkstorage)

#### Defined in

[packages/account-web-vault/src/vault-account.ts:199](https://github.com/verida/verida-js/blob/c03b336/packages/account-web-vault/src/vault-account.ts#L199)

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

#### Inherited from

[default](verida_account_web_vault._internal_.default.md).[linkStorageContextService](verida_account_web_vault._internal_.default.md#linkstoragecontextservice)

#### Defined in

packages/account/dist/account.d.ts:36

___

### loadFromSession

▸ **loadFromSession**(`contextName`): `Promise`<`undefined` \| [`SecureContextConfig`](../interfaces/verida_account_web_vault._internal_.SecureContextConfig.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `contextName` | `string` |

#### Returns

`Promise`<`undefined` \| [`SecureContextConfig`](../interfaces/verida_account_web_vault._internal_.SecureContextConfig.md)\>

#### Defined in

[packages/account-web-vault/src/vault-account.ts:112](https://github.com/verida/verida-js/blob/c03b336/packages/account-web-vault/src/vault-account.ts#L112)

___

### setDid

▸ **setDid**(`did`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `string` |

#### Returns

`void`

#### Defined in

[packages/account-web-vault/src/vault-account.ts:190](https://github.com/verida/verida-js/blob/c03b336/packages/account-web-vault/src/vault-account.ts#L190)

___

### sign

▸ **sign**(`message`): `Promise`<`string`\>

Sign a string as the current user

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

`Promise`<`string`\>

#### Overrides

[default](verida_account_web_vault._internal_.default.md).[sign](verida_account_web_vault._internal_.default.md#sign)

#### Defined in

[packages/account-web-vault/src/vault-account.ts:182](https://github.com/verida/verida-js/blob/c03b336/packages/account-web-vault/src/vault-account.ts#L182)

___

### storageConfig

▸ **storageConfig**(`contextName`, `forceCreate?`): `Promise`<`undefined` \| [`SecureContextConfig`](../interfaces/verida_account_web_vault._internal_.SecureContextConfig.md)\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `contextName` | `string` | `undefined` |
| `forceCreate` | `boolean` | `false` |

#### Returns

`Promise`<`undefined` \| [`SecureContextConfig`](../interfaces/verida_account_web_vault._internal_.SecureContextConfig.md)\>

#### Overrides

[default](verida_account_web_vault._internal_.default.md).[storageConfig](verida_account_web_vault._internal_.default.md#storageconfig)

#### Defined in

[packages/account-web-vault/src/vault-account.ts:168](https://github.com/verida/verida-js/blob/c03b336/packages/account-web-vault/src/vault-account.ts#L168)

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

#### Overrides

[default](verida_account_web_vault._internal_.default.md).[unlinkStorage](verida_account_web_vault._internal_.default.md#unlinkstorage)

#### Defined in

[packages/account-web-vault/src/vault-account.ts:208](https://github.com/verida/verida-js/blob/c03b336/packages/account-web-vault/src/vault-account.ts#L208)
