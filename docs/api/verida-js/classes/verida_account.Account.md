[root](../README.md) / [Modules](../modules.md) / [@verida/account](../modules/verida_account.md) / Account

# Class: Account

[@verida/account](../modules/verida_account.md).Account

An Authenticator that automatically signs everything

## Implements

- [`IAccount`](../interfaces/verida_account._internal_.IAccount.md)

## Table of contents

### Constructors

- [constructor](verida_account.Account.md#constructor)

### Methods

- [createDidJwt](verida_account.Account.md#createdidjwt)
- [did](verida_account.Account.md#did)
- [disconnect](verida_account.Account.md#disconnect)
- [disconnectDevice](verida_account.Account.md#disconnectdevice)
- [getAuthContext](verida_account.Account.md#getauthcontext)
- [keyring](verida_account.Account.md#keyring)
- [linkStorage](verida_account.Account.md#linkstorage)
- [linkStorageContextService](verida_account.Account.md#linkstoragecontextservice)
- [setAccountConfig](verida_account.Account.md#setaccountconfig)
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

#### Implementation of

[IAccount](../interfaces/verida_account._internal_.IAccount.md).[createDidJwt](../interfaces/verida_account._internal_.IAccount.md#createdidjwt)

#### Defined in

[packages/account/src/account.ts:71](https://github.com/verida/verida-js/blob/032961c/packages/account/src/account.ts#L71)

___

### did

▸ **did**(): `Promise`<`string`\>

Get the DID of the current user

#### Returns

`Promise`<`string`\>

#### Implementation of

[IAccount](../interfaces/verida_account._internal_.IAccount.md).[did](../interfaces/verida_account._internal_.IAccount.md#did)

#### Defined in

[packages/account/src/account.ts:33](https://github.com/verida/verida-js/blob/032961c/packages/account/src/account.ts#L33)

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

#### Implementation of

[IAccount](../interfaces/verida_account._internal_.IAccount.md).[disconnect](../interfaces/verida_account._internal_.IAccount.md#disconnect)

#### Defined in

[packages/account/src/account.ts:102](https://github.com/verida/verida-js/blob/032961c/packages/account/src/account.ts#L102)

___

### disconnectDevice

▸ **disconnectDevice**(`contextName`, `deviceId?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `contextName` | `string` | `undefined` |
| `deviceId` | `string` | `"Test device"` |

#### Returns

`Promise`<`boolean`\>

#### Implementation of

[IAccount](../interfaces/verida_account._internal_.IAccount.md).[disconnectDevice](../interfaces/verida_account._internal_.IAccount.md#disconnectdevice)

#### Defined in

[packages/account/src/account.ts:112](https://github.com/verida/verida-js/blob/032961c/packages/account/src/account.ts#L112)

___

### getAuthContext

▸ **getAuthContext**(`contextName`, `contextConfig`, `authConfig?`, `authType?`): `Promise`<[`AuthContext`](../interfaces/verida_account._internal_.AuthContext.md)\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `contextName` | `string` | `undefined` |
| `contextConfig` | [`SecureContextConfig`](../interfaces/verida_account._internal_.SecureContextConfig.md) | `undefined` |
| `authConfig` | [`AuthTypeConfig`](../interfaces/verida_account._internal_.AuthTypeConfig.md) | `undefined` |
| `authType` | `string` | `"database"` |

#### Returns

`Promise`<[`AuthContext`](../interfaces/verida_account._internal_.AuthContext.md)\>

#### Implementation of

[IAccount](../interfaces/verida_account._internal_.IAccount.md).[getAuthContext](../interfaces/verida_account._internal_.IAccount.md#getauthcontext)

#### Defined in

[packages/account/src/account.ts:106](https://github.com/verida/verida-js/blob/032961c/packages/account/src/account.ts#L106)

___

### keyring

▸ **keyring**(`contextName`): `Promise`<[`default`](verida_account._internal_.default.md)\>

Generate a keyring for this user for a given storage context.

#### Parameters

| Name | Type |
| :------ | :------ |
| `contextName` | `string` |

#### Returns

`Promise`<[`default`](verida_account._internal_.default.md)\>

#### Implementation of

[IAccount](../interfaces/verida_account._internal_.IAccount.md).[keyring](../interfaces/verida_account._internal_.IAccount.md#keyring)

#### Defined in

[packages/account/src/account.ts:17](https://github.com/verida/verida-js/blob/032961c/packages/account/src/account.ts#L17)

___

### linkStorage

▸ **linkStorage**(`storageConfig`): `Promise`<`boolean`\>

Link storage to this user

#### Parameters

| Name | Type |
| :------ | :------ |
| `storageConfig` | [`SecureContextConfig`](../interfaces/verida_account._internal_.SecureContextConfig.md) |

#### Returns

`Promise`<`boolean`\>

#### Implementation of

[IAccount](../interfaces/verida_account._internal_.IAccount.md).[linkStorage](../interfaces/verida_account._internal_.IAccount.md#linkstorage)

#### Defined in

[packages/account/src/account.ts:42](https://github.com/verida/verida-js/blob/032961c/packages/account/src/account.ts#L42)

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

#### Implementation of

[IAccount](../interfaces/verida_account._internal_.IAccount.md).[linkStorageContextService](../interfaces/verida_account._internal_.IAccount.md#linkstoragecontextservice)

#### Defined in

[packages/account/src/account.ts:59](https://github.com/verida/verida-js/blob/032961c/packages/account/src/account.ts#L59)

___

### setAccountConfig

▸ **setAccountConfig**(`accountConfig`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `accountConfig` | [`AccountConfig`](../interfaces/verida_account._internal_.AccountConfig.md) |

#### Returns

`void`

#### Implementation of

[IAccount](../interfaces/verida_account._internal_.IAccount.md).[setAccountConfig](../interfaces/verida_account._internal_.IAccount.md#setaccountconfig)

#### Defined in

[packages/account/src/account.ts:63](https://github.com/verida/verida-js/blob/032961c/packages/account/src/account.ts#L63)

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

#### Implementation of

[IAccount](../interfaces/verida_account._internal_.IAccount.md).[sign](../interfaces/verida_account._internal_.IAccount.md#sign)

#### Defined in

[packages/account/src/account.ts:26](https://github.com/verida/verida-js/blob/032961c/packages/account/src/account.ts#L26)

___

### storageConfig

▸ **storageConfig**(`contextName`, `forceCreate?`): `Promise`<`undefined` \| [`SecureContextConfig`](../interfaces/verida_account._internal_.SecureContextConfig.md)\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `contextName` | `string` | `undefined` |
| `forceCreate` | `boolean` | `false` |

#### Returns

`Promise`<`undefined` \| [`SecureContextConfig`](../interfaces/verida_account._internal_.SecureContextConfig.md)\>

#### Implementation of

[IAccount](../interfaces/verida_account._internal_.IAccount.md).[storageConfig](../interfaces/verida_account._internal_.IAccount.md#storageconfig)

#### Defined in

[packages/account/src/account.ts:55](https://github.com/verida/verida-js/blob/032961c/packages/account/src/account.ts#L55)

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

#### Implementation of

[IAccount](../interfaces/verida_account._internal_.IAccount.md).[unlinkStorage](../interfaces/verida_account._internal_.IAccount.md#unlinkstorage)

#### Defined in

[packages/account/src/account.ts:51](https://github.com/verida/verida-js/blob/032961c/packages/account/src/account.ts#L51)
