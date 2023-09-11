[root](../README.md) / [Modules](../modules.md) / [@verida/web-helpers](../modules/verida_web_helpers.md) / [<internal\>](../modules/verida_web_helpers._internal_.md) / MacroKeywordDefinition

# Interface: MacroKeywordDefinition

[@verida/web-helpers](../modules/verida_web_helpers.md).[<internal\>](../modules/verida_web_helpers._internal_.md).MacroKeywordDefinition

## Hierarchy

- [`FuncKeywordDefinition`](verida_web_helpers._internal_.FuncKeywordDefinition.md)

  ↳ **`MacroKeywordDefinition`**

## Table of contents

### Properties

- [$data](verida_web_helpers._internal_.MacroKeywordDefinition.md#$data)
- [$dataError](verida_web_helpers._internal_.MacroKeywordDefinition.md#$dataerror)
- [allowUndefined](verida_web_helpers._internal_.MacroKeywordDefinition.md#allowundefined)
- [async](verida_web_helpers._internal_.MacroKeywordDefinition.md#async)
- [before](verida_web_helpers._internal_.MacroKeywordDefinition.md#before)
- [compile](verida_web_helpers._internal_.MacroKeywordDefinition.md#compile)
- [dependencies](verida_web_helpers._internal_.MacroKeywordDefinition.md#dependencies)
- [error](verida_web_helpers._internal_.MacroKeywordDefinition.md#error)
- [errors](verida_web_helpers._internal_.MacroKeywordDefinition.md#errors)
- [implements](verida_web_helpers._internal_.MacroKeywordDefinition.md#implements)
- [keyword](verida_web_helpers._internal_.MacroKeywordDefinition.md#keyword)
- [macro](verida_web_helpers._internal_.MacroKeywordDefinition.md#macro)
- [metaSchema](verida_web_helpers._internal_.MacroKeywordDefinition.md#metaschema)
- [modifying](verida_web_helpers._internal_.MacroKeywordDefinition.md#modifying)
- [post](verida_web_helpers._internal_.MacroKeywordDefinition.md#post)
- [schema](verida_web_helpers._internal_.MacroKeywordDefinition.md#schema)
- [schemaType](verida_web_helpers._internal_.MacroKeywordDefinition.md#schematype)
- [type](verida_web_helpers._internal_.MacroKeywordDefinition.md#type)
- [valid](verida_web_helpers._internal_.MacroKeywordDefinition.md#valid)
- [validate](verida_web_helpers._internal_.MacroKeywordDefinition.md#validate)
- [validateSchema](verida_web_helpers._internal_.MacroKeywordDefinition.md#validateschema)

## Properties

### $data

• `Optional` **$data**: `boolean`

#### Inherited from

[FuncKeywordDefinition](verida_web_helpers._internal_.FuncKeywordDefinition.md).[$data](verida_web_helpers._internal_.FuncKeywordDefinition.md#$data)

#### Defined in

packages/client-ts/node_modules/ajv/dist/types/index.d.ts:90

___

### $dataError

• `Optional` **$dataError**: [`KeywordErrorDefinition`](verida_web_helpers._internal_.KeywordErrorDefinition.md)

#### Inherited from

[FuncKeywordDefinition](verida_web_helpers._internal_.FuncKeywordDefinition.md).[$dataError](verida_web_helpers._internal_.FuncKeywordDefinition.md#$dataerror)

#### Defined in

packages/client-ts/node_modules/ajv/dist/types/index.d.ts:98

___

### allowUndefined

• `Optional` **allowUndefined**: `boolean`

#### Inherited from

[FuncKeywordDefinition](verida_web_helpers._internal_.FuncKeywordDefinition.md).[allowUndefined](verida_web_helpers._internal_.FuncKeywordDefinition.md#allowundefined)

#### Defined in

packages/client-ts/node_modules/ajv/dist/types/index.d.ts:89

___

### async

• `Optional` **async**: `boolean`

#### Inherited from

[FuncKeywordDefinition](verida_web_helpers._internal_.FuncKeywordDefinition.md).[async](verida_web_helpers._internal_.FuncKeywordDefinition.md#async)

#### Defined in

packages/client-ts/node_modules/ajv/dist/types/index.d.ts:119

___

### before

• `Optional` **before**: `string`

#### Inherited from

[FuncKeywordDefinition](verida_web_helpers._internal_.FuncKeywordDefinition.md).[before](verida_web_helpers._internal_.FuncKeywordDefinition.md#before)

#### Defined in

packages/client-ts/node_modules/ajv/dist/types/index.d.ts:92

___

### compile

• `Optional` **compile**: [`CompileKeywordFunc`](../modules/verida_web_helpers._internal_.md#compilekeywordfunc)

#### Inherited from

[FuncKeywordDefinition](verida_web_helpers._internal_.FuncKeywordDefinition.md).[compile](verida_web_helpers._internal_.FuncKeywordDefinition.md#compile)

#### Defined in

packages/client-ts/node_modules/ajv/dist/types/index.d.ts:116

___

### dependencies

• `Optional` **dependencies**: `string`[]

#### Inherited from

[FuncKeywordDefinition](verida_web_helpers._internal_.FuncKeywordDefinition.md).[dependencies](verida_web_helpers._internal_.FuncKeywordDefinition.md#dependencies)

#### Defined in

packages/client-ts/node_modules/ajv/dist/types/index.d.ts:96

___

### error

• `Optional` **error**: [`KeywordErrorDefinition`](verida_web_helpers._internal_.KeywordErrorDefinition.md)

#### Inherited from

[FuncKeywordDefinition](verida_web_helpers._internal_.FuncKeywordDefinition.md).[error](verida_web_helpers._internal_.FuncKeywordDefinition.md#error)

#### Defined in

packages/client-ts/node_modules/ajv/dist/types/index.d.ts:97

___

### errors

• `Optional` **errors**: `boolean` \| ``"full"``

#### Inherited from

[FuncKeywordDefinition](verida_web_helpers._internal_.FuncKeywordDefinition.md).[errors](verida_web_helpers._internal_.FuncKeywordDefinition.md#errors)

#### Defined in

packages/client-ts/node_modules/ajv/dist/types/index.d.ts:121

___

### implements

• `Optional` **implements**: `string`[]

#### Inherited from

[FuncKeywordDefinition](verida_web_helpers._internal_.FuncKeywordDefinition.md).[implements](verida_web_helpers._internal_.FuncKeywordDefinition.md#implements)

#### Defined in

packages/client-ts/node_modules/ajv/dist/types/index.d.ts:91

___

### keyword

• **keyword**: `string` \| `string`[]

#### Inherited from

[FuncKeywordDefinition](verida_web_helpers._internal_.FuncKeywordDefinition.md).[keyword](verida_web_helpers._internal_.FuncKeywordDefinition.md#keyword)

#### Defined in

packages/client-ts/node_modules/ajv/dist/types/index.d.ts:86

___

### macro

• **macro**: [`MacroKeywordFunc`](../modules/verida_web_helpers._internal_.md#macrokeywordfunc)

#### Defined in

packages/client-ts/node_modules/ajv/dist/types/index.d.ts:124

___

### metaSchema

• `Optional` **metaSchema**: [`AnySchemaObject`](../modules/verida_web_helpers._internal_.md#anyschemaobject)

#### Inherited from

[FuncKeywordDefinition](verida_web_helpers._internal_.FuncKeywordDefinition.md).[metaSchema](verida_web_helpers._internal_.FuncKeywordDefinition.md#metaschema)

#### Defined in

packages/client-ts/node_modules/ajv/dist/types/index.d.ts:94

___

### modifying

• `Optional` **modifying**: `boolean`

#### Inherited from

[FuncKeywordDefinition](verida_web_helpers._internal_.FuncKeywordDefinition.md).[modifying](verida_web_helpers._internal_.FuncKeywordDefinition.md#modifying)

#### Defined in

packages/client-ts/node_modules/ajv/dist/types/index.d.ts:118

___

### post

• `Optional` **post**: `boolean`

#### Inherited from

[FuncKeywordDefinition](verida_web_helpers._internal_.FuncKeywordDefinition.md).[post](verida_web_helpers._internal_.FuncKeywordDefinition.md#post)

#### Defined in

packages/client-ts/node_modules/ajv/dist/types/index.d.ts:93

___

### schema

• `Optional` **schema**: `boolean`

#### Inherited from

[FuncKeywordDefinition](verida_web_helpers._internal_.FuncKeywordDefinition.md).[schema](verida_web_helpers._internal_.FuncKeywordDefinition.md#schema)

#### Defined in

packages/client-ts/node_modules/ajv/dist/types/index.d.ts:117

___

### schemaType

• `Optional` **schemaType**: ``"string"`` \| ``"number"`` \| ``"boolean"`` \| ``"object"`` \| ``"integer"`` \| ``"array"`` \| ``"null"`` \| (``"string"`` \| ``"number"`` \| ``"boolean"`` \| ``"object"`` \| ``"integer"`` \| ``"array"`` \| ``"null"``)[]

#### Inherited from

[FuncKeywordDefinition](verida_web_helpers._internal_.FuncKeywordDefinition.md).[schemaType](verida_web_helpers._internal_.FuncKeywordDefinition.md#schematype)

#### Defined in

packages/client-ts/node_modules/ajv/dist/types/index.d.ts:88

___

### type

• `Optional` **type**: ``"string"`` \| ``"number"`` \| ``"boolean"`` \| ``"object"`` \| ``"integer"`` \| ``"array"`` \| ``"null"`` \| (``"string"`` \| ``"number"`` \| ``"boolean"`` \| ``"object"`` \| ``"integer"`` \| ``"array"`` \| ``"null"``)[]

#### Inherited from

[FuncKeywordDefinition](verida_web_helpers._internal_.FuncKeywordDefinition.md).[type](verida_web_helpers._internal_.FuncKeywordDefinition.md#type)

#### Defined in

packages/client-ts/node_modules/ajv/dist/types/index.d.ts:87

___

### valid

• `Optional` **valid**: `boolean`

#### Inherited from

[FuncKeywordDefinition](verida_web_helpers._internal_.FuncKeywordDefinition.md).[valid](verida_web_helpers._internal_.FuncKeywordDefinition.md#valid)

#### Defined in

packages/client-ts/node_modules/ajv/dist/types/index.d.ts:120

___

### validate

• `Optional` **validate**: [`SchemaValidateFunction`](verida_web_helpers._internal_.SchemaValidateFunction.md) \| [`DataValidateFunction`](verida_web_helpers._internal_.DataValidateFunction.md)

#### Inherited from

[FuncKeywordDefinition](verida_web_helpers._internal_.FuncKeywordDefinition.md).[validate](verida_web_helpers._internal_.FuncKeywordDefinition.md#validate)

#### Defined in

packages/client-ts/node_modules/ajv/dist/types/index.d.ts:115

___

### validateSchema

• `Optional` **validateSchema**: [`AnyValidateFunction`](../modules/verida_web_helpers._internal_.md#anyvalidatefunction)<`any`\>

#### Inherited from

[FuncKeywordDefinition](verida_web_helpers._internal_.FuncKeywordDefinition.md).[validateSchema](verida_web_helpers._internal_.FuncKeywordDefinition.md#validateschema)

#### Defined in

packages/client-ts/node_modules/ajv/dist/types/index.d.ts:95