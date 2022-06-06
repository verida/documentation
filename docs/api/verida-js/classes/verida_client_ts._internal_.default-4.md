[root](../README.md) / [Modules](../modules.md) / [@verida/client-ts](../modules/verida_client_ts.md) / [<internal\>](../modules/verida_client_ts._internal_.md) / default

# Class: default

[@verida/client-ts](../modules/verida_client_ts.md).[<internal\>](../modules/verida_client_ts._internal_.md).default

## Hierarchy

- [`Error`](../modules/verida_client_ts._internal_.md#error)

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](verida_client_ts._internal_.default-4.md#constructor)

### Properties

- [message](verida_client_ts._internal_.default-4.md#message)
- [missingRef](verida_client_ts._internal_.default-4.md#missingref)
- [missingSchema](verida_client_ts._internal_.default-4.md#missingschema)
- [name](verida_client_ts._internal_.default-4.md#name)
- [stack](verida_client_ts._internal_.default-4.md#stack)
- [prepareStackTrace](verida_client_ts._internal_.default-4.md#preparestacktrace)
- [stackTraceLimit](verida_client_ts._internal_.default-4.md#stacktracelimit)

### Methods

- [captureStackTrace](verida_client_ts._internal_.default-4.md#capturestacktrace)

## Constructors

### constructor

• **new default**(`baseId`, `ref`, `msg?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `baseId` | `string` |
| `ref` | `string` |
| `msg?` | `string` |

#### Overrides

Error.constructor

#### Defined in

node_modules/ajv/dist/compile/ref_error.d.ts:4

## Properties

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:974

___

### missingRef

• `Readonly` **missingRef**: `string`

#### Defined in

node_modules/ajv/dist/compile/ref_error.d.ts:2

___

### missingSchema

• `Readonly` **missingSchema**: `string`

#### Defined in

node_modules/ajv/dist/compile/ref_error.d.ts:3

___

### name

• **name**: `string`

#### Inherited from

Error.name

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:973

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:975

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: [`Error`](../modules/verida_client_ts._internal_.md#error), `stackTraces`: [`CallSite`](../interfaces/verida_client_ts._internal_.CallSite.md)[]) => `any`

#### Type declaration

▸ (`err`, `stackTraces`): `any`

Optional override for formatting stack traces

**`see`** https://v8.dev/docs/stack-trace-api#customizing-stack-traces

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | [`Error`](../modules/verida_client_ts._internal_.md#error) |
| `stackTraces` | [`CallSite`](../interfaces/verida_client_ts._internal_.CallSite.md)[] |

##### Returns

`any`

#### Inherited from

Error.prepareStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:11

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

#### Defined in

node_modules/@types/node/globals.d.ts:13

## Methods

### captureStackTrace

▸ `Static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

Error.captureStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:4
