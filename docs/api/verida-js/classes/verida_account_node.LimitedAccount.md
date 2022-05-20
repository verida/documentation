[root](../README.md) / [Modules](../modules.md) / [@verida/account-node](../modules/verida_account_node.md) / LimitedAccount

# Class: LimitedAccount

[@verida/account-node](../modules/verida_account_node.md).LimitedAccount

A NodeJs account that only signs messages for a limited list of contexts.

Used for testing.

## Hierarchy

- [`AutoAccount`](verida_account_node.AutoAccount.md)

  ↳ **`LimitedAccount`**

## Table of contents

### Constructors

- [constructor](verida_account_node.LimitedAccount.md#constructor)

### Properties

- [accountConfig](verida_account_node.LimitedAccount.md#accountconfig)
- [signingContexts](verida_account_node.LimitedAccount.md#signingcontexts)

### Methods

- [createDidJwt](verida_account_node.LimitedAccount.md#createdidjwt)
- [did](verida_account_node.LimitedAccount.md#did)
- [disconnect](verida_account_node.LimitedAccount.md#disconnect)
- [getDidClient](verida_account_node.LimitedAccount.md#getdidclient)
- [keyring](verida_account_node.LimitedAccount.md#keyring)
- [linkStorage](verida_account_node.LimitedAccount.md#linkstorage)
- [linkStorageContextService](verida_account_node.LimitedAccount.md#linkstoragecontextservice)
- [sign](verida_account_node.LimitedAccount.md#sign)
- [storageConfig](verida_account_node.LimitedAccount.md#storageconfig)
- [unlinkStorage](verida_account_node.LimitedAccount.md#unlinkstorage)

## Constructors

### constructor

• **new LimitedAccount**(`accountConfig`, `autoConfig`, `signingContexts?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `accountConfig` | [`AccountConfig`](../interfaces/verida_account_node._internal_.AccountConfig.md) | `undefined` |
| `autoConfig` | [`NodeAccountConfig`](../interfaces/verida_account_node._internal_.NodeAccountConfig.md) | `undefined` |
| `signingContexts` | `never`[] | `[]` |

#### Overrides

[AutoAccount](verida_account_node.AutoAccount.md).[constructor](verida_account_node.AutoAccount.md#constructor)

#### Defined in

[packages/account-node/src/limited.ts:16](https://github.com/verida/verida-js/blob/039856c/packages/account-node/src/limited.ts#L16)

## Properties

### accountConfig

• `Protected` **accountConfig**: [`AccountConfig`](../interfaces/verida_account_node._internal_.AccountConfig.md)

#### Inherited from

[AutoAccount](verida_account_node.AutoAccount.md).[accountConfig](verida_account_node.AutoAccount.md#accountconfig)

#### Defined in

[packages/account-node/src/auto.ts:19](https://github.com/verida/verida-js/blob/039856c/packages/account-node/src/auto.ts#L19)

___

### signingContexts

• `Private` **signingContexts**: `string`[]

#### Defined in

[packages/account-node/src/limited.ts:14](https://github.com/verida/verida-js/blob/039856c/packages/account-node/src/limited.ts#L14)

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

[AutoAccount](verida_account_node.AutoAccount.md).[disconnect](verida_account_node.AutoAccount.md#disconnect)

#### Defined in

packages/account/dist/account.d.ts:48

___

### getDidClient

▸ **getDidClient**(): [`default`](verida_account_node._internal_.default-1.md)

#### Returns

[`default`](verida_account_node._internal_.default-1.md)

#### Inherited from

[AutoAccount](verida_account_node.AutoAccount.md).[getDidClient](verida_account_node.AutoAccount.md#getdidclient)

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

[AutoAccount](verida_account_node.AutoAccount.md).[keyring](verida_account_node.AutoAccount.md#keyring)

#### Defined in

[packages/account-node/src/limited.ts:21](https://github.com/verida/verida-js/blob/039856c/packages/account-node/src/limited.ts#L21)

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

#### Inherited from

[AutoAccount](verida_account_node.AutoAccount.md).[linkStorage](verida_account_node.AutoAccount.md#linkstorage)

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

#### Inherited from

[AutoAccount](verida_account_node.AutoAccount.md).[linkStorageContextService](verida_account_node.AutoAccount.md#linkstoragecontextservice)

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

#### Inherited from

[AutoAccount](verida_account_node.AutoAccount.md).[sign](verida_account_node.AutoAccount.md#sign)

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

[AutoAccount](verida_account_node.AutoAccount.md).[storageConfig](verida_account_node.AutoAccount.md#storageconfig)

#### Defined in

[packages/account-node/src/limited.ts:29](https://github.com/verida/verida-js/blob/039856c/packages/account-node/src/limited.ts#L29)

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

[packages/account-node/src/limited.ts:37](https://github.com/verida/verida-js/blob/039856c/packages/account-node/src/limited.ts#L37)
