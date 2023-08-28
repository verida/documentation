[root](../README.md) / [Modules](../modules.md) / [@verida/client-ts](../modules/verida_client_ts.md) / [<internal\>](../modules/verida_client_ts._internal_.md) / SchemaCxt

# Interface: SchemaCxt

[@verida/client-ts](../modules/verida_client_ts.md).[<internal\>](../modules/verida_client_ts._internal_.md).SchemaCxt

## Hierarchy

- **`SchemaCxt`**

  ↳ [`SchemaObjCxt`](verida_client_ts._internal_.SchemaObjCxt.md)

## Table of contents

### Properties

- [ValidationError](verida_client_ts._internal_.SchemaCxt.md#validationerror)
- [allErrors](verida_client_ts._internal_.SchemaCxt.md#allerrors)
- [baseId](verida_client_ts._internal_.SchemaCxt.md#baseid)
- [compositeRule](verida_client_ts._internal_.SchemaCxt.md#compositerule)
- [createErrors](verida_client_ts._internal_.SchemaCxt.md#createerrors)
- [data](verida_client_ts._internal_.SchemaCxt.md#data)
- [dataLevel](verida_client_ts._internal_.SchemaCxt.md#datalevel)
- [dataNames](verida_client_ts._internal_.SchemaCxt.md#datanames)
- [dataPathArr](verida_client_ts._internal_.SchemaCxt.md#datapatharr)
- [dataTypes](verida_client_ts._internal_.SchemaCxt.md#datatypes)
- [definedProperties](verida_client_ts._internal_.SchemaCxt.md#definedproperties)
- [errSchemaPath](verida_client_ts._internal_.SchemaCxt.md#errschemapath)
- [errorPath](verida_client_ts._internal_.SchemaCxt.md#errorpath)
- [evaluated](verida_client_ts._internal_.SchemaCxt.md#evaluated)
- [gen](verida_client_ts._internal_.SchemaCxt.md#gen)
- [items](verida_client_ts._internal_.SchemaCxt.md#items)
- [jtdDiscriminator](verida_client_ts._internal_.SchemaCxt.md#jtddiscriminator)
- [jtdMetadata](verida_client_ts._internal_.SchemaCxt.md#jtdmetadata)
- [opts](verida_client_ts._internal_.SchemaCxt.md#opts)
- [parentData](verida_client_ts._internal_.SchemaCxt.md#parentdata)
- [parentDataProperty](verida_client_ts._internal_.SchemaCxt.md#parentdataproperty)
- [propertyName](verida_client_ts._internal_.SchemaCxt.md#propertyname)
- [props](verida_client_ts._internal_.SchemaCxt.md#props)
- [rootId](verida_client_ts._internal_.SchemaCxt.md#rootid)
- [schema](verida_client_ts._internal_.SchemaCxt.md#schema)
- [schemaEnv](verida_client_ts._internal_.SchemaCxt.md#schemaenv)
- [schemaPath](verida_client_ts._internal_.SchemaCxt.md#schemapath)
- [self](verida_client_ts._internal_.SchemaCxt.md#self)
- [topSchemaRef](verida_client_ts._internal_.SchemaCxt.md#topschemaref)
- [validateName](verida_client_ts._internal_.SchemaCxt.md#validatename)

## Properties

### ValidationError

• `Optional` `Readonly` **ValidationError**: [`Name`](../classes/verida_client_ts._internal_.Name.md)

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/index.d.ts:24

___

### allErrors

• `Optional` `Readonly` **allErrors**: `boolean`

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/index.d.ts:12

___

### baseId

• **baseId**: `string`

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/index.d.ts:28

___

### compositeRule

• `Optional` `Readonly` **compositeRule**: `boolean`

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/index.d.ts:33

___

### createErrors

• `Optional` `Readonly` **createErrors**: `boolean`

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/index.d.ts:38

___

### data

• `Readonly` **data**: [`Name`](../classes/verida_client_ts._internal_.Name.md)

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/index.d.ts:13

___

### dataLevel

• `Readonly` **dataLevel**: `number`

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/index.d.ts:18

___

### dataNames

• `Readonly` **dataNames**: [`Name`](../classes/verida_client_ts._internal_.Name.md)[]

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/index.d.ts:16

___

### dataPathArr

• `Readonly` **dataPathArr**: (`number` \| [`Code`](../modules/verida_client_ts._internal_.md#code))[]

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/index.d.ts:17

___

### dataTypes

• **dataTypes**: (``"string"`` \| ``"number"`` \| ``"boolean"`` \| ``"object"`` \| ``"integer"`` \| ``"array"`` \| ``"null"``)[]

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/index.d.ts:19

___

### definedProperties

• **definedProperties**: `Set`<`string`\>

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/index.d.ts:20

___

### errSchemaPath

• `Readonly` **errSchemaPath**: `string`

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/index.d.ts:30

___

### errorPath

• `Readonly` **errorPath**: [`Code`](../modules/verida_client_ts._internal_.md#code)

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/index.d.ts:31

___

### evaluated

• `Optional` **evaluated**: [`Name`](../classes/verida_client_ts._internal_.Name.md)

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/index.d.ts:23

___

### gen

• `Readonly` **gen**: [`CodeGen`](../classes/verida_client_ts._internal_.CodeGen.md)

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/index.d.ts:11

___

### items

• `Optional` **items**: [`Name`](../classes/verida_client_ts._internal_.Name.md) \| [`EvaluatedItems`](../modules/verida_client_ts._internal_.md#evaluateditems)

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/index.d.ts:35

___

### jtdDiscriminator

• `Optional` **jtdDiscriminator**: `string`

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/index.d.ts:36

___

### jtdMetadata

• `Optional` **jtdMetadata**: `boolean`

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/index.d.ts:37

___

### opts

• `Readonly` **opts**: [`InstanceOptions`](../modules/verida_client_ts._internal_.md#instanceoptions)

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/index.d.ts:39

___

### parentData

• `Readonly` **parentData**: [`Name`](../classes/verida_client_ts._internal_.Name.md)

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/index.d.ts:14

___

### parentDataProperty

• `Readonly` **parentDataProperty**: `number` \| [`Code`](../modules/verida_client_ts._internal_.md#code)

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/index.d.ts:15

___

### propertyName

• `Optional` `Readonly` **propertyName**: [`Name`](../classes/verida_client_ts._internal_.Name.md)

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/index.d.ts:32

___

### props

• `Optional` **props**: [`Name`](../classes/verida_client_ts._internal_.Name.md) \| [`EvaluatedProperties`](../modules/verida_client_ts._internal_.md#evaluatedproperties)

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/index.d.ts:34

___

### rootId

• `Readonly` **rootId**: `string`

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/index.d.ts:27

___

### schema

• `Readonly` **schema**: [`AnySchema`](../modules/verida_client_ts._internal_.md#anyschema)

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/index.d.ts:25

___

### schemaEnv

• `Readonly` **schemaEnv**: [`SchemaEnv`](../classes/verida_client_ts._internal_.SchemaEnv.md)

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/index.d.ts:26

___

### schemaPath

• `Readonly` **schemaPath**: [`Code`](../modules/verida_client_ts._internal_.md#code)

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/index.d.ts:29

___

### self

• `Readonly` **self**: [`default`](../classes/verida_client_ts._internal_.default-3.md)

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/index.d.ts:40

___

### topSchemaRef

• `Readonly` **topSchemaRef**: [`Code`](../modules/verida_client_ts._internal_.md#code)

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/index.d.ts:21

___

### validateName

• `Readonly` **validateName**: [`Name`](../classes/verida_client_ts._internal_.Name.md)

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/index.d.ts:22
