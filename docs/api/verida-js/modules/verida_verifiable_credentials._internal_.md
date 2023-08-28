[root](../README.md) / [Modules](../modules.md) / [@verida/verifiable-credentials](verida_verifiable_credentials.md) / <internal\>

# Namespace: <internal\>

[@verida/verifiable-credentials](verida_verifiable_credentials.md).<internal\>

## Table of contents

### Namespaces

- [EventEmitter](verida_verifiable_credentials._internal_.EventEmitter.md)

### Enumerations

- [ContextEngineType](../enums/verida_verifiable_credentials._internal_.ContextEngineType.md)
- [DatabasePermissionOptionsEnum](../enums/verida_verifiable_credentials._internal_.DatabasePermissionOptionsEnum.md)

### Classes

- [EventEmitter](../classes/verida_verifiable_credentials._internal_.EventEmitter-1.md)

### Interfaces

- [AbortSignal](../interfaces/verida_verifiable_credentials._internal_.AbortSignal.md)
- [AccountConfig](../interfaces/verida_verifiable_credentials._internal_.AccountConfig.md)
- [AsyncIterableIterator](../interfaces/verida_verifiable_credentials._internal_.AsyncIterableIterator.md)
- [AsyncIterator](../interfaces/verida_verifiable_credentials._internal_.AsyncIterator.md)
- [AuthContext](../interfaces/verida_verifiable_credentials._internal_.AuthContext.md)
- [AuthTypeConfig](../interfaces/verida_verifiable_credentials._internal_.AuthTypeConfig.md)
- [ContextCloseOptions](../interfaces/verida_verifiable_credentials._internal_.ContextCloseOptions.md)
- [ContextDatabaseInfo](../interfaces/verida_verifiable_credentials._internal_.ContextDatabaseInfo.md)
- [ContextInfo](../interfaces/verida_verifiable_credentials._internal_.ContextInfo.md)
- [DOMEventTarget](../interfaces/verida_verifiable_credentials._internal_.DOMEventTarget.md)
- [DatabaseCloseOptions](../interfaces/verida_verifiable_credentials._internal_.DatabaseCloseOptions.md)
- [DatabaseDeleteConfig](../interfaces/verida_verifiable_credentials._internal_.DatabaseDeleteConfig.md)
- [DatabaseOpenConfig](../interfaces/verida_verifiable_credentials._internal_.DatabaseOpenConfig.md)
- [DatabasePermissionsConfig](../interfaces/verida_verifiable_credentials._internal_.DatabasePermissionsConfig.md)
- [DatastoreOpenConfig](../interfaces/verida_verifiable_credentials._internal_.DatastoreOpenConfig.md)
- [DbRegistryEntry](../interfaces/verida_verifiable_credentials._internal_.DbRegistryEntry.md)
- [DbRegistryEntryEncryptionKey](../interfaces/verida_verifiable_credentials._internal_.DbRegistryEntryEncryptionKey.md)
- [EcdsaSignature](../interfaces/verida_verifiable_credentials._internal_.EcdsaSignature.md)
- [EndpointUsage](../interfaces/verida_verifiable_credentials._internal_.EndpointUsage.md)
- [EventEmitterOptions](../interfaces/verida_verifiable_credentials._internal_.EventEmitterOptions.md)
- [IAccount](../interfaces/verida_verifiable_credentials._internal_.IAccount.md)
- [IClient](../interfaces/verida_verifiable_credentials._internal_.IClient.md)
- [IContext](../interfaces/verida_verifiable_credentials._internal_.IContext.md)
- [IDIDContextManager](../interfaces/verida_verifiable_credentials._internal_.IDIDContextManager.md)
- [IDatabase](../interfaces/verida_verifiable_credentials._internal_.IDatabase.md)
- [IDatastore](../interfaces/verida_verifiable_credentials._internal_.IDatastore.md)
- [IDbRegistry](../interfaces/verida_verifiable_credentials._internal_.IDbRegistry.md)
- [IKeyring](../interfaces/verida_verifiable_credentials._internal_.IKeyring.md)
- [IMessaging](../interfaces/verida_verifiable_credentials._internal_.IMessaging.md)
- [INotification](../interfaces/verida_verifiable_credentials._internal_.INotification.md)
- [IProfile](../interfaces/verida_verifiable_credentials._internal_.IProfile.md)
- [ISchema](../interfaces/verida_verifiable_credentials._internal_.ISchema.md)
- [IStorageEngine](../interfaces/verida_verifiable_credentials._internal_.IStorageEngine.md)
- [Issuer](../interfaces/verida_verifiable_credentials._internal_.Issuer.md)
- [IteratorReturnResult](../interfaces/verida_verifiable_credentials._internal_.IteratorReturnResult.md)
- [IteratorYieldResult](../interfaces/verida_verifiable_credentials._internal_.IteratorYieldResult.md)
- [KeyringPublicKeys](../interfaces/verida_verifiable_credentials._internal_.KeyringPublicKeys.md)
- [MessageSendConfig](../interfaces/verida_verifiable_credentials._internal_.MessageSendConfig.md)
- [MessagesConfig](../interfaces/verida_verifiable_credentials._internal_.MessagesConfig.md)
- [NodeEventTarget](../interfaces/verida_verifiable_credentials._internal_.NodeEventTarget.md)
- [Number](../interfaces/verida_verifiable_credentials._internal_.Number.md)
- [PromiseLike](../interfaces/verida_verifiable_credentials._internal_.PromiseLike.md)
- [SecureContextConfig](../interfaces/verida_verifiable_credentials._internal_.SecureContextConfig.md)
- [SecureContextEndpoint](../interfaces/verida_verifiable_credentials._internal_.SecureContextEndpoint.md)
- [SecureContextPublicKey](../interfaces/verida_verifiable_credentials._internal_.SecureContextPublicKey.md)
- [SecureContextServices](../interfaces/verida_verifiable_credentials._internal_.SecureContextServices.md)
- [SecureStorageContextPublicKeys](../interfaces/verida_verifiable_credentials._internal_.SecureStorageContextPublicKeys.md)
- [StaticEventEmitterOptions](../interfaces/verida_verifiable_credentials._internal_.StaticEventEmitterOptions.md)
- [Web3ResolverConfigurationOptions](../interfaces/verida_verifiable_credentials._internal_.Web3ResolverConfigurationOptions.md)

### Type aliases

- [IteratorResult](verida_verifiable_credentials._internal_.md#iteratorresult)
- [Record](verida_verifiable_credentials._internal_.md#record)
- [ServiceEndpoint](verida_verifiable_credentials._internal_.md#serviceendpoint)
- [Signer](verida_verifiable_credentials._internal_.md#signer)

### Variables

- [AbortSignal](verida_verifiable_credentials._internal_.md#abortsignal)
- [Number](verida_verifiable_credentials._internal_.md#number)

## Type aliases

### IteratorResult

Ƭ **IteratorResult**<`T`, `TReturn`\>: [`IteratorYieldResult`](../interfaces/verida_verifiable_credentials._internal_.IteratorYieldResult.md)<`T`\> \| [`IteratorReturnResult`](../interfaces/verida_verifiable_credentials._internal_.IteratorReturnResult.md)<`TReturn`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TReturn` | `any` |

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:41

___

### Record

Ƭ **Record**<`K`, `T`\>: { [P in K]: T }

Construct a type with a set of properties K of type T

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `any` |
| `T` | `T` |

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1499

___

### ServiceEndpoint

Ƭ **ServiceEndpoint**: `string` \| [`Record`](verida_verifiable_credentials._internal_.md#record)<`string`, `any`\>

Represents an endpoint of a Service entry in a DID document.

**`see`** [https://www.w3.org/TR/did-core/#dfn-serviceendpoint](https://www.w3.org/TR/did-core/#dfn-serviceendpoint)

**`see`** [https://www.w3.org/TR/did-core/#services](https://www.w3.org/TR/did-core/#services)

#### Defined in

node_modules/did-resolver/lib/resolver.d.ts:92

___

### Signer

Ƭ **Signer**: (`data`: `string` \| `Uint8Array`) => `Promise`<[`EcdsaSignature`](../interfaces/verida_verifiable_credentials._internal_.EcdsaSignature.md) \| `string`\>

#### Type declaration

▸ (`data`): `Promise`<[`EcdsaSignature`](../interfaces/verida_verifiable_credentials._internal_.EcdsaSignature.md) \| `string`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` \| `Uint8Array` |

##### Returns

`Promise`<[`EcdsaSignature`](../interfaces/verida_verifiable_credentials._internal_.EcdsaSignature.md) \| `string`\>

#### Defined in

node_modules/did-jwt/lib/JWT.d.ts:3

## Variables

### AbortSignal

• **AbortSignal**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `prototype` | [`AbortSignal`](verida_verifiable_credentials._internal_.md#abortsignal) |

#### Defined in

node_modules/@types/node/globals.d.ts:72

___

### Number

• **Number**: `NumberConstructor`

An object that represents a number of any kind. All JavaScript numbers are 64-bit floating-point numbers.

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:602
