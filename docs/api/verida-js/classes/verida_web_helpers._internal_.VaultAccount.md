[root](../README.md) / [Modules](../modules.md) / [@verida/web-helpers](../modules/verida_web_helpers.md) / [<internal\>](../modules/verida_web_helpers._internal_.md) / VaultAccount

# Class: VaultAccount

[@verida/web-helpers](../modules/verida_web_helpers.md).[<internal\>](../modules/verida_web_helpers._internal_.md).VaultAccount

An Authenticator that requests for authorization from the Vault

## Hierarchy

- [`default`](verida_web_helpers._internal_.default.md)

  ↳ **`VaultAccount`**

## Table of contents

### Constructors

- [constructor](verida_web_helpers._internal_.VaultAccount.md#constructor)

### Properties

- [accountDid](verida_web_helpers._internal_.VaultAccount.md#accountdid)
- [config](verida_web_helpers._internal_.VaultAccount.md#config)
- [contextCache](verida_web_helpers._internal_.VaultAccount.md#contextcache)
- [getAxios](verida_web_helpers._internal_.VaultAccount.md#getaxios)
- [locateEndpointContextAuth](verida_web_helpers._internal_.VaultAccount.md#locateendpointcontextauth)

### Methods

- [addContext](verida_web_helpers._internal_.VaultAccount.md#addcontext)
- [connectContext](verida_web_helpers._internal_.VaultAccount.md#connectcontext)
- [contextAuthIsValid](verida_web_helpers._internal_.VaultAccount.md#contextauthisvalid)
- [createDidJwt](verida_web_helpers._internal_.VaultAccount.md#createdidjwt)
- [did](verida_web_helpers._internal_.VaultAccount.md#did)
- [disconnect](verida_web_helpers._internal_.VaultAccount.md#disconnect)
- [disconnectDevice](verida_web_helpers._internal_.VaultAccount.md#disconnectdevice)
- [getAuthContext](verida_web_helpers._internal_.VaultAccount.md#getauthcontext)
- [keyring](verida_web_helpers._internal_.VaultAccount.md#keyring)
- [linkStorage](verida_web_helpers._internal_.VaultAccount.md#linkstorage)
- [linkStorageContextService](verida_web_helpers._internal_.VaultAccount.md#linkstoragecontextservice)
- [loadFromSession](verida_web_helpers._internal_.VaultAccount.md#loadfromsession)
- [setAccountConfig](verida_web_helpers._internal_.VaultAccount.md#setaccountconfig)
- [setDid](verida_web_helpers._internal_.VaultAccount.md#setdid)
- [sign](verida_web_helpers._internal_.VaultAccount.md#sign)
- [storageConfig](verida_web_helpers._internal_.VaultAccount.md#storageconfig)
- [unlinkStorage](verida_web_helpers._internal_.VaultAccount.md#unlinkstorage)

## Constructors

### constructor

• **new VaultAccount**(`config?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config?` | [`AccountVaultConfig`](../interfaces/verida_web_helpers._internal_.AccountVaultConfig.md) |

#### Overrides

[default](verida_web_helpers._internal_.default.md).[constructor](verida_web_helpers._internal_.default.md#constructor)

#### Defined in

packages/account-web-vault/dist/vault-account.d.ts:12

## Properties

### accountDid

• `Private` `Optional` **accountDid**: `any`

#### Defined in

packages/account-web-vault/dist/vault-account.d.ts:10

___

### config

• `Private` **config**: `any`

#### Defined in

packages/account-web-vault/dist/vault-account.d.ts:9

___

### contextCache

• `Private` **contextCache**: `any`

#### Defined in

packages/account-web-vault/dist/vault-account.d.ts:11

___

### getAxios

• `Private` **getAxios**: `any`

#### Defined in

packages/account-web-vault/dist/vault-account.d.ts:44

___

### locateEndpointContextAuth

• `Private` **locateEndpointContextAuth**: `any`

#### Defined in

packages/account-web-vault/dist/vault-account.d.ts:42

## Methods

### addContext

▸ **addContext**(`contextName`, `contextConfig`, `keyring`, `contextAuths`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `contextName` | `string` |
| `contextConfig` | [`SecureContextConfig`](../interfaces/verida_web_helpers._internal_.SecureContextConfig.md) |
| `keyring` | [`default`](verida_web_helpers._internal_.default-1.md) |
| `contextAuths` | [`VeridaDatabaseAuthContext`](../interfaces/verida_web_helpers._internal_.VeridaDatabaseAuthContext.md)[] |

#### Returns

`void`

#### Defined in

packages/account-web-vault/dist/vault-account.d.ts:24

___

### connectContext

▸ **connectContext**(`contextName`, `ignoreSession?`): `Promise`<`boolean` \| [`SecureContextConfig`](../interfaces/verida_web_helpers._internal_.SecureContextConfig.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `contextName` | `string` |
| `ignoreSession?` | `boolean` |

#### Returns

`Promise`<`boolean` \| [`SecureContextConfig`](../interfaces/verida_web_helpers._internal_.SecureContextConfig.md)\>

#### Defined in

packages/account-web-vault/dist/vault-account.d.ts:13

___

### contextAuthIsValid

▸ **contextAuthIsValid**(`contextAuths`): `boolean`

Verify we have valid JWT's and non-expired accessToken and refreshToken

#### Parameters

| Name | Type |
| :------ | :------ |
| `contextAuths` | [`VeridaDatabaseAuthContext`](../interfaces/verida_web_helpers._internal_.VeridaDatabaseAuthContext.md)[] |

#### Returns

`boolean`

#### Defined in

packages/account-web-vault/dist/vault-account.d.ts:21

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

[default](verida_web_helpers._internal_.default.md).[createDidJwt](verida_web_helpers._internal_.default.md#createdidjwt)

#### Defined in

packages/account/dist/account.d.ts:42

___

### did

▸ **did**(): `Promise`<`string`\>

Get the DID of the current user

#### Returns

`Promise`<`string`\>

#### Overrides

[default](verida_web_helpers._internal_.default.md).[did](verida_web_helpers._internal_.default.md#did)

#### Defined in

packages/account-web-vault/dist/vault-account.d.ts:27

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

[default](verida_web_helpers._internal_.default.md).[disconnect](verida_web_helpers._internal_.default.md#disconnect)

#### Defined in

packages/account-web-vault/dist/vault-account.d.ts:41

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

[default](verida_web_helpers._internal_.default.md).[disconnectDevice](verida_web_helpers._internal_.default.md#disconnectdevice)

#### Defined in

packages/account/dist/account.d.ts:50

___

### getAuthContext

▸ **getAuthContext**(`contextName`, `contextConfig`, `authConfig?`, `authType?`): `Promise`<[`AuthContext`](../interfaces/verida_web_helpers._internal_.AuthContext.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `contextName` | `string` |
| `contextConfig` | [`SecureContextConfig`](../interfaces/verida_web_helpers._internal_.SecureContextConfig.md) |
| `authConfig?` | [`AuthTypeConfig`](../interfaces/verida_web_helpers._internal_.AuthTypeConfig.md) |
| `authType?` | `string` |

#### Returns

`Promise`<[`AuthContext`](../interfaces/verida_web_helpers._internal_.AuthContext.md)\>

#### Overrides

[default](verida_web_helpers._internal_.default.md).[getAuthContext](verida_web_helpers._internal_.default.md#getauthcontext)

#### Defined in

packages/account-web-vault/dist/vault-account.d.ts:43

___

### keyring

▸ **keyring**(`contextName`): `Promise`<[`default`](verida_web_helpers._internal_.default-1.md)\>

Generate a keyring for this user for a given storage context.

#### Parameters

| Name | Type |
| :------ | :------ |
| `contextName` | `string` |

#### Returns

`Promise`<[`default`](verida_web_helpers._internal_.default-1.md)\>

#### Overrides

[default](verida_web_helpers._internal_.default.md).[keyring](verida_web_helpers._internal_.default.md#keyring)

#### Defined in

packages/account-web-vault/dist/vault-account.d.ts:23

___

### linkStorage

▸ **linkStorage**(`storageConfig`): `Promise`<`boolean`\>

Link storage to this user

#### Parameters

| Name | Type |
| :------ | :------ |
| `storageConfig` | [`SecureContextConfig`](../interfaces/verida_web_helpers._internal_.SecureContextConfig.md) |

#### Returns

`Promise`<`boolean`\>

#### Overrides

[default](verida_web_helpers._internal_.default.md).[linkStorage](verida_web_helpers._internal_.default.md#linkstorage)

#### Defined in

packages/account-web-vault/dist/vault-account.d.ts:34

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

[default](verida_web_helpers._internal_.default.md).[linkStorageContextService](verida_web_helpers._internal_.default.md#linkstoragecontextservice)

#### Defined in

packages/account/dist/account.d.ts:36

___

### loadFromSession

▸ **loadFromSession**(`contextName`): `Promise`<`undefined` \| [`SecureContextConfig`](../interfaces/verida_web_helpers._internal_.SecureContextConfig.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `contextName` | `string` |

#### Returns

`Promise`<`undefined` \| [`SecureContextConfig`](../interfaces/verida_web_helpers._internal_.SecureContextConfig.md)\>

#### Defined in

packages/account-web-vault/dist/vault-account.d.ts:22

___

### setAccountConfig

▸ **setAccountConfig**(`accountConfig`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `accountConfig` | [`AccountConfig`](../interfaces/verida_web_helpers._internal_.AccountConfig.md) |

#### Returns

`void`

#### Overrides

[default](verida_web_helpers._internal_.default.md).[setAccountConfig](verida_web_helpers._internal_.default.md#setaccountconfig)

#### Defined in

packages/account-web-vault/dist/vault-account.d.ts:14

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

packages/account-web-vault/dist/vault-account.d.ts:28

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

[default](verida_web_helpers._internal_.default.md).[sign](verida_web_helpers._internal_.default.md#sign)

#### Defined in

packages/account-web-vault/dist/vault-account.d.ts:26

___

### storageConfig

▸ **storageConfig**(`contextName`, `forceCreate?`): `Promise`<`undefined` \| [`SecureContextConfig`](../interfaces/verida_web_helpers._internal_.SecureContextConfig.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `contextName` | `string` |
| `forceCreate?` | `boolean` |

#### Returns

`Promise`<`undefined` \| [`SecureContextConfig`](../interfaces/verida_web_helpers._internal_.SecureContextConfig.md)\>

#### Overrides

[default](verida_web_helpers._internal_.default.md).[storageConfig](verida_web_helpers._internal_.default.md#storageconfig)

#### Defined in

packages/account-web-vault/dist/vault-account.d.ts:25

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

[default](verida_web_helpers._internal_.default.md).[unlinkStorage](verida_web_helpers._internal_.default.md#unlinkstorage)

#### Defined in

packages/account-web-vault/dist/vault-account.d.ts:40
