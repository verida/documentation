[root](../README.md) / [Modules](../modules.md) / [@verida/web-helpers](../modules/verida_web_helpers.md) / [<internal\>](../modules/verida_web_helpers._internal_.md) / AsyncValidateFunction

# Interface: AsyncValidateFunction<T\>

[@verida/web-helpers](../modules/verida_web_helpers.md).[<internal\>](../modules/verida_web_helpers._internal_.md).AsyncValidateFunction

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`ValidateFunction`](verida_web_helpers._internal_.ValidateFunction.md)<`T`\>

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

packages/client-ts/node_modules/ajv/dist/types/index.d.ts:69

### AsyncValidateFunction

▸ **AsyncValidateFunction**(`data`, `dataCxt?`): data is T

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

- [$async](verida_web_helpers._internal_.AsyncValidateFunction.md#$async)
- [errors](verida_web_helpers._internal_.AsyncValidateFunction.md#errors)
- [evaluated](verida_web_helpers._internal_.AsyncValidateFunction.md#evaluated)
- [schema](verida_web_helpers._internal_.AsyncValidateFunction.md#schema)
- [schemaEnv](verida_web_helpers._internal_.AsyncValidateFunction.md#schemaenv)
- [source](verida_web_helpers._internal_.AsyncValidateFunction.md#source)

## Properties

### $async

• **$async**: ``true``

#### Defined in

packages/client-ts/node_modules/ajv/dist/types/index.d.ts:70

___

### errors

• `Optional` **errors**: ``null`` \| [`ErrorObject`](verida_web_helpers._internal_.ErrorObject.md)<`string`, [`Record`](../modules/verida_web_helpers._internal_.md#record)<`string`, `any`\>, `unknown`\>[]

#### Inherited from

[ValidateFunction](verida_web_helpers._internal_.ValidateFunction.md).[errors](verida_web_helpers._internal_.ValidateFunction.md#errors)

#### Defined in

packages/client-ts/node_modules/ajv/dist/types/index.d.ts:47

___

### evaluated

• `Optional` **evaluated**: [`Evaluated`](verida_web_helpers._internal_.Evaluated.md)

#### Inherited from

[ValidateFunction](verida_web_helpers._internal_.ValidateFunction.md).[evaluated](verida_web_helpers._internal_.ValidateFunction.md#evaluated)

#### Defined in

packages/client-ts/node_modules/ajv/dist/types/index.d.ts:48

___

### schema

• **schema**: [`AnySchema`](../modules/verida_web_helpers._internal_.md#anyschema)

#### Inherited from

[ValidateFunction](verida_web_helpers._internal_.ValidateFunction.md).[schema](verida_web_helpers._internal_.ValidateFunction.md#schema)

#### Defined in

packages/client-ts/node_modules/ajv/dist/types/index.d.ts:49

___

### schemaEnv

• **schemaEnv**: [`SchemaEnv`](../classes/verida_web_helpers._internal_.SchemaEnv.md)

#### Inherited from

[ValidateFunction](verida_web_helpers._internal_.ValidateFunction.md).[schemaEnv](verida_web_helpers._internal_.ValidateFunction.md#schemaenv)

#### Defined in

packages/client-ts/node_modules/ajv/dist/types/index.d.ts:50

___

### source

• `Optional` **source**: [`SourceCode`](verida_web_helpers._internal_.SourceCode.md)

#### Inherited from

[ValidateFunction](verida_web_helpers._internal_.ValidateFunction.md).[source](verida_web_helpers._internal_.ValidateFunction.md#source)

#### Defined in

packages/client-ts/node_modules/ajv/dist/types/index.d.ts:51
