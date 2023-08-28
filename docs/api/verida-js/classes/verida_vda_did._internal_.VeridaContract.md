[root](../README.md) / [Modules](../modules.md) / [@verida/vda-did](../modules/verida_vda_did.md) / [<internal\>](../modules/verida_vda_did._internal_.md) / VeridaContract

# Class: VeridaContract

[@verida/vda-did](../modules/verida_vda_did.md).[<internal\>](../modules/verida_vda_did._internal_.md).VeridaContract

Class representing any Verida Smart Contrat

## Indexable

▪ [key: `string`]: `any`

Need such fields to add sub methods in constructor

## Table of contents

### Constructors

- [constructor](verida_vda_did._internal_.VeridaContract.md#constructor)

### Properties

- [callMethod](verida_vda_did._internal_.VeridaContract.md#callmethod)
- [contract](verida_vda_did._internal_.VeridaContract.md#contract)
- [endPoint](verida_vda_did._internal_.VeridaContract.md#endpoint)
- [gaslessPostConfig](verida_vda_did._internal_.VeridaContract.md#gaslesspostconfig)
- [gaslessServerConfig](verida_vda_did._internal_.VeridaContract.md#gaslessserverconfig)
- [server](verida_vda_did._internal_.VeridaContract.md#server)
- [signer](verida_vda_did._internal_.VeridaContract.md#signer)
- [type](verida_vda_did._internal_.VeridaContract.md#type)
- [web3Config](verida_vda_did._internal_.VeridaContract.md#web3config)

### Methods

- [attachContract](verida_vda_did._internal_.VeridaContract.md#attachcontract)

## Constructors

### constructor

• **new VeridaContract**(`type`, `config`)

Create Verida smart contract instance. Add member functions of contract as parameters.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | [`Web3CallType`](../modules/verida_vda_did._internal_.md#web3calltype) | interaction mode |
| `config` | [`VeridaWeb3Config`](../modules/verida_vda_did._internal_.md#veridaweb3config) | configuration for creating VeridaContract instance |

#### Defined in

packages/vda-web3-client/build/src/VeridaContractBase.d.ts:31

## Properties

### callMethod

• `Protected` **callMethod**: (`methodName`: `string`, `methodType`: `string`, `params`: `any`, `gasConfig?`: [`Web3GasConfiguration`](../interfaces/verida_vda_did._internal_.Web3GasConfiguration.md)) => `Promise`<[`VdaTransactionResult`](../interfaces/verida_vda_did._internal_.VdaTransactionResult.md)\>

#### Type declaration

▸ (`methodName`, `methodType`, `params`, `gasConfig?`): `Promise`<[`VdaTransactionResult`](../interfaces/verida_vda_did._internal_.VdaTransactionResult.md)\>

Perform smart contract interaction. Called by member function that were created in constructor.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `methodName` | `string` | Calling method name of smart contract. From ABI. |
| `methodType` | `string` | Method type. Shows whether method in smart contract is Call function or not. |
| `params` | `any` | Parameters used to make interaction with smart contract : Array |
| `gasConfig?` | [`Web3GasConfiguration`](../interfaces/verida_vda_did._internal_.Web3GasConfiguration.md) | Gas configuration. Only available for non-view functions in Web3 mode |

##### Returns

`Promise`<[`VdaTransactionResult`](../interfaces/verida_vda_did._internal_.VdaTransactionResult.md)\>

- Response from smart contract interaction

#### Defined in

packages/vda-web3-client/build/src/VeridaContractBase.d.ts:46

___

### contract

• `Protected` `Optional` **contract**: [`Contract`](verida_vda_did._internal_.Contract.md)

Contract instance used in web3 mode

#### Defined in

packages/vda-web3-client/build/src/VeridaContractBase.d.ts:13

___

### endPoint

• `Protected` `Optional` **endPoint**: `string`

endpoint url : Need to be defined in sub class constructor

#### Defined in

packages/vda-web3-client/build/src/VeridaContractBase.d.ts:18

___

### gaslessPostConfig

• `Protected` `Optional` **gaslessPostConfig**: [`Web3GaslessPostConfig`](../interfaces/verida_vda_did._internal_.Web3GaslessPostConfig.md)

#### Defined in

packages/vda-web3-client/build/src/VeridaContractBase.d.ts:25

___

### gaslessServerConfig

• `Protected` `Optional` **gaslessServerConfig**: [`Web3GaslessRequestConfig`](../interfaces/verida_vda_did._internal_.Web3GaslessRequestConfig.md)

Configuration for gasless mode

#### Defined in

packages/vda-web3-client/build/src/VeridaContractBase.d.ts:24

___

### server

• `Protected` **server**: `any`

Axios instance used in gasless mode

#### Defined in

packages/vda-web3-client/build/src/VeridaContractBase.d.ts:16

___

### signer

• `Protected` `Optional` **signer**: [`Signer`](verida_vda_did._internal_.Signer.md)

#### Defined in

packages/vda-web3-client/build/src/VeridaContractBase.d.ts:14

___

### type

• `Protected` **type**: [`Web3CallType`](../modules/verida_vda_did._internal_.md#web3calltype)

Smart contract interaction mode

#### Defined in

packages/vda-web3-client/build/src/VeridaContractBase.d.ts:11

___

### web3Config

• `Protected` `Optional` **web3Config**: [`Web3SelfTransactionConfig`](../interfaces/verida_vda_did._internal_.Web3SelfTransactionConfig.md)

Configuration for web3 mode

#### Defined in

packages/vda-web3-client/build/src/VeridaContractBase.d.ts:22

## Methods

### attachContract

▸ `Protected` **attachContract**(`controller?`): `Promise`<[`Contract`](verida_vda_did._internal_.Contract.md)\>

Connect signer to contract to sign transactions. Called in web3 mode only

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `controller?` | `string` \| `Promise`<`string`\> | : Wallet public address |

#### Returns

`Promise`<[`Contract`](verida_vda_did._internal_.Contract.md)\>

#### Defined in

packages/vda-web3-client/build/src/VeridaContractBase.d.ts:37
