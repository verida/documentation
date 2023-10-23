[root](../README.md) / [Modules](../modules.md) / [@verida/types](../modules/verida_types.md) / IDIDContextManager

# Interface: IDIDContextManager

[@verida/types](../modules/verida_types.md).IDIDContextManager

## Table of contents

### Methods

- [getContextDatabaseServer](verida_types.IDIDContextManager.md#getcontextdatabaseserver)
- [getContextMessageServer](verida_types.IDIDContextManager.md#getcontextmessageserver)
- [getContextStorageServer](verida_types.IDIDContextManager.md#getcontextstorageserver)
- [getDIDContextConfig](verida_types.IDIDContextManager.md#getdidcontextconfig)
- [getDIDContextHashConfig](verida_types.IDIDContextManager.md#getdidcontexthashconfig)
- [setAccount](verida_types.IDIDContextManager.md#setaccount)

## Methods

### getContextDatabaseServer

▸ **getContextDatabaseServer**(`did`, `contextName`, `forceCreate`): `Promise`<[`SecureContextEndpoint`](verida_types.SecureContextEndpoint.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `string` |
| `contextName` | `string` |
| `forceCreate` | `boolean` |

#### Returns

`Promise`<[`SecureContextEndpoint`](verida_types.SecureContextEndpoint.md)\>

#### Defined in

[packages/types/src/IDIDContextManager.ts:9](https://github.com/verida/verida-js/blob/032961c/packages/types/src/IDIDContextManager.ts#L9)

___

### getContextMessageServer

▸ **getContextMessageServer**(`did`, `contextName`, `forceCreate`): `Promise`<[`SecureContextEndpoint`](verida_types.SecureContextEndpoint.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `string` |
| `contextName` | `string` |
| `forceCreate` | `boolean` |

#### Returns

`Promise`<[`SecureContextEndpoint`](verida_types.SecureContextEndpoint.md)\>

#### Defined in

[packages/types/src/IDIDContextManager.ts:21](https://github.com/verida/verida-js/blob/032961c/packages/types/src/IDIDContextManager.ts#L21)

___

### getContextStorageServer

▸ **getContextStorageServer**(`did`, `contextName`, `forceCreate`): `Promise`<[`SecureContextEndpoint`](verida_types.SecureContextEndpoint.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `string` |
| `contextName` | `string` |
| `forceCreate` | `boolean` |

#### Returns

`Promise`<[`SecureContextEndpoint`](verida_types.SecureContextEndpoint.md)\>

#### Defined in

[packages/types/src/IDIDContextManager.ts:15](https://github.com/verida/verida-js/blob/032961c/packages/types/src/IDIDContextManager.ts#L15)

___

### getDIDContextConfig

▸ **getDIDContextConfig**(`did`, `contextName`, `forceCreate?`): `Promise`<[`SecureContextConfig`](verida_types.SecureContextConfig.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `string` |
| `contextName` | `string` |
| `forceCreate?` | `boolean` |

#### Returns

`Promise`<[`SecureContextConfig`](verida_types.SecureContextConfig.md)\>

#### Defined in

[packages/types/src/IDIDContextManager.ts:29](https://github.com/verida/verida-js/blob/032961c/packages/types/src/IDIDContextManager.ts#L29)

___

### getDIDContextHashConfig

▸ **getDIDContextHashConfig**(`did`, `contextHash`): `Promise`<[`SecureContextConfig`](verida_types.SecureContextConfig.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `string` |
| `contextHash` | `string` |

#### Returns

`Promise`<[`SecureContextConfig`](verida_types.SecureContextConfig.md)\>

#### Defined in

[packages/types/src/IDIDContextManager.ts:27](https://github.com/verida/verida-js/blob/032961c/packages/types/src/IDIDContextManager.ts#L27)

___

### setAccount

▸ **setAccount**(`account`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | [`IAccount`](verida_types.IAccount.md) |

#### Returns

`void`

#### Defined in

[packages/types/src/IDIDContextManager.ts:7](https://github.com/verida/verida-js/blob/032961c/packages/types/src/IDIDContextManager.ts#L7)
