[root](../README.md) / [Modules](../modules.md) / [@verida/client-ts](../modules/verida_client_ts.md) / [<internal\>](../modules/verida_client_ts._internal_.md) / MacroKeywordDefinition

# Interface: MacroKeywordDefinition

[@verida/client-ts](../modules/verida_client_ts.md).[<internal\>](../modules/verida_client_ts._internal_.md).MacroKeywordDefinition

## Hierarchy

- [`FuncKeywordDefinition`](verida_client_ts._internal_.FuncKeywordDefinition.md)

  ↳ **`MacroKeywordDefinition`**

## Table of contents

### Properties

- [$data](verida_client_ts._internal_.MacroKeywordDefinition.md#$data)
- [$dataError](verida_client_ts._internal_.MacroKeywordDefinition.md#$dataerror)
- [allowUndefined](verida_client_ts._internal_.MacroKeywordDefinition.md#allowundefined)
- [async](verida_client_ts._internal_.MacroKeywordDefinition.md#async)
- [before](verida_client_ts._internal_.MacroKeywordDefinition.md#before)
- [compile](verida_client_ts._internal_.MacroKeywordDefinition.md#compile)
- [dependencies](verida_client_ts._internal_.MacroKeywordDefinition.md#dependencies)
- [error](verida_client_ts._internal_.MacroKeywordDefinition.md#error)
- [errors](verida_client_ts._internal_.MacroKeywordDefinition.md#errors)
- [implements](verida_client_ts._internal_.MacroKeywordDefinition.md#implements)
- [keyword](verida_client_ts._internal_.MacroKeywordDefinition.md#keyword)
- [macro](verida_client_ts._internal_.MacroKeywordDefinition.md#macro)
- [metaSchema](verida_client_ts._internal_.MacroKeywordDefinition.md#metaschema)
- [modifying](verida_client_ts._internal_.MacroKeywordDefinition.md#modifying)
- [post](verida_client_ts._internal_.MacroKeywordDefinition.md#post)
- [schema](verida_client_ts._internal_.MacroKeywordDefinition.md#schema)
- [schemaType](verida_client_ts._internal_.MacroKeywordDefinition.md#schematype)
- [type](verida_client_ts._internal_.MacroKeywordDefinition.md#type)
- [valid](verida_client_ts._internal_.MacroKeywordDefinition.md#valid)
- [validate](verida_client_ts._internal_.MacroKeywordDefinition.md#validate)
- [validateSchema](verida_client_ts._internal_.MacroKeywordDefinition.md#validateschema)

## Properties

### $data

• `Optional` **$data**: `boolean`

#### Inherited from

[FuncKeywordDefinition](verida_client_ts._internal_.FuncKeywordDefinition.md).[$data](verida_client_ts._internal_.FuncKeywordDefinition.md#$data)

#### Defined in

node_modules/ajv/dist/types/index.d.ts:90

___

### $dataError

• `Optional` **$dataError**: [`KeywordErrorDefinition`](verida_client_ts._internal_.KeywordErrorDefinition.md)

#### Inherited from

[FuncKeywordDefinition](verida_client_ts._internal_.FuncKeywordDefinition.md).[$dataError](verida_client_ts._internal_.FuncKeywordDefinition.md#$dataerror)

#### Defined in

node_modules/ajv/dist/types/index.d.ts:98

___

### allowUndefined

• `Optional` **allowUndefined**: `boolean`

#### Inherited from

[FuncKeywordDefinition](verida_client_ts._internal_.FuncKeywordDefinition.md).[allowUndefined](verida_client_ts._internal_.FuncKeywordDefinition.md#allowundefined)

#### Defined in

node_modules/ajv/dist/types/index.d.ts:89

___

### async

• `Optional` **async**: `boolean`

#### Inherited from

[FuncKeywordDefinition](verida_client_ts._internal_.FuncKeywordDefinition.md).[async](verida_client_ts._internal_.FuncKeywordDefinition.md#async)

#### Defined in

node_modules/ajv/dist/types/index.d.ts:119

___

### before

• `Optional` **before**: `string`

#### Inherited from

[FuncKeywordDefinition](verida_client_ts._internal_.FuncKeywordDefinition.md).[before](verida_client_ts._internal_.FuncKeywordDefinition.md#before)

#### Defined in

node_modules/ajv/dist/types/index.d.ts:92

___

### compile

• `Optional` **compile**: [`CompileKeywordFunc`](../modules/verida_client_ts._internal_.md#compilekeywordfunc)

#### Inherited from

[FuncKeywordDefinition](verida_client_ts._internal_.FuncKeywordDefinition.md).[compile](verida_client_ts._internal_.FuncKeywordDefinition.md#compile)

#### Defined in

node_modules/ajv/dist/types/index.d.ts:116

___

### dependencies

• `Optional` **dependencies**: `string`[]

#### Inherited from

[FuncKeywordDefinition](verida_client_ts._internal_.FuncKeywordDefinition.md).[dependencies](verida_client_ts._internal_.FuncKeywordDefinition.md#dependencies)

#### Defined in

node_modules/ajv/dist/types/index.d.ts:96

___

### error

• `Optional` **error**: [`KeywordErrorDefinition`](verida_client_ts._internal_.KeywordErrorDefinition.md)

#### Inherited from

[FuncKeywordDefinition](verida_client_ts._internal_.FuncKeywordDefinition.md).[error](verida_client_ts._internal_.FuncKeywordDefinition.md#error)

#### Defined in

node_modules/ajv/dist/types/index.d.ts:97

___

### errors

• `Optional` **errors**: `boolean` \| ``"full"``

#### Inherited from

[FuncKeywordDefinition](verida_client_ts._internal_.FuncKeywordDefinition.md).[errors](verida_client_ts._internal_.FuncKeywordDefinition.md#errors)

#### Defined in

node_modules/ajv/dist/types/index.d.ts:121

___

### implements

• `Optional` **implements**: `string`[]

#### Inherited from

[FuncKeywordDefinition](verida_client_ts._internal_.FuncKeywordDefinition.md).[implements](verida_client_ts._internal_.FuncKeywordDefinition.md#implements)

#### Defined in

node_modules/ajv/dist/types/index.d.ts:91

___

### keyword

• **keyword**: `string` \| `string`[]

#### Inherited from

[FuncKeywordDefinition](verida_client_ts._internal_.FuncKeywordDefinition.md).[keyword](verida_client_ts._internal_.FuncKeywordDefinition.md#keyword)

#### Defined in

node_modules/ajv/dist/types/index.d.ts:86

___

### macro

• **macro**: [`MacroKeywordFunc`](../modules/verida_client_ts._internal_.md#macrokeywordfunc)

#### Defined in

node_modules/ajv/dist/types/index.d.ts:124

___

### metaSchema

• `Optional` **metaSchema**: [`AnySchemaObject`](../modules/verida_client_ts._internal_.md#anyschemaobject)

#### Inherited from

[FuncKeywordDefinition](verida_client_ts._internal_.FuncKeywordDefinition.md).[metaSchema](verida_client_ts._internal_.FuncKeywordDefinition.md#metaschema)

#### Defined in

node_modules/ajv/dist/types/index.d.ts:94

___

### modifying

• `Optional` **modifying**: `boolean`

#### Inherited from

[FuncKeywordDefinition](verida_client_ts._internal_.FuncKeywordDefinition.md).[modifying](verida_client_ts._internal_.FuncKeywordDefinition.md#modifying)

#### Defined in

node_modules/ajv/dist/types/index.d.ts:118

___

### post

• `Optional` **post**: `boolean`

#### Inherited from

[FuncKeywordDefinition](verida_client_ts._internal_.FuncKeywordDefinition.md).[post](verida_client_ts._internal_.FuncKeywordDefinition.md#post)

#### Defined in

node_modules/ajv/dist/types/index.d.ts:93

___

### schema

• `Optional` **schema**: `boolean`

#### Inherited from

[FuncKeywordDefinition](verida_client_ts._internal_.FuncKeywordDefinition.md).[schema](verida_client_ts._internal_.FuncKeywordDefinition.md#schema)

#### Defined in

node_modules/ajv/dist/types/index.d.ts:117

___

### schemaType

• `Optional` **schemaType**: ``"string"`` \| ``"number"`` \| ``"boolean"`` \| ``"object"`` \| ``"integer"`` \| ``"array"`` \| ``"null"`` \| (``"string"`` \| ``"number"`` \| ``"boolean"`` \| ``"object"`` \| ``"integer"`` \| ``"array"`` \| ``"null"``)[]

#### Inherited from

[FuncKeywordDefinition](verida_client_ts._internal_.FuncKeywordDefinition.md).[schemaType](verida_client_ts._internal_.FuncKeywordDefinition.md#schematype)

#### Defined in

node_modules/ajv/dist/types/index.d.ts:88

___

### type

• `Optional` **type**: ``"string"`` \| ``"number"`` \| ``"boolean"`` \| ``"object"`` \| ``"integer"`` \| ``"array"`` \| ``"null"`` \| (``"string"`` \| ``"number"`` \| ``"boolean"`` \| ``"object"`` \| ``"integer"`` \| ``"array"`` \| ``"null"``)[]

#### Inherited from

[FuncKeywordDefinition](verida_client_ts._internal_.FuncKeywordDefinition.md).[type](verida_client_ts._internal_.FuncKeywordDefinition.md#type)

#### Defined in

node_modules/ajv/dist/types/index.d.ts:87

___

### valid

• `Optional` **valid**: `boolean`

#### Inherited from

[FuncKeywordDefinition](verida_client_ts._internal_.FuncKeywordDefinition.md).[valid](verida_client_ts._internal_.FuncKeywordDefinition.md#valid)

#### Defined in

node_modules/ajv/dist/types/index.d.ts:120

___

### validate

• `Optional` **validate**: [`SchemaValidateFunction`](verida_client_ts._internal_.SchemaValidateFunction.md) \| [`DataValidateFunction`](verida_client_ts._internal_.DataValidateFunction.md)

#### Inherited from

[FuncKeywordDefinition](verida_client_ts._internal_.FuncKeywordDefinition.md).[validate](verida_client_ts._internal_.FuncKeywordDefinition.md#validate)

#### Defined in

node_modules/ajv/dist/types/index.d.ts:115

___

### validateSchema

• `Optional` **validateSchema**: [`AnyValidateFunction`](../modules/verida_client_ts._internal_.md#anyvalidatefunction)<`any`\>

#### Inherited from

[FuncKeywordDefinition](verida_client_ts._internal_.FuncKeywordDefinition.md).[validateSchema](verida_client_ts._internal_.FuncKeywordDefinition.md#validateschema)

#### Defined in

node_modules/ajv/dist/types/index.d.ts:95
