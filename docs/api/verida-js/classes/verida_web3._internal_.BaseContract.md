[root](../README.md) / [Modules](../modules.md) / [@verida/web3](../modules/verida_web3.md) / [<internal\>](../modules/verida_web3._internal_.md) / BaseContract

# Class: BaseContract

[@verida/web3](../modules/verida_web3.md).[<internal\>](../modules/verida_web3._internal_.md).BaseContract

## Hierarchy

- **`BaseContract`**

  ↳ [`Contract`](verida_web3._internal_.Contract.md)

## Table of contents

### Constructors

- [constructor](verida_web3._internal_.BaseContract.md#constructor)

### Properties

- [\_addEventListener](verida_web3._internal_.BaseContract.md#_addeventlistener)
- [\_deployedPromise](verida_web3._internal_.BaseContract.md#_deployedpromise)
- [\_getRunningEvent](verida_web3._internal_.BaseContract.md#_getrunningevent)
- [\_normalizeRunningEvent](verida_web3._internal_.BaseContract.md#_normalizerunningevent)
- [\_runningEvents](verida_web3._internal_.BaseContract.md#_runningevents)
- [\_wrappedEmits](verida_web3._internal_.BaseContract.md#_wrappedemits)
- [address](verida_web3._internal_.BaseContract.md#address)
- [callStatic](verida_web3._internal_.BaseContract.md#callstatic)
- [deployTransaction](verida_web3._internal_.BaseContract.md#deploytransaction)
- [estimateGas](verida_web3._internal_.BaseContract.md#estimategas)
- [filters](verida_web3._internal_.BaseContract.md#filters)
- [functions](verida_web3._internal_.BaseContract.md#functions)
- [interface](verida_web3._internal_.BaseContract.md#interface)
- [populateTransaction](verida_web3._internal_.BaseContract.md#populatetransaction)
- [provider](verida_web3._internal_.BaseContract.md#provider)
- [resolvedAddress](verida_web3._internal_.BaseContract.md#resolvedaddress)
- [signer](verida_web3._internal_.BaseContract.md#signer)

### Methods

- [\_checkRunningEvents](verida_web3._internal_.BaseContract.md#_checkrunningevents)
- [\_deployed](verida_web3._internal_.BaseContract.md#_deployed)
- [\_wrapEvent](verida_web3._internal_.BaseContract.md#_wrapevent)
- [attach](verida_web3._internal_.BaseContract.md#attach)
- [connect](verida_web3._internal_.BaseContract.md#connect)
- [deployed](verida_web3._internal_.BaseContract.md#deployed)
- [emit](verida_web3._internal_.BaseContract.md#emit)
- [fallback](verida_web3._internal_.BaseContract.md#fallback)
- [listenerCount](verida_web3._internal_.BaseContract.md#listenercount)
- [listeners](verida_web3._internal_.BaseContract.md#listeners)
- [off](verida_web3._internal_.BaseContract.md#off)
- [on](verida_web3._internal_.BaseContract.md#on)
- [once](verida_web3._internal_.BaseContract.md#once)
- [queryFilter](verida_web3._internal_.BaseContract.md#queryfilter)
- [removeAllListeners](verida_web3._internal_.BaseContract.md#removealllisteners)
- [removeListener](verida_web3._internal_.BaseContract.md#removelistener)
- [getContractAddress](verida_web3._internal_.BaseContract.md#getcontractaddress)
- [getInterface](verida_web3._internal_.BaseContract.md#getinterface)
- [isIndexed](verida_web3._internal_.BaseContract.md#isindexed)

## Constructors

### constructor

• **new BaseContract**(`addressOrName`, `contractInterface`, `signerOrProvider?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |
| `contractInterface` | [`ContractInterface`](../modules/verida_web3._internal_.md#contractinterface) |
| `signerOrProvider?` | [`Signer`](verida_web3._internal_.Signer.md) \| [`Provider`](verida_web3._internal_.Provider.md) |

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:107

## Properties

### \_addEventListener

• `Private` **\_addEventListener**: `any`

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:123

___

### \_deployedPromise

• **\_deployedPromise**: `Promise`<[`Contract`](verida_web3._internal_.Contract.md)\>

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:100

___

### \_getRunningEvent

• `Private` **\_getRunningEvent**: `any`

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:120

___

### \_normalizeRunningEvent

• `Private` **\_normalizeRunningEvent**: `any`

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:119

___

### \_runningEvents

• **\_runningEvents**: `Object`

#### Index signature

▪ [eventTag: `string`]: [`RunningEvent`](verida_web3._internal_.RunningEvent.md)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:101

___

### \_wrappedEmits

• **\_wrappedEmits**: `Object`

#### Index signature

▪ [eventTag: `string`]: (...`args`: `any`[]) => `void`

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:104

___

### address

• `Readonly` **address**: `string`

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:79

___

### callStatic

• `Readonly` **callStatic**: `Object`

#### Index signature

▪ [name: `string`]: [`ContractFunction`](../modules/verida_web3._internal_.md#contractfunction)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:86

___

### deployTransaction

• `Readonly` **deployTransaction**: [`TransactionResponse`](../interfaces/verida_web3._internal_.TransactionResponse.md)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:99

___

### estimateGas

• `Readonly` **estimateGas**: `Object`

#### Index signature

▪ [name: `string`]: [`ContractFunction`](../modules/verida_web3._internal_.md#contractfunction)<[`BigNumber`](verida_web3._internal_.BigNumber.md)\>

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:89

___

### filters

• `Readonly` **filters**: `Object`

#### Index signature

▪ [name: `string`]: (...`args`: `any`[]) => [`EventFilter`](../modules/verida_web3._internal_.md#eventfilter)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:95

___

### functions

• `Readonly` **functions**: `Object`

#### Index signature

▪ [name: `string`]: [`ContractFunction`](../modules/verida_web3._internal_.md#contractfunction)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:83

___

### interface

• `Readonly` **interface**: [`Interface`](verida_web3._internal_.Interface.md)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:80

___

### populateTransaction

• `Readonly` **populateTransaction**: `Object`

#### Index signature

▪ [name: `string`]: [`ContractFunction`](../modules/verida_web3._internal_.md#contractfunction)<[`PopulatedTransaction`](../interfaces/verida_web3._internal_.PopulatedTransaction.md)\>

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:92

___

### provider

• `Readonly` **provider**: [`Provider`](verida_web3._internal_.Provider.md)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:82

___

### resolvedAddress

• `Readonly` **resolvedAddress**: `Promise`<`string`\>

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:98

___

### signer

• `Readonly` **signer**: [`Signer`](verida_web3._internal_.Signer.md)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:81

## Methods

### \_checkRunningEvents

▸ **_checkRunningEvents**(`runningEvent`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `runningEvent` | [`RunningEvent`](verida_web3._internal_.RunningEvent.md) |

#### Returns

`void`

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:121

___

### \_deployed

▸ **_deployed**(`blockTag?`): `Promise`<[`Contract`](verida_web3._internal_.Contract.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockTag?` | [`BlockTag`](../modules/verida_web3._internal_.md#blocktag) |

#### Returns

`Promise`<[`Contract`](verida_web3._internal_.Contract.md)\>

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:114

___

### \_wrapEvent

▸ **_wrapEvent**(`runningEvent`, `log`, `listener`): [`Event`](../interfaces/verida_web3._internal_.Event.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `runningEvent` | [`RunningEvent`](verida_web3._internal_.RunningEvent.md) |
| `log` | [`Log`](../interfaces/verida_web3._internal_.Log.md) |
| `listener` | [`Listener`](../modules/verida_web3._internal_.md#listener) |

#### Returns

[`Event`](../interfaces/verida_web3._internal_.Event.md)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:122

___

### attach

▸ **attach**(`addressOrName`): [`Contract`](verida_web3._internal_.Contract.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`Contract`](verida_web3._internal_.Contract.md)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:117

___

### connect

▸ **connect**(`signerOrProvider`): [`Contract`](verida_web3._internal_.Contract.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| [`Signer`](verida_web3._internal_.Signer.md) \| [`Provider`](verida_web3._internal_.Provider.md) |

#### Returns

[`Contract`](verida_web3._internal_.Contract.md)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:116

___

### deployed

▸ **deployed**(): `Promise`<[`Contract`](verida_web3._internal_.Contract.md)\>

#### Returns

`Promise`<[`Contract`](verida_web3._internal_.Contract.md)\>

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:113

___

### emit

▸ **emit**(`eventName`, ...`args`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| [`EventFilter`](../modules/verida_web3._internal_.md#eventfilter) |
| `...args` | `any`[] |

#### Returns

`boolean`

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:127

___

### fallback

▸ **fallback**(`overrides?`): `Promise`<[`TransactionResponse`](../interfaces/verida_web3._internal_.TransactionResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | [`TransactionRequest`](../modules/verida_web3._internal_.md#transactionrequest) |

#### Returns

`Promise`<[`TransactionResponse`](../interfaces/verida_web3._internal_.TransactionResponse.md)\>

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:115

___

### listenerCount

▸ **listenerCount**(`eventName?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` \| [`EventFilter`](../modules/verida_web3._internal_.md#eventfilter) |

#### Returns

`number`

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:128

___

### listeners

▸ **listeners**(`eventName?`): [`Listener`](../modules/verida_web3._internal_.md#listener)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` \| [`EventFilter`](../modules/verida_web3._internal_.md#eventfilter) |

#### Returns

[`Listener`](../modules/verida_web3._internal_.md#listener)[]

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:129

___

### off

▸ **off**(`eventName`, `listener`): [`BaseContract`](verida_web3._internal_.BaseContract.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| [`EventFilter`](../modules/verida_web3._internal_.md#eventfilter) |
| `listener` | [`Listener`](../modules/verida_web3._internal_.md#listener) |

#### Returns

[`BaseContract`](verida_web3._internal_.BaseContract.md)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:131

___

### on

▸ **on**(`event`, `listener`): [`BaseContract`](verida_web3._internal_.BaseContract.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| [`EventFilter`](../modules/verida_web3._internal_.md#eventfilter) |
| `listener` | [`Listener`](../modules/verida_web3._internal_.md#listener) |

#### Returns

[`BaseContract`](verida_web3._internal_.BaseContract.md)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:125

___

### once

▸ **once**(`event`, `listener`): [`BaseContract`](verida_web3._internal_.BaseContract.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| [`EventFilter`](../modules/verida_web3._internal_.md#eventfilter) |
| `listener` | [`Listener`](../modules/verida_web3._internal_.md#listener) |

#### Returns

[`BaseContract`](verida_web3._internal_.BaseContract.md)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:126

___

### queryFilter

▸ **queryFilter**(`event`, `fromBlockOrBlockhash?`, `toBlock?`): `Promise`<[`Event`](../interfaces/verida_web3._internal_.Event.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| [`EventFilter`](../modules/verida_web3._internal_.md#eventfilter) |
| `fromBlockOrBlockhash?` | [`BlockTag`](../modules/verida_web3._internal_.md#blocktag) |
| `toBlock?` | [`BlockTag`](../modules/verida_web3._internal_.md#blocktag) |

#### Returns

`Promise`<[`Event`](../interfaces/verida_web3._internal_.Event.md)[]\>

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:124

___

### removeAllListeners

▸ **removeAllListeners**(`eventName?`): [`BaseContract`](verida_web3._internal_.BaseContract.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` \| [`EventFilter`](../modules/verida_web3._internal_.md#eventfilter) |

#### Returns

[`BaseContract`](verida_web3._internal_.BaseContract.md)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:130

___

### removeListener

▸ **removeListener**(`eventName`, `listener`): [`BaseContract`](verida_web3._internal_.BaseContract.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| [`EventFilter`](../modules/verida_web3._internal_.md#eventfilter) |
| `listener` | [`Listener`](../modules/verida_web3._internal_.md#listener) |

#### Returns

[`BaseContract`](verida_web3._internal_.BaseContract.md)

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
| `transaction.nonce` | [`BigNumberish`](../modules/verida_web3._internal_.md#bignumberish) |

#### Returns

`string`

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:108

___

### getInterface

▸ `Static` **getInterface**(`contractInterface`): [`Interface`](verida_web3._internal_.Interface.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `contractInterface` | [`ContractInterface`](../modules/verida_web3._internal_.md#contractinterface) |

#### Returns

[`Interface`](verida_web3._internal_.Interface.md)

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

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:118
