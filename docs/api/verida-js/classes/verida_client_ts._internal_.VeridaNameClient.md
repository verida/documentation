[root](../README.md) / [Modules](../modules.md) / [@verida/client-ts](../modules/verida_client_ts.md) / [<internal\>](../modules/verida_client_ts._internal_.md) / VeridaNameClient

# Class: VeridaNameClient

[@verida/client-ts](../modules/verida_client_ts.md).[<internal\>](../modules/verida_client_ts._internal_.md).VeridaNameClient

## Table of contents

### Constructors

- [constructor](verida_client_ts._internal_.VeridaNameClient.md#constructor)

### Properties

- [config](verida_client_ts._internal_.VeridaNameClient.md#config)
- [contract](verida_client_ts._internal_.VeridaNameClient.md#contract)
- [didAddress](verida_client_ts._internal_.VeridaNameClient.md#didaddress)
- [getRegisterSignature](verida_client_ts._internal_.VeridaNameClient.md#getregistersignature)
- [network](verida_client_ts._internal_.VeridaNameClient.md#network)
- [readOnly](verida_client_ts._internal_.VeridaNameClient.md#readonly)
- [usernameCache](verida_client_ts._internal_.VeridaNameClient.md#usernamecache)
- [vdaWeb3Client](verida_client_ts._internal_.VeridaNameClient.md#vdaweb3client)

### Methods

- [getDID](verida_client_ts._internal_.VeridaNameClient.md#getdid)
- [getUsernames](verida_client_ts._internal_.VeridaNameClient.md#getusernames)
- [nonceFN](verida_client_ts._internal_.VeridaNameClient.md#noncefn)
- [register](verida_client_ts._internal_.VeridaNameClient.md#register)
- [unregister](verida_client_ts._internal_.VeridaNameClient.md#unregister)

## Constructors

### constructor

• **new VeridaNameClient**(`config`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`VdaClientConfig`](../interfaces/verida_client_ts._internal_.VdaClientConfig.md) |

#### Defined in

packages/vda-name-client/build/src/blockchain/blockchainApi.d.ts:10

## Properties

### config

• `Private` **config**: `any`

#### Defined in

packages/vda-name-client/build/src/blockchain/blockchainApi.d.ts:3

___

### contract

• `Private` `Optional` **contract**: `any`

#### Defined in

packages/vda-name-client/build/src/blockchain/blockchainApi.d.ts:8

___

### didAddress

• `Private` `Optional` **didAddress**: `any`

#### Defined in

packages/vda-name-client/build/src/blockchain/blockchainApi.d.ts:5

___

### getRegisterSignature

• `Private` **getRegisterSignature**: `any`

Get a signature for {@link BlockchainApi#register} function

**`param`** Name to register

**`param`** DID address

**`param`** Verida account key to generate signature

**`returns`** Signature

#### Defined in

packages/vda-name-client/build/src/blockchain/blockchainApi.d.ts:23

___

### network

• `Private` **network**: `any`

#### Defined in

packages/vda-name-client/build/src/blockchain/blockchainApi.d.ts:4

___

### readOnly

• `Private` **readOnly**: `any`

#### Defined in

packages/vda-name-client/build/src/blockchain/blockchainApi.d.ts:7

___

### usernameCache

• `Private` **usernameCache**: `any`

#### Defined in

packages/vda-name-client/build/src/blockchain/blockchainApi.d.ts:9

___

### vdaWeb3Client

• `Private` `Optional` **vdaWeb3Client**: `any`

#### Defined in

packages/vda-name-client/build/src/blockchain/blockchainApi.d.ts:6

## Methods

### getDID

▸ **getDID**(`username`): `Promise`<`string`\>

Return the DID address for a given username

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `username` | `string` | username registered by [register](verida_client_ts._internal_.VeridaNameClient.md#register) |

#### Returns

`Promise`<`string`\>

DID address

#### Defined in

packages/vda-name-client/build/src/blockchain/blockchainApi.d.ts:47

___

### getUsernames

▸ **getUsernames**(`did`): `Promise`<`string`[]\>

Get the username list of a DID address

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `did` | `string` | DID to lookup the username for |

#### Returns

`Promise`<`string`[]\>

username list

#### Defined in

packages/vda-name-client/build/src/blockchain/blockchainApi.d.ts:40

___

### nonceFN

▸ **nonceFN**(): `Promise`<`any`\>

Get a nonce from DIDRegistry contract

#### Returns

`Promise`<`any`\>

nonce of DID

#### Defined in

packages/vda-name-client/build/src/blockchain/blockchainApi.d.ts:15

___

### register

▸ **register**(`username`): `Promise`<`void`\>

Register a username to the did address

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `username` | `string` | Name to register |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/vda-name-client/build/src/blockchain/blockchainApi.d.ts:28

___

### unregister

▸ **unregister**(`username`): `Promise`<`void`\>

Unregister a username from the did address

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `username` | `string` | Name to be unregistered |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/vda-name-client/build/src/blockchain/blockchainApi.d.ts:33
