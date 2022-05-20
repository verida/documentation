[root](../README.md) / [Modules](../modules.md) / [@verida/client-ts](../modules/verida_client_ts.md) / [<internal\>](../modules/verida_client_ts._internal_.md) / CurrentOptions

# Interface: CurrentOptions

[@verida/client-ts](../modules/verida_client_ts.md).[<internal\>](../modules/verida_client_ts._internal_.md).CurrentOptions

## Table of contents

### Properties

- [$comment](verida_client_ts._internal_.CurrentOptions.md#$comment)
- [$data](verida_client_ts._internal_.CurrentOptions.md#$data)
- [addUsedSchema](verida_client_ts._internal_.CurrentOptions.md#addusedschema)
- [allErrors](verida_client_ts._internal_.CurrentOptions.md#allerrors)
- [allowDate](verida_client_ts._internal_.CurrentOptions.md#allowdate)
- [allowMatchingProperties](verida_client_ts._internal_.CurrentOptions.md#allowmatchingproperties)
- [allowUnionTypes](verida_client_ts._internal_.CurrentOptions.md#allowuniontypes)
- [code](verida_client_ts._internal_.CurrentOptions.md#code)
- [coerceTypes](verida_client_ts._internal_.CurrentOptions.md#coercetypes)
- [defaultMeta](verida_client_ts._internal_.CurrentOptions.md#defaultmeta)
- [discriminator](verida_client_ts._internal_.CurrentOptions.md#discriminator)
- [dynamicRef](verida_client_ts._internal_.CurrentOptions.md#dynamicref)
- [formats](verida_client_ts._internal_.CurrentOptions.md#formats)
- [inlineRefs](verida_client_ts._internal_.CurrentOptions.md#inlinerefs)
- [int32range](verida_client_ts._internal_.CurrentOptions.md#int32range)
- [jtd](verida_client_ts._internal_.CurrentOptions.md#jtd)
- [keywords](verida_client_ts._internal_.CurrentOptions.md#keywords)
- [logger](verida_client_ts._internal_.CurrentOptions.md#logger)
- [loopEnum](verida_client_ts._internal_.CurrentOptions.md#loopenum)
- [loopRequired](verida_client_ts._internal_.CurrentOptions.md#looprequired)
- [messages](verida_client_ts._internal_.CurrentOptions.md#messages)
- [meta](verida_client_ts._internal_.CurrentOptions.md#meta)
- [multipleOfPrecision](verida_client_ts._internal_.CurrentOptions.md#multipleofprecision)
- [next](verida_client_ts._internal_.CurrentOptions.md#next)
- [ownProperties](verida_client_ts._internal_.CurrentOptions.md#ownproperties)
- [parseDate](verida_client_ts._internal_.CurrentOptions.md#parsedate)
- [passContext](verida_client_ts._internal_.CurrentOptions.md#passcontext)
- [removeAdditional](verida_client_ts._internal_.CurrentOptions.md#removeadditional)
- [schemaId](verida_client_ts._internal_.CurrentOptions.md#schemaid)
- [schemas](verida_client_ts._internal_.CurrentOptions.md#schemas)
- [strict](verida_client_ts._internal_.CurrentOptions.md#strict)
- [strictNumbers](verida_client_ts._internal_.CurrentOptions.md#strictnumbers)
- [strictRequired](verida_client_ts._internal_.CurrentOptions.md#strictrequired)
- [strictSchema](verida_client_ts._internal_.CurrentOptions.md#strictschema)
- [strictTuples](verida_client_ts._internal_.CurrentOptions.md#stricttuples)
- [strictTypes](verida_client_ts._internal_.CurrentOptions.md#stricttypes)
- [timestamp](verida_client_ts._internal_.CurrentOptions.md#timestamp)
- [unevaluated](verida_client_ts._internal_.CurrentOptions.md#unevaluated)
- [unicodeRegExp](verida_client_ts._internal_.CurrentOptions.md#unicoderegexp)
- [useDefaults](verida_client_ts._internal_.CurrentOptions.md#usedefaults)
- [validateFormats](verida_client_ts._internal_.CurrentOptions.md#validateformats)
- [validateSchema](verida_client_ts._internal_.CurrentOptions.md#validateschema)
- [verbose](verida_client_ts._internal_.CurrentOptions.md#verbose)

### Methods

- [loadSchema](verida_client_ts._internal_.CurrentOptions.md#loadschema)

## Properties

### $comment

• `Optional` **$comment**: ``true`` \| (`comment`: `string`, `schemaPath?`: `string`, `rootSchema?`: [`AnySchemaObject`](../modules/verida_client_ts._internal_.md#anyschemaobject)) => `unknown`

#### Defined in

node_modules/ajv/dist/core.d.ts:40

___

### $data

• `Optional` **$data**: `boolean`

#### Defined in

node_modules/ajv/dist/core.d.ts:32

___

### addUsedSchema

• `Optional` **addUsedSchema**: `boolean`

#### Defined in

node_modules/ajv/dist/core.d.ts:61

___

### allErrors

• `Optional` **allErrors**: `boolean`

#### Defined in

node_modules/ajv/dist/core.d.ts:33

___

### allowDate

• `Optional` **allowDate**: `boolean`

#### Defined in

node_modules/ajv/dist/core.d.ts:39

___

### allowMatchingProperties

• `Optional` **allowMatchingProperties**: `boolean`

#### Defined in

node_modules/ajv/dist/core.d.ts:29

___

### allowUnionTypes

• `Optional` **allowUnionTypes**: `boolean`

#### Defined in

node_modules/ajv/dist/core.d.ts:30

___

### code

• `Optional` **code**: [`CodeOptions`](verida_client_ts._internal_.CodeOptions.md)

#### Defined in

node_modules/ajv/dist/core.d.ts:70

___

### coerceTypes

• `Optional` **coerceTypes**: `boolean` \| ``"array"``

#### Defined in

node_modules/ajv/dist/core.d.ts:52

___

### defaultMeta

• `Optional` **defaultMeta**: `string` \| [`AnySchemaObject`](../modules/verida_client_ts._internal_.md#anyschemaobject)

#### Defined in

node_modules/ajv/dist/core.d.ts:59

___

### discriminator

• `Optional` **discriminator**: `boolean`

#### Defined in

node_modules/ajv/dist/core.d.ts:35

___

### dynamicRef

• `Optional` **dynamicRef**: `boolean`

#### Defined in

node_modules/ajv/dist/core.d.ts:55

___

### formats

• `Optional` **formats**: `Object`

#### Defined in

node_modules/ajv/dist/core.d.ts:41

___

### inlineRefs

• `Optional` **inlineRefs**: `number` \| `boolean`

#### Defined in

node_modules/ajv/dist/core.d.ts:62

___

### int32range

• `Optional` **int32range**: `boolean`

#### Defined in

node_modules/ajv/dist/core.d.ts:68

___

### jtd

• `Optional` **jtd**: `boolean`

#### Defined in

node_modules/ajv/dist/core.d.ts:57

___

### keywords

• `Optional` **keywords**: [`Vocabulary`](../modules/verida_client_ts._internal_.md#vocabulary)

#### Defined in

node_modules/ajv/dist/core.d.ts:44

___

### logger

• `Optional` **logger**: ``false`` \| [`Logger`](verida_client_ts._internal_.Logger.md)

#### Defined in

node_modules/ajv/dist/core.d.ts:48

___

### loopEnum

• `Optional` **loopEnum**: `number`

#### Defined in

node_modules/ajv/dist/core.d.ts:65

___

### loopRequired

• `Optional` **loopRequired**: `number`

#### Defined in

node_modules/ajv/dist/core.d.ts:64

___

### messages

• `Optional` **messages**: `boolean`

#### Defined in

node_modules/ajv/dist/core.d.ts:69

___

### meta

• `Optional` **meta**: `boolean` \| [`SchemaObject`](verida_client_ts._internal_.SchemaObject.md)

#### Defined in

node_modules/ajv/dist/core.d.ts:58

___

### multipleOfPrecision

• `Optional` **multipleOfPrecision**: `number`

#### Defined in

node_modules/ajv/dist/core.d.ts:67

___

### next

• `Optional` **next**: `boolean`

#### Defined in

node_modules/ajv/dist/core.d.ts:53

___

### ownProperties

• `Optional` **ownProperties**: `boolean`

#### Defined in

node_modules/ajv/dist/core.d.ts:66

___

### parseDate

• `Optional` **parseDate**: `boolean`

#### Defined in

node_modules/ajv/dist/core.d.ts:38

___

### passContext

• `Optional` **passContext**: `boolean`

#### Defined in

node_modules/ajv/dist/core.d.ts:63

___

### removeAdditional

• `Optional` **removeAdditional**: `boolean` \| ``"all"`` \| ``"failing"``

#### Defined in

node_modules/ajv/dist/core.d.ts:50

___

### schemaId

• `Optional` **schemaId**: ``"id"`` \| ``"$id"``

#### Defined in

node_modules/ajv/dist/core.d.ts:56

___

### schemas

• `Optional` **schemas**: [`AnySchema`](../modules/verida_client_ts._internal_.md#anyschema)[] \| {}

#### Defined in

node_modules/ajv/dist/core.d.ts:45

___

### strict

• `Optional` **strict**: `boolean` \| ``"log"``

#### Defined in

node_modules/ajv/dist/core.d.ts:23

___

### strictNumbers

• `Optional` **strictNumbers**: `boolean` \| ``"log"``

#### Defined in

node_modules/ajv/dist/core.d.ts:25

___

### strictRequired

• `Optional` **strictRequired**: `boolean` \| ``"log"``

#### Defined in

node_modules/ajv/dist/core.d.ts:28

___

### strictSchema

• `Optional` **strictSchema**: `boolean` \| ``"log"``

#### Defined in

node_modules/ajv/dist/core.d.ts:24

___

### strictTuples

• `Optional` **strictTuples**: `boolean` \| ``"log"``

#### Defined in

node_modules/ajv/dist/core.d.ts:27

___

### strictTypes

• `Optional` **strictTypes**: `boolean` \| ``"log"``

#### Defined in

node_modules/ajv/dist/core.d.ts:26

___

### timestamp

• `Optional` **timestamp**: ``"string"`` \| ``"date"``

#### Defined in

node_modules/ajv/dist/core.d.ts:37

___

### unevaluated

• `Optional` **unevaluated**: `boolean`

#### Defined in

node_modules/ajv/dist/core.d.ts:54

___

### unicodeRegExp

• `Optional` **unicodeRegExp**: `boolean`

#### Defined in

node_modules/ajv/dist/core.d.ts:36

___

### useDefaults

• `Optional` **useDefaults**: `boolean` \| ``"empty"``

#### Defined in

node_modules/ajv/dist/core.d.ts:51

___

### validateFormats

• `Optional` **validateFormats**: `boolean`

#### Defined in

node_modules/ajv/dist/core.d.ts:31

___

### validateSchema

• `Optional` **validateSchema**: `boolean` \| ``"log"``

#### Defined in

node_modules/ajv/dist/core.d.ts:60

___

### verbose

• `Optional` **verbose**: `boolean`

#### Defined in

node_modules/ajv/dist/core.d.ts:34

## Methods

### loadSchema

▸ `Optional` **loadSchema**(`uri`): `Promise`<[`AnySchemaObject`](../modules/verida_client_ts._internal_.md#anyschemaobject)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `uri` | `string` |

#### Returns

`Promise`<[`AnySchemaObject`](../modules/verida_client_ts._internal_.md#anyschemaobject)\>

#### Defined in

node_modules/ajv/dist/core.d.ts:49
