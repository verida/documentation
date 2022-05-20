[root](../README.md) / [Modules](../modules.md) / [@verida/client-ts](../modules/verida_client_ts.md) / [<internal\>](../modules/verida_client_ts._internal_.md) / ValueScopeName

# Class: ValueScopeName

[@verida/client-ts](../modules/verida_client_ts.md).[<internal\>](../modules/verida_client_ts._internal_.md).ValueScopeName

## Hierarchy

- [`Name`](verida_client_ts._internal_.Name.md)

  ↳ **`ValueScopeName`**

## Table of contents

### Constructors

- [constructor](verida_client_ts._internal_.ValueScopeName.md#constructor)

### Properties

- [prefix](verida_client_ts._internal_.ValueScopeName.md#prefix)
- [scopePath](verida_client_ts._internal_.ValueScopeName.md#scopepath)
- [str](verida_client_ts._internal_.ValueScopeName.md#str)
- [value](verida_client_ts._internal_.ValueScopeName.md#value)

### Accessors

- [names](verida_client_ts._internal_.ValueScopeName.md#names)

### Methods

- [emptyStr](verida_client_ts._internal_.ValueScopeName.md#emptystr)
- [setValue](verida_client_ts._internal_.ValueScopeName.md#setvalue)
- [toString](verida_client_ts._internal_.ValueScopeName.md#tostring)

## Constructors

### constructor

• **new ValueScopeName**(`prefix`, `nameStr`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `prefix` | `string` |
| `nameStr` | `string` |

#### Overrides

[Name](verida_client_ts._internal_.Name.md).[constructor](verida_client_ts._internal_.Name.md#constructor)

#### Defined in

node_modules/ajv/dist/compile/codegen/scope.d.ts:60

## Properties

### prefix

• `Readonly` **prefix**: `string`

#### Defined in

node_modules/ajv/dist/compile/codegen/scope.d.ts:57

___

### scopePath

• `Optional` **scopePath**: [`Code`](../modules/verida_client_ts._internal_.md#code)

#### Defined in

node_modules/ajv/dist/compile/codegen/scope.d.ts:59

___

### str

• `Readonly` **str**: `string`

#### Inherited from

[Name](verida_client_ts._internal_.Name.md).[str](verida_client_ts._internal_.Name.md#str)

#### Defined in

node_modules/ajv/dist/compile/codegen/code.d.ts:9

___

### value

• `Optional` **value**: [`NameValue`](../interfaces/verida_client_ts._internal_.NameValue.md)

#### Defined in

node_modules/ajv/dist/compile/codegen/scope.d.ts:58

## Accessors

### names

• `get` **names**(): [`UsedNames`](../modules/verida_client_ts._internal_.md#usednames)

#### Returns

[`UsedNames`](../modules/verida_client_ts._internal_.md#usednames)

#### Inherited from

Name.names

#### Defined in

node_modules/ajv/dist/compile/codegen/code.d.ts:13

## Methods

### emptyStr

▸ **emptyStr**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[Name](verida_client_ts._internal_.Name.md).[emptyStr](verida_client_ts._internal_.Name.md#emptystr)

#### Defined in

node_modules/ajv/dist/compile/codegen/code.d.ts:12

___

### setValue

▸ **setValue**(`value`, `__namedParameters`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`NameValue`](../interfaces/verida_client_ts._internal_.NameValue.md) |
| `__namedParameters` | [`ScopePath`](../interfaces/verida_client_ts._internal_.ScopePath.md) |

#### Returns

`void`

#### Defined in

node_modules/ajv/dist/compile/codegen/scope.d.ts:61

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Inherited from

[Name](verida_client_ts._internal_.Name.md).[toString](verida_client_ts._internal_.Name.md#tostring)

#### Defined in

node_modules/ajv/dist/compile/codegen/code.d.ts:11
