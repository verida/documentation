[root](../README.md) / [Modules](../modules.md) / [@verida/types](../modules/verida_types.md) / IAccount

# Interface: IAccount

[@verida/types](../modules/verida_types.md).IAccount

## Table of contents

### Methods

- [createDidJwt](verida_types.IAccount.md#createdidjwt)
- [did](verida_types.IAccount.md#did)
- [disconnect](verida_types.IAccount.md#disconnect)
- [disconnectDevice](verida_types.IAccount.md#disconnectdevice)
- [getAuthContext](verida_types.IAccount.md#getauthcontext)
- [keyring](verida_types.IAccount.md#keyring)
- [linkStorage](verida_types.IAccount.md#linkstorage)
- [linkStorageContextService](verida_types.IAccount.md#linkstoragecontextservice)
- [setAccountConfig](verida_types.IAccount.md#setaccountconfig)
- [sign](verida_types.IAccount.md#sign)
- [storageConfig](verida_types.IAccount.md#storageconfig)
- [unlinkStorage](verida_types.IAccount.md#unlinkstorage)

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

[packages/types/src/IAccount.ts:24](https://github.com/verida/verida-js/blob/032961c/packages/types/src/IAccount.ts#L24)

___

### did

▸ **did**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Defined in

[packages/types/src/IAccount.ts:12](https://github.com/verida/verida-js/blob/032961c/packages/types/src/IAccount.ts#L12)

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

[packages/types/src/IAccount.ts:26](https://github.com/verida/verida-js/blob/032961c/packages/types/src/IAccount.ts#L26)

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

[packages/types/src/IAccount.ts:30](https://github.com/verida/verida-js/blob/032961c/packages/types/src/IAccount.ts#L30)

___

### getAuthContext

▸ **getAuthContext**(`contextName`, `contextConfig`, `authConfig?`, `authType?`): `Promise`<[`AuthContext`](verida_types.AuthContext.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `contextName` | `string` |
| `contextConfig` | [`SecureContextConfig`](verida_types.SecureContextConfig.md) |
| `authConfig?` | [`AuthTypeConfig`](verida_types.AuthTypeConfig.md) |
| `authType?` | `string` |

#### Returns

`Promise`<[`AuthContext`](verida_types.AuthContext.md)\>

#### Defined in

[packages/types/src/IAccount.ts:28](https://github.com/verida/verida-js/blob/032961c/packages/types/src/IAccount.ts#L28)

___

### keyring

▸ **keyring**(`contextName`): `Promise`<[`IKeyring`](verida_types.IKeyring.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `contextName` | `string` |

#### Returns

`Promise`<[`IKeyring`](verida_types.IKeyring.md)\>

#### Defined in

[packages/types/src/IAccount.ts:8](https://github.com/verida/verida-js/blob/032961c/packages/types/src/IAccount.ts#L8)

___

### linkStorage

▸ **linkStorage**(`storageConfig`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `storageConfig` | [`SecureContextConfig`](verida_types.SecureContextConfig.md) |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[packages/types/src/IAccount.ts:14](https://github.com/verida/verida-js/blob/032961c/packages/types/src/IAccount.ts#L14)

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

[packages/types/src/IAccount.ts:20](https://github.com/verida/verida-js/blob/032961c/packages/types/src/IAccount.ts#L20)

___

### setAccountConfig

▸ **setAccountConfig**(`accountConfig`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `accountConfig` | [`AccountConfig`](verida_types.AccountConfig.md) |

#### Returns

`void`

#### Defined in

[packages/types/src/IAccount.ts:22](https://github.com/verida/verida-js/blob/032961c/packages/types/src/IAccount.ts#L22)

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

[packages/types/src/IAccount.ts:10](https://github.com/verida/verida-js/blob/032961c/packages/types/src/IAccount.ts#L10)

___

### storageConfig

▸ **storageConfig**(`contextName`, `forceCreate`): `Promise`<`undefined` \| [`SecureContextConfig`](verida_types.SecureContextConfig.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `contextName` | `string` |
| `forceCreate` | `boolean` |

#### Returns

`Promise`<`undefined` \| [`SecureContextConfig`](verida_types.SecureContextConfig.md)\>

#### Defined in

[packages/types/src/IAccount.ts:18](https://github.com/verida/verida-js/blob/032961c/packages/types/src/IAccount.ts#L18)

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

[packages/types/src/IAccount.ts:16](https://github.com/verida/verida-js/blob/032961c/packages/types/src/IAccount.ts#L16)
