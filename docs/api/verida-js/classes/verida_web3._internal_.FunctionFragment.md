[root](../README.md) / [Modules](../modules.md) / [@verida/web3](../modules/verida_web3.md) / [<internal\>](../modules/verida_web3._internal_.md) / FunctionFragment

# Class: FunctionFragment

[@verida/web3](../modules/verida_web3.md).[<internal\>](../modules/verida_web3._internal_.md).FunctionFragment

## Hierarchy

- [`ConstructorFragment`](verida_web3._internal_.ConstructorFragment.md)

  ↳ **`FunctionFragment`**

## Table of contents

### Constructors

- [constructor](verida_web3._internal_.FunctionFragment.md#constructor)

### Properties

- [\_isFragment](verida_web3._internal_.FunctionFragment.md#_isfragment)
- [constant](verida_web3._internal_.FunctionFragment.md#constant)
- [gas](verida_web3._internal_.FunctionFragment.md#gas)
- [inputs](verida_web3._internal_.FunctionFragment.md#inputs)
- [name](verida_web3._internal_.FunctionFragment.md#name)
- [outputs](verida_web3._internal_.FunctionFragment.md#outputs)
- [payable](verida_web3._internal_.FunctionFragment.md#payable)
- [stateMutability](verida_web3._internal_.FunctionFragment.md#statemutability)
- [type](verida_web3._internal_.FunctionFragment.md#type)

### Methods

- [format](verida_web3._internal_.FunctionFragment.md#format)
- [from](verida_web3._internal_.FunctionFragment.md#from)
- [fromObject](verida_web3._internal_.FunctionFragment.md#fromobject)
- [fromString](verida_web3._internal_.FunctionFragment.md#fromstring)
- [isConstructorFragment](verida_web3._internal_.FunctionFragment.md#isconstructorfragment)
- [isFragment](verida_web3._internal_.FunctionFragment.md#isfragment)
- [isFunctionFragment](verida_web3._internal_.FunctionFragment.md#isfunctionfragment)

## Constructors

### constructor

• **new FunctionFragment**(`constructorGuard`, `params`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `constructorGuard` | `any` |
| `params` | `any` |

#### Inherited from

[ConstructorFragment](verida_web3._internal_.ConstructorFragment.md).[constructor](verida_web3._internal_.ConstructorFragment.md#constructor)

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:44

## Properties

### \_isFragment

• `Readonly` **\_isFragment**: `boolean`

#### Inherited from

[ConstructorFragment](verida_web3._internal_.ConstructorFragment.md).[_isFragment](verida_web3._internal_.ConstructorFragment.md#_isfragment)

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:43

___

### constant

• **constant**: `boolean`

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:70

___

### gas

• `Optional` **gas**: [`BigNumber`](verida_web3._internal_.BigNumber.md)

#### Inherited from

[ConstructorFragment](verida_web3._internal_.ConstructorFragment.md).[gas](verida_web3._internal_.ConstructorFragment.md#gas)

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:62

___

### inputs

• `Readonly` **inputs**: [`ParamType`](verida_web3._internal_.ParamType.md)[]

#### Inherited from

[ConstructorFragment](verida_web3._internal_.ConstructorFragment.md).[inputs](verida_web3._internal_.ConstructorFragment.md#inputs)

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:42

___

### name

• `Readonly` **name**: `string`

#### Inherited from

[ConstructorFragment](verida_web3._internal_.ConstructorFragment.md).[name](verida_web3._internal_.ConstructorFragment.md#name)

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:41

___

### outputs

• `Optional` **outputs**: [`ParamType`](verida_web3._internal_.ParamType.md)[]

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:71

___

### payable

• **payable**: `boolean`

#### Inherited from

[ConstructorFragment](verida_web3._internal_.ConstructorFragment.md).[payable](verida_web3._internal_.ConstructorFragment.md#payable)

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:61

___

### stateMutability

• **stateMutability**: `string`

#### Inherited from

[ConstructorFragment](verida_web3._internal_.ConstructorFragment.md).[stateMutability](verida_web3._internal_.ConstructorFragment.md#statemutability)

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:60

___

### type

• `Readonly` **type**: `string`

#### Inherited from

[ConstructorFragment](verida_web3._internal_.ConstructorFragment.md).[type](verida_web3._internal_.ConstructorFragment.md#type)

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:40

## Methods

### format

▸ **format**(`format?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `format?` | `string` |

#### Returns

`string`

#### Overrides

[ConstructorFragment](verida_web3._internal_.ConstructorFragment.md).[format](verida_web3._internal_.ConstructorFragment.md#format)

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:72

___

### from

▸ `Static` **from**(`value`): [`FunctionFragment`](verida_web3._internal_.FunctionFragment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` \| [`JsonFragment`](../interfaces/verida_web3._internal_.JsonFragment.md) \| [`FunctionFragment`](verida_web3._internal_.FunctionFragment.md) |

#### Returns

[`FunctionFragment`](verida_web3._internal_.FunctionFragment.md)

#### Overrides

[ConstructorFragment](verida_web3._internal_.ConstructorFragment.md).[from](verida_web3._internal_.ConstructorFragment.md#from)

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:73

___

### fromObject

▸ `Static` **fromObject**(`value`): [`FunctionFragment`](verida_web3._internal_.FunctionFragment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`JsonFragment`](../interfaces/verida_web3._internal_.JsonFragment.md) \| [`FunctionFragment`](verida_web3._internal_.FunctionFragment.md) |

#### Returns

[`FunctionFragment`](verida_web3._internal_.FunctionFragment.md)

#### Overrides

[ConstructorFragment](verida_web3._internal_.ConstructorFragment.md).[fromObject](verida_web3._internal_.ConstructorFragment.md#fromobject)

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:74

___

### fromString

▸ `Static` **fromString**(`value`): [`FunctionFragment`](verida_web3._internal_.FunctionFragment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

[`FunctionFragment`](verida_web3._internal_.FunctionFragment.md)

#### Overrides

[ConstructorFragment](verida_web3._internal_.ConstructorFragment.md).[fromString](verida_web3._internal_.ConstructorFragment.md#fromstring)

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:75

___

### isConstructorFragment

▸ `Static` **isConstructorFragment**(`value`): value is ConstructorFragment

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is ConstructorFragment

#### Inherited from

[ConstructorFragment](verida_web3._internal_.ConstructorFragment.md).[isConstructorFragment](verida_web3._internal_.ConstructorFragment.md#isconstructorfragment)

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:67

___

### isFragment

▸ `Static` **isFragment**(`value`): value is Fragment

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is Fragment

#### Inherited from

[ConstructorFragment](verida_web3._internal_.ConstructorFragment.md).[isFragment](verida_web3._internal_.ConstructorFragment.md#isfragment)

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:49

___

### isFunctionFragment

▸ `Static` **isFunctionFragment**(`value`): value is FunctionFragment

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is FunctionFragment

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:76
