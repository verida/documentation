[root](../README.md) / [Modules](../modules.md) / [@verida/account-node](../modules/verida_account_node.md) / AuthContextAccount

# Class: AuthContextAccount

[@verida/account-node](../modules/verida_account_node.md).AuthContextAccount

A NodeJs account that only signs messages for a limited list of contexts.

Used for testing.

## Hierarchy

- [`LimitedAccount`](verida_account_node.LimitedAccount.md)

  ↳ **`AuthContextAccount`**

## Table of contents

### Constructors

- [constructor](verida_account_node.AuthContextAccount.md#constructor)

### Properties

- [accountConfig](verida_account_node.AuthContextAccount.md#accountconfig)
- [autoConfig](verida_account_node.AuthContextAccount.md#autoconfig)
- [contextAuths](verida_account_node.AuthContextAccount.md#contextauths)
- [defaultNodes](verida_account_node.AuthContextAccount.md#defaultnodes)

### Methods

- [createDidJwt](verida_account_node.AuthContextAccount.md#createdidjwt)
- [did](verida_account_node.AuthContextAccount.md#did)
- [disconnect](verida_account_node.AuthContextAccount.md#disconnect)
- [disconnectDevice](verida_account_node.AuthContextAccount.md#disconnectdevice)
- [getAccountConfig](verida_account_node.AuthContextAccount.md#getaccountconfig)
- [getAuthContext](verida_account_node.AuthContextAccount.md#getauthcontext)
- [getDIDClient](verida_account_node.AuthContextAccount.md#getdidclient)
- [getDidClient](verida_account_node.AuthContextAccount.md#getdidclient)
- [keyring](verida_account_node.AuthContextAccount.md#keyring)
- [linkStorage](verida_account_node.AuthContextAccount.md#linkstorage)
- [linkStorageContextService](verida_account_node.AuthContextAccount.md#linkstoragecontextservice)
- [loadDefaultStorageNodes](verida_account_node.AuthContextAccount.md#loaddefaultstoragenodes)
- [setAccountConfig](verida_account_node.AuthContextAccount.md#setaccountconfig)
- [sign](verida_account_node.AuthContextAccount.md#sign)
- [storageConfig](verida_account_node.AuthContextAccount.md#storageconfig)
- [unlinkStorage](verida_account_node.AuthContextAccount.md#unlinkstorage)

## Constructors

### constructor

• **new AuthContextAccount**(`autoConfig`, `signingContext`, `authContext`, `accountConfig?`)

This will need to be refactored when more db engines are supported.

We are assuming we are dealing with a Verida Database Auth Context and then injecting
a known context object into the in memory database.

This is used for testing, by setting invalid access / request tokens in unit tests

#### Parameters

| Name | Type |
| :------ | :------ |
| `autoConfig` | [`AccountNodeConfig`](../interfaces/verida_account_node._internal_.AccountNodeConfig.md) |
| `signingContext` | `string` |
| `authContext` | [`VeridaDatabaseAuthContext`](../interfaces/verida_account_node._internal_.VeridaDatabaseAuthContext.md) |
| `accountConfig?` | [`AccountConfig`](../interfaces/verida_account_node._internal_.AccountConfig.md) |

#### Overrides

[LimitedAccount](verida_account_node.LimitedAccount.md).[constructor](verida_account_node.LimitedAccount.md#constructor)

#### Defined in

[packages/account-node/src/authcontext.ts:25](https://github.com/verida/verida-js/blob/a690f60/packages/account-node/src/authcontext.ts#L25)

## Properties

### accountConfig

• `Protected` `Optional` **accountConfig**: [`AccountConfig`](../interfaces/verida_account_node._internal_.AccountConfig.md)

#### Inherited from

[LimitedAccount](verida_account_node.LimitedAccount.md).[accountConfig](verida_account_node.LimitedAccount.md#accountconfig)

#### Defined in

[packages/account-node/src/auto.ts:20](https://github.com/verida/verida-js/blob/a690f60/packages/account-node/src/auto.ts#L20)

___

### autoConfig

• `Protected` **autoConfig**: [`AccountNodeConfig`](../interfaces/verida_account_node._internal_.AccountNodeConfig.md)

#### Inherited from

[LimitedAccount](verida_account_node.LimitedAccount.md).[autoConfig](verida_account_node.LimitedAccount.md#autoconfig)

#### Defined in

[packages/account-node/src/auto.ts:21](https://github.com/verida/verida-js/blob/a690f60/packages/account-node/src/auto.ts#L21)

___

### contextAuths

• `Protected` **contextAuths**: [`Record`](../modules/verida_account_node._internal_.md#record)<`string`, [`Record`](../modules/verida_account_node._internal_.md#record)<`string`, [`VeridaDatabaseAuthType`](verida_account_node.VeridaDatabaseAuthType.md)\>\> = `{}`

#### Inherited from

[LimitedAccount](verida_account_node.LimitedAccount.md).[contextAuths](verida_account_node.LimitedAccount.md#contextauths)

#### Defined in

[packages/account-node/src/auto.ts:22](https://github.com/verida/verida-js/blob/a690f60/packages/account-node/src/auto.ts#L22)

___

### defaultNodes

• `Protected` **defaultNodes**: `string`[] = `[]`

#### Inherited from

[LimitedAccount](verida_account_node.LimitedAccount.md).[defaultNodes](verida_account_node.LimitedAccount.md#defaultnodes)

#### Defined in

[packages/account-node/src/auto.ts:23](https://github.com/verida/verida-js/blob/a690f60/packages/account-node/src/auto.ts#L23)

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

#### Inherited from

[LimitedAccount](verida_account_node.LimitedAccount.md).[createDidJwt](verida_account_node.LimitedAccount.md#createdidjwt)

#### Defined in

packages/account/dist/account.d.ts:42

___

### did

▸ **did**(): `Promise`<`string`\>

Get the DID of the current user

#### Returns

`Promise`<`string`\>

#### Inherited from

[LimitedAccount](verida_account_node.LimitedAccount.md).[did](verida_account_node.LimitedAccount.md#did)

#### Defined in

[packages/account-node/src/auto.ts:62](https://github.com/verida/verida-js/blob/a690f60/packages/account-node/src/auto.ts#L62)

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

#### Inherited from

[LimitedAccount](verida_account_node.LimitedAccount.md).[disconnect](verida_account_node.LimitedAccount.md#disconnect)

#### Defined in

packages/account/dist/account.d.ts:48

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

#### Inherited from

[LimitedAccount](verida_account_node.LimitedAccount.md).[disconnectDevice](verida_account_node.LimitedAccount.md#disconnectdevice)

#### Defined in

[packages/account-node/src/auto.ts:234](https://github.com/verida/verida-js/blob/a690f60/packages/account-node/src/auto.ts#L234)

___

### getAccountConfig

▸ **getAccountConfig**(): `undefined` \| [`AccountConfig`](../interfaces/verida_account_node._internal_.AccountConfig.md)

#### Returns

`undefined` \| [`AccountConfig`](../interfaces/verida_account_node._internal_.AccountConfig.md)

#### Inherited from

[LimitedAccount](verida_account_node.LimitedAccount.md).[getAccountConfig](verida_account_node.LimitedAccount.md#getaccountconfig)

#### Defined in

[packages/account-node/src/auto.ts:45](https://github.com/verida/verida-js/blob/a690f60/packages/account-node/src/auto.ts#L45)

___

### getAuthContext

▸ **getAuthContext**(`contextName`, `contextConfig`, `authConfig`, `authType?`): `Promise`<[`AuthContext`](../interfaces/verida_account_node._internal_.AuthContext.md)\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `contextName` | `string` | `undefined` |
| `contextConfig` | [`SecureContextConfig`](../interfaces/verida_account_node._internal_.SecureContextConfig.md) | `undefined` |
| `authConfig` | [`AuthTypeConfig`](../interfaces/verida_account_node._internal_.AuthTypeConfig.md) | `undefined` |
| `authType` | `string` | `"database"` |

#### Returns

`Promise`<[`AuthContext`](../interfaces/verida_account_node._internal_.AuthContext.md)\>

#### Overrides

[LimitedAccount](verida_account_node.LimitedAccount.md).[getAuthContext](verida_account_node.LimitedAccount.md#getauthcontext)

#### Defined in

[packages/account-node/src/authcontext.ts:41](https://github.com/verida/verida-js/blob/a690f60/packages/account-node/src/authcontext.ts#L41)

___

### getDIDClient

▸ **getDIDClient**(): [`DIDClient`](verida_account_node._internal_.DIDClient.md)

#### Returns

[`DIDClient`](verida_account_node._internal_.DIDClient.md)

#### Inherited from

[LimitedAccount](verida_account_node.LimitedAccount.md).[getDIDClient](verida_account_node.LimitedAccount.md#getdidclient)

#### Defined in

[packages/account-node/src/auto.ts:37](https://github.com/verida/verida-js/blob/a690f60/packages/account-node/src/auto.ts#L37)

___

### getDidClient

▸ **getDidClient**(): [`DIDClient`](verida_account_node._internal_.DIDClient.md)

#### Returns

[`DIDClient`](verida_account_node._internal_.DIDClient.md)

#### Inherited from

[LimitedAccount](verida_account_node.LimitedAccount.md).[getDidClient](verida_account_node.LimitedAccount.md#getdidclient)

#### Defined in

[packages/account-node/src/auto.ts:194](https://github.com/verida/verida-js/blob/a690f60/packages/account-node/src/auto.ts#L194)

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

#### Inherited from

[LimitedAccount](verida_account_node.LimitedAccount.md).[keyring](verida_account_node.LimitedAccount.md#keyring)

#### Defined in

[packages/account-node/src/limited.ts:19](https://github.com/verida/verida-js/blob/a690f60/packages/account-node/src/limited.ts#L19)

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

#### Inherited from

[LimitedAccount](verida_account_node.LimitedAccount.md).[linkStorage](verida_account_node.LimitedAccount.md#linkstorage)

#### Defined in

[packages/account-node/src/auto.ts:138](https://github.com/verida/verida-js/blob/a690f60/packages/account-node/src/auto.ts#L138)

___

### linkStorageContextService

▸ **linkStorageContextService**(`contextName`, `endpointType`, `serverType`, `endpointUris`): `Promise`<`boolean`\>

Link storage context service endpoint

#### Parameters

| Name | Type |
| :------ | :------ |
| `contextName` | `string` |
| `endpointType` | [`SecureContextEndpointType`](../enums/verida_account_node._internal_.SecureContextEndpointType.md) |
| `serverType` | `string` |
| `endpointUris` | `string`[] |

#### Returns

`Promise`<`boolean`\>

#### Inherited from

[LimitedAccount](verida_account_node.LimitedAccount.md).[linkStorageContextService](verida_account_node.LimitedAccount.md#linkstoragecontextservice)

#### Defined in

[packages/account-node/src/auto.ts:180](https://github.com/verida/verida-js/blob/a690f60/packages/account-node/src/auto.ts#L180)

___

### loadDefaultStorageNodes

▸ **loadDefaultStorageNodes**(`countryCode?`, `numNodes?`, `config?`): `Promise`<`void`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `countryCode?` | `string` | `undefined` |
| `numNodes` | `number` | `3` |
| `config` | [`NodeSelectorParams`](../interfaces/verida_account_node.NodeSelectorParams.md) | `{}` |

#### Returns

`Promise`<`void`\>

#### Inherited from

[LimitedAccount](verida_account_node.LimitedAccount.md).[loadDefaultStorageNodes](verida_account_node.LimitedAccount.md#loaddefaultstoragenodes)

#### Defined in

[packages/account-node/src/auto.ts:66](https://github.com/verida/verida-js/blob/a690f60/packages/account-node/src/auto.ts#L66)

___

### setAccountConfig

▸ **setAccountConfig**(`accountConfig`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `accountConfig` | [`AccountConfig`](../interfaces/verida_account_node._internal_.AccountConfig.md) |

#### Returns

`void`

#### Inherited from

[LimitedAccount](verida_account_node.LimitedAccount.md).[setAccountConfig](verida_account_node.LimitedAccount.md#setaccountconfig)

#### Defined in

[packages/account-node/src/auto.ts:41](https://github.com/verida/verida-js/blob/a690f60/packages/account-node/src/auto.ts#L41)

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

#### Inherited from

[LimitedAccount](verida_account_node.LimitedAccount.md).[sign](verida_account_node.LimitedAccount.md#sign)

#### Defined in

[packages/account-node/src/auto.ts:58](https://github.com/verida/verida-js/blob/a690f60/packages/account-node/src/auto.ts#L58)

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

#### Inherited from

[LimitedAccount](verida_account_node.LimitedAccount.md).[storageConfig](verida_account_node.LimitedAccount.md#storageconfig)

#### Defined in

[packages/account-node/src/limited.ts:27](https://github.com/verida/verida-js/blob/a690f60/packages/account-node/src/limited.ts#L27)

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

#### Inherited from

[LimitedAccount](verida_account_node.LimitedAccount.md).[unlinkStorage](verida_account_node.LimitedAccount.md#unlinkstorage)

#### Defined in

[packages/account-node/src/limited.ts:35](https://github.com/verida/verida-js/blob/a690f60/packages/account-node/src/limited.ts#L35)
