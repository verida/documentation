[root](../README.md) / [Modules](../modules.md) / [@verida/helpers](verida_helpers.md) / <internal\>

# Namespace: <internal\>

[@verida/helpers](verida_helpers.md).<internal\>

## Table of contents

### Namespaces

- [EventEmitter](verida_helpers._internal_.EventEmitter.md)

### Enumerations

- [ContextEngineType](../enums/verida_helpers._internal_.ContextEngineType.md)
- [DatabasePermissionOptionsEnum](../enums/verida_helpers._internal_.DatabasePermissionOptionsEnum.md)

### Classes

- [EventEmitter](../classes/verida_helpers._internal_.EventEmitter-1.md)

### Interfaces

- [AccountConfig](../interfaces/verida_helpers._internal_.AccountConfig.md)
- [AsyncIterableIterator](../interfaces/verida_helpers._internal_.AsyncIterableIterator.md)
- [AsyncIterator](../interfaces/verida_helpers._internal_.AsyncIterator.md)
- [AuthContext](../interfaces/verida_helpers._internal_.AuthContext.md)
- [AuthTypeConfig](../interfaces/verida_helpers._internal_.AuthTypeConfig.md)
- [ContextCloseOptions](../interfaces/verida_helpers._internal_.ContextCloseOptions.md)
- [ContextDatabaseInfo](../interfaces/verida_helpers._internal_.ContextDatabaseInfo.md)
- [ContextInfo](../interfaces/verida_helpers._internal_.ContextInfo.md)
- [DOMEventTarget](../interfaces/verida_helpers._internal_.DOMEventTarget.md)
- [DatabaseCloseOptions](../interfaces/verida_helpers._internal_.DatabaseCloseOptions.md)
- [DatabaseDeleteConfig](../interfaces/verida_helpers._internal_.DatabaseDeleteConfig.md)
- [DatabaseOpenConfig](../interfaces/verida_helpers._internal_.DatabaseOpenConfig.md)
- [DatabasePermissionsConfig](../interfaces/verida_helpers._internal_.DatabasePermissionsConfig.md)
- [DatastoreOpenConfig](../interfaces/verida_helpers._internal_.DatastoreOpenConfig.md)
- [DbRegistryEntry](../interfaces/verida_helpers._internal_.DbRegistryEntry.md)
- [DbRegistryEntryEncryptionKey](../interfaces/verida_helpers._internal_.DbRegistryEntryEncryptionKey.md)
- [EndpointUsage](../interfaces/verida_helpers._internal_.EndpointUsage.md)
- [EventEmitterOptions](../interfaces/verida_helpers._internal_.EventEmitterOptions.md)
- [FetchUriParams](../interfaces/verida_helpers._internal_.FetchUriParams.md)
- [IAccount](../interfaces/verida_helpers._internal_.IAccount.md)
- [IClient](../interfaces/verida_helpers._internal_.IClient.md)
- [IContext](../interfaces/verida_helpers._internal_.IContext.md)
- [IDIDContextManager](../interfaces/verida_helpers._internal_.IDIDContextManager.md)
- [IDatabase](../interfaces/verida_helpers._internal_.IDatabase.md)
- [IDatastore](../interfaces/verida_helpers._internal_.IDatastore.md)
- [IDbRegistry](../interfaces/verida_helpers._internal_.IDbRegistry.md)
- [IKeyring](../interfaces/verida_helpers._internal_.IKeyring.md)
- [IMessaging](../interfaces/verida_helpers._internal_.IMessaging.md)
- [INotification](../interfaces/verida_helpers._internal_.INotification.md)
- [IProfile](../interfaces/verida_helpers._internal_.IProfile.md)
- [ISchema](../interfaces/verida_helpers._internal_.ISchema.md)
- [IStorageEngine](../interfaces/verida_helpers._internal_.IStorageEngine.md)
- [IteratorReturnResult](../interfaces/verida_helpers._internal_.IteratorReturnResult.md)
- [IteratorYieldResult](../interfaces/verida_helpers._internal_.IteratorYieldResult.md)
- [KeyringPublicKeys](../interfaces/verida_helpers._internal_.KeyringPublicKeys.md)
- [MessageSendConfig](../interfaces/verida_helpers._internal_.MessageSendConfig.md)
- [MessagesConfig](../interfaces/verida_helpers._internal_.MessagesConfig.md)
- [NodeEventTarget](../interfaces/verida_helpers._internal_.NodeEventTarget.md)
- [Number](../interfaces/verida_helpers._internal_.Number.md)
- [PromiseLike](../interfaces/verida_helpers._internal_.PromiseLike.md)
- [SecureContextConfig](../interfaces/verida_helpers._internal_.SecureContextConfig.md)
- [SecureContextEndpoint](../interfaces/verida_helpers._internal_.SecureContextEndpoint.md)
- [SecureContextPublicKey](../interfaces/verida_helpers._internal_.SecureContextPublicKey.md)
- [SecureContextServices](../interfaces/verida_helpers._internal_.SecureContextServices.md)
- [SecureStorageContextPublicKeys](../interfaces/verida_helpers._internal_.SecureStorageContextPublicKeys.md)
- [StaticEventEmitterOptions](../interfaces/verida_helpers._internal_.StaticEventEmitterOptions.md)

### Type aliases

- [IteratorResult](verida_helpers._internal_.md#iteratorresult)
- [Record](verida_helpers._internal_.md#record)
- [ServiceEndpoint](verida_helpers._internal_.md#serviceendpoint)

### Variables

- [Number](verida_helpers._internal_.md#number)

## Type aliases

### IteratorResult

Ƭ **IteratorResult**<`T`, `TReturn`\>: [`IteratorYieldResult`](../interfaces/verida_helpers._internal_.IteratorYieldResult.md)<`T`\> \| [`IteratorReturnResult`](../interfaces/verida_helpers._internal_.IteratorReturnResult.md)<`TReturn`\>

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

Ƭ **ServiceEndpoint**: `string` \| [`Record`](verida_helpers._internal_.md#record)<`string`, `any`\>

Represents an endpoint of a Service entry in a DID document.

**`see`** [https://www.w3.org/TR/did-core/#dfn-serviceendpoint](https://www.w3.org/TR/did-core/#dfn-serviceendpoint)

**`see`** [https://www.w3.org/TR/did-core/#services](https://www.w3.org/TR/did-core/#services)

#### Defined in

node_modules/did-resolver/lib/resolver.d.ts:92

## Variables

### Number

• **Number**: `NumberConstructor`

An object that represents a number of any kind. All JavaScript numbers are 64-bit floating-point numbers.

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:602
