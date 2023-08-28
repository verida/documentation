[root](../README.md) / [Modules](../modules.md) / [@verida/client-ts](../modules/verida_client_ts.md) / [<internal\>](../modules/verida_client_ts._internal_.md) / Web3SelfTransactionConfig

# Interface: Web3SelfTransactionConfig

[@verida/client-ts](../modules/verida_client_ts.md).[<internal\>](../modules/verida_client_ts._internal_.md).Web3SelfTransactionConfig

Configuration type for Web3 mode

signer - optional - a Signer that sign the blockchain transactions. If a 'signer' is not provided, then 'contract' with an attached signer need to be used to make transactions
provider - optional - a web3 provider. At least one of `signer`,`provider`, or `rpcUrl` is required
rpcUrl - optinal - a JSON-RPC URL that can be used to connect to an ethereum network. At least one of `signer`, `provider`, or `rpcUrl` is required
web3 - optional - Can use provider or web.currentProvider as a provider.

## Hierarchy

- [`Web3GasConfiguration`](verida_client_ts._internal_.Web3GasConfiguration.md)

  ↳ **`Web3SelfTransactionConfig`**

## Table of contents

### Properties

- [gasLimit](verida_client_ts._internal_.Web3SelfTransactionConfig.md#gaslimit)
- [maxFeePerGas](verida_client_ts._internal_.Web3SelfTransactionConfig.md#maxfeepergas)
- [maxPriorityFeePerGas](verida_client_ts._internal_.Web3SelfTransactionConfig.md#maxpriorityfeepergas)
- [methodDefaults](verida_client_ts._internal_.Web3SelfTransactionConfig.md#methoddefaults)
- [privateKey](verida_client_ts._internal_.Web3SelfTransactionConfig.md#privatekey)
- [provider](verida_client_ts._internal_.Web3SelfTransactionConfig.md#provider)
- [rpcUrl](verida_client_ts._internal_.Web3SelfTransactionConfig.md#rpcurl)
- [signer](verida_client_ts._internal_.Web3SelfTransactionConfig.md#signer)
- [web3](verida_client_ts._internal_.Web3SelfTransactionConfig.md#web3)

## Properties

### gasLimit

• `Optional` **gasLimit**: [`BigNumber`](../classes/verida_client_ts._internal_.BigNumber.md)

#### Inherited from

[Web3GasConfiguration](verida_client_ts._internal_.Web3GasConfiguration.md).[gasLimit](verida_client_ts._internal_.Web3GasConfiguration.md#gaslimit)

#### Defined in

packages/types/dist/Web3Interfaces.d.ts:16

___

### maxFeePerGas

• `Optional` **maxFeePerGas**: [`BigNumber`](../classes/verida_client_ts._internal_.BigNumber.md)

#### Inherited from

[Web3GasConfiguration](verida_client_ts._internal_.Web3GasConfiguration.md).[maxFeePerGas](verida_client_ts._internal_.Web3GasConfiguration.md#maxfeepergas)

#### Defined in

packages/types/dist/Web3Interfaces.d.ts:14

___

### maxPriorityFeePerGas

• `Optional` **maxPriorityFeePerGas**: [`BigNumber`](../classes/verida_client_ts._internal_.BigNumber.md)

#### Inherited from

[Web3GasConfiguration](verida_client_ts._internal_.Web3GasConfiguration.md).[maxPriorityFeePerGas](verida_client_ts._internal_.Web3GasConfiguration.md#maxpriorityfeepergas)

#### Defined in

packages/types/dist/Web3Interfaces.d.ts:15

___

### methodDefaults

• `Optional` **methodDefaults**: [`Record`](../modules/verida_client_ts._internal_.md#record)<`string`, [`Web3GasConfiguration`](verida_client_ts._internal_.Web3GasConfiguration.md)\>

#### Defined in

packages/types/dist/Web3Interfaces.d.ts:32

___

### privateKey

• `Optional` **privateKey**: `string`

#### Defined in

packages/types/dist/Web3Interfaces.d.ts:28

___

### provider

• `Optional` **provider**: [`Provider`](../classes/verida_client_ts._internal_.Provider.md)

#### Defined in

packages/types/dist/Web3Interfaces.d.ts:29

___

### rpcUrl

• `Optional` **rpcUrl**: `string`

#### Defined in

packages/types/dist/Web3Interfaces.d.ts:30

___

### signer

• `Optional` **signer**: [`Signer`](../classes/verida_client_ts._internal_.Signer.md)

#### Defined in

packages/types/dist/Web3Interfaces.d.ts:27

___

### web3

• `Optional` **web3**: `any`

#### Defined in

packages/types/dist/Web3Interfaces.d.ts:31
