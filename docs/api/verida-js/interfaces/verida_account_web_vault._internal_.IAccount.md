[root](../README.md) / [Modules](../modules.md) / [@verida/account-web-vault](../modules/verida_account_web_vault.md) / [<internal\>](../modules/verida_account_web_vault._internal_.md) / IAccount

# Interface: IAccount

[@verida/account-web-vault](../modules/verida_account_web_vault.md).[<internal\>](../modules/verida_account_web_vault._internal_.md).IAccount

## Implemented by

- [`default`](../classes/verida_account_web_vault._internal_.default.md)

## Table of contents

### Methods

- [createDidJwt](verida_account_web_vault._internal_.IAccount.md#createdidjwt)
- [did](verida_account_web_vault._internal_.IAccount.md#did)
- [disconnect](verida_account_web_vault._internal_.IAccount.md#disconnect)
- [disconnectDevice](verida_account_web_vault._internal_.IAccount.md#disconnectdevice)
- [getAuthContext](verida_account_web_vault._internal_.IAccount.md#getauthcontext)
- [keyring](verida_account_web_vault._internal_.IAccount.md#keyring)
- [linkStorage](verida_account_web_vault._internal_.IAccount.md#linkstorage)
- [linkStorageContextService](verida_account_web_vault._internal_.IAccount.md#linkstoragecontextservice)
- [setAccountConfig](verida_account_web_vault._internal_.IAccount.md#setaccountconfig)
- [sign](verida_account_web_vault._internal_.IAccount.md#sign)
- [storageConfig](verida_account_web_vault._internal_.IAccount.md#storageconfig)
- [unlinkStorage](verida_account_web_vault._internal_.IAccount.md#unlinkstorage)

## Methods

### createDidJwt

▸ **createDidJwt**(`contextName`, `data`, `config`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `contextName` | `string` |
| `data` | `object` |
| `config` | `any` |

#### Returns

`Promise`<`string`\>

#### Defined in

packages/types/dist/IAccount.d.ts:13

___

### did

▸ **did**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Defined in

packages/types/dist/IAccount.d.ts:7

___

### disconnect

▸ **disconnect**(`contextName?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `contextName?` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/types/dist/IAccount.d.ts:14

___

### disconnectDevice

▸ **disconnectDevice**(`contextName`, `deviceId`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `contextName` | `string` |
| `deviceId` | `string` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

packages/types/dist/IAccount.d.ts:16

___

### getAuthContext

▸ **getAuthContext**(`contextName`, `contextConfig`, `authConfig?`, `authType?`): `Promise`<[`AuthContext`](verida_account_web_vault._internal_.AuthContext.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `contextName` | `string` |
| `contextConfig` | [`SecureContextConfig`](verida_account_web_vault._internal_.SecureContextConfig.md) |
| `authConfig?` | [`AuthTypeConfig`](verida_account_web_vault._internal_.AuthTypeConfig.md) |
| `authType?` | `string` |

#### Returns

`Promise`<[`AuthContext`](verida_account_web_vault._internal_.AuthContext.md)\>

#### Defined in

packages/types/dist/IAccount.d.ts:15

___

### keyring

▸ **keyring**(`contextName`): `Promise`<[`IKeyring`](verida_account_web_vault._internal_.IKeyring.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `contextName` | `string` |

#### Returns

`Promise`<[`IKeyring`](verida_account_web_vault._internal_.IKeyring.md)\>

#### Defined in

packages/types/dist/IAccount.d.ts:5

___

### linkStorage

▸ **linkStorage**(`storageConfig`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `storageConfig` | [`SecureContextConfig`](verida_account_web_vault._internal_.SecureContextConfig.md) |

#### Returns

`Promise`<`boolean`\>

#### Defined in

packages/types/dist/IAccount.d.ts:8

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

#### Defined in

packages/types/dist/IAccount.d.ts:11

___

### setAccountConfig

▸ **setAccountConfig**(`accountConfig`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `accountConfig` | [`AccountConfig`](verida_account_web_vault._internal_.AccountConfig.md) |

#### Returns

`void`

#### Defined in

packages/types/dist/IAccount.d.ts:12

___

### sign

▸ **sign**(`input`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

packages/types/dist/IAccount.d.ts:6

___

### storageConfig

▸ **storageConfig**(`contextName`, `forceCreate`): `Promise`<`undefined` \| [`SecureContextConfig`](verida_account_web_vault._internal_.SecureContextConfig.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `contextName` | `string` |
| `forceCreate` | `boolean` |

#### Returns

`Promise`<`undefined` \| [`SecureContextConfig`](verida_account_web_vault._internal_.SecureContextConfig.md)\>

#### Defined in

packages/types/dist/IAccount.d.ts:10

___

### unlinkStorage

▸ **unlinkStorage**(`contextName`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `contextName` | `string` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

packages/types/dist/IAccount.d.ts:9
