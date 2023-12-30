[root](../README.md) / [Modules](../modules.md) / [@verida/client-ts](../modules/verida_client_ts.md) / [<internal\>](../modules/verida_client_ts._internal_.md) / AsyncValidateFunction

# Interface: AsyncValidateFunction<T\>

[@verida/client-ts](../modules/verida_client_ts.md).[<internal\>](../modules/verida_client_ts._internal_.md).AsyncValidateFunction

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`ValidateFunction`](verida_client_ts._internal_.ValidateFunction.md)<`T`\>

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

packages/client-ts/node_modules/ajv/dist/types/index.d.ts:70

### AsyncValidateFunction

▸ **AsyncValidateFunction**(`data`, `dataCxt?`): data is T

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |
| `dataCxt?` | [`DataValidationCxt`](verida_client_ts._internal_.DataValidationCxt.md)<`string` \| `number`\> |

#### Returns

data is T

#### Defined in

packages/client-ts/node_modules/ajv/dist/types/index.d.ts:47

## Table of contents

### Properties

- [$async](verida_client_ts._internal_.AsyncValidateFunction.md#$async)
- [errors](verida_client_ts._internal_.AsyncValidateFunction.md#errors)
- [evaluated](verida_client_ts._internal_.AsyncValidateFunction.md#evaluated)
- [schema](verida_client_ts._internal_.AsyncValidateFunction.md#schema)
- [schemaEnv](verida_client_ts._internal_.AsyncValidateFunction.md#schemaenv)
- [source](verida_client_ts._internal_.AsyncValidateFunction.md#source)

## Properties

### $async

• **$async**: ``true``

#### Defined in

packages/client-ts/node_modules/ajv/dist/types/index.d.ts:71

___

### errors

• `Optional` **errors**: ``null`` \| [`ErrorObject`](verida_client_ts._internal_.ErrorObject.md)<`string`, [`Record`](../modules/verida_client_ts._internal_.md#record)<`string`, `any`\>, `unknown`\>[]

#### Inherited from

[ValidateFunction](verida_client_ts._internal_.ValidateFunction.md).[errors](verida_client_ts._internal_.ValidateFunction.md#errors)

#### Defined in

packages/client-ts/node_modules/ajv/dist/types/index.d.ts:48

___

### evaluated

• `Optional` **evaluated**: [`Evaluated`](verida_client_ts._internal_.Evaluated.md)

#### Inherited from

[ValidateFunction](verida_client_ts._internal_.ValidateFunction.md).[evaluated](verida_client_ts._internal_.ValidateFunction.md#evaluated)

#### Defined in

packages/client-ts/node_modules/ajv/dist/types/index.d.ts:49

___

### schema

• **schema**: [`AnySchema`](../modules/verida_client_ts._internal_.md#anyschema)

#### Inherited from

[ValidateFunction](verida_client_ts._internal_.ValidateFunction.md).[schema](verida_client_ts._internal_.ValidateFunction.md#schema)

#### Defined in

packages/client-ts/node_modules/ajv/dist/types/index.d.ts:50

___

### schemaEnv

• **schemaEnv**: [`SchemaEnv`](../classes/verida_client_ts._internal_.SchemaEnv.md)

#### Inherited from

[ValidateFunction](verida_client_ts._internal_.ValidateFunction.md).[schemaEnv](verida_client_ts._internal_.ValidateFunction.md#schemaenv)

#### Defined in

packages/client-ts/node_modules/ajv/dist/types/index.d.ts:51

___

### source

• `Optional` **source**: [`SourceCode`](verida_client_ts._internal_.SourceCode.md)

#### Inherited from

[ValidateFunction](verida_client_ts._internal_.ValidateFunction.md).[source](verida_client_ts._internal_.ValidateFunction.md#source)

#### Defined in

packages/client-ts/node_modules/ajv/dist/types/index.d.ts:52
