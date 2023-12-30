[root](../README.md) / [Modules](../modules.md) / [@verida/types](../modules/verida_types.md) / Web3SelfTransactionConfig

# Interface: Web3SelfTransactionConfig

[@verida/types](../modules/verida_types.md).Web3SelfTransactionConfig

Configuration type for Web3 mode

signer - optional - a Signer that sign the blockchain transactions. If a 'signer' is not provided, then 'contract' with an attached signer need to be used to make transactions
provider - optional - a web3 provider. At least one of `signer`,`provider`, or `rpcUrl` is required
rpcUrl - optinal - a JSON-RPC URL that can be used to connect to an ethereum network. At least one of `signer`, `provider`, or `rpcUrl` is required
web3 - optional - Can use provider or web.currentProvider as a provider.

## Hierarchy

- [`Web3GasConfiguration`](verida_types.Web3GasConfiguration.md)

  ↳ **`Web3SelfTransactionConfig`**

## Table of contents

### Properties

- [eip1559Mode](verida_types.Web3SelfTransactionConfig.md#eip1559mode)
- [eip1559gasStationUrl](verida_types.Web3SelfTransactionConfig.md#eip1559gasstationurl)
- [gasLimit](verida_types.Web3SelfTransactionConfig.md#gaslimit)
- [gasPrice](verida_types.Web3SelfTransactionConfig.md#gasprice)
- [maxFeePerGas](verida_types.Web3SelfTransactionConfig.md#maxfeepergas)
- [maxPriorityFeePerGas](verida_types.Web3SelfTransactionConfig.md#maxpriorityfeepergas)
- [methodDefaults](verida_types.Web3SelfTransactionConfig.md#methoddefaults)
- [privateKey](verida_types.Web3SelfTransactionConfig.md#privatekey)
- [provider](verida_types.Web3SelfTransactionConfig.md#provider)
- [rpcUrl](verida_types.Web3SelfTransactionConfig.md#rpcurl)
- [signer](verida_types.Web3SelfTransactionConfig.md#signer)
- [web3](verida_types.Web3SelfTransactionConfig.md#web3)

## Properties

### eip1559Mode

• `Optional` **eip1559Mode**: [`EIP1559GasMode`](../modules/verida_types.md#eip1559gasmode)

#### Inherited from

[Web3GasConfiguration](verida_types.Web3GasConfiguration.md).[eip1559Mode](verida_types.Web3GasConfiguration.md#eip1559mode)

#### Defined in

[packages/types/src/Web3Interfaces.ts:28](https://github.com/verida/verida-js/blob/5040472/packages/types/src/Web3Interfaces.ts#L28)

___

### eip1559gasStationUrl

• `Optional` **eip1559gasStationUrl**: `string`

#### Inherited from

[Web3GasConfiguration](verida_types.Web3GasConfiguration.md).[eip1559gasStationUrl](verida_types.Web3GasConfiguration.md#eip1559gasstationurl)

#### Defined in

[packages/types/src/Web3Interfaces.ts:29](https://github.com/verida/verida-js/blob/5040472/packages/types/src/Web3Interfaces.ts#L29)

___

### gasLimit

• `Optional` **gasLimit**: [`BigNumber`](../classes/verida_types._internal_.BigNumber.md)

#### Inherited from

[Web3GasConfiguration](verida_types.Web3GasConfiguration.md).[gasLimit](verida_types.Web3GasConfiguration.md#gaslimit)

#### Defined in

[packages/types/src/Web3Interfaces.ts:33](https://github.com/verida/verida-js/blob/5040472/packages/types/src/Web3Interfaces.ts#L33)

___

### gasPrice

• `Optional` **gasPrice**: [`BigNumber`](../classes/verida_types._internal_.BigNumber.md)

#### Inherited from

[Web3GasConfiguration](verida_types.Web3GasConfiguration.md).[gasPrice](verida_types.Web3GasConfiguration.md#gasprice)

#### Defined in

[packages/types/src/Web3Interfaces.ts:34](https://github.com/verida/verida-js/blob/5040472/packages/types/src/Web3Interfaces.ts#L34)

___

### maxFeePerGas

• `Optional` **maxFeePerGas**: [`BigNumber`](../classes/verida_types._internal_.BigNumber.md)

#### Inherited from

[Web3GasConfiguration](verida_types.Web3GasConfiguration.md).[maxFeePerGas](verida_types.Web3GasConfiguration.md#maxfeepergas)

#### Defined in

[packages/types/src/Web3Interfaces.ts:31](https://github.com/verida/verida-js/blob/5040472/packages/types/src/Web3Interfaces.ts#L31)

___

### maxPriorityFeePerGas

• `Optional` **maxPriorityFeePerGas**: [`BigNumber`](../classes/verida_types._internal_.BigNumber.md)

#### Inherited from

[Web3GasConfiguration](verida_types.Web3GasConfiguration.md).[maxPriorityFeePerGas](verida_types.Web3GasConfiguration.md#maxpriorityfeepergas)

#### Defined in

[packages/types/src/Web3Interfaces.ts:32](https://github.com/verida/verida-js/blob/5040472/packages/types/src/Web3Interfaces.ts#L32)

___

### methodDefaults

• `Optional` **methodDefaults**: [`Record`](../modules/verida_types._internal_.md#record)<`string`, [`Web3GasConfiguration`](verida_types.Web3GasConfiguration.md)\>

#### Defined in

[packages/types/src/Web3Interfaces.ts:52](https://github.com/verida/verida-js/blob/5040472/packages/types/src/Web3Interfaces.ts#L52)

___

### privateKey

• `Optional` **privateKey**: `string`

#### Defined in

[packages/types/src/Web3Interfaces.ts:47](https://github.com/verida/verida-js/blob/5040472/packages/types/src/Web3Interfaces.ts#L47)

___

### provider

• `Optional` **provider**: [`Provider`](../classes/verida_types._internal_.Provider.md)

#### Defined in

[packages/types/src/Web3Interfaces.ts:48](https://github.com/verida/verida-js/blob/5040472/packages/types/src/Web3Interfaces.ts#L48)

___

### rpcUrl

• `Optional` **rpcUrl**: `string`

#### Defined in

[packages/types/src/Web3Interfaces.ts:49](https://github.com/verida/verida-js/blob/5040472/packages/types/src/Web3Interfaces.ts#L49)

___

### signer

• `Optional` **signer**: [`Signer`](../classes/verida_types._internal_.Signer.md)

#### Defined in

[packages/types/src/Web3Interfaces.ts:46](https://github.com/verida/verida-js/blob/5040472/packages/types/src/Web3Interfaces.ts#L46)

___

### web3

• `Optional` **web3**: `any`

#### Defined in

[packages/types/src/Web3Interfaces.ts:50](https://github.com/verida/verida-js/blob/5040472/packages/types/src/Web3Interfaces.ts#L50)
