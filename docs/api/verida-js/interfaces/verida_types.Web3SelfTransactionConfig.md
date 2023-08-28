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

- [gasLimit](verida_types.Web3SelfTransactionConfig.md#gaslimit)
- [maxFeePerGas](verida_types.Web3SelfTransactionConfig.md#maxfeepergas)
- [maxPriorityFeePerGas](verida_types.Web3SelfTransactionConfig.md#maxpriorityfeepergas)
- [methodDefaults](verida_types.Web3SelfTransactionConfig.md#methoddefaults)
- [privateKey](verida_types.Web3SelfTransactionConfig.md#privatekey)
- [provider](verida_types.Web3SelfTransactionConfig.md#provider)
- [rpcUrl](verida_types.Web3SelfTransactionConfig.md#rpcurl)
- [signer](verida_types.Web3SelfTransactionConfig.md#signer)
- [web3](verida_types.Web3SelfTransactionConfig.md#web3)

## Properties

### gasLimit

• `Optional` **gasLimit**: [`BigNumber`](../classes/verida_types._internal_.BigNumber.md)

#### Inherited from

[Web3GasConfiguration](verida_types.Web3GasConfiguration.md).[gasLimit](verida_types.Web3GasConfiguration.md#gaslimit)

#### Defined in

[packages/types/src/Web3Interfaces.ts:20](https://github.com/verida/verida-js/blob/a690f60/packages/types/src/Web3Interfaces.ts#L20)

___

### maxFeePerGas

• `Optional` **maxFeePerGas**: [`BigNumber`](../classes/verida_types._internal_.BigNumber.md)

#### Inherited from

[Web3GasConfiguration](verida_types.Web3GasConfiguration.md).[maxFeePerGas](verida_types.Web3GasConfiguration.md#maxfeepergas)

#### Defined in

[packages/types/src/Web3Interfaces.ts:18](https://github.com/verida/verida-js/blob/a690f60/packages/types/src/Web3Interfaces.ts#L18)

___

### maxPriorityFeePerGas

• `Optional` **maxPriorityFeePerGas**: [`BigNumber`](../classes/verida_types._internal_.BigNumber.md)

#### Inherited from

[Web3GasConfiguration](verida_types.Web3GasConfiguration.md).[maxPriorityFeePerGas](verida_types.Web3GasConfiguration.md#maxpriorityfeepergas)

#### Defined in

[packages/types/src/Web3Interfaces.ts:19](https://github.com/verida/verida-js/blob/a690f60/packages/types/src/Web3Interfaces.ts#L19)

___

### methodDefaults

• `Optional` **methodDefaults**: [`Record`](../modules/verida_types._internal_.md#record)<`string`, [`Web3GasConfiguration`](verida_types.Web3GasConfiguration.md)\>

#### Defined in

[packages/types/src/Web3Interfaces.ts:38](https://github.com/verida/verida-js/blob/a690f60/packages/types/src/Web3Interfaces.ts#L38)

___

### privateKey

• `Optional` **privateKey**: `string`

#### Defined in

[packages/types/src/Web3Interfaces.ts:33](https://github.com/verida/verida-js/blob/a690f60/packages/types/src/Web3Interfaces.ts#L33)

___

### provider

• `Optional` **provider**: [`Provider`](../classes/verida_types._internal_.Provider.md)

#### Defined in

[packages/types/src/Web3Interfaces.ts:34](https://github.com/verida/verida-js/blob/a690f60/packages/types/src/Web3Interfaces.ts#L34)

___

### rpcUrl

• `Optional` **rpcUrl**: `string`

#### Defined in

[packages/types/src/Web3Interfaces.ts:35](https://github.com/verida/verida-js/blob/a690f60/packages/types/src/Web3Interfaces.ts#L35)

___

### signer

• `Optional` **signer**: [`Signer`](../classes/verida_types._internal_.Signer.md)

#### Defined in

[packages/types/src/Web3Interfaces.ts:32](https://github.com/verida/verida-js/blob/a690f60/packages/types/src/Web3Interfaces.ts#L32)

___

### web3

• `Optional` **web3**: `any`

#### Defined in

[packages/types/src/Web3Interfaces.ts:36](https://github.com/verida/verida-js/blob/a690f60/packages/types/src/Web3Interfaces.ts#L36)
