[root](../README.md) / [Modules](../modules.md) / [@verida/web-helpers](../modules/verida_web_helpers.md) / [<internal\>](../modules/verida_web_helpers._internal_.md) / Ajv2020

# Class: Ajv2020

[@verida/web-helpers](../modules/verida_web_helpers.md).[<internal\>](../modules/verida_web_helpers._internal_.md).Ajv2020

## Hierarchy

- [`default`](verida_web_helpers._internal_.default-3.md)

  ↳ **`Ajv2020`**

## Table of contents

### Constructors

- [constructor](verida_web_helpers._internal_.Ajv2020.md#constructor)

### Properties

- [RULES](verida_web_helpers._internal_.Ajv2020.md#rules)
- [\_compilations](verida_web_helpers._internal_.Ajv2020.md#_compilations)
- [errors](verida_web_helpers._internal_.Ajv2020.md#errors)
- [formats](verida_web_helpers._internal_.Ajv2020.md#formats)
- [logger](verida_web_helpers._internal_.Ajv2020.md#logger)
- [opts](verida_web_helpers._internal_.Ajv2020.md#opts)
- [refs](verida_web_helpers._internal_.Ajv2020.md#refs)
- [schemas](verida_web_helpers._internal_.Ajv2020.md#schemas)
- [scope](verida_web_helpers._internal_.Ajv2020.md#scope)
- [MissingRefError](verida_web_helpers._internal_.Ajv2020.md#missingreferror)
- [ValidationError](verida_web_helpers._internal_.Ajv2020.md#validationerror)

### Methods

- [$dataMetaSchema](verida_web_helpers._internal_.Ajv2020.md#$datametaschema)
- [\_addDefaultMetaSchema](verida_web_helpers._internal_.Ajv2020.md#_adddefaultmetaschema)
- [\_addSchema](verida_web_helpers._internal_.Ajv2020.md#_addschema)
- [\_addVocabularies](verida_web_helpers._internal_.Ajv2020.md#_addvocabularies)
- [addFormat](verida_web_helpers._internal_.Ajv2020.md#addformat)
- [addKeyword](verida_web_helpers._internal_.Ajv2020.md#addkeyword)
- [addMetaSchema](verida_web_helpers._internal_.Ajv2020.md#addmetaschema)
- [addSchema](verida_web_helpers._internal_.Ajv2020.md#addschema)
- [addVocabulary](verida_web_helpers._internal_.Ajv2020.md#addvocabulary)
- [compile](verida_web_helpers._internal_.Ajv2020.md#compile)
- [compileAsync](verida_web_helpers._internal_.Ajv2020.md#compileasync)
- [defaultMeta](verida_web_helpers._internal_.Ajv2020.md#defaultmeta)
- [errorsText](verida_web_helpers._internal_.Ajv2020.md#errorstext)
- [getKeyword](verida_web_helpers._internal_.Ajv2020.md#getkeyword)
- [getSchema](verida_web_helpers._internal_.Ajv2020.md#getschema)
- [removeKeyword](verida_web_helpers._internal_.Ajv2020.md#removekeyword)
- [removeSchema](verida_web_helpers._internal_.Ajv2020.md#removeschema)
- [validate](verida_web_helpers._internal_.Ajv2020.md#validate)
- [validateSchema](verida_web_helpers._internal_.Ajv2020.md#validateschema)

## Constructors

### constructor

• **new Ajv2020**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`Options`](../modules/verida_web_helpers._internal_.md#options) |

#### Overrides

[default](verida_web_helpers._internal_.default-3.md).[constructor](verida_web_helpers._internal_.default-3.md#constructor)

#### Defined in

packages/client-ts/node_modules/ajv/dist/2020.d.ts:4

## Properties

### RULES

• `Readonly` **RULES**: [`ValidationRules`](../interfaces/verida_web_helpers._internal_.ValidationRules.md)

#### Inherited from

[default](verida_web_helpers._internal_.default-3.md).[RULES](verida_web_helpers._internal_.default-3.md#rules)

#### Defined in

packages/client-ts/node_modules/ajv/dist/core.d.ts:120

___

### \_compilations

• `Readonly` **\_compilations**: `Set`<[`SchemaEnv`](verida_web_helpers._internal_.SchemaEnv.md)\>

#### Inherited from

[default](verida_web_helpers._internal_.default-3.md).[_compilations](verida_web_helpers._internal_.default-3.md#_compilations)

#### Defined in

packages/client-ts/node_modules/ajv/dist/core.d.ts:121

___

### errors

• `Optional` **errors**: ``null`` \| [`ErrorObject`](../interfaces/verida_web_helpers._internal_.ErrorObject.md)<`string`, [`Record`](../modules/verida_web_helpers._internal_.md#record)<`string`, `any`\>, `unknown`\>[]

#### Inherited from

[default](verida_web_helpers._internal_.default-3.md).[errors](verida_web_helpers._internal_.default-3.md#errors)

#### Defined in

packages/client-ts/node_modules/ajv/dist/core.d.ts:108

___

### formats

• `Readonly` **formats**: `Object`

#### Inherited from

[default](verida_web_helpers._internal_.default-3.md).[formats](verida_web_helpers._internal_.default-3.md#formats)

#### Defined in

packages/client-ts/node_modules/ajv/dist/core.d.ts:117

___

### logger

• **logger**: [`Logger`](../interfaces/verida_web_helpers._internal_.Logger.md)

#### Inherited from

[default](verida_web_helpers._internal_.default-3.md).[logger](verida_web_helpers._internal_.default-3.md#logger)

#### Defined in

packages/client-ts/node_modules/ajv/dist/core.d.ts:109

___

### opts

• **opts**: [`InstanceOptions`](../modules/verida_web_helpers._internal_.md#instanceoptions)

#### Inherited from

[default](verida_web_helpers._internal_.default-3.md).[opts](verida_web_helpers._internal_.default-3.md#opts)

#### Defined in

packages/client-ts/node_modules/ajv/dist/core.d.ts:107

___

### refs

• `Readonly` **refs**: `Object`

#### Inherited from

[default](verida_web_helpers._internal_.default-3.md).[refs](verida_web_helpers._internal_.default-3.md#refs)

#### Defined in

packages/client-ts/node_modules/ajv/dist/core.d.ts:114

___

### schemas

• `Readonly` **schemas**: `Object`

#### Inherited from

[default](verida_web_helpers._internal_.default-3.md).[schemas](verida_web_helpers._internal_.default-3.md#schemas)

#### Defined in

packages/client-ts/node_modules/ajv/dist/core.d.ts:111

___

### scope

• `Readonly` **scope**: [`ValueScope`](verida_web_helpers._internal_.ValueScope.md)

#### Inherited from

[default](verida_web_helpers._internal_.default-3.md).[scope](verida_web_helpers._internal_.default-3.md#scope)

#### Defined in

packages/client-ts/node_modules/ajv/dist/core.d.ts:110

___

### MissingRefError

▪ `Static` **MissingRefError**: typeof [`default`](verida_web_helpers._internal_.default-5.md)

#### Inherited from

[default](verida_web_helpers._internal_.default-3.md).[MissingRefError](verida_web_helpers._internal_.default-3.md#missingreferror)

#### Defined in

packages/client-ts/node_modules/ajv/dist/core.d.ts:126

___

### ValidationError

▪ `Static` **ValidationError**: typeof [`default`](verida_web_helpers._internal_.default-4.md)

#### Inherited from

[default](verida_web_helpers._internal_.default-3.md).[ValidationError](verida_web_helpers._internal_.default-3.md#validationerror)

#### Defined in

packages/client-ts/node_modules/ajv/dist/core.d.ts:125

## Methods

### $dataMetaSchema

▸ **$dataMetaSchema**(`metaSchema`, `keywordsJsonPointers`): [`AnySchemaObject`](../modules/verida_web_helpers._internal_.md#anyschemaobject)

#### Parameters

| Name | Type |
| :------ | :------ |
| `metaSchema` | [`AnySchemaObject`](../modules/verida_web_helpers._internal_.md#anyschemaobject) |
| `keywordsJsonPointers` | `string`[] |

#### Returns

[`AnySchemaObject`](../modules/verida_web_helpers._internal_.md#anyschemaobject)

#### Inherited from

[default](verida_web_helpers._internal_.default-3.md).[$dataMetaSchema](verida_web_helpers._internal_.default-3.md#$datametaschema)

#### Defined in

packages/client-ts/node_modules/ajv/dist/core.d.ts:163

___

### \_addDefaultMetaSchema

▸ **_addDefaultMetaSchema**(): `void`

#### Returns

`void`

#### Overrides

[default](verida_web_helpers._internal_.default-3.md).[_addDefaultMetaSchema](verida_web_helpers._internal_.default-3.md#_adddefaultmetaschema)

#### Defined in

packages/client-ts/node_modules/ajv/dist/2020.d.ts:6

___

### \_addSchema

▸ **_addSchema**(`schema`, `meta?`, `baseId?`, `validateSchema?`, `addSchema?`): [`SchemaEnv`](verida_web_helpers._internal_.SchemaEnv.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | [`AnySchema`](../modules/verida_web_helpers._internal_.md#anyschema) |
| `meta?` | `boolean` |
| `baseId?` | `string` |
| `validateSchema?` | `boolean` \| ``"log"`` |
| `addSchema?` | `boolean` |

#### Returns

[`SchemaEnv`](verida_web_helpers._internal_.SchemaEnv.md)

#### Inherited from

[default](verida_web_helpers._internal_.default-3.md).[_addSchema](verida_web_helpers._internal_.default-3.md#_addschema)

#### Defined in

packages/client-ts/node_modules/ajv/dist/core.d.ts:165

___

### \_addVocabularies

▸ **_addVocabularies**(): `void`

#### Returns

`void`

#### Overrides

[default](verida_web_helpers._internal_.default-3.md).[_addVocabularies](verida_web_helpers._internal_.default-3.md#_addvocabularies)

#### Defined in

packages/client-ts/node_modules/ajv/dist/2020.d.ts:5

___

### addFormat

▸ **addFormat**(`name`, `format`): [`default`](verida_web_helpers._internal_.default-3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `format` | [`Format`](../modules/verida_web_helpers._internal_.md#format) |

#### Returns

[`default`](verida_web_helpers._internal_.default-3.md)

#### Inherited from

[default](verida_web_helpers._internal_.default-3.md).[addFormat](verida_web_helpers._internal_.default-3.md#addformat)

#### Defined in

packages/client-ts/node_modules/ajv/dist/core.d.ts:160

___

### addKeyword

▸ **addKeyword**(`kwdOrDef`, `def?`): [`default`](verida_web_helpers._internal_.default-3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `kwdOrDef` | `string` \| [`KeywordDefinition`](../modules/verida_web_helpers._internal_.md#keyworddefinition) |
| `def?` | [`KeywordDefinition`](../modules/verida_web_helpers._internal_.md#keyworddefinition) |

#### Returns

[`default`](verida_web_helpers._internal_.default-3.md)

#### Inherited from

[default](verida_web_helpers._internal_.default-3.md).[addKeyword](verida_web_helpers._internal_.default-3.md#addkeyword)

#### Defined in

packages/client-ts/node_modules/ajv/dist/core.d.ts:157

___

### addMetaSchema

▸ **addMetaSchema**(`schema`, `key?`, `_validateSchema?`): [`default`](verida_web_helpers._internal_.default-3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | [`AnySchemaObject`](../modules/verida_web_helpers._internal_.md#anyschemaobject) |
| `key?` | `string` |
| `_validateSchema?` | `boolean` \| ``"log"`` |

#### Returns

[`default`](verida_web_helpers._internal_.default-3.md)

#### Inherited from

[default](verida_web_helpers._internal_.default-3.md).[addMetaSchema](verida_web_helpers._internal_.default-3.md#addmetaschema)

#### Defined in

packages/client-ts/node_modules/ajv/dist/core.d.ts:151

___

### addSchema

▸ **addSchema**(`schema`, `key?`, `_meta?`, `_validateSchema?`): [`default`](verida_web_helpers._internal_.default-3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | [`AnySchema`](../modules/verida_web_helpers._internal_.md#anyschema) \| [`AnySchema`](../modules/verida_web_helpers._internal_.md#anyschema)[] |
| `key?` | `string` |
| `_meta?` | `boolean` |
| `_validateSchema?` | `boolean` \| ``"log"`` |

#### Returns

[`default`](verida_web_helpers._internal_.default-3.md)

#### Inherited from

[default](verida_web_helpers._internal_.default-3.md).[addSchema](verida_web_helpers._internal_.default-3.md#addschema)

#### Defined in

packages/client-ts/node_modules/ajv/dist/core.d.ts:147

___

### addVocabulary

▸ **addVocabulary**(`definitions`): [`default`](verida_web_helpers._internal_.default-3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `definitions` | [`Vocabulary`](../modules/verida_web_helpers._internal_.md#vocabulary) |

#### Returns

[`default`](verida_web_helpers._internal_.default-3.md)

#### Inherited from

[default](verida_web_helpers._internal_.default-3.md).[addVocabulary](verida_web_helpers._internal_.default-3.md#addvocabulary)

#### Defined in

packages/client-ts/node_modules/ajv/dist/core.d.ts:156

___

### compile

▸ **compile**<`T`\>(`schema`, `_meta?`): [`ValidateFunction`](../interfaces/verida_web_helpers._internal_.ValidateFunction.md)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | [`Schema`](../modules/verida_web_helpers._internal_.md#schema) \| [`UncheckedJSONSchemaType`](../modules/verida_web_helpers._internal_.md#uncheckedjsonschematype)<`T`, ``false``\> |
| `_meta?` | `boolean` |

#### Returns

[`ValidateFunction`](../interfaces/verida_web_helpers._internal_.ValidateFunction.md)<`T`\>

#### Inherited from

[default](verida_web_helpers._internal_.default-3.md).[compile](verida_web_helpers._internal_.default-3.md#compile)

#### Defined in

packages/client-ts/node_modules/ajv/dist/core.d.ts:138

▸ **compile**<`T`\>(`schema`, `_meta?`): [`ValidateFunction`](../interfaces/verida_web_helpers._internal_.ValidateFunction.md)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | [`JTDSchemaType`](../modules/verida_web_helpers._internal_.md#jtdschematype)<`T`, [`Record`](../modules/verida_web_helpers._internal_.md#record)<`string`, `never`\>\> |
| `_meta?` | `boolean` |

#### Returns

[`ValidateFunction`](../interfaces/verida_web_helpers._internal_.ValidateFunction.md)<`T`\>

#### Inherited from

[default](verida_web_helpers._internal_.default-3.md).[compile](verida_web_helpers._internal_.default-3.md#compile)

#### Defined in

packages/client-ts/node_modules/ajv/dist/core.d.ts:139

▸ **compile**<`N`, `T`\>(`schema`, `_meta?`): [`ValidateFunction`](../interfaces/verida_web_helpers._internal_.ValidateFunction.md)<[`JTDDataType`](../modules/verida_web_helpers._internal_.md#jtddatatype)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `N` | extends `never` |
| `T` | extends [`SomeJTDSchemaType`](../modules/verida_web_helpers._internal_.md#somejtdschematype) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | `T` |
| `_meta?` | `boolean` |

#### Returns

[`ValidateFunction`](../interfaces/verida_web_helpers._internal_.ValidateFunction.md)<[`JTDDataType`](../modules/verida_web_helpers._internal_.md#jtddatatype)<`T`\>\>

#### Inherited from

[default](verida_web_helpers._internal_.default-3.md).[compile](verida_web_helpers._internal_.default-3.md#compile)

#### Defined in

packages/client-ts/node_modules/ajv/dist/core.d.ts:140

▸ **compile**<`T`\>(`schema`, `_meta?`): [`AsyncValidateFunction`](../interfaces/verida_web_helpers._internal_.AsyncValidateFunction.md)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | [`AsyncSchema`](../interfaces/verida_web_helpers._internal_.AsyncSchema.md) |
| `_meta?` | `boolean` |

#### Returns

[`AsyncValidateFunction`](../interfaces/verida_web_helpers._internal_.AsyncValidateFunction.md)<`T`\>

#### Inherited from

[default](verida_web_helpers._internal_.default-3.md).[compile](verida_web_helpers._internal_.default-3.md#compile)

#### Defined in

packages/client-ts/node_modules/ajv/dist/core.d.ts:141

▸ **compile**<`T`\>(`schema`, `_meta?`): [`AnyValidateFunction`](../modules/verida_web_helpers._internal_.md#anyvalidatefunction)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | [`AnySchema`](../modules/verida_web_helpers._internal_.md#anyschema) |
| `_meta?` | `boolean` |

#### Returns

[`AnyValidateFunction`](../modules/verida_web_helpers._internal_.md#anyvalidatefunction)<`T`\>

#### Inherited from

[default](verida_web_helpers._internal_.default-3.md).[compile](verida_web_helpers._internal_.default-3.md#compile)

#### Defined in

packages/client-ts/node_modules/ajv/dist/core.d.ts:142

___

### compileAsync

▸ **compileAsync**<`T`\>(`schema`, `_meta?`): `Promise`<[`ValidateFunction`](../interfaces/verida_web_helpers._internal_.ValidateFunction.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | [`SchemaObject`](../interfaces/verida_web_helpers._internal_.SchemaObject.md) \| [`UncheckedJSONSchemaType`](../modules/verida_web_helpers._internal_.md#uncheckedjsonschematype)<`T`, ``false``\> |
| `_meta?` | `boolean` |

#### Returns

`Promise`<[`ValidateFunction`](../interfaces/verida_web_helpers._internal_.ValidateFunction.md)<`T`\>\>

#### Inherited from

[default](verida_web_helpers._internal_.default-3.md).[compileAsync](verida_web_helpers._internal_.default-3.md#compileasync)

#### Defined in

packages/client-ts/node_modules/ajv/dist/core.d.ts:143

▸ **compileAsync**<`T`\>(`schema`, `_meta?`): `Promise`<[`ValidateFunction`](../interfaces/verida_web_helpers._internal_.ValidateFunction.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | [`JTDSchemaType`](../modules/verida_web_helpers._internal_.md#jtdschematype)<`T`, [`Record`](../modules/verida_web_helpers._internal_.md#record)<`string`, `never`\>\> |
| `_meta?` | `boolean` |

#### Returns

`Promise`<[`ValidateFunction`](../interfaces/verida_web_helpers._internal_.ValidateFunction.md)<`T`\>\>

#### Inherited from

[default](verida_web_helpers._internal_.default-3.md).[compileAsync](verida_web_helpers._internal_.default-3.md#compileasync)

#### Defined in

packages/client-ts/node_modules/ajv/dist/core.d.ts:144

▸ **compileAsync**<`T`\>(`schema`, `meta?`): `Promise`<[`AsyncValidateFunction`](../interfaces/verida_web_helpers._internal_.AsyncValidateFunction.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | [`AsyncSchema`](../interfaces/verida_web_helpers._internal_.AsyncSchema.md) |
| `meta?` | `boolean` |

#### Returns

`Promise`<[`AsyncValidateFunction`](../interfaces/verida_web_helpers._internal_.AsyncValidateFunction.md)<`T`\>\>

#### Inherited from

[default](verida_web_helpers._internal_.default-3.md).[compileAsync](verida_web_helpers._internal_.default-3.md#compileasync)

#### Defined in

packages/client-ts/node_modules/ajv/dist/core.d.ts:145

▸ **compileAsync**<`T`\>(`schema`, `meta?`): `Promise`<[`AnyValidateFunction`](../modules/verida_web_helpers._internal_.md#anyvalidatefunction)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | [`AnySchemaObject`](../modules/verida_web_helpers._internal_.md#anyschemaobject) |
| `meta?` | `boolean` |

#### Returns

`Promise`<[`AnyValidateFunction`](../modules/verida_web_helpers._internal_.md#anyvalidatefunction)<`T`\>\>

#### Inherited from

[default](verida_web_helpers._internal_.default-3.md).[compileAsync](verida_web_helpers._internal_.default-3.md#compileasync)

#### Defined in

packages/client-ts/node_modules/ajv/dist/core.d.ts:146

___

### defaultMeta

▸ **defaultMeta**(): `undefined` \| `string` \| [`AnySchemaObject`](../modules/verida_web_helpers._internal_.md#anyschemaobject)

#### Returns

`undefined` \| `string` \| [`AnySchemaObject`](../modules/verida_web_helpers._internal_.md#anyschemaobject)

#### Overrides

[default](verida_web_helpers._internal_.default-3.md).[defaultMeta](verida_web_helpers._internal_.default-3.md#defaultmeta)

#### Defined in

packages/client-ts/node_modules/ajv/dist/2020.d.ts:7

___

### errorsText

▸ **errorsText**(`errors?`, `__namedParameters?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `errors?` | ``null`` \| [`ErrorObject`](../interfaces/verida_web_helpers._internal_.ErrorObject.md)<`string`, [`Record`](../modules/verida_web_helpers._internal_.md#record)<`string`, `any`\>, `unknown`\>[] |
| `__namedParameters?` | [`ErrorsTextOptions`](../interfaces/verida_web_helpers._internal_.ErrorsTextOptions.md) |

#### Returns

`string`

#### Inherited from

[default](verida_web_helpers._internal_.default-3.md).[errorsText](verida_web_helpers._internal_.default-3.md#errorstext)

#### Defined in

packages/client-ts/node_modules/ajv/dist/core.d.ts:161

___

### getKeyword

▸ **getKeyword**(`keyword`): `boolean` \| [`AddedKeywordDefinition`](../modules/verida_web_helpers._internal_.md#addedkeyworddefinition)

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyword` | `string` |

#### Returns

`boolean` \| [`AddedKeywordDefinition`](../modules/verida_web_helpers._internal_.md#addedkeyworddefinition)

#### Inherited from

[default](verida_web_helpers._internal_.default-3.md).[getKeyword](verida_web_helpers._internal_.default-3.md#getkeyword)

#### Defined in

packages/client-ts/node_modules/ajv/dist/core.d.ts:158

___

### getSchema

▸ **getSchema**<`T`\>(`keyRef`): `undefined` \| [`AnyValidateFunction`](../modules/verida_web_helpers._internal_.md#anyvalidatefunction)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyRef` | `string` |

#### Returns

`undefined` \| [`AnyValidateFunction`](../modules/verida_web_helpers._internal_.md#anyvalidatefunction)<`T`\>

#### Inherited from

[default](verida_web_helpers._internal_.default-3.md).[getSchema](verida_web_helpers._internal_.default-3.md#getschema)

#### Defined in

packages/client-ts/node_modules/ajv/dist/core.d.ts:154

___

### removeKeyword

▸ **removeKeyword**(`keyword`): [`default`](verida_web_helpers._internal_.default-3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyword` | `string` |

#### Returns

[`default`](verida_web_helpers._internal_.default-3.md)

#### Inherited from

[default](verida_web_helpers._internal_.default-3.md).[removeKeyword](verida_web_helpers._internal_.default-3.md#removekeyword)

#### Defined in

packages/client-ts/node_modules/ajv/dist/core.d.ts:159

___

### removeSchema

▸ **removeSchema**(`schemaKeyRef?`): [`default`](verida_web_helpers._internal_.default-3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `schemaKeyRef?` | `string` \| `RegExp` \| [`AnySchema`](../modules/verida_web_helpers._internal_.md#anyschema) |

#### Returns

[`default`](verida_web_helpers._internal_.default-3.md)

#### Inherited from

[default](verida_web_helpers._internal_.default-3.md).[removeSchema](verida_web_helpers._internal_.default-3.md#removeschema)

#### Defined in

packages/client-ts/node_modules/ajv/dist/core.d.ts:155

___

### validate

▸ **validate**(`schema`, `data`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | `string` \| [`Schema`](../modules/verida_web_helpers._internal_.md#schema) |
| `data` | `unknown` |

#### Returns

`boolean`

#### Inherited from

[default](verida_web_helpers._internal_.default-3.md).[validate](verida_web_helpers._internal_.default-3.md#validate)

#### Defined in

packages/client-ts/node_modules/ajv/dist/core.d.ts:131

▸ **validate**(`schemaKeyRef`, `data`): `boolean` \| `Promise`<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `schemaKeyRef` | `string` \| [`AnySchema`](../modules/verida_web_helpers._internal_.md#anyschema) |
| `data` | `unknown` |

#### Returns

`boolean` \| `Promise`<`unknown`\>

#### Inherited from

[default](verida_web_helpers._internal_.default-3.md).[validate](verida_web_helpers._internal_.default-3.md#validate)

#### Defined in

packages/client-ts/node_modules/ajv/dist/core.d.ts:132

▸ **validate**<`T`\>(`schema`, `data`): data is T

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | `string` \| [`Schema`](../modules/verida_web_helpers._internal_.md#schema) \| [`UncheckedJSONSchemaType`](../modules/verida_web_helpers._internal_.md#uncheckedjsonschematype)<`T`, ``false``\> |
| `data` | `unknown` |

#### Returns

data is T

#### Inherited from

[default](verida_web_helpers._internal_.default-3.md).[validate](verida_web_helpers._internal_.default-3.md#validate)

#### Defined in

packages/client-ts/node_modules/ajv/dist/core.d.ts:133

▸ **validate**<`T`\>(`schema`, `data`): data is T

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | [`JTDSchemaType`](../modules/verida_web_helpers._internal_.md#jtdschematype)<`T`, [`Record`](../modules/verida_web_helpers._internal_.md#record)<`string`, `never`\>\> |
| `data` | `unknown` |

#### Returns

data is T

#### Inherited from

[default](verida_web_helpers._internal_.default-3.md).[validate](verida_web_helpers._internal_.default-3.md#validate)

#### Defined in

packages/client-ts/node_modules/ajv/dist/core.d.ts:134

▸ **validate**<`N`, `T`\>(`schema`, `data`): data is JTDDataType<T\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `N` | extends `never` |
| `T` | extends [`SomeJTDSchemaType`](../modules/verida_web_helpers._internal_.md#somejtdschematype) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | `T` |
| `data` | `unknown` |

#### Returns

data is JTDDataType<T\>

#### Inherited from

[default](verida_web_helpers._internal_.default-3.md).[validate](verida_web_helpers._internal_.default-3.md#validate)

#### Defined in

packages/client-ts/node_modules/ajv/dist/core.d.ts:135

▸ **validate**<`T`\>(`schema`, `data`): `Promise`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | [`AsyncSchema`](../interfaces/verida_web_helpers._internal_.AsyncSchema.md) |
| `data` | `unknown` |

#### Returns

`Promise`<`T`\>

#### Inherited from

[default](verida_web_helpers._internal_.default-3.md).[validate](verida_web_helpers._internal_.default-3.md#validate)

#### Defined in

packages/client-ts/node_modules/ajv/dist/core.d.ts:136

▸ **validate**<`T`\>(`schemaKeyRef`, `data`): data is T \| Promise<T\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schemaKeyRef` | `string` \| [`AnySchema`](../modules/verida_web_helpers._internal_.md#anyschema) |
| `data` | `unknown` |

#### Returns

data is T \| Promise<T\>

#### Inherited from

[default](verida_web_helpers._internal_.default-3.md).[validate](verida_web_helpers._internal_.default-3.md#validate)

#### Defined in

packages/client-ts/node_modules/ajv/dist/core.d.ts:137

___

### validateSchema

▸ **validateSchema**(`schema`, `throwOrLogError?`): `boolean` \| `Promise`<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | [`AnySchema`](../modules/verida_web_helpers._internal_.md#anyschema) |
| `throwOrLogError?` | `boolean` |

#### Returns

`boolean` \| `Promise`<`unknown`\>

#### Inherited from

[default](verida_web_helpers._internal_.default-3.md).[validateSchema](verida_web_helpers._internal_.default-3.md#validateschema)

#### Defined in

packages/client-ts/node_modules/ajv/dist/core.d.ts:153
