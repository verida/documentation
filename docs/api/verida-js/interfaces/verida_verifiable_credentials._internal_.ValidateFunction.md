[root](../README.md) / [Modules](../modules.md) / [@verida/verifiable-credentials](../modules/verida_verifiable_credentials.md) / [<internal\>](../modules/verida_verifiable_credentials._internal_.md) / ValidateFunction

# Interface: ValidateFunction<T\>

[@verida/verifiable-credentials](../modules/verida_verifiable_credentials.md).[<internal\>](../modules/verida_verifiable_credentials._internal_.md).ValidateFunction

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- **`ValidateFunction`**

  ↳ [`AsyncValidateFunction`](verida_verifiable_credentials._internal_.AsyncValidateFunction.md)

## Callable

### ValidateFunction

▸ **ValidateFunction**(`data`, `dataCxt?`): data is T

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |
| `dataCxt?` | [`DataValidationCxt`](verida_verifiable_credentials._internal_.DataValidationCxt.md)<`string` \| `number`\> |

#### Returns

data is T

#### Defined in

node_modules/ajv/dist/types/index.d.ts:46

## Table of contents

### Properties

- [errors](verida_verifiable_credentials._internal_.ValidateFunction.md#errors)
- [evaluated](verida_verifiable_credentials._internal_.ValidateFunction.md#evaluated)
- [schema](verida_verifiable_credentials._internal_.ValidateFunction.md#schema)
- [schemaEnv](verida_verifiable_credentials._internal_.ValidateFunction.md#schemaenv)
- [source](verida_verifiable_credentials._internal_.ValidateFunction.md#source)

## Properties

### errors

• `Optional` **errors**: ``null`` \| [`ErrorObject`](verida_verifiable_credentials._internal_.ErrorObject.md)<`string`, [`Record`](../modules/verida_verifiable_credentials._internal_.md#record)<`string`, `any`\>, `unknown`\>[]

#### Defined in

node_modules/ajv/dist/types/index.d.ts:47

___

### evaluated

• `Optional` **evaluated**: [`Evaluated`](verida_verifiable_credentials._internal_.Evaluated.md)

#### Defined in

node_modules/ajv/dist/types/index.d.ts:48

___

### schema

• **schema**: [`AnySchema`](../modules/verida_verifiable_credentials._internal_.md#anyschema)

#### Defined in

node_modules/ajv/dist/types/index.d.ts:49

___

### schemaEnv

• **schemaEnv**: [`SchemaEnv`](../classes/verida_verifiable_credentials._internal_.SchemaEnv.md)

#### Defined in

node_modules/ajv/dist/types/index.d.ts:50

___

### source

• `Optional` **source**: [`SourceCode`](verida_verifiable_credentials._internal_.SourceCode.md)

#### Defined in

node_modules/ajv/dist/types/index.d.ts:51
