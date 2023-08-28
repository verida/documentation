[root](../README.md) / [Modules](../modules.md) / [@verida/verifiable-credentials](../modules/verida_verifiable_credentials.md) / [<internal\>](../modules/verida_verifiable_credentials._internal_.md) / IDIDContextManager

# Interface: IDIDContextManager

[@verida/verifiable-credentials](../modules/verida_verifiable_credentials.md).[<internal\>](../modules/verida_verifiable_credentials._internal_.md).IDIDContextManager

## Table of contents

### Methods

- [getContextDatabaseServer](verida_verifiable_credentials._internal_.IDIDContextManager.md#getcontextdatabaseserver)
- [getContextMessageServer](verida_verifiable_credentials._internal_.IDIDContextManager.md#getcontextmessageserver)
- [getContextStorageServer](verida_verifiable_credentials._internal_.IDIDContextManager.md#getcontextstorageserver)
- [getDIDContextConfig](verida_verifiable_credentials._internal_.IDIDContextManager.md#getdidcontextconfig)
- [getDIDContextHashConfig](verida_verifiable_credentials._internal_.IDIDContextManager.md#getdidcontexthashconfig)
- [setAccount](verida_verifiable_credentials._internal_.IDIDContextManager.md#setaccount)

## Methods

### getContextDatabaseServer

▸ **getContextDatabaseServer**(`did`, `contextName`, `forceCreate`): `Promise`<[`SecureContextEndpoint`](verida_verifiable_credentials._internal_.SecureContextEndpoint.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `string` |
| `contextName` | `string` |
| `forceCreate` | `boolean` |

#### Returns

`Promise`<[`SecureContextEndpoint`](verida_verifiable_credentials._internal_.SecureContextEndpoint.md)\>

#### Defined in

packages/types/dist/IDIDContextManager.d.ts:6

___

### getContextMessageServer

▸ **getContextMessageServer**(`did`, `contextName`, `forceCreate`): `Promise`<[`SecureContextEndpoint`](verida_verifiable_credentials._internal_.SecureContextEndpoint.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `string` |
| `contextName` | `string` |
| `forceCreate` | `boolean` |

#### Returns

`Promise`<[`SecureContextEndpoint`](verida_verifiable_credentials._internal_.SecureContextEndpoint.md)\>

#### Defined in

packages/types/dist/IDIDContextManager.d.ts:8

___

### getContextStorageServer

▸ **getContextStorageServer**(`did`, `contextName`, `forceCreate`): `Promise`<[`SecureContextEndpoint`](verida_verifiable_credentials._internal_.SecureContextEndpoint.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `string` |
| `contextName` | `string` |
| `forceCreate` | `boolean` |

#### Returns

`Promise`<[`SecureContextEndpoint`](verida_verifiable_credentials._internal_.SecureContextEndpoint.md)\>

#### Defined in

packages/types/dist/IDIDContextManager.d.ts:7

___

### getDIDContextConfig

▸ **getDIDContextConfig**(`did`, `contextName`, `forceCreate?`): `Promise`<[`SecureContextConfig`](verida_verifiable_credentials._internal_.SecureContextConfig.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `string` |
| `contextName` | `string` |
| `forceCreate?` | `boolean` |

#### Returns

`Promise`<[`SecureContextConfig`](verida_verifiable_credentials._internal_.SecureContextConfig.md)\>

#### Defined in

packages/types/dist/IDIDContextManager.d.ts:10

___

### getDIDContextHashConfig

▸ **getDIDContextHashConfig**(`did`, `contextHash`): `Promise`<[`SecureContextConfig`](verida_verifiable_credentials._internal_.SecureContextConfig.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `string` |
| `contextHash` | `string` |

#### Returns

`Promise`<[`SecureContextConfig`](verida_verifiable_credentials._internal_.SecureContextConfig.md)\>

#### Defined in

packages/types/dist/IDIDContextManager.d.ts:9

___

### setAccount

▸ **setAccount**(`account`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | [`IAccount`](verida_verifiable_credentials._internal_.IAccount.md) |

#### Returns

`void`

#### Defined in

packages/types/dist/IDIDContextManager.d.ts:5
