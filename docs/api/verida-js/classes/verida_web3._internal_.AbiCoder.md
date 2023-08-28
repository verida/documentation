[root](../README.md) / [Modules](../modules.md) / [@verida/web3](../modules/verida_web3.md) / [<internal\>](../modules/verida_web3._internal_.md) / AbiCoder

# Class: AbiCoder

[@verida/web3](../modules/verida_web3.md).[<internal\>](../modules/verida_web3._internal_.md).AbiCoder

## Table of contents

### Constructors

- [constructor](verida_web3._internal_.AbiCoder.md#constructor)

### Properties

- [coerceFunc](verida_web3._internal_.AbiCoder.md#coercefunc)

### Methods

- [\_getCoder](verida_web3._internal_.AbiCoder.md#_getcoder)
- [\_getReader](verida_web3._internal_.AbiCoder.md#_getreader)
- [\_getWordSize](verida_web3._internal_.AbiCoder.md#_getwordsize)
- [\_getWriter](verida_web3._internal_.AbiCoder.md#_getwriter)
- [decode](verida_web3._internal_.AbiCoder.md#decode)
- [encode](verida_web3._internal_.AbiCoder.md#encode)
- [getDefaultValue](verida_web3._internal_.AbiCoder.md#getdefaultvalue)

## Constructors

### constructor

• **new AbiCoder**(`coerceFunc?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `coerceFunc?` | [`CoerceFunc`](../modules/verida_web3._internal_.md#coercefunc) |

#### Defined in

node_modules/@ethersproject/abi/lib/abi-coder.d.ts:7

## Properties

### coerceFunc

• `Readonly` **coerceFunc**: [`CoerceFunc`](../modules/verida_web3._internal_.md#coercefunc)

#### Defined in

node_modules/@ethersproject/abi/lib/abi-coder.d.ts:6

## Methods

### \_getCoder

▸ **_getCoder**(`param`): [`Coder`](verida_web3._internal_.Coder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `param` | [`ParamType`](verida_web3._internal_.ParamType.md) |

#### Returns

[`Coder`](verida_web3._internal_.Coder.md)

#### Defined in

node_modules/@ethersproject/abi/lib/abi-coder.d.ts:8

___

### \_getReader

▸ **_getReader**(`data`, `allowLoose?`): [`Reader`](verida_web3._internal_.Reader.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Uint8Array` |
| `allowLoose?` | `boolean` |

#### Returns

[`Reader`](verida_web3._internal_.Reader.md)

#### Defined in

node_modules/@ethersproject/abi/lib/abi-coder.d.ts:10

___

### \_getWordSize

▸ **_getWordSize**(): `number`

#### Returns

`number`

#### Defined in

node_modules/@ethersproject/abi/lib/abi-coder.d.ts:9

___

### \_getWriter

▸ **_getWriter**(): [`Writer`](verida_web3._internal_.Writer.md)

#### Returns

[`Writer`](verida_web3._internal_.Writer.md)

#### Defined in

node_modules/@ethersproject/abi/lib/abi-coder.d.ts:11

___

### decode

▸ **decode**(`types`, `data`, `loose?`): [`Result`](../interfaces/verida_web3._internal_.Result.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `types` | readonly (`string` \| [`ParamType`](verida_web3._internal_.ParamType.md))[] |
| `data` | [`BytesLike`](../modules/verida_web3._internal_.md#byteslike) |
| `loose?` | `boolean` |

#### Returns

[`Result`](../interfaces/verida_web3._internal_.Result.md)

#### Defined in

node_modules/@ethersproject/abi/lib/abi-coder.d.ts:14

___

### encode

▸ **encode**(`types`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `types` | readonly (`string` \| [`ParamType`](verida_web3._internal_.ParamType.md))[] |
| `values` | readonly `any`[] |

#### Returns

`string`

#### Defined in

node_modules/@ethersproject/abi/lib/abi-coder.d.ts:13

___

### getDefaultValue

▸ **getDefaultValue**(`types`): [`Result`](../interfaces/verida_web3._internal_.Result.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `types` | readonly (`string` \| [`ParamType`](verida_web3._internal_.ParamType.md))[] |

#### Returns

[`Result`](../interfaces/verida_web3._internal_.Result.md)

#### Defined in

node_modules/@ethersproject/abi/lib/abi-coder.d.ts:12
