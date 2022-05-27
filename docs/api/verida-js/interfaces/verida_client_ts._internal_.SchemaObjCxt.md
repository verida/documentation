[root](../README.md) / [Modules](../modules.md) / [@verida/client-ts](../modules/verida_client_ts.md) / [<internal\>](../modules/verida_client_ts._internal_.md) / SchemaObjCxt

# Interface: SchemaObjCxt

[@verida/client-ts](../modules/verida_client_ts.md).[<internal\>](../modules/verida_client_ts._internal_.md).SchemaObjCxt

## Hierarchy

- [`SchemaCxt`](verida_client_ts._internal_.SchemaCxt.md)

  ↳ **`SchemaObjCxt`**

## Table of contents

### Properties

- [ValidationError](verida_client_ts._internal_.SchemaObjCxt.md#validationerror)
- [allErrors](verida_client_ts._internal_.SchemaObjCxt.md#allerrors)
- [baseId](verida_client_ts._internal_.SchemaObjCxt.md#baseid)
- [compositeRule](verida_client_ts._internal_.SchemaObjCxt.md#compositerule)
- [createErrors](verida_client_ts._internal_.SchemaObjCxt.md#createerrors)
- [data](verida_client_ts._internal_.SchemaObjCxt.md#data)
- [dataLevel](verida_client_ts._internal_.SchemaObjCxt.md#datalevel)
- [dataNames](verida_client_ts._internal_.SchemaObjCxt.md#datanames)
- [dataPathArr](verida_client_ts._internal_.SchemaObjCxt.md#datapatharr)
- [dataTypes](verida_client_ts._internal_.SchemaObjCxt.md#datatypes)
- [definedProperties](verida_client_ts._internal_.SchemaObjCxt.md#definedproperties)
- [errSchemaPath](verida_client_ts._internal_.SchemaObjCxt.md#errschemapath)
- [errorPath](verida_client_ts._internal_.SchemaObjCxt.md#errorpath)
- [evaluated](verida_client_ts._internal_.SchemaObjCxt.md#evaluated)
- [gen](verida_client_ts._internal_.SchemaObjCxt.md#gen)
- [items](verida_client_ts._internal_.SchemaObjCxt.md#items)
- [jtdDiscriminator](verida_client_ts._internal_.SchemaObjCxt.md#jtddiscriminator)
- [jtdMetadata](verida_client_ts._internal_.SchemaObjCxt.md#jtdmetadata)
- [opts](verida_client_ts._internal_.SchemaObjCxt.md#opts)
- [parentData](verida_client_ts._internal_.SchemaObjCxt.md#parentdata)
- [parentDataProperty](verida_client_ts._internal_.SchemaObjCxt.md#parentdataproperty)
- [propertyName](verida_client_ts._internal_.SchemaObjCxt.md#propertyname)
- [props](verida_client_ts._internal_.SchemaObjCxt.md#props)
- [rootId](verida_client_ts._internal_.SchemaObjCxt.md#rootid)
- [schema](verida_client_ts._internal_.SchemaObjCxt.md#schema)
- [schemaEnv](verida_client_ts._internal_.SchemaObjCxt.md#schemaenv)
- [schemaPath](verida_client_ts._internal_.SchemaObjCxt.md#schemapath)
- [self](verida_client_ts._internal_.SchemaObjCxt.md#self)
- [topSchemaRef](verida_client_ts._internal_.SchemaObjCxt.md#topschemaref)
- [validateName](verida_client_ts._internal_.SchemaObjCxt.md#validatename)

## Properties

### ValidationError

• `Optional` `Readonly` **ValidationError**: [`Name`](../classes/verida_client_ts._internal_.Name.md)

#### Inherited from

[SchemaCxt](verida_client_ts._internal_.SchemaCxt.md).[ValidationError](verida_client_ts._internal_.SchemaCxt.md#validationerror)

#### Defined in

node_modules/ajv/dist/compile/index.d.ts:24

___

### allErrors

• `Optional` `Readonly` **allErrors**: `boolean`

#### Inherited from

[SchemaCxt](verida_client_ts._internal_.SchemaCxt.md).[allErrors](verida_client_ts._internal_.SchemaCxt.md#allerrors)

#### Defined in

node_modules/ajv/dist/compile/index.d.ts:12

___

### baseId

• **baseId**: `string`

#### Inherited from

[SchemaCxt](verida_client_ts._internal_.SchemaCxt.md).[baseId](verida_client_ts._internal_.SchemaCxt.md#baseid)

#### Defined in

node_modules/ajv/dist/compile/index.d.ts:28

___

### compositeRule

• `Optional` `Readonly` **compositeRule**: `boolean`

#### Inherited from

[SchemaCxt](verida_client_ts._internal_.SchemaCxt.md).[compositeRule](verida_client_ts._internal_.SchemaCxt.md#compositerule)

#### Defined in

node_modules/ajv/dist/compile/index.d.ts:33

___

### createErrors

• `Optional` `Readonly` **createErrors**: `boolean`

#### Inherited from

[SchemaCxt](verida_client_ts._internal_.SchemaCxt.md).[createErrors](verida_client_ts._internal_.SchemaCxt.md#createerrors)

#### Defined in

node_modules/ajv/dist/compile/index.d.ts:38

___

### data

• `Readonly` **data**: [`Name`](../classes/verida_client_ts._internal_.Name.md)

#### Inherited from

[SchemaCxt](verida_client_ts._internal_.SchemaCxt.md).[data](verida_client_ts._internal_.SchemaCxt.md#data)

#### Defined in

node_modules/ajv/dist/compile/index.d.ts:13

___

### dataLevel

• `Readonly` **dataLevel**: `number`

#### Inherited from

[SchemaCxt](verida_client_ts._internal_.SchemaCxt.md).[dataLevel](verida_client_ts._internal_.SchemaCxt.md#datalevel)

#### Defined in

node_modules/ajv/dist/compile/index.d.ts:18

___

### dataNames

• `Readonly` **dataNames**: [`Name`](../classes/verida_client_ts._internal_.Name.md)[]

#### Inherited from

[SchemaCxt](verida_client_ts._internal_.SchemaCxt.md).[dataNames](verida_client_ts._internal_.SchemaCxt.md#datanames)

#### Defined in

node_modules/ajv/dist/compile/index.d.ts:16

___

### dataPathArr

• `Readonly` **dataPathArr**: (`number` \| [`Code`](../modules/verida_client_ts._internal_.md#code))[]

#### Inherited from

[SchemaCxt](verida_client_ts._internal_.SchemaCxt.md).[dataPathArr](verida_client_ts._internal_.SchemaCxt.md#datapatharr)

#### Defined in

node_modules/ajv/dist/compile/index.d.ts:17

___

### dataTypes

• **dataTypes**: (``"string"`` \| ``"number"`` \| ``"boolean"`` \| ``"object"`` \| ``"integer"`` \| ``"array"`` \| ``"null"``)[]

#### Inherited from

[SchemaCxt](verida_client_ts._internal_.SchemaCxt.md).[dataTypes](verida_client_ts._internal_.SchemaCxt.md#datatypes)

#### Defined in

node_modules/ajv/dist/compile/index.d.ts:19

___

### definedProperties

• **definedProperties**: `Set`<`string`\>

#### Inherited from

[SchemaCxt](verida_client_ts._internal_.SchemaCxt.md).[definedProperties](verida_client_ts._internal_.SchemaCxt.md#definedproperties)

#### Defined in

node_modules/ajv/dist/compile/index.d.ts:20

___

### errSchemaPath

• `Readonly` **errSchemaPath**: `string`

#### Inherited from

[SchemaCxt](verida_client_ts._internal_.SchemaCxt.md).[errSchemaPath](verida_client_ts._internal_.SchemaCxt.md#errschemapath)

#### Defined in

node_modules/ajv/dist/compile/index.d.ts:30

___

### errorPath

• `Readonly` **errorPath**: [`Code`](../modules/verida_client_ts._internal_.md#code)

#### Inherited from

[SchemaCxt](verida_client_ts._internal_.SchemaCxt.md).[errorPath](verida_client_ts._internal_.SchemaCxt.md#errorpath)

#### Defined in

node_modules/ajv/dist/compile/index.d.ts:31

___

### evaluated

• `Optional` **evaluated**: [`Name`](../classes/verida_client_ts._internal_.Name.md)

#### Inherited from

[SchemaCxt](verida_client_ts._internal_.SchemaCxt.md).[evaluated](verida_client_ts._internal_.SchemaCxt.md#evaluated)

#### Defined in

node_modules/ajv/dist/compile/index.d.ts:23

___

### gen

• `Readonly` **gen**: [`CodeGen`](../classes/verida_client_ts._internal_.CodeGen.md)

#### Inherited from

[SchemaCxt](verida_client_ts._internal_.SchemaCxt.md).[gen](verida_client_ts._internal_.SchemaCxt.md#gen)

#### Defined in

node_modules/ajv/dist/compile/index.d.ts:11

___

### items

• `Optional` **items**: [`Name`](../classes/verida_client_ts._internal_.Name.md) \| [`EvaluatedItems`](../modules/verida_client_ts._internal_.md#evaluateditems)

#### Inherited from

[SchemaCxt](verida_client_ts._internal_.SchemaCxt.md).[items](verida_client_ts._internal_.SchemaCxt.md#items)

#### Defined in

node_modules/ajv/dist/compile/index.d.ts:35

___

### jtdDiscriminator

• `Optional` **jtdDiscriminator**: `string`

#### Inherited from

[SchemaCxt](verida_client_ts._internal_.SchemaCxt.md).[jtdDiscriminator](verida_client_ts._internal_.SchemaCxt.md#jtddiscriminator)

#### Defined in

node_modules/ajv/dist/compile/index.d.ts:36

___

### jtdMetadata

• `Optional` **jtdMetadata**: `boolean`

#### Inherited from

[SchemaCxt](verida_client_ts._internal_.SchemaCxt.md).[jtdMetadata](verida_client_ts._internal_.SchemaCxt.md#jtdmetadata)

#### Defined in

node_modules/ajv/dist/compile/index.d.ts:37

___

### opts

• `Readonly` **opts**: [`InstanceOptions`](../modules/verida_client_ts._internal_.md#instanceoptions)

#### Inherited from

[SchemaCxt](verida_client_ts._internal_.SchemaCxt.md).[opts](verida_client_ts._internal_.SchemaCxt.md#opts)

#### Defined in

node_modules/ajv/dist/compile/index.d.ts:39

___

### parentData

• `Readonly` **parentData**: [`Name`](../classes/verida_client_ts._internal_.Name.md)

#### Inherited from

[SchemaCxt](verida_client_ts._internal_.SchemaCxt.md).[parentData](verida_client_ts._internal_.SchemaCxt.md#parentdata)

#### Defined in

node_modules/ajv/dist/compile/index.d.ts:14

___

### parentDataProperty

• `Readonly` **parentDataProperty**: `number` \| [`Code`](../modules/verida_client_ts._internal_.md#code)

#### Inherited from

[SchemaCxt](verida_client_ts._internal_.SchemaCxt.md).[parentDataProperty](verida_client_ts._internal_.SchemaCxt.md#parentdataproperty)

#### Defined in

node_modules/ajv/dist/compile/index.d.ts:15

___

### propertyName

• `Optional` `Readonly` **propertyName**: [`Name`](../classes/verida_client_ts._internal_.Name.md)

#### Inherited from

[SchemaCxt](verida_client_ts._internal_.SchemaCxt.md).[propertyName](verida_client_ts._internal_.SchemaCxt.md#propertyname)

#### Defined in

node_modules/ajv/dist/compile/index.d.ts:32

___

### props

• `Optional` **props**: [`Name`](../classes/verida_client_ts._internal_.Name.md) \| [`EvaluatedProperties`](../modules/verida_client_ts._internal_.md#evaluatedproperties)

#### Inherited from

[SchemaCxt](verida_client_ts._internal_.SchemaCxt.md).[props](verida_client_ts._internal_.SchemaCxt.md#props)

#### Defined in

node_modules/ajv/dist/compile/index.d.ts:34

___

### rootId

• `Readonly` **rootId**: `string`

#### Inherited from

[SchemaCxt](verida_client_ts._internal_.SchemaCxt.md).[rootId](verida_client_ts._internal_.SchemaCxt.md#rootid)

#### Defined in

node_modules/ajv/dist/compile/index.d.ts:27

___

### schema

• `Readonly` **schema**: [`AnySchemaObject`](../modules/verida_client_ts._internal_.md#anyschemaobject)

#### Overrides

[SchemaCxt](verida_client_ts._internal_.SchemaCxt.md).[schema](verida_client_ts._internal_.SchemaCxt.md#schema)

#### Defined in

node_modules/ajv/dist/compile/index.d.ts:43

___

### schemaEnv

• `Readonly` **schemaEnv**: [`SchemaEnv`](../classes/verida_client_ts._internal_.SchemaEnv.md)

#### Inherited from

[SchemaCxt](verida_client_ts._internal_.SchemaCxt.md).[schemaEnv](verida_client_ts._internal_.SchemaCxt.md#schemaenv)

#### Defined in

node_modules/ajv/dist/compile/index.d.ts:26

___

### schemaPath

• `Readonly` **schemaPath**: [`Code`](../modules/verida_client_ts._internal_.md#code)

#### Inherited from

[SchemaCxt](verida_client_ts._internal_.SchemaCxt.md).[schemaPath](verida_client_ts._internal_.SchemaCxt.md#schemapath)

#### Defined in

node_modules/ajv/dist/compile/index.d.ts:29

___

### self

• `Readonly` **self**: [`default`](../classes/verida_client_ts._internal_.default-2.md)

#### Inherited from

[SchemaCxt](verida_client_ts._internal_.SchemaCxt.md).[self](verida_client_ts._internal_.SchemaCxt.md#self)

#### Defined in

node_modules/ajv/dist/compile/index.d.ts:40

___

### topSchemaRef

• `Readonly` **topSchemaRef**: [`Code`](../modules/verida_client_ts._internal_.md#code)

#### Inherited from

[SchemaCxt](verida_client_ts._internal_.SchemaCxt.md).[topSchemaRef](verida_client_ts._internal_.SchemaCxt.md#topschemaref)

#### Defined in

node_modules/ajv/dist/compile/index.d.ts:21

___

### validateName

• `Readonly` **validateName**: [`Name`](../classes/verida_client_ts._internal_.Name.md)

#### Inherited from

[SchemaCxt](verida_client_ts._internal_.SchemaCxt.md).[validateName](verida_client_ts._internal_.SchemaCxt.md#validatename)

#### Defined in

node_modules/ajv/dist/compile/index.d.ts:22
