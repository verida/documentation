[root](../README.md) / [Modules](../modules.md) / [@verida/web-helpers](../modules/verida_web_helpers.md) / [<internal\>](../modules/verida_web_helpers._internal_.md) / \_Code

# Class: \_Code

[@verida/web-helpers](../modules/verida_web_helpers.md).[<internal\>](../modules/verida_web_helpers._internal_.md)._Code

## Hierarchy

- [`_CodeOrName`](verida_web_helpers._internal_._CodeOrName.md)

  ↳ **`_Code`**

## Table of contents

### Constructors

- [constructor](verida_web_helpers._internal_._Code.md#constructor)

### Properties

- [\_items](verida_web_helpers._internal_._Code.md#_items)
- [\_names](verida_web_helpers._internal_._Code.md#_names)
- [\_str](verida_web_helpers._internal_._Code.md#_str)

### Accessors

- [names](verida_web_helpers._internal_._Code.md#names)
- [str](verida_web_helpers._internal_._Code.md#str)

### Methods

- [emptyStr](verida_web_helpers._internal_._Code.md#emptystr)
- [toString](verida_web_helpers._internal_._Code.md#tostring)

## Constructors

### constructor

• **new _Code**(`code`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `string` \| readonly [`CodeItem`](../modules/verida_web_helpers._internal_.md#codeitem)[] |

#### Overrides

[_CodeOrName](verida_web_helpers._internal_._CodeOrName.md).[constructor](verida_web_helpers._internal_._CodeOrName.md#constructor)

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/codegen/code.d.ts:19

## Properties

### \_items

• `Readonly` **\_items**: readonly [`CodeItem`](../modules/verida_web_helpers._internal_.md#codeitem)[]

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/codegen/code.d.ts:16

___

### \_names

• `Private` `Optional` **\_names**: `any`

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/codegen/code.d.ts:18

___

### \_str

• `Private` `Optional` **\_str**: `any`

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/codegen/code.d.ts:17

## Accessors

### names

• `get` **names**(): [`UsedNames`](../modules/verida_web_helpers._internal_.md#usednames)

#### Returns

[`UsedNames`](../modules/verida_web_helpers._internal_.md#usednames)

#### Overrides

\_CodeOrName.names

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/codegen/code.d.ts:23

___

### str

• `get` **str**(): `string`

#### Returns

`string`

#### Overrides

\_CodeOrName.str

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/codegen/code.d.ts:22

## Methods

### emptyStr

▸ **emptyStr**(): `boolean`

#### Returns

`boolean`

#### Overrides

[_CodeOrName](verida_web_helpers._internal_._CodeOrName.md).[emptyStr](verida_web_helpers._internal_._CodeOrName.md#emptystr)

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/codegen/code.d.ts:21

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Overrides

[_CodeOrName](verida_web_helpers._internal_._CodeOrName.md).[toString](verida_web_helpers._internal_._CodeOrName.md#tostring)

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/codegen/code.d.ts:20
