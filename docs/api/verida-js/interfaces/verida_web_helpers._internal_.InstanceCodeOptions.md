[root](../README.md) / [Modules](../modules.md) / [@verida/web-helpers](../modules/verida_web_helpers.md) / [<internal\>](../modules/verida_web_helpers._internal_.md) / InstanceCodeOptions

# Interface: InstanceCodeOptions

[@verida/web-helpers](../modules/verida_web_helpers.md).[<internal\>](../modules/verida_web_helpers._internal_.md).InstanceCodeOptions

## Hierarchy

- [`CodeOptions`](verida_web_helpers._internal_.CodeOptions.md)

  ↳ **`InstanceCodeOptions`**

## Table of contents

### Properties

- [es5](verida_web_helpers._internal_.InstanceCodeOptions.md#es5)
- [esm](verida_web_helpers._internal_.InstanceCodeOptions.md#esm)
- [formats](verida_web_helpers._internal_.InstanceCodeOptions.md#formats)
- [lines](verida_web_helpers._internal_.InstanceCodeOptions.md#lines)
- [optimize](verida_web_helpers._internal_.InstanceCodeOptions.md#optimize)
- [regExp](verida_web_helpers._internal_.InstanceCodeOptions.md#regexp)
- [source](verida_web_helpers._internal_.InstanceCodeOptions.md#source)

### Methods

- [process](verida_web_helpers._internal_.InstanceCodeOptions.md#process)

## Properties

### es5

• `Optional` **es5**: `boolean`

#### Inherited from

[CodeOptions](verida_web_helpers._internal_.CodeOptions.md).[es5](verida_web_helpers._internal_.CodeOptions.md#es5)

#### Defined in

packages/client-ts/node_modules/ajv/dist/core.d.ts:74

___

### esm

• `Optional` **esm**: `boolean`

#### Inherited from

[CodeOptions](verida_web_helpers._internal_.CodeOptions.md).[esm](verida_web_helpers._internal_.CodeOptions.md#esm)

#### Defined in

packages/client-ts/node_modules/ajv/dist/core.d.ts:75

___

### formats

• `Optional` **formats**: [`Code`](../modules/verida_web_helpers._internal_.md#code)

#### Inherited from

[CodeOptions](verida_web_helpers._internal_.CodeOptions.md).[formats](verida_web_helpers._internal_.CodeOptions.md#formats)

#### Defined in

packages/client-ts/node_modules/ajv/dist/core.d.ts:78

___

### lines

• `Optional` **lines**: `boolean`

#### Inherited from

[CodeOptions](verida_web_helpers._internal_.CodeOptions.md).[lines](verida_web_helpers._internal_.CodeOptions.md#lines)

#### Defined in

packages/client-ts/node_modules/ajv/dist/core.d.ts:76

___

### optimize

• **optimize**: `number`

#### Overrides

[CodeOptions](verida_web_helpers._internal_.CodeOptions.md).[optimize](verida_web_helpers._internal_.CodeOptions.md#optimize)

#### Defined in

packages/client-ts/node_modules/ajv/dist/core.d.ts:85

___

### regExp

• **regExp**: [`RegExpEngine`](verida_web_helpers._internal_.RegExpEngine.md)

#### Overrides

[CodeOptions](verida_web_helpers._internal_.CodeOptions.md).[regExp](verida_web_helpers._internal_.CodeOptions.md#regexp)

#### Defined in

packages/client-ts/node_modules/ajv/dist/core.d.ts:84

___

### source

• `Optional` **source**: `boolean`

#### Inherited from

[CodeOptions](verida_web_helpers._internal_.CodeOptions.md).[source](verida_web_helpers._internal_.CodeOptions.md#source)

#### Defined in

packages/client-ts/node_modules/ajv/dist/core.d.ts:79

## Methods

### process

▸ `Optional` **process**(`code`, `schema?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `string` |
| `schema?` | [`SchemaEnv`](../classes/verida_web_helpers._internal_.SchemaEnv.md) |

#### Returns

`string`

#### Inherited from

[CodeOptions](verida_web_helpers._internal_.CodeOptions.md).[process](verida_web_helpers._internal_.CodeOptions.md#process)

#### Defined in

packages/client-ts/node_modules/ajv/dist/core.d.ts:80
