[root](../README.md) / [Modules](../modules.md) / [@verida/types](../modules/verida_types.md) / Web3GasConfiguration

# Interface: Web3GasConfiguration

[@verida/types](../modules/verida_types.md).Web3GasConfiguration

Gas configuration

eip1559Mode - optional - Once this parameter is set, all other parameters are not used. Gas information is pulled from network.

maxFeePerGas - optional - Used for EIP1559 chains
maxPriorityFeePerGas - optional - Used for EIP1559 chains
gasLimit - optional - Used for non EIP1559 chains
gasPrice - optional - Used for non EIP1559 chains

## Hierarchy

- **`Web3GasConfiguration`**

  ↳ [`Web3SelfTransactionConfig`](verida_types.Web3SelfTransactionConfig.md)

## Table of contents

### Properties

- [eip1559Mode](verida_types.Web3GasConfiguration.md#eip1559mode)
- [eip1559gasStationUrl](verida_types.Web3GasConfiguration.md#eip1559gasstationurl)
- [gasLimit](verida_types.Web3GasConfiguration.md#gaslimit)
- [gasPrice](verida_types.Web3GasConfiguration.md#gasprice)
- [maxFeePerGas](verida_types.Web3GasConfiguration.md#maxfeepergas)
- [maxPriorityFeePerGas](verida_types.Web3GasConfiguration.md#maxpriorityfeepergas)

## Properties

### eip1559Mode

• `Optional` **eip1559Mode**: [`EIP1559GasMode`](../modules/verida_types.md#eip1559gasmode)

#### Defined in

[packages/types/src/Web3Interfaces.ts:28](https://github.com/verida/verida-js/blob/5040472/packages/types/src/Web3Interfaces.ts#L28)

___

### eip1559gasStationUrl

• `Optional` **eip1559gasStationUrl**: `string`

#### Defined in

[packages/types/src/Web3Interfaces.ts:29](https://github.com/verida/verida-js/blob/5040472/packages/types/src/Web3Interfaces.ts#L29)

___

### gasLimit

• `Optional` **gasLimit**: [`BigNumber`](../classes/verida_types._internal_.BigNumber.md)

#### Defined in

[packages/types/src/Web3Interfaces.ts:33](https://github.com/verida/verida-js/blob/5040472/packages/types/src/Web3Interfaces.ts#L33)

___

### gasPrice

• `Optional` **gasPrice**: [`BigNumber`](../classes/verida_types._internal_.BigNumber.md)

#### Defined in

[packages/types/src/Web3Interfaces.ts:34](https://github.com/verida/verida-js/blob/5040472/packages/types/src/Web3Interfaces.ts#L34)

___

### maxFeePerGas

• `Optional` **maxFeePerGas**: [`BigNumber`](../classes/verida_types._internal_.BigNumber.md)

#### Defined in

[packages/types/src/Web3Interfaces.ts:31](https://github.com/verida/verida-js/blob/5040472/packages/types/src/Web3Interfaces.ts#L31)

___

### maxPriorityFeePerGas

• `Optional` **maxPriorityFeePerGas**: [`BigNumber`](../classes/verida_types._internal_.BigNumber.md)

#### Defined in

[packages/types/src/Web3Interfaces.ts:32](https://github.com/verida/verida-js/blob/5040472/packages/types/src/Web3Interfaces.ts#L32)
