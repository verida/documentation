[root](../README.md) / [Modules](../modules.md) / [@verida/vda-did](../modules/verida_vda_did.md) / [<internal\>](../modules/verida_vda_did._internal_.md) / default

# Class: default

[@verida/vda-did](../modules/verida_vda_did.md).[<internal\>](../modules/verida_vda_did._internal_.md).default

## Table of contents

### Constructors

- [constructor](verida_vda_did._internal_.default.md#constructor)

### Properties

- [didAddress](verida_vda_did._internal_.default.md#didaddress)
- [network](verida_vda_did._internal_.default.md#network)
- [options](verida_vda_did._internal_.default.md#options)
- [vdaWeb3Client](verida_vda_did._internal_.default.md#vdaweb3client)

### Methods

- [activeDIDCount](verida_vda_did._internal_.default.md#activedidcount)
- [getController](verida_vda_did._internal_.default.md#getcontroller)
- [getControllerSignature](verida_vda_did._internal_.default.md#getcontrollersignature)
- [getRegisterSignature](verida_vda_did._internal_.default.md#getregistersignature)
- [getRevokeSignature](verida_vda_did._internal_.default.md#getrevokesignature)
- [lookup](verida_vda_did._internal_.default.md#lookup)
- [nonceFN](verida_vda_did._internal_.default.md#noncefn)
- [register](verida_vda_did._internal_.default.md#register)
- [revoke](verida_vda_did._internal_.default.md#revoke)
- [setController](verida_vda_did._internal_.default.md#setcontroller)

## Constructors

### constructor

• **new default**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`VdaDidConfigurationOptions`](../interfaces/verida_vda_did._internal_.VdaDidConfigurationOptions.md) |

#### Defined in

[packages/vda-did/src/blockchain/blockchainApi.ts:21](https://github.com/verida/verida-js/blob/a690f60/packages/vda-did/src/blockchain/blockchainApi.ts#L21)

## Properties

### didAddress

• `Private` **didAddress**: `string`

#### Defined in

[packages/vda-did/src/blockchain/blockchainApi.ts:17](https://github.com/verida/verida-js/blob/a690f60/packages/vda-did/src/blockchain/blockchainApi.ts#L17)

___

### network

• `Private` **network**: `string`

#### Defined in

[packages/vda-did/src/blockchain/blockchainApi.ts:16](https://github.com/verida/verida-js/blob/a690f60/packages/vda-did/src/blockchain/blockchainApi.ts#L16)

___

### options

• `Private` **options**: [`VdaDidConfigurationOptions`](../interfaces/verida_vda_did._internal_.VdaDidConfigurationOptions.md)

#### Defined in

[packages/vda-did/src/blockchain/blockchainApi.ts:15](https://github.com/verida/verida-js/blob/a690f60/packages/vda-did/src/blockchain/blockchainApi.ts#L15)

___

### vdaWeb3Client

• `Private` **vdaWeb3Client**: [`VeridaContract`](verida_vda_did._internal_.VeridaContract.md)

#### Defined in

[packages/vda-did/src/blockchain/blockchainApi.ts:19](https://github.com/verida/verida-js/blob/a690f60/packages/vda-did/src/blockchain/blockchainApi.ts#L19)

## Methods

### activeDIDCount

▸ **activeDIDCount**(): `Promise`<`any`\>

Get active DID count

#### Returns

`Promise`<`any`\>

Number of active did count

#### Defined in

[packages/vda-did/src/blockchain/blockchainApi.ts:206](https://github.com/verida/verida-js/blob/a690f60/packages/vda-did/src/blockchain/blockchainApi.ts#L206)

___

### getController

▸ **getController**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

[packages/vda-did/src/blockchain/blockchainApi.ts:165](https://github.com/verida/verida-js/blob/a690f60/packages/vda-did/src/blockchain/blockchainApi.ts#L165)

___

### getControllerSignature

▸ `Private` **getControllerSignature**(`controller`): `Promise`<`string`\>

Get a signature for {@link BlockchainApi#setController} function

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `controller` | `string` | DID address of controller that will be set |

#### Returns

`Promise`<`string`\>

Signature

#### Defined in

[packages/vda-did/src/blockchain/blockchainApi.ts:129](https://github.com/verida/verida-js/blob/a690f60/packages/vda-did/src/blockchain/blockchainApi.ts#L129)

___

### getRegisterSignature

▸ `Private` **getRegisterSignature**(`endpoints`): `Promise`<`string`\>

Get a signature for {@link BlockchainApi#register} function

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `endpoints` | `string`[] | Array of endpoints to be registered |

#### Returns

`Promise`<`string`\>

Signature

#### Defined in

[packages/vda-did/src/blockchain/blockchainApi.ts:91](https://github.com/verida/verida-js/blob/a690f60/packages/vda-did/src/blockchain/blockchainApi.ts#L91)

___

### getRevokeSignature

▸ `Private` **getRevokeSignature**(): `Promise`<`string`\>

Get a signature for {@link BlockchainApi#revoke} function

#### Returns

`Promise`<`string`\>

Signature

#### Defined in

[packages/vda-did/src/blockchain/blockchainApi.ts:179](https://github.com/verida/verida-js/blob/a690f60/packages/vda-did/src/blockchain/blockchainApi.ts#L179)

___

### lookup

▸ **lookup**(`did`): `Promise`<[`LookupResponse`](../interfaces/verida_vda_did._internal_.LookupResponse.md)\>

Get a controller & Endpoints' array of a DID address fro blockchain

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `string` |

#### Returns

`Promise`<[`LookupResponse`](../interfaces/verida_vda_did._internal_.LookupResponse.md)\>

Controller & Endpoints array

#### Defined in

[packages/vda-did/src/blockchain/blockchainApi.ts:71](https://github.com/verida/verida-js/blob/a690f60/packages/vda-did/src/blockchain/blockchainApi.ts#L71)

___

### nonceFN

▸ **nonceFN**(): `Promise`<`any`\>

Get a nonce from DIDRegistry contract

#### Returns

`Promise`<`any`\>

nonce of DID

#### Defined in

[packages/vda-did/src/blockchain/blockchainApi.ts:59](https://github.com/verida/verida-js/blob/a690f60/packages/vda-did/src/blockchain/blockchainApi.ts#L59)

___

### register

▸ **register**(`endpoints`): `Promise`<`void`\>

Register endpoints to blockchain

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `endpoints` | `string`[] | Array of endpoints to be registered |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/vda-did/src/blockchain/blockchainApi.ts:111](https://github.com/verida/verida-js/blob/a690f60/packages/vda-did/src/blockchain/blockchainApi.ts#L111)

___

### revoke

▸ **revoke**(): `Promise`<`void`\>

Revoke a DID address from the blockchain

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/vda-did/src/blockchain/blockchainApi.ts:190](https://github.com/verida/verida-js/blob/a690f60/packages/vda-did/src/blockchain/blockchainApi.ts#L190)

___

### setController

▸ **setController**(`controllerPrivateKey`): `Promise`<`void`\>

Set a controller of the {@link BlockchainApi#didAddress} to the blockchain

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `controllerPrivateKey` | `string` | private key of new controller |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/vda-did/src/blockchain/blockchainApi.ts:143](https://github.com/verida/verida-js/blob/a690f60/packages/vda-did/src/blockchain/blockchainApi.ts#L143)