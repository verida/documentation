[root](../README.md) / [Modules](../modules.md) / [@verida/verifiable-credentials](../modules/verida_verifiable_credentials.md) / [<internal\>](../modules/verida_verifiable_credentials._internal_.md) / InstanceCodeOptions

# Interface: InstanceCodeOptions

[@verida/verifiable-credentials](../modules/verida_verifiable_credentials.md).[<internal\>](../modules/verida_verifiable_credentials._internal_.md).InstanceCodeOptions

## Hierarchy

- [`CodeOptions`](verida_verifiable_credentials._internal_.CodeOptions.md)

  ↳ **`InstanceCodeOptions`**

## Table of contents

### Properties

- [es5](verida_verifiable_credentials._internal_.InstanceCodeOptions.md#es5)
- [formats](verida_verifiable_credentials._internal_.InstanceCodeOptions.md#formats)
- [lines](verida_verifiable_credentials._internal_.InstanceCodeOptions.md#lines)
- [optimize](verida_verifiable_credentials._internal_.InstanceCodeOptions.md#optimize)
- [source](verida_verifiable_credentials._internal_.InstanceCodeOptions.md#source)

### Methods

- [process](verida_verifiable_credentials._internal_.InstanceCodeOptions.md#process)

## Properties

### es5

• `Optional` **es5**: `boolean`

#### Inherited from

[CodeOptions](verida_verifiable_credentials._internal_.CodeOptions.md).[es5](verida_verifiable_credentials._internal_.CodeOptions.md#es5)

#### Defined in

node_modules/ajv/dist/core.d.ts:73

___

### formats

• `Optional` **formats**: [`Code`](../modules/verida_verifiable_credentials._internal_.md#code)

#### Inherited from

[CodeOptions](verida_verifiable_credentials._internal_.CodeOptions.md).[formats](verida_verifiable_credentials._internal_.CodeOptions.md#formats)

#### Defined in

node_modules/ajv/dist/core.d.ts:76

___

### lines

• `Optional` **lines**: `boolean`

#### Inherited from

[CodeOptions](verida_verifiable_credentials._internal_.CodeOptions.md).[lines](verida_verifiable_credentials._internal_.CodeOptions.md#lines)

#### Defined in

node_modules/ajv/dist/core.d.ts:74

___

### optimize

• **optimize**: `number`

#### Overrides

[CodeOptions](verida_verifiable_credentials._internal_.CodeOptions.md).[optimize](verida_verifiable_credentials._internal_.CodeOptions.md#optimize)

#### Defined in

node_modules/ajv/dist/core.d.ts:81

___

### source

• `Optional` **source**: `boolean`

#### Inherited from

[CodeOptions](verida_verifiable_credentials._internal_.CodeOptions.md).[source](verida_verifiable_credentials._internal_.CodeOptions.md#source)

#### Defined in

node_modules/ajv/dist/core.d.ts:77

## Methods

### process

▸ `Optional` **process**(`code`, `schema?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `string` |
| `schema?` | [`SchemaEnv`](../classes/verida_verifiable_credentials._internal_.SchemaEnv.md) |

#### Returns

`string`

#### Inherited from

[CodeOptions](verida_verifiable_credentials._internal_.CodeOptions.md).[process](verida_verifiable_credentials._internal_.CodeOptions.md#process)

#### Defined in

node_modules/ajv/dist/core.d.ts:78
