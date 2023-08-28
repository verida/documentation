[root](../README.md) / [Modules](../modules.md) / [@verida/vda-name-client](../modules/verida_vda_name_client.md) / [<internal\>](../modules/verida_vda_name_client._internal_.md) / ParamType

# Class: ParamType

[@verida/vda-name-client](../modules/verida_vda_name_client.md).[<internal\>](../modules/verida_vda_name_client._internal_.md).ParamType

## Table of contents

### Constructors

- [constructor](verida_vda_name_client._internal_.ParamType.md#constructor)

### Properties

- [\_isParamType](verida_vda_name_client._internal_.ParamType.md#_isparamtype)
- [arrayChildren](verida_vda_name_client._internal_.ParamType.md#arraychildren)
- [arrayLength](verida_vda_name_client._internal_.ParamType.md#arraylength)
- [baseType](verida_vda_name_client._internal_.ParamType.md#basetype)
- [components](verida_vda_name_client._internal_.ParamType.md#components)
- [indexed](verida_vda_name_client._internal_.ParamType.md#indexed)
- [name](verida_vda_name_client._internal_.ParamType.md#name)
- [type](verida_vda_name_client._internal_.ParamType.md#type)

### Methods

- [format](verida_vda_name_client._internal_.ParamType.md#format)
- [from](verida_vda_name_client._internal_.ParamType.md#from)
- [fromObject](verida_vda_name_client._internal_.ParamType.md#fromobject)
- [fromString](verida_vda_name_client._internal_.ParamType.md#fromstring)
- [isParamType](verida_vda_name_client._internal_.ParamType.md#isparamtype)

## Constructors

### constructor

• **new ParamType**(`constructorGuard`, `params`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `constructorGuard` | `any` |
| `params` | `any` |

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:32

## Properties

### \_isParamType

• `Readonly` **\_isParamType**: `boolean`

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:31

___

### arrayChildren

• `Readonly` **arrayChildren**: [`ParamType`](verida_vda_name_client._internal_.ParamType.md)

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:30

___

### arrayLength

• `Readonly` **arrayLength**: `number`

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:29

___

### baseType

• `Readonly` **baseType**: `string`

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:26

___

### components

• `Readonly` **components**: [`ParamType`](verida_vda_name_client._internal_.ParamType.md)[]

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:28

___

### indexed

• `Readonly` **indexed**: `boolean`

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:27

___

### name

• `Readonly` **name**: `string`

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:24

___

### type

• `Readonly` **type**: `string`

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:25

## Methods

### format

▸ **format**(`format?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `format?` | `string` |

#### Returns

`string`

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:33

___

### from

▸ `Static` **from**(`value`, `allowIndexed?`): [`ParamType`](verida_vda_name_client._internal_.ParamType.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` \| [`ParamType`](verida_vda_name_client._internal_.ParamType.md) \| [`JsonFragmentType`](../interfaces/verida_vda_name_client._internal_.JsonFragmentType.md) |
| `allowIndexed?` | `boolean` |

#### Returns

[`ParamType`](verida_vda_name_client._internal_.ParamType.md)

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:34

___

### fromObject

▸ `Static` **fromObject**(`value`): [`ParamType`](verida_vda_name_client._internal_.ParamType.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`ParamType`](verida_vda_name_client._internal_.ParamType.md) \| [`JsonFragmentType`](../interfaces/verida_vda_name_client._internal_.JsonFragmentType.md) |

#### Returns

[`ParamType`](verida_vda_name_client._internal_.ParamType.md)

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:35

___

### fromString

▸ `Static` **fromString**(`value`, `allowIndexed?`): [`ParamType`](verida_vda_name_client._internal_.ParamType.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |
| `allowIndexed?` | `boolean` |

#### Returns

[`ParamType`](verida_vda_name_client._internal_.ParamType.md)

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:36

___

### isParamType

▸ `Static` **isParamType**(`value`): value is ParamType

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is ParamType

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:37
