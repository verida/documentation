[root](../README.md) / [Modules](../modules.md) / [@verida/did-client](../modules/verida_did_client.md) / DIDClient

# Class: DIDClient

[@verida/did-client](../modules/verida_did_client.md).DIDClient

## Implements

- [`IDIDClient`](../interfaces/verida_did_client._internal_.IDIDClient.md)

## Table of contents

### Constructors

- [constructor](verida_did_client.DIDClient.md#constructor)

### Properties

- [config](verida_did_client.DIDClient.md#config)
- [defaultEndpoints](verida_did_client.DIDClient.md#defaultendpoints)
- [didResolver](verida_did_client.DIDClient.md#didresolver)
- [endpointErrors](verida_did_client.DIDClient.md#endpointerrors)
- [vdaDid](verida_did_client.DIDClient.md#vdadid)
- [veridaWallet](verida_did_client.DIDClient.md#veridawallet)

### Methods

- [authenticate](verida_did_client.DIDClient.md#authenticate)
- [authenticated](verida_did_client.DIDClient.md#authenticated)
- [get](verida_did_client.DIDClient.md#get)
- [getDid](verida_did_client.DIDClient.md#getdid)
- [getLastEndpointErrors](verida_did_client.DIDClient.md#getlastendpointerrors)
- [getPublicKey](verida_did_client.DIDClient.md#getpublickey)
- [getRpcUrl](verida_did_client.DIDClient.md#getrpcurl)
- [save](verida_did_client.DIDClient.md#save)

## Constructors

### constructor

• **new DIDClient**(`config`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`DIDClientConfig`](../interfaces/verida_did_client._internal_.DIDClientConfig.md) |

#### Defined in

[packages/did-client/src/did-client.ts:26](https://github.com/verida/verida-js/blob/032961c/packages/did-client/src/did-client.ts#L26)

## Properties

### config

• `Private` **config**: [`DIDClientConfig`](../interfaces/verida_did_client._internal_.DIDClientConfig.md)

#### Defined in

[packages/did-client/src/did-client.ts:12](https://github.com/verida/verida-js/blob/032961c/packages/did-client/src/did-client.ts#L12)

___

### defaultEndpoints

• `Private` `Optional` **defaultEndpoints**: `string`[]

#### Defined in

[packages/did-client/src/did-client.ts:22](https://github.com/verida/verida-js/blob/032961c/packages/did-client/src/did-client.ts#L22)

___

### didResolver

• `Private` **didResolver**: [`Resolver`](verida_did_client._internal_.Resolver.md)

#### Defined in

[packages/did-client/src/did-client.ts:15](https://github.com/verida/verida-js/blob/032961c/packages/did-client/src/did-client.ts#L15)

___

### endpointErrors

• `Private` `Optional` **endpointErrors**: [`VdaDidEndpointResponses`](../modules/verida_did_client._internal_.md#vdadidendpointresponses)

#### Defined in

[packages/did-client/src/did-client.ts:24](https://github.com/verida/verida-js/blob/032961c/packages/did-client/src/did-client.ts#L24)

___

### vdaDid

• `Private` `Optional` **vdaDid**: [`default`](verida_did_client._internal_.default.md)

#### Defined in

[packages/did-client/src/did-client.ts:17](https://github.com/verida/verida-js/blob/032961c/packages/did-client/src/did-client.ts#L17)

___

### veridaWallet

• `Private` **veridaWallet**: `undefined` \| [`Wallet`](verida_did_client.Wallet.md)

#### Defined in

[packages/did-client/src/did-client.ts:20](https://github.com/verida/verida-js/blob/032961c/packages/did-client/src/did-client.ts#L20)

## Methods

### authenticate

▸ **authenticate**(`veridaPrivateKey`, `callType`, `web3Config`, `defaultEndpoints`): `void`

Unlock save() function by providing verida signing key.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `veridaPrivateKey` | `string` | Private key of a Verida Account. Used to sign transactions in the DID Registry to verify the request originated from the DID owner / controller |
| `callType` | [`Web3CallType`](../modules/verida_did_client._internal_.md#web3calltype) | Blockchain interaction mode. 'web3' \| 'gasless' |
| `web3Config` | [`Web3SelfTransactionConfigPart`](../interfaces/verida_did_client._internal_.Web3SelfTransactionConfigPart.md) \| [`Web3MetaTransactionConfig`](../interfaces/verida_did_client._internal_.Web3MetaTransactionConfig.md) | Web3 configuration. If `web3`, you must provide `privateKey` (MATIC private key that will pay for gas). If `gasless` you must specify `endpointUrl` (URL of the meta transaction server) and any appropriate `serverConfig` and `postConfig`. |
| `defaultEndpoints` | `string`[] | - |

#### Returns

`void`

#### Implementation of

[IDIDClient](../interfaces/verida_did_client._internal_.IDIDClient.md).[authenticate](../interfaces/verida_did_client._internal_.IDIDClient.md#authenticate)

#### Defined in

[packages/did-client/src/did-client.ts:58](https://github.com/verida/verida-js/blob/032961c/packages/did-client/src/did-client.ts#L58)

___

### authenticated

▸ **authenticated**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IDIDClient](../interfaces/verida_did_client._internal_.IDIDClient.md).[authenticated](../interfaces/verida_did_client._internal_.IDIDClient.md#authenticated)

#### Defined in

[packages/did-client/src/did-client.ts:100](https://github.com/verida/verida-js/blob/032961c/packages/did-client/src/did-client.ts#L100)

___

### get

▸ **get**(`did`): `Promise`<[`default`](verida_did_client._internal_.default-1.md)\>

Get original document loaded from blockchain. Creates a new document if it didn't exist

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `string` |

#### Returns

`Promise`<[`default`](verida_did_client._internal_.default-1.md)\>

DID Document instance

#### Implementation of

[IDIDClient](../interfaces/verida_did_client._internal_.IDIDClient.md).[get](../interfaces/verida_did_client._internal_.IDIDClient.md#get)

#### Defined in

[packages/did-client/src/did-client.ts:200](https://github.com/verida/verida-js/blob/032961c/packages/did-client/src/did-client.ts#L200)

___

### getDid

▸ **getDid**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Implementation of

[IDIDClient](../interfaces/verida_did_client._internal_.IDIDClient.md).[getDid](../interfaces/verida_did_client._internal_.IDIDClient.md#getdid)

#### Defined in

[packages/did-client/src/did-client.ts:104](https://github.com/verida/verida-js/blob/032961c/packages/did-client/src/did-client.ts#L104)

___

### getLastEndpointErrors

▸ **getLastEndpointErrors**(): [`VdaDidEndpointResponses`](../modules/verida_did_client._internal_.md#vdadidendpointresponses)

#### Returns

[`VdaDidEndpointResponses`](../modules/verida_did_client._internal_.md#vdadidendpointresponses)

#### Implementation of

[IDIDClient](../interfaces/verida_did_client._internal_.IDIDClient.md).[getLastEndpointErrors](../interfaces/verida_did_client._internal_.IDIDClient.md#getlastendpointerrors)

#### Defined in

[packages/did-client/src/did-client.ts:191](https://github.com/verida/verida-js/blob/032961c/packages/did-client/src/did-client.ts#L191)

___

### getPublicKey

▸ **getPublicKey**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Implementation of

[IDIDClient](../interfaces/verida_did_client._internal_.IDIDClient.md).[getPublicKey](../interfaces/verida_did_client._internal_.IDIDClient.md#getpublickey)

#### Defined in

[packages/did-client/src/did-client.ts:117](https://github.com/verida/verida-js/blob/032961c/packages/did-client/src/did-client.ts#L117)

___

### getRpcUrl

▸ **getRpcUrl**(): `string`

#### Returns

`string`

#### Implementation of

[IDIDClient](../interfaces/verida_did_client._internal_.IDIDClient.md).[getRpcUrl](../interfaces/verida_did_client._internal_.IDIDClient.md#getrpcurl)

#### Defined in

[packages/did-client/src/did-client.ts:42](https://github.com/verida/verida-js/blob/032961c/packages/did-client/src/did-client.ts#L42)

___

### save

▸ **save**(`document`): `Promise`<[`VdaDidEndpointResponses`](../modules/verida_did_client._internal_.md#vdadidendpointresponses)\>

Save DIDDocument to the chain

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `document` | [`default`](verida_did_client._internal_.default-1.md) | Updated DIDDocuent |

#### Returns

`Promise`<[`VdaDidEndpointResponses`](../modules/verida_did_client._internal_.md#vdadidendpointresponses)\>

true if success.

#### Implementation of

[IDIDClient](../interfaces/verida_did_client._internal_.IDIDClient.md).[save](../interfaces/verida_did_client._internal_.IDIDClient.md#save)

#### Defined in

[packages/did-client/src/did-client.ts:131](https://github.com/verida/verida-js/blob/032961c/packages/did-client/src/did-client.ts#L131)
