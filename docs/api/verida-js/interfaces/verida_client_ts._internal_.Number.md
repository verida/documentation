[root](../README.md) / [Modules](../modules.md) / [@verida/client-ts](../modules/verida_client_ts.md) / [<internal\>](../modules/verida_client_ts._internal_.md) / Number

# Interface: Number

[@verida/client-ts](../modules/verida_client_ts.md).[<internal\>](../modules/verida_client_ts._internal_.md).Number

## Table of contents

### Methods

- [toExponential](verida_client_ts._internal_.Number.md#toexponential)
- [toFixed](verida_client_ts._internal_.Number.md#tofixed)
- [toLocaleString](verida_client_ts._internal_.Number.md#tolocalestring)
- [toPrecision](verida_client_ts._internal_.Number.md#toprecision)
- [toString](verida_client_ts._internal_.Number.md#tostring)
- [valueOf](verida_client_ts._internal_.Number.md#valueof)

## Methods

### toExponential

▸ **toExponential**(`fractionDigits?`): `string`

Returns a string containing a number represented in exponential notation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fractionDigits?` | `number` | Number of digits after the decimal point. Must be in the range 0 - 20, inclusive. |

#### Returns

`string`

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:559

___

### toFixed

▸ **toFixed**(`fractionDigits?`): `string`

Returns a string representing a number in fixed-point notation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fractionDigits?` | `number` | Number of digits after the decimal point. Must be in the range 0 - 20, inclusive. |

#### Returns

`string`

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:553

___

### toLocaleString

▸ **toLocaleString**(`locales?`, `options?`): `string`

Converts a number to a string by using the current or specified locale.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `locales?` | `string` \| `string`[] | A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used. |
| `options?` | `NumberFormatOptions` | An object that contains one or more properties that specify comparison options. |

#### Returns

`string`

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:4412

___

### toPrecision

▸ **toPrecision**(`precision?`): `string`

Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `precision?` | `number` | Number of significant digits. Must be in the range 1 - 21, inclusive. |

#### Returns

`string`

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:565

___

### toString

▸ **toString**(`radix?`): `string`

Returns a string representation of an object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `radix?` | `number` | Specifies a radix for converting numeric values to strings. This value is only used for numbers. |

#### Returns

`string`

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:547

___

### valueOf

▸ **valueOf**(): `number`

Returns the primitive value of the specified object.

#### Returns

`number`

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:568
