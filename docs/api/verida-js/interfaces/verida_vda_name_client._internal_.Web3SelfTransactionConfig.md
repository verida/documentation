[root](../README.md) / [Modules](../modules.md) / [@verida/vda-name-client](../modules/verida_vda_name_client.md) / [<internal\>](../modules/verida_vda_name_client._internal_.md) / Web3SelfTransactionConfig

# Interface: Web3SelfTransactionConfig

[@verida/vda-name-client](../modules/verida_vda_name_client.md).[<internal\>](../modules/verida_vda_name_client._internal_.md).Web3SelfTransactionConfig

Configuration type for Web3 mode

signer - optional - a Signer that sign the blockchain transactions. If a 'signer' is not provided, then 'contract' with an attached signer need to be used to make transactions
provider - optional - a web3 provider. At least one of `signer`,`provider`, or `rpcUrl` is required
rpcUrl - optinal - a JSON-RPC URL that can be used to connect to an ethereum network. At least one of `signer`, `provider`, or `rpcUrl` is required
web3 - optional - Can use provider or web.currentProvider as a provider.

## Hierarchy

- [`Web3GasConfiguration`](verida_vda_name_client._internal_.Web3GasConfiguration.md)

  ↳ **`Web3SelfTransactionConfig`**

## Table of contents

### Properties

- [gasLimit](verida_vda_name_client._internal_.Web3SelfTransactionConfig.md#gaslimit)
- [maxFeePerGas](verida_vda_name_client._internal_.Web3SelfTransactionConfig.md#maxfeepergas)
- [maxPriorityFeePerGas](verida_vda_name_client._internal_.Web3SelfTransactionConfig.md#maxpriorityfeepergas)
- [methodDefaults](verida_vda_name_client._internal_.Web3SelfTransactionConfig.md#methoddefaults)
- [privateKey](verida_vda_name_client._internal_.Web3SelfTransactionConfig.md#privatekey)
- [provider](verida_vda_name_client._internal_.Web3SelfTransactionConfig.md#provider)
- [rpcUrl](verida_vda_name_client._internal_.Web3SelfTransactionConfig.md#rpcurl)
- [signer](verida_vda_name_client._internal_.Web3SelfTransactionConfig.md#signer)
- [web3](verida_vda_name_client._internal_.Web3SelfTransactionConfig.md#web3)

## Properties

### gasLimit

• `Optional` **gasLimit**: [`BigNumber`](../classes/verida_vda_name_client._internal_.BigNumber.md)

#### Inherited from

[Web3GasConfiguration](verida_vda_name_client._internal_.Web3GasConfiguration.md).[gasLimit](verida_vda_name_client._internal_.Web3GasConfiguration.md#gaslimit)

#### Defined in

packages/types/dist/Web3Interfaces.d.ts:16

___

### maxFeePerGas

• `Optional` **maxFeePerGas**: [`BigNumber`](../classes/verida_vda_name_client._internal_.BigNumber.md)

#### Inherited from

[Web3GasConfiguration](verida_vda_name_client._internal_.Web3GasConfiguration.md).[maxFeePerGas](verida_vda_name_client._internal_.Web3GasConfiguration.md#maxfeepergas)

#### Defined in

packages/types/dist/Web3Interfaces.d.ts:14

___

### maxPriorityFeePerGas

• `Optional` **maxPriorityFeePerGas**: [`BigNumber`](../classes/verida_vda_name_client._internal_.BigNumber.md)

#### Inherited from

[Web3GasConfiguration](verida_vda_name_client._internal_.Web3GasConfiguration.md).[maxPriorityFeePerGas](verida_vda_name_client._internal_.Web3GasConfiguration.md#maxpriorityfeepergas)

#### Defined in

packages/types/dist/Web3Interfaces.d.ts:15

___

### methodDefaults

• `Optional` **methodDefaults**: [`Record`](../modules/verida_vda_name_client._internal_.md#record)<`string`, [`Web3GasConfiguration`](verida_vda_name_client._internal_.Web3GasConfiguration.md)\>

#### Defined in

packages/types/dist/Web3Interfaces.d.ts:32

___

### privateKey

• `Optional` **privateKey**: `string`

#### Defined in

packages/types/dist/Web3Interfaces.d.ts:28

___

### provider

• `Optional` **provider**: [`Provider`](../classes/verida_vda_name_client._internal_.Provider.md)

#### Defined in

packages/types/dist/Web3Interfaces.d.ts:29

___

### rpcUrl

• `Optional` **rpcUrl**: `string`

#### Defined in

packages/types/dist/Web3Interfaces.d.ts:30

___

### signer

• `Optional` **signer**: [`Signer`](../classes/verida_vda_name_client._internal_.Signer.md)

#### Defined in

packages/types/dist/Web3Interfaces.d.ts:27

___

### web3

• `Optional` **web3**: `any`

#### Defined in

packages/types/dist/Web3Interfaces.d.ts:31
