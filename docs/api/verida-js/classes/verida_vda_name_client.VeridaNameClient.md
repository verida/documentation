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
| `config` | [`VdaClientConfig`](../interfaces/verida_vda_name_client._internal_.VdaClientConfig.md) |

#### Defined in

[packages/vda-name-client/src/blockchain/blockchainApi.ts:24](https://github.com/verida/verida-js/blob/5040472/packages/vda-name-client/src/blockchain/blockchainApi.ts#L24)

## Properties

### config

• `Private` **config**: [`VdaClientConfig`](../interfaces/verida_vda_name_client._internal_.VdaClientConfig.md)

#### Defined in

[packages/vda-name-client/src/blockchain/blockchainApi.ts:13](https://github.com/verida/verida-js/blob/5040472/packages/vda-name-client/src/blockchain/blockchainApi.ts#L13)

___

### contract

• `Private` `Optional` **contract**: [`Contract`](verida_vda_name_client._internal_.Contract.md)

#### Defined in

[packages/vda-name-client/src/blockchain/blockchainApi.ts:20](https://github.com/verida/verida-js/blob/5040472/packages/vda-name-client/src/blockchain/blockchainApi.ts#L20)

___

### didAddress

• `Private` `Optional` **didAddress**: `string`

#### Defined in

[packages/vda-name-client/src/blockchain/blockchainApi.ts:15](https://github.com/verida/verida-js/blob/5040472/packages/vda-name-client/src/blockchain/blockchainApi.ts#L15)

___

### network

• `Private` **network**: `string`

#### Defined in

[packages/vda-name-client/src/blockchain/blockchainApi.ts:14](https://github.com/verida/verida-js/blob/5040472/packages/vda-name-client/src/blockchain/blockchainApi.ts#L14)

___

### readOnly

• `Private` **readOnly**: `boolean`

#### Defined in

[packages/vda-name-client/src/blockchain/blockchainApi.ts:19](https://github.com/verida/verida-js/blob/5040472/packages/vda-name-client/src/blockchain/blockchainApi.ts#L19)

___

### usernameCache

• `Private` **usernameCache**: [`Record`](../modules/verida_vda_name_client._internal_.md#record)<`string`, `string`\> = `{}`

#### Defined in

[packages/vda-name-client/src/blockchain/blockchainApi.ts:22](https://github.com/verida/verida-js/blob/5040472/packages/vda-name-client/src/blockchain/blockchainApi.ts#L22)

___

### vdaWeb3Client

• `Private` `Optional` **vdaWeb3Client**: [`VeridaContract`](verida_vda_name_client._internal_.VeridaContract.md)

#### Defined in

[packages/vda-name-client/src/blockchain/blockchainApi.ts:17](https://github.com/verida/verida-js/blob/5040472/packages/vda-name-client/src/blockchain/blockchainApi.ts#L17)

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

[packages/vda-name-client/src/blockchain/blockchainApi.ts:196](https://github.com/verida/verida-js/blob/5040472/packages/vda-name-client/src/blockchain/blockchainApi.ts#L196)

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

[packages/vda-name-client/src/blockchain/blockchainApi.ts:87](https://github.com/verida/verida-js/blob/5040472/packages/vda-name-client/src/blockchain/blockchainApi.ts#L87)

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

[packages/vda-name-client/src/blockchain/blockchainApi.ts:148](https://github.com/verida/verida-js/blob/5040472/packages/vda-name-client/src/blockchain/blockchainApi.ts#L148)

___

### nonceFN

▸ **nonceFN**(): `Promise`<`any`\>

Get a nonce from DIDRegistry contract

#### Returns

`Promise`<`any`\>

nonce of DID

#### Defined in

[packages/vda-name-client/src/blockchain/blockchainApi.ts:68](https://github.com/verida/verida-js/blob/5040472/packages/vda-name-client/src/blockchain/blockchainApi.ts#L68)

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

[packages/vda-name-client/src/blockchain/blockchainApi.ts:100](https://github.com/verida/verida-js/blob/5040472/packages/vda-name-client/src/blockchain/blockchainApi.ts#L100)

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

[packages/vda-name-client/src/blockchain/blockchainApi.ts:125](https://github.com/verida/verida-js/blob/5040472/packages/vda-name-client/src/blockchain/blockchainApi.ts#L125)
