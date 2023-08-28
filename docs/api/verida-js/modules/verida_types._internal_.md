[root](../README.md) / [Modules](../modules.md) / [@verida/types](verida_types.md) / <internal\>

# Namespace: <internal\>

[@verida/types](verida_types.md).<internal\>

## Table of contents

### Namespaces

- [EventEmitter](verida_types._internal_.EventEmitter.md)

### Classes

- [BigNumber](../classes/verida_types._internal_.BigNumber.md)
- [Description](../classes/verida_types._internal_.Description.md)
- [EventEmitter](../classes/verida_types._internal_.EventEmitter-1.md)
- [ForkEvent](../classes/verida_types._internal_.ForkEvent.md)
- [Provider](../classes/verida_types._internal_.Provider.md)
- [Signer](../classes/verida_types._internal_.Signer.md)

### Interfaces

- [ArrayLike](../interfaces/verida_types._internal_.ArrayLike.md)
- [AsyncIterableIterator](../interfaces/verida_types._internal_.AsyncIterableIterator.md)
- [AsyncIterator](../interfaces/verida_types._internal_.AsyncIterator.md)
- [Block](../interfaces/verida_types._internal_.Block.md)
- [BlockWithTransactions](../interfaces/verida_types._internal_.BlockWithTransactions.md)
- [CallSite](../interfaces/verida_types._internal_.CallSite.md)
- [Error](../interfaces/verida_types._internal_.Error.md)
- [EventEmitterOptions](../interfaces/verida_types._internal_.EventEmitterOptions.md)
- [EventFilter](../interfaces/verida_types._internal_.EventFilter.md)
- [FeeData](../interfaces/verida_types._internal_.FeeData.md)
- [Filter](../interfaces/verida_types._internal_.Filter.md)
- [Hexable](../interfaces/verida_types._internal_.Hexable.md)
- [IteratorReturnResult](../interfaces/verida_types._internal_.IteratorReturnResult.md)
- [IteratorYieldResult](../interfaces/verida_types._internal_.IteratorYieldResult.md)
- [JsonWebKey](../interfaces/verida_types._internal_.JsonWebKey.md)
- [Log](../interfaces/verida_types._internal_.Log.md)
- [Number](../interfaces/verida_types._internal_.Number.md)
- [OnceBlockable](../interfaces/verida_types._internal_.OnceBlockable.md)
- [PromiseLike](../interfaces/verida_types._internal_.PromiseLike.md)
- [Service](../interfaces/verida_types._internal_.Service.md)
- [StaticEventEmitterOptions](../interfaces/verida_types._internal_.StaticEventEmitterOptions.md)
- [Transaction](../interfaces/verida_types._internal_.Transaction.md)
- [TransactionReceipt](../interfaces/verida_types._internal_.TransactionReceipt.md)
- [TransactionResponse](../interfaces/verida_types._internal_.TransactionResponse.md)
- [VerificationMethod](../interfaces/verida_types._internal_.VerificationMethod.md)
- [\_Block](../interfaces/verida_types._internal_._Block.md)
- [\_DOMEventTarget](../interfaces/verida_types._internal_._DOMEventTarget.md)
- [\_NodeEventTarget](../interfaces/verida_types._internal_._NodeEventTarget.md)

### Type aliases

- [AccessList](verida_types._internal_.md#accesslist)
- [AccessListish](verida_types._internal_.md#accesslistish)
- [BigNumberish](verida_types._internal_.md#bignumberish)
- [BlockTag](verida_types._internal_.md#blocktag)
- [Bytes](verida_types._internal_.md#bytes)
- [BytesLike](verida_types._internal_.md#byteslike)
- [DIDDocument](verida_types._internal_.md#diddocument)
- [Deferrable](verida_types._internal_.md#deferrable)
- [EventType](verida_types._internal_.md#eventtype)
- [Exclude](verida_types._internal_.md#exclude)
- [Extensible](verida_types._internal_.md#extensible)
- [IteratorResult](verida_types._internal_.md#iteratorresult)
- [KeyCapabilitySection](verida_types._internal_.md#keycapabilitysection)
- [Listener](verida_types._internal_.md#listener)
- [Network](verida_types._internal_.md#network)
- [Omit](verida_types._internal_.md#omit)
- [Pick](verida_types._internal_.md#pick)
- [Record](verida_types._internal_.md#record)
- [ServiceEndpoint](verida_types._internal_.md#serviceendpoint)
- [TransactionRequest](verida_types._internal_.md#transactionrequest)

### Variables

- [Error](verida_types._internal_.md#error)
- [Number](verida_types._internal_.md#number)

## Type aliases

### AccessList

Ƭ **AccessList**: { `address`: `string` ; `storageKeys`: `string`[]  }[]

#### Defined in

node_modules/@ethersproject/transactions/lib/index.d.ts:3

___

### AccessListish

Ƭ **AccessListish**: [`AccessList`](verida_types._internal_.md#accesslist) \| [`string`, `string`[]][] \| [`Record`](verida_types._internal_.md#record)<`string`, `string`[]\>

#### Defined in

node_modules/@ethersproject/transactions/lib/index.d.ts:7

___

### BigNumberish

Ƭ **BigNumberish**: [`BigNumber`](../classes/verida_types._internal_.BigNumber.md) \| [`Bytes`](verida_types._internal_.md#bytes) \| `bigint` \| `string` \| `number`

#### Defined in

node_modules/@ethersproject/bignumber/lib/bignumber.d.ts:2

___

### BlockTag

Ƭ **BlockTag**: `string` \| `number`

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:33

___

### Bytes

Ƭ **Bytes**: [`ArrayLike`](../interfaces/verida_types._internal_.ArrayLike.md)<`number`\>

#### Defined in

node_modules/@ethersproject/bytes/lib/index.d.ts:1

___

### BytesLike

Ƭ **BytesLike**: [`Bytes`](verida_types._internal_.md#bytes) \| `string`

#### Defined in

node_modules/@ethersproject/bytes/lib/index.d.ts:2

___

### DIDDocument

Ƭ **DIDDocument**: { `@context?`: ``"https://www.w3.org/ns/did/v1"`` \| `string` \| `string`[] ; `alsoKnownAs?`: `string`[] ; `controller?`: `string` \| `string`[] ; `id`: `string` ; `publicKey?`: [`VerificationMethod`](../interfaces/verida_types._internal_.VerificationMethod.md)[] ; `service?`: [`Service`](../interfaces/verida_types._internal_.Service.md)[] ; `verificationMethod?`: [`VerificationMethod`](../interfaces/verida_types._internal_.VerificationMethod.md)[]  } & { [x in KeyCapabilitySection]?: (string \| VerificationMethod)[] }

Represents a DID document.

**`see`** [https://www.w3.org/TR/did-core/#did-document-properties](https://www.w3.org/TR/did-core/#did-document-properties)

#### Defined in

node_modules/did-resolver/lib/resolver.d.ts:60

___

### Deferrable

Ƭ **Deferrable**<`T`\>: { [K in keyof T]: T[K] \| Promise<T[K]\> }

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

node_modules/@ethersproject/properties/lib/index.d.ts:3

___

### EventType

Ƭ **EventType**: `string` \| (`string` \| `string`[])[] \| [`EventFilter`](../interfaces/verida_types._internal_.EventFilter.md) \| [`ForkEvent`](../classes/verida_types._internal_.ForkEvent.md)

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:121

___

### Exclude

Ƭ **Exclude**<`T`, `U`\>: `T` extends `U` ? `never` : `T`

Exclude from T those types that are assignable to U

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1506

___

### Extensible

Ƭ **Extensible**: [`Record`](verida_types._internal_.md#record)<`string`, `any`\>

Defines an object type that can be extended with other properties.

#### Defined in

node_modules/did-resolver/lib/resolver.d.ts:4

___

### IteratorResult

Ƭ **IteratorResult**<`T`, `TReturn`\>: [`IteratorYieldResult`](../interfaces/verida_types._internal_.IteratorYieldResult.md)<`T`\> \| [`IteratorReturnResult`](../interfaces/verida_types._internal_.IteratorReturnResult.md)<`TReturn`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TReturn` | `any` |

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:41

___

### KeyCapabilitySection

Ƭ **KeyCapabilitySection**: ``"authentication"`` \| ``"assertionMethod"`` \| ``"keyAgreement"`` \| ``"capabilityInvocation"`` \| ``"capabilityDelegation"``

Represents the Verification Relationship between a DID subject and a Verification Method.

**`see`** [https://www.w3.org/TR/did-core/#verification-relationships](https://www.w3.org/TR/did-core/#verification-relationships)

#### Defined in

node_modules/did-resolver/lib/resolver.d.ts:54

___

### Listener

Ƭ **Listener**: (...`args`: `any`[]) => `void`

#### Type declaration

▸ (...`args`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

##### Returns

`void`

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:122

___

### Network

Ƭ **Network**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `chainId` | `number` |
| `ensAddress?` | `string` |
| `name` | `string` |
| `_defaultProvider?` | (`providers`: `any`, `options?`: `any`) => `any` |

#### Defined in

node_modules/@ethersproject/networks/lib/types.d.ts:1

___

### Omit

Ƭ **Omit**<`T`, `K`\>: [`Pick`](verida_types._internal_.md#pick)<`T`, [`Exclude`](verida_types._internal_.md#exclude)<keyof `T`, `K`\>\>

Construct a type with the properties of T except for those in type K.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `K` | extends keyof `any` |

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1516

___

### Pick

Ƭ **Pick**<`T`, `K`\>: { [P in K]: T[P] }

From T, pick a set of properties whose keys are in the union K

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `K` | extends keyof `T` |

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1492

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

Ƭ **ServiceEndpoint**: `string` \| [`Record`](verida_types._internal_.md#record)<`string`, `any`\>

Represents an endpoint of a Service entry in a DID document.

**`see`** [https://www.w3.org/TR/did-core/#dfn-serviceendpoint](https://www.w3.org/TR/did-core/#dfn-serviceendpoint)

**`see`** [https://www.w3.org/TR/did-core/#services](https://www.w3.org/TR/did-core/#services)

#### Defined in

node_modules/did-resolver/lib/resolver.d.ts:92

___

### TransactionRequest

Ƭ **TransactionRequest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `accessList?` | [`AccessListish`](verida_types._internal_.md#accesslistish) |
| `ccipReadEnabled?` | `boolean` |
| `chainId?` | `number` |
| `customData?` | [`Record`](verida_types._internal_.md#record)<`string`, `any`\> |
| `data?` | [`BytesLike`](verida_types._internal_.md#byteslike) |
| `from?` | `string` |
| `gasLimit?` | [`BigNumberish`](verida_types._internal_.md#bignumberish) |
| `gasPrice?` | [`BigNumberish`](verida_types._internal_.md#bignumberish) |
| `maxFeePerGas?` | [`BigNumberish`](verida_types._internal_.md#bignumberish) |
| `maxPriorityFeePerGas?` | [`BigNumberish`](verida_types._internal_.md#bignumberish) |
| `nonce?` | [`BigNumberish`](verida_types._internal_.md#bignumberish) |
| `to?` | `string` |
| `type?` | `number` |
| `value?` | [`BigNumberish`](verida_types._internal_.md#bignumberish) |

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:7

## Variables

### Error

• **Error**: `ErrorConstructor`

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:984

___

### Number

• **Number**: `NumberConstructor`

An object that represents a number of any kind. All JavaScript numbers are 64-bit floating-point numbers.

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:602
