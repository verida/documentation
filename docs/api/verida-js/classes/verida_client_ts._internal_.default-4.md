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

- [ajv](verida_client_ts._internal_.default-4.md#ajv)
- [errors](verida_client_ts._internal_.default-4.md#errors)
- [message](verida_client_ts._internal_.default-4.md#message)
- [name](verida_client_ts._internal_.default-4.md#name)
- [stack](verida_client_ts._internal_.default-4.md#stack)
- [validation](verida_client_ts._internal_.default-4.md#validation)
- [prepareStackTrace](verida_client_ts._internal_.default-4.md#preparestacktrace)
- [stackTraceLimit](verida_client_ts._internal_.default-4.md#stacktracelimit)

### Methods

- [captureStackTrace](verida_client_ts._internal_.default-4.md#capturestacktrace)

## Constructors

### constructor

• **new default**(`errors`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `errors` | [`Partial`](../modules/verida_client_ts._internal_.md#partial)<[`ErrorObject`](../interfaces/verida_client_ts._internal_.ErrorObject.md)<`string`, [`Record`](../modules/verida_client_ts._internal_.md#record)<`string`, `any`\>, `unknown`\>\>[] |

#### Overrides

Error.constructor

#### Defined in

packages/client-ts/node_modules/ajv/dist/runtime/validation_error.d.ts:6

## Properties

### ajv

• `Readonly` **ajv**: ``true``

#### Defined in

packages/client-ts/node_modules/ajv/dist/runtime/validation_error.d.ts:4

___

### errors

• `Readonly` **errors**: [`Partial`](../modules/verida_client_ts._internal_.md#partial)<[`ErrorObject`](../interfaces/verida_client_ts._internal_.ErrorObject.md)<`string`, [`Record`](../modules/verida_client_ts._internal_.md#record)<`string`, `any`\>, `unknown`\>\>[]

#### Defined in

packages/client-ts/node_modules/ajv/dist/runtime/validation_error.d.ts:3

___

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:974

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

### validation

• `Readonly` **validation**: ``true``

#### Defined in

packages/client-ts/node_modules/ajv/dist/runtime/validation_error.d.ts:5

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
