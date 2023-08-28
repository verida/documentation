[root](../README.md) / [Modules](../modules.md) / [@verida/vda-did](../modules/verida_vda_did.md) / [<internal\>](../modules/verida_vda_did._internal_.md) / Contract

# Class: Contract

[@verida/vda-did](../modules/verida_vda_did.md).[<internal\>](../modules/verida_vda_did._internal_.md).Contract

## Hierarchy

- [`BaseContract`](verida_vda_did._internal_.BaseContract.md)

  ↳ **`Contract`**

## Indexable

▪ [key: `string`]: [`ContractFunction`](../modules/verida_vda_did._internal_.md#contractfunction) \| `any`

## Table of contents

### Constructors

- [constructor](verida_vda_did._internal_.Contract.md#constructor)

### Properties

- [\_deployedPromise](verida_vda_did._internal_.Contract.md#_deployedpromise)
- [\_runningEvents](verida_vda_did._internal_.Contract.md#_runningevents)
- [\_wrappedEmits](verida_vda_did._internal_.Contract.md#_wrappedemits)
- [address](verida_vda_did._internal_.Contract.md#address)
- [callStatic](verida_vda_did._internal_.Contract.md#callstatic)
- [deployTransaction](verida_vda_did._internal_.Contract.md#deploytransaction)
- [estimateGas](verida_vda_did._internal_.Contract.md#estimategas)
- [filters](verida_vda_did._internal_.Contract.md#filters)
- [functions](verida_vda_did._internal_.Contract.md#functions)
- [interface](verida_vda_did._internal_.Contract.md#interface)
- [populateTransaction](verida_vda_did._internal_.Contract.md#populatetransaction)
- [provider](verida_vda_did._internal_.Contract.md#provider)
- [resolvedAddress](verida_vda_did._internal_.Contract.md#resolvedaddress)
- [signer](verida_vda_did._internal_.Contract.md#signer)

### Methods

- [\_checkRunningEvents](verida_vda_did._internal_.Contract.md#_checkrunningevents)
- [\_deployed](verida_vda_did._internal_.Contract.md#_deployed)
- [\_wrapEvent](verida_vda_did._internal_.Contract.md#_wrapevent)
- [attach](verida_vda_did._internal_.Contract.md#attach)
- [connect](verida_vda_did._internal_.Contract.md#connect)
- [deployed](verida_vda_did._internal_.Contract.md#deployed)
- [emit](verida_vda_did._internal_.Contract.md#emit)
- [fallback](verida_vda_did._internal_.Contract.md#fallback)
- [listenerCount](verida_vda_did._internal_.Contract.md#listenercount)
- [listeners](verida_vda_did._internal_.Contract.md#listeners)
- [off](verida_vda_did._internal_.Contract.md#off)
- [on](verida_vda_did._internal_.Contract.md#on)
- [once](verida_vda_did._internal_.Contract.md#once)
- [queryFilter](verida_vda_did._internal_.Contract.md#queryfilter)
- [removeAllListeners](verida_vda_did._internal_.Contract.md#removealllisteners)
- [removeListener](verida_vda_did._internal_.Contract.md#removelistener)
- [getContractAddress](verida_vda_did._internal_.Contract.md#getcontractaddress)
- [getInterface](verida_vda_did._internal_.Contract.md#getinterface)
- [isIndexed](verida_vda_did._internal_.Contract.md#isindexed)

## Constructors

### constructor

• **new Contract**(`addressOrName`, `contractInterface`, `signerOrProvider?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |
| `contractInterface` | [`ContractInterface`](../modules/verida_vda_did._internal_.md#contractinterface) |
| `signerOrProvider?` | [`Signer`](verida_vda_did._internal_.Signer.md) \| [`Provider`](verida_vda_did._internal_.Provider.md) |

#### Inherited from

[BaseContract](verida_vda_did._internal_.BaseContract.md).[constructor](verida_vda_did._internal_.BaseContract.md#constructor)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:107

## Properties

### \_deployedPromise

• **\_deployedPromise**: `Promise`<[`Contract`](verida_vda_did._internal_.Contract.md)\>

#### Inherited from

[BaseContract](verida_vda_did._internal_.BaseContract.md).[_deployedPromise](verida_vda_did._internal_.BaseContract.md#_deployedpromise)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:100

___

### \_runningEvents

• **\_runningEvents**: `Object`

#### Index signature

▪ [eventTag: `string`]: [`RunningEvent`](verida_vda_did._internal_.RunningEvent.md)

#### Inherited from

[BaseContract](verida_vda_did._internal_.BaseContract.md).[_runningEvents](verida_vda_did._internal_.BaseContract.md#_runningevents)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:101

___

### \_wrappedEmits

• **\_wrappedEmits**: `Object`

#### Index signature

▪ [eventTag: `string`]: (...`args`: `any`[]) => `void`

#### Inherited from

[BaseContract](verida_vda_did._internal_.BaseContract.md).[_wrappedEmits](verida_vda_did._internal_.BaseContract.md#_wrappedemits)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:104

___

### address

• `Readonly` **address**: `string`

#### Inherited from

[BaseContract](verida_vda_did._internal_.BaseContract.md).[address](verida_vda_did._internal_.BaseContract.md#address)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:79

___

### callStatic

• `Readonly` **callStatic**: `Object`

#### Index signature

▪ [name: `string`]: [`ContractFunction`](../modules/verida_vda_did._internal_.md#contractfunction)

#### Inherited from

[BaseContract](verida_vda_did._internal_.BaseContract.md).[callStatic](verida_vda_did._internal_.BaseContract.md#callstatic)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:86

___

### deployTransaction

• `Readonly` **deployTransaction**: [`TransactionResponse`](../interfaces/verida_vda_did._internal_.TransactionResponse.md)

#### Inherited from

[BaseContract](verida_vda_did._internal_.BaseContract.md).[deployTransaction](verida_vda_did._internal_.BaseContract.md#deploytransaction)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:99

___

### estimateGas

• `Readonly` **estimateGas**: `Object`

#### Index signature

▪ [name: `string`]: [`ContractFunction`](../modules/verida_vda_did._internal_.md#contractfunction)<[`BigNumber`](verida_vda_did._internal_.BigNumber.md)\>

#### Inherited from

[BaseContract](verida_vda_did._internal_.BaseContract.md).[estimateGas](verida_vda_did._internal_.BaseContract.md#estimategas)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:89

___

### filters

• `Readonly` **filters**: `Object`

#### Index signature

▪ [name: `string`]: (...`args`: `any`[]) => [`EventFilter`](../modules/verida_vda_did._internal_.md#eventfilter)

#### Inherited from

[BaseContract](verida_vda_did._internal_.BaseContract.md).[filters](verida_vda_did._internal_.BaseContract.md#filters)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:95

___

### functions

• `Readonly` **functions**: `Object`

#### Index signature

▪ [name: `string`]: [`ContractFunction`](../modules/verida_vda_did._internal_.md#contractfunction)

#### Inherited from

[BaseContract](verida_vda_did._internal_.BaseContract.md).[functions](verida_vda_did._internal_.BaseContract.md#functions)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:83

___

### interface

• `Readonly` **interface**: [`Interface`](verida_vda_did._internal_.Interface.md)

#### Inherited from

[BaseContract](verida_vda_did._internal_.BaseContract.md).[interface](verida_vda_did._internal_.BaseContract.md#interface)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:80

___

### populateTransaction

• `Readonly` **populateTransaction**: `Object`

#### Index signature

▪ [name: `string`]: [`ContractFunction`](../modules/verida_vda_did._internal_.md#contractfunction)<[`PopulatedTransaction`](../interfaces/verida_vda_did._internal_.PopulatedTransaction.md)\>

#### Inherited from

[BaseContract](verida_vda_did._internal_.BaseContract.md).[populateTransaction](verida_vda_did._internal_.BaseContract.md#populatetransaction)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:92

___

### provider

• `Readonly` **provider**: [`Provider`](verida_vda_did._internal_.Provider.md)

#### Inherited from

[BaseContract](verida_vda_did._internal_.BaseContract.md).[provider](verida_vda_did._internal_.BaseContract.md#provider)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:82

___

### resolvedAddress

• `Readonly` **resolvedAddress**: `Promise`<`string`\>

#### Inherited from

[BaseContract](verida_vda_did._internal_.BaseContract.md).[resolvedAddress](verida_vda_did._internal_.BaseContract.md#resolvedaddress)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:98

___

### signer

• `Readonly` **signer**: [`Signer`](verida_vda_did._internal_.Signer.md)

#### Inherited from

[BaseContract](verida_vda_did._internal_.BaseContract.md).[signer](verida_vda_did._internal_.BaseContract.md#signer)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:81

## Methods

### \_checkRunningEvents

▸ **_checkRunningEvents**(`runningEvent`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `runningEvent` | [`RunningEvent`](verida_vda_did._internal_.RunningEvent.md) |

#### Returns

`void`

#### Inherited from

[BaseContract](verida_vda_did._internal_.BaseContract.md).[_checkRunningEvents](verida_vda_did._internal_.BaseContract.md#_checkrunningevents)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:121

___

### \_deployed

▸ **_deployed**(`blockTag?`): `Promise`<[`Contract`](verida_vda_did._internal_.Contract.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockTag?` | [`BlockTag`](../modules/verida_vda_did._internal_.md#blocktag) |

#### Returns

`Promise`<[`Contract`](verida_vda_did._internal_.Contract.md)\>

#### Inherited from

[BaseContract](verida_vda_did._internal_.BaseContract.md).[_deployed](verida_vda_did._internal_.BaseContract.md#_deployed)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:114

___

### \_wrapEvent

▸ **_wrapEvent**(`runningEvent`, `log`, `listener`): [`Event`](../interfaces/verida_vda_did._internal_.Event.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `runningEvent` | [`RunningEvent`](verida_vda_did._internal_.RunningEvent.md) |
| `log` | [`Log`](../interfaces/verida_vda_did._internal_.Log.md) |
| `listener` | [`Listener`](../modules/verida_vda_did._internal_.md#listener) |

#### Returns

[`Event`](../interfaces/verida_vda_did._internal_.Event.md)

#### Inherited from

[BaseContract](verida_vda_did._internal_.BaseContract.md).[_wrapEvent](verida_vda_did._internal_.BaseContract.md#_wrapevent)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:122

___

### attach

▸ **attach**(`addressOrName`): [`Contract`](verida_vda_did._internal_.Contract.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`Contract`](verida_vda_did._internal_.Contract.md)

#### Inherited from

[BaseContract](verida_vda_did._internal_.BaseContract.md).[attach](verida_vda_did._internal_.BaseContract.md#attach)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:117

___

### connect

▸ **connect**(`signerOrProvider`): [`Contract`](verida_vda_did._internal_.Contract.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| [`Signer`](verida_vda_did._internal_.Signer.md) \| [`Provider`](verida_vda_did._internal_.Provider.md) |

#### Returns

[`Contract`](verida_vda_did._internal_.Contract.md)

#### Inherited from

[BaseContract](verida_vda_did._internal_.BaseContract.md).[connect](verida_vda_did._internal_.BaseContract.md#connect)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:116

___

### deployed

▸ **deployed**(): `Promise`<[`Contract`](verida_vda_did._internal_.Contract.md)\>

#### Returns

`Promise`<[`Contract`](verida_vda_did._internal_.Contract.md)\>

#### Inherited from

[BaseContract](verida_vda_did._internal_.BaseContract.md).[deployed](verida_vda_did._internal_.BaseContract.md#deployed)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:113

___

### emit

▸ **emit**(`eventName`, ...`args`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| [`EventFilter`](../modules/verida_vda_did._internal_.md#eventfilter) |
| `...args` | `any`[] |

#### Returns

`boolean`

#### Inherited from

[BaseContract](verida_vda_did._internal_.BaseContract.md).[emit](verida_vda_did._internal_.BaseContract.md#emit)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:127

___

### fallback

▸ **fallback**(`overrides?`): `Promise`<[`TransactionResponse`](../interfaces/verida_vda_did._internal_.TransactionResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | [`TransactionRequest`](../modules/verida_vda_did._internal_.md#transactionrequest) |

#### Returns

`Promise`<[`TransactionResponse`](../interfaces/verida_vda_did._internal_.TransactionResponse.md)\>

#### Inherited from

[BaseContract](verida_vda_did._internal_.BaseContract.md).[fallback](verida_vda_did._internal_.BaseContract.md#fallback)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:115

___

### listenerCount

▸ **listenerCount**(`eventName?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` \| [`EventFilter`](../modules/verida_vda_did._internal_.md#eventfilter) |

#### Returns

`number`

#### Inherited from

[BaseContract](verida_vda_did._internal_.BaseContract.md).[listenerCount](verida_vda_did._internal_.BaseContract.md#listenercount)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:128

___

### listeners

▸ **listeners**(`eventName?`): [`Listener`](../modules/verida_vda_did._internal_.md#listener)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` \| [`EventFilter`](../modules/verida_vda_did._internal_.md#eventfilter) |

#### Returns

[`Listener`](../modules/verida_vda_did._internal_.md#listener)[]

#### Inherited from

[BaseContract](verida_vda_did._internal_.BaseContract.md).[listeners](verida_vda_did._internal_.BaseContract.md#listeners)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:129

___

### off

▸ **off**(`eventName`, `listener`): [`Contract`](verida_vda_did._internal_.Contract.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| [`EventFilter`](../modules/verida_vda_did._internal_.md#eventfilter) |
| `listener` | [`Listener`](../modules/verida_vda_did._internal_.md#listener) |

#### Returns

[`Contract`](verida_vda_did._internal_.Contract.md)

#### Inherited from

[BaseContract](verida_vda_did._internal_.BaseContract.md).[off](verida_vda_did._internal_.BaseContract.md#off)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:131

___

### on

▸ **on**(`event`, `listener`): [`Contract`](verida_vda_did._internal_.Contract.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| [`EventFilter`](../modules/verida_vda_did._internal_.md#eventfilter) |
| `listener` | [`Listener`](../modules/verida_vda_did._internal_.md#listener) |

#### Returns

[`Contract`](verida_vda_did._internal_.Contract.md)

#### Inherited from

[BaseContract](verida_vda_did._internal_.BaseContract.md).[on](verida_vda_did._internal_.BaseContract.md#on)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:125

___

### once

▸ **once**(`event`, `listener`): [`Contract`](verida_vda_did._internal_.Contract.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| [`EventFilter`](../modules/verida_vda_did._internal_.md#eventfilter) |
| `listener` | [`Listener`](../modules/verida_vda_did._internal_.md#listener) |

#### Returns

[`Contract`](verida_vda_did._internal_.Contract.md)

#### Inherited from

[BaseContract](verida_vda_did._internal_.BaseContract.md).[once](verida_vda_did._internal_.BaseContract.md#once)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:126

___

### queryFilter

▸ **queryFilter**(`event`, `fromBlockOrBlockhash?`, `toBlock?`): `Promise`<[`Event`](../interfaces/verida_vda_did._internal_.Event.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| [`EventFilter`](../modules/verida_vda_did._internal_.md#eventfilter) |
| `fromBlockOrBlockhash?` | [`BlockTag`](../modules/verida_vda_did._internal_.md#blocktag) |
| `toBlock?` | [`BlockTag`](../modules/verida_vda_did._internal_.md#blocktag) |

#### Returns

`Promise`<[`Event`](../interfaces/verida_vda_did._internal_.Event.md)[]\>

#### Inherited from

[BaseContract](verida_vda_did._internal_.BaseContract.md).[queryFilter](verida_vda_did._internal_.BaseContract.md#queryfilter)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:124

___

### removeAllListeners

▸ **removeAllListeners**(`eventName?`): [`Contract`](verida_vda_did._internal_.Contract.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` \| [`EventFilter`](../modules/verida_vda_did._internal_.md#eventfilter) |

#### Returns

[`Contract`](verida_vda_did._internal_.Contract.md)

#### Inherited from

[BaseContract](verida_vda_did._internal_.BaseContract.md).[removeAllListeners](verida_vda_did._internal_.BaseContract.md#removealllisteners)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:130

___

### removeListener

▸ **removeListener**(`eventName`, `listener`): [`Contract`](verida_vda_did._internal_.Contract.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| [`EventFilter`](../modules/verida_vda_did._internal_.md#eventfilter) |
| `listener` | [`Listener`](../modules/verida_vda_did._internal_.md#listener) |

#### Returns

[`Contract`](verida_vda_did._internal_.Contract.md)

#### Inherited from

[BaseContract](verida_vda_did._internal_.BaseContract.md).[removeListener](verida_vda_did._internal_.BaseContract.md#removelistener)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:132

___

### getContractAddress

▸ `Static` **getContractAddress**(`transaction`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | `Object` |
| `transaction.from` | `string` |
| `transaction.nonce` | [`BigNumberish`](../modules/verida_vda_did._internal_.md#bignumberish) |

#### Returns

`string`

#### Inherited from

[BaseContract](verida_vda_did._internal_.BaseContract.md).[getContractAddress](verida_vda_did._internal_.BaseContract.md#getcontractaddress)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:108

___

### getInterface

▸ `Static` **getInterface**(`contractInterface`): [`Interface`](verida_vda_did._internal_.Interface.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `contractInterface` | [`ContractInterface`](../modules/verida_vda_did._internal_.md#contractinterface) |

#### Returns

[`Interface`](verida_vda_did._internal_.Interface.md)

#### Inherited from

[BaseContract](verida_vda_did._internal_.BaseContract.md).[getInterface](verida_vda_did._internal_.BaseContract.md#getinterface)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:112

___

### isIndexed

▸ `Static` **isIndexed**(`value`): value is Indexed

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is Indexed

#### Inherited from

[BaseContract](verida_vda_did._internal_.BaseContract.md).[isIndexed](verida_vda_did._internal_.BaseContract.md#isindexed)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:118
