[root](../README.md) / [Modules](../modules.md) / [@verida/vda-sbt-client](../modules/verida_vda_sbt_client.md) / [<internal\>](../modules/verida_vda_sbt_client._internal_.md) / ConstructorFragment

# Class: ConstructorFragment

[@verida/vda-sbt-client](../modules/verida_vda_sbt_client.md).[<internal\>](../modules/verida_vda_sbt_client._internal_.md).ConstructorFragment

## Hierarchy

- [`Fragment`](verida_vda_sbt_client._internal_.Fragment.md)

  ↳ **`ConstructorFragment`**

  ↳↳ [`FunctionFragment`](verida_vda_sbt_client._internal_.FunctionFragment.md)

## Table of contents

### Constructors

- [constructor](verida_vda_sbt_client._internal_.ConstructorFragment.md#constructor)

### Properties

- [\_isFragment](verida_vda_sbt_client._internal_.ConstructorFragment.md#_isfragment)
- [gas](verida_vda_sbt_client._internal_.ConstructorFragment.md#gas)
- [inputs](verida_vda_sbt_client._internal_.ConstructorFragment.md#inputs)
- [name](verida_vda_sbt_client._internal_.ConstructorFragment.md#name)
- [payable](verida_vda_sbt_client._internal_.ConstructorFragment.md#payable)
- [stateMutability](verida_vda_sbt_client._internal_.ConstructorFragment.md#statemutability)
- [type](verida_vda_sbt_client._internal_.ConstructorFragment.md#type)

### Methods

- [format](verida_vda_sbt_client._internal_.ConstructorFragment.md#format)
- [from](verida_vda_sbt_client._internal_.ConstructorFragment.md#from)
- [fromObject](verida_vda_sbt_client._internal_.ConstructorFragment.md#fromobject)
- [fromString](verida_vda_sbt_client._internal_.ConstructorFragment.md#fromstring)
- [isConstructorFragment](verida_vda_sbt_client._internal_.ConstructorFragment.md#isconstructorfragment)
- [isFragment](verida_vda_sbt_client._internal_.ConstructorFragment.md#isfragment)

## Constructors

### constructor

• **new ConstructorFragment**(`constructorGuard`, `params`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `constructorGuard` | `any` |
| `params` | `any` |

#### Inherited from

[Fragment](verida_vda_sbt_client._internal_.Fragment.md).[constructor](verida_vda_sbt_client._internal_.Fragment.md#constructor)

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:44

## Properties

### \_isFragment

• `Readonly` **\_isFragment**: `boolean`

#### Inherited from

[Fragment](verida_vda_sbt_client._internal_.Fragment.md).[_isFragment](verida_vda_sbt_client._internal_.Fragment.md#_isfragment)

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:43

___

### gas

• `Optional` **gas**: [`BigNumber`](verida_vda_sbt_client._internal_.BigNumber.md)

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:62

___

### inputs

• `Readonly` **inputs**: [`ParamType`](verida_vda_sbt_client._internal_.ParamType.md)[]

#### Inherited from

[Fragment](verida_vda_sbt_client._internal_.Fragment.md).[inputs](verida_vda_sbt_client._internal_.Fragment.md#inputs)

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:42

___

### name

• `Readonly` **name**: `string`

#### Inherited from

[Fragment](verida_vda_sbt_client._internal_.Fragment.md).[name](verida_vda_sbt_client._internal_.Fragment.md#name)

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:41

___

### payable

• **payable**: `boolean`

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:61

___

### stateMutability

• **stateMutability**: `string`

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:60

___

### type

• `Readonly` **type**: `string`

#### Inherited from

[Fragment](verida_vda_sbt_client._internal_.Fragment.md).[type](verida_vda_sbt_client._internal_.Fragment.md#type)

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

[Fragment](verida_vda_sbt_client._internal_.Fragment.md).[format](verida_vda_sbt_client._internal_.Fragment.md#format)

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:63

___

### from

▸ `Static` **from**(`value`): [`ConstructorFragment`](verida_vda_sbt_client._internal_.ConstructorFragment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` \| [`JsonFragment`](../interfaces/verida_vda_sbt_client._internal_.JsonFragment.md) \| [`ConstructorFragment`](verida_vda_sbt_client._internal_.ConstructorFragment.md) |

#### Returns

[`ConstructorFragment`](verida_vda_sbt_client._internal_.ConstructorFragment.md)

#### Overrides

[Fragment](verida_vda_sbt_client._internal_.Fragment.md).[from](verida_vda_sbt_client._internal_.Fragment.md#from)

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:64

___

### fromObject

▸ `Static` **fromObject**(`value`): [`ConstructorFragment`](verida_vda_sbt_client._internal_.ConstructorFragment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`JsonFragment`](../interfaces/verida_vda_sbt_client._internal_.JsonFragment.md) \| [`ConstructorFragment`](verida_vda_sbt_client._internal_.ConstructorFragment.md) |

#### Returns

[`ConstructorFragment`](verida_vda_sbt_client._internal_.ConstructorFragment.md)

#### Overrides

[Fragment](verida_vda_sbt_client._internal_.Fragment.md).[fromObject](verida_vda_sbt_client._internal_.Fragment.md#fromobject)

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:65

___

### fromString

▸ `Static` **fromString**(`value`): [`ConstructorFragment`](verida_vda_sbt_client._internal_.ConstructorFragment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

[`ConstructorFragment`](verida_vda_sbt_client._internal_.ConstructorFragment.md)

#### Overrides

[Fragment](verida_vda_sbt_client._internal_.Fragment.md).[fromString](verida_vda_sbt_client._internal_.Fragment.md#fromstring)

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:66

___

### isConstructorFragment

▸ `Static` **isConstructorFragment**(`value`): value is ConstructorFragment

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is ConstructorFragment

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

[Fragment](verida_vda_sbt_client._internal_.Fragment.md).[isFragment](verida_vda_sbt_client._internal_.Fragment.md#isfragment)

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:49
