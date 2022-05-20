[root](../README.md) / [Modules](../modules.md) / [@verida/verifiable-credentials](../modules/verida_verifiable_credentials.md) / [<internal\>](../modules/verida_verifiable_credentials._internal_.md) / SchemaValidateFunction

# Interface: SchemaValidateFunction

[@verida/verifiable-credentials](../modules/verida_verifiable_credentials.md).[<internal\>](../modules/verida_verifiable_credentials._internal_.md).SchemaValidateFunction

## Callable

### SchemaValidateFunction

▸ **SchemaValidateFunction**(`schema`, `data`, `parentSchema?`, `dataCxt?`): `boolean` \| `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | `any` |
| `data` | `any` |
| `parentSchema?` | [`AnySchemaObject`](../modules/verida_verifiable_credentials._internal_.md#anyschemaobject) |
| `dataCxt?` | [`DataValidationCxt`](verida_verifiable_credentials._internal_.DataValidationCxt.md)<`string` \| `number`\> |

#### Returns

`boolean` \| `Promise`<`any`\>

#### Defined in

node_modules/ajv/dist/types/index.d.ts:111

## Table of contents

### Properties

- [errors](verida_verifiable_credentials._internal_.SchemaValidateFunction.md#errors)

## Properties

### errors

• `Optional` **errors**: [`Partial`](../modules/verida_verifiable_credentials._internal_.md#partial)<[`ErrorObject`](verida_verifiable_credentials._internal_.ErrorObject.md)<`string`, [`Record`](../modules/verida_verifiable_credentials._internal_.md#record)<`string`, `any`\>, `unknown`\>\>[]

#### Defined in

node_modules/ajv/dist/types/index.d.ts:112
