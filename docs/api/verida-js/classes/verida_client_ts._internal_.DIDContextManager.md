[root](../README.md) / [Modules](../modules.md) / [@verida/client-ts](../modules/verida_client_ts.md) / [<internal\>](../modules/verida_client_ts._internal_.md) / DIDContextManager

# Class: DIDContextManager

[@verida/client-ts](../modules/verida_client_ts.md).[<internal\>](../modules/verida_client_ts._internal_.md).DIDContextManager

## Table of contents

### Constructors

- [constructor](verida_client_ts._internal_.DIDContextManager.md#constructor)

### Properties

- [account](verida_client_ts._internal_.DIDContextManager.md#account)
- [didClient](verida_client_ts._internal_.DIDContextManager.md#didclient)
- [didContexts](verida_client_ts._internal_.DIDContextManager.md#didcontexts)

### Methods

- [getContextDatabaseServer](verida_client_ts._internal_.DIDContextManager.md#getcontextdatabaseserver)
- [getContextMessageServer](verida_client_ts._internal_.DIDContextManager.md#getcontextmessageserver)
- [getContextStorageServer](verida_client_ts._internal_.DIDContextManager.md#getcontextstorageserver)
- [getDIDContextConfig](verida_client_ts._internal_.DIDContextManager.md#getdidcontextconfig)
- [getDIDContextHashConfig](verida_client_ts._internal_.DIDContextManager.md#getdidcontexthashconfig)
- [setAccount](verida_client_ts._internal_.DIDContextManager.md#setaccount)

## Constructors

### constructor

• **new DIDContextManager**(`didClient`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `didClient` | [`DIDClient`](verida_client_ts._internal_.DIDClient.md) |

#### Defined in

[packages/client-ts/src/did-context-manager.ts:22](https://github.com/verida/verida-js/blob/032961c/packages/client-ts/src/did-context-manager.ts#L22)

## Properties

### account

• `Private` `Optional` **account**: [`IAccount`](../interfaces/verida_client_ts._internal_.IAccount.md)

#### Defined in

[packages/client-ts/src/did-context-manager.ts:20](https://github.com/verida/verida-js/blob/032961c/packages/client-ts/src/did-context-manager.ts#L20)

___

### didClient

• `Private` **didClient**: [`DIDClient`](verida_client_ts._internal_.DIDClient.md)

#### Defined in

[packages/client-ts/src/did-context-manager.ts:19](https://github.com/verida/verida-js/blob/032961c/packages/client-ts/src/did-context-manager.ts#L19)

___

### didContexts

• `Private` **didContexts**: [`DIDContextConfigs`](../interfaces/verida_client_ts._internal_.DIDContextConfigs.md) = `{}`

#### Defined in

[packages/client-ts/src/did-context-manager.ts:17](https://github.com/verida/verida-js/blob/032961c/packages/client-ts/src/did-context-manager.ts#L17)

## Methods

### getContextDatabaseServer

▸ **getContextDatabaseServer**(`did`, `contextName`, `forceCreate?`): `Promise`<[`SecureContextEndpoint`](../interfaces/verida_client_ts._internal_.SecureContextEndpoint.md)\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `did` | `string` | `undefined` |
| `contextName` | `string` | `undefined` |
| `forceCreate` | `boolean` | `true` |

#### Returns

`Promise`<[`SecureContextEndpoint`](../interfaces/verida_client_ts._internal_.SecureContextEndpoint.md)\>

#### Defined in

[packages/client-ts/src/did-context-manager.ts:30](https://github.com/verida/verida-js/blob/032961c/packages/client-ts/src/did-context-manager.ts#L30)

___

### getContextMessageServer

▸ **getContextMessageServer**(`did`, `contextName`, `forceCreate?`): `Promise`<[`SecureContextEndpoint`](../interfaces/verida_client_ts._internal_.SecureContextEndpoint.md)\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `did` | `string` | `undefined` |
| `contextName` | `string` | `undefined` |
| `forceCreate` | `boolean` | `true` |

#### Returns

`Promise`<[`SecureContextEndpoint`](../interfaces/verida_client_ts._internal_.SecureContextEndpoint.md)\>

#### Defined in

[packages/client-ts/src/did-context-manager.ts:60](https://github.com/verida/verida-js/blob/032961c/packages/client-ts/src/did-context-manager.ts#L60)

___

### getContextStorageServer

▸ **getContextStorageServer**(`did`, `contextName`, `forceCreate?`): `Promise`<[`SecureContextEndpoint`](../interfaces/verida_client_ts._internal_.SecureContextEndpoint.md)\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `did` | `string` | `undefined` |
| `contextName` | `string` | `undefined` |
| `forceCreate` | `boolean` | `true` |

#### Returns

`Promise`<[`SecureContextEndpoint`](../interfaces/verida_client_ts._internal_.SecureContextEndpoint.md)\>

#### Defined in

[packages/client-ts/src/did-context-manager.ts:43](https://github.com/verida/verida-js/blob/032961c/packages/client-ts/src/did-context-manager.ts#L43)

___

### getDIDContextConfig

▸ **getDIDContextConfig**(`did`, `contextName`, `forceCreate?`): `Promise`<[`SecureContextConfig`](../interfaces/verida_client_ts._internal_.SecureContextConfig.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `string` |
| `contextName` | `string` |
| `forceCreate?` | `boolean` |

#### Returns

`Promise`<[`SecureContextConfig`](../interfaces/verida_client_ts._internal_.SecureContextConfig.md)\>

#### Defined in

[packages/client-ts/src/did-context-manager.ts:94](https://github.com/verida/verida-js/blob/032961c/packages/client-ts/src/did-context-manager.ts#L94)

___

### getDIDContextHashConfig

▸ **getDIDContextHashConfig**(`did`, `contextHash`): `Promise`<[`SecureContextConfig`](../interfaces/verida_client_ts._internal_.SecureContextConfig.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `string` |
| `contextHash` | `string` |

#### Returns

`Promise`<[`SecureContextConfig`](../interfaces/verida_client_ts._internal_.SecureContextConfig.md)\>

#### Defined in

[packages/client-ts/src/did-context-manager.ts:73](https://github.com/verida/verida-js/blob/032961c/packages/client-ts/src/did-context-manager.ts#L73)

___

### setAccount

▸ **setAccount**(`account`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | [`IAccount`](../interfaces/verida_client_ts._internal_.IAccount.md) |

#### Returns

`void`

#### Defined in

[packages/client-ts/src/did-context-manager.ts:26](https://github.com/verida/verida-js/blob/032961c/packages/client-ts/src/did-context-manager.ts#L26)
