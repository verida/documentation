[root](../README.md) / [Modules](../modules.md) / [@verida/web-helpers](../modules/verida_web_helpers.md) / [<internal\>](../modules/verida_web_helpers._internal_.md) / ValueScopeName

# Class: ValueScopeName

[@verida/web-helpers](../modules/verida_web_helpers.md).[<internal\>](../modules/verida_web_helpers._internal_.md).ValueScopeName

## Hierarchy

- [`Name`](verida_web_helpers._internal_.Name.md)

  ↳ **`ValueScopeName`**

## Table of contents

### Constructors

- [constructor](verida_web_helpers._internal_.ValueScopeName.md#constructor)

### Properties

- [prefix](verida_web_helpers._internal_.ValueScopeName.md#prefix)
- [scopePath](verida_web_helpers._internal_.ValueScopeName.md#scopepath)
- [str](verida_web_helpers._internal_.ValueScopeName.md#str)
- [value](verida_web_helpers._internal_.ValueScopeName.md#value)

### Accessors

- [names](verida_web_helpers._internal_.ValueScopeName.md#names)

### Methods

- [emptyStr](verida_web_helpers._internal_.ValueScopeName.md#emptystr)
- [setValue](verida_web_helpers._internal_.ValueScopeName.md#setvalue)
- [toString](verida_web_helpers._internal_.ValueScopeName.md#tostring)

## Constructors

### constructor

• **new ValueScopeName**(`prefix`, `nameStr`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `prefix` | `string` |
| `nameStr` | `string` |

#### Overrides

[Name](verida_web_helpers._internal_.Name.md).[constructor](verida_web_helpers._internal_.Name.md#constructor)

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/codegen/scope.d.ts:60

## Properties

### prefix

• `Readonly` **prefix**: `string`

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/codegen/scope.d.ts:57

___

### scopePath

• `Optional` **scopePath**: [`Code`](../modules/verida_web_helpers._internal_.md#code)

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/codegen/scope.d.ts:59

___

### str

• `Readonly` **str**: `string`

#### Inherited from

[Name](verida_web_helpers._internal_.Name.md).[str](verida_web_helpers._internal_.Name.md#str)

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/codegen/code.d.ts:9

___

### value

• `Optional` **value**: [`NameValue`](../interfaces/verida_web_helpers._internal_.NameValue.md)

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/codegen/scope.d.ts:58

## Accessors

### names

• `get` **names**(): [`UsedNames`](../modules/verida_web_helpers._internal_.md#usednames)

#### Returns

[`UsedNames`](../modules/verida_web_helpers._internal_.md#usednames)

#### Inherited from

Name.names

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/codegen/code.d.ts:13

## Methods

### emptyStr

▸ **emptyStr**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[Name](verida_web_helpers._internal_.Name.md).[emptyStr](verida_web_helpers._internal_.Name.md#emptystr)

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/codegen/code.d.ts:12

___

### setValue

▸ **setValue**(`value`, `__namedParameters`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`NameValue`](../interfaces/verida_web_helpers._internal_.NameValue.md) |
| `__namedParameters` | [`ScopePath`](../interfaces/verida_web_helpers._internal_.ScopePath.md) |

#### Returns

`void`

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/codegen/scope.d.ts:61

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Inherited from

[Name](verida_web_helpers._internal_.Name.md).[toString](verida_web_helpers._internal_.Name.md#tostring)

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/codegen/code.d.ts:11
