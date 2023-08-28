[root](../README.md) / [Modules](../modules.md) / [@verida/account-node](../modules/verida_account_node.md) / AutoAccount

# Class: AutoAccount

[@verida/account-node](../modules/verida_account_node.md).AutoAccount

An Authenticator that automatically signs everything

## Hierarchy

- [`default`](verida_account_node._internal_.default.md)

  ↳ **`AutoAccount`**

  ↳↳ [`LimitedAccount`](verida_account_node.LimitedAccount.md)

## Table of contents

### Constructors

- [constructor](verida_account_node.AutoAccount.md#constructor)

### Properties

- [accountConfig](verida_account_node.AutoAccount.md#accountconfig)
- [autoConfig](verida_account_node.AutoAccount.md#autoconfig)
- [contextAuths](verida_account_node.AutoAccount.md#contextauths)
- [defaultNodes](verida_account_node.AutoAccount.md#defaultnodes)
- [didClient](verida_account_node.AutoAccount.md#didclient)
- [wallet](verida_account_node.AutoAccount.md#wallet)

### Methods

- [createDidJwt](verida_account_node.AutoAccount.md#createdidjwt)
- [did](verida_account_node.AutoAccount.md#did)
- [disconnect](verida_account_node.AutoAccount.md#disconnect)
- [disconnectDevice](verida_account_node.AutoAccount.md#disconnectdevice)
- [ensureAuthenticated](verida_account_node.AutoAccount.md#ensureauthenticated)
- [getAccountConfig](verida_account_node.AutoAccount.md#getaccountconfig)
- [getAuthContext](verida_account_node.AutoAccount.md#getauthcontext)
- [getDIDClient](verida_account_node.AutoAccount.md#getdidclient)
- [getDefaultNodes](verida_account_node.AutoAccount.md#getdefaultnodes)
- [getDidClient](verida_account_node.AutoAccount.md#getdidclient)
- [keyring](verida_account_node.AutoAccount.md#keyring)
- [linkStorage](verida_account_node.AutoAccount.md#linkstorage)
- [linkStorageContextService](verida_account_node.AutoAccount.md#linkstoragecontextservice)
- [loadDefaultStorageNodes](verida_account_node.AutoAccount.md#loaddefaultstoragenodes)
- [setAccountConfig](verida_account_node.AutoAccount.md#setaccountconfig)
- [sign](verida_account_node.AutoAccount.md#sign)
- [storageConfig](verida_account_node.AutoAccount.md#storageconfig)
- [unlinkStorage](verida_account_node.AutoAccount.md#unlinkstorage)

## Constructors

### constructor

• **new AutoAccount**(`autoConfig`, `accountConfig?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `autoConfig` | [`AccountNodeConfig`](../interfaces/verida_account_node._internal_.AccountNodeConfig.md) |
| `accountConfig?` | [`AccountConfig`](../interfaces/verida_account_node._internal_.AccountConfig.md) |

#### Overrides

[default](verida_account_node._internal_.default.md).[constructor](verida_account_node._internal_.default.md#constructor)

#### Defined in

[packages/account-node/src/auto.ts:25](https://github.com/verida/verida-js/blob/a690f60/packages/account-node/src/auto.ts#L25)

## Properties

### accountConfig

• `Protected` `Optional` **accountConfig**: [`AccountConfig`](../interfaces/verida_account_node._internal_.AccountConfig.md)

#### Defined in

[packages/account-node/src/auto.ts:20](https://github.com/verida/verida-js/blob/a690f60/packages/account-node/src/auto.ts#L20)

___

### autoConfig

• `Protected` **autoConfig**: [`AccountNodeConfig`](../interfaces/verida_account_node._internal_.AccountNodeConfig.md)

#### Defined in

[packages/account-node/src/auto.ts:21](https://github.com/verida/verida-js/blob/a690f60/packages/account-node/src/auto.ts#L21)

___

### contextAuths

• `Protected` **contextAuths**: [`Record`](../modules/verida_account_node._internal_.md#record)<`string`, [`Record`](../modules/verida_account_node._internal_.md#record)<`string`, [`VeridaDatabaseAuthType`](verida_account_node.VeridaDatabaseAuthType.md)\>\> = `{}`

#### Defined in

[packages/account-node/src/auto.ts:22](https://github.com/verida/verida-js/blob/a690f60/packages/account-node/src/auto.ts#L22)

___

### defaultNodes

• `Protected` **defaultNodes**: `string`[] = `[]`

#### Defined in

[packages/account-node/src/auto.ts:23](https://github.com/verida/verida-js/blob/a690f60/packages/account-node/src/auto.ts#L23)

___

### didClient

• `Private` **didClient**: [`DIDClient`](verida_account_node._internal_.DIDClient.md)

#### Defined in

[packages/account-node/src/auto.ts:17](https://github.com/verida/verida-js/blob/a690f60/packages/account-node/src/auto.ts#L17)

___

### wallet

• `Private` **wallet**: [`default`](verida_account_node._internal_.default-1.md)

#### Defined in

[packages/account-node/src/auto.ts:19](https://github.com/verida/verida-js/blob/a690f60/packages/account-node/src/auto.ts#L19)

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

[default](verida_account_node._internal_.default.md).[createDidJwt](verida_account_node._internal_.default.md#createdidjwt)

#### Defined in

packages/account/dist/account.d.ts:42

___

### did

▸ **did**(): `Promise`<`string`\>

Get the DID of the current user

#### Returns

`Promise`<`string`\>

#### Overrides

[default](verida_account_node._internal_.default.md).[did](verida_account_node._internal_.default.md#did)

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

[default](verida_account_node._internal_.default.md).[disconnect](verida_account_node._internal_.default.md#disconnect)

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

#### Overrides

[default](verida_account_node._internal_.default.md).[disconnectDevice](verida_account_node._internal_.default.md#disconnectdevice)

#### Defined in

[packages/account-node/src/auto.ts:234](https://github.com/verida/verida-js/blob/a690f60/packages/account-node/src/auto.ts#L234)

___

### ensureAuthenticated

▸ `Private` **ensureAuthenticated**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/account-node/src/auto.ts:250](https://github.com/verida/verida-js/blob/a690f60/packages/account-node/src/auto.ts#L250)

___

### getAccountConfig

▸ **getAccountConfig**(): `undefined` \| [`AccountConfig`](../interfaces/verida_account_node._internal_.AccountConfig.md)

#### Returns

`undefined` \| [`AccountConfig`](../interfaces/verida_account_node._internal_.AccountConfig.md)

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
| `authConfig` | [`VeridaDatabaseAuthTypeConfig`](../interfaces/verida_account_node._internal_.VeridaDatabaseAuthTypeConfig.md) | `undefined` |
| `authType` | `string` | `"database"` |

#### Returns

`Promise`<[`AuthContext`](../interfaces/verida_account_node._internal_.AuthContext.md)\>

#### Overrides

[default](verida_account_node._internal_.default.md).[getAuthContext](verida_account_node._internal_.default.md#getauthcontext)

#### Defined in

[packages/account-node/src/auto.ts:199](https://github.com/verida/verida-js/blob/a690f60/packages/account-node/src/auto.ts#L199)

___

### getDIDClient

▸ **getDIDClient**(): [`DIDClient`](verida_account_node._internal_.DIDClient.md)

#### Returns

[`DIDClient`](verida_account_node._internal_.DIDClient.md)

#### Defined in

[packages/account-node/src/auto.ts:37](https://github.com/verida/verida-js/blob/a690f60/packages/account-node/src/auto.ts#L37)

___

### getDefaultNodes

▸ `Private` **getDefaultNodes**(`countryCode?`, `numNodes?`, `config?`): `Promise`<[`ServiceEndpoint`](../modules/verida_account_node._internal_.md#serviceendpoint)[]\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `countryCode?` | `string` | `undefined` |
| `numNodes` | `number` | `3` |
| `config` | [`NodeSelectorParams`](../interfaces/verida_account_node.NodeSelectorParams.md) | `{}` |

#### Returns

`Promise`<[`ServiceEndpoint`](../modules/verida_account_node._internal_.md#serviceendpoint)[]\>

#### Defined in

[packages/account-node/src/auto.ts:85](https://github.com/verida/verida-js/blob/a690f60/packages/account-node/src/auto.ts#L85)

___

### getDidClient

▸ **getDidClient**(): [`DIDClient`](verida_account_node._internal_.DIDClient.md)

#### Returns

[`DIDClient`](verida_account_node._internal_.DIDClient.md)

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

#### Overrides

[default](verida_account_node._internal_.default.md).[keyring](verida_account_node._internal_.default.md#keyring)

#### Defined in

[packages/account-node/src/auto.ts:49](https://github.com/verida/verida-js/blob/a690f60/packages/account-node/src/auto.ts#L49)

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

#### Overrides

[default](verida_account_node._internal_.default.md).[linkStorage](verida_account_node._internal_.default.md#linkstorage)

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

#### Overrides

[default](verida_account_node._internal_.default.md).[linkStorageContextService](verida_account_node._internal_.default.md#linkstoragecontextservice)

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

#### Overrides

[default](verida_account_node._internal_.default.md).[setAccountConfig](verida_account_node._internal_.default.md#setaccountconfig)

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

#### Overrides

[default](verida_account_node._internal_.default.md).[sign](verida_account_node._internal_.default.md#sign)

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

#### Overrides

[default](verida_account_node._internal_.default.md).[storageConfig](verida_account_node._internal_.default.md#storageconfig)

#### Defined in

[packages/account-node/src/auto.ts:101](https://github.com/verida/verida-js/blob/a690f60/packages/account-node/src/auto.ts#L101)

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

[default](verida_account_node._internal_.default.md).[unlinkStorage](verida_account_node._internal_.default.md#unlinkstorage)

#### Defined in

[packages/account-node/src/auto.ts:158](https://github.com/verida/verida-js/blob/a690f60/packages/account-node/src/auto.ts#L158)
