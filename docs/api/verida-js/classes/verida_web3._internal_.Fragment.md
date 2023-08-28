[root](../README.md) / [Modules](../modules.md) / [@verida/web3](../modules/verida_web3.md) / [<internal\>](../modules/verida_web3._internal_.md) / Fragment

# Class: Fragment

[@verida/web3](../modules/verida_web3.md).[<internal\>](../modules/verida_web3._internal_.md).Fragment

## Hierarchy

- **`Fragment`**

  ↳ [`ConstructorFragment`](verida_web3._internal_.ConstructorFragment.md)

  ↳ [`EventFragment`](verida_web3._internal_.EventFragment.md)

  ↳ [`ErrorFragment`](verida_web3._internal_.ErrorFragment.md)

## Table of contents

### Constructors

- [constructor](verida_web3._internal_.Fragment.md#constructor)

### Properties

- [\_isFragment](verida_web3._internal_.Fragment.md#_isfragment)
- [inputs](verida_web3._internal_.Fragment.md#inputs)
- [name](verida_web3._internal_.Fragment.md#name)
- [type](verida_web3._internal_.Fragment.md#type)

### Methods

- [format](verida_web3._internal_.Fragment.md#format)
- [from](verida_web3._internal_.Fragment.md#from)
- [fromObject](verida_web3._internal_.Fragment.md#fromobject)
- [fromString](verida_web3._internal_.Fragment.md#fromstring)
- [isFragment](verida_web3._internal_.Fragment.md#isfragment)

## Constructors

### constructor

• **new Fragment**(`constructorGuard`, `params`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `constructorGuard` | `any` |
| `params` | `any` |

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:44

## Properties

### \_isFragment

• `Readonly` **\_isFragment**: `boolean`

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:43

___

### inputs

• `Readonly` **inputs**: [`ParamType`](verida_web3._internal_.ParamType.md)[]

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:42

___

### name

• `Readonly` **name**: `string`

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:41

___

### type

• `Readonly` **type**: `string`

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:40

## Methods

### format

▸ `Abstract` **format**(`format?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `format?` | `string` |

#### Returns

`string`

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:45

___

### from

▸ `Static` **from**(`value`): [`Fragment`](verida_web3._internal_.Fragment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` \| [`Fragment`](verida_web3._internal_.Fragment.md) \| [`JsonFragment`](../interfaces/verida_web3._internal_.JsonFragment.md) |

#### Returns

[`Fragment`](verida_web3._internal_.Fragment.md)

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:46

___

### fromObject

▸ `Static` **fromObject**(`value`): [`Fragment`](verida_web3._internal_.Fragment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Fragment`](verida_web3._internal_.Fragment.md) \| [`JsonFragment`](../interfaces/verida_web3._internal_.JsonFragment.md) |

#### Returns

[`Fragment`](verida_web3._internal_.Fragment.md)

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:47

___

### fromString

▸ `Static` **fromString**(`value`): [`Fragment`](verida_web3._internal_.Fragment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

[`Fragment`](verida_web3._internal_.Fragment.md)

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:48

___

### isFragment

▸ `Static` **isFragment**(`value`): value is Fragment

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is Fragment

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:49
