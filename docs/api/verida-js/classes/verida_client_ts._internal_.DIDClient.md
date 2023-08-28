[root](../README.md) / [Modules](../modules.md) / [@verida/client-ts](../modules/verida_client_ts.md) / [<internal\>](../modules/verida_client_ts._internal_.md) / DIDClient

# Class: DIDClient

[@verida/client-ts](../modules/verida_client_ts.md).[<internal\>](../modules/verida_client_ts._internal_.md).DIDClient

## Implements

- [`IDIDClient`](../interfaces/verida_client_ts._internal_.IDIDClient.md)

## Table of contents

### Constructors

- [constructor](verida_client_ts._internal_.DIDClient.md#constructor)

### Properties

- [config](verida_client_ts._internal_.DIDClient.md#config)
- [defaultEndpoints](verida_client_ts._internal_.DIDClient.md#defaultendpoints)
- [didResolver](verida_client_ts._internal_.DIDClient.md#didresolver)
- [endpointErrors](verida_client_ts._internal_.DIDClient.md#endpointerrors)
- [vdaDid](verida_client_ts._internal_.DIDClient.md#vdadid)
- [veridaWallet](verida_client_ts._internal_.DIDClient.md#veridawallet)

### Methods

- [authenticate](verida_client_ts._internal_.DIDClient.md#authenticate)
- [authenticated](verida_client_ts._internal_.DIDClient.md#authenticated)
- [get](verida_client_ts._internal_.DIDClient.md#get)
- [getDid](verida_client_ts._internal_.DIDClient.md#getdid)
- [getLastEndpointErrors](verida_client_ts._internal_.DIDClient.md#getlastendpointerrors)
- [getPublicKey](verida_client_ts._internal_.DIDClient.md#getpublickey)
- [getRpcUrl](verida_client_ts._internal_.DIDClient.md#getrpcurl)
- [save](verida_client_ts._internal_.DIDClient.md#save)

## Constructors

### constructor

• **new DIDClient**(`config`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`DIDClientConfig`](../interfaces/verida_client_ts._internal_.DIDClientConfig.md) |

#### Defined in

packages/did-client/dist/did-client.d.ts:10

## Properties

### config

• `Private` **config**: `any`

#### Defined in

packages/did-client/dist/did-client.d.ts:4

___

### defaultEndpoints

• `Private` `Optional` **defaultEndpoints**: `any`

#### Defined in

packages/did-client/dist/did-client.d.ts:8

___

### didResolver

• `Private` **didResolver**: `any`

#### Defined in

packages/did-client/dist/did-client.d.ts:5

___

### endpointErrors

• `Private` `Optional` **endpointErrors**: `any`

#### Defined in

packages/did-client/dist/did-client.d.ts:9

___

### vdaDid

• `Private` `Optional` **vdaDid**: `any`

#### Defined in

packages/did-client/dist/did-client.d.ts:6

___

### veridaWallet

• `Private` **veridaWallet**: `any`

#### Defined in

packages/did-client/dist/did-client.d.ts:7

## Methods

### authenticate

▸ **authenticate**(`veridaPrivateKey`, `callType`, `web3Config`, `defaultEndpoints`): `void`

Unlock save() function by providing verida signing key.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `veridaPrivateKey` | `string` | Private key of a Verida Account. Used to sign transactions in the DID Registry to verify the request originated from the DID owner / controller |
| `callType` | [`Web3CallType`](../modules/verida_client_ts._internal_.md#web3calltype) | Blockchain interaction mode. 'web3' \| 'gasless' |
| `web3Config` | [`Web3SelfTransactionConfigPart`](../interfaces/verida_client_ts._internal_.Web3SelfTransactionConfigPart.md) \| [`Web3MetaTransactionConfig`](../interfaces/verida_client_ts._internal_.Web3MetaTransactionConfig.md) | Web3 configuration. If `web3`, you must provide `privateKey` (MATIC private key that will pay for gas). If `gasless` you must specify `endpointUrl` (URL of the meta transaction server) and any appropriate `serverConfig` and `postConfig`. |
| `defaultEndpoints` | `string`[] | - |

#### Returns

`void`

#### Implementation of

[IDIDClient](../interfaces/verida_client_ts._internal_.IDIDClient.md).[authenticate](../interfaces/verida_client_ts._internal_.IDIDClient.md#authenticate)

#### Defined in

packages/did-client/dist/did-client.d.ts:19

___

### authenticated

▸ **authenticated**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IDIDClient](../interfaces/verida_client_ts._internal_.IDIDClient.md).[authenticated](../interfaces/verida_client_ts._internal_.IDIDClient.md#authenticated)

#### Defined in

packages/did-client/dist/did-client.d.ts:20

___

### get

▸ **get**(`did`): `Promise`<[`default`](verida_client_ts._internal_.default-1.md)\>

Get original document loaded from blockchain. Creates a new document if it didn't exist

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `string` |

#### Returns

`Promise`<[`default`](verida_client_ts._internal_.default-1.md)\>

DID Document instance

#### Implementation of

[IDIDClient](../interfaces/verida_client_ts._internal_.IDIDClient.md).[get](../interfaces/verida_client_ts._internal_.IDIDClient.md#get)

#### Defined in

packages/did-client/dist/did-client.d.ts:36

___

### getDid

▸ **getDid**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Implementation of

[IDIDClient](../interfaces/verida_client_ts._internal_.IDIDClient.md).[getDid](../interfaces/verida_client_ts._internal_.IDIDClient.md#getdid)

#### Defined in

packages/did-client/dist/did-client.d.ts:21

___

### getLastEndpointErrors

▸ **getLastEndpointErrors**(): [`VdaDidEndpointResponses`](../modules/verida_client_ts._internal_.md#vdadidendpointresponses)

#### Returns

[`VdaDidEndpointResponses`](../modules/verida_client_ts._internal_.md#vdadidendpointresponses)

#### Implementation of

[IDIDClient](../interfaces/verida_client_ts._internal_.IDIDClient.md).[getLastEndpointErrors](../interfaces/verida_client_ts._internal_.IDIDClient.md#getlastendpointerrors)

#### Defined in

packages/did-client/dist/did-client.d.ts:30

___

### getPublicKey

▸ **getPublicKey**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Implementation of

[IDIDClient](../interfaces/verida_client_ts._internal_.IDIDClient.md).[getPublicKey](../interfaces/verida_client_ts._internal_.IDIDClient.md#getpublickey)

#### Defined in

packages/did-client/dist/did-client.d.ts:22

___

### getRpcUrl

▸ **getRpcUrl**(): `string`

#### Returns

`string`

#### Implementation of

[IDIDClient](../interfaces/verida_client_ts._internal_.IDIDClient.md).[getRpcUrl](../interfaces/verida_client_ts._internal_.IDIDClient.md#getrpcurl)

#### Defined in

packages/did-client/dist/did-client.d.ts:11

___

### save

▸ **save**(`document`): `Promise`<[`VdaDidEndpointResponses`](../modules/verida_client_ts._internal_.md#vdadidendpointresponses)\>

Save DIDDocument to the chain

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `document` | [`default`](verida_client_ts._internal_.default-1.md) | Updated DIDDocuent |

#### Returns

`Promise`<[`VdaDidEndpointResponses`](../modules/verida_client_ts._internal_.md#vdadidendpointresponses)\>

true if success.

#### Implementation of

[IDIDClient](../interfaces/verida_client_ts._internal_.IDIDClient.md).[save](../interfaces/verida_client_ts._internal_.IDIDClient.md#save)

#### Defined in

packages/did-client/dist/did-client.d.ts:29
