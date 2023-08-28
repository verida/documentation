[root](../README.md) / [Modules](../modules.md) / [@verida/vda-sbt-client](../modules/verida_vda_sbt_client.md) / [<internal\>](../modules/verida_vda_sbt_client._internal_.md) / TransactionResponse

# Interface: TransactionResponse

[@verida/vda-sbt-client](../modules/verida_vda_sbt_client.md).[<internal\>](../modules/verida_vda_sbt_client._internal_.md).TransactionResponse

## Hierarchy

- [`Transaction`](verida_vda_sbt_client._internal_.Transaction.md)

  ↳ **`TransactionResponse`**

## Table of contents

### Properties

- [accessList](verida_vda_sbt_client._internal_.TransactionResponse.md#accesslist)
- [blockHash](verida_vda_sbt_client._internal_.TransactionResponse.md#blockhash)
- [blockNumber](verida_vda_sbt_client._internal_.TransactionResponse.md#blocknumber)
- [chainId](verida_vda_sbt_client._internal_.TransactionResponse.md#chainid)
- [confirmations](verida_vda_sbt_client._internal_.TransactionResponse.md#confirmations)
- [data](verida_vda_sbt_client._internal_.TransactionResponse.md#data)
- [from](verida_vda_sbt_client._internal_.TransactionResponse.md#from)
- [gasLimit](verida_vda_sbt_client._internal_.TransactionResponse.md#gaslimit)
- [gasPrice](verida_vda_sbt_client._internal_.TransactionResponse.md#gasprice)
- [hash](verida_vda_sbt_client._internal_.TransactionResponse.md#hash)
- [maxFeePerGas](verida_vda_sbt_client._internal_.TransactionResponse.md#maxfeepergas)
- [maxPriorityFeePerGas](verida_vda_sbt_client._internal_.TransactionResponse.md#maxpriorityfeepergas)
- [nonce](verida_vda_sbt_client._internal_.TransactionResponse.md#nonce)
- [r](verida_vda_sbt_client._internal_.TransactionResponse.md#r)
- [raw](verida_vda_sbt_client._internal_.TransactionResponse.md#raw)
- [s](verida_vda_sbt_client._internal_.TransactionResponse.md#s)
- [timestamp](verida_vda_sbt_client._internal_.TransactionResponse.md#timestamp)
- [to](verida_vda_sbt_client._internal_.TransactionResponse.md#to)
- [type](verida_vda_sbt_client._internal_.TransactionResponse.md#type)
- [v](verida_vda_sbt_client._internal_.TransactionResponse.md#v)
- [value](verida_vda_sbt_client._internal_.TransactionResponse.md#value)

### Methods

- [wait](verida_vda_sbt_client._internal_.TransactionResponse.md#wait)

## Properties

### accessList

• `Optional` **accessList**: [`AccessList`](../modules/verida_vda_sbt_client._internal_.md#accesslist)

#### Inherited from

[Transaction](verida_vda_sbt_client._internal_.Transaction.md).[accessList](verida_vda_sbt_client._internal_.Transaction.md#accesslist)

#### Defined in

node_modules/@ethersproject/transactions/lib/index.d.ts:40

___

### blockHash

• `Optional` **blockHash**: `string`

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:26

___

### blockNumber

• `Optional` **blockNumber**: `number`

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:25

___

### chainId

• **chainId**: `number`

#### Inherited from

[Transaction](verida_vda_sbt_client._internal_.Transaction.md).[chainId](verida_vda_sbt_client._internal_.Transaction.md#chainid)

#### Defined in

node_modules/@ethersproject/transactions/lib/index.d.ts:35

___

### confirmations

• **confirmations**: `number`

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:28

___

### data

• **data**: `string`

#### Inherited from

[Transaction](verida_vda_sbt_client._internal_.Transaction.md).[data](verida_vda_sbt_client._internal_.Transaction.md#data)

#### Defined in

node_modules/@ethersproject/transactions/lib/index.d.ts:33

___

### from

• **from**: `string`

#### Overrides

[Transaction](verida_vda_sbt_client._internal_.Transaction.md).[from](verida_vda_sbt_client._internal_.Transaction.md#from)

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:29

___

### gasLimit

• **gasLimit**: [`BigNumber`](../classes/verida_vda_sbt_client._internal_.BigNumber.md)

#### Inherited from

[Transaction](verida_vda_sbt_client._internal_.Transaction.md).[gasLimit](verida_vda_sbt_client._internal_.Transaction.md#gaslimit)

#### Defined in

node_modules/@ethersproject/transactions/lib/index.d.ts:31

___

### gasPrice

• `Optional` **gasPrice**: [`BigNumber`](../classes/verida_vda_sbt_client._internal_.BigNumber.md)

#### Inherited from

[Transaction](verida_vda_sbt_client._internal_.Transaction.md).[gasPrice](verida_vda_sbt_client._internal_.Transaction.md#gasprice)

#### Defined in

node_modules/@ethersproject/transactions/lib/index.d.ts:32

___

### hash

• **hash**: `string`

#### Overrides

[Transaction](verida_vda_sbt_client._internal_.Transaction.md).[hash](verida_vda_sbt_client._internal_.Transaction.md#hash)

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:24

___

### maxFeePerGas

• `Optional` **maxFeePerGas**: [`BigNumber`](../classes/verida_vda_sbt_client._internal_.BigNumber.md)

#### Inherited from

[Transaction](verida_vda_sbt_client._internal_.Transaction.md).[maxFeePerGas](verida_vda_sbt_client._internal_.Transaction.md#maxfeepergas)

#### Defined in

node_modules/@ethersproject/transactions/lib/index.d.ts:42

___

### maxPriorityFeePerGas

• `Optional` **maxPriorityFeePerGas**: [`BigNumber`](../classes/verida_vda_sbt_client._internal_.BigNumber.md)

#### Inherited from

[Transaction](verida_vda_sbt_client._internal_.Transaction.md).[maxPriorityFeePerGas](verida_vda_sbt_client._internal_.Transaction.md#maxpriorityfeepergas)

#### Defined in

node_modules/@ethersproject/transactions/lib/index.d.ts:41

___

### nonce

• **nonce**: `number`

#### Inherited from

[Transaction](verida_vda_sbt_client._internal_.Transaction.md).[nonce](verida_vda_sbt_client._internal_.Transaction.md#nonce)

#### Defined in

node_modules/@ethersproject/transactions/lib/index.d.ts:30

___

### r

• `Optional` **r**: `string`

#### Inherited from

[Transaction](verida_vda_sbt_client._internal_.Transaction.md).[r](verida_vda_sbt_client._internal_.Transaction.md#r)

#### Defined in

node_modules/@ethersproject/transactions/lib/index.d.ts:36

___

### raw

• `Optional` **raw**: `string`

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:30

___

### s

• `Optional` **s**: `string`

#### Inherited from

[Transaction](verida_vda_sbt_client._internal_.Transaction.md).[s](verida_vda_sbt_client._internal_.Transaction.md#s)

#### Defined in

node_modules/@ethersproject/transactions/lib/index.d.ts:37

___

### timestamp

• `Optional` **timestamp**: `number`

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:27

___

### to

• `Optional` **to**: `string`

#### Inherited from

[Transaction](verida_vda_sbt_client._internal_.Transaction.md).[to](verida_vda_sbt_client._internal_.Transaction.md#to)

#### Defined in

node_modules/@ethersproject/transactions/lib/index.d.ts:28

___

### type

• `Optional` **type**: ``null`` \| `number`

#### Inherited from

[Transaction](verida_vda_sbt_client._internal_.Transaction.md).[type](verida_vda_sbt_client._internal_.Transaction.md#type)

#### Defined in

node_modules/@ethersproject/transactions/lib/index.d.ts:39

___

### v

• `Optional` **v**: `number`

#### Inherited from

[Transaction](verida_vda_sbt_client._internal_.Transaction.md).[v](verida_vda_sbt_client._internal_.Transaction.md#v)

#### Defined in

node_modules/@ethersproject/transactions/lib/index.d.ts:38

___

### value

• **value**: [`BigNumber`](../classes/verida_vda_sbt_client._internal_.BigNumber.md)

#### Inherited from

[Transaction](verida_vda_sbt_client._internal_.Transaction.md).[value](verida_vda_sbt_client._internal_.Transaction.md#value)

#### Defined in

node_modules/@ethersproject/transactions/lib/index.d.ts:34

## Methods

### wait

▸ **wait**(`confirmations?`): `Promise`<[`TransactionReceipt`](verida_vda_sbt_client._internal_.TransactionReceipt.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `confirmations?` | `number` |

#### Returns

`Promise`<[`TransactionReceipt`](verida_vda_sbt_client._internal_.TransactionReceipt.md)\>

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:31
