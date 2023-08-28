[root](../README.md) / [Modules](../modules.md) / [@verida/vda-did](../modules/verida_vda_did.md) / [<internal\>](../modules/verida_vda_did._internal_.md) / Signer

# Class: Signer

[@verida/vda-did](../modules/verida_vda_did.md).[<internal\>](../modules/verida_vda_did._internal_.md).Signer

## Table of contents

### Constructors

- [constructor](verida_vda_did._internal_.Signer.md#constructor)

### Properties

- [\_isSigner](verida_vda_did._internal_.Signer.md#_issigner)
- [provider](verida_vda_did._internal_.Signer.md#provider)

### Methods

- [\_checkProvider](verida_vda_did._internal_.Signer.md#_checkprovider)
- [call](verida_vda_did._internal_.Signer.md#call)
- [checkTransaction](verida_vda_did._internal_.Signer.md#checktransaction)
- [connect](verida_vda_did._internal_.Signer.md#connect)
- [estimateGas](verida_vda_did._internal_.Signer.md#estimategas)
- [getAddress](verida_vda_did._internal_.Signer.md#getaddress)
- [getBalance](verida_vda_did._internal_.Signer.md#getbalance)
- [getChainId](verida_vda_did._internal_.Signer.md#getchainid)
- [getFeeData](verida_vda_did._internal_.Signer.md#getfeedata)
- [getGasPrice](verida_vda_did._internal_.Signer.md#getgasprice)
- [getTransactionCount](verida_vda_did._internal_.Signer.md#gettransactioncount)
- [populateTransaction](verida_vda_did._internal_.Signer.md#populatetransaction)
- [resolveName](verida_vda_did._internal_.Signer.md#resolvename)
- [sendTransaction](verida_vda_did._internal_.Signer.md#sendtransaction)
- [signMessage](verida_vda_did._internal_.Signer.md#signmessage)
- [signTransaction](verida_vda_did._internal_.Signer.md#signtransaction)
- [isSigner](verida_vda_did._internal_.Signer.md#issigner)

## Constructors

### constructor

• **new Signer**()

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:30

## Properties

### \_isSigner

• `Readonly` **\_isSigner**: `boolean`

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:29

___

### provider

• `Optional` `Readonly` **provider**: [`Provider`](verida_vda_did._internal_.Provider.md)

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:24

## Methods

### \_checkProvider

▸ **_checkProvider**(`operation?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `operation?` | `string` |

#### Returns

`void`

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:42

___

### call

▸ **call**(`transaction`, `blockTag?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | [`Deferrable`](../modules/verida_vda_did._internal_.md#deferrable)<[`TransactionRequest`](../modules/verida_vda_did._internal_.md#transactionrequest)\> |
| `blockTag?` | [`BlockTag`](../modules/verida_vda_did._internal_.md#blocktag) |

#### Returns

`Promise`<`string`\>

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:34

___

### checkTransaction

▸ **checkTransaction**(`transaction`): [`Deferrable`](../modules/verida_vda_did._internal_.md#deferrable)<[`TransactionRequest`](../modules/verida_vda_did._internal_.md#transactionrequest)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | [`Deferrable`](../modules/verida_vda_did._internal_.md#deferrable)<[`TransactionRequest`](../modules/verida_vda_did._internal_.md#transactionrequest)\> |

#### Returns

[`Deferrable`](../modules/verida_vda_did._internal_.md#deferrable)<[`TransactionRequest`](../modules/verida_vda_did._internal_.md#transactionrequest)\>

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:40

___

### connect

▸ `Abstract` **connect**(`provider`): [`Signer`](verida_vda_did._internal_.Signer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `provider` | [`Provider`](verida_vda_did._internal_.Provider.md) |

#### Returns

[`Signer`](verida_vda_did._internal_.Signer.md)

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:28

___

### estimateGas

▸ **estimateGas**(`transaction`): `Promise`<[`BigNumber`](verida_vda_did._internal_.BigNumber.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | [`Deferrable`](../modules/verida_vda_did._internal_.md#deferrable)<[`TransactionRequest`](../modules/verida_vda_did._internal_.md#transactionrequest)\> |

#### Returns

`Promise`<[`BigNumber`](verida_vda_did._internal_.BigNumber.md)\>

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:33

___

### getAddress

▸ `Abstract` **getAddress**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:25

___

### getBalance

▸ **getBalance**(`blockTag?`): `Promise`<[`BigNumber`](verida_vda_did._internal_.BigNumber.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockTag?` | [`BlockTag`](../modules/verida_vda_did._internal_.md#blocktag) |

#### Returns

`Promise`<[`BigNumber`](verida_vda_did._internal_.BigNumber.md)\>

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:31

___

### getChainId

▸ **getChainId**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:36

___

### getFeeData

▸ **getFeeData**(): `Promise`<[`FeeData`](../interfaces/verida_vda_did._internal_.FeeData.md)\>

#### Returns

`Promise`<[`FeeData`](../interfaces/verida_vda_did._internal_.FeeData.md)\>

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:38

___

### getGasPrice

▸ **getGasPrice**(): `Promise`<[`BigNumber`](verida_vda_did._internal_.BigNumber.md)\>

#### Returns

`Promise`<[`BigNumber`](verida_vda_did._internal_.BigNumber.md)\>

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:37

___

### getTransactionCount

▸ **getTransactionCount**(`blockTag?`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockTag?` | [`BlockTag`](../modules/verida_vda_did._internal_.md#blocktag) |

#### Returns

`Promise`<`number`\>

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:32

___

### populateTransaction

▸ **populateTransaction**(`transaction`): `Promise`<[`TransactionRequest`](../modules/verida_vda_did._internal_.md#transactionrequest)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | [`Deferrable`](../modules/verida_vda_did._internal_.md#deferrable)<[`TransactionRequest`](../modules/verida_vda_did._internal_.md#transactionrequest)\> |

#### Returns

`Promise`<[`TransactionRequest`](../modules/verida_vda_did._internal_.md#transactionrequest)\>

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:41

___

### resolveName

▸ **resolveName**(`name`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:39

___

### sendTransaction

▸ **sendTransaction**(`transaction`): `Promise`<[`TransactionResponse`](../interfaces/verida_vda_did._internal_.TransactionResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | [`Deferrable`](../modules/verida_vda_did._internal_.md#deferrable)<[`TransactionRequest`](../modules/verida_vda_did._internal_.md#transactionrequest)\> |

#### Returns

`Promise`<[`TransactionResponse`](../interfaces/verida_vda_did._internal_.TransactionResponse.md)\>

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:35

___

### signMessage

▸ `Abstract` **signMessage**(`message`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` \| [`Bytes`](../modules/verida_vda_did._internal_.md#bytes) |

#### Returns

`Promise`<`string`\>

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:26

___

### signTransaction

▸ `Abstract` **signTransaction**(`transaction`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | [`Deferrable`](../modules/verida_vda_did._internal_.md#deferrable)<[`TransactionRequest`](../modules/verida_vda_did._internal_.md#transactionrequest)\> |

#### Returns

`Promise`<`string`\>

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:27

___

### isSigner

▸ `Static` **isSigner**(`value`): value is Signer

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is Signer

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:43
