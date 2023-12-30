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
- [contextAuthIsValid](verida_account_web_vault.VaultAccount.md#contextauthisvalid)
- [createDidJwt](verida_account_web_vault.VaultAccount.md#createdidjwt)
- [did](verida_account_web_vault.VaultAccount.md#did)
- [disconnect](verida_account_web_vault.VaultAccount.md#disconnect)
- [disconnectDevice](verida_account_web_vault.VaultAccount.md#disconnectdevice)
- [getAuthContext](verida_account_web_vault.VaultAccount.md#getauthcontext)
- [getAxios](verida_account_web_vault.VaultAccount.md#getaxios)
- [keyring](verida_account_web_vault.VaultAccount.md#keyring)
- [linkStorage](verida_account_web_vault.VaultAccount.md#linkstorage)
- [linkStorageContextService](verida_account_web_vault.VaultAccount.md#linkstoragecontextservice)
- [loadFromSession](verida_account_web_vault.VaultAccount.md#loadfromsession)
- [locateEndpointContextAuth](verida_account_web_vault.VaultAccount.md#locateendpointcontextauth)
- [setAccountConfig](verida_account_web_vault.VaultAccount.md#setaccountconfig)
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
| `config` | [`AccountVaultConfig`](../interfaces/verida_account_web_vault._internal_.AccountVaultConfig.md) |

#### Overrides

[default](verida_account_web_vault._internal_.default.md).[constructor](verida_account_web_vault._internal_.default.md#constructor)

#### Defined in

[packages/account-web-vault/src/vault-account.ts:84](https://github.com/verida/verida-js/blob/5040472/packages/account-web-vault/src/vault-account.ts#L84)

## Properties

### accountDid

• `Private` `Optional` **accountDid**: `string`

#### Defined in

[packages/account-web-vault/src/vault-account.ts:81](https://github.com/verida/verida-js/blob/5040472/packages/account-web-vault/src/vault-account.ts#L81)

___

### config

• `Private` **config**: [`AccountVaultConfig`](../interfaces/verida_account_web_vault._internal_.AccountVaultConfig.md)

#### Defined in

[packages/account-web-vault/src/vault-account.ts:79](https://github.com/verida/verida-js/blob/5040472/packages/account-web-vault/src/vault-account.ts#L79)

___

### contextCache

• `Private` **contextCache**: `any` = `{}`

#### Defined in

[packages/account-web-vault/src/vault-account.ts:82](https://github.com/verida/verida-js/blob/5040472/packages/account-web-vault/src/vault-account.ts#L82)

## Methods

### addContext

▸ **addContext**(`contextName`, `contextConfig`, `keyring`, `contextAuths`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `contextName` | `string` |
| `contextConfig` | [`SecureContextConfig`](../interfaces/verida_account_web_vault._internal_.SecureContextConfig.md) |
| `keyring` | [`default`](verida_account_web_vault._internal_.default-1.md) |
| `contextAuths` | [`VeridaDatabaseAuthContext`](../interfaces/verida_account_web_vault._internal_.VeridaDatabaseAuthContext.md)[] |

#### Returns

`void`

#### Defined in

[packages/account-web-vault/src/vault-account.ts:237](https://github.com/verida/verida-js/blob/5040472/packages/account-web-vault/src/vault-account.ts#L237)

___

### connectContext

▸ **connectContext**(`contextName`, `ignoreSession?`): `Promise`<`boolean` \| [`SecureContextConfig`](../interfaces/verida_account_web_vault._internal_.SecureContextConfig.md)\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `contextName` | `string` | `undefined` |
| `ignoreSession` | `boolean` | `false` |

#### Returns

`Promise`<`boolean` \| [`SecureContextConfig`](../interfaces/verida_account_web_vault._internal_.SecureContextConfig.md)\>

#### Defined in

[packages/account-web-vault/src/vault-account.ts:97](https://github.com/verida/verida-js/blob/5040472/packages/account-web-vault/src/vault-account.ts#L97)

___

### contextAuthIsValid

▸ **contextAuthIsValid**(`contextAuths`): `boolean`

Verify we have valid JWT's and non-expired accessToken and refreshToken

#### Parameters

| Name | Type |
| :------ | :------ |
| `contextAuths` | [`VeridaDatabaseAuthContext`](../interfaces/verida_account_web_vault._internal_.VeridaDatabaseAuthContext.md)[] |

#### Returns

`boolean`

#### Defined in

[packages/account-web-vault/src/vault-account.ts:149](https://github.com/verida/verida-js/blob/5040472/packages/account-web-vault/src/vault-account.ts#L149)

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

[packages/account-web-vault/src/vault-account.ts:263](https://github.com/verida/verida-js/blob/5040472/packages/account-web-vault/src/vault-account.ts#L263)

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

[packages/account-web-vault/src/vault-account.ts:289](https://github.com/verida/verida-js/blob/5040472/packages/account-web-vault/src/vault-account.ts#L289)

___

### disconnectDevice

▸ **disconnectDevice**(`contextName`, `deviceId?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `contextName` | `string` |
| `deviceId?` | `string` |

#### Returns

`Promise`<`boolean`\>

#### Inherited from

[default](verida_account_web_vault._internal_.default.md).[disconnectDevice](verida_account_web_vault._internal_.default.md#disconnectdevice)

#### Defined in

packages/account/dist/account.d.ts:50

___

### getAuthContext

▸ **getAuthContext**(`contextName`, `contextConfig`, `authConfig?`, `authType?`): `Promise`<[`AuthContext`](../interfaces/verida_account_web_vault._internal_.AuthContext.md)\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `contextName` | `string` | `undefined` |
| `contextConfig` | [`SecureContextConfig`](../interfaces/verida_account_web_vault._internal_.SecureContextConfig.md) | `undefined` |
| `authConfig` | [`AuthTypeConfig`](../interfaces/verida_account_web_vault._internal_.AuthTypeConfig.md) | `undefined` |
| `authType` | `string` | `"database"` |

#### Returns

`Promise`<[`AuthContext`](../interfaces/verida_account_web_vault._internal_.AuthContext.md)\>

#### Overrides

[default](verida_account_web_vault._internal_.default.md).[getAuthContext](verida_account_web_vault._internal_.default.md#getauthcontext)

#### Defined in

[packages/account-web-vault/src/vault-account.ts:310](https://github.com/verida/verida-js/blob/5040472/packages/account-web-vault/src/vault-account.ts#L310)

___

### getAxios

▸ `Private` **getAxios**(`storageContext`, `accessToken?`): [`AxiosInstance`](../interfaces/verida_account_web_vault._internal_.AxiosInstance.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `storageContext` | `string` |
| `accessToken?` | `string` |

#### Returns

[`AxiosInstance`](../interfaces/verida_account_web_vault._internal_.AxiosInstance.md)

#### Defined in

[packages/account-web-vault/src/vault-account.ts:364](https://github.com/verida/verida-js/blob/5040472/packages/account-web-vault/src/vault-account.ts#L364)

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

[packages/account-web-vault/src/vault-account.ts:229](https://github.com/verida/verida-js/blob/5040472/packages/account-web-vault/src/vault-account.ts#L229)

___

### linkStorage

▸ **linkStorage**(`storageConfig`): `Promise`<`boolean`\>

Link storage to this user

#### Parameters

| Name | Type |
| :------ | :------ |
| `storageConfig` | [`SecureContextConfig`](../interfaces/verida_account_web_vault._internal_.SecureContextConfig.md) |

#### Returns

`Promise`<`boolean`\>

#### Overrides

[default](verida_account_web_vault._internal_.default.md).[linkStorage](verida_account_web_vault._internal_.default.md#linkstorage)

#### Defined in

[packages/account-web-vault/src/vault-account.ts:276](https://github.com/verida/verida-js/blob/5040472/packages/account-web-vault/src/vault-account.ts#L276)

___

### linkStorageContextService

▸ **linkStorageContextService**(`contextName`, `endpointType`, `serverType`, `endpointUris`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `contextName` | `string` |
| `endpointType` | `string` |
| `serverType` | `string` |
| `endpointUris` | `string`[] |

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

[packages/account-web-vault/src/vault-account.ts:178](https://github.com/verida/verida-js/blob/5040472/packages/account-web-vault/src/vault-account.ts#L178)

___

### locateEndpointContextAuth

▸ `Private` **locateEndpointContextAuth**(`contextName`, `endpointUri`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `contextName` | `string` |
| `endpointUri` | `string` |

#### Returns

`any`

#### Defined in

[packages/account-web-vault/src/vault-account.ts:296](https://github.com/verida/verida-js/blob/5040472/packages/account-web-vault/src/vault-account.ts#L296)

___

### setAccountConfig

▸ **setAccountConfig**(`accountConfig`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `accountConfig` | [`AccountConfig`](../interfaces/verida_account_web_vault._internal_.AccountConfig.md) |

#### Returns

`void`

#### Overrides

[default](verida_account_web_vault._internal_.default.md).[setAccountConfig](verida_account_web_vault._internal_.default.md#setaccountconfig)

#### Defined in

[packages/account-web-vault/src/vault-account.ts:139](https://github.com/verida/verida-js/blob/5040472/packages/account-web-vault/src/vault-account.ts#L139)

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

[packages/account-web-vault/src/vault-account.ts:267](https://github.com/verida/verida-js/blob/5040472/packages/account-web-vault/src/vault-account.ts#L267)

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

[packages/account-web-vault/src/vault-account.ts:259](https://github.com/verida/verida-js/blob/5040472/packages/account-web-vault/src/vault-account.ts#L259)

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

[packages/account-web-vault/src/vault-account.ts:245](https://github.com/verida/verida-js/blob/5040472/packages/account-web-vault/src/vault-account.ts#L245)

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

[packages/account-web-vault/src/vault-account.ts:285](https://github.com/verida/verida-js/blob/5040472/packages/account-web-vault/src/vault-account.ts#L285)
