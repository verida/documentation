[root](../README.md) / [Modules](../modules.md) / [@verida/verifiable-credentials](../modules/verida_verifiable_credentials.md) / [<internal\>](../modules/verida_verifiable_credentials._internal_.md) / AsyncFormatDefinition

# Interface: AsyncFormatDefinition<T\>

[@verida/verifiable-credentials](../modules/verida_verifiable_credentials.md).[<internal\>](../modules/verida_verifiable_credentials._internal_.md).AsyncFormatDefinition

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` \| `number` |

## Table of contents

### Properties

- [async](verida_verifiable_credentials._internal_.AsyncFormatDefinition.md#async)
- [compare](verida_verifiable_credentials._internal_.AsyncFormatDefinition.md#compare)
- [type](verida_verifiable_credentials._internal_.AsyncFormatDefinition.md#type)
- [validate](verida_verifiable_credentials._internal_.AsyncFormatDefinition.md#validate)

## Properties

### async

• **async**: ``true``

#### Defined in

node_modules/ajv/dist/types/index.d.ts:165

___

### compare

• `Optional` **compare**: [`FormatCompare`](../modules/verida_verifiable_credentials._internal_.md#formatcompare)<`T`\>

#### Defined in

node_modules/ajv/dist/types/index.d.ts:166

___

### type

• `Optional` **type**: `T` extends `string` ? `undefined` \| ``"string"`` : ``"number"``

#### Defined in

node_modules/ajv/dist/types/index.d.ts:163

___

### validate

• **validate**: [`AsyncFormatValidator`](../modules/verida_verifiable_credentials._internal_.md#asyncformatvalidator)<`T`\>

#### Defined in

node_modules/ajv/dist/types/index.d.ts:164
