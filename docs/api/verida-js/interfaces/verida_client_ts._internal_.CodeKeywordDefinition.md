[root](../README.md) / [Modules](../modules.md) / [@verida/client-ts](../modules/verida_client_ts.md) / [<internal\>](../modules/verida_client_ts._internal_.md) / CodeKeywordDefinition

# Interface: CodeKeywordDefinition

[@verida/client-ts](../modules/verida_client_ts.md).[<internal\>](../modules/verida_client_ts._internal_.md).CodeKeywordDefinition

## Hierarchy

- [`_KeywordDef`](verida_client_ts._internal_._KeywordDef.md)

  ↳ **`CodeKeywordDefinition`**

## Table of contents

### Properties

- [$data](verida_client_ts._internal_.CodeKeywordDefinition.md#$data)
- [$dataError](verida_client_ts._internal_.CodeKeywordDefinition.md#$dataerror)
- [allowUndefined](verida_client_ts._internal_.CodeKeywordDefinition.md#allowundefined)
- [before](verida_client_ts._internal_.CodeKeywordDefinition.md#before)
- [dependencies](verida_client_ts._internal_.CodeKeywordDefinition.md#dependencies)
- [error](verida_client_ts._internal_.CodeKeywordDefinition.md#error)
- [implements](verida_client_ts._internal_.CodeKeywordDefinition.md#implements)
- [keyword](verida_client_ts._internal_.CodeKeywordDefinition.md#keyword)
- [metaSchema](verida_client_ts._internal_.CodeKeywordDefinition.md#metaschema)
- [post](verida_client_ts._internal_.CodeKeywordDefinition.md#post)
- [schemaType](verida_client_ts._internal_.CodeKeywordDefinition.md#schematype)
- [trackErrors](verida_client_ts._internal_.CodeKeywordDefinition.md#trackerrors)
- [type](verida_client_ts._internal_.CodeKeywordDefinition.md#type)
- [validateSchema](verida_client_ts._internal_.CodeKeywordDefinition.md#validateschema)

### Methods

- [code](verida_client_ts._internal_.CodeKeywordDefinition.md#code)

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

### before

• `Optional` **before**: `string`

#### Inherited from

[_KeywordDef](verida_client_ts._internal_._KeywordDef.md).[before](verida_client_ts._internal_._KeywordDef.md#before)

#### Defined in

packages/client-ts/node_modules/ajv/dist/types/index.d.ts:93

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

### post

• `Optional` **post**: `boolean`

#### Inherited from

[_KeywordDef](verida_client_ts._internal_._KeywordDef.md).[post](verida_client_ts._internal_._KeywordDef.md#post)

#### Defined in

packages/client-ts/node_modules/ajv/dist/types/index.d.ts:94

___

### schemaType

• `Optional` **schemaType**: ``"string"`` \| ``"number"`` \| ``"boolean"`` \| ``"object"`` \| ``"integer"`` \| ``"array"`` \| ``"null"`` \| (``"string"`` \| ``"number"`` \| ``"boolean"`` \| ``"object"`` \| ``"integer"`` \| ``"array"`` \| ``"null"``)[]

#### Inherited from

[_KeywordDef](verida_client_ts._internal_._KeywordDef.md).[schemaType](verida_client_ts._internal_._KeywordDef.md#schematype)

#### Defined in

packages/client-ts/node_modules/ajv/dist/types/index.d.ts:89

___

### trackErrors

• `Optional` **trackErrors**: `boolean`

#### Defined in

packages/client-ts/node_modules/ajv/dist/types/index.d.ts:103

___

### type

• `Optional` **type**: ``"string"`` \| ``"number"`` \| ``"boolean"`` \| ``"object"`` \| ``"integer"`` \| ``"array"`` \| ``"null"`` \| (``"string"`` \| ``"number"`` \| ``"boolean"`` \| ``"object"`` \| ``"integer"`` \| ``"array"`` \| ``"null"``)[]

#### Inherited from

[_KeywordDef](verida_client_ts._internal_._KeywordDef.md).[type](verida_client_ts._internal_._KeywordDef.md#type)

#### Defined in

packages/client-ts/node_modules/ajv/dist/types/index.d.ts:88

___

### validateSchema

• `Optional` **validateSchema**: [`AnyValidateFunction`](../modules/verida_client_ts._internal_.md#anyvalidatefunction)<`any`\>

#### Inherited from

[_KeywordDef](verida_client_ts._internal_._KeywordDef.md).[validateSchema](verida_client_ts._internal_._KeywordDef.md#validateschema)

#### Defined in

packages/client-ts/node_modules/ajv/dist/types/index.d.ts:96

## Methods

### code

▸ **code**(`cxt`, `ruleType?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cxt` | [`KeywordCxt`](../classes/verida_client_ts._internal_.KeywordCxt.md) |
| `ruleType?` | `string` |

#### Returns

`void`

#### Defined in

packages/client-ts/node_modules/ajv/dist/types/index.d.ts:102
