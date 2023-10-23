[root](../README.md) / [Modules](../modules.md) / [@verida/vda-name-client](../modules/verida_vda_name_client.md) / VeridaNameClient

# Class: VeridaNameClient

[@verida/vda-name-client](../modules/verida_vda_name_client.md).VeridaNameClient

## Table of contents

### Constructors

- [constructor](verida_vda_name_client.VeridaNameClient.md#constructor)

### Properties

- [config](verida_vda_name_client.VeridaNameClient.md#config)
- [contract](verida_vda_name_client.VeridaNameClient.md#contract)
- [didAddress](verida_vda_name_client.VeridaNameClient.md#didaddress)
- [network](verida_vda_name_client.VeridaNameClient.md#network)
- [readOnly](verida_vda_name_client.VeridaNameClient.md#readonly)
- [usernameCache](verida_vda_name_client.VeridaNameClient.md#usernamecache)
- [vdaWeb3Client](verida_vda_name_client.VeridaNameClient.md#vdaweb3client)

### Methods

- [getDID](verida_vda_name_client.VeridaNameClient.md#getdid)
- [getRegisterSignature](verida_vda_name_client.VeridaNameClient.md#getregistersignature)
- [getUsernames](verida_vda_name_client.VeridaNameClient.md#getusernames)
- [nonceFN](verida_vda_name_client.VeridaNameClient.md#noncefn)
- [register](verida_vda_name_client.VeridaNameClient.md#register)
- [unregister](verida_vda_name_client.VeridaNameClient.md#unregister)

## Constructors

### constructor

• **new VeridaNameClient**(`config`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`NameClientConfig`](../interfaces/verida_vda_name_client.NameClientConfig.md) |

#### Defined in

[packages/vda-name-client/src/blockchain/blockchainApi.ts:45](https://github.com/verida/verida-js/blob/032961c/packages/vda-name-client/src/blockchain/blockchainApi.ts#L45)

## Properties

### config

• `Private` **config**: [`NameClientConfig`](../interfaces/verida_vda_name_client.NameClientConfig.md)

#### Defined in

[packages/vda-name-client/src/blockchain/blockchainApi.ts:34](https://github.com/verida/verida-js/blob/032961c/packages/vda-name-client/src/blockchain/blockchainApi.ts#L34)

___

### contract

• `Private` `Optional` **contract**: [`Contract`](verida_vda_name_client._internal_.Contract.md)

#### Defined in

[packages/vda-name-client/src/blockchain/blockchainApi.ts:41](https://github.com/verida/verida-js/blob/032961c/packages/vda-name-client/src/blockchain/blockchainApi.ts#L41)

___

### didAddress

• `Private` `Optional` **didAddress**: `string`

#### Defined in

[packages/vda-name-client/src/blockchain/blockchainApi.ts:36](https://github.com/verida/verida-js/blob/032961c/packages/vda-name-client/src/blockchain/blockchainApi.ts#L36)

___

### network

• `Private` **network**: `string`

#### Defined in

[packages/vda-name-client/src/blockchain/blockchainApi.ts:35](https://github.com/verida/verida-js/blob/032961c/packages/vda-name-client/src/blockchain/blockchainApi.ts#L35)

___

### readOnly

• `Private` **readOnly**: `boolean`

#### Defined in

[packages/vda-name-client/src/blockchain/blockchainApi.ts:40](https://github.com/verida/verida-js/blob/032961c/packages/vda-name-client/src/blockchain/blockchainApi.ts#L40)

___

### usernameCache

• `Private` **usernameCache**: [`Record`](../modules/verida_vda_name_client._internal_.md#record)<`string`, `string`\> = `{}`

#### Defined in

[packages/vda-name-client/src/blockchain/blockchainApi.ts:43](https://github.com/verida/verida-js/blob/032961c/packages/vda-name-client/src/blockchain/blockchainApi.ts#L43)

___

### vdaWeb3Client

• `Private` `Optional` **vdaWeb3Client**: [`VeridaContract`](verida_vda_name_client._internal_.VeridaContract.md)

#### Defined in

[packages/vda-name-client/src/blockchain/blockchainApi.ts:38](https://github.com/verida/verida-js/blob/032961c/packages/vda-name-client/src/blockchain/blockchainApi.ts#L38)

## Methods

### getDID

▸ **getDID**(`username`): `Promise`<`string`\>

Return the DID address for a given username

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `username` | `string` | username registered by [register](verida_vda_name_client.VeridaNameClient.md#register) |

#### Returns

`Promise`<`string`\>

DID address

#### Defined in

[packages/vda-name-client/src/blockchain/blockchainApi.ts:217](https://github.com/verida/verida-js/blob/032961c/packages/vda-name-client/src/blockchain/blockchainApi.ts#L217)

___

### getRegisterSignature

▸ `Private` **getRegisterSignature**(`name`, `did`, `signKey`): `Promise`<`string`\>

Get a signature for {@link BlockchainApi#register} function

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Name to register |
| `did` | `string` | DID address |
| `signKey` | `string` | Verida account key to generate signature |

#### Returns

`Promise`<`string`\>

Signature

#### Defined in

[packages/vda-name-client/src/blockchain/blockchainApi.ts:108](https://github.com/verida/verida-js/blob/032961c/packages/vda-name-client/src/blockchain/blockchainApi.ts#L108)

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

[packages/vda-name-client/src/blockchain/blockchainApi.ts:169](https://github.com/verida/verida-js/blob/032961c/packages/vda-name-client/src/blockchain/blockchainApi.ts#L169)

___

### nonceFN

▸ **nonceFN**(): `Promise`<`any`\>

Get a nonce from DIDRegistry contract

#### Returns

`Promise`<`any`\>

nonce of DID

#### Defined in

[packages/vda-name-client/src/blockchain/blockchainApi.ts:89](https://github.com/verida/verida-js/blob/032961c/packages/vda-name-client/src/blockchain/blockchainApi.ts#L89)

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

[packages/vda-name-client/src/blockchain/blockchainApi.ts:121](https://github.com/verida/verida-js/blob/032961c/packages/vda-name-client/src/blockchain/blockchainApi.ts#L121)

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

[packages/vda-name-client/src/blockchain/blockchainApi.ts:146](https://github.com/verida/verida-js/blob/032961c/packages/vda-name-client/src/blockchain/blockchainApi.ts#L146)
