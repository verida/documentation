[root](../README.md) / [Modules](../modules.md) / [@verida/storage-link](verida_storage_link.md) / <internal\>

# Namespace: <internal\>

[@verida/storage-link](verida_storage_link.md).<internal\>

## Table of contents

### Enumerations

- [EnvironmentType](../enums/verida_storage_link._internal_.EnvironmentType.md)
- [SecureContextEndpointType](../enums/verida_storage_link._internal_.SecureContextEndpointType.md)

### Classes

- [BigNumber](../classes/verida_storage_link._internal_.BigNumber.md)
- [DIDClient](../classes/verida_storage_link._internal_.DIDClient.md)
- [Description](../classes/verida_storage_link._internal_.Description.md)
- [ForkEvent](../classes/verida_storage_link._internal_.ForkEvent.md)
- [Provider](../classes/verida_storage_link._internal_.Provider.md)
- [Signer](../classes/verida_storage_link._internal_.Signer.md)
- [default](../classes/verida_storage_link._internal_.default.md)

### Interfaces

- [ArrayLike](../interfaces/verida_storage_link._internal_.ArrayLike.md)
- [Block](../interfaces/verida_storage_link._internal_.Block.md)
- [BlockWithTransactions](../interfaces/verida_storage_link._internal_.BlockWithTransactions.md)
- [DIDClientConfig](../interfaces/verida_storage_link._internal_.DIDClientConfig.md)
- [EventFilter](../interfaces/verida_storage_link._internal_.EventFilter.md)
- [FeeData](../interfaces/verida_storage_link._internal_.FeeData.md)
- [Filter](../interfaces/verida_storage_link._internal_.Filter.md)
- [Hexable](../interfaces/verida_storage_link._internal_.Hexable.md)
- [IDIDClient](../interfaces/verida_storage_link._internal_.IDIDClient.md)
- [IDIDDocument](../interfaces/verida_storage_link._internal_.IDIDDocument.md)
- [IKeyring](../interfaces/verida_storage_link._internal_.IKeyring.md)
- [JsonWebKey](../interfaces/verida_storage_link._internal_.JsonWebKey.md)
- [KeyringPublicKeys](../interfaces/verida_storage_link._internal_.KeyringPublicKeys.md)
- [Log](../interfaces/verida_storage_link._internal_.Log.md)
- [OnceBlockable](../interfaces/verida_storage_link._internal_.OnceBlockable.md)
- [ProofInterface](../interfaces/verida_storage_link._internal_.ProofInterface.md)
- [SecureContextConfig](../interfaces/verida_storage_link._internal_.SecureContextConfig.md)
- [SecureContextEndpoint](../interfaces/verida_storage_link._internal_.SecureContextEndpoint.md)
- [SecureContextEndpoints](../interfaces/verida_storage_link._internal_.SecureContextEndpoints.md)
- [SecureContextPublicKey](../interfaces/verida_storage_link._internal_.SecureContextPublicKey.md)
- [SecureContextServices](../interfaces/verida_storage_link._internal_.SecureContextServices.md)
- [SecureStorageContextPublicKeys](../interfaces/verida_storage_link._internal_.SecureStorageContextPublicKeys.md)
- [Service](../interfaces/verida_storage_link._internal_.Service.md)
- [Transaction](../interfaces/verida_storage_link._internal_.Transaction.md)
- [TransactionReceipt](../interfaces/verida_storage_link._internal_.TransactionReceipt.md)
- [TransactionResponse](../interfaces/verida_storage_link._internal_.TransactionResponse.md)
- [VdaDidEndpointResponse](../interfaces/verida_storage_link._internal_.VdaDidEndpointResponse.md)
- [VeridaDocInterface](../interfaces/verida_storage_link._internal_.VeridaDocInterface.md)
- [VerificationMethod](../interfaces/verida_storage_link._internal_.VerificationMethod.md)
- [Web3GaslessPostConfig](../interfaces/verida_storage_link._internal_.Web3GaslessPostConfig.md)
- [Web3GaslessRequestConfig](../interfaces/verida_storage_link._internal_.Web3GaslessRequestConfig.md)
- [Web3MetaTransactionConfig](../interfaces/verida_storage_link._internal_.Web3MetaTransactionConfig.md)
- [Web3SelfTransactionConfigPart](../interfaces/verida_storage_link._internal_.Web3SelfTransactionConfigPart.md)
- [\_Block](../interfaces/verida_storage_link._internal_._Block.md)

### Type aliases

- [AccessList](verida_storage_link._internal_.md#accesslist)
- [AccessListish](verida_storage_link._internal_.md#accesslistish)
- [BigNumberish](verida_storage_link._internal_.md#bignumberish)
- [BlockTag](verida_storage_link._internal_.md#blocktag)
- [Bytes](verida_storage_link._internal_.md#bytes)
- [BytesLike](verida_storage_link._internal_.md#byteslike)
- [DIDDocument](verida_storage_link._internal_.md#diddocument)
- [Deferrable](verida_storage_link._internal_.md#deferrable)
- [EventType](verida_storage_link._internal_.md#eventtype)
- [Extensible](verida_storage_link._internal_.md#extensible)
- [KeyCapabilitySection](verida_storage_link._internal_.md#keycapabilitysection)
- [Listener](verida_storage_link._internal_.md#listener)
- [Network](verida_storage_link._internal_.md#network)
- [Record](verida_storage_link._internal_.md#record)
- [ServiceEndpoint](verida_storage_link._internal_.md#serviceendpoint)
- [ServiceEndpoint](verida_storage_link._internal_.md#serviceendpoint)
- [TransactionRequest](verida_storage_link._internal_.md#transactionrequest)
- [VdaDidEndpointResponses](verida_storage_link._internal_.md#vdadidendpointresponses)
- [Web3CallType](verida_storage_link._internal_.md#web3calltype)

## Type aliases

### AccessList

Ƭ **AccessList**: { `address`: `string` ; `storageKeys`: `string`[]  }[]

#### Defined in

node_modules/@ethersproject/transactions/lib/index.d.ts:3

___

### AccessListish

Ƭ **AccessListish**: [`AccessList`](verida_storage_link._internal_.md#accesslist) \| [`string`, `string`[]][] \| [`Record`](verida_storage_link._internal_.md#record)<`string`, `string`[]\>

#### Defined in

node_modules/@ethersproject/transactions/lib/index.d.ts:7

___

### BigNumberish

Ƭ **BigNumberish**: [`BigNumber`](../classes/verida_storage_link._internal_.BigNumber.md) \| [`Bytes`](verida_storage_link._internal_.md#bytes) \| `bigint` \| `string` \| `number`

#### Defined in

node_modules/@ethersproject/bignumber/lib/bignumber.d.ts:2

___

### BlockTag

Ƭ **BlockTag**: `string` \| `number`

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:33

___

### Bytes

Ƭ **Bytes**: [`ArrayLike`](../interfaces/verida_storage_link._internal_.ArrayLike.md)<`number`\>

#### Defined in

node_modules/@ethersproject/bytes/lib/index.d.ts:1

___

### BytesLike

Ƭ **BytesLike**: [`Bytes`](verida_storage_link._internal_.md#bytes) \| `string`

#### Defined in

node_modules/@ethersproject/bytes/lib/index.d.ts:2

___

### DIDDocument

Ƭ **DIDDocument**: { `@context?`: ``"https://www.w3.org/ns/did/v1"`` \| `string` \| `string`[] ; `alsoKnownAs?`: `string`[] ; `controller?`: `string` \| `string`[] ; `id`: `string` ; `publicKey?`: [`VerificationMethod`](../interfaces/verida_storage_link._internal_.VerificationMethod.md)[] ; `service?`: [`Service`](../interfaces/verida_storage_link._internal_.Service.md)[] ; `verificationMethod?`: [`VerificationMethod`](../interfaces/verida_storage_link._internal_.VerificationMethod.md)[]  } & { [x in KeyCapabilitySection]?: (string \| VerificationMethod)[] }

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

Ƭ **EventType**: `string` \| (`string` \| `string`[])[] \| [`EventFilter`](../interfaces/verida_storage_link._internal_.EventFilter.md) \| [`ForkEvent`](../classes/verida_storage_link._internal_.ForkEvent.md)

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:121

___

### Extensible

Ƭ **Extensible**: [`Record`](verida_storage_link._internal_.md#record)<`string`, `any`\>

Defines an object type that can be extended with other properties.

#### Defined in

node_modules/did-resolver/lib/resolver.d.ts:4

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

Ƭ **ServiceEndpoint**: `string` \| [`Record`](verida_storage_link._internal_.md#record)<`string`, `any`\>

#### Defined in

packages/storage-link/node_modules/did-resolver/lib/resolver.d.ts:46

___

### ServiceEndpoint

Ƭ **ServiceEndpoint**: `string` \| [`Record`](verida_storage_link._internal_.md#record)<`string`, `any`\>

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
| `accessList?` | [`AccessListish`](verida_storage_link._internal_.md#accesslistish) |
| `ccipReadEnabled?` | `boolean` |
| `chainId?` | `number` |
| `customData?` | [`Record`](verida_storage_link._internal_.md#record)<`string`, `any`\> |
| `data?` | [`BytesLike`](verida_storage_link._internal_.md#byteslike) |
| `from?` | `string` |
| `gasLimit?` | [`BigNumberish`](verida_storage_link._internal_.md#bignumberish) |
| `gasPrice?` | [`BigNumberish`](verida_storage_link._internal_.md#bignumberish) |
| `maxFeePerGas?` | [`BigNumberish`](verida_storage_link._internal_.md#bignumberish) |
| `maxPriorityFeePerGas?` | [`BigNumberish`](verida_storage_link._internal_.md#bignumberish) |
| `nonce?` | [`BigNumberish`](verida_storage_link._internal_.md#bignumberish) |
| `to?` | `string` |
| `type?` | `number` |
| `value?` | [`BigNumberish`](verida_storage_link._internal_.md#bignumberish) |

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:7

___

### VdaDidEndpointResponses

Ƭ **VdaDidEndpointResponses**: [`Record`](verida_storage_link._internal_.md#record)<`string`, [`VdaDidEndpointResponse`](../interfaces/verida_storage_link._internal_.VdaDidEndpointResponse.md)\>

#### Defined in

packages/types/dist/Web3Interfaces.d.ts:100

___

### Web3CallType

Ƭ **Web3CallType**: ``"web3"`` \| ``"gasless"``

Web3 SDK running mode

#### Defined in

packages/types/dist/Web3Interfaces.d.ts:5
