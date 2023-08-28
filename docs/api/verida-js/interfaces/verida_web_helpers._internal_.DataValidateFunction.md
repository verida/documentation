[root](../README.md) / [Modules](../modules.md) / [@verida/web-helpers](../modules/verida_web_helpers.md) / [<internal\>](../modules/verida_web_helpers._internal_.md) / DataValidateFunction

# Interface: DataValidateFunction

[@verida/web-helpers](../modules/verida_web_helpers.md).[<internal\>](../modules/verida_web_helpers._internal_.md).DataValidateFunction

## Callable

### DataValidateFunction

▸ **DataValidateFunction**(...`args`): `boolean` \| `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [data: any, dataCxt?: DataValidationCxt<string \| number\>] |

#### Returns

`boolean` \| `Promise`<`any`\>

#### Defined in

packages/client-ts/node_modules/ajv/dist/types/index.d.ts:107

## Table of contents

### Properties

- [errors](verida_web_helpers._internal_.DataValidateFunction.md#errors)

## Properties

### errors

• `Optional` **errors**: [`Partial`](../modules/verida_web_helpers._internal_.md#partial)<[`ErrorObject`](verida_web_helpers._internal_.ErrorObject.md)<`string`, [`Record`](../modules/verida_web_helpers._internal_.md#record)<`string`, `any`\>, `unknown`\>\>[]

#### Defined in

packages/client-ts/node_modules/ajv/dist/types/index.d.ts:108
