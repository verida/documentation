[root](../README.md) / [Modules](../modules.md) / [@verida/client-ts](../modules/verida_client_ts.md) / [<internal\>](../modules/verida_client_ts._internal_.md) / FuncKeywordDefinition

# Interface: FuncKeywordDefinition

[@verida/client-ts](../modules/verida_client_ts.md).[<internal\>](../modules/verida_client_ts._internal_.md).FuncKeywordDefinition

## Hierarchy

- [`_KeywordDef`](verida_client_ts._internal_._KeywordDef.md)

  ↳ **`FuncKeywordDefinition`**

  ↳↳ [`MacroKeywordDefinition`](verida_client_ts._internal_.MacroKeywordDefinition.md)

## Table of contents

### Properties

- [$data](verida_client_ts._internal_.FuncKeywordDefinition.md#$data)
- [$dataError](verida_client_ts._internal_.FuncKeywordDefinition.md#$dataerror)
- [allowUndefined](verida_client_ts._internal_.FuncKeywordDefinition.md#allowundefined)
- [async](verida_client_ts._internal_.FuncKeywordDefinition.md#async)
- [before](verida_client_ts._internal_.FuncKeywordDefinition.md#before)
- [compile](verida_client_ts._internal_.FuncKeywordDefinition.md#compile)
- [dependencies](verida_client_ts._internal_.FuncKeywordDefinition.md#dependencies)
- [error](verida_client_ts._internal_.FuncKeywordDefinition.md#error)
- [errors](verida_client_ts._internal_.FuncKeywordDefinition.md#errors)
- [implements](verida_client_ts._internal_.FuncKeywordDefinition.md#implements)
- [keyword](verida_client_ts._internal_.FuncKeywordDefinition.md#keyword)
- [metaSchema](verida_client_ts._internal_.FuncKeywordDefinition.md#metaschema)
- [modifying](verida_client_ts._internal_.FuncKeywordDefinition.md#modifying)
- [post](verida_client_ts._internal_.FuncKeywordDefinition.md#post)
- [schema](verida_client_ts._internal_.FuncKeywordDefinition.md#schema)
- [schemaType](verida_client_ts._internal_.FuncKeywordDefinition.md#schematype)
- [type](verida_client_ts._internal_.FuncKeywordDefinition.md#type)
- [valid](verida_client_ts._internal_.FuncKeywordDefinition.md#valid)
- [validate](verida_client_ts._internal_.FuncKeywordDefinition.md#validate)
- [validateSchema](verida_client_ts._internal_.FuncKeywordDefinition.md#validateschema)

## Properties

### $data

• `Optional` **$data**: `boolean`

#### Inherited from

[_KeywordDef](verida_client_ts._internal_._KeywordDef.md).[$data](verida_client_ts._internal_._KeywordDef.md#$data)

#### Defined in

packages/client-ts/node_modules/ajv/dist/types/index.d.ts:91

___

### $dataError

• `Optional` **$dataError**: [`KeywordErrorDefinition`](verida_client_ts._internal_.KeywordErrorDefinition.md)

#### Inherited from

[_KeywordDef](verida_client_ts._internal_._KeywordDef.md).[$dataError](verida_client_ts._internal_._KeywordDef.md#$dataerror)

#### Defined in

packages/client-ts/node_modules/ajv/dist/types/index.d.ts:99

___

### allowUndefined

• `Optional` **allowUndefined**: `boolean`

#### Inherited from

[_KeywordDef](verida_client_ts._internal_._KeywordDef.md).[allowUndefined](verida_client_ts._internal_._KeywordDef.md#allowundefined)

#### Defined in

packages/client-ts/node_modules/ajv/dist/types/index.d.ts:90

___

### async

• `Optional` **async**: `boolean`

#### Defined in

packages/client-ts/node_modules/ajv/dist/types/index.d.ts:120

___

### before

• `Optional` **before**: `string`

#### Inherited from

[_KeywordDef](verida_client_ts._internal_._KeywordDef.md).[before](verida_client_ts._internal_._KeywordDef.md#before)

#### Defined in

packages/client-ts/node_modules/ajv/dist/types/index.d.ts:93

___

### compile

• `Optional` **compile**: [`CompileKeywordFunc`](../modules/verida_client_ts._internal_.md#compilekeywordfunc)

#### Defined in

packages/client-ts/node_modules/ajv/dist/types/index.d.ts:117

___

### dependencies

• `Optional` **dependencies**: `string`[]

#### Inherited from

[_KeywordDef](verida_client_ts._internal_._KeywordDef.md).[dependencies](verida_client_ts._internal_._KeywordDef.md#dependencies)

#### Defined in

packages/client-ts/node_modules/ajv/dist/types/index.d.ts:97

___

### error

• `Optional` **error**: [`KeywordErrorDefinition`](verida_client_ts._internal_.KeywordErrorDefinition.md)

#### Inherited from

[_KeywordDef](verida_client_ts._internal_._KeywordDef.md).[error](verida_client_ts._internal_._KeywordDef.md#error)

#### Defined in

packages/client-ts/node_modules/ajv/dist/types/index.d.ts:98

___

### errors

• `Optional` **errors**: `boolean` \| ``"full"``

#### Defined in

packages/client-ts/node_modules/ajv/dist/types/index.d.ts:122

___

### implements

• `Optional` **implements**: `string`[]

#### Inherited from

[_KeywordDef](verida_client_ts._internal_._KeywordDef.md).[implements](verida_client_ts._internal_._KeywordDef.md#implements)

#### Defined in

packages/client-ts/node_modules/ajv/dist/types/index.d.ts:92

___

### keyword

• **keyword**: `string` \| `string`[]

#### Inherited from

[_KeywordDef](verida_client_ts._internal_._KeywordDef.md).[keyword](verida_client_ts._internal_._KeywordDef.md#keyword)

#### Defined in

packages/client-ts/node_modules/ajv/dist/types/index.d.ts:87

___

### metaSchema

• `Optional` **metaSchema**: [`AnySchemaObject`](../modules/verida_client_ts._internal_.md#anyschemaobject)

#### Inherited from

[_KeywordDef](verida_client_ts._internal_._KeywordDef.md).[metaSchema](verida_client_ts._internal_._KeywordDef.md#metaschema)

#### Defined in

packages/client-ts/node_modules/ajv/dist/types/index.d.ts:95

___

### modifying

• `Optional` **modifying**: `boolean`

#### Defined in

packages/client-ts/node_modules/ajv/dist/types/index.d.ts:119

___

### post

• `Optional` **post**: `boolean`

#### Inherited from

[_KeywordDef](verida_client_ts._internal_._KeywordDef.md).[post](verida_client_ts._internal_._KeywordDef.md#post)

#### Defined in

packages/client-ts/node_modules/ajv/dist/types/index.d.ts:94

___

### schema

• `Optional` **schema**: `boolean`

#### Defined in

packages/client-ts/node_modules/ajv/dist/types/index.d.ts:118

___

### schemaType

• `Optional` **schemaType**: ``"string"`` \| ``"number"`` \| ``"boolean"`` \| ``"object"`` \| ``"integer"`` \| ``"array"`` \| ``"null"`` \| (``"string"`` \| ``"number"`` \| ``"boolean"`` \| ``"object"`` \| ``"integer"`` \| ``"array"`` \| ``"null"``)[]

#### Inherited from

[_KeywordDef](verida_client_ts._internal_._KeywordDef.md).[schemaType](verida_client_ts._internal_._KeywordDef.md#schematype)

#### Defined in

packages/client-ts/node_modules/ajv/dist/types/index.d.ts:89

___

### type

• `Optional` **type**: ``"string"`` \| ``"number"`` \| ``"boolean"`` \| ``"object"`` \| ``"integer"`` \| ``"array"`` \| ``"null"`` \| (``"string"`` \| ``"number"`` \| ``"boolean"`` \| ``"object"`` \| ``"integer"`` \| ``"array"`` \| ``"null"``)[]

#### Inherited from

[_KeywordDef](verida_client_ts._internal_._KeywordDef.md).[type](verida_client_ts._internal_._KeywordDef.md#type)

#### Defined in

packages/client-ts/node_modules/ajv/dist/types/index.d.ts:88

___

### valid

• `Optional` **valid**: `boolean`

#### Defined in

packages/client-ts/node_modules/ajv/dist/types/index.d.ts:121

___

### validate

• `Optional` **validate**: [`SchemaValidateFunction`](verida_client_ts._internal_.SchemaValidateFunction.md) \| [`DataValidateFunction`](verida_client_ts._internal_.DataValidateFunction.md)

#### Defined in

packages/client-ts/node_modules/ajv/dist/types/index.d.ts:116

___

### validateSchema

• `Optional` **validateSchema**: [`AnyValidateFunction`](../modules/verida_client_ts._internal_.md#anyvalidatefunction)<`any`\>

#### Inherited from

[_KeywordDef](verida_client_ts._internal_._KeywordDef.md).[validateSchema](verida_client_ts._internal_._KeywordDef.md#validateschema)

#### Defined in

packages/client-ts/node_modules/ajv/dist/types/index.d.ts:96
