[root](../README.md) / [Modules](../modules.md) / [@verida/vda-sbt-client](../modules/verida_vda_sbt_client.md) / [<internal\>](../modules/verida_vda_sbt_client._internal_.md) / Reader

# Class: Reader

[@verida/vda-sbt-client](../modules/verida_vda_sbt_client.md).[<internal\>](../modules/verida_vda_sbt_client._internal_.md).Reader

## Table of contents

### Constructors

- [constructor](verida_vda_sbt_client._internal_.Reader.md#constructor)

### Properties

- [\_coerceFunc](verida_vda_sbt_client._internal_.Reader.md#_coercefunc)
- [\_data](verida_vda_sbt_client._internal_.Reader.md#_data)
- [\_offset](verida_vda_sbt_client._internal_.Reader.md#_offset)
- [allowLoose](verida_vda_sbt_client._internal_.Reader.md#allowloose)
- [wordSize](verida_vda_sbt_client._internal_.Reader.md#wordsize)

### Accessors

- [consumed](verida_vda_sbt_client._internal_.Reader.md#consumed)
- [data](verida_vda_sbt_client._internal_.Reader.md#data)

### Methods

- [\_peekBytes](verida_vda_sbt_client._internal_.Reader.md#_peekbytes)
- [coerce](verida_vda_sbt_client._internal_.Reader.md#coerce)
- [readBytes](verida_vda_sbt_client._internal_.Reader.md#readbytes)
- [readValue](verida_vda_sbt_client._internal_.Reader.md#readvalue)
- [subReader](verida_vda_sbt_client._internal_.Reader.md#subreader)
- [coerce](verida_vda_sbt_client._internal_.Reader.md#coerce)

## Constructors

### constructor

• **new Reader**(`data`, `wordSize?`, `coerceFunc?`, `allowLoose?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`BytesLike`](../modules/verida_vda_sbt_client._internal_.md#byteslike) |
| `wordSize?` | `number` |
| `coerceFunc?` | [`CoerceFunc`](../modules/verida_vda_sbt_client._internal_.md#coercefunc) |
| `allowLoose?` | `boolean` |

#### Defined in

node_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:43

## Properties

### \_coerceFunc

• `Readonly` **\_coerceFunc**: [`CoerceFunc`](../modules/verida_vda_sbt_client._internal_.md#coercefunc)

#### Defined in

node_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:41

___

### \_data

• `Readonly` **\_data**: `Uint8Array`

#### Defined in

node_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:40

___

### \_offset

• **\_offset**: `number`

#### Defined in

node_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:42

___

### allowLoose

• `Readonly` **allowLoose**: `boolean`

#### Defined in

node_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:39

___

### wordSize

• `Readonly` **wordSize**: `number`

#### Defined in

node_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:38

## Accessors

### consumed

• `get` **consumed**(): `number`

#### Returns

`number`

#### Defined in

node_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:45

___

### data

• `get` **data**(): `string`

#### Returns

`string`

#### Defined in

node_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:44

## Methods

### \_peekBytes

▸ **_peekBytes**(`offset`, `length`, `loose?`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `offset` | `number` |
| `length` | `number` |
| `loose?` | `boolean` |

#### Returns

`Uint8Array`

#### Defined in

node_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:48

___

### coerce

▸ **coerce**(`name`, `value`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `any` |

#### Returns

`any`

#### Defined in

node_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:47

___

### readBytes

▸ **readBytes**(`length`, `loose?`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `length` | `number` |
| `loose?` | `boolean` |

#### Returns

`Uint8Array`

#### Defined in

node_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:50

___

### readValue

▸ **readValue**(): [`BigNumber`](verida_vda_sbt_client._internal_.BigNumber.md)

#### Returns

[`BigNumber`](verida_vda_sbt_client._internal_.BigNumber.md)

#### Defined in

node_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:51

___

### subReader

▸ **subReader**(`offset`): [`Reader`](verida_vda_sbt_client._internal_.Reader.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `offset` | `number` |

#### Returns

[`Reader`](verida_vda_sbt_client._internal_.Reader.md)

#### Defined in

node_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:49

___

### coerce

▸ `Static` **coerce**(`name`, `value`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `any` |

#### Returns

`any`

#### Defined in

node_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:46
