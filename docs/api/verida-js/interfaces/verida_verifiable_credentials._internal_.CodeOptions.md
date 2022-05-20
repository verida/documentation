[root](../README.md) / [Modules](../modules.md) / [@verida/verifiable-credentials](../modules/verida_verifiable_credentials.md) / [<internal\>](../modules/verida_verifiable_credentials._internal_.md) / CodeOptions

# Interface: CodeOptions

[@verida/verifiable-credentials](../modules/verida_verifiable_credentials.md).[<internal\>](../modules/verida_verifiable_credentials._internal_.md).CodeOptions

## Hierarchy

- **`CodeOptions`**

  ↳ [`InstanceCodeOptions`](verida_verifiable_credentials._internal_.InstanceCodeOptions.md)

## Table of contents

### Properties

- [es5](verida_verifiable_credentials._internal_.CodeOptions.md#es5)
- [formats](verida_verifiable_credentials._internal_.CodeOptions.md#formats)
- [lines](verida_verifiable_credentials._internal_.CodeOptions.md#lines)
- [optimize](verida_verifiable_credentials._internal_.CodeOptions.md#optimize)
- [source](verida_verifiable_credentials._internal_.CodeOptions.md#source)

### Methods

- [process](verida_verifiable_credentials._internal_.CodeOptions.md#process)

## Properties

### es5

• `Optional` **es5**: `boolean`

#### Defined in

node_modules/ajv/dist/core.d.ts:73

___

### formats

• `Optional` **formats**: [`Code`](../modules/verida_verifiable_credentials._internal_.md#code)

#### Defined in

node_modules/ajv/dist/core.d.ts:76

___

### lines

• `Optional` **lines**: `boolean`

#### Defined in

node_modules/ajv/dist/core.d.ts:74

___

### optimize

• `Optional` **optimize**: `number` \| `boolean`

#### Defined in

node_modules/ajv/dist/core.d.ts:75

___

### source

• `Optional` **source**: `boolean`

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

#### Defined in

node_modules/ajv/dist/core.d.ts:78
