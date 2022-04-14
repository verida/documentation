[root](../README.md) / [Modules](../modules.md) / [@verida/account-web-vault](../modules/verida_account_web_vault.md) / VaultAccount

# Class: VaultAccount

[@verida/account-web-vault](../modules/verida_account_web_vault.md).VaultAccount

An Authenticator that requests for authorization from the Vault

## Hierarchy

- `default`

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

Account.constructor

#### Defined in

[account-web-vault/src/vault-account.ts:35](https://github.com/verida/verida-js/blob/039856c/packages/account-web-vault/src/vault-account.ts#L35)

## Properties

### accountDid

• `Private` `Optional` **accountDid**: `string`

#### Defined in

[account-web-vault/src/vault-account.ts:32](https://github.com/verida/verida-js/blob/039856c/packages/account-web-vault/src/vault-account.ts#L32)

___

### config

• `Private` **config**: [`VaultAccountConfig`](../interfaces/verida_account_web_vault.VaultAccountConfig.md)

#### Defined in

[account-web-vault/src/vault-account.ts:30](https://github.com/verida/verida-js/blob/039856c/packages/account-web-vault/src/vault-account.ts#L30)

___

### contextCache

• `Private` **contextCache**: `any` = `{}`

#### Defined in

[account-web-vault/src/vault-account.ts:33](https://github.com/verida/verida-js/blob/039856c/packages/account-web-vault/src/vault-account.ts#L33)

## Methods

### addContext

▸ **addContext**(`contextName`, `contextConfig`, `keyring`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `contextName` | `string` |
| `contextConfig` | `SecureContextConfig` |
| `keyring` | `default` |

#### Returns

`void`

#### Defined in

[account-web-vault/src/vault-account.ts:105](https://github.com/verida/verida-js/blob/039856c/packages/account-web-vault/src/vault-account.ts#L105)

___

### connectContext

▸ **connectContext**(`contextName`): `Promise`<`boolean` \| `SecureContextConfig`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `contextName` | `string` |

#### Returns

`Promise`<`boolean` \| `SecureContextConfig`\>

#### Defined in

[account-web-vault/src/vault-account.ts:40](https://github.com/verida/verida-js/blob/039856c/packages/account-web-vault/src/vault-account.ts#L40)

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

Account.createDidJwt

#### Defined in

account/dist/account.d.ts:42

___

### did

▸ **did**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Overrides

Account.did

#### Defined in

[account-web-vault/src/vault-account.ts:130](https://github.com/verida/verida-js/blob/039856c/packages/account-web-vault/src/vault-account.ts#L130)

___

### disconnect

▸ **disconnect**(`contextName?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `contextName?` | `string` |

#### Returns

`Promise`<`void`\>

#### Overrides

Account.disconnect

#### Defined in

[account-web-vault/src/vault-account.ts:156](https://github.com/verida/verida-js/blob/039856c/packages/account-web-vault/src/vault-account.ts#L156)

___

### getDidClient

▸ **getDidClient**(): `void`

#### Returns

`void`

#### Inherited from

Account.getDidClient

#### Defined in

account/dist/account.d.ts:37

___

### keyring

▸ **keyring**(`contextName`): `Promise`<`default`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `contextName` | `string` |

#### Returns

`Promise`<`default`\>

#### Overrides

Account.keyring

#### Defined in

[account-web-vault/src/vault-account.ts:97](https://github.com/verida/verida-js/blob/039856c/packages/account-web-vault/src/vault-account.ts#L97)

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

#### Overrides

Account.linkStorage

#### Defined in

[account-web-vault/src/vault-account.ts:143](https://github.com/verida/verida-js/blob/039856c/packages/account-web-vault/src/vault-account.ts#L143)

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

Account.linkStorageContextService

#### Defined in

account/dist/account.d.ts:36

___

### loadFromSession

▸ **loadFromSession**(`contextName`): `Promise`<`undefined` \| `SecureContextConfig`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `contextName` | `string` |

#### Returns

`Promise`<`undefined` \| `SecureContextConfig`\>

#### Defined in

[account-web-vault/src/vault-account.ts:78](https://github.com/verida/verida-js/blob/039856c/packages/account-web-vault/src/vault-account.ts#L78)

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

[account-web-vault/src/vault-account.ts:134](https://github.com/verida/verida-js/blob/039856c/packages/account-web-vault/src/vault-account.ts#L134)

___

### sign

▸ **sign**(`message`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

`Promise`<`string`\>

#### Overrides

Account.sign

#### Defined in

[account-web-vault/src/vault-account.ts:126](https://github.com/verida/verida-js/blob/039856c/packages/account-web-vault/src/vault-account.ts#L126)

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

#### Overrides

Account.storageConfig

#### Defined in

[account-web-vault/src/vault-account.ts:112](https://github.com/verida/verida-js/blob/039856c/packages/account-web-vault/src/vault-account.ts#L112)

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

Account.unlinkStorage

#### Defined in

[account-web-vault/src/vault-account.ts:152](https://github.com/verida/verida-js/blob/039856c/packages/account-web-vault/src/vault-account.ts#L152)
