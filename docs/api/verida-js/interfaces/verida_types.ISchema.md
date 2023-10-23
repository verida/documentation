[root](../README.md) / [Modules](../modules.md) / [@verida/types](../modules/verida_types.md) / ISchema

# Interface: ISchema

[@verida/types](../modules/verida_types.md).ISchema

## Table of contents

### Properties

- [errors](verida_types.ISchema.md#errors)

### Methods

- [getAppearance](verida_types.ISchema.md#getappearance)
- [getSchemaJson](verida_types.ISchema.md#getschemajson)
- [getSpecification](verida_types.ISchema.md#getspecification)
- [validate](verida_types.ISchema.md#validate)

## Properties

### errors

• **errors**: `string`[]

#### Defined in

[packages/types/src/ISchema.ts:3](https://github.com/verida/verida-js/blob/032961c/packages/types/src/ISchema.ts#L3)

## Methods

### getAppearance

▸ **getAppearance**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

[packages/types/src/ISchema.ts:11](https://github.com/verida/verida-js/blob/032961c/packages/types/src/ISchema.ts#L11)

___

### getSchemaJson

▸ **getSchemaJson**(): `Promise`<`object`\>

#### Returns

`Promise`<`object`\>

#### Defined in

[packages/types/src/ISchema.ts:9](https://github.com/verida/verida-js/blob/032961c/packages/types/src/ISchema.ts#L9)

___

### getSpecification

▸ **getSpecification**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

[packages/types/src/ISchema.ts:5](https://github.com/verida/verida-js/blob/032961c/packages/types/src/ISchema.ts#L5)

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

[packages/types/src/ISchema.ts:7](https://github.com/verida/verida-js/blob/032961c/packages/types/src/ISchema.ts#L7)
