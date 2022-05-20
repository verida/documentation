[root](../README.md) / [Modules](../modules.md) / [@verida/verifiable-credentials](../modules/verida_verifiable_credentials.md) / [<internal\>](../modules/verida_verifiable_credentials._internal_.md) / AsyncValidateFunction

# Interface: AsyncValidateFunction<T\>

[@verida/verifiable-credentials](../modules/verida_verifiable_credentials.md).[<internal\>](../modules/verida_verifiable_credentials._internal_.md).AsyncValidateFunction

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`ValidateFunction`](verida_verifiable_credentials._internal_.ValidateFunction.md)<`T`\>

  ↳ **`AsyncValidateFunction`**

## Callable

### AsyncValidateFunction

▸ **AsyncValidateFunction**(...`args`): `Promise`<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [data: any, dataCxt?: DataValidationCxt<string \| number\>] |

#### Returns

`Promise`<`T`\>

#### Defined in

node_modules/ajv/dist/types/index.d.ts:69

### AsyncValidateFunction

▸ **AsyncValidateFunction**(`data`, `dataCxt?`): data is T

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

- [$async](verida_verifiable_credentials._internal_.AsyncValidateFunction.md#$async)
- [errors](verida_verifiable_credentials._internal_.AsyncValidateFunction.md#errors)
- [evaluated](verida_verifiable_credentials._internal_.AsyncValidateFunction.md#evaluated)
- [schema](verida_verifiable_credentials._internal_.AsyncValidateFunction.md#schema)
- [schemaEnv](verida_verifiable_credentials._internal_.AsyncValidateFunction.md#schemaenv)
- [source](verida_verifiable_credentials._internal_.AsyncValidateFunction.md#source)

## Properties

### $async

• **$async**: ``true``

#### Defined in

node_modules/ajv/dist/types/index.d.ts:70

___

### errors

• `Optional` **errors**: ``null`` \| [`ErrorObject`](verida_verifiable_credentials._internal_.ErrorObject.md)<`string`, [`Record`](../modules/verida_verifiable_credentials._internal_.md#record)<`string`, `any`\>, `unknown`\>[]

#### Inherited from

[ValidateFunction](verida_verifiable_credentials._internal_.ValidateFunction.md).[errors](verida_verifiable_credentials._internal_.ValidateFunction.md#errors)

#### Defined in

node_modules/ajv/dist/types/index.d.ts:47

___

### evaluated

• `Optional` **evaluated**: [`Evaluated`](verida_verifiable_credentials._internal_.Evaluated.md)

#### Inherited from

[ValidateFunction](verida_verifiable_credentials._internal_.ValidateFunction.md).[evaluated](verida_verifiable_credentials._internal_.ValidateFunction.md#evaluated)

#### Defined in

node_modules/ajv/dist/types/index.d.ts:48

___

### schema

• **schema**: [`AnySchema`](../modules/verida_verifiable_credentials._internal_.md#anyschema)

#### Inherited from

[ValidateFunction](verida_verifiable_credentials._internal_.ValidateFunction.md).[schema](verida_verifiable_credentials._internal_.ValidateFunction.md#schema)

#### Defined in

node_modules/ajv/dist/types/index.d.ts:49

___

### schemaEnv

• **schemaEnv**: [`SchemaEnv`](../classes/verida_verifiable_credentials._internal_.SchemaEnv.md)

#### Inherited from

[ValidateFunction](verida_verifiable_credentials._internal_.ValidateFunction.md).[schemaEnv](verida_verifiable_credentials._internal_.ValidateFunction.md#schemaenv)

#### Defined in

node_modules/ajv/dist/types/index.d.ts:50

___

### source

• `Optional` **source**: [`SourceCode`](verida_verifiable_credentials._internal_.SourceCode.md)

#### Inherited from

[ValidateFunction](verida_verifiable_credentials._internal_.ValidateFunction.md).[source](verida_verifiable_credentials._internal_.ValidateFunction.md#source)

#### Defined in

node_modules/ajv/dist/types/index.d.ts:51
