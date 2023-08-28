[root](../README.md) / [Modules](../modules.md) / [@verida/web3](../modules/verida_web3.md) / [<internal\>](../modules/verida_web3._internal_.md) / ErrorDescription

# Class: ErrorDescription

[@verida/web3](../modules/verida_web3.md).[<internal\>](../modules/verida_web3._internal_.md).ErrorDescription

## Hierarchy

- [`Description`](verida_web3._internal_.Description.md)<[`ErrorDescription`](verida_web3._internal_.ErrorDescription.md)\>

  ↳ **`ErrorDescription`**

## Table of contents

### Constructors

- [constructor](verida_web3._internal_.ErrorDescription.md#constructor)

### Properties

- [args](verida_web3._internal_.ErrorDescription.md#args)
- [errorFragment](verida_web3._internal_.ErrorDescription.md#errorfragment)
- [name](verida_web3._internal_.ErrorDescription.md#name)
- [sighash](verida_web3._internal_.ErrorDescription.md#sighash)
- [signature](verida_web3._internal_.ErrorDescription.md#signature)

## Constructors

### constructor

• **new ErrorDescription**(`info`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `info` | `Object` |
| `info.args` | [`Result`](../interfaces/verida_web3._internal_.Result.md) |
| `info.errorFragment` | [`ErrorFragment`](verida_web3._internal_.ErrorFragment.md) |
| `info.name` | `string` |
| `info.sighash` | `string` |
| `info.signature` | `string` |

#### Inherited from

[Description](verida_web3._internal_.Description.md).[constructor](verida_web3._internal_.Description.md#constructor)

#### Defined in

node_modules/@ethersproject/properties/lib/index.d.ts:13

## Properties

### args

• `Readonly` **args**: [`Result`](../interfaces/verida_web3._internal_.Result.md)

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:26

___

### errorFragment

• `Readonly` **errorFragment**: [`ErrorFragment`](verida_web3._internal_.ErrorFragment.md)

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:24

___

### name

• `Readonly` **name**: `string`

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:25

___

### sighash

• `Readonly` **sighash**: `string`

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:28

___

### signature

• `Readonly` **signature**: `string`

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:27
