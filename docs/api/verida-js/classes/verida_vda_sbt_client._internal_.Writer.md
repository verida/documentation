[root](../README.md) / [Modules](../modules.md) / [@verida/vda-sbt-client](../modules/verida_vda_sbt_client.md) / [<internal\>](../modules/verida_vda_sbt_client._internal_.md) / Writer

# Class: Writer

[@verida/vda-sbt-client](../modules/verida_vda_sbt_client.md).[<internal\>](../modules/verida_vda_sbt_client._internal_.md).Writer

## Table of contents

### Constructors

- [constructor](verida_vda_sbt_client._internal_.Writer.md#constructor)

### Properties

- [\_data](verida_vda_sbt_client._internal_.Writer.md#_data)
- [\_dataLength](verida_vda_sbt_client._internal_.Writer.md#_datalength)
- [\_padding](verida_vda_sbt_client._internal_.Writer.md#_padding)
- [wordSize](verida_vda_sbt_client._internal_.Writer.md#wordsize)

### Accessors

- [data](verida_vda_sbt_client._internal_.Writer.md#data)
- [length](verida_vda_sbt_client._internal_.Writer.md#length)

### Methods

- [\_getValue](verida_vda_sbt_client._internal_.Writer.md#_getvalue)
- [\_writeData](verida_vda_sbt_client._internal_.Writer.md#_writedata)
- [appendWriter](verida_vda_sbt_client._internal_.Writer.md#appendwriter)
- [writeBytes](verida_vda_sbt_client._internal_.Writer.md#writebytes)
- [writeUpdatableValue](verida_vda_sbt_client._internal_.Writer.md#writeupdatablevalue)
- [writeValue](verida_vda_sbt_client._internal_.Writer.md#writevalue)

## Constructors

### constructor

• **new Writer**(`wordSize?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `wordSize?` | `number` |

#### Defined in

node_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:27

## Properties

### \_data

• **\_data**: `Uint8Array`[]

#### Defined in

node_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:24

___

### \_dataLength

• **\_dataLength**: `number`

#### Defined in

node_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:25

___

### \_padding

• **\_padding**: `Uint8Array`

#### Defined in

node_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:26

___

### wordSize

• `Readonly` **wordSize**: `number`

#### Defined in

node_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:23

## Accessors

### data

• `get` **data**(): `string`

#### Returns

`string`

#### Defined in

node_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:28

___

### length

• `get` **length**(): `number`

#### Returns

`number`

#### Defined in

node_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:29

## Methods

### \_getValue

▸ **_getValue**(`value`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`BigNumberish`](../modules/verida_vda_sbt_client._internal_.md#bignumberish) |

#### Returns

`Uint8Array`

#### Defined in

node_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:33

___

### \_writeData

▸ **_writeData**(`data`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Uint8Array` |

#### Returns

`number`

#### Defined in

node_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:30

___

### appendWriter

▸ **appendWriter**(`writer`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `writer` | [`Writer`](verida_vda_sbt_client._internal_.Writer.md) |

#### Returns

`number`

#### Defined in

node_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:31

___

### writeBytes

▸ **writeBytes**(`value`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`BytesLike`](../modules/verida_vda_sbt_client._internal_.md#byteslike) |

#### Returns

`number`

#### Defined in

node_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:32

___

### writeUpdatableValue

▸ **writeUpdatableValue**(): (`value`: [`BigNumberish`](../modules/verida_vda_sbt_client._internal_.md#bignumberish)) => `void`

#### Returns

`fn`

▸ (`value`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`BigNumberish`](../modules/verida_vda_sbt_client._internal_.md#bignumberish) |

##### Returns

`void`

#### Defined in

node_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:35

___

### writeValue

▸ **writeValue**(`value`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`BigNumberish`](../modules/verida_vda_sbt_client._internal_.md#bignumberish) |

#### Returns

`number`

#### Defined in

node_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:34
