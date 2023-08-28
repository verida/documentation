[root](../README.md) / [Modules](../modules.md) / [@verida/account-node](../modules/verida_account_node.md) / [<internal\>](../modules/verida_account_node._internal_.md) / default

# Class: default

[@verida/account-node](../modules/verida_account_node.md).[<internal\>](../modules/verida_account_node._internal_.md).default

An Authenticator that automatically signs everything

## Hierarchy

- **`default`**

  ↳ [`AutoAccount`](verida_account_node.AutoAccount.md)

## Implements

- [`IAccount`](../interfaces/verida_account_node._internal_.IAccount.md)

## Table of contents

### Constructors

- [constructor](verida_account_node._internal_.default.md#constructor)

### Methods

- [createDidJwt](verida_account_node._internal_.default.md#createdidjwt)
- [did](verida_account_node._internal_.default.md#did)
- [disconnect](verida_account_node._internal_.default.md#disconnect)
- [disconnectDevice](verida_account_node._internal_.default.md#disconnectdevice)
- [getAuthContext](verida_account_node._internal_.default.md#getauthcontext)
- [keyring](verida_account_node._internal_.default.md#keyring)
- [linkStorage](verida_account_node._internal_.default.md#linkstorage)
- [linkStorageContextService](verida_account_node._internal_.default.md#linkstoragecontextservice)
- [setAccountConfig](verida_account_node._internal_.default.md#setaccountconfig)
- [sign](verida_account_node._internal_.default.md#sign)
- [storageConfig](verida_account_node._internal_.default.md#storageconfig)
- [unlinkStorage](verida_account_node._internal_.default.md#unlinkstorage)

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

#### Implementation of

[IAccount](../interfaces/verida_account_node._internal_.IAccount.md).[createDidJwt](../interfaces/verida_account_node._internal_.IAccount.md#createdidjwt)

#### Defined in

packages/account/dist/account.d.ts:42

___

### did

▸ **did**(): `Promise`<`string`\>

Get the DID of the current user

#### Returns

`Promise`<`string`\>

#### Implementation of

[IAccount](../interfaces/verida_account_node._internal_.IAccount.md).[did](../interfaces/verida_account_node._internal_.IAccount.md#did)

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

#### Implementation of

[IAccount](../interfaces/verida_account_node._internal_.IAccount.md).[disconnect](../interfaces/verida_account_node._internal_.IAccount.md#disconnect)

#### Defined in

packages/account/dist/account.d.ts:48

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

#### Implementation of

[IAccount](../interfaces/verida_account_node._internal_.IAccount.md).[disconnectDevice](../interfaces/verida_account_node._internal_.IAccount.md#disconnectdevice)

#### Defined in

packages/account/dist/account.d.ts:50

___

### getAuthContext

▸ **getAuthContext**(`contextName`, `contextConfig`, `authConfig?`, `authType?`): `Promise`<[`AuthContext`](../interfaces/verida_account_node._internal_.AuthContext.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `contextName` | `string` |
| `contextConfig` | [`SecureContextConfig`](../interfaces/verida_account_node._internal_.SecureContextConfig.md) |
| `authConfig?` | [`AuthTypeConfig`](../interfaces/verida_account_node._internal_.AuthTypeConfig.md) |
| `authType?` | `string` |

#### Returns

`Promise`<[`AuthContext`](../interfaces/verida_account_node._internal_.AuthContext.md)\>

#### Implementation of

[IAccount](../interfaces/verida_account_node._internal_.IAccount.md).[getAuthContext](../interfaces/verida_account_node._internal_.IAccount.md#getauthcontext)

#### Defined in

packages/account/dist/account.d.ts:49

___

### keyring

▸ **keyring**(`contextName`): `Promise`<[`default`](verida_account_node._internal_.default-2.md)\>

Generate a keyring for this user for a given storage context.

#### Parameters

| Name | Type |
| :------ | :------ |
| `contextName` | `string` |

#### Returns

`Promise`<[`default`](verida_account_node._internal_.default-2.md)\>

#### Implementation of

[IAccount](../interfaces/verida_account_node._internal_.IAccount.md).[keyring](../interfaces/verida_account_node._internal_.IAccount.md#keyring)

#### Defined in

packages/account/dist/account.d.ts:12

___

### linkStorage

▸ **linkStorage**(`storageConfig`): `Promise`<`boolean`\>

Link storage to this user

#### Parameters

| Name | Type |
| :------ | :------ |
| `storageConfig` | [`SecureContextConfig`](../interfaces/verida_account_node._internal_.SecureContextConfig.md) |

#### Returns

`Promise`<`boolean`\>

#### Implementation of

[IAccount](../interfaces/verida_account_node._internal_.IAccount.md).[linkStorage](../interfaces/verida_account_node._internal_.IAccount.md#linkstorage)

#### Defined in

packages/account/dist/account.d.ts:28

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

[IAccount](../interfaces/verida_account_node._internal_.IAccount.md).[linkStorageContextService](../interfaces/verida_account_node._internal_.IAccount.md#linkstoragecontextservice)

#### Defined in

packages/account/dist/account.d.ts:36

___

### setAccountConfig

▸ **setAccountConfig**(`accountConfig`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `accountConfig` | [`AccountConfig`](../interfaces/verida_account_node._internal_.AccountConfig.md) |

#### Returns

`void`

#### Implementation of

[IAccount](../interfaces/verida_account_node._internal_.IAccount.md).[setAccountConfig](../interfaces/verida_account_node._internal_.IAccount.md#setaccountconfig)

#### Defined in

packages/account/dist/account.d.ts:37

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

[IAccount](../interfaces/verida_account_node._internal_.IAccount.md).[sign](../interfaces/verida_account_node._internal_.IAccount.md#sign)

#### Defined in

packages/account/dist/account.d.ts:18

___

### storageConfig

▸ **storageConfig**(`contextName`, `forceCreate?`): `Promise`<`undefined` \| [`SecureContextConfig`](../interfaces/verida_account_node._internal_.SecureContextConfig.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `contextName` | `string` |
| `forceCreate?` | `boolean` |

#### Returns

`Promise`<`undefined` \| [`SecureContextConfig`](../interfaces/verida_account_node._internal_.SecureContextConfig.md)\>

#### Implementation of

[IAccount](../interfaces/verida_account_node._internal_.IAccount.md).[storageConfig](../interfaces/verida_account_node._internal_.IAccount.md#storageconfig)

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

#### Implementation of

[IAccount](../interfaces/verida_account_node._internal_.IAccount.md).[unlinkStorage](../interfaces/verida_account_node._internal_.IAccount.md#unlinkstorage)

#### Defined in

packages/account/dist/account.d.ts:34
