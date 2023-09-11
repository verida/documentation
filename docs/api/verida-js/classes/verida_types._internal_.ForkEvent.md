[root](../README.md) / [Modules](../modules.md) / [@verida/types](../modules/verida_types.md) / [<internal\>](../modules/verida_types._internal_.md) / ForkEvent

# Class: ForkEvent

[@verida/types](../modules/verida_types.md).[<internal\>](../modules/verida_types._internal_.md).ForkEvent

## Hierarchy

- [`Description`](verida_types._internal_.Description.md)

  ↳ **`ForkEvent`**

## Table of contents

### Constructors

- [constructor](verida_types._internal_.ForkEvent.md#constructor)

### Properties

- [\_isForkEvent](verida_types._internal_.ForkEvent.md#_isforkevent)
- [expiry](verida_types._internal_.ForkEvent.md#expiry)

### Methods

- [isForkEvent](verida_types._internal_.ForkEvent.md#isforkevent)

## Constructors

### constructor

• **new ForkEvent**(`info`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `info` | `Object` |

#### Inherited from

[Description](verida_types._internal_.Description.md).[constructor](verida_types._internal_.Description.md#constructor)

#### Defined in

node_modules/@ethersproject/properties/lib/index.d.ts:13

## Properties

### \_isForkEvent

• `Optional` `Readonly` **\_isForkEvent**: `boolean`

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:103

___

### expiry

• `Readonly` **expiry**: `number`

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:102

## Methods

### isForkEvent

▸ `Static` **isForkEvent**(`value`): value is ForkEvent

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is ForkEvent

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:104