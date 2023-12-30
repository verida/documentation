[root](../README.md) / [Modules](../modules.md) / [@verida/web3](../modules/verida_web3.md) / VeridaContract

# Class: VeridaContract

[@verida/web3](../modules/verida_web3.md).VeridaContract

Class representing any Verida Smart Contrat

## Indexable

▪ [key: `string`]: `any`

Need such fields to add sub methods in constructor

## Table of contents

### Constructors

- [constructor](verida_web3.VeridaContract.md#constructor)

### Properties

- [contract](verida_web3.VeridaContract.md#contract)
- [endPoint](verida_web3.VeridaContract.md#endpoint)
- [gaslessPostConfig](verida_web3.VeridaContract.md#gaslesspostconfig)
- [gaslessServerConfig](verida_web3.VeridaContract.md#gaslessserverconfig)
- [server](verida_web3.VeridaContract.md#server)
- [signer](verida_web3.VeridaContract.md#signer)
- [type](verida_web3.VeridaContract.md#type)
- [web3Config](verida_web3.VeridaContract.md#web3config)

### Methods

- [attachContract](verida_web3.VeridaContract.md#attachcontract)
- [callMethod](verida_web3.VeridaContract.md#callmethod)

## Constructors

### constructor

• **new VeridaContract**(`type`, `config`)

Create Verida smart contract instance. Add member functions of contract as parameters.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | [`Web3CallType`](../modules/verida_web3._internal_.md#web3calltype) | interaction mode |
| `config` | [`VeridaWeb3Config`](../modules/verida_web3._internal_.md#veridaweb3config) | configuration for creating VeridaContract instance |

#### Defined in

[packages/vda-web3-client/src/VeridaContractBase.ts:61](https://github.com/verida/verida-js/blob/5040472/packages/vda-web3-client/src/VeridaContractBase.ts#L61)

## Properties

### contract

• `Protected` `Optional` **contract**: [`Contract`](verida_web3._internal_.Contract.md)

Contract instance used in web3 mode

#### Defined in

[packages/vda-web3-client/src/VeridaContractBase.ts:36](https://github.com/verida/verida-js/blob/5040472/packages/vda-web3-client/src/VeridaContractBase.ts#L36)

___

### endPoint

• `Protected` `Optional` **endPoint**: `string`

endpoint url : Need to be defined in sub class constructor

#### Defined in

[packages/vda-web3-client/src/VeridaContractBase.ts:44](https://github.com/verida/verida-js/blob/5040472/packages/vda-web3-client/src/VeridaContractBase.ts#L44)

___

### gaslessPostConfig

• `Protected` `Optional` **gaslessPostConfig**: [`Web3GaslessPostConfig`](../interfaces/verida_web3._internal_.Web3GaslessPostConfig.md)

#### Defined in

[packages/vda-web3-client/src/VeridaContractBase.ts:54](https://github.com/verida/verida-js/blob/5040472/packages/vda-web3-client/src/VeridaContractBase.ts#L54)

___

### gaslessServerConfig

• `Protected` `Optional` **gaslessServerConfig**: [`Web3GaslessRequestConfig`](../interfaces/verida_web3._internal_.Web3GaslessRequestConfig.md)

Configuration for gasless mode

#### Defined in

[packages/vda-web3-client/src/VeridaContractBase.ts:53](https://github.com/verida/verida-js/blob/5040472/packages/vda-web3-client/src/VeridaContractBase.ts#L53)

___

### server

• `Protected` **server**: `any` = `null`

Axios instance used in gasless mode

#### Defined in

[packages/vda-web3-client/src/VeridaContractBase.ts:42](https://github.com/verida/verida-js/blob/5040472/packages/vda-web3-client/src/VeridaContractBase.ts#L42)

___

### signer

• `Protected` `Optional` **signer**: [`Signer`](verida_web3._internal_.Signer.md)

#### Defined in

[packages/vda-web3-client/src/VeridaContractBase.ts:38](https://github.com/verida/verida-js/blob/5040472/packages/vda-web3-client/src/VeridaContractBase.ts#L38)

___

### type

• `Protected` **type**: [`Web3CallType`](../modules/verida_web3._internal_.md#web3calltype)

Smart contract interaction mode

#### Defined in

[packages/vda-web3-client/src/VeridaContractBase.ts:33](https://github.com/verida/verida-js/blob/5040472/packages/vda-web3-client/src/VeridaContractBase.ts#L33)

___

### web3Config

• `Protected` `Optional` **web3Config**: [`Web3SelfTransactionConfig`](../interfaces/verida_web3._internal_.Web3SelfTransactionConfig.md)

Configuration for web3 mode

#### Defined in

[packages/vda-web3-client/src/VeridaContractBase.ts:50](https://github.com/verida/verida-js/blob/5040472/packages/vda-web3-client/src/VeridaContractBase.ts#L50)

## Methods

### attachContract

▸ `Protected` **attachContract**(`controller?`): `Promise`<[`Contract`](verida_web3._internal_.Contract.md)\>

Connect signer to contract to sign transactions. Called in web3 mode only

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `controller?` | `string` \| `Promise`<`string`\> | : Wallet public address |

#### Returns

`Promise`<[`Contract`](verida_web3._internal_.Contract.md)\>

#### Defined in

[packages/vda-web3-client/src/VeridaContractBase.ts:216](https://github.com/verida/verida-js/blob/5040472/packages/vda-web3-client/src/VeridaContractBase.ts#L216)

___

### callMethod

▸ `Protected` **callMethod**(`methodName`, `methodType`, `params`, `gasConfig?`): `Promise`<[`VdaTransactionResult`](../interfaces/verida_web3._internal_.VdaTransactionResult.md)\>

Perform smart contract interaction. Called by member function that were created in constructor.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `methodName` | `string` | Calling method name of smart contract. From ABI. |
| `methodType` | `string` | Method type. Shows whether method in smart contract is Call function or not. |
| `params` | `any` | Parameters used to make interaction with smart contract : Array |
| `gasConfig?` | [`Web3GasConfiguration`](../interfaces/verida_web3._internal_.Web3GasConfiguration.md) | Gas configuration. Only available for non-view functions in Web3 mode |

#### Returns

`Promise`<[`VdaTransactionResult`](../interfaces/verida_web3._internal_.VdaTransactionResult.md)\>

- Response from smart contract interaction

#### Defined in

[packages/vda-web3-client/src/VeridaContractBase.ts:240](https://github.com/verida/verida-js/blob/5040472/packages/vda-web3-client/src/VeridaContractBase.ts#L240)
