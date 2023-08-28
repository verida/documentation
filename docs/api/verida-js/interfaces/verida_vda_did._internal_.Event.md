[root](../README.md) / [Modules](../modules.md) / [@verida/vda-did](../modules/verida_vda_did.md) / [<internal\>](../modules/verida_vda_did._internal_.md) / Event

# Interface: Event

[@verida/vda-did](../modules/verida_vda_did.md).[<internal\>](../modules/verida_vda_did._internal_.md).Event

## Hierarchy

- [`Log`](verida_vda_did._internal_.Log.md)

  ↳ **`Event`**

## Table of contents

### Properties

- [address](verida_vda_did._internal_.Event.md#address)
- [args](verida_vda_did._internal_.Event.md#args)
- [blockHash](verida_vda_did._internal_.Event.md#blockhash)
- [blockNumber](verida_vda_did._internal_.Event.md#blocknumber)
- [data](verida_vda_did._internal_.Event.md#data)
- [decodeError](verida_vda_did._internal_.Event.md#decodeerror)
- [event](verida_vda_did._internal_.Event.md#event)
- [eventSignature](verida_vda_did._internal_.Event.md#eventsignature)
- [logIndex](verida_vda_did._internal_.Event.md#logindex)
- [removed](verida_vda_did._internal_.Event.md#removed)
- [topics](verida_vda_did._internal_.Event.md#topics)
- [transactionHash](verida_vda_did._internal_.Event.md#transactionhash)
- [transactionIndex](verida_vda_did._internal_.Event.md#transactionindex)

### Methods

- [decode](verida_vda_did._internal_.Event.md#decode)
- [getBlock](verida_vda_did._internal_.Event.md#getblock)
- [getTransaction](verida_vda_did._internal_.Event.md#gettransaction)
- [getTransactionReceipt](verida_vda_did._internal_.Event.md#gettransactionreceipt)
- [removeListener](verida_vda_did._internal_.Event.md#removelistener)

## Properties

### address

• **address**: `string`

#### Inherited from

[Log](verida_vda_did._internal_.Log.md).[address](verida_vda_did._internal_.Log.md#address)

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:59

___

### args

• `Optional` **args**: [`Result`](verida_vda_did._internal_.Result.md)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:49

___

### blockHash

• **blockHash**: `string`

#### Inherited from

[Log](verida_vda_did._internal_.Log.md).[blockHash](verida_vda_did._internal_.Log.md#blockhash)

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:56

___

### blockNumber

• **blockNumber**: `number`

#### Inherited from

[Log](verida_vda_did._internal_.Log.md).[blockNumber](verida_vda_did._internal_.Log.md#blocknumber)

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:55

___

### data

• **data**: `string`

#### Inherited from

[Log](verida_vda_did._internal_.Log.md).[data](verida_vda_did._internal_.Log.md#data)

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:60

___

### decodeError

• `Optional` **decodeError**: [`Error`](../modules/verida_vda_did._internal_.md#error)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:50

___

### event

• `Optional` **event**: `string`

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:47

___

### eventSignature

• `Optional` **eventSignature**: `string`

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:48

___

### logIndex

• **logIndex**: `number`

#### Inherited from

[Log](verida_vda_did._internal_.Log.md).[logIndex](verida_vda_did._internal_.Log.md#logindex)

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:63

___

### removed

• **removed**: `boolean`

#### Inherited from

[Log](verida_vda_did._internal_.Log.md).[removed](verida_vda_did._internal_.Log.md#removed)

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:58

___

### topics

• **topics**: `string`[]

#### Inherited from

[Log](verida_vda_did._internal_.Log.md).[topics](verida_vda_did._internal_.Log.md#topics)

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:61

___

### transactionHash

• **transactionHash**: `string`

#### Inherited from

[Log](verida_vda_did._internal_.Log.md).[transactionHash](verida_vda_did._internal_.Log.md#transactionhash)

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:62

___

### transactionIndex

• **transactionIndex**: `number`

#### Inherited from

[Log](verida_vda_did._internal_.Log.md).[transactionIndex](verida_vda_did._internal_.Log.md#transactionindex)

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:57

## Methods

### decode

▸ `Optional` **decode**(`data`, `topics?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` |
| `topics?` | `string`[] |

#### Returns

`any`

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:51

___

### getBlock

▸ **getBlock**(): `Promise`<[`Block`](verida_vda_did._internal_.Block.md)\>

#### Returns

`Promise`<[`Block`](verida_vda_did._internal_.Block.md)\>

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:53

___

### getTransaction

▸ **getTransaction**(): `Promise`<[`TransactionResponse`](verida_vda_did._internal_.TransactionResponse.md)\>

#### Returns

`Promise`<[`TransactionResponse`](verida_vda_did._internal_.TransactionResponse.md)\>

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:54

___

### getTransactionReceipt

▸ **getTransactionReceipt**(): `Promise`<[`TransactionReceipt`](verida_vda_did._internal_.TransactionReceipt.md)\>

#### Returns

`Promise`<[`TransactionReceipt`](verida_vda_did._internal_.TransactionReceipt.md)\>

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:55

___

### removeListener

▸ **removeListener**(): `void`

#### Returns

`void`

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:52
