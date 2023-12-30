[root](../README.md) / [Modules](../modules.md) / [@verida/web-helpers](../modules/verida_web_helpers.md) / [<internal\>](../modules/verida_web_helpers._internal_.md) / DataValidationCxt

# Interface: DataValidationCxt<T\>

[@verida/web-helpers](../modules/verida_web_helpers.md).[<internal\>](../modules/verida_web_helpers._internal_.md).DataValidationCxt

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` \| `number` = `string` \| `number` |

## Table of contents

### Properties

- [dynamicAnchors](verida_web_helpers._internal_.DataValidationCxt.md#dynamicanchors)
- [instancePath](verida_web_helpers._internal_.DataValidationCxt.md#instancepath)
- [parentData](verida_web_helpers._internal_.DataValidationCxt.md#parentdata)
- [parentDataProperty](verida_web_helpers._internal_.DataValidationCxt.md#parentdataproperty)
- [rootData](verida_web_helpers._internal_.DataValidationCxt.md#rootdata)

## Properties

### dynamicAnchors

• **dynamicAnchors**: `Object`

#### Defined in

packages/client-ts/node_modules/ajv/dist/types/index.d.ts:42

___

### instancePath

• **instancePath**: `string`

#### Defined in

packages/client-ts/node_modules/ajv/dist/types/index.d.ts:36

___

### parentData

• **parentData**: { [K in string \| number]: any }

#### Defined in

packages/client-ts/node_modules/ajv/dist/types/index.d.ts:37

___

### parentDataProperty

• **parentDataProperty**: `T`

#### Defined in

packages/client-ts/node_modules/ajv/dist/types/index.d.ts:40

___

### rootData

• **rootData**: `any`[] \| [`Record`](../modules/verida_web_helpers._internal_.md#record)<`string`, `any`\>

#### Defined in

packages/client-ts/node_modules/ajv/dist/types/index.d.ts:41
