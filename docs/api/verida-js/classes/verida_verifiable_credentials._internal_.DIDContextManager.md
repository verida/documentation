[root](../README.md) / [Modules](../modules.md) / [@verida/verifiable-credentials](../modules/verida_verifiable_credentials.md) / [<internal\>](../modules/verida_verifiable_credentials._internal_.md) / DIDContextManager

# Class: DIDContextManager

[@verida/verifiable-credentials](../modules/verida_verifiable_credentials.md).[<internal\>](../modules/verida_verifiable_credentials._internal_.md).DIDContextManager

## Table of contents

### Constructors

- [constructor](verida_verifiable_credentials._internal_.DIDContextManager.md#constructor)

### Properties

- [account](verida_verifiable_credentials._internal_.DIDContextManager.md#account)
- [didClient](verida_verifiable_credentials._internal_.DIDContextManager.md#didclient)
- [didContexts](verida_verifiable_credentials._internal_.DIDContextManager.md#didcontexts)

### Methods

- [getContextDatabaseServer](verida_verifiable_credentials._internal_.DIDContextManager.md#getcontextdatabaseserver)
- [getContextMessageServer](verida_verifiable_credentials._internal_.DIDContextManager.md#getcontextmessageserver)
- [getContextStorageServer](verida_verifiable_credentials._internal_.DIDContextManager.md#getcontextstorageserver)
- [getDIDContextConfig](verida_verifiable_credentials._internal_.DIDContextManager.md#getdidcontextconfig)
- [getDIDContextHashConfig](verida_verifiable_credentials._internal_.DIDContextManager.md#getdidcontexthashconfig)
- [setAccount](verida_verifiable_credentials._internal_.DIDContextManager.md#setaccount)

## Constructors

### constructor

• **new DIDContextManager**(`didClient`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `didClient` | [`default`](verida_verifiable_credentials._internal_.default-1.md) |

#### Defined in

packages/client-ts/dist/did-context-manager.d.ts:17

## Properties

### account

• `Private` `Optional` **account**: `any`

#### Defined in

packages/client-ts/dist/did-context-manager.d.ts:16

___

### didClient

• `Private` **didClient**: `any`

#### Defined in

packages/client-ts/dist/did-context-manager.d.ts:15

___

### didContexts

• `Private` **didContexts**: `any`

#### Defined in

packages/client-ts/dist/did-context-manager.d.ts:14

## Methods

### getContextDatabaseServer

▸ **getContextDatabaseServer**(`did`, `contextName`, `forceCreate?`): `Promise`<[`SecureContextEndpoint`](../interfaces/verida_verifiable_credentials._internal_.SecureContextEndpoint.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `string` |
| `contextName` | `string` |
| `forceCreate?` | `boolean` |

#### Returns

`Promise`<[`SecureContextEndpoint`](../interfaces/verida_verifiable_credentials._internal_.SecureContextEndpoint.md)\>

#### Defined in

packages/client-ts/dist/did-context-manager.d.ts:19

___

### getContextMessageServer

▸ **getContextMessageServer**(`did`, `contextName`, `forceCreate?`): `Promise`<[`SecureContextEndpoint`](../interfaces/verida_verifiable_credentials._internal_.SecureContextEndpoint.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `string` |
| `contextName` | `string` |
| `forceCreate?` | `boolean` |

#### Returns

`Promise`<[`SecureContextEndpoint`](../interfaces/verida_verifiable_credentials._internal_.SecureContextEndpoint.md)\>

#### Defined in

packages/client-ts/dist/did-context-manager.d.ts:21

___

### getContextStorageServer

▸ **getContextStorageServer**(`did`, `contextName`, `forceCreate?`): `Promise`<[`SecureContextEndpoint`](../interfaces/verida_verifiable_credentials._internal_.SecureContextEndpoint.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `string` |
| `contextName` | `string` |
| `forceCreate?` | `boolean` |

#### Returns

`Promise`<[`SecureContextEndpoint`](../interfaces/verida_verifiable_credentials._internal_.SecureContextEndpoint.md)\>

#### Defined in

packages/client-ts/dist/did-context-manager.d.ts:20

___

### getDIDContextConfig

▸ **getDIDContextConfig**(`did`, `contextName`, `forceCreate?`): `Promise`<[`SecureContextConfig`](../interfaces/verida_verifiable_credentials._internal_.SecureContextConfig.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `string` |
| `contextName` | `string` |
| `forceCreate?` | `boolean` |

#### Returns

`Promise`<[`SecureContextConfig`](../interfaces/verida_verifiable_credentials._internal_.SecureContextConfig.md)\>

#### Defined in

packages/client-ts/dist/did-context-manager.d.ts:23

___

### getDIDContextHashConfig

▸ **getDIDContextHashConfig**(`did`, `contextHash`): `Promise`<[`SecureContextConfig`](../interfaces/verida_verifiable_credentials._internal_.SecureContextConfig.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `string` |
| `contextHash` | `string` |

#### Returns

`Promise`<[`SecureContextConfig`](../interfaces/verida_verifiable_credentials._internal_.SecureContextConfig.md)\>

#### Defined in

packages/client-ts/dist/did-context-manager.d.ts:22

___

### setAccount

▸ **setAccount**(`account`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | [`default`](verida_verifiable_credentials._internal_.default.md) |

#### Returns

`void`

#### Defined in

packages/client-ts/dist/did-context-manager.d.ts:18
