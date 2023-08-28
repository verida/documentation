[root](../README.md) / [Modules](../modules.md) / [@verida/verifiable-credentials](../modules/verida_verifiable_credentials.md) / [<internal\>](../modules/verida_verifiable_credentials._internal_.md) / IAccount

# Interface: IAccount

[@verida/verifiable-credentials](../modules/verida_verifiable_credentials.md).[<internal\>](../modules/verida_verifiable_credentials._internal_.md).IAccount

## Table of contents

### Methods

- [createDidJwt](verida_verifiable_credentials._internal_.IAccount.md#createdidjwt)
- [did](verida_verifiable_credentials._internal_.IAccount.md#did)
- [disconnect](verida_verifiable_credentials._internal_.IAccount.md#disconnect)
- [disconnectDevice](verida_verifiable_credentials._internal_.IAccount.md#disconnectdevice)
- [getAuthContext](verida_verifiable_credentials._internal_.IAccount.md#getauthcontext)
- [keyring](verida_verifiable_credentials._internal_.IAccount.md#keyring)
- [linkStorage](verida_verifiable_credentials._internal_.IAccount.md#linkstorage)
- [linkStorageContextService](verida_verifiable_credentials._internal_.IAccount.md#linkstoragecontextservice)
- [setAccountConfig](verida_verifiable_credentials._internal_.IAccount.md#setaccountconfig)
- [sign](verida_verifiable_credentials._internal_.IAccount.md#sign)
- [storageConfig](verida_verifiable_credentials._internal_.IAccount.md#storageconfig)
- [unlinkStorage](verida_verifiable_credentials._internal_.IAccount.md#unlinkstorage)

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

▸ **getAuthContext**(`contextName`, `contextConfig`, `authConfig?`, `authType?`): `Promise`<[`AuthContext`](verida_verifiable_credentials._internal_.AuthContext.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `contextName` | `string` |
| `contextConfig` | [`SecureContextConfig`](verida_verifiable_credentials._internal_.SecureContextConfig.md) |
| `authConfig?` | [`AuthTypeConfig`](verida_verifiable_credentials._internal_.AuthTypeConfig.md) |
| `authType?` | `string` |

#### Returns

`Promise`<[`AuthContext`](verida_verifiable_credentials._internal_.AuthContext.md)\>

#### Defined in

packages/types/dist/IAccount.d.ts:15

___

### keyring

▸ **keyring**(`contextName`): `Promise`<[`IKeyring`](verida_verifiable_credentials._internal_.IKeyring.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `contextName` | `string` |

#### Returns

`Promise`<[`IKeyring`](verida_verifiable_credentials._internal_.IKeyring.md)\>

#### Defined in

packages/types/dist/IAccount.d.ts:5

___

### linkStorage

▸ **linkStorage**(`storageConfig`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `storageConfig` | [`SecureContextConfig`](verida_verifiable_credentials._internal_.SecureContextConfig.md) |

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
| `accountConfig` | [`AccountConfig`](verida_verifiable_credentials._internal_.AccountConfig.md) |

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

▸ **storageConfig**(`contextName`, `forceCreate`): `Promise`<`undefined` \| [`SecureContextConfig`](verida_verifiable_credentials._internal_.SecureContextConfig.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `contextName` | `string` |
| `forceCreate` | `boolean` |

#### Returns

`Promise`<`undefined` \| [`SecureContextConfig`](verida_verifiable_credentials._internal_.SecureContextConfig.md)\>

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
