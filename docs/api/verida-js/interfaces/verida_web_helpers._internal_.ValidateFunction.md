[root](../README.md) / [Modules](../modules.md) / [@verida/web-helpers](../modules/verida_web_helpers.md) / [<internal\>](../modules/verida_web_helpers._internal_.md) / ValidateFunction

# Interface: ValidateFunction<T\>

[@verida/web-helpers](../modules/verida_web_helpers.md).[<internal\>](../modules/verida_web_helpers._internal_.md).ValidateFunction

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- **`ValidateFunction`**

  ↳ [`AsyncValidateFunction`](verida_web_helpers._internal_.AsyncValidateFunction.md)

## Callable

### ValidateFunction

▸ **ValidateFunction**(`data`, `dataCxt?`): data is T

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |
| `dataCxt?` | [`DataValidationCxt`](verida_web_helpers._internal_.DataValidationCxt.md)<`string` \| `number`\> |

#### Returns

data is T

#### Defined in

packages/client-ts/node_modules/ajv/dist/types/index.d.ts:46

## Table of contents

### Properties

- [errors](verida_web_helpers._internal_.ValidateFunction.md#errors)
- [evaluated](verida_web_helpers._internal_.ValidateFunction.md#evaluated)
- [schema](verida_web_helpers._internal_.ValidateFunction.md#schema)
- [schemaEnv](verida_web_helpers._internal_.ValidateFunction.md#schemaenv)
- [source](verida_web_helpers._internal_.ValidateFunction.md#source)

## Properties

### errors

• `Optional` **errors**: ``null`` \| [`ErrorObject`](verida_web_helpers._internal_.ErrorObject.md)<`string`, [`Record`](../modules/verida_web_helpers._internal_.md#record)<`string`, `any`\>, `unknown`\>[]

#### Defined in

packages/client-ts/node_modules/ajv/dist/types/index.d.ts:47

___

### evaluated

• `Optional` **evaluated**: [`Evaluated`](verida_web_helpers._internal_.Evaluated.md)

#### Defined in

packages/client-ts/node_modules/ajv/dist/types/index.d.ts:48

___

### schema

• **schema**: [`AnySchema`](../modules/verida_web_helpers._internal_.md#anyschema)

#### Defined in

packages/client-ts/node_modules/ajv/dist/types/index.d.ts:49

___

### schemaEnv

• **schemaEnv**: [`SchemaEnv`](../classes/verida_web_helpers._internal_.SchemaEnv.md)

#### Defined in

packages/client-ts/node_modules/ajv/dist/types/index.d.ts:50

___

### source

• `Optional` **source**: [`SourceCode`](verida_web_helpers._internal_.SourceCode.md)

#### Defined in

packages/client-ts/node_modules/ajv/dist/types/index.d.ts:51
