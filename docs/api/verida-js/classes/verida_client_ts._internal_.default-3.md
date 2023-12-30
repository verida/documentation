[root](../README.md) / [Modules](../modules.md) / [@verida/client-ts](../modules/verida_client_ts.md) / [<internal\>](../modules/verida_client_ts._internal_.md) / default

# Class: default

[@verida/client-ts](../modules/verida_client_ts.md).[<internal\>](../modules/verida_client_ts._internal_.md).default

## Hierarchy

- **`default`**

  ↳ [`Ajv2020`](verida_client_ts._internal_.Ajv2020.md)

## Table of contents

### Constructors

- [constructor](verida_client_ts._internal_.default-3.md#constructor)

### Properties

- [RULES](verida_client_ts._internal_.default-3.md#rules)
- [\_cache](verida_client_ts._internal_.default-3.md#_cache)
- [\_checkUnique](verida_client_ts._internal_.default-3.md#_checkunique)
- [\_compilations](verida_client_ts._internal_.default-3.md#_compilations)
- [\_compileMetaSchema](verida_client_ts._internal_.default-3.md#_compilemetaschema)
- [\_compileSchemaEnv](verida_client_ts._internal_.default-3.md#_compileschemaenv)
- [\_loading](verida_client_ts._internal_.default-3.md#_loading)
- [\_metaOpts](verida_client_ts._internal_.default-3.md#_metaopts)
- [\_removeAllSchemas](verida_client_ts._internal_.default-3.md#_removeallschemas)
- [errors](verida_client_ts._internal_.default-3.md#errors)
- [formats](verida_client_ts._internal_.default-3.md#formats)
- [logger](verida_client_ts._internal_.default-3.md#logger)
- [opts](verida_client_ts._internal_.default-3.md#opts)
- [refs](verida_client_ts._internal_.default-3.md#refs)
- [schemas](verida_client_ts._internal_.default-3.md#schemas)
- [scope](verida_client_ts._internal_.default-3.md#scope)
- [MissingRefError](verida_client_ts._internal_.default-3.md#missingreferror)
- [ValidationError](verida_client_ts._internal_.default-3.md#validationerror)

### Methods

- [$dataMetaSchema](verida_client_ts._internal_.default-3.md#$datametaschema)
- [\_addDefaultMetaSchema](verida_client_ts._internal_.default-3.md#_adddefaultmetaschema)
- [\_addSchema](verida_client_ts._internal_.default-3.md#_addschema)
- [\_addVocabularies](verida_client_ts._internal_.default-3.md#_addvocabularies)
- [addFormat](verida_client_ts._internal_.default-3.md#addformat)
- [addKeyword](verida_client_ts._internal_.default-3.md#addkeyword)
- [addMetaSchema](verida_client_ts._internal_.default-3.md#addmetaschema)
- [addSchema](verida_client_ts._internal_.default-3.md#addschema)
- [addVocabulary](verida_client_ts._internal_.default-3.md#addvocabulary)
- [compile](verida_client_ts._internal_.default-3.md#compile)
- [compileAsync](verida_client_ts._internal_.default-3.md#compileasync)
- [defaultMeta](verida_client_ts._internal_.default-3.md#defaultmeta)
- [errorsText](verida_client_ts._internal_.default-3.md#errorstext)
- [getKeyword](verida_client_ts._internal_.default-3.md#getkeyword)
- [getSchema](verida_client_ts._internal_.default-3.md#getschema)
- [removeKeyword](verida_client_ts._internal_.default-3.md#removekeyword)
- [removeSchema](verida_client_ts._internal_.default-3.md#removeschema)
- [validate](verida_client_ts._internal_.default-3.md#validate)
- [validateSchema](verida_client_ts._internal_.default-3.md#validateschema)

## Constructors

### constructor

• **new default**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`Options`](../modules/verida_client_ts._internal_.md#options) |

#### Defined in

packages/client-ts/node_modules/ajv/dist/core.d.ts:127

## Properties

### RULES

• `Readonly` **RULES**: [`ValidationRules`](../interfaces/verida_client_ts._internal_.ValidationRules.md)

#### Defined in

packages/client-ts/node_modules/ajv/dist/core.d.ts:120

___

### \_cache

• `Private` `Readonly` **\_cache**: `any`

#### Defined in

packages/client-ts/node_modules/ajv/dist/core.d.ts:123

___

### \_checkUnique

• `Private` **\_checkUnique**: `any`

#### Defined in

packages/client-ts/node_modules/ajv/dist/core.d.ts:166

___

### \_compilations

• `Readonly` **\_compilations**: `Set`<[`SchemaEnv`](verida_client_ts._internal_.SchemaEnv.md)\>

#### Defined in

packages/client-ts/node_modules/ajv/dist/core.d.ts:121

___

### \_compileMetaSchema

• `Private` **\_compileMetaSchema**: `any`

#### Defined in

packages/client-ts/node_modules/ajv/dist/core.d.ts:168

___

### \_compileSchemaEnv

• `Private` **\_compileSchemaEnv**: `any`

#### Defined in

packages/client-ts/node_modules/ajv/dist/core.d.ts:167

___

### \_loading

• `Private` `Readonly` **\_loading**: `any`

#### Defined in

packages/client-ts/node_modules/ajv/dist/core.d.ts:122

___

### \_metaOpts

• `Private` `Readonly` **\_metaOpts**: `any`

#### Defined in

packages/client-ts/node_modules/ajv/dist/core.d.ts:124

___

### \_removeAllSchemas

• `Private` **\_removeAllSchemas**: `any`

#### Defined in

packages/client-ts/node_modules/ajv/dist/core.d.ts:164

___

### errors

• `Optional` **errors**: ``null`` \| [`ErrorObject`](../interfaces/verida_client_ts._internal_.ErrorObject.md)<`string`, [`Record`](../modules/verida_client_ts._internal_.md#record)<`string`, `any`\>, `unknown`\>[]

#### Defined in

packages/client-ts/node_modules/ajv/dist/core.d.ts:108

___

### formats

• `Readonly` **formats**: `Object`

#### Defined in

packages/client-ts/node_modules/ajv/dist/core.d.ts:117

___

### logger

• **logger**: [`Logger`](../interfaces/verida_client_ts._internal_.Logger.md)

#### Defined in

packages/client-ts/node_modules/ajv/dist/core.d.ts:109

___

### opts

• **opts**: [`InstanceOptions`](../modules/verida_client_ts._internal_.md#instanceoptions)

#### Defined in

packages/client-ts/node_modules/ajv/dist/core.d.ts:107

___

### refs

• `Readonly` **refs**: `Object`

#### Defined in

packages/client-ts/node_modules/ajv/dist/core.d.ts:114

___

### schemas

• `Readonly` **schemas**: `Object`

#### Defined in

packages/client-ts/node_modules/ajv/dist/core.d.ts:111

___

### scope

• `Readonly` **scope**: [`ValueScope`](verida_client_ts._internal_.ValueScope.md)

#### Defined in

packages/client-ts/node_modules/ajv/dist/core.d.ts:110

___

### MissingRefError

▪ `Static` **MissingRefError**: typeof [`default`](verida_client_ts._internal_.default-5.md)

#### Defined in

packages/client-ts/node_modules/ajv/dist/core.d.ts:126

___

### ValidationError

▪ `Static` **ValidationError**: typeof [`default`](verida_client_ts._internal_.default-4.md)

#### Defined in

packages/client-ts/node_modules/ajv/dist/core.d.ts:125

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

#### Defined in

packages/client-ts/node_modules/ajv/dist/core.d.ts:163

___

### \_addDefaultMetaSchema

▸ **_addDefaultMetaSchema**(): `void`

#### Returns

`void`

#### Defined in

packages/client-ts/node_modules/ajv/dist/core.d.ts:129

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

#### Defined in

packages/client-ts/node_modules/ajv/dist/core.d.ts:165

___

### \_addVocabularies

▸ **_addVocabularies**(): `void`

#### Returns

`void`

#### Defined in

packages/client-ts/node_modules/ajv/dist/core.d.ts:128

___

### addFormat

▸ **addFormat**(`name`, `format`): [`default`](verida_client_ts._internal_.default-3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `format` | [`Format`](../modules/verida_client_ts._internal_.md#format) |

#### Returns

[`default`](verida_client_ts._internal_.default-3.md)

#### Defined in

packages/client-ts/node_modules/ajv/dist/core.d.ts:160

___

### addKeyword

▸ **addKeyword**(`kwdOrDef`, `def?`): [`default`](verida_client_ts._internal_.default-3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `kwdOrDef` | `string` \| [`KeywordDefinition`](../modules/verida_client_ts._internal_.md#keyworddefinition) |
| `def?` | [`KeywordDefinition`](../modules/verida_client_ts._internal_.md#keyworddefinition) |

#### Returns

[`default`](verida_client_ts._internal_.default-3.md)

#### Defined in

packages/client-ts/node_modules/ajv/dist/core.d.ts:157

___

### addMetaSchema

▸ **addMetaSchema**(`schema`, `key?`, `_validateSchema?`): [`default`](verida_client_ts._internal_.default-3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | [`AnySchemaObject`](../modules/verida_client_ts._internal_.md#anyschemaobject) |
| `key?` | `string` |
| `_validateSchema?` | `boolean` \| ``"log"`` |

#### Returns

[`default`](verida_client_ts._internal_.default-3.md)

#### Defined in

packages/client-ts/node_modules/ajv/dist/core.d.ts:151

___

### addSchema

▸ **addSchema**(`schema`, `key?`, `_meta?`, `_validateSchema?`): [`default`](verida_client_ts._internal_.default-3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | [`AnySchema`](../modules/verida_client_ts._internal_.md#anyschema) \| [`AnySchema`](../modules/verida_client_ts._internal_.md#anyschema)[] |
| `key?` | `string` |
| `_meta?` | `boolean` |
| `_validateSchema?` | `boolean` \| ``"log"`` |

#### Returns

[`default`](verida_client_ts._internal_.default-3.md)

#### Defined in

packages/client-ts/node_modules/ajv/dist/core.d.ts:147

___

### addVocabulary

▸ **addVocabulary**(`definitions`): [`default`](verida_client_ts._internal_.default-3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `definitions` | [`Vocabulary`](../modules/verida_client_ts._internal_.md#vocabulary) |

#### Returns

[`default`](verida_client_ts._internal_.default-3.md)

#### Defined in

packages/client-ts/node_modules/ajv/dist/core.d.ts:156

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

#### Defined in

packages/client-ts/node_modules/ajv/dist/core.d.ts:138

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

#### Defined in

packages/client-ts/node_modules/ajv/dist/core.d.ts:139

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

#### Defined in

packages/client-ts/node_modules/ajv/dist/core.d.ts:140

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

#### Defined in

packages/client-ts/node_modules/ajv/dist/core.d.ts:141

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

#### Defined in

packages/client-ts/node_modules/ajv/dist/core.d.ts:142

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

#### Defined in

packages/client-ts/node_modules/ajv/dist/core.d.ts:143

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

#### Defined in

packages/client-ts/node_modules/ajv/dist/core.d.ts:144

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

#### Defined in

packages/client-ts/node_modules/ajv/dist/core.d.ts:145

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

#### Defined in

packages/client-ts/node_modules/ajv/dist/core.d.ts:146

___

### defaultMeta

▸ **defaultMeta**(): `undefined` \| `string` \| [`AnySchemaObject`](../modules/verida_client_ts._internal_.md#anyschemaobject)

#### Returns

`undefined` \| `string` \| [`AnySchemaObject`](../modules/verida_client_ts._internal_.md#anyschemaobject)

#### Defined in

packages/client-ts/node_modules/ajv/dist/core.d.ts:130

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

#### Defined in

packages/client-ts/node_modules/ajv/dist/core.d.ts:161

___

### getKeyword

▸ **getKeyword**(`keyword`): `boolean` \| [`AddedKeywordDefinition`](../modules/verida_client_ts._internal_.md#addedkeyworddefinition)

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyword` | `string` |

#### Returns

`boolean` \| [`AddedKeywordDefinition`](../modules/verida_client_ts._internal_.md#addedkeyworddefinition)

#### Defined in

packages/client-ts/node_modules/ajv/dist/core.d.ts:158

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

#### Defined in

packages/client-ts/node_modules/ajv/dist/core.d.ts:154

___

### removeKeyword

▸ **removeKeyword**(`keyword`): [`default`](verida_client_ts._internal_.default-3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyword` | `string` |

#### Returns

[`default`](verida_client_ts._internal_.default-3.md)

#### Defined in

packages/client-ts/node_modules/ajv/dist/core.d.ts:159

___

### removeSchema

▸ **removeSchema**(`schemaKeyRef?`): [`default`](verida_client_ts._internal_.default-3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `schemaKeyRef?` | `string` \| `RegExp` \| [`AnySchema`](../modules/verida_client_ts._internal_.md#anyschema) |

#### Returns

[`default`](verida_client_ts._internal_.default-3.md)

#### Defined in

packages/client-ts/node_modules/ajv/dist/core.d.ts:155

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

#### Defined in

packages/client-ts/node_modules/ajv/dist/core.d.ts:131

▸ **validate**(`schemaKeyRef`, `data`): `boolean` \| `Promise`<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `schemaKeyRef` | `string` \| [`AnySchema`](../modules/verida_client_ts._internal_.md#anyschema) |
| `data` | `unknown` |

#### Returns

`boolean` \| `Promise`<`unknown`\>

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
| `schema` | `string` \| [`Schema`](../modules/verida_client_ts._internal_.md#schema) \| [`UncheckedJSONSchemaType`](../modules/verida_client_ts._internal_.md#uncheckedjsonschematype)<`T`, ``false``\> |
| `data` | `unknown` |

#### Returns

data is T

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
| `schema` | [`JTDSchemaType`](../modules/verida_client_ts._internal_.md#jtdschematype)<`T`, [`Record`](../modules/verida_client_ts._internal_.md#record)<`string`, `never`\>\> |
| `data` | `unknown` |

#### Returns

data is T

#### Defined in

packages/client-ts/node_modules/ajv/dist/core.d.ts:134

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
| `schema` | [`AsyncSchema`](../interfaces/verida_client_ts._internal_.AsyncSchema.md) |
| `data` | `unknown` |

#### Returns

`Promise`<`T`\>

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
| `schemaKeyRef` | `string` \| [`AnySchema`](../modules/verida_client_ts._internal_.md#anyschema) |
| `data` | `unknown` |

#### Returns

data is T \| Promise<T\>

#### Defined in

packages/client-ts/node_modules/ajv/dist/core.d.ts:137

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

#### Defined in

packages/client-ts/node_modules/ajv/dist/core.d.ts:153
