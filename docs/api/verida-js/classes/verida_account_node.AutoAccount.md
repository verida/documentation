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
- [didClient](verida_account_node.AutoAccount.md#didclient)
- [privateKey](verida_account_node.AutoAccount.md#privatekey)
- [wallet](verida_account_node.AutoAccount.md#wallet)

### Methods

- [createDidJwt](verida_account_node.AutoAccount.md#createdidjwt)
- [did](verida_account_node.AutoAccount.md#did)
- [disconnect](verida_account_node.AutoAccount.md#disconnect)
- [getDidClient](verida_account_node.AutoAccount.md#getdidclient)
- [keyring](verida_account_node.AutoAccount.md#keyring)
- [linkStorage](verida_account_node.AutoAccount.md#linkstorage)
- [linkStorageContextService](verida_account_node.AutoAccount.md#linkstoragecontextservice)
- [sign](verida_account_node.AutoAccount.md#sign)
- [storageConfig](verida_account_node.AutoAccount.md#storageconfig)
- [unlinkStorage](verida_account_node.AutoAccount.md#unlinkstorage)

## Constructors

### constructor

• **new AutoAccount**(`accountConfig`, `autoConfig`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `accountConfig` | [`AccountConfig`](../interfaces/verida_account_node._internal_.AccountConfig.md) |
| `autoConfig` | [`NodeAccountConfig`](../interfaces/verida_account_node._internal_.NodeAccountConfig.md) |

#### Overrides

[default](verida_account_node._internal_.default.md).[constructor](verida_account_node._internal_.default.md#constructor)

#### Defined in

[packages/account-node/src/auto.ts:21](https://github.com/verida/verida-js/blob/039856c/packages/account-node/src/auto.ts#L21)

## Properties

### accountConfig

• `Protected` **accountConfig**: [`AccountConfig`](../interfaces/verida_account_node._internal_.AccountConfig.md)

#### Defined in

[packages/account-node/src/auto.ts:19](https://github.com/verida/verida-js/blob/039856c/packages/account-node/src/auto.ts#L19)

___

### didClient

• `Private` **didClient**: [`default`](verida_account_node._internal_.default-1.md)

#### Defined in

[packages/account-node/src/auto.ts:16](https://github.com/verida/verida-js/blob/039856c/packages/account-node/src/auto.ts#L16)

___

### privateKey

• `Private` **privateKey**: `string`

#### Defined in

[packages/account-node/src/auto.ts:15](https://github.com/verida/verida-js/blob/039856c/packages/account-node/src/auto.ts#L15)

___

### wallet

• `Private` **wallet**: [`default`](verida_account_node._internal_.default-2.md)

#### Defined in

[packages/account-node/src/auto.ts:18](https://github.com/verida/verida-js/blob/039856c/packages/account-node/src/auto.ts#L18)

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

[packages/account-node/src/auto.ts:46](https://github.com/verida/verida-js/blob/039856c/packages/account-node/src/auto.ts#L46)

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

### getDidClient

▸ **getDidClient**(): [`default`](verida_account_node._internal_.default-1.md)

#### Returns

[`default`](verida_account_node._internal_.default-1.md)

#### Overrides

[default](verida_account_node._internal_.default.md).[getDidClient](verida_account_node._internal_.default.md#getdidclient)

#### Defined in

[packages/account-node/src/auto.ts:101](https://github.com/verida/verida-js/blob/039856c/packages/account-node/src/auto.ts#L101)

___

### keyring

▸ **keyring**(`contextName`): `Promise`<[`default`](verida_account_node._internal_.default-3.md)\>

Generate a keyring for this user for a given storage context.

#### Parameters

| Name | Type |
| :------ | :------ |
| `contextName` | `string` |

#### Returns

`Promise`<[`default`](verida_account_node._internal_.default-3.md)\>

#### Overrides

[default](verida_account_node._internal_.default.md).[keyring](verida_account_node._internal_.default.md#keyring)

#### Defined in

[packages/account-node/src/auto.ts:33](https://github.com/verida/verida-js/blob/039856c/packages/account-node/src/auto.ts#L33)

___

### linkStorage

▸ **linkStorage**(`storageConfig`): `Promise`<`void`\>

Link storage to this user

#### Parameters

| Name | Type |
| :------ | :------ |
| `storageConfig` | [`SecureContextConfig`](../interfaces/verida_account_node._internal_.SecureContextConfig.md) |

#### Returns

`Promise`<`void`\>

#### Overrides

[default](verida_account_node._internal_.default.md).[linkStorage](verida_account_node._internal_.default.md#linkstorage)

#### Defined in

[packages/account-node/src/auto.ts:80](https://github.com/verida/verida-js/blob/039856c/packages/account-node/src/auto.ts#L80)

___

### linkStorageContextService

▸ **linkStorageContextService**(`contextName`, `endpointType`, `serverType`, `endpointUri`): `Promise`<`boolean`\>

Link storage context service endpoint

#### Parameters

| Name | Type |
| :------ | :------ |
| `contextName` | `string` |
| `endpointType` | [`EndpointType`](../enums/verida_account_node._internal_.EndpointType.md) |
| `serverType` | `string` |
| `endpointUri` | `string` |

#### Returns

`Promise`<`boolean`\>

#### Overrides

[default](verida_account_node._internal_.default.md).[linkStorageContextService](verida_account_node._internal_.default.md#linkstoragecontextservice)

#### Defined in

[packages/account-node/src/auto.ts:97](https://github.com/verida/verida-js/blob/039856c/packages/account-node/src/auto.ts#L97)

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

[packages/account-node/src/auto.ts:42](https://github.com/verida/verida-js/blob/039856c/packages/account-node/src/auto.ts#L42)

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

[packages/account-node/src/auto.ts:50](https://github.com/verida/verida-js/blob/039856c/packages/account-node/src/auto.ts#L50)

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

[packages/account-node/src/auto.ts:89](https://github.com/verida/verida-js/blob/039856c/packages/account-node/src/auto.ts#L89)
