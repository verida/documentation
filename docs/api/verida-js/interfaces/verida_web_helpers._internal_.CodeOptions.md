[root](../README.md) / [Modules](../modules.md) / [@verida/web-helpers](../modules/verida_web_helpers.md) / [<internal\>](../modules/verida_web_helpers._internal_.md) / CodeOptions

# Interface: CodeOptions

[@verida/web-helpers](../modules/verida_web_helpers.md).[<internal\>](../modules/verida_web_helpers._internal_.md).CodeOptions

## Hierarchy

- **`CodeOptions`**

  ↳ [`InstanceCodeOptions`](verida_web_helpers._internal_.InstanceCodeOptions.md)

## Table of contents

### Properties

- [es5](verida_web_helpers._internal_.CodeOptions.md#es5)
- [esm](verida_web_helpers._internal_.CodeOptions.md#esm)
- [formats](verida_web_helpers._internal_.CodeOptions.md#formats)
- [lines](verida_web_helpers._internal_.CodeOptions.md#lines)
- [optimize](verida_web_helpers._internal_.CodeOptions.md#optimize)
- [regExp](verida_web_helpers._internal_.CodeOptions.md#regexp)
- [source](verida_web_helpers._internal_.CodeOptions.md#source)

### Methods

- [process](verida_web_helpers._internal_.CodeOptions.md#process)

## Properties

### es5

• `Optional` **es5**: `boolean`

#### Defined in

packages/client-ts/node_modules/ajv/dist/core.d.ts:74

___

### esm

• `Optional` **esm**: `boolean`

#### Defined in

packages/client-ts/node_modules/ajv/dist/core.d.ts:75

___

### formats

• `Optional` **formats**: [`Code`](../modules/verida_web_helpers._internal_.md#code)

#### Defined in

packages/client-ts/node_modules/ajv/dist/core.d.ts:78

___

### lines

• `Optional` **lines**: `boolean`

#### Defined in

packages/client-ts/node_modules/ajv/dist/core.d.ts:76

___

### optimize

• `Optional` **optimize**: `number` \| `boolean`

#### Defined in

packages/client-ts/node_modules/ajv/dist/core.d.ts:77

___

### regExp

• `Optional` **regExp**: [`RegExpEngine`](verida_web_helpers._internal_.RegExpEngine.md)

#### Defined in

packages/client-ts/node_modules/ajv/dist/core.d.ts:81

___

### source

• `Optional` **source**: `boolean`

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

#### Defined in

packages/client-ts/node_modules/ajv/dist/core.d.ts:80
