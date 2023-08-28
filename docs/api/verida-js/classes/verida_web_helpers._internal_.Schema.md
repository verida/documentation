[root](../README.md) / [Modules](../modules.md) / [@verida/web-helpers](../modules/verida_web_helpers.md) / [<internal\>](../modules/verida_web_helpers._internal_.md) / Schema

# Class: Schema

[@verida/web-helpers](../modules/verida_web_helpers.md).[<internal\>](../modules/verida_web_helpers._internal_.md).Schema

## Implements

- [`ISchema`](../interfaces/verida_web_helpers._internal_.ISchema.md)

## Table of contents

### Constructors

- [constructor](verida_web_helpers._internal_.Schema.md#constructor)

### Properties

- [ajv](verida_web_helpers._internal_.Schema.md#ajv)
- [errors](verida_web_helpers._internal_.Schema.md#errors)
- [finalPath](verida_web_helpers._internal_.Schema.md#finalpath)
- [path](verida_web_helpers._internal_.Schema.md#path)
- [schemaJson](verida_web_helpers._internal_.Schema.md#schemajson)
- [specification](verida_web_helpers._internal_.Schema.md#specification)
- [validateFunction](verida_web_helpers._internal_.Schema.md#validatefunction)
- [schemaPaths](verida_web_helpers._internal_.Schema.md#schemapaths)
- [schemas](verida_web_helpers._internal_.Schema.md#schemas)

### Methods

- [getAppearance](verida_web_helpers._internal_.Schema.md#getappearance)
- [getPath](verida_web_helpers._internal_.Schema.md#getpath)
- [getSchemaJson](verida_web_helpers._internal_.Schema.md#getschemajson)
- [getSpecification](verida_web_helpers._internal_.Schema.md#getspecification)
- [validate](verida_web_helpers._internal_.Schema.md#validate)
- [getSchema](verida_web_helpers._internal_.Schema.md#getschema)
- [getSchemaPaths](verida_web_helpers._internal_.Schema.md#getschemapaths)
- [getVersionlessSchemaName](verida_web_helpers._internal_.Schema.md#getversionlessschemaname)
- [loadJson](verida_web_helpers._internal_.Schema.md#loadjson)
- [resolvePath](verida_web_helpers._internal_.Schema.md#resolvepath)
- [setSchemaPaths](verida_web_helpers._internal_.Schema.md#setschemapaths)

## Constructors

### constructor

• **new Schema**(`path`, `options?`)

An object representation of a JSON Schema.

**Do not instantiate directly.**

Access via {@link App#getSchema}

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | Path to a schema in the form (http://..../schema.json, /schemas/name/schema.json, name/of/schema) |
| `options?` | `any` | - |

#### Defined in

packages/client-ts/dist/context/schema.d.ts:26

## Properties

### ajv

• `Protected` **ajv**: [`Ajv2020`](verida_web_helpers._internal_.Ajv2020.md)

#### Defined in

packages/client-ts/dist/context/schema.d.ts:10

___

### errors

• **errors**: `string`[]

#### Implementation of

[ISchema](../interfaces/verida_web_helpers._internal_.ISchema.md).[errors](../interfaces/verida_web_helpers._internal_.ISchema.md#errors)

#### Defined in

packages/client-ts/dist/context/schema.d.ts:8

___

### finalPath

• `Protected` `Optional` **finalPath**: `string`

#### Defined in

packages/client-ts/dist/context/schema.d.ts:12

___

### path

• `Protected` **path**: `string`

#### Defined in

packages/client-ts/dist/context/schema.d.ts:9

___

### schemaJson

• `Protected` `Optional` **schemaJson**: `object`

#### Defined in

packages/client-ts/dist/context/schema.d.ts:11

___

### specification

• `Protected` `Optional` **specification**: `any`

#### Defined in

packages/client-ts/dist/context/schema.d.ts:13

___

### validateFunction

• `Protected` `Optional` **validateFunction**: `any`

#### Defined in

packages/client-ts/dist/context/schema.d.ts:14

___

### schemaPaths

▪ `Static` `Protected` `Optional` **schemaPaths**: [`Record`](../modules/verida_web_helpers._internal_.md#record)<`string`, `string`\>

#### Defined in

packages/client-ts/dist/context/schema.d.ts:15

___

### schemas

▪ `Static` `Protected` **schemas**: `any`

#### Defined in

packages/client-ts/dist/context/schema.d.ts:16

## Methods

### getAppearance

▸ **getAppearance**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Implementation of

[ISchema](../interfaces/verida_web_helpers._internal_.ISchema.md).[getAppearance](../interfaces/verida_web_helpers._internal_.ISchema.md#getappearance)

#### Defined in

packages/client-ts/dist/context/schema.d.ts:53

___

### getPath

▸ `Protected` **getPath**(): `Promise`<`string`\>

Get a rully resolveable path for a URL

Handle shortened paths:
 - `health/activity` -> `https://common.schemas.verida.io/health/activity/latest/schema.json`
 - `https://common/schemas.verida.io/health/activity/latest` -> `https://common.schemas.verida.io/health/activity/latest/schema.json`
 - `/health/activity/test.json` -> `https://common/schemas.verida.io/health/activity/test.json`

#### Returns

`Promise`<`string`\>

#### Defined in

packages/client-ts/dist/context/schema.d.ts:62

___

### getSchemaJson

▸ **getSchemaJson**(): `Promise`<`object`\>

Fetch unresolved JSON schema

#### Returns

`Promise`<`object`\>

#### Implementation of

[ISchema](../interfaces/verida_web_helpers._internal_.ISchema.md).[getSchemaJson](../interfaces/verida_web_helpers._internal_.ISchema.md#getschemajson)

#### Defined in

packages/client-ts/dist/context/schema.d.ts:52

___

### getSpecification

▸ **getSpecification**(): `Promise`<`any`\>

**`todo:`** Deprecate in favour of `getProperties()`
Get an object that represents the JSON Schema. Fully resolved.
Warning: This can cause issues with very large schemas.

**`example`**
let schemaDoc = await app.getSchema("social/contact");
let spec = schemaDoc.getSpecification();
console.log(spec);

#### Returns

`Promise`<`any`\>

JSON object representing the defereferenced schema

#### Implementation of

[ISchema](../interfaces/verida_web_helpers._internal_.ISchema.md).[getSpecification](../interfaces/verida_web_helpers._internal_.ISchema.md#getspecification)

#### Defined in

packages/client-ts/dist/context/schema.d.ts:41

___

### validate

▸ **validate**(`data`): `Promise`<`boolean`\>

Validate a data object with this schema, using AJV

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`Promise`<`boolean`\>

True if the data validates against the schema.

#### Implementation of

[ISchema](../interfaces/verida_web_helpers._internal_.ISchema.md).[validate](../interfaces/verida_web_helpers._internal_.ISchema.md#validate)

#### Defined in

packages/client-ts/dist/context/schema.d.ts:48

___

### getSchema

▸ `Static` **getSchema**(`schemaName`): `Promise`<[`Schema`](verida_web_helpers._internal_.Schema.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `schemaName` | `string` |

#### Returns

`Promise`<[`Schema`](verida_web_helpers._internal_.Schema.md)\>

#### Defined in

packages/client-ts/dist/context/schema.d.ts:27

___

### getSchemaPaths

▸ `Static` **getSchemaPaths**(): [`Record`](../modules/verida_web_helpers._internal_.md#record)<`string`, `string`\>

#### Returns

[`Record`](../modules/verida_web_helpers._internal_.md#record)<`string`, `string`\>

#### Defined in

packages/client-ts/dist/context/schema.d.ts:29

___

### getVersionlessSchemaName

▸ `Static` **getVersionlessSchemaName**(`schemaName`): `string`

Checks a version specified in schemaName

SchemaName example  :-  https://core.schemas.verida.io/base/v0.1.0/schema.json
SchemaName format :- https://{protocol-name}/{name}/{v}{version}/name.json

#### Parameters

| Name | Type |
| :------ | :------ |
| `schemaName` | `string` |

#### Returns

`string`

schemaName without the version

#### Defined in

packages/client-ts/dist/context/schema.d.ts:84

___

### loadJson

▸ `Static` **loadJson**(`uri`): `Promise`<`object`\>

Load JSON from a url that is fully resolved.

Used by AJV.

#### Parameters

| Name | Type |
| :------ | :------ |
| `uri` | `string` |

#### Returns

`Promise`<`object`\>

#### Defined in

packages/client-ts/dist/context/schema.d.ts:75

___

### resolvePath

▸ `Static` **resolvePath**(`uri`): `Promise`<`string`\>

Force schema paths to be applied to URLs

#### Parameters

| Name | Type |
| :------ | :------ |
| `uri` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

packages/client-ts/dist/context/schema.d.ts:67

___

### setSchemaPaths

▸ `Static` **setSchemaPaths**(`schemaPaths`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `schemaPaths` | [`Record`](../modules/verida_web_helpers._internal_.md#record)<`string`, `string`\> |

#### Returns

`void`

#### Defined in

packages/client-ts/dist/context/schema.d.ts:28
