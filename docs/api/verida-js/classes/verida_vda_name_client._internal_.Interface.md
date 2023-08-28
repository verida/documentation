[root](../README.md) / [Modules](../modules.md) / [@verida/vda-name-client](../modules/verida_vda_name_client.md) / [<internal\>](../modules/verida_vda_name_client._internal_.md) / Interface

# Class: Interface

[@verida/vda-name-client](../modules/verida_vda_name_client.md).[<internal\>](../modules/verida_vda_name_client._internal_.md).Interface

## Table of contents

### Constructors

- [constructor](verida_vda_name_client._internal_.Interface.md#constructor)

### Properties

- [\_abiCoder](verida_vda_name_client._internal_.Interface.md#_abicoder)
- [\_isInterface](verida_vda_name_client._internal_.Interface.md#_isinterface)
- [deploy](verida_vda_name_client._internal_.Interface.md#deploy)
- [errors](verida_vda_name_client._internal_.Interface.md#errors)
- [events](verida_vda_name_client._internal_.Interface.md#events)
- [fragments](verida_vda_name_client._internal_.Interface.md#fragments)
- [functions](verida_vda_name_client._internal_.Interface.md#functions)
- [structs](verida_vda_name_client._internal_.Interface.md#structs)

### Methods

- [\_decodeParams](verida_vda_name_client._internal_.Interface.md#_decodeparams)
- [\_encodeParams](verida_vda_name_client._internal_.Interface.md#_encodeparams)
- [decodeErrorResult](verida_vda_name_client._internal_.Interface.md#decodeerrorresult)
- [decodeEventLog](verida_vda_name_client._internal_.Interface.md#decodeeventlog)
- [decodeFunctionData](verida_vda_name_client._internal_.Interface.md#decodefunctiondata)
- [decodeFunctionResult](verida_vda_name_client._internal_.Interface.md#decodefunctionresult)
- [encodeDeploy](verida_vda_name_client._internal_.Interface.md#encodedeploy)
- [encodeErrorResult](verida_vda_name_client._internal_.Interface.md#encodeerrorresult)
- [encodeEventLog](verida_vda_name_client._internal_.Interface.md#encodeeventlog)
- [encodeFilterTopics](verida_vda_name_client._internal_.Interface.md#encodefiltertopics)
- [encodeFunctionData](verida_vda_name_client._internal_.Interface.md#encodefunctiondata)
- [encodeFunctionResult](verida_vda_name_client._internal_.Interface.md#encodefunctionresult)
- [format](verida_vda_name_client._internal_.Interface.md#format)
- [getError](verida_vda_name_client._internal_.Interface.md#geterror)
- [getEvent](verida_vda_name_client._internal_.Interface.md#getevent)
- [getEventTopic](verida_vda_name_client._internal_.Interface.md#geteventtopic)
- [getFunction](verida_vda_name_client._internal_.Interface.md#getfunction)
- [getSighash](verida_vda_name_client._internal_.Interface.md#getsighash)
- [parseError](verida_vda_name_client._internal_.Interface.md#parseerror)
- [parseLog](verida_vda_name_client._internal_.Interface.md#parselog)
- [parseTransaction](verida_vda_name_client._internal_.Interface.md#parsetransaction)
- [getAbiCoder](verida_vda_name_client._internal_.Interface.md#getabicoder)
- [getAddress](verida_vda_name_client._internal_.Interface.md#getaddress)
- [getEventTopic](verida_vda_name_client._internal_.Interface.md#geteventtopic)
- [getSighash](verida_vda_name_client._internal_.Interface.md#getsighash)
- [isInterface](verida_vda_name_client._internal_.Interface.md#isinterface)

## Constructors

### constructor

• **new Interface**(`fragments`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fragments` | `string` \| readonly (`string` \| [`Fragment`](verida_vda_name_client._internal_.Fragment.md) \| [`JsonFragment`](../interfaces/verida_vda_name_client._internal_.JsonFragment.md))[] |

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:52

## Properties

### \_abiCoder

• `Readonly` **\_abiCoder**: [`AbiCoder`](verida_vda_name_client._internal_.AbiCoder.md)

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:50

___

### \_isInterface

• `Readonly` **\_isInterface**: `boolean`

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:51

___

### deploy

• `Readonly` **deploy**: [`ConstructorFragment`](verida_vda_name_client._internal_.ConstructorFragment.md)

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:49

___

### errors

• `Readonly` **errors**: `Object`

#### Index signature

▪ [name: `string`]: [`ErrorFragment`](verida_vda_name_client._internal_.ErrorFragment.md)

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:37

___

### events

• `Readonly` **events**: `Object`

#### Index signature

▪ [name: `string`]: [`EventFragment`](verida_vda_name_client._internal_.EventFragment.md)

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:40

___

### fragments

• `Readonly` **fragments**: readonly [`Fragment`](verida_vda_name_client._internal_.Fragment.md)[]

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:36

___

### functions

• `Readonly` **functions**: `Object`

#### Index signature

▪ [name: `string`]: [`FunctionFragment`](verida_vda_name_client._internal_.FunctionFragment.md)

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:43

___

### structs

• `Readonly` **structs**: `Object`

#### Index signature

▪ [name: `string`]: `any`

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:46

## Methods

### \_decodeParams

▸ **_decodeParams**(`params`, `data`): [`Result`](../interfaces/verida_vda_name_client._internal_.Result.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | readonly [`ParamType`](verida_vda_name_client._internal_.ParamType.md)[] |
| `data` | [`BytesLike`](../modules/verida_vda_name_client._internal_.md#byteslike) |

#### Returns

[`Result`](../interfaces/verida_vda_name_client._internal_.Result.md)

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:63

___

### \_encodeParams

▸ **_encodeParams**(`params`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | readonly [`ParamType`](verida_vda_name_client._internal_.ParamType.md)[] |
| `values` | readonly `any`[] |

#### Returns

`string`

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:64

___

### decodeErrorResult

▸ **decodeErrorResult**(`fragment`, `data`): [`Result`](../interfaces/verida_vda_name_client._internal_.Result.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fragment` | `string` \| [`ErrorFragment`](verida_vda_name_client._internal_.ErrorFragment.md) |
| `data` | [`BytesLike`](../modules/verida_vda_name_client._internal_.md#byteslike) |

#### Returns

[`Result`](../interfaces/verida_vda_name_client._internal_.Result.md)

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:66

___

### decodeEventLog

▸ **decodeEventLog**(`eventFragment`, `data`, `topics?`): [`Result`](../interfaces/verida_vda_name_client._internal_.Result.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFragment` | `string` \| [`EventFragment`](verida_vda_name_client._internal_.EventFragment.md) |
| `data` | [`BytesLike`](../modules/verida_vda_name_client._internal_.md#byteslike) |
| `topics?` | readonly `string`[] |

#### Returns

[`Result`](../interfaces/verida_vda_name_client._internal_.Result.md)

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:77

___

### decodeFunctionData

▸ **decodeFunctionData**(`functionFragment`, `data`): [`Result`](../interfaces/verida_vda_name_client._internal_.Result.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | `string` \| [`FunctionFragment`](verida_vda_name_client._internal_.FunctionFragment.md) |
| `data` | [`BytesLike`](../modules/verida_vda_name_client._internal_.md#byteslike) |

#### Returns

[`Result`](../interfaces/verida_vda_name_client._internal_.Result.md)

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:68

___

### decodeFunctionResult

▸ **decodeFunctionResult**(`functionFragment`, `data`): [`Result`](../interfaces/verida_vda_name_client._internal_.Result.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | `string` \| [`FunctionFragment`](verida_vda_name_client._internal_.FunctionFragment.md) |
| `data` | [`BytesLike`](../modules/verida_vda_name_client._internal_.md#byteslike) |

#### Returns

[`Result`](../interfaces/verida_vda_name_client._internal_.Result.md)

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:70

___

### encodeDeploy

▸ **encodeDeploy**(`values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `values?` | readonly `any`[] |

#### Returns

`string`

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:65

___

### encodeErrorResult

▸ **encodeErrorResult**(`fragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fragment` | `string` \| [`ErrorFragment`](verida_vda_name_client._internal_.ErrorFragment.md) |
| `values?` | readonly `any`[] |

#### Returns

`string`

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:67

___

### encodeEventLog

▸ **encodeEventLog**(`eventFragment`, `values`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFragment` | `string` \| [`EventFragment`](verida_vda_name_client._internal_.EventFragment.md) |
| `values` | readonly `any`[] |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `data` | `string` |
| `topics` | `string`[] |

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:73

___

### encodeFilterTopics

▸ **encodeFilterTopics**(`eventFragment`, `values`): (`string` \| `string`[])[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFragment` | `string` \| [`EventFragment`](verida_vda_name_client._internal_.EventFragment.md) |
| `values` | readonly `any`[] |

#### Returns

(`string` \| `string`[])[]

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:72

___

### encodeFunctionData

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | `string` \| [`FunctionFragment`](verida_vda_name_client._internal_.FunctionFragment.md) |
| `values?` | readonly `any`[] |

#### Returns

`string`

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:69

___

### encodeFunctionResult

▸ **encodeFunctionResult**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | `string` \| [`FunctionFragment`](verida_vda_name_client._internal_.FunctionFragment.md) |
| `values?` | readonly `any`[] |

#### Returns

`string`

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:71

___

### format

▸ **format**(`format?`): `string` \| `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `format?` | `string` |

#### Returns

`string` \| `string`[]

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:53

___

### getError

▸ **getError**(`nameOrSignatureOrSighash`): [`ErrorFragment`](verida_vda_name_client._internal_.ErrorFragment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrSighash` | `string` |

#### Returns

[`ErrorFragment`](verida_vda_name_client._internal_.ErrorFragment.md)

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:60

___

### getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): [`EventFragment`](verida_vda_name_client._internal_.EventFragment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | `string` |

#### Returns

[`EventFragment`](verida_vda_name_client._internal_.EventFragment.md)

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:59

___

### getEventTopic

▸ **getEventTopic**(`eventFragment`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFragment` | `string` \| [`EventFragment`](verida_vda_name_client._internal_.EventFragment.md) |

#### Returns

`string`

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:62

___

### getFunction

▸ **getFunction**(`nameOrSignatureOrSighash`): [`FunctionFragment`](verida_vda_name_client._internal_.FunctionFragment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrSighash` | `string` |

#### Returns

[`FunctionFragment`](verida_vda_name_client._internal_.FunctionFragment.md)

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:58

___

### getSighash

▸ **getSighash**(`fragment`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fragment` | `string` \| [`ErrorFragment`](verida_vda_name_client._internal_.ErrorFragment.md) \| [`FunctionFragment`](verida_vda_name_client._internal_.FunctionFragment.md) |

#### Returns

`string`

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:61

___

### parseError

▸ **parseError**(`data`): [`ErrorDescription`](verida_vda_name_client._internal_.ErrorDescription.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`BytesLike`](../modules/verida_vda_name_client._internal_.md#byteslike) |

#### Returns

[`ErrorDescription`](verida_vda_name_client._internal_.ErrorDescription.md)

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:86

___

### parseLog

▸ **parseLog**(`log`): [`LogDescription`](verida_vda_name_client._internal_.LogDescription.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `log` | `Object` |
| `log.data` | `string` |
| `log.topics` | `string`[] |

#### Returns

[`LogDescription`](verida_vda_name_client._internal_.LogDescription.md)

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:82

___

### parseTransaction

▸ **parseTransaction**(`tx`): [`TransactionDescription`](verida_vda_name_client._internal_.TransactionDescription.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tx` | `Object` |
| `tx.data` | `string` |
| `tx.value?` | [`BigNumberish`](../modules/verida_vda_name_client._internal_.md#bignumberish) |

#### Returns

[`TransactionDescription`](verida_vda_name_client._internal_.TransactionDescription.md)

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:78

___

### getAbiCoder

▸ `Static` **getAbiCoder**(): [`AbiCoder`](verida_vda_name_client._internal_.AbiCoder.md)

#### Returns

[`AbiCoder`](verida_vda_name_client._internal_.AbiCoder.md)

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:54

___

### getAddress

▸ `Static` **getAddress**(`address`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

`string`

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:55

___

### getEventTopic

▸ `Static` **getEventTopic**(`eventFragment`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFragment` | [`EventFragment`](verida_vda_name_client._internal_.EventFragment.md) |

#### Returns

`string`

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:57

___

### getSighash

▸ `Static` **getSighash**(`fragment`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fragment` | [`ErrorFragment`](verida_vda_name_client._internal_.ErrorFragment.md) \| [`FunctionFragment`](verida_vda_name_client._internal_.FunctionFragment.md) |

#### Returns

`string`

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:56

___

### isInterface

▸ `Static` **isInterface**(`value`): value is Interface

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is Interface

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:87
