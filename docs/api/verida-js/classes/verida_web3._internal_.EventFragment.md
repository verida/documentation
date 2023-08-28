[root](../README.md) / [Modules](../modules.md) / [@verida/web3](../modules/verida_web3.md) / [<internal\>](../modules/verida_web3._internal_.md) / EventFragment

# Class: EventFragment

[@verida/web3](../modules/verida_web3.md).[<internal\>](../modules/verida_web3._internal_.md).EventFragment

## Hierarchy

- [`Fragment`](verida_web3._internal_.Fragment.md)

  ↳ **`EventFragment`**

## Table of contents

### Constructors

- [constructor](verida_web3._internal_.EventFragment.md#constructor)

### Properties

- [\_isFragment](verida_web3._internal_.EventFragment.md#_isfragment)
- [anonymous](verida_web3._internal_.EventFragment.md#anonymous)
- [inputs](verida_web3._internal_.EventFragment.md#inputs)
- [name](verida_web3._internal_.EventFragment.md#name)
- [type](verida_web3._internal_.EventFragment.md#type)

### Methods

- [format](verida_web3._internal_.EventFragment.md#format)
- [from](verida_web3._internal_.EventFragment.md#from)
- [fromObject](verida_web3._internal_.EventFragment.md#fromobject)
- [fromString](verida_web3._internal_.EventFragment.md#fromstring)
- [isEventFragment](verida_web3._internal_.EventFragment.md#iseventfragment)
- [isFragment](verida_web3._internal_.EventFragment.md#isfragment)

## Constructors

### constructor

• **new EventFragment**(`constructorGuard`, `params`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `constructorGuard` | `any` |
| `params` | `any` |

#### Inherited from

[Fragment](verida_web3._internal_.Fragment.md).[constructor](verida_web3._internal_.Fragment.md#constructor)

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:44

## Properties

### \_isFragment

• `Readonly` **\_isFragment**: `boolean`

#### Inherited from

[Fragment](verida_web3._internal_.Fragment.md).[_isFragment](verida_web3._internal_.Fragment.md#_isfragment)

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:43

___

### anonymous

• `Readonly` **anonymous**: `boolean`

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:52

___

### inputs

• `Readonly` **inputs**: [`ParamType`](verida_web3._internal_.ParamType.md)[]

#### Inherited from

[Fragment](verida_web3._internal_.Fragment.md).[inputs](verida_web3._internal_.Fragment.md#inputs)

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:42

___

### name

• `Readonly` **name**: `string`

#### Inherited from

[Fragment](verida_web3._internal_.Fragment.md).[name](verida_web3._internal_.Fragment.md#name)

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:41

___

### type

• `Readonly` **type**: `string`

#### Inherited from

[Fragment](verida_web3._internal_.Fragment.md).[type](verida_web3._internal_.Fragment.md#type)

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

[Fragment](verida_web3._internal_.Fragment.md).[format](verida_web3._internal_.Fragment.md#format)

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:53

___

### from

▸ `Static` **from**(`value`): [`EventFragment`](verida_web3._internal_.EventFragment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` \| [`JsonFragment`](../interfaces/verida_web3._internal_.JsonFragment.md) \| [`EventFragment`](verida_web3._internal_.EventFragment.md) |

#### Returns

[`EventFragment`](verida_web3._internal_.EventFragment.md)

#### Overrides

[Fragment](verida_web3._internal_.Fragment.md).[from](verida_web3._internal_.Fragment.md#from)

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:54

___

### fromObject

▸ `Static` **fromObject**(`value`): [`EventFragment`](verida_web3._internal_.EventFragment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`JsonFragment`](../interfaces/verida_web3._internal_.JsonFragment.md) \| [`EventFragment`](verida_web3._internal_.EventFragment.md) |

#### Returns

[`EventFragment`](verida_web3._internal_.EventFragment.md)

#### Overrides

[Fragment](verida_web3._internal_.Fragment.md).[fromObject](verida_web3._internal_.Fragment.md#fromobject)

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:55

___

### fromString

▸ `Static` **fromString**(`value`): [`EventFragment`](verida_web3._internal_.EventFragment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

[`EventFragment`](verida_web3._internal_.EventFragment.md)

#### Overrides

[Fragment](verida_web3._internal_.Fragment.md).[fromString](verida_web3._internal_.Fragment.md#fromstring)

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:56

___

### isEventFragment

▸ `Static` **isEventFragment**(`value`): value is EventFragment

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is EventFragment

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:57

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

[Fragment](verida_web3._internal_.Fragment.md).[isFragment](verida_web3._internal_.Fragment.md#isfragment)

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:49
