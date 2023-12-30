[root](../README.md) / [Modules](../modules.md) / [@verida/client-ts](../modules/verida_client_ts.md) / [<internal\>](../modules/verida_client_ts._internal_.md) / AsyncFormatDefinition

# Interface: AsyncFormatDefinition<T\>

[@verida/client-ts](../modules/verida_client_ts.md).[<internal\>](../modules/verida_client_ts._internal_.md).AsyncFormatDefinition

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` \| `number` |

## Table of contents

### Properties

- [async](verida_client_ts._internal_.AsyncFormatDefinition.md#async)
- [compare](verida_client_ts._internal_.AsyncFormatDefinition.md#compare)
- [type](verida_client_ts._internal_.AsyncFormatDefinition.md#type)
- [validate](verida_client_ts._internal_.AsyncFormatDefinition.md#validate)

## Properties

### async

• **async**: ``true``

#### Defined in

packages/client-ts/node_modules/ajv/dist/types/index.d.ts:166

___

### compare

• `Optional` **compare**: [`FormatCompare`](../modules/verida_client_ts._internal_.md#formatcompare)<`T`\>

#### Defined in

packages/client-ts/node_modules/ajv/dist/types/index.d.ts:167

___

### type

• `Optional` **type**: `T` extends `string` ? `undefined` \| ``"string"`` : ``"number"``

#### Defined in

packages/client-ts/node_modules/ajv/dist/types/index.d.ts:164

___

### validate

• **validate**: [`AsyncFormatValidator`](../modules/verida_client_ts._internal_.md#asyncformatvalidator)<`T`\>

#### Defined in

packages/client-ts/node_modules/ajv/dist/types/index.d.ts:165
