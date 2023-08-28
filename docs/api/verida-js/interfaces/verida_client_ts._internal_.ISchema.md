[root](../README.md) / [Modules](../modules.md) / [@verida/client-ts](../modules/verida_client_ts.md) / [<internal\>](../modules/verida_client_ts._internal_.md) / ISchema

# Interface: ISchema

[@verida/client-ts](../modules/verida_client_ts.md).[<internal\>](../modules/verida_client_ts._internal_.md).ISchema

## Implemented by

- [`Schema`](../classes/verida_client_ts._internal_.Schema.md)

## Table of contents

### Properties

- [errors](verida_client_ts._internal_.ISchema.md#errors)

### Methods

- [getAppearance](verida_client_ts._internal_.ISchema.md#getappearance)
- [getSchemaJson](verida_client_ts._internal_.ISchema.md#getschemajson)
- [getSpecification](verida_client_ts._internal_.ISchema.md#getspecification)
- [validate](verida_client_ts._internal_.ISchema.md#validate)

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
