[root](../README.md) / [Modules](../modules.md) / [@verida/web-helpers](../modules/verida_web_helpers.md) / [<internal\>](../modules/verida_web_helpers._internal_.md) / SchemaEnv

# Class: SchemaEnv

[@verida/web-helpers](../modules/verida_web_helpers.md).[<internal\>](../modules/verida_web_helpers._internal_.md).SchemaEnv

## Implements

- [`SchemaEnvArgs`](../interfaces/verida_web_helpers._internal_.SchemaEnvArgs.md)

## Table of contents

### Constructors

- [constructor](verida_web_helpers._internal_.SchemaEnv.md#constructor)

### Properties

- [$async](verida_web_helpers._internal_.SchemaEnv.md#$async)
- [baseId](verida_web_helpers._internal_.SchemaEnv.md#baseid)
- [dynamicAnchors](verida_web_helpers._internal_.SchemaEnv.md#dynamicanchors)
- [localRefs](verida_web_helpers._internal_.SchemaEnv.md#localrefs)
- [meta](verida_web_helpers._internal_.SchemaEnv.md#meta)
- [parse](verida_web_helpers._internal_.SchemaEnv.md#parse)
- [parseName](verida_web_helpers._internal_.SchemaEnv.md#parsename)
- [refs](verida_web_helpers._internal_.SchemaEnv.md#refs)
- [root](verida_web_helpers._internal_.SchemaEnv.md#root)
- [schema](verida_web_helpers._internal_.SchemaEnv.md#schema)
- [schemaId](verida_web_helpers._internal_.SchemaEnv.md#schemaid)
- [schemaPath](verida_web_helpers._internal_.SchemaEnv.md#schemapath)
- [serialize](verida_web_helpers._internal_.SchemaEnv.md#serialize)
- [serializeName](verida_web_helpers._internal_.SchemaEnv.md#serializename)
- [validate](verida_web_helpers._internal_.SchemaEnv.md#validate)
- [validateName](verida_web_helpers._internal_.SchemaEnv.md#validatename)

## Constructors

### constructor

• **new SchemaEnv**(`env`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `env` | [`SchemaEnvArgs`](../interfaces/verida_web_helpers._internal_.SchemaEnvArgs.md) |

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/index.d.ts:73

## Properties

### $async

• `Optional` `Readonly` **$async**: `boolean`

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/index.d.ts:62

___

### baseId

• **baseId**: `string`

#### Implementation of

[SchemaEnvArgs](../interfaces/verida_web_helpers._internal_.SchemaEnvArgs.md).[baseId](../interfaces/verida_web_helpers._internal_.SchemaEnvArgs.md#baseid)

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/index.d.ts:58

___

### dynamicAnchors

• `Readonly` **dynamicAnchors**: `Object`

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/index.d.ts:64

___

### localRefs

• `Optional` **localRefs**: [`LocalRefs`](../modules/verida_web_helpers._internal_.md#localrefs)

#### Implementation of

[SchemaEnvArgs](../interfaces/verida_web_helpers._internal_.SchemaEnvArgs.md).[localRefs](../interfaces/verida_web_helpers._internal_.SchemaEnvArgs.md#localrefs)

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/index.d.ts:60

___

### meta

• `Optional` `Readonly` **meta**: `boolean`

#### Implementation of

[SchemaEnvArgs](../interfaces/verida_web_helpers._internal_.SchemaEnvArgs.md).[meta](../interfaces/verida_web_helpers._internal_.SchemaEnvArgs.md#meta)

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/index.d.ts:61

___

### parse

• `Optional` **parse**: (`data`: `string`) => `unknown`

#### Type declaration

▸ (`data`): `unknown`

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` |

##### Returns

`unknown`

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/index.d.ts:71

___

### parseName

• `Optional` **parseName**: [`ValueScopeName`](verida_web_helpers._internal_.ValueScopeName.md)

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/index.d.ts:72

___

### refs

• `Readonly` **refs**: [`SchemaRefs`](../modules/verida_web_helpers._internal_.md#schemarefs)

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/index.d.ts:63

___

### root

• `Readonly` **root**: [`SchemaEnv`](verida_web_helpers._internal_.SchemaEnv.md)

#### Implementation of

[SchemaEnvArgs](../interfaces/verida_web_helpers._internal_.SchemaEnvArgs.md).[root](../interfaces/verida_web_helpers._internal_.SchemaEnvArgs.md#root)

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/index.d.ts:57

___

### schema

• `Readonly` **schema**: [`AnySchema`](../modules/verida_web_helpers._internal_.md#anyschema)

#### Implementation of

[SchemaEnvArgs](../interfaces/verida_web_helpers._internal_.SchemaEnvArgs.md).[schema](../interfaces/verida_web_helpers._internal_.SchemaEnvArgs.md#schema)

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/index.d.ts:55

___

### schemaId

• `Optional` `Readonly` **schemaId**: ``"id"`` \| ``"$id"``

#### Implementation of

[SchemaEnvArgs](../interfaces/verida_web_helpers._internal_.SchemaEnvArgs.md).[schemaId](../interfaces/verida_web_helpers._internal_.SchemaEnvArgs.md#schemaid)

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/index.d.ts:56

___

### schemaPath

• `Optional` **schemaPath**: `string`

#### Implementation of

[SchemaEnvArgs](../interfaces/verida_web_helpers._internal_.SchemaEnvArgs.md).[schemaPath](../interfaces/verida_web_helpers._internal_.SchemaEnvArgs.md#schemapath)

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/index.d.ts:59

___

### serialize

• `Optional` **serialize**: (`data`: `unknown`) => `string`

#### Type declaration

▸ (`data`): `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |

##### Returns

`string`

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/index.d.ts:69

___

### serializeName

• `Optional` **serializeName**: [`ValueScopeName`](verida_web_helpers._internal_.ValueScopeName.md)

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/index.d.ts:70

___

### validate

• `Optional` **validate**: [`AnyValidateFunction`](../modules/verida_web_helpers._internal_.md#anyvalidatefunction)<`any`\>

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/index.d.ts:67

___

### validateName

• `Optional` **validateName**: [`ValueScopeName`](verida_web_helpers._internal_.ValueScopeName.md)

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/index.d.ts:68
