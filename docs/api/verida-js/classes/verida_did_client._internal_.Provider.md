[root](../README.md) / [Modules](../modules.md) / [@verida/did-client](../modules/verida_did_client.md) / [<internal\>](../modules/verida_did_client._internal_.md) / Provider

# Class: Provider

[@verida/did-client](../modules/verida_did_client.md).[<internal\>](../modules/verida_did_client._internal_.md).Provider

## Implements

- [`OnceBlockable`](../interfaces/verida_did_client._internal_.OnceBlockable.md)

## Table of contents

### Constructors

- [constructor](verida_did_client._internal_.Provider.md#constructor)

### Properties

- [\_isProvider](verida_did_client._internal_.Provider.md#_isprovider)

### Methods

- [addListener](verida_did_client._internal_.Provider.md#addlistener)
- [call](verida_did_client._internal_.Provider.md#call)
- [emit](verida_did_client._internal_.Provider.md#emit)
- [estimateGas](verida_did_client._internal_.Provider.md#estimategas)
- [getBalance](verida_did_client._internal_.Provider.md#getbalance)
- [getBlock](verida_did_client._internal_.Provider.md#getblock)
- [getBlockNumber](verida_did_client._internal_.Provider.md#getblocknumber)
- [getBlockWithTransactions](verida_did_client._internal_.Provider.md#getblockwithtransactions)
- [getCode](verida_did_client._internal_.Provider.md#getcode)
- [getFeeData](verida_did_client._internal_.Provider.md#getfeedata)
- [getGasPrice](verida_did_client._internal_.Provider.md#getgasprice)
- [getLogs](verida_did_client._internal_.Provider.md#getlogs)
- [getNetwork](verida_did_client._internal_.Provider.md#getnetwork)
- [getStorageAt](verida_did_client._internal_.Provider.md#getstorageat)
- [getTransaction](verida_did_client._internal_.Provider.md#gettransaction)
- [getTransactionCount](verida_did_client._internal_.Provider.md#gettransactioncount)
- [getTransactionReceipt](verida_did_client._internal_.Provider.md#gettransactionreceipt)
- [listenerCount](verida_did_client._internal_.Provider.md#listenercount)
- [listeners](verida_did_client._internal_.Provider.md#listeners)
- [lookupAddress](verida_did_client._internal_.Provider.md#lookupaddress)
- [off](verida_did_client._internal_.Provider.md#off)
- [on](verida_did_client._internal_.Provider.md#on)
- [once](verida_did_client._internal_.Provider.md#once)
- [removeAllListeners](verida_did_client._internal_.Provider.md#removealllisteners)
- [removeListener](verida_did_client._internal_.Provider.md#removelistener)
- [resolveName](verida_did_client._internal_.Provider.md#resolvename)
- [sendTransaction](verida_did_client._internal_.Provider.md#sendtransaction)
- [waitForTransaction](verida_did_client._internal_.Provider.md#waitfortransaction)
- [isProvider](verida_did_client._internal_.Provider.md#isprovider)

## Constructors

### constructor

• **new Provider**()

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:153

## Properties

### \_isProvider

• `Readonly` **\_isProvider**: `boolean`

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:152

## Methods

### addListener

▸ **addListener**(`eventName`, `listener`): [`Provider`](verida_did_client._internal_.Provider.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | [`EventType`](../modules/verida_did_client._internal_.md#eventtype) |
| `listener` | [`Listener`](../modules/verida_did_client._internal_.md#listener) |

#### Returns

[`Provider`](verida_did_client._internal_.Provider.md)

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:149

___

### call

▸ `Abstract` **call**(`transaction`, `blockTag?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | [`Deferrable`](../modules/verida_did_client._internal_.md#deferrable)<[`TransactionRequest`](../modules/verida_did_client._internal_.md#transactionrequest)\> |
| `blockTag?` | [`BlockTag`](../modules/verida_did_client._internal_.md#blocktag) \| `Promise`<[`BlockTag`](../modules/verida_did_client._internal_.md#blocktag)\> |

#### Returns

`Promise`<`string`\>

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:133

___

### emit

▸ `Abstract` **emit**(`eventName`, ...`args`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | [`EventType`](../modules/verida_did_client._internal_.md#eventtype) |
| `...args` | `any`[] |

#### Returns

`boolean`

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:144

___

### estimateGas

▸ `Abstract` **estimateGas**(`transaction`): `Promise`<[`BigNumber`](verida_did_client._internal_.BigNumber.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | [`Deferrable`](../modules/verida_did_client._internal_.md#deferrable)<[`TransactionRequest`](../modules/verida_did_client._internal_.md#transactionrequest)\> |

#### Returns

`Promise`<[`BigNumber`](verida_did_client._internal_.BigNumber.md)\>

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:134

___

### getBalance

▸ `Abstract` **getBalance**(`addressOrName`, `blockTag?`): `Promise`<[`BigNumber`](verida_did_client._internal_.BigNumber.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` \| `Promise`<`string`\> |
| `blockTag?` | [`BlockTag`](../modules/verida_did_client._internal_.md#blocktag) \| `Promise`<[`BlockTag`](../modules/verida_did_client._internal_.md#blocktag)\> |

#### Returns

`Promise`<[`BigNumber`](verida_did_client._internal_.BigNumber.md)\>

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:128

___

### getBlock

▸ `Abstract` **getBlock**(`blockHashOrBlockTag`): `Promise`<[`Block`](../interfaces/verida_did_client._internal_.Block.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockHashOrBlockTag` | [`BlockTag`](../modules/verida_did_client._internal_.md#blocktag) \| `Promise`<[`BlockTag`](../modules/verida_did_client._internal_.md#blocktag)\> |

#### Returns

`Promise`<[`Block`](../interfaces/verida_did_client._internal_.Block.md)\>

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:135

___

### getBlockNumber

▸ `Abstract` **getBlockNumber**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:125

___

### getBlockWithTransactions

▸ `Abstract` **getBlockWithTransactions**(`blockHashOrBlockTag`): `Promise`<[`BlockWithTransactions`](../interfaces/verida_did_client._internal_.BlockWithTransactions.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockHashOrBlockTag` | [`BlockTag`](../modules/verida_did_client._internal_.md#blocktag) \| `Promise`<[`BlockTag`](../modules/verida_did_client._internal_.md#blocktag)\> |

#### Returns

`Promise`<[`BlockWithTransactions`](../interfaces/verida_did_client._internal_.BlockWithTransactions.md)\>

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:136

___

### getCode

▸ `Abstract` **getCode**(`addressOrName`, `blockTag?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` \| `Promise`<`string`\> |
| `blockTag?` | [`BlockTag`](../modules/verida_did_client._internal_.md#blocktag) \| `Promise`<[`BlockTag`](../modules/verida_did_client._internal_.md#blocktag)\> |

#### Returns

`Promise`<`string`\>

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:130

___

### getFeeData

▸ **getFeeData**(): `Promise`<[`FeeData`](../interfaces/verida_did_client._internal_.FeeData.md)\>

#### Returns

`Promise`<[`FeeData`](../interfaces/verida_did_client._internal_.FeeData.md)\>

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:127

___

### getGasPrice

▸ `Abstract` **getGasPrice**(): `Promise`<[`BigNumber`](verida_did_client._internal_.BigNumber.md)\>

#### Returns

`Promise`<[`BigNumber`](verida_did_client._internal_.BigNumber.md)\>

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:126

___

### getLogs

▸ `Abstract` **getLogs**(`filter`): `Promise`<[`Log`](../interfaces/verida_did_client._internal_.Log.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter` | [`Filter`](../interfaces/verida_did_client._internal_.Filter.md) |

#### Returns

`Promise`<[`Log`](../interfaces/verida_did_client._internal_.Log.md)[]\>

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:139

___

### getNetwork

▸ `Abstract` **getNetwork**(): `Promise`<[`Network`](../modules/verida_did_client._internal_.md#network)\>

#### Returns

`Promise`<[`Network`](../modules/verida_did_client._internal_.md#network)\>

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:124

___

### getStorageAt

▸ `Abstract` **getStorageAt**(`addressOrName`, `position`, `blockTag?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` \| `Promise`<`string`\> |
| `position` | [`BigNumberish`](../modules/verida_did_client._internal_.md#bignumberish) \| `Promise`<[`BigNumberish`](../modules/verida_did_client._internal_.md#bignumberish)\> |
| `blockTag?` | [`BlockTag`](../modules/verida_did_client._internal_.md#blocktag) \| `Promise`<[`BlockTag`](../modules/verida_did_client._internal_.md#blocktag)\> |

#### Returns

`Promise`<`string`\>

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:131

___

### getTransaction

▸ `Abstract` **getTransaction**(`transactionHash`): `Promise`<[`TransactionResponse`](../interfaces/verida_did_client._internal_.TransactionResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transactionHash` | `string` |

#### Returns

`Promise`<[`TransactionResponse`](../interfaces/verida_did_client._internal_.TransactionResponse.md)\>

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:137

___

### getTransactionCount

▸ `Abstract` **getTransactionCount**(`addressOrName`, `blockTag?`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` \| `Promise`<`string`\> |
| `blockTag?` | [`BlockTag`](../modules/verida_did_client._internal_.md#blocktag) \| `Promise`<[`BlockTag`](../modules/verida_did_client._internal_.md#blocktag)\> |

#### Returns

`Promise`<`number`\>

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:129

___

### getTransactionReceipt

▸ `Abstract` **getTransactionReceipt**(`transactionHash`): `Promise`<[`TransactionReceipt`](../interfaces/verida_did_client._internal_.TransactionReceipt.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transactionHash` | `string` |

#### Returns

`Promise`<[`TransactionReceipt`](../interfaces/verida_did_client._internal_.TransactionReceipt.md)\>

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:138

___

### listenerCount

▸ `Abstract` **listenerCount**(`eventName?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | [`EventType`](../modules/verida_did_client._internal_.md#eventtype) |

#### Returns

`number`

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:145

___

### listeners

▸ `Abstract` **listeners**(`eventName?`): [`Listener`](../modules/verida_did_client._internal_.md#listener)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | [`EventType`](../modules/verida_did_client._internal_.md#eventtype) |

#### Returns

[`Listener`](../modules/verida_did_client._internal_.md#listener)[]

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:146

___

### lookupAddress

▸ `Abstract` **lookupAddress**(`address`): `Promise`<``null`` \| `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` \| `Promise`<`string`\> |

#### Returns

`Promise`<``null`` \| `string`\>

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:141

___

### off

▸ `Abstract` **off**(`eventName`, `listener?`): [`Provider`](verida_did_client._internal_.Provider.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | [`EventType`](../modules/verida_did_client._internal_.md#eventtype) |
| `listener?` | [`Listener`](../modules/verida_did_client._internal_.md#listener) |

#### Returns

[`Provider`](verida_did_client._internal_.Provider.md)

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:147

___

### on

▸ `Abstract` **on**(`eventName`, `listener`): [`Provider`](verida_did_client._internal_.Provider.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | [`EventType`](../modules/verida_did_client._internal_.md#eventtype) |
| `listener` | [`Listener`](../modules/verida_did_client._internal_.md#listener) |

#### Returns

[`Provider`](verida_did_client._internal_.Provider.md)

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:142

___

### once

▸ `Abstract` **once**(`eventName`, `listener`): [`Provider`](verida_did_client._internal_.Provider.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | [`EventType`](../modules/verida_did_client._internal_.md#eventtype) |
| `listener` | [`Listener`](../modules/verida_did_client._internal_.md#listener) |

#### Returns

[`Provider`](verida_did_client._internal_.Provider.md)

#### Implementation of

[OnceBlockable](../interfaces/verida_did_client._internal_.OnceBlockable.md).[once](../interfaces/verida_did_client._internal_.OnceBlockable.md#once)

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:143

___

### removeAllListeners

▸ `Abstract` **removeAllListeners**(`eventName?`): [`Provider`](verida_did_client._internal_.Provider.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | [`EventType`](../modules/verida_did_client._internal_.md#eventtype) |

#### Returns

[`Provider`](verida_did_client._internal_.Provider.md)

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:148

___

### removeListener

▸ **removeListener**(`eventName`, `listener`): [`Provider`](verida_did_client._internal_.Provider.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | [`EventType`](../modules/verida_did_client._internal_.md#eventtype) |
| `listener` | [`Listener`](../modules/verida_did_client._internal_.md#listener) |

#### Returns

[`Provider`](verida_did_client._internal_.Provider.md)

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:150

___

### resolveName

▸ `Abstract` **resolveName**(`name`): `Promise`<``null`` \| `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` \| `Promise`<`string`\> |

#### Returns

`Promise`<``null`` \| `string`\>

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:140

___

### sendTransaction

▸ `Abstract` **sendTransaction**(`signedTransaction`): `Promise`<[`TransactionResponse`](../interfaces/verida_did_client._internal_.TransactionResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `signedTransaction` | `string` \| `Promise`<`string`\> |

#### Returns

`Promise`<[`TransactionResponse`](../interfaces/verida_did_client._internal_.TransactionResponse.md)\>

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:132

___

### waitForTransaction

▸ `Abstract` **waitForTransaction**(`transactionHash`, `confirmations?`, `timeout?`): `Promise`<[`TransactionReceipt`](../interfaces/verida_did_client._internal_.TransactionReceipt.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transactionHash` | `string` |
| `confirmations?` | `number` |
| `timeout?` | `number` |

#### Returns

`Promise`<[`TransactionReceipt`](../interfaces/verida_did_client._internal_.TransactionReceipt.md)\>

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:151

___

### isProvider

▸ `Static` **isProvider**(`value`): value is Provider

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is Provider

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:154
