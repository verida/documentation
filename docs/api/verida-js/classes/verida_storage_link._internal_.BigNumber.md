[root](../README.md) / [Modules](../modules.md) / [@verida/storage-link](../modules/verida_storage_link.md) / [<internal\>](../modules/verida_storage_link._internal_.md) / BigNumber

# Class: BigNumber

[@verida/storage-link](../modules/verida_storage_link.md).[<internal\>](../modules/verida_storage_link._internal_.md).BigNumber

## Implements

- [`Hexable`](../interfaces/verida_storage_link._internal_.Hexable.md)

## Table of contents

### Constructors

- [constructor](verida_storage_link._internal_.BigNumber.md#constructor)

### Properties

- [\_hex](verida_storage_link._internal_.BigNumber.md#_hex)
- [\_isBigNumber](verida_storage_link._internal_.BigNumber.md#_isbignumber)

### Methods

- [abs](verida_storage_link._internal_.BigNumber.md#abs)
- [add](verida_storage_link._internal_.BigNumber.md#add)
- [and](verida_storage_link._internal_.BigNumber.md#and)
- [div](verida_storage_link._internal_.BigNumber.md#div)
- [eq](verida_storage_link._internal_.BigNumber.md#eq)
- [fromTwos](verida_storage_link._internal_.BigNumber.md#fromtwos)
- [gt](verida_storage_link._internal_.BigNumber.md#gt)
- [gte](verida_storage_link._internal_.BigNumber.md#gte)
- [isNegative](verida_storage_link._internal_.BigNumber.md#isnegative)
- [isZero](verida_storage_link._internal_.BigNumber.md#iszero)
- [lt](verida_storage_link._internal_.BigNumber.md#lt)
- [lte](verida_storage_link._internal_.BigNumber.md#lte)
- [mask](verida_storage_link._internal_.BigNumber.md#mask)
- [mod](verida_storage_link._internal_.BigNumber.md#mod)
- [mul](verida_storage_link._internal_.BigNumber.md#mul)
- [or](verida_storage_link._internal_.BigNumber.md#or)
- [pow](verida_storage_link._internal_.BigNumber.md#pow)
- [shl](verida_storage_link._internal_.BigNumber.md#shl)
- [shr](verida_storage_link._internal_.BigNumber.md#shr)
- [sub](verida_storage_link._internal_.BigNumber.md#sub)
- [toBigInt](verida_storage_link._internal_.BigNumber.md#tobigint)
- [toHexString](verida_storage_link._internal_.BigNumber.md#tohexstring)
- [toJSON](verida_storage_link._internal_.BigNumber.md#tojson)
- [toNumber](verida_storage_link._internal_.BigNumber.md#tonumber)
- [toString](verida_storage_link._internal_.BigNumber.md#tostring)
- [toTwos](verida_storage_link._internal_.BigNumber.md#totwos)
- [xor](verida_storage_link._internal_.BigNumber.md#xor)
- [from](verida_storage_link._internal_.BigNumber.md#from)
- [isBigNumber](verida_storage_link._internal_.BigNumber.md#isbignumber)

## Constructors

### constructor

• **new BigNumber**(`constructorGuard`, `hex`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `constructorGuard` | `any` |
| `hex` | `string` |

#### Defined in

node_modules/@ethersproject/bignumber/lib/bignumber.d.ts:7

## Properties

### \_hex

• `Readonly` **\_hex**: `string`

#### Defined in

node_modules/@ethersproject/bignumber/lib/bignumber.d.ts:5

___

### \_isBigNumber

• `Readonly` **\_isBigNumber**: `boolean`

#### Defined in

node_modules/@ethersproject/bignumber/lib/bignumber.d.ts:6

## Methods

### abs

▸ **abs**(): [`BigNumber`](verida_storage_link._internal_.BigNumber.md)

#### Returns

[`BigNumber`](verida_storage_link._internal_.BigNumber.md)

#### Defined in

node_modules/@ethersproject/bignumber/lib/bignumber.d.ts:10

___

### add

▸ **add**(`other`): [`BigNumber`](verida_storage_link._internal_.BigNumber.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`BigNumberish`](../modules/verida_storage_link._internal_.md#bignumberish) |

#### Returns

[`BigNumber`](verida_storage_link._internal_.BigNumber.md)

#### Defined in

node_modules/@ethersproject/bignumber/lib/bignumber.d.ts:11

___

### and

▸ **and**(`other`): [`BigNumber`](verida_storage_link._internal_.BigNumber.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`BigNumberish`](../modules/verida_storage_link._internal_.md#bignumberish) |

#### Returns

[`BigNumber`](verida_storage_link._internal_.BigNumber.md)

#### Defined in

node_modules/@ethersproject/bignumber/lib/bignumber.d.ts:17

___

### div

▸ **div**(`other`): [`BigNumber`](verida_storage_link._internal_.BigNumber.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`BigNumberish`](../modules/verida_storage_link._internal_.md#bignumberish) |

#### Returns

[`BigNumber`](verida_storage_link._internal_.BigNumber.md)

#### Defined in

node_modules/@ethersproject/bignumber/lib/bignumber.d.ts:13

___

### eq

▸ **eq**(`other`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`BigNumberish`](../modules/verida_storage_link._internal_.md#bignumberish) |

#### Returns

`boolean`

#### Defined in

node_modules/@ethersproject/bignumber/lib/bignumber.d.ts:23

___

### fromTwos

▸ **fromTwos**(`value`): [`BigNumber`](verida_storage_link._internal_.BigNumber.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

[`BigNumber`](verida_storage_link._internal_.BigNumber.md)

#### Defined in

node_modules/@ethersproject/bignumber/lib/bignumber.d.ts:8

___

### gt

▸ **gt**(`other`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`BigNumberish`](../modules/verida_storage_link._internal_.md#bignumberish) |

#### Returns

`boolean`

#### Defined in

node_modules/@ethersproject/bignumber/lib/bignumber.d.ts:26

___

### gte

▸ **gte**(`other`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`BigNumberish`](../modules/verida_storage_link._internal_.md#bignumberish) |

#### Returns

`boolean`

#### Defined in

node_modules/@ethersproject/bignumber/lib/bignumber.d.ts:27

___

### isNegative

▸ **isNegative**(): `boolean`

#### Returns

`boolean`

#### Defined in

node_modules/@ethersproject/bignumber/lib/bignumber.d.ts:28

___

### isZero

▸ **isZero**(): `boolean`

#### Returns

`boolean`

#### Defined in

node_modules/@ethersproject/bignumber/lib/bignumber.d.ts:29

___

### lt

▸ **lt**(`other`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`BigNumberish`](../modules/verida_storage_link._internal_.md#bignumberish) |

#### Returns

`boolean`

#### Defined in

node_modules/@ethersproject/bignumber/lib/bignumber.d.ts:24

___

### lte

▸ **lte**(`other`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`BigNumberish`](../modules/verida_storage_link._internal_.md#bignumberish) |

#### Returns

`boolean`

#### Defined in

node_modules/@ethersproject/bignumber/lib/bignumber.d.ts:25

___

### mask

▸ **mask**(`value`): [`BigNumber`](verida_storage_link._internal_.BigNumber.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

[`BigNumber`](verida_storage_link._internal_.BigNumber.md)

#### Defined in

node_modules/@ethersproject/bignumber/lib/bignumber.d.ts:20

___

### mod

▸ **mod**(`other`): [`BigNumber`](verida_storage_link._internal_.BigNumber.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`BigNumberish`](../modules/verida_storage_link._internal_.md#bignumberish) |

#### Returns

[`BigNumber`](verida_storage_link._internal_.BigNumber.md)

#### Defined in

node_modules/@ethersproject/bignumber/lib/bignumber.d.ts:15

___

### mul

▸ **mul**(`other`): [`BigNumber`](verida_storage_link._internal_.BigNumber.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`BigNumberish`](../modules/verida_storage_link._internal_.md#bignumberish) |

#### Returns

[`BigNumber`](verida_storage_link._internal_.BigNumber.md)

#### Defined in

node_modules/@ethersproject/bignumber/lib/bignumber.d.ts:14

___

### or

▸ **or**(`other`): [`BigNumber`](verida_storage_link._internal_.BigNumber.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`BigNumberish`](../modules/verida_storage_link._internal_.md#bignumberish) |

#### Returns

[`BigNumber`](verida_storage_link._internal_.BigNumber.md)

#### Defined in

node_modules/@ethersproject/bignumber/lib/bignumber.d.ts:18

___

### pow

▸ **pow**(`other`): [`BigNumber`](verida_storage_link._internal_.BigNumber.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`BigNumberish`](../modules/verida_storage_link._internal_.md#bignumberish) |

#### Returns

[`BigNumber`](verida_storage_link._internal_.BigNumber.md)

#### Defined in

node_modules/@ethersproject/bignumber/lib/bignumber.d.ts:16

___

### shl

▸ **shl**(`value`): [`BigNumber`](verida_storage_link._internal_.BigNumber.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

[`BigNumber`](verida_storage_link._internal_.BigNumber.md)

#### Defined in

node_modules/@ethersproject/bignumber/lib/bignumber.d.ts:21

___

### shr

▸ **shr**(`value`): [`BigNumber`](verida_storage_link._internal_.BigNumber.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

[`BigNumber`](verida_storage_link._internal_.BigNumber.md)

#### Defined in

node_modules/@ethersproject/bignumber/lib/bignumber.d.ts:22

___

### sub

▸ **sub**(`other`): [`BigNumber`](verida_storage_link._internal_.BigNumber.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`BigNumberish`](../modules/verida_storage_link._internal_.md#bignumberish) |

#### Returns

[`BigNumber`](verida_storage_link._internal_.BigNumber.md)

#### Defined in

node_modules/@ethersproject/bignumber/lib/bignumber.d.ts:12

___

### toBigInt

▸ **toBigInt**(): `bigint`

#### Returns

`bigint`

#### Defined in

node_modules/@ethersproject/bignumber/lib/bignumber.d.ts:31

___

### toHexString

▸ **toHexString**(): `string`

#### Returns

`string`

#### Implementation of

[Hexable](../interfaces/verida_storage_link._internal_.Hexable.md).[toHexString](../interfaces/verida_storage_link._internal_.Hexable.md#tohexstring)

#### Defined in

node_modules/@ethersproject/bignumber/lib/bignumber.d.ts:33

___

### toJSON

▸ **toJSON**(`key?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key?` | `string` |

#### Returns

`any`

#### Defined in

node_modules/@ethersproject/bignumber/lib/bignumber.d.ts:34

___

### toNumber

▸ **toNumber**(): `number`

#### Returns

`number`

#### Defined in

node_modules/@ethersproject/bignumber/lib/bignumber.d.ts:30

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

node_modules/@ethersproject/bignumber/lib/bignumber.d.ts:32

___

### toTwos

▸ **toTwos**(`value`): [`BigNumber`](verida_storage_link._internal_.BigNumber.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

[`BigNumber`](verida_storage_link._internal_.BigNumber.md)

#### Defined in

node_modules/@ethersproject/bignumber/lib/bignumber.d.ts:9

___

### xor

▸ **xor**(`other`): [`BigNumber`](verida_storage_link._internal_.BigNumber.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`BigNumberish`](../modules/verida_storage_link._internal_.md#bignumberish) |

#### Returns

[`BigNumber`](verida_storage_link._internal_.BigNumber.md)

#### Defined in

node_modules/@ethersproject/bignumber/lib/bignumber.d.ts:19

___

### from

▸ `Static` **from**(`value`): [`BigNumber`](verida_storage_link._internal_.BigNumber.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

[`BigNumber`](verida_storage_link._internal_.BigNumber.md)

#### Defined in

node_modules/@ethersproject/bignumber/lib/bignumber.d.ts:35

___

### isBigNumber

▸ `Static` **isBigNumber**(`value`): value is BigNumber

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is BigNumber

#### Defined in

node_modules/@ethersproject/bignumber/lib/bignumber.d.ts:36
