[root](../README.md) / [Modules](../modules.md) / [@verida/web3](../modules/verida_web3.md) / [<internal\>](../modules/verida_web3._internal_.md) / Web3SelfTransactionConfig

# Interface: Web3SelfTransactionConfig

[@verida/web3](../modules/verida_web3.md).[<internal\>](../modules/verida_web3._internal_.md).Web3SelfTransactionConfig

Configuration type for Web3 mode

signer - optional - a Signer that sign the blockchain transactions. If a 'signer' is not provided, then 'contract' with an attached signer need to be used to make transactions
provider - optional - a web3 provider. At least one of `signer`,`provider`, or `rpcUrl` is required
rpcUrl - optinal - a JSON-RPC URL that can be used to connect to an ethereum network. At least one of `signer`, `provider`, or `rpcUrl` is required
web3 - optional - Can use provider or web.currentProvider as a provider.

## Hierarchy

- [`Web3GasConfiguration`](verida_web3._internal_.Web3GasConfiguration.md)

  ↳ **`Web3SelfTransactionConfig`**

## Table of contents

### Properties

- [eip1559Mode](verida_web3._internal_.Web3SelfTransactionConfig.md#eip1559mode)
- [eip1559gasStationUrl](verida_web3._internal_.Web3SelfTransactionConfig.md#eip1559gasstationurl)
- [gasLimit](verida_web3._internal_.Web3SelfTransactionConfig.md#gaslimit)
- [gasPrice](verida_web3._internal_.Web3SelfTransactionConfig.md#gasprice)
- [maxFeePerGas](verida_web3._internal_.Web3SelfTransactionConfig.md#maxfeepergas)
- [maxPriorityFeePerGas](verida_web3._internal_.Web3SelfTransactionConfig.md#maxpriorityfeepergas)
- [methodDefaults](verida_web3._internal_.Web3SelfTransactionConfig.md#methoddefaults)
- [privateKey](verida_web3._internal_.Web3SelfTransactionConfig.md#privatekey)
- [provider](verida_web3._internal_.Web3SelfTransactionConfig.md#provider)
- [rpcUrl](verida_web3._internal_.Web3SelfTransactionConfig.md#rpcurl)
- [signer](verida_web3._internal_.Web3SelfTransactionConfig.md#signer)
- [web3](verida_web3._internal_.Web3SelfTransactionConfig.md#web3)

## Properties

### eip1559Mode

• `Optional` **eip1559Mode**: [`EIP1559GasMode`](../modules/verida_web3._internal_.md#eip1559gasmode)

#### Inherited from

[Web3GasConfiguration](verida_web3._internal_.Web3GasConfiguration.md).[eip1559Mode](verida_web3._internal_.Web3GasConfiguration.md#eip1559mode)

#### Defined in

packages/types/dist/Web3Interfaces.d.ts:24

___

### eip1559gasStationUrl

• `Optional` **eip1559gasStationUrl**: `string`

#### Inherited from

[Web3GasConfiguration](verida_web3._internal_.Web3GasConfiguration.md).[eip1559gasStationUrl](verida_web3._internal_.Web3GasConfiguration.md#eip1559gasstationurl)

#### Defined in

packages/types/dist/Web3Interfaces.d.ts:25

___

### gasLimit

• `Optional` **gasLimit**: [`BigNumber`](../classes/verida_web3._internal_.BigNumber.md)

#### Inherited from

[Web3GasConfiguration](verida_web3._internal_.Web3GasConfiguration.md).[gasLimit](verida_web3._internal_.Web3GasConfiguration.md#gaslimit)

#### Defined in

packages/types/dist/Web3Interfaces.d.ts:28

___

### gasPrice

• `Optional` **gasPrice**: [`BigNumber`](../classes/verida_web3._internal_.BigNumber.md)

#### Inherited from

[Web3GasConfiguration](verida_web3._internal_.Web3GasConfiguration.md).[gasPrice](verida_web3._internal_.Web3GasConfiguration.md#gasprice)

#### Defined in

packages/types/dist/Web3Interfaces.d.ts:29

___

### maxFeePerGas

• `Optional` **maxFeePerGas**: [`BigNumber`](../classes/verida_web3._internal_.BigNumber.md)

#### Inherited from

[Web3GasConfiguration](verida_web3._internal_.Web3GasConfiguration.md).[maxFeePerGas](verida_web3._internal_.Web3GasConfiguration.md#maxfeepergas)

#### Defined in

packages/types/dist/Web3Interfaces.d.ts:26

___

### maxPriorityFeePerGas

• `Optional` **maxPriorityFeePerGas**: [`BigNumber`](../classes/verida_web3._internal_.BigNumber.md)

#### Inherited from

[Web3GasConfiguration](verida_web3._internal_.Web3GasConfiguration.md).[maxPriorityFeePerGas](verida_web3._internal_.Web3GasConfiguration.md#maxpriorityfeepergas)

#### Defined in

packages/types/dist/Web3Interfaces.d.ts:27

___

### methodDefaults

• `Optional` **methodDefaults**: [`Record`](../modules/verida_web3._internal_.md#record)<`string`, [`Web3GasConfiguration`](verida_web3._internal_.Web3GasConfiguration.md)\>

#### Defined in

packages/types/dist/Web3Interfaces.d.ts:45

___

### privateKey

• `Optional` **privateKey**: `string`

#### Defined in

packages/types/dist/Web3Interfaces.d.ts:41

___

### provider

• `Optional` **provider**: [`Provider`](../classes/verida_web3._internal_.Provider.md)

#### Defined in

packages/types/dist/Web3Interfaces.d.ts:42

___

### rpcUrl

• `Optional` **rpcUrl**: `string`

#### Defined in

packages/types/dist/Web3Interfaces.d.ts:43

___

### signer

• `Optional` **signer**: [`Signer`](../classes/verida_web3._internal_.Signer.md)

#### Defined in

packages/types/dist/Web3Interfaces.d.ts:40

___

### web3

• `Optional` **web3**: `any`

#### Defined in

packages/types/dist/Web3Interfaces.d.ts:44
