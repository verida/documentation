[root](../README.md) / [Modules](../modules.md) / [@verida/web-helpers](../modules/verida_web_helpers.md) / [<internal\>](../modules/verida_web_helpers._internal_.md) / DIDContextManager

# Class: DIDContextManager

[@verida/web-helpers](../modules/verida_web_helpers.md).[<internal\>](../modules/verida_web_helpers._internal_.md).DIDContextManager

## Table of contents

### Constructors

- [constructor](verida_web_helpers._internal_.DIDContextManager.md#constructor)

### Properties

- [account](verida_web_helpers._internal_.DIDContextManager.md#account)
- [didClient](verida_web_helpers._internal_.DIDContextManager.md#didclient)
- [didContexts](verida_web_helpers._internal_.DIDContextManager.md#didcontexts)

### Methods

- [getContextDatabaseServer](verida_web_helpers._internal_.DIDContextManager.md#getcontextdatabaseserver)
- [getContextMessageServer](verida_web_helpers._internal_.DIDContextManager.md#getcontextmessageserver)
- [getContextStorageServer](verida_web_helpers._internal_.DIDContextManager.md#getcontextstorageserver)
- [getDIDContextConfig](verida_web_helpers._internal_.DIDContextManager.md#getdidcontextconfig)
- [getDIDContextHashConfig](verida_web_helpers._internal_.DIDContextManager.md#getdidcontexthashconfig)
- [setAccount](verida_web_helpers._internal_.DIDContextManager.md#setaccount)

## Constructors

### constructor

• **new DIDContextManager**(`didClient`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `didClient` | [`DIDClient`](verida_web_helpers._internal_.DIDClient.md) |

#### Defined in

packages/client-ts/dist/did-context-manager.d.ts:16

## Properties

### account

• `Private` `Optional` **account**: `any`

#### Defined in

packages/client-ts/dist/did-context-manager.d.ts:15

___

### didClient

• `Private` **didClient**: `any`

#### Defined in

packages/client-ts/dist/did-context-manager.d.ts:14

___

### didContexts

• `Private` **didContexts**: `any`

#### Defined in

packages/client-ts/dist/did-context-manager.d.ts:13

## Methods

### getContextDatabaseServer

▸ **getContextDatabaseServer**(`did`, `contextName`, `forceCreate?`): `Promise`<[`SecureContextEndpoint`](../interfaces/verida_web_helpers._internal_.SecureContextEndpoint.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `string` |
| `contextName` | `string` |
| `forceCreate?` | `boolean` |

#### Returns

`Promise`<[`SecureContextEndpoint`](../interfaces/verida_web_helpers._internal_.SecureContextEndpoint.md)\>

#### Defined in

packages/client-ts/dist/did-context-manager.d.ts:18

___

### getContextMessageServer

▸ **getContextMessageServer**(`did`, `contextName`, `forceCreate?`): `Promise`<[`SecureContextEndpoint`](../interfaces/verida_web_helpers._internal_.SecureContextEndpoint.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `string` |
| `contextName` | `string` |
| `forceCreate?` | `boolean` |

#### Returns

`Promise`<[`SecureContextEndpoint`](../interfaces/verida_web_helpers._internal_.SecureContextEndpoint.md)\>

#### Defined in

packages/client-ts/dist/did-context-manager.d.ts:20

___

### getContextStorageServer

▸ **getContextStorageServer**(`did`, `contextName`, `forceCreate?`): `Promise`<[`SecureContextEndpoint`](../interfaces/verida_web_helpers._internal_.SecureContextEndpoint.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `string` |
| `contextName` | `string` |
| `forceCreate?` | `boolean` |

#### Returns

`Promise`<[`SecureContextEndpoint`](../interfaces/verida_web_helpers._internal_.SecureContextEndpoint.md)\>

#### Defined in

packages/client-ts/dist/did-context-manager.d.ts:19

___

### getDIDContextConfig

▸ **getDIDContextConfig**(`did`, `contextName`, `forceCreate?`): `Promise`<[`SecureContextConfig`](../interfaces/verida_web_helpers._internal_.SecureContextConfig.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `string` |
| `contextName` | `string` |
| `forceCreate?` | `boolean` |

#### Returns

`Promise`<[`SecureContextConfig`](../interfaces/verida_web_helpers._internal_.SecureContextConfig.md)\>

#### Defined in

packages/client-ts/dist/did-context-manager.d.ts:22

___

### getDIDContextHashConfig

▸ **getDIDContextHashConfig**(`did`, `contextHash`): `Promise`<[`SecureContextConfig`](../interfaces/verida_web_helpers._internal_.SecureContextConfig.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `string` |
| `contextHash` | `string` |

#### Returns

`Promise`<[`SecureContextConfig`](../interfaces/verida_web_helpers._internal_.SecureContextConfig.md)\>

#### Defined in

packages/client-ts/dist/did-context-manager.d.ts:21

___

### setAccount

▸ **setAccount**(`account`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | [`IAccount`](../interfaces/verida_web_helpers._internal_.IAccount.md) |

#### Returns

`void`

#### Defined in

packages/client-ts/dist/did-context-manager.d.ts:17
