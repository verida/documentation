[root](../README.md) / [Modules](../modules.md) / [@verida/client-ts](../modules/verida_client_ts.md) / [<internal\>](../modules/verida_client_ts._internal_.md) / \_Code

# Class: \_Code

[@verida/client-ts](../modules/verida_client_ts.md).[<internal\>](../modules/verida_client_ts._internal_.md)._Code

## Hierarchy

- [`_CodeOrName`](verida_client_ts._internal_._CodeOrName.md)

  ↳ **`_Code`**

## Table of contents

### Constructors

- [constructor](verida_client_ts._internal_._Code.md#constructor)

### Properties

- [\_items](verida_client_ts._internal_._Code.md#_items)
- [\_names](verida_client_ts._internal_._Code.md#_names)
- [\_str](verida_client_ts._internal_._Code.md#_str)

### Accessors

- [names](verida_client_ts._internal_._Code.md#names)
- [str](verida_client_ts._internal_._Code.md#str)

### Methods

- [emptyStr](verida_client_ts._internal_._Code.md#emptystr)
- [toString](verida_client_ts._internal_._Code.md#tostring)

## Constructors

### constructor

• **new _Code**(`code`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `string` \| readonly [`CodeItem`](../modules/verida_client_ts._internal_.md#codeitem)[] |

#### Overrides

[_CodeOrName](verida_client_ts._internal_._CodeOrName.md).[constructor](verida_client_ts._internal_._CodeOrName.md#constructor)

#### Defined in

node_modules/ajv/dist/compile/codegen/code.d.ts:19

## Properties

### \_items

• `Readonly` **\_items**: readonly [`CodeItem`](../modules/verida_client_ts._internal_.md#codeitem)[]

#### Defined in

node_modules/ajv/dist/compile/codegen/code.d.ts:16

___

### \_names

• `Private` `Optional` **\_names**: `any`

#### Defined in

node_modules/ajv/dist/compile/codegen/code.d.ts:18

___

### \_str

• `Private` `Optional` **\_str**: `any`

#### Defined in

node_modules/ajv/dist/compile/codegen/code.d.ts:17

## Accessors

### names

• `get` **names**(): [`UsedNames`](../modules/verida_client_ts._internal_.md#usednames)

#### Returns

[`UsedNames`](../modules/verida_client_ts._internal_.md#usednames)

#### Overrides

\_CodeOrName.names

#### Defined in

node_modules/ajv/dist/compile/codegen/code.d.ts:23

___

### str

• `get` **str**(): `string`

#### Returns

`string`

#### Overrides

\_CodeOrName.str

#### Defined in

node_modules/ajv/dist/compile/codegen/code.d.ts:22

## Methods

### emptyStr

▸ **emptyStr**(): `boolean`

#### Returns

`boolean`

#### Overrides

[_CodeOrName](verida_client_ts._internal_._CodeOrName.md).[emptyStr](verida_client_ts._internal_._CodeOrName.md#emptystr)

#### Defined in

node_modules/ajv/dist/compile/codegen/code.d.ts:21

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Overrides

[_CodeOrName](verida_client_ts._internal_._CodeOrName.md).[toString](verida_client_ts._internal_._CodeOrName.md#tostring)

#### Defined in

node_modules/ajv/dist/compile/codegen/code.d.ts:20
