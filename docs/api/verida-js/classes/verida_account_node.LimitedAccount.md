[root](../README.md) / [Modules](../modules.md) / [@verida/account-node](../modules/verida_account_node.md) / LimitedAccount

# Class: LimitedAccount

[@verida/account-node](../modules/verida_account_node.md).LimitedAccount

A NodeJs account that only signs messages for a limited list of contexts.

Used for testing.

## Hierarchy

- [`AutoAccount`](verida_account_node.AutoAccount.md)

  ↳ **`LimitedAccount`**

  ↳↳ [`AuthContextAccount`](verida_account_node.AuthContextAccount.md)

## Table of contents

### Constructors

- [constructor](verida_account_node.LimitedAccount.md#constructor)

### Properties

- [accountConfig](verida_account_node.LimitedAccount.md#accountconfig)
- [autoConfig](verida_account_node.LimitedAccount.md#autoconfig)
- [contextAuths](verida_account_node.LimitedAccount.md#contextauths)
- [defaultNodes](verida_account_node.LimitedAccount.md#defaultnodes)
- [signingContexts](verida_account_node.LimitedAccount.md#signingcontexts)

### Methods

- [createDidJwt](verida_account_node.LimitedAccount.md#createdidjwt)
- [did](verida_account_node.LimitedAccount.md#did)
- [disconnect](verida_account_node.LimitedAccount.md#disconnect)
- [disconnectDevice](verida_account_node.LimitedAccount.md#disconnectdevice)
- [getAccountConfig](verida_account_node.LimitedAccount.md#getaccountconfig)
- [getAuthContext](verida_account_node.LimitedAccount.md#getauthcontext)
- [getDIDClient](verida_account_node.LimitedAccount.md#getdidclient)
- [getDidClient](verida_account_node.LimitedAccount.md#getdidclient)
- [keyring](verida_account_node.LimitedAccount.md#keyring)
- [linkStorage](verida_account_node.LimitedAccount.md#linkstorage)
- [linkStorageContextService](verida_account_node.LimitedAccount.md#linkstoragecontextservice)
- [loadDefaultStorageNodes](verida_account_node.LimitedAccount.md#loaddefaultstoragenodes)
- [setAccountConfig](verida_account_node.LimitedAccount.md#setaccountconfig)
- [sign](verida_account_node.LimitedAccount.md#sign)
- [storageConfig](verida_account_node.LimitedAccount.md#storageconfig)
- [unlinkStorage](verida_account_node.LimitedAccount.md#unlinkstorage)

## Constructors

### constructor

• **new LimitedAccount**(`autoConfig`, `accountConfig?`, `signingContexts?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `autoConfig` | [`AccountNodeConfig`](../interfaces/verida_account_node._internal_.AccountNodeConfig.md) | `undefined` |
| `accountConfig?` | [`AccountConfig`](../interfaces/verida_account_node._internal_.AccountConfig.md) | `undefined` |
| `signingContexts` | `string`[] | `[]` |

#### Overrides

[AutoAccount](verida_account_node.AutoAccount.md).[constructor](verida_account_node.AutoAccount.md#constructor)

#### Defined in

[packages/account-node/src/limited.ts:14](https://github.com/verida/verida-js/blob/a690f60/packages/account-node/src/limited.ts#L14)

## Properties

### accountConfig

• `Protected` `Optional` **accountConfig**: [`AccountConfig`](../interfaces/verida_account_node._internal_.AccountConfig.md)

#### Inherited from

[AutoAccount](verida_account_node.AutoAccount.md).[accountConfig](verida_account_node.AutoAccount.md#accountconfig)

#### Defined in

[packages/account-node/src/auto.ts:20](https://github.com/verida/verida-js/blob/a690f60/packages/account-node/src/auto.ts#L20)

___

### autoConfig

• `Protected` **autoConfig**: [`AccountNodeConfig`](../interfaces/verida_account_node._internal_.AccountNodeConfig.md)

#### Inherited from

[AutoAccount](verida_account_node.AutoAccount.md).[autoConfig](verida_account_node.AutoAccount.md#autoconfig)

#### Defined in

[packages/account-node/src/auto.ts:21](https://github.com/verida/verida-js/blob/a690f60/packages/account-node/src/auto.ts#L21)

___

### contextAuths

• `Protected` **contextAuths**: [`Record`](../modules/verida_account_node._internal_.md#record)<`string`, [`Record`](../modules/verida_account_node._internal_.md#record)<`string`, [`VeridaDatabaseAuthType`](verida_account_node.VeridaDatabaseAuthType.md)\>\> = `{}`

#### Inherited from

[AutoAccount](verida_account_node.AutoAccount.md).[contextAuths](verida_account_node.AutoAccount.md#contextauths)

#### Defined in

[packages/account-node/src/auto.ts:22](https://github.com/verida/verida-js/blob/a690f60/packages/account-node/src/auto.ts#L22)

___

### defaultNodes

• `Protected` **defaultNodes**: `string`[] = `[]`

#### Inherited from

[AutoAccount](verida_account_node.AutoAccount.md).[defaultNodes](verida_account_node.AutoAccount.md#defaultnodes)

#### Defined in

[packages/account-node/src/auto.ts:23](https://github.com/verida/verida-js/blob/a690f60/packages/account-node/src/auto.ts#L23)

___

### signingContexts

• `Private` **signingContexts**: `string`[]

#### Defined in

[packages/account-node/src/limited.ts:12](https://github.com/verida/verida-js/blob/a690f60/packages/account-node/src/limited.ts#L12)

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

[AutoAccount](verida_account_node.AutoAccount.md).[createDidJwt](verida_account_node.AutoAccount.md#createdidjwt)

#### Defined in

packages/account/dist/account.d.ts:42

___

### did

▸ **did**(): `Promise`<`string`\>

Get the DID of the current user

#### Returns

`Promise`<`string`\>

#### Inherited from

[AutoAccount](verida_account_node.AutoAccount.md).[did](verida_account_node.AutoAccount.md#did)

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

[AutoAccount](verida_account_node.AutoAccount.md).[disconnect](verida_account_node.AutoAccount.md#disconnect)

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

[AutoAccount](verida_account_node.AutoAccount.md).[disconnectDevice](verida_account_node.AutoAccount.md#disconnectdevice)

#### Defined in

[packages/account-node/src/auto.ts:234](https://github.com/verida/verida-js/blob/a690f60/packages/account-node/src/auto.ts#L234)

___

### getAccountConfig

▸ **getAccountConfig**(): `undefined` \| [`AccountConfig`](../interfaces/verida_account_node._internal_.AccountConfig.md)

#### Returns

`undefined` \| [`AccountConfig`](../interfaces/verida_account_node._internal_.AccountConfig.md)

#### Inherited from

[AutoAccount](verida_account_node.AutoAccount.md).[getAccountConfig](verida_account_node.AutoAccount.md#getaccountconfig)

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

#### Inherited from

[AutoAccount](verida_account_node.AutoAccount.md).[getAuthContext](verida_account_node.AutoAccount.md#getauthcontext)

#### Defined in

[packages/account-node/src/auto.ts:199](https://github.com/verida/verida-js/blob/a690f60/packages/account-node/src/auto.ts#L199)

___

### getDIDClient

▸ **getDIDClient**(): [`DIDClient`](verida_account_node._internal_.DIDClient.md)

#### Returns

[`DIDClient`](verida_account_node._internal_.DIDClient.md)

#### Inherited from

[AutoAccount](verida_account_node.AutoAccount.md).[getDIDClient](verida_account_node.AutoAccount.md#getdidclient)

#### Defined in

[packages/account-node/src/auto.ts:37](https://github.com/verida/verida-js/blob/a690f60/packages/account-node/src/auto.ts#L37)

___

### getDidClient

▸ **getDidClient**(): [`DIDClient`](verida_account_node._internal_.DIDClient.md)

#### Returns

[`DIDClient`](verida_account_node._internal_.DIDClient.md)

#### Inherited from

[AutoAccount](verida_account_node.AutoAccount.md).[getDidClient](verida_account_node.AutoAccount.md#getdidclient)

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

[AutoAccount](verida_account_node.AutoAccount.md).[keyring](verida_account_node.AutoAccount.md#keyring)

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

[AutoAccount](verida_account_node.AutoAccount.md).[linkStorage](verida_account_node.AutoAccount.md#linkstorage)

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

[AutoAccount](verida_account_node.AutoAccount.md).[linkStorageContextService](verida_account_node.AutoAccount.md#linkstoragecontextservice)

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

[AutoAccount](verida_account_node.AutoAccount.md).[loadDefaultStorageNodes](verida_account_node.AutoAccount.md#loaddefaultstoragenodes)

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

[AutoAccount](verida_account_node.AutoAccount.md).[setAccountConfig](verida_account_node.AutoAccount.md#setaccountconfig)

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

[AutoAccount](verida_account_node.AutoAccount.md).[sign](verida_account_node.AutoAccount.md#sign)

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

[AutoAccount](verida_account_node.AutoAccount.md).[storageConfig](verida_account_node.AutoAccount.md#storageconfig)

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

#### Overrides

[AutoAccount](verida_account_node.AutoAccount.md).[unlinkStorage](verida_account_node.AutoAccount.md#unlinkstorage)

#### Defined in

[packages/account-node/src/limited.ts:35](https://github.com/verida/verida-js/blob/a690f60/packages/account-node/src/limited.ts#L35)
