[root](../README.md) / [Modules](../modules.md) / [@verida/web-helpers](../modules/verida_web_helpers.md) / [<internal\>](../modules/verida_web_helpers._internal_.md) / FormatDefinition

# Interface: FormatDefinition<T\>

[@verida/web-helpers](../modules/verida_web_helpers.md).[<internal\>](../modules/verida_web_helpers._internal_.md).FormatDefinition

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` \| `number` |

## Table of contents

### Properties

- [async](verida_web_helpers._internal_.FormatDefinition.md#async)
- [compare](verida_web_helpers._internal_.FormatDefinition.md#compare)
- [type](verida_web_helpers._internal_.FormatDefinition.md#type)
- [validate](verida_web_helpers._internal_.FormatDefinition.md#validate)

## Properties

### async

• `Optional` **async**: ``false``

#### Defined in

packages/client-ts/node_modules/ajv/dist/types/index.d.ts:159

___

### compare

• `Optional` **compare**: [`FormatCompare`](../modules/verida_web_helpers._internal_.md#formatcompare)<`T`\>

#### Defined in

packages/client-ts/node_modules/ajv/dist/types/index.d.ts:160

___

### type

• `Optional` **type**: `T` extends `string` ? `undefined` \| ``"string"`` : ``"number"``

#### Defined in

packages/client-ts/node_modules/ajv/dist/types/index.d.ts:157

___

### validate

• **validate**: [`FormatValidator`](../modules/verida_web_helpers._internal_.md#formatvalidator)<`T`\> \| `T` extends `string` ? `string` \| `RegExp` : `never`

#### Defined in

packages/client-ts/node_modules/ajv/dist/types/index.d.ts:158
