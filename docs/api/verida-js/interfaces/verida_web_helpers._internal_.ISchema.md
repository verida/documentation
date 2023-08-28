[root](../README.md) / [Modules](../modules.md) / [@verida/web-helpers](../modules/verida_web_helpers.md) / [<internal\>](../modules/verida_web_helpers._internal_.md) / ISchema

# Interface: ISchema

[@verida/web-helpers](../modules/verida_web_helpers.md).[<internal\>](../modules/verida_web_helpers._internal_.md).ISchema

## Implemented by

- [`Schema`](../classes/verida_web_helpers._internal_.Schema.md)

## Table of contents

### Properties

- [errors](verida_web_helpers._internal_.ISchema.md#errors)

### Methods

- [getAppearance](verida_web_helpers._internal_.ISchema.md#getappearance)
- [getSchemaJson](verida_web_helpers._internal_.ISchema.md#getschemajson)
- [getSpecification](verida_web_helpers._internal_.ISchema.md#getspecification)
- [validate](verida_web_helpers._internal_.ISchema.md#validate)

## Properties

### errors

• **errors**: `string`[]

#### Defined in

packages/types/dist/ISchema.d.ts:2

## Methods

### getAppearance

▸ **getAppearance**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

packages/types/dist/ISchema.d.ts:6

___

### getSchemaJson

▸ **getSchemaJson**(): `Promise`<`object`\>

#### Returns

`Promise`<`object`\>

#### Defined in

packages/types/dist/ISchema.d.ts:5

___

### getSpecification

▸ **getSpecification**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

packages/types/dist/ISchema.d.ts:3

___

### validate

▸ **validate**(`data`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

packages/types/dist/ISchema.d.ts:4
