[root](../README.md) / [Modules](../modules.md) / [@verida/verifiable-credentials](../modules/verida_verifiable_credentials.md) / [<internal\>](../modules/verida_verifiable_credentials._internal_.md) / ValueScopeName

# Class: ValueScopeName

[@verida/verifiable-credentials](../modules/verida_verifiable_credentials.md).[<internal\>](../modules/verida_verifiable_credentials._internal_.md).ValueScopeName

## Hierarchy

- [`Name`](verida_verifiable_credentials._internal_.Name.md)

  ↳ **`ValueScopeName`**

## Table of contents

### Constructors

- [constructor](verida_verifiable_credentials._internal_.ValueScopeName.md#constructor)

### Properties

- [prefix](verida_verifiable_credentials._internal_.ValueScopeName.md#prefix)
- [scopePath](verida_verifiable_credentials._internal_.ValueScopeName.md#scopepath)
- [str](verida_verifiable_credentials._internal_.ValueScopeName.md#str)
- [value](verida_verifiable_credentials._internal_.ValueScopeName.md#value)

### Accessors

- [names](verida_verifiable_credentials._internal_.ValueScopeName.md#names)

### Methods

- [emptyStr](verida_verifiable_credentials._internal_.ValueScopeName.md#emptystr)
- [setValue](verida_verifiable_credentials._internal_.ValueScopeName.md#setvalue)
- [toString](verida_verifiable_credentials._internal_.ValueScopeName.md#tostring)

## Constructors

### constructor

• **new ValueScopeName**(`prefix`, `nameStr`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `prefix` | `string` |
| `nameStr` | `string` |

#### Overrides

[Name](verida_verifiable_credentials._internal_.Name.md).[constructor](verida_verifiable_credentials._internal_.Name.md#constructor)

#### Defined in

node_modules/ajv/dist/compile/codegen/scope.d.ts:60

## Properties

### prefix

• `Readonly` **prefix**: `string`

#### Defined in

node_modules/ajv/dist/compile/codegen/scope.d.ts:57

___

### scopePath

• `Optional` **scopePath**: [`Code`](../modules/verida_verifiable_credentials._internal_.md#code)

#### Defined in

node_modules/ajv/dist/compile/codegen/scope.d.ts:59

___

### str

• `Readonly` **str**: `string`

#### Inherited from

[Name](verida_verifiable_credentials._internal_.Name.md).[str](verida_verifiable_credentials._internal_.Name.md#str)

#### Defined in

node_modules/ajv/dist/compile/codegen/code.d.ts:9

___

### value

• `Optional` **value**: [`NameValue`](../interfaces/verida_verifiable_credentials._internal_.NameValue.md)

#### Defined in

node_modules/ajv/dist/compile/codegen/scope.d.ts:58

## Accessors

### names

• `get` **names**(): [`UsedNames`](../modules/verida_verifiable_credentials._internal_.md#usednames)

#### Returns

[`UsedNames`](../modules/verida_verifiable_credentials._internal_.md#usednames)

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

[Name](verida_verifiable_credentials._internal_.Name.md).[emptyStr](verida_verifiable_credentials._internal_.Name.md#emptystr)

#### Defined in

node_modules/ajv/dist/compile/codegen/code.d.ts:12

___

### setValue

▸ **setValue**(`value`, `__namedParameters`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`NameValue`](../interfaces/verida_verifiable_credentials._internal_.NameValue.md) |
| `__namedParameters` | [`ScopePath`](../interfaces/verida_verifiable_credentials._internal_.ScopePath.md) |

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

[Name](verida_verifiable_credentials._internal_.Name.md).[toString](verida_verifiable_credentials._internal_.Name.md#tostring)

#### Defined in

node_modules/ajv/dist/compile/codegen/code.d.ts:11
