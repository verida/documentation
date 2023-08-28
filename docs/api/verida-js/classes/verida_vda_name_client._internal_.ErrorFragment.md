[root](../README.md) / [Modules](../modules.md) / [@verida/vda-name-client](../modules/verida_vda_name_client.md) / [<internal\>](../modules/verida_vda_name_client._internal_.md) / ErrorFragment

# Class: ErrorFragment

[@verida/vda-name-client](../modules/verida_vda_name_client.md).[<internal\>](../modules/verida_vda_name_client._internal_.md).ErrorFragment

## Hierarchy

- [`Fragment`](verida_vda_name_client._internal_.Fragment.md)

  ↳ **`ErrorFragment`**

## Table of contents

### Constructors

- [constructor](verida_vda_name_client._internal_.ErrorFragment.md#constructor)

### Properties

- [\_isFragment](verida_vda_name_client._internal_.ErrorFragment.md#_isfragment)
- [inputs](verida_vda_name_client._internal_.ErrorFragment.md#inputs)
- [name](verida_vda_name_client._internal_.ErrorFragment.md#name)
- [type](verida_vda_name_client._internal_.ErrorFragment.md#type)

### Methods

- [format](verida_vda_name_client._internal_.ErrorFragment.md#format)
- [from](verida_vda_name_client._internal_.ErrorFragment.md#from)
- [fromObject](verida_vda_name_client._internal_.ErrorFragment.md#fromobject)
- [fromString](verida_vda_name_client._internal_.ErrorFragment.md#fromstring)
- [isErrorFragment](verida_vda_name_client._internal_.ErrorFragment.md#iserrorfragment)
- [isFragment](verida_vda_name_client._internal_.ErrorFragment.md#isfragment)

## Constructors

### constructor

• **new ErrorFragment**(`constructorGuard`, `params`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `constructorGuard` | `any` |
| `params` | `any` |

#### Inherited from

[Fragment](verida_vda_name_client._internal_.Fragment.md).[constructor](verida_vda_name_client._internal_.Fragment.md#constructor)

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:44

## Properties

### \_isFragment

• `Readonly` **\_isFragment**: `boolean`

#### Inherited from

[Fragment](verida_vda_name_client._internal_.Fragment.md).[_isFragment](verida_vda_name_client._internal_.Fragment.md#_isfragment)

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:43

___

### inputs

• `Readonly` **inputs**: [`ParamType`](verida_vda_name_client._internal_.ParamType.md)[]

#### Inherited from

[Fragment](verida_vda_name_client._internal_.Fragment.md).[inputs](verida_vda_name_client._internal_.Fragment.md#inputs)

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:42

___

### name

• `Readonly` **name**: `string`

#### Inherited from

[Fragment](verida_vda_name_client._internal_.Fragment.md).[name](verida_vda_name_client._internal_.Fragment.md#name)

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:41

___

### type

• `Readonly` **type**: `string`

#### Inherited from

[Fragment](verida_vda_name_client._internal_.Fragment.md).[type](verida_vda_name_client._internal_.Fragment.md#type)

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

[Fragment](verida_vda_name_client._internal_.Fragment.md).[format](verida_vda_name_client._internal_.Fragment.md#format)

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:79

___

### from

▸ `Static` **from**(`value`): [`ErrorFragment`](verida_vda_name_client._internal_.ErrorFragment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` \| [`JsonFragment`](../interfaces/verida_vda_name_client._internal_.JsonFragment.md) \| [`ErrorFragment`](verida_vda_name_client._internal_.ErrorFragment.md) |

#### Returns

[`ErrorFragment`](verida_vda_name_client._internal_.ErrorFragment.md)

#### Overrides

[Fragment](verida_vda_name_client._internal_.Fragment.md).[from](verida_vda_name_client._internal_.Fragment.md#from)

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:80

___

### fromObject

▸ `Static` **fromObject**(`value`): [`ErrorFragment`](verida_vda_name_client._internal_.ErrorFragment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`JsonFragment`](../interfaces/verida_vda_name_client._internal_.JsonFragment.md) \| [`ErrorFragment`](verida_vda_name_client._internal_.ErrorFragment.md) |

#### Returns

[`ErrorFragment`](verida_vda_name_client._internal_.ErrorFragment.md)

#### Overrides

[Fragment](verida_vda_name_client._internal_.Fragment.md).[fromObject](verida_vda_name_client._internal_.Fragment.md#fromobject)

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:81

___

### fromString

▸ `Static` **fromString**(`value`): [`ErrorFragment`](verida_vda_name_client._internal_.ErrorFragment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

[`ErrorFragment`](verida_vda_name_client._internal_.ErrorFragment.md)

#### Overrides

[Fragment](verida_vda_name_client._internal_.Fragment.md).[fromString](verida_vda_name_client._internal_.Fragment.md#fromstring)

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:82

___

### isErrorFragment

▸ `Static` **isErrorFragment**(`value`): value is ErrorFragment

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is ErrorFragment

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:83

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

[Fragment](verida_vda_name_client._internal_.Fragment.md).[isFragment](verida_vda_name_client._internal_.Fragment.md#isfragment)

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:49
