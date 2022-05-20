[root](../README.md) / [Modules](../modules.md) / [@verida/verifiable-credentials](../modules/verida_verifiable_credentials.md) / [<internal\>](../modules/verida_verifiable_credentials._internal_.md) / KeywordCxt

# Class: KeywordCxt

[@verida/verifiable-credentials](../modules/verida_verifiable_credentials.md).[<internal\>](../modules/verida_verifiable_credentials._internal_.md).KeywordCxt

## Implements

- [`KeywordErrorCxt`](../interfaces/verida_verifiable_credentials._internal_.KeywordErrorCxt.md)

## Table of contents

### Constructors

- [constructor](verida_verifiable_credentials._internal_.KeywordCxt.md#constructor)

### Properties

- [$data](verida_verifiable_credentials._internal_.KeywordCxt.md#$data)
- [\_error](verida_verifiable_credentials._internal_.KeywordCxt.md#_error)
- [allErrors](verida_verifiable_credentials._internal_.KeywordCxt.md#allerrors)
- [data](verida_verifiable_credentials._internal_.KeywordCxt.md#data)
- [def](verida_verifiable_credentials._internal_.KeywordCxt.md#def)
- [errsCount](verida_verifiable_credentials._internal_.KeywordCxt.md#errscount)
- [gen](verida_verifiable_credentials._internal_.KeywordCxt.md#gen)
- [it](verida_verifiable_credentials._internal_.KeywordCxt.md#it)
- [keyword](verida_verifiable_credentials._internal_.KeywordCxt.md#keyword)
- [params](verida_verifiable_credentials._internal_.KeywordCxt.md#params)
- [parentSchema](verida_verifiable_credentials._internal_.KeywordCxt.md#parentschema)
- [schema](verida_verifiable_credentials._internal_.KeywordCxt.md#schema)
- [schemaCode](verida_verifiable_credentials._internal_.KeywordCxt.md#schemacode)
- [schemaType](verida_verifiable_credentials._internal_.KeywordCxt.md#schematype)
- [schemaValue](verida_verifiable_credentials._internal_.KeywordCxt.md#schemavalue)

### Methods

- [$dataError](verida_verifiable_credentials._internal_.KeywordCxt.md#$dataerror)
- [block$data](verida_verifiable_credentials._internal_.KeywordCxt.md#block$data)
- [check$data](verida_verifiable_credentials._internal_.KeywordCxt.md#check$data)
- [error](verida_verifiable_credentials._internal_.KeywordCxt.md#error)
- [fail](verida_verifiable_credentials._internal_.KeywordCxt.md#fail)
- [fail$data](verida_verifiable_credentials._internal_.KeywordCxt.md#fail$data)
- [failResult](verida_verifiable_credentials._internal_.KeywordCxt.md#failresult)
- [invalid$data](verida_verifiable_credentials._internal_.KeywordCxt.md#invalid$data)
- [mergeEvaluated](verida_verifiable_credentials._internal_.KeywordCxt.md#mergeevaluated)
- [mergeValidEvaluated](verida_verifiable_credentials._internal_.KeywordCxt.md#mergevalidevaluated)
- [ok](verida_verifiable_credentials._internal_.KeywordCxt.md#ok)
- [pass](verida_verifiable_credentials._internal_.KeywordCxt.md#pass)
- [reset](verida_verifiable_credentials._internal_.KeywordCxt.md#reset)
- [result](verida_verifiable_credentials._internal_.KeywordCxt.md#result)
- [setParams](verida_verifiable_credentials._internal_.KeywordCxt.md#setparams)
- [subschema](verida_verifiable_credentials._internal_.KeywordCxt.md#subschema)

## Constructors

### constructor

• **new KeywordCxt**(`it`, `def`, `keyword`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `it` | [`SchemaObjCxt`](../interfaces/verida_verifiable_credentials._internal_.SchemaObjCxt.md) |
| `def` | [`AddedKeywordDefinition`](../modules/verida_verifiable_credentials._internal_.md#addedkeyworddefinition) |
| `keyword` | `string` |

#### Defined in

node_modules/ajv/dist/compile/validate/index.d.ts:23

## Properties

### $data

• `Optional` `Readonly` **$data**: `string` \| ``false``

#### Implementation of

[KeywordErrorCxt](../interfaces/verida_verifiable_credentials._internal_.KeywordErrorCxt.md).[$data](../interfaces/verida_verifiable_credentials._internal_.KeywordErrorCxt.md#$data)

#### Defined in

node_modules/ajv/dist/compile/validate/index.d.ts:13

___

### \_error

• `Private` **\_error**: `any`

#### Defined in

node_modules/ajv/dist/compile/validate/index.d.ts:30

___

### allErrors

• `Optional` `Readonly` **allErrors**: `boolean`

#### Defined in

node_modules/ajv/dist/compile/validate/index.d.ts:10

___

### data

• `Readonly` **data**: [`Name`](verida_verifiable_credentials._internal_.Name.md)

#### Implementation of

[KeywordErrorCxt](../interfaces/verida_verifiable_credentials._internal_.KeywordErrorCxt.md).[data](../interfaces/verida_verifiable_credentials._internal_.KeywordErrorCxt.md#data)

#### Defined in

node_modules/ajv/dist/compile/validate/index.d.ts:12

___

### def

• `Readonly` **def**: [`AddedKeywordDefinition`](../modules/verida_verifiable_credentials._internal_.md#addedkeyworddefinition)

#### Defined in

node_modules/ajv/dist/compile/validate/index.d.ts:22

___

### errsCount

• `Optional` `Readonly` **errsCount**: [`Name`](verida_verifiable_credentials._internal_.Name.md)

#### Implementation of

[KeywordErrorCxt](../interfaces/verida_verifiable_credentials._internal_.KeywordErrorCxt.md).[errsCount](../interfaces/verida_verifiable_credentials._internal_.KeywordErrorCxt.md#errscount)

#### Defined in

node_modules/ajv/dist/compile/validate/index.d.ts:19

___

### gen

• `Readonly` **gen**: [`CodeGen`](verida_verifiable_credentials._internal_.CodeGen.md)

#### Implementation of

[KeywordErrorCxt](../interfaces/verida_verifiable_credentials._internal_.KeywordErrorCxt.md).[gen](../interfaces/verida_verifiable_credentials._internal_.KeywordErrorCxt.md#gen)

#### Defined in

node_modules/ajv/dist/compile/validate/index.d.ts:9

___

### it

• `Readonly` **it**: [`SchemaObjCxt`](../interfaces/verida_verifiable_credentials._internal_.SchemaObjCxt.md)

#### Implementation of

[KeywordErrorCxt](../interfaces/verida_verifiable_credentials._internal_.KeywordErrorCxt.md).[it](../interfaces/verida_verifiable_credentials._internal_.KeywordErrorCxt.md#it)

#### Defined in

node_modules/ajv/dist/compile/validate/index.d.ts:21

___

### keyword

• `Readonly` **keyword**: `string`

#### Implementation of

[KeywordErrorCxt](../interfaces/verida_verifiable_credentials._internal_.KeywordErrorCxt.md).[keyword](../interfaces/verida_verifiable_credentials._internal_.KeywordErrorCxt.md#keyword)

#### Defined in

node_modules/ajv/dist/compile/validate/index.d.ts:11

___

### params

• **params**: [`KeywordCxtParams`](../modules/verida_verifiable_credentials._internal_.md#keywordcxtparams)

#### Implementation of

[KeywordErrorCxt](../interfaces/verida_verifiable_credentials._internal_.KeywordErrorCxt.md).[params](../interfaces/verida_verifiable_credentials._internal_.KeywordErrorCxt.md#params)

#### Defined in

node_modules/ajv/dist/compile/validate/index.d.ts:20

___

### parentSchema

• `Readonly` **parentSchema**: [`AnySchemaObject`](../modules/verida_verifiable_credentials._internal_.md#anyschemaobject)

#### Implementation of

[KeywordErrorCxt](../interfaces/verida_verifiable_credentials._internal_.KeywordErrorCxt.md).[parentSchema](../interfaces/verida_verifiable_credentials._internal_.KeywordErrorCxt.md#parentschema)

#### Defined in

node_modules/ajv/dist/compile/validate/index.d.ts:18

___

### schema

• **schema**: `any`

#### Implementation of

[KeywordErrorCxt](../interfaces/verida_verifiable_credentials._internal_.KeywordErrorCxt.md).[schema](../interfaces/verida_verifiable_credentials._internal_.KeywordErrorCxt.md#schema)

#### Defined in

node_modules/ajv/dist/compile/validate/index.d.ts:14

___

### schemaCode

• `Readonly` **schemaCode**: `number` \| `boolean` \| [`Code`](../modules/verida_verifiable_credentials._internal_.md#code)

#### Implementation of

[KeywordErrorCxt](../interfaces/verida_verifiable_credentials._internal_.KeywordErrorCxt.md).[schemaCode](../interfaces/verida_verifiable_credentials._internal_.KeywordErrorCxt.md#schemacode)

#### Defined in

node_modules/ajv/dist/compile/validate/index.d.ts:16

___

### schemaType

• `Readonly` **schemaType**: (``"string"`` \| ``"number"`` \| ``"boolean"`` \| ``"object"`` \| ``"integer"`` \| ``"array"`` \| ``"null"``)[]

#### Implementation of

[KeywordErrorCxt](../interfaces/verida_verifiable_credentials._internal_.KeywordErrorCxt.md).[schemaType](../interfaces/verida_verifiable_credentials._internal_.KeywordErrorCxt.md#schematype)

#### Defined in

node_modules/ajv/dist/compile/validate/index.d.ts:17

___

### schemaValue

• `Readonly` **schemaValue**: `number` \| `boolean` \| [`Code`](../modules/verida_verifiable_credentials._internal_.md#code)

#### Implementation of

[KeywordErrorCxt](../interfaces/verida_verifiable_credentials._internal_.KeywordErrorCxt.md).[schemaValue](../interfaces/verida_verifiable_credentials._internal_.KeywordErrorCxt.md#schemavalue)

#### Defined in

node_modules/ajv/dist/compile/validate/index.d.ts:15

## Methods

### $dataError

▸ **$dataError**(): `void`

#### Returns

`void`

#### Defined in

node_modules/ajv/dist/compile/validate/index.d.ts:31

___

### block$data

▸ **block$data**(`valid`, `codeBlock`, `$dataValid?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `valid` | [`Name`](verida_verifiable_credentials._internal_.Name.md) |
| `codeBlock` | () => `void` |
| `$dataValid?` | [`Code`](../modules/verida_verifiable_credentials._internal_.md#code) |

#### Returns

`void`

#### Defined in

node_modules/ajv/dist/compile/validate/index.d.ts:35

___

### check$data

▸ **check$data**(`valid?`, `$dataValid?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `valid?` | [`Name`](verida_verifiable_credentials._internal_.Name.md) |
| `$dataValid?` | [`Code`](../modules/verida_verifiable_credentials._internal_.md#code) |

#### Returns

`void`

#### Defined in

node_modules/ajv/dist/compile/validate/index.d.ts:36

___

### error

▸ **error**(`append?`, `errorParams?`, `errorPaths?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `append?` | `boolean` |
| `errorParams?` | [`KeywordCxtParams`](../modules/verida_verifiable_credentials._internal_.md#keywordcxtparams) |
| `errorPaths?` | [`ErrorPaths`](../interfaces/verida_verifiable_credentials._internal_.ErrorPaths.md) |

#### Returns

`void`

#### Defined in

node_modules/ajv/dist/compile/validate/index.d.ts:29

___

### fail

▸ **fail**(`condition?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `condition?` | [`Code`](../modules/verida_verifiable_credentials._internal_.md#code) |

#### Returns

`void`

#### Defined in

node_modules/ajv/dist/compile/validate/index.d.ts:27

___

### fail$data

▸ **fail$data**(`condition`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `condition` | [`Code`](../modules/verida_verifiable_credentials._internal_.md#code) |

#### Returns

`void`

#### Defined in

node_modules/ajv/dist/compile/validate/index.d.ts:28

___

### failResult

▸ **failResult**(`condition`, `successAction?`, `failAction?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `condition` | [`Code`](../modules/verida_verifiable_credentials._internal_.md#code) |
| `successAction?` | () => `void` |
| `failAction?` | () => `void` |

#### Returns

`void`

#### Defined in

node_modules/ajv/dist/compile/validate/index.d.ts:25

___

### invalid$data

▸ **invalid$data**(): [`Code`](../modules/verida_verifiable_credentials._internal_.md#code)

#### Returns

[`Code`](../modules/verida_verifiable_credentials._internal_.md#code)

#### Defined in

node_modules/ajv/dist/compile/validate/index.d.ts:37

___

### mergeEvaluated

▸ **mergeEvaluated**(`schemaCxt`, `toName?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `schemaCxt` | [`SchemaCxt`](../interfaces/verida_verifiable_credentials._internal_.SchemaCxt.md) |
| `toName?` | typeof [`Name`](verida_verifiable_credentials._internal_.Name.md) |

#### Returns

`void`

#### Defined in

node_modules/ajv/dist/compile/validate/index.d.ts:39

___

### mergeValidEvaluated

▸ **mergeValidEvaluated**(`schemaCxt`, `valid`): `boolean` \| `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `schemaCxt` | [`SchemaCxt`](../interfaces/verida_verifiable_credentials._internal_.SchemaCxt.md) |
| `valid` | [`Name`](verida_verifiable_credentials._internal_.Name.md) |

#### Returns

`boolean` \| `void`

#### Defined in

node_modules/ajv/dist/compile/validate/index.d.ts:40

___

### ok

▸ **ok**(`cond`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cond` | `boolean` \| [`Code`](../modules/verida_verifiable_credentials._internal_.md#code) |

#### Returns

`void`

#### Defined in

node_modules/ajv/dist/compile/validate/index.d.ts:33

___

### pass

▸ **pass**(`condition`, `failAction?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `condition` | [`Code`](../modules/verida_verifiable_credentials._internal_.md#code) |
| `failAction?` | () => `void` |

#### Returns

`void`

#### Defined in

node_modules/ajv/dist/compile/validate/index.d.ts:26

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Defined in

node_modules/ajv/dist/compile/validate/index.d.ts:32

___

### result

▸ **result**(`condition`, `successAction?`, `failAction?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `condition` | [`Code`](../modules/verida_verifiable_credentials._internal_.md#code) |
| `successAction?` | () => `void` |
| `failAction?` | () => `void` |

#### Returns

`void`

#### Defined in

node_modules/ajv/dist/compile/validate/index.d.ts:24

___

### setParams

▸ **setParams**(`obj`, `assign?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | [`KeywordCxtParams`](../modules/verida_verifiable_credentials._internal_.md#keywordcxtparams) |
| `assign?` | ``true`` |

#### Returns

`void`

#### Defined in

node_modules/ajv/dist/compile/validate/index.d.ts:34

___

### subschema

▸ **subschema**(`appl`, `valid`): [`SchemaCxt`](../interfaces/verida_verifiable_credentials._internal_.SchemaCxt.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `appl` | [`Partial`](../modules/verida_verifiable_credentials._internal_.md#partial)<{ `allErrors`: `boolean` ; `compositeRule`: ``true`` ; `createErrors`: `boolean` ; `data`: [`Code`](../modules/verida_verifiable_credentials._internal_.md#code) ; `dataProp`: `string` \| `number` \| [`Code`](../modules/verida_verifiable_credentials._internal_.md#code) ; `dataPropType`: [`Type`](../enums/verida_verifiable_credentials._internal_.Type.md) ; `dataTypes`: (``"string"`` \| ``"number"`` \| ``"boolean"`` \| ``"object"`` \| ``"integer"`` \| ``"array"`` \| ``"null"``)[] ; `definedProperties`: `Set`<`string`\> ; `errSchemaPath`: `string` ; `jtdDiscriminator`: `string` ; `jtdMetadata`: `boolean` ; `keyword`: `string` ; `propertyName`: [`Name`](verida_verifiable_credentials._internal_.Name.md) ; `schema`: [`AnySchema`](../modules/verida_verifiable_credentials._internal_.md#anyschema) ; `schemaPath`: [`Code`](../modules/verida_verifiable_credentials._internal_.md#code) ; `schemaProp`: `string` \| `number` ; `topSchemaRef`: [`Code`](../modules/verida_verifiable_credentials._internal_.md#code)  }\> |
| `valid` | [`Name`](verida_verifiable_credentials._internal_.Name.md) |

#### Returns

[`SchemaCxt`](../interfaces/verida_verifiable_credentials._internal_.SchemaCxt.md)

#### Defined in

node_modules/ajv/dist/compile/validate/index.d.ts:38
