[root](../README.md) / [Modules](../modules.md) / [@verida/vda-did](../modules/verida_vda_did.md) / [<internal\>](../modules/verida_vda_did._internal_.md) / TransactionDescription

# Class: TransactionDescription

[@verida/vda-did](../modules/verida_vda_did.md).[<internal\>](../modules/verida_vda_did._internal_.md).TransactionDescription

## Hierarchy

- [`Description`](verida_vda_did._internal_.Description.md)<[`TransactionDescription`](verida_vda_did._internal_.TransactionDescription.md)\>

  ↳ **`TransactionDescription`**

## Table of contents

### Constructors

- [constructor](verida_vda_did._internal_.TransactionDescription.md#constructor)

### Properties

- [args](verida_vda_did._internal_.TransactionDescription.md#args)
- [functionFragment](verida_vda_did._internal_.TransactionDescription.md#functionfragment)
- [name](verida_vda_did._internal_.TransactionDescription.md#name)
- [sighash](verida_vda_did._internal_.TransactionDescription.md#sighash)
- [signature](verida_vda_did._internal_.TransactionDescription.md#signature)
- [value](verida_vda_did._internal_.TransactionDescription.md#value)

## Constructors

### constructor

• **new TransactionDescription**(`info`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `info` | `Object` |
| `info.args` | [`Result`](../interfaces/verida_vda_did._internal_.Result.md) |
| `info.functionFragment` | [`FunctionFragment`](verida_vda_did._internal_.FunctionFragment.md) |
| `info.name` | `string` |
| `info.sighash` | `string` |
| `info.signature` | `string` |
| `info.value` | [`BigNumber`](verida_vda_did._internal_.BigNumber.md) |

#### Inherited from

[Description](verida_vda_did._internal_.Description.md).[constructor](verida_vda_did._internal_.Description.md#constructor)

#### Defined in

node_modules/@ethersproject/properties/lib/index.d.ts:13

## Properties

### args

• `Readonly` **args**: [`Result`](../interfaces/verida_vda_did._internal_.Result.md)

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:18

___

### functionFragment

• `Readonly` **functionFragment**: [`FunctionFragment`](verida_vda_did._internal_.FunctionFragment.md)

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:16

___

### name

• `Readonly` **name**: `string`

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:17

___

### sighash

• `Readonly` **sighash**: `string`

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:20

___

### signature

• `Readonly` **signature**: `string`

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:19

___

### value

• `Readonly` **value**: [`BigNumber`](verida_vda_did._internal_.BigNumber.md)

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:21
