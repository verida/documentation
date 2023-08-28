[root](../README.md) / [Modules](../modules.md) / [@verida/vda-sbt-client](../modules/verida_vda_sbt_client.md) / [<internal\>](../modules/verida_vda_sbt_client._internal_.md) / Coder

# Class: Coder

[@verida/vda-sbt-client](../modules/verida_vda_sbt_client.md).[<internal\>](../modules/verida_vda_sbt_client._internal_.md).Coder

## Table of contents

### Constructors

- [constructor](verida_vda_sbt_client._internal_.Coder.md#constructor)

### Properties

- [dynamic](verida_vda_sbt_client._internal_.Coder.md#dynamic)
- [localName](verida_vda_sbt_client._internal_.Coder.md#localname)
- [name](verida_vda_sbt_client._internal_.Coder.md#name)
- [type](verida_vda_sbt_client._internal_.Coder.md#type)

### Methods

- [\_throwError](verida_vda_sbt_client._internal_.Coder.md#_throwerror)
- [decode](verida_vda_sbt_client._internal_.Coder.md#decode)
- [defaultValue](verida_vda_sbt_client._internal_.Coder.md#defaultvalue)
- [encode](verida_vda_sbt_client._internal_.Coder.md#encode)

## Constructors

### constructor

• **new Coder**(`name`, `type`, `localName`, `dynamic`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `type` | `string` |
| `localName` | `string` |
| `dynamic` | `boolean` |

#### Defined in

node_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:16

## Properties

### dynamic

• `Readonly` **dynamic**: `boolean`

#### Defined in

node_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:15

___

### localName

• `Readonly` **localName**: `string`

#### Defined in

node_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:14

___

### name

• `Readonly` **name**: `string`

#### Defined in

node_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:12

___

### type

• `Readonly` **type**: `string`

#### Defined in

node_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:13

## Methods

### \_throwError

▸ **_throwError**(`message`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `value` | `any` |

#### Returns

`void`

#### Defined in

node_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:17

___

### decode

▸ `Abstract` **decode**(`reader`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `reader` | [`Reader`](verida_vda_sbt_client._internal_.Reader.md) |

#### Returns

`any`

#### Defined in

node_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:19

___

### defaultValue

▸ `Abstract` **defaultValue**(): `any`

#### Returns

`any`

#### Defined in

node_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:20

___

### encode

▸ `Abstract` **encode**(`writer`, `value`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `writer` | [`Writer`](verida_vda_sbt_client._internal_.Writer.md) |
| `value` | `any` |

#### Returns

`number`

#### Defined in

node_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:18
