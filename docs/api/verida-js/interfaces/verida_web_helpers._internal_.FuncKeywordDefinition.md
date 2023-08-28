[root](../README.md) / [Modules](../modules.md) / [@verida/web-helpers](../modules/verida_web_helpers.md) / [<internal\>](../modules/verida_web_helpers._internal_.md) / FuncKeywordDefinition

# Interface: FuncKeywordDefinition

[@verida/web-helpers](../modules/verida_web_helpers.md).[<internal\>](../modules/verida_web_helpers._internal_.md).FuncKeywordDefinition

## Hierarchy

- [`_KeywordDef`](verida_web_helpers._internal_._KeywordDef.md)

  ↳ **`FuncKeywordDefinition`**

  ↳↳ [`MacroKeywordDefinition`](verida_web_helpers._internal_.MacroKeywordDefinition.md)

## Table of contents

### Properties

- [$data](verida_web_helpers._internal_.FuncKeywordDefinition.md#$data)
- [$dataError](verida_web_helpers._internal_.FuncKeywordDefinition.md#$dataerror)
- [allowUndefined](verida_web_helpers._internal_.FuncKeywordDefinition.md#allowundefined)
- [async](verida_web_helpers._internal_.FuncKeywordDefinition.md#async)
- [before](verida_web_helpers._internal_.FuncKeywordDefinition.md#before)
- [compile](verida_web_helpers._internal_.FuncKeywordDefinition.md#compile)
- [dependencies](verida_web_helpers._internal_.FuncKeywordDefinition.md#dependencies)
- [error](verida_web_helpers._internal_.FuncKeywordDefinition.md#error)
- [errors](verida_web_helpers._internal_.FuncKeywordDefinition.md#errors)
- [implements](verida_web_helpers._internal_.FuncKeywordDefinition.md#implements)
- [keyword](verida_web_helpers._internal_.FuncKeywordDefinition.md#keyword)
- [metaSchema](verida_web_helpers._internal_.FuncKeywordDefinition.md#metaschema)
- [modifying](verida_web_helpers._internal_.FuncKeywordDefinition.md#modifying)
- [post](verida_web_helpers._internal_.FuncKeywordDefinition.md#post)
- [schema](verida_web_helpers._internal_.FuncKeywordDefinition.md#schema)
- [schemaType](verida_web_helpers._internal_.FuncKeywordDefinition.md#schematype)
- [type](verida_web_helpers._internal_.FuncKeywordDefinition.md#type)
- [valid](verida_web_helpers._internal_.FuncKeywordDefinition.md#valid)
- [validate](verida_web_helpers._internal_.FuncKeywordDefinition.md#validate)
- [validateSchema](verida_web_helpers._internal_.FuncKeywordDefinition.md#validateschema)

## Properties

### $data

• `Optional` **$data**: `boolean`

#### Inherited from

[_KeywordDef](verida_web_helpers._internal_._KeywordDef.md).[$data](verida_web_helpers._internal_._KeywordDef.md#$data)

#### Defined in

packages/client-ts/node_modules/ajv/dist/types/index.d.ts:90

___

### $dataError

• `Optional` **$dataError**: [`KeywordErrorDefinition`](verida_web_helpers._internal_.KeywordErrorDefinition.md)

#### Inherited from

[_KeywordDef](verida_web_helpers._internal_._KeywordDef.md).[$dataError](verida_web_helpers._internal_._KeywordDef.md#$dataerror)

#### Defined in

packages/client-ts/node_modules/ajv/dist/types/index.d.ts:98

___

### allowUndefined

• `Optional` **allowUndefined**: `boolean`

#### Inherited from

[_KeywordDef](verida_web_helpers._internal_._KeywordDef.md).[allowUndefined](verida_web_helpers._internal_._KeywordDef.md#allowundefined)

#### Defined in

packages/client-ts/node_modules/ajv/dist/types/index.d.ts:89

___

### async

• `Optional` **async**: `boolean`

#### Defined in

packages/client-ts/node_modules/ajv/dist/types/index.d.ts:119

___

### before

• `Optional` **before**: `string`

#### Inherited from

[_KeywordDef](verida_web_helpers._internal_._KeywordDef.md).[before](verida_web_helpers._internal_._KeywordDef.md#before)

#### Defined in

packages/client-ts/node_modules/ajv/dist/types/index.d.ts:92

___

### compile

• `Optional` **compile**: [`CompileKeywordFunc`](../modules/verida_web_helpers._internal_.md#compilekeywordfunc)

#### Defined in

packages/client-ts/node_modules/ajv/dist/types/index.d.ts:116

___

### dependencies

• `Optional` **dependencies**: `string`[]

#### Inherited from

[_KeywordDef](verida_web_helpers._internal_._KeywordDef.md).[dependencies](verida_web_helpers._internal_._KeywordDef.md#dependencies)

#### Defined in

packages/client-ts/node_modules/ajv/dist/types/index.d.ts:96

___

### error

• `Optional` **error**: [`KeywordErrorDefinition`](verida_web_helpers._internal_.KeywordErrorDefinition.md)

#### Inherited from

[_KeywordDef](verida_web_helpers._internal_._KeywordDef.md).[error](verida_web_helpers._internal_._KeywordDef.md#error)

#### Defined in

packages/client-ts/node_modules/ajv/dist/types/index.d.ts:97

___

### errors

• `Optional` **errors**: `boolean` \| ``"full"``

#### Defined in

packages/client-ts/node_modules/ajv/dist/types/index.d.ts:121

___

### implements

• `Optional` **implements**: `string`[]

#### Inherited from

[_KeywordDef](verida_web_helpers._internal_._KeywordDef.md).[implements](verida_web_helpers._internal_._KeywordDef.md#implements)

#### Defined in

packages/client-ts/node_modules/ajv/dist/types/index.d.ts:91

___

### keyword

• **keyword**: `string` \| `string`[]

#### Inherited from

[_KeywordDef](verida_web_helpers._internal_._KeywordDef.md).[keyword](verida_web_helpers._internal_._KeywordDef.md#keyword)

#### Defined in

packages/client-ts/node_modules/ajv/dist/types/index.d.ts:86

___

### metaSchema

• `Optional` **metaSchema**: [`AnySchemaObject`](../modules/verida_web_helpers._internal_.md#anyschemaobject)

#### Inherited from

[_KeywordDef](verida_web_helpers._internal_._KeywordDef.md).[metaSchema](verida_web_helpers._internal_._KeywordDef.md#metaschema)

#### Defined in

packages/client-ts/node_modules/ajv/dist/types/index.d.ts:94

___

### modifying

• `Optional` **modifying**: `boolean`

#### Defined in

packages/client-ts/node_modules/ajv/dist/types/index.d.ts:118

___

### post

• `Optional` **post**: `boolean`

#### Inherited from

[_KeywordDef](verida_web_helpers._internal_._KeywordDef.md).[post](verida_web_helpers._internal_._KeywordDef.md#post)

#### Defined in

packages/client-ts/node_modules/ajv/dist/types/index.d.ts:93

___

### schema

• `Optional` **schema**: `boolean`

#### Defined in

packages/client-ts/node_modules/ajv/dist/types/index.d.ts:117

___

### schemaType

• `Optional` **schemaType**: ``"string"`` \| ``"number"`` \| ``"boolean"`` \| ``"object"`` \| ``"integer"`` \| ``"array"`` \| ``"null"`` \| (``"string"`` \| ``"number"`` \| ``"boolean"`` \| ``"object"`` \| ``"integer"`` \| ``"array"`` \| ``"null"``)[]

#### Inherited from

[_KeywordDef](verida_web_helpers._internal_._KeywordDef.md).[schemaType](verida_web_helpers._internal_._KeywordDef.md#schematype)

#### Defined in

packages/client-ts/node_modules/ajv/dist/types/index.d.ts:88

___

### type

• `Optional` **type**: ``"string"`` \| ``"number"`` \| ``"boolean"`` \| ``"object"`` \| ``"integer"`` \| ``"array"`` \| ``"null"`` \| (``"string"`` \| ``"number"`` \| ``"boolean"`` \| ``"object"`` \| ``"integer"`` \| ``"array"`` \| ``"null"``)[]

#### Inherited from

[_KeywordDef](verida_web_helpers._internal_._KeywordDef.md).[type](verida_web_helpers._internal_._KeywordDef.md#type)

#### Defined in

packages/client-ts/node_modules/ajv/dist/types/index.d.ts:87

___

### valid

• `Optional` **valid**: `boolean`

#### Defined in

packages/client-ts/node_modules/ajv/dist/types/index.d.ts:120

___

### validate

• `Optional` **validate**: [`SchemaValidateFunction`](verida_web_helpers._internal_.SchemaValidateFunction.md) \| [`DataValidateFunction`](verida_web_helpers._internal_.DataValidateFunction.md)

#### Defined in

packages/client-ts/node_modules/ajv/dist/types/index.d.ts:115

___

### validateSchema

• `Optional` **validateSchema**: [`AnyValidateFunction`](../modules/verida_web_helpers._internal_.md#anyvalidatefunction)<`any`\>

#### Inherited from

[_KeywordDef](verida_web_helpers._internal_._KeywordDef.md).[validateSchema](verida_web_helpers._internal_._KeywordDef.md#validateschema)

#### Defined in

packages/client-ts/node_modules/ajv/dist/types/index.d.ts:95
