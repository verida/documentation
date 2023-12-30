[root](../README.md) / [Modules](../modules.md) / [@verida/web3](verida_web3.md) / <internal\>

# Namespace: <internal\>

[@verida/web3](verida_web3.md).<internal\>

## Table of contents

### Classes

- [AbiCoder](../classes/verida_web3._internal_.AbiCoder.md)
- [BaseContract](../classes/verida_web3._internal_.BaseContract.md)
- [BigNumber](../classes/verida_web3._internal_.BigNumber.md)
- [Coder](../classes/verida_web3._internal_.Coder.md)
- [ConstructorFragment](../classes/verida_web3._internal_.ConstructorFragment.md)
- [Contract](../classes/verida_web3._internal_.Contract.md)
- [Description](../classes/verida_web3._internal_.Description.md)
- [ErrorDescription](../classes/verida_web3._internal_.ErrorDescription.md)
- [ErrorFragment](../classes/verida_web3._internal_.ErrorFragment.md)
- [EventFragment](../classes/verida_web3._internal_.EventFragment.md)
- [ForkEvent](../classes/verida_web3._internal_.ForkEvent.md)
- [Fragment](../classes/verida_web3._internal_.Fragment.md)
- [FunctionFragment](../classes/verida_web3._internal_.FunctionFragment.md)
- [Indexed](../classes/verida_web3._internal_.Indexed.md)
- [Interface](../classes/verida_web3._internal_.Interface.md)
- [LogDescription](../classes/verida_web3._internal_.LogDescription.md)
- [ParamType](../classes/verida_web3._internal_.ParamType.md)
- [Provider](../classes/verida_web3._internal_.Provider.md)
- [Reader](../classes/verida_web3._internal_.Reader.md)
- [RunningEvent](../classes/verida_web3._internal_.RunningEvent.md)
- [Signer](../classes/verida_web3._internal_.Signer.md)
- [TransactionDescription](../classes/verida_web3._internal_.TransactionDescription.md)
- [Writer](../classes/verida_web3._internal_.Writer.md)

### Interfaces

- [ArrayLike](../interfaces/verida_web3._internal_.ArrayLike.md)
- [Block](../interfaces/verida_web3._internal_.Block.md)
- [BlockWithTransactions](../interfaces/verida_web3._internal_.BlockWithTransactions.md)
- [ConcatArray](../interfaces/verida_web3._internal_.ConcatArray.md)
- [Error](../interfaces/verida_web3._internal_.Error.md)
- [Event](../interfaces/verida_web3._internal_.Event.md)
- [EventFilter](../interfaces/verida_web3._internal_.EventFilter.md)
- [FeeData](../interfaces/verida_web3._internal_.FeeData.md)
- [Filter](../interfaces/verida_web3._internal_.Filter.md)
- [Hexable](../interfaces/verida_web3._internal_.Hexable.md)
- [IterableIterator](../interfaces/verida_web3._internal_.IterableIterator.md)
- [Iterator](../interfaces/verida_web3._internal_.Iterator.md)
- [IteratorReturnResult](../interfaces/verida_web3._internal_.IteratorReturnResult.md)
- [IteratorYieldResult](../interfaces/verida_web3._internal_.IteratorYieldResult.md)
- [JsonFragment](../interfaces/verida_web3._internal_.JsonFragment.md)
- [JsonFragmentType](../interfaces/verida_web3._internal_.JsonFragmentType.md)
- [Log](../interfaces/verida_web3._internal_.Log.md)
- [OnceBlockable](../interfaces/verida_web3._internal_.OnceBlockable.md)
- [PopulatedTransaction](../interfaces/verida_web3._internal_.PopulatedTransaction.md)
- [Result](../interfaces/verida_web3._internal_.Result.md)
- [Transaction](../interfaces/verida_web3._internal_.Transaction.md)
- [TransactionReceipt](../interfaces/verida_web3._internal_.TransactionReceipt.md)
- [TransactionResponse](../interfaces/verida_web3._internal_.TransactionResponse.md)
- [VdaTransactionResult](../interfaces/verida_web3._internal_.VdaTransactionResult.md)
- [Web3ContractInfo](../interfaces/verida_web3._internal_.Web3ContractInfo.md)
- [Web3GasConfiguration](../interfaces/verida_web3._internal_.Web3GasConfiguration.md)
- [Web3GaslessPostConfig](../interfaces/verida_web3._internal_.Web3GaslessPostConfig.md)
- [Web3GaslessRequestConfig](../interfaces/verida_web3._internal_.Web3GaslessRequestConfig.md)
- [Web3MetaTransactionConfig](../interfaces/verida_web3._internal_.Web3MetaTransactionConfig.md)
- [Web3SelfTransactionConfig](../interfaces/verida_web3._internal_.Web3SelfTransactionConfig.md)
- [\_Block](../interfaces/verida_web3._internal_._Block.md)

### Type aliases

- [AccessList](verida_web3._internal_.md#accesslist)
- [AccessListish](verida_web3._internal_.md#accesslistish)
- [BigNumberish](verida_web3._internal_.md#bignumberish)
- [BlockTag](verida_web3._internal_.md#blocktag)
- [Bytes](verida_web3._internal_.md#bytes)
- [BytesLike](verida_web3._internal_.md#byteslike)
- [CoerceFunc](verida_web3._internal_.md#coercefunc)
- [CoerceFunc](verida_web3._internal_.md#coercefunc)
- [ContractFunction](verida_web3._internal_.md#contractfunction)
- [ContractInterface](verida_web3._internal_.md#contractinterface)
- [Deferrable](verida_web3._internal_.md#deferrable)
- [EIP1559GasMode](verida_web3._internal_.md#eip1559gasmode)
- [EventFilter](verida_web3._internal_.md#eventfilter)
- [EventType](verida_web3._internal_.md#eventtype)
- [FlatArray](verida_web3._internal_.md#flatarray)
- [IteratorResult](verida_web3._internal_.md#iteratorresult)
- [Listener](verida_web3._internal_.md#listener)
- [Network](verida_web3._internal_.md#network)
- [Record](verida_web3._internal_.md#record)
- [TransactionRequest](verida_web3._internal_.md#transactionrequest)
- [VeridaWeb3Config](verida_web3._internal_.md#veridaweb3config)
- [Web3CallType](verida_web3._internal_.md#web3calltype)

### Variables

- [Error](verida_web3._internal_.md#error)

## Type aliases

### AccessList

Ƭ **AccessList**: { `address`: `string` ; `storageKeys`: `string`[]  }[]

#### Defined in

node_modules/@ethersproject/transactions/lib/index.d.ts:3

___

### AccessListish

Ƭ **AccessListish**: [`AccessList`](verida_web3._internal_.md#accesslist) \| [`string`, `string`[]][] \| [`Record`](verida_web3._internal_.md#record)<`string`, `string`[]\>

#### Defined in

node_modules/@ethersproject/transactions/lib/index.d.ts:7

___

### BigNumberish

Ƭ **BigNumberish**: [`BigNumber`](../classes/verida_web3._internal_.BigNumber.md) \| [`Bytes`](verida_web3._internal_.md#bytes) \| `bigint` \| `string` \| `number`

#### Defined in

node_modules/@ethersproject/bignumber/lib/bignumber.d.ts:2

___

### BlockTag

Ƭ **BlockTag**: `string` \| `number`

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:33

___

### Bytes

Ƭ **Bytes**: [`ArrayLike`](../interfaces/verida_web3._internal_.ArrayLike.md)<`number`\>

#### Defined in

node_modules/@ethersproject/bytes/lib/index.d.ts:1

___

### BytesLike

Ƭ **BytesLike**: [`Bytes`](verida_web3._internal_.md#bytes) \| `string`

#### Defined in

node_modules/@ethersproject/bytes/lib/index.d.ts:2

___

### CoerceFunc

Ƭ **CoerceFunc**: (`type`: `string`, `value`: `any`) => `any`

#### Type declaration

▸ (`type`, `value`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `value` | `any` |

##### Returns

`any`

#### Defined in

node_modules/@ethersproject/abi/lib/abi-coder.d.ts:4

___

### CoerceFunc

Ƭ **CoerceFunc**: (`type`: `string`, `value`: `any`) => `any`

#### Type declaration

▸ (`type`, `value`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `value` | `any` |

##### Returns

`any`

#### Defined in

node_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:10

___

### ContractFunction

Ƭ **ContractFunction**<`T`\>: (...`args`: `any`[]) => `Promise`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Type declaration

▸ (...`args`): `Promise`<`T`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

##### Returns

`Promise`<`T`\>

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:45

___

### ContractInterface

Ƭ **ContractInterface**: `string` \| `ReadonlyArray`<[`Fragment`](../classes/verida_web3._internal_.Fragment.md) \| [`JsonFragment`](../interfaces/verida_web3._internal_.JsonFragment.md) \| `string`\> \| [`Interface`](../classes/verida_web3._internal_.Interface.md)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:77

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

### EIP1559GasMode

Ƭ **EIP1559GasMode**: ``"safeLow"`` \| ``"standard"`` \| ``"fast"``

EIP1559 Gas Configuration speed

#### Defined in

packages/types/dist/Web3Interfaces.d.ts:13

___

### EventFilter

Ƭ **EventFilter**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `address?` | `string` |
| `topics?` | (`string` \| `string`[])[] |

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:41

___

### EventType

Ƭ **EventType**: `string` \| (`string` \| `string`[])[] \| [`EventFilter`](../interfaces/verida_web3._internal_.EventFilter.md) \| [`ForkEvent`](../classes/verida_web3._internal_.ForkEvent.md)

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:121

___

### FlatArray

Ƭ **FlatArray**<`Arr`, `Depth`\>: { `done`: `Arr` ; `recur`: `Arr` extends `ReadonlyArray`<infer InnerArr\> ? [`FlatArray`](verida_web3._internal_.md#flatarray)<`InnerArr`, [``-1``, ``0``, ``1``, ``2``, ``3``, ``4``, ``5``, ``6``, ``7``, ``8``, ``9``, ``10``, ``11``, ``12``, ``13``, ``14``, ``15``, ``16``, ``17``, ``18``, ``19``, ``20``][`Depth`]\> : `Arr`  }[`Depth` extends ``-1`` ? ``"done"`` : ``"recur"``]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Arr` | `Arr` |
| `Depth` | extends `number` |

#### Defined in

node_modules/typescript/lib/lib.es2019.array.d.ts:21

___

### IteratorResult

Ƭ **IteratorResult**<`T`, `TReturn`\>: [`IteratorYieldResult`](../interfaces/verida_web3._internal_.IteratorYieldResult.md)<`T`\> \| [`IteratorReturnResult`](../interfaces/verida_web3._internal_.IteratorReturnResult.md)<`TReturn`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TReturn` | `any` |

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:41

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

### TransactionRequest

Ƭ **TransactionRequest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `accessList?` | [`AccessListish`](verida_web3._internal_.md#accesslistish) |
| `ccipReadEnabled?` | `boolean` |
| `chainId?` | `number` |
| `customData?` | [`Record`](verida_web3._internal_.md#record)<`string`, `any`\> |
| `data?` | [`BytesLike`](verida_web3._internal_.md#byteslike) |
| `from?` | `string` |
| `gasLimit?` | [`BigNumberish`](verida_web3._internal_.md#bignumberish) |
| `gasPrice?` | [`BigNumberish`](verida_web3._internal_.md#bignumberish) |
| `maxFeePerGas?` | [`BigNumberish`](verida_web3._internal_.md#bignumberish) |
| `maxPriorityFeePerGas?` | [`BigNumberish`](verida_web3._internal_.md#bignumberish) |
| `nonce?` | [`BigNumberish`](verida_web3._internal_.md#bignumberish) |
| `to?` | `string` |
| `type?` | `number` |
| `value?` | [`BigNumberish`](verida_web3._internal_.md#bignumberish) |

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:7

___

### VeridaWeb3Config

Ƭ **VeridaWeb3Config**: [`Web3ContractInfo`](../interfaces/verida_web3._internal_.Web3ContractInfo.md) & [`Web3SelfTransactionConfig`](../interfaces/verida_web3._internal_.Web3SelfTransactionConfig.md) \| [`Web3MetaTransactionConfig`](../interfaces/verida_web3._internal_.Web3MetaTransactionConfig.md)

#### Defined in

packages/types/dist/Web3Interfaces.d.ts:53

___

### Web3CallType

Ƭ **Web3CallType**: ``"web3"`` \| ``"gasless"``

Web3 SDK running mode

#### Defined in

packages/types/dist/Web3Interfaces.d.ts:5

## Variables

### Error

• **Error**: `ErrorConstructor`

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:984
