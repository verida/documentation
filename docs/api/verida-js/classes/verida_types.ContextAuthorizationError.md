[root](../README.md) / [Modules](../modules.md) / [@verida/types](../modules/verida_types.md) / ContextAuthorizationError

# Class: ContextAuthorizationError

[@verida/types](../modules/verida_types.md).ContextAuthorizationError

## Hierarchy

- [`Error`](../modules/verida_types._internal_.md#error)

  ↳ **`ContextAuthorizationError`**

## Table of contents

### Constructors

- [constructor](verida_types.ContextAuthorizationError.md#constructor)

### Properties

- [message](verida_types.ContextAuthorizationError.md#message)
- [name](verida_types.ContextAuthorizationError.md#name)
- [stack](verida_types.ContextAuthorizationError.md#stack)
- [prepareStackTrace](verida_types.ContextAuthorizationError.md#preparestacktrace)
- [stackTraceLimit](verida_types.ContextAuthorizationError.md#stacktracelimit)

### Methods

- [captureStackTrace](verida_types.ContextAuthorizationError.md#capturestacktrace)

## Constructors

### constructor

• **new ContextAuthorizationError**(`message`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Overrides

Error.constructor

#### Defined in

[packages/types/src/AccountInterfaces.ts:36](https://github.com/verida/verida-js/blob/032961c/packages/types/src/AccountInterfaces.ts#L36)

## Properties

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

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: [`Error`](../modules/verida_types._internal_.md#error), `stackTraces`: [`CallSite`](../interfaces/verida_types._internal_.CallSite.md)[]) => `any`

#### Type declaration

▸ (`err`, `stackTraces`): `any`

Optional override for formatting stack traces

**`see`** https://v8.dev/docs/stack-trace-api#customizing-stack-traces

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | [`Error`](../modules/verida_types._internal_.md#error) |
| `stackTraces` | [`CallSite`](../interfaces/verida_types._internal_.CallSite.md)[] |

##### Returns

`any`

#### Inherited from

Error.prepareStackTrace

#### Defined in

packages/types/node_modules/@types/node/ts4.8/globals.d.ts:11

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

#### Defined in

packages/types/node_modules/@types/node/ts4.8/globals.d.ts:13

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

packages/types/node_modules/@types/node/ts4.8/globals.d.ts:4
