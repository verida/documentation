[root](../README.md) / [Modules](../modules.md) / [@verida/client-ts](../modules/verida_client_ts.md) / [<internal\>](../modules/verida_client_ts._internal_.md) / Ajv2020

# Class: Ajv2020

[@verida/client-ts](../modules/verida_client_ts.md).[<internal\>](../modules/verida_client_ts._internal_.md).Ajv2020

## Hierarchy

- [`default`](verida_client_ts._internal_.default-2.md)

  ↳ **`Ajv2020`**

## Table of contents

### Constructors

- [constructor](verida_client_ts._internal_.Ajv2020.md#constructor)

### Properties

- [RULES](verida_client_ts._internal_.Ajv2020.md#rules)
- [\_compilations](verida_client_ts._internal_.Ajv2020.md#_compilations)
- [errors](verida_client_ts._internal_.Ajv2020.md#errors)
- [formats](verida_client_ts._internal_.Ajv2020.md#formats)
- [logger](verida_client_ts._internal_.Ajv2020.md#logger)
- [opts](verida_client_ts._internal_.Ajv2020.md#opts)
- [refs](verida_client_ts._internal_.Ajv2020.md#refs)
- [schemas](verida_client_ts._internal_.Ajv2020.md#schemas)
- [scope](verida_client_ts._internal_.Ajv2020.md#scope)
- [MissingRefError](verida_client_ts._internal_.Ajv2020.md#missingreferror)
- [ValidationError](verida_client_ts._internal_.Ajv2020.md#validationerror)

### Methods

- [$dataMetaSchema](verida_client_ts._internal_.Ajv2020.md#$datametaschema)
- [\_addDefaultMetaSchema](verida_client_ts._internal_.Ajv2020.md#_adddefaultmetaschema)
- [\_addSchema](verida_client_ts._internal_.Ajv2020.md#_addschema)
- [\_addVocabularies](verida_client_ts._internal_.Ajv2020.md#_addvocabularies)
- [addFormat](verida_client_ts._internal_.Ajv2020.md#addformat)
- [addKeyword](verida_client_ts._internal_.Ajv2020.md#addkeyword)
- [addMetaSchema](verida_client_ts._internal_.Ajv2020.md#addmetaschema)
- [addSchema](verida_client_ts._internal_.Ajv2020.md#addschema)
- [addVocabulary](verida_client_ts._internal_.Ajv2020.md#addvocabulary)
- [compile](verida_client_ts._internal_.Ajv2020.md#compile)
- [compileAsync](verida_client_ts._internal_.Ajv2020.md#compileasync)
- [defaultMeta](verida_client_ts._internal_.Ajv2020.md#defaultmeta)
- [errorsText](verida_client_ts._internal_.Ajv2020.md#errorstext)
- [getKeyword](verida_client_ts._internal_.Ajv2020.md#getkeyword)
- [getSchema](verida_client_ts._internal_.Ajv2020.md#getschema)
- [removeKeyword](verida_client_ts._internal_.Ajv2020.md#removekeyword)
- [removeSchema](verida_client_ts._internal_.Ajv2020.md#removeschema)
- [validate](verida_client_ts._internal_.Ajv2020.md#validate)
- [validateSchema](verida_client_ts._internal_.Ajv2020.md#validateschema)

## Constructors

### constructor

• **new Ajv2020**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`Options`](../modules/verida_client_ts._internal_.md#options) |

#### Overrides

[default](verida_client_ts._internal_.default-2.md).[constructor](verida_client_ts._internal_.default-2.md#constructor)

#### Defined in

node_modules/ajv/dist/2020.d.ts:4

## Properties

### RULES

• `Readonly` **RULES**: [`ValidationRules`](../interfaces/verida_client_ts._internal_.ValidationRules.md)

#### Inherited from

[default](verida_client_ts._internal_.default-2.md).[RULES](verida_client_ts._internal_.default-2.md#rules)

#### Defined in

node_modules/ajv/dist/core.d.ts:116

___

### \_compilations

• `Readonly` **\_compilations**: `Set`<[`SchemaEnv`](verida_client_ts._internal_.SchemaEnv.md)\>

#### Inherited from

[default](verida_client_ts._internal_.default-2.md).[_compilations](verida_client_ts._internal_.default-2.md#_compilations)

#### Defined in

node_modules/ajv/dist/core.d.ts:117

___

### errors

• `Optional` **errors**: ``null`` \| [`ErrorObject`](../interfaces/verida_client_ts._internal_.ErrorObject.md)<`string`, [`Record`](../modules/verida_client_ts._internal_.md#record)<`string`, `any`\>, `unknown`\>[]

#### Inherited from

[default](verida_client_ts._internal_.default-2.md).[errors](verida_client_ts._internal_.default-2.md#errors)

#### Defined in

node_modules/ajv/dist/core.d.ts:104

___

### formats

• `Readonly` **formats**: `Object`

#### Inherited from

[default](verida_client_ts._internal_.default-2.md).[formats](verida_client_ts._internal_.default-2.md#formats)

#### Defined in

node_modules/ajv/dist/core.d.ts:113

___

### logger

• **logger**: [`Logger`](../interfaces/verida_client_ts._internal_.Logger.md)

#### Inherited from

[default](verida_client_ts._internal_.default-2.md).[logger](verida_client_ts._internal_.default-2.md#logger)

#### Defined in

node_modules/ajv/dist/core.d.ts:105

___

### opts

• **opts**: [`InstanceOptions`](../modules/verida_client_ts._internal_.md#instanceoptions)

#### Inherited from

[default](verida_client_ts._internal_.default-2.md).[opts](verida_client_ts._internal_.default-2.md#opts)

#### Defined in

node_modules/ajv/dist/core.d.ts:103

___

### refs

• `Readonly` **refs**: `Object`

#### Inherited from

[default](verida_client_ts._internal_.default-2.md).[refs](verida_client_ts._internal_.default-2.md#refs)

#### Defined in

node_modules/ajv/dist/core.d.ts:110

___

### schemas

• `Readonly` **schemas**: `Object`

#### Inherited from

[default](verida_client_ts._internal_.default-2.md).[schemas](verida_client_ts._internal_.default-2.md#schemas)

#### Defined in

node_modules/ajv/dist/core.d.ts:107

___

### scope

• `Readonly` **scope**: [`ValueScope`](verida_client_ts._internal_.ValueScope.md)

#### Inherited from

[default](verida_client_ts._internal_.default-2.md).[scope](verida_client_ts._internal_.default-2.md#scope)

#### Defined in

node_modules/ajv/dist/core.d.ts:106

___

### MissingRefError

▪ `Static` **MissingRefError**: typeof [`default`](verida_client_ts._internal_.default-4.md)

#### Inherited from

[default](verida_client_ts._internal_.default-2.md).[MissingRefError](verida_client_ts._internal_.default-2.md#missingreferror)

#### Defined in

node_modules/ajv/dist/core.d.ts:122

___

### ValidationError

▪ `Static` **ValidationError**: typeof [`default`](verida_client_ts._internal_.default-3.md)

#### Inherited from

[default](verida_client_ts._internal_.default-2.md).[ValidationError](verida_client_ts._internal_.default-2.md#validationerror)

#### Defined in

node_modules/ajv/dist/core.d.ts:121

## Methods

### $dataMetaSchema

▸ **$dataMetaSchema**(`metaSchema`, `keywordsJsonPointers`): [`AnySchemaObject`](../modules/verida_client_ts._internal_.md#anyschemaobject)

#### Parameters

| Name | Type |
| :------ | :------ |
| `metaSchema` | [`AnySchemaObject`](../modules/verida_client_ts._internal_.md#anyschemaobject) |
| `keywordsJsonPointers` | `string`[] |

#### Returns

[`AnySchemaObject`](../modules/verida_client_ts._internal_.md#anyschemaobject)

#### Inherited from

[default](verida_client_ts._internal_.default-2.md).[$dataMetaSchema](verida_client_ts._internal_.default-2.md#$datametaschema)

#### Defined in

node_modules/ajv/dist/core.d.ts:159

___

### \_addDefaultMetaSchema

▸ **_addDefaultMetaSchema**(): `void`

#### Returns

`void`

#### Overrides

[default](verida_client_ts._internal_.default-2.md).[_addDefaultMetaSchema](verida_client_ts._internal_.default-2.md#_adddefaultmetaschema)

#### Defined in

node_modules/ajv/dist/2020.d.ts:6

___

### \_addSchema

▸ **_addSchema**(`schema`, `meta?`, `baseId?`, `validateSchema?`, `addSchema?`): [`SchemaEnv`](verida_client_ts._internal_.SchemaEnv.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | [`AnySchema`](../modules/verida_client_ts._internal_.md#anyschema) |
| `meta?` | `boolean` |
| `baseId?` | `string` |
| `validateSchema?` | `boolean` \| ``"log"`` |
| `addSchema?` | `boolean` |

#### Returns

[`SchemaEnv`](verida_client_ts._internal_.SchemaEnv.md)

#### Inherited from

[default](verida_client_ts._internal_.default-2.md).[_addSchema](verida_client_ts._internal_.default-2.md#_addschema)

#### Defined in

node_modules/ajv/dist/core.d.ts:161

___

### \_addVocabularies

▸ **_addVocabularies**(): `void`

#### Returns

`void`

#### Overrides

[default](verida_client_ts._internal_.default-2.md).[_addVocabularies](verida_client_ts._internal_.default-2.md#_addvocabularies)

#### Defined in

node_modules/ajv/dist/2020.d.ts:5

___

### addFormat

▸ **addFormat**(`name`, `format`): [`default`](verida_client_ts._internal_.default-2.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `format` | [`Format`](../modules/verida_client_ts._internal_.md#format) |

#### Returns

[`default`](verida_client_ts._internal_.default-2.md)

#### Inherited from

[default](verida_client_ts._internal_.default-2.md).[addFormat](verida_client_ts._internal_.default-2.md#addformat)

#### Defined in

node_modules/ajv/dist/core.d.ts:156

___

### addKeyword

▸ **addKeyword**(`kwdOrDef`, `def?`): [`default`](verida_client_ts._internal_.default-2.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `kwdOrDef` | `string` \| [`KeywordDefinition`](../modules/verida_client_ts._internal_.md#keyworddefinition) |
| `def?` | [`KeywordDefinition`](../modules/verida_client_ts._internal_.md#keyworddefinition) |

#### Returns

[`default`](verida_client_ts._internal_.default-2.md)

#### Inherited from

[default](verida_client_ts._internal_.default-2.md).[addKeyword](verida_client_ts._internal_.default-2.md#addkeyword)

#### Defined in

node_modules/ajv/dist/core.d.ts:153

___

### addMetaSchema

▸ **addMetaSchema**(`schema`, `key?`, `_validateSchema?`): [`default`](verida_client_ts._internal_.default-2.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | [`AnySchemaObject`](../modules/verida_client_ts._internal_.md#anyschemaobject) |
| `key?` | `string` |
| `_validateSchema?` | `boolean` \| ``"log"`` |

#### Returns

[`default`](verida_client_ts._internal_.default-2.md)

#### Inherited from

[default](verida_client_ts._internal_.default-2.md).[addMetaSchema](verida_client_ts._internal_.default-2.md#addmetaschema)

#### Defined in

node_modules/ajv/dist/core.d.ts:147

___

### addSchema

▸ **addSchema**(`schema`, `key?`, `_meta?`, `_validateSchema?`): [`default`](verida_client_ts._internal_.default-2.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | [`AnySchema`](../modules/verida_client_ts._internal_.md#anyschema) \| [`AnySchema`](../modules/verida_client_ts._internal_.md#anyschema)[] |
| `key?` | `string` |
| `_meta?` | `boolean` |
| `_validateSchema?` | `boolean` \| ``"log"`` |

#### Returns

[`default`](verida_client_ts._internal_.default-2.md)

#### Inherited from

[default](verida_client_ts._internal_.default-2.md).[addSchema](verida_client_ts._internal_.default-2.md#addschema)

#### Defined in

node_modules/ajv/dist/core.d.ts:143

___

### addVocabulary

▸ **addVocabulary**(`definitions`): [`default`](verida_client_ts._internal_.default-2.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `definitions` | [`Vocabulary`](../modules/verida_client_ts._internal_.md#vocabulary) |

#### Returns

[`default`](verida_client_ts._internal_.default-2.md)

#### Inherited from

[default](verida_client_ts._internal_.default-2.md).[addVocabulary](verida_client_ts._internal_.default-2.md#addvocabulary)

#### Defined in

node_modules/ajv/dist/core.d.ts:152

___

### compile

▸ **compile**<`T`\>(`schema`, `_meta?`): [`ValidateFunction`](../interfaces/verida_client_ts._internal_.ValidateFunction.md)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | [`Schema`](../modules/verida_client_ts._internal_.md#schema) \| [`UncheckedJSONSchemaType`](../modules/verida_client_ts._internal_.md#uncheckedjsonschematype)<`T`, ``false``\> |
| `_meta?` | `boolean` |

#### Returns

[`ValidateFunction`](../interfaces/verida_client_ts._internal_.ValidateFunction.md)<`T`\>

#### Inherited from

[default](verida_client_ts._internal_.default-2.md).[compile](verida_client_ts._internal_.default-2.md#compile)

#### Defined in

node_modules/ajv/dist/core.d.ts:134

▸ **compile**<`T`\>(`schema`, `_meta?`): [`ValidateFunction`](../interfaces/verida_client_ts._internal_.ValidateFunction.md)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | [`JTDSchemaType`](../modules/verida_client_ts._internal_.md#jtdschematype)<`T`, [`Record`](../modules/verida_client_ts._internal_.md#record)<`string`, `never`\>\> |
| `_meta?` | `boolean` |

#### Returns

[`ValidateFunction`](../interfaces/verida_client_ts._internal_.ValidateFunction.md)<`T`\>

#### Inherited from

[default](verida_client_ts._internal_.default-2.md).[compile](verida_client_ts._internal_.default-2.md#compile)

#### Defined in

node_modules/ajv/dist/core.d.ts:135

▸ **compile**<`N`, `T`\>(`schema`, `_meta?`): [`ValidateFunction`](../interfaces/verida_client_ts._internal_.ValidateFunction.md)<[`JTDDataType`](../modules/verida_client_ts._internal_.md#jtddatatype)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `N` | extends `never` |
| `T` | extends [`SomeJTDSchemaType`](../modules/verida_client_ts._internal_.md#somejtdschematype) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | `T` |
| `_meta?` | `boolean` |

#### Returns

[`ValidateFunction`](../interfaces/verida_client_ts._internal_.ValidateFunction.md)<[`JTDDataType`](../modules/verida_client_ts._internal_.md#jtddatatype)<`T`\>\>

#### Inherited from

[default](verida_client_ts._internal_.default-2.md).[compile](verida_client_ts._internal_.default-2.md#compile)

#### Defined in

node_modules/ajv/dist/core.d.ts:136

▸ **compile**<`T`\>(`schema`, `_meta?`): [`AsyncValidateFunction`](../interfaces/verida_client_ts._internal_.AsyncValidateFunction.md)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | [`AsyncSchema`](../interfaces/verida_client_ts._internal_.AsyncSchema.md) |
| `_meta?` | `boolean` |

#### Returns

[`AsyncValidateFunction`](../interfaces/verida_client_ts._internal_.AsyncValidateFunction.md)<`T`\>

#### Inherited from

[default](verida_client_ts._internal_.default-2.md).[compile](verida_client_ts._internal_.default-2.md#compile)

#### Defined in

node_modules/ajv/dist/core.d.ts:137

▸ **compile**<`T`\>(`schema`, `_meta?`): [`AnyValidateFunction`](../modules/verida_client_ts._internal_.md#anyvalidatefunction)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | [`AnySchema`](../modules/verida_client_ts._internal_.md#anyschema) |
| `_meta?` | `boolean` |

#### Returns

[`AnyValidateFunction`](../modules/verida_client_ts._internal_.md#anyvalidatefunction)<`T`\>

#### Inherited from

[default](verida_client_ts._internal_.default-2.md).[compile](verida_client_ts._internal_.default-2.md#compile)

#### Defined in

node_modules/ajv/dist/core.d.ts:138

___

### compileAsync

▸ **compileAsync**<`T`\>(`schema`, `_meta?`): `Promise`<[`ValidateFunction`](../interfaces/verida_client_ts._internal_.ValidateFunction.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | [`SchemaObject`](../interfaces/verida_client_ts._internal_.SchemaObject.md) \| [`UncheckedJSONSchemaType`](../modules/verida_client_ts._internal_.md#uncheckedjsonschematype)<`T`, ``false``\> |
| `_meta?` | `boolean` |

#### Returns

`Promise`<[`ValidateFunction`](../interfaces/verida_client_ts._internal_.ValidateFunction.md)<`T`\>\>

#### Inherited from

[default](verida_client_ts._internal_.default-2.md).[compileAsync](verida_client_ts._internal_.default-2.md#compileasync)

#### Defined in

node_modules/ajv/dist/core.d.ts:139

▸ **compileAsync**<`T`\>(`schema`, `_meta?`): `Promise`<[`ValidateFunction`](../interfaces/verida_client_ts._internal_.ValidateFunction.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | [`JTDSchemaType`](../modules/verida_client_ts._internal_.md#jtdschematype)<`T`, [`Record`](../modules/verida_client_ts._internal_.md#record)<`string`, `never`\>\> |
| `_meta?` | `boolean` |

#### Returns

`Promise`<[`ValidateFunction`](../interfaces/verida_client_ts._internal_.ValidateFunction.md)<`T`\>\>

#### Inherited from

[default](verida_client_ts._internal_.default-2.md).[compileAsync](verida_client_ts._internal_.default-2.md#compileasync)

#### Defined in

node_modules/ajv/dist/core.d.ts:140

▸ **compileAsync**<`T`\>(`schema`, `meta?`): `Promise`<[`AsyncValidateFunction`](../interfaces/verida_client_ts._internal_.AsyncValidateFunction.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | [`AsyncSchema`](../interfaces/verida_client_ts._internal_.AsyncSchema.md) |
| `meta?` | `boolean` |

#### Returns

`Promise`<[`AsyncValidateFunction`](../interfaces/verida_client_ts._internal_.AsyncValidateFunction.md)<`T`\>\>

#### Inherited from

[default](verida_client_ts._internal_.default-2.md).[compileAsync](verida_client_ts._internal_.default-2.md#compileasync)

#### Defined in

node_modules/ajv/dist/core.d.ts:141

▸ **compileAsync**<`T`\>(`schema`, `meta?`): `Promise`<[`AnyValidateFunction`](../modules/verida_client_ts._internal_.md#anyvalidatefunction)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | [`AnySchemaObject`](../modules/verida_client_ts._internal_.md#anyschemaobject) |
| `meta?` | `boolean` |

#### Returns

`Promise`<[`AnyValidateFunction`](../modules/verida_client_ts._internal_.md#anyvalidatefunction)<`T`\>\>

#### Inherited from

[default](verida_client_ts._internal_.default-2.md).[compileAsync](verida_client_ts._internal_.default-2.md#compileasync)

#### Defined in

node_modules/ajv/dist/core.d.ts:142

___

### defaultMeta

▸ **defaultMeta**(): `undefined` \| `string` \| [`AnySchemaObject`](../modules/verida_client_ts._internal_.md#anyschemaobject)

#### Returns

`undefined` \| `string` \| [`AnySchemaObject`](../modules/verida_client_ts._internal_.md#anyschemaobject)

#### Overrides

[default](verida_client_ts._internal_.default-2.md).[defaultMeta](verida_client_ts._internal_.default-2.md#defaultmeta)

#### Defined in

node_modules/ajv/dist/2020.d.ts:7

___

### errorsText

▸ **errorsText**(`errors?`, `__namedParameters?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `errors?` | ``null`` \| [`ErrorObject`](../interfaces/verida_client_ts._internal_.ErrorObject.md)<`string`, [`Record`](../modules/verida_client_ts._internal_.md#record)<`string`, `any`\>, `unknown`\>[] |
| `__namedParameters?` | [`ErrorsTextOptions`](../interfaces/verida_client_ts._internal_.ErrorsTextOptions.md) |

#### Returns

`string`

#### Inherited from

[default](verida_client_ts._internal_.default-2.md).[errorsText](verida_client_ts._internal_.default-2.md#errorstext)

#### Defined in

node_modules/ajv/dist/core.d.ts:157

___

### getKeyword

▸ **getKeyword**(`keyword`): `boolean` \| [`AddedKeywordDefinition`](../modules/verida_client_ts._internal_.md#addedkeyworddefinition)

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyword` | `string` |

#### Returns

`boolean` \| [`AddedKeywordDefinition`](../modules/verida_client_ts._internal_.md#addedkeyworddefinition)

#### Inherited from

[default](verida_client_ts._internal_.default-2.md).[getKeyword](verida_client_ts._internal_.default-2.md#getkeyword)

#### Defined in

node_modules/ajv/dist/core.d.ts:154

___

### getSchema

▸ **getSchema**<`T`\>(`keyRef`): `undefined` \| [`AnyValidateFunction`](../modules/verida_client_ts._internal_.md#anyvalidatefunction)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyRef` | `string` |

#### Returns

`undefined` \| [`AnyValidateFunction`](../modules/verida_client_ts._internal_.md#anyvalidatefunction)<`T`\>

#### Inherited from

[default](verida_client_ts._internal_.default-2.md).[getSchema](verida_client_ts._internal_.default-2.md#getschema)

#### Defined in

node_modules/ajv/dist/core.d.ts:150

___

### removeKeyword

▸ **removeKeyword**(`keyword`): [`default`](verida_client_ts._internal_.default-2.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyword` | `string` |

#### Returns

[`default`](verida_client_ts._internal_.default-2.md)

#### Inherited from

[default](verida_client_ts._internal_.default-2.md).[removeKeyword](verida_client_ts._internal_.default-2.md#removekeyword)

#### Defined in

node_modules/ajv/dist/core.d.ts:155

___

### removeSchema

▸ **removeSchema**(`schemaKeyRef?`): [`default`](verida_client_ts._internal_.default-2.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `schemaKeyRef?` | `string` \| `RegExp` \| [`AnySchema`](../modules/verida_client_ts._internal_.md#anyschema) |

#### Returns

[`default`](verida_client_ts._internal_.default-2.md)

#### Inherited from

[default](verida_client_ts._internal_.default-2.md).[removeSchema](verida_client_ts._internal_.default-2.md#removeschema)

#### Defined in

node_modules/ajv/dist/core.d.ts:151

___

### validate

▸ **validate**(`schema`, `data`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | `string` \| [`Schema`](../modules/verida_client_ts._internal_.md#schema) |
| `data` | `unknown` |

#### Returns

`boolean`

#### Inherited from

[default](verida_client_ts._internal_.default-2.md).[validate](verida_client_ts._internal_.default-2.md#validate)

#### Defined in

node_modules/ajv/dist/core.d.ts:127

▸ **validate**(`schemaKeyRef`, `data`): `boolean` \| `Promise`<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `schemaKeyRef` | `string` \| [`AnySchema`](../modules/verida_client_ts._internal_.md#anyschema) |
| `data` | `unknown` |

#### Returns

`boolean` \| `Promise`<`unknown`\>

#### Inherited from

[default](verida_client_ts._internal_.default-2.md).[validate](verida_client_ts._internal_.default-2.md#validate)

#### Defined in

node_modules/ajv/dist/core.d.ts:128

▸ **validate**<`T`\>(`schema`, `data`): data is T

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | `string` \| [`Schema`](../modules/verida_client_ts._internal_.md#schema) \| [`UncheckedJSONSchemaType`](../modules/verida_client_ts._internal_.md#uncheckedjsonschematype)<`T`, ``false``\> |
| `data` | `unknown` |

#### Returns

data is T

#### Inherited from

[default](verida_client_ts._internal_.default-2.md).[validate](verida_client_ts._internal_.default-2.md#validate)

#### Defined in

node_modules/ajv/dist/core.d.ts:129

▸ **validate**<`T`\>(`schema`, `data`): data is T

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | [`JTDSchemaType`](../modules/verida_client_ts._internal_.md#jtdschematype)<`T`, [`Record`](../modules/verida_client_ts._internal_.md#record)<`string`, `never`\>\> |
| `data` | `unknown` |

#### Returns

data is T

#### Inherited from

[default](verida_client_ts._internal_.default-2.md).[validate](verida_client_ts._internal_.default-2.md#validate)

#### Defined in

node_modules/ajv/dist/core.d.ts:130

▸ **validate**<`N`, `T`\>(`schema`, `data`): data is JTDDataType<T\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `N` | extends `never` |
| `T` | extends [`SomeJTDSchemaType`](../modules/verida_client_ts._internal_.md#somejtdschematype) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | `T` |
| `data` | `unknown` |

#### Returns

data is JTDDataType<T\>

#### Inherited from

[default](verida_client_ts._internal_.default-2.md).[validate](verida_client_ts._internal_.default-2.md#validate)

#### Defined in

node_modules/ajv/dist/core.d.ts:131

▸ **validate**<`T`\>(`schema`, `data`): `Promise`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | [`AsyncSchema`](../interfaces/verida_client_ts._internal_.AsyncSchema.md) |
| `data` | `unknown` |

#### Returns

`Promise`<`T`\>

#### Inherited from

[default](verida_client_ts._internal_.default-2.md).[validate](verida_client_ts._internal_.default-2.md#validate)

#### Defined in

node_modules/ajv/dist/core.d.ts:132

▸ **validate**<`T`\>(`schemaKeyRef`, `data`): data is T \| Promise<T\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schemaKeyRef` | `string` \| [`AnySchema`](../modules/verida_client_ts._internal_.md#anyschema) |
| `data` | `unknown` |

#### Returns

data is T \| Promise<T\>

#### Inherited from

[default](verida_client_ts._internal_.default-2.md).[validate](verida_client_ts._internal_.default-2.md#validate)

#### Defined in

node_modules/ajv/dist/core.d.ts:133

___

### validateSchema

▸ **validateSchema**(`schema`, `throwOrLogError?`): `boolean` \| `Promise`<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | [`AnySchema`](../modules/verida_client_ts._internal_.md#anyschema) |
| `throwOrLogError?` | `boolean` |

#### Returns

`boolean` \| `Promise`<`unknown`\>

#### Inherited from

[default](verida_client_ts._internal_.default-2.md).[validateSchema](verida_client_ts._internal_.default-2.md#validateschema)

#### Defined in

node_modules/ajv/dist/core.d.ts:149
