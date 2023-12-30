[root](../README.md) / [Modules](../modules.md) / [@verida/vda-did](../modules/verida_vda_did.md) / [<internal\>](../modules/verida_vda_did._internal_.md) / Web3GasConfiguration

# Interface: Web3GasConfiguration

[@verida/vda-did](../modules/verida_vda_did.md).[<internal\>](../modules/verida_vda_did._internal_.md).Web3GasConfiguration

Gas configuration

eip1559Mode - optional - Once this parameter is set, all other parameters are not used. Gas information is pulled from network.

maxFeePerGas - optional - Used for EIP1559 chains
maxPriorityFeePerGas - optional - Used for EIP1559 chains
gasLimit - optional - Used for non EIP1559 chains
gasPrice - optional - Used for non EIP1559 chains

## Hierarchy

- **`Web3GasConfiguration`**

  ↳ [`Web3SelfTransactionConfig`](verida_vda_did._internal_.Web3SelfTransactionConfig.md)

## Table of contents

### Properties

- [eip1559Mode](verida_vda_did._internal_.Web3GasConfiguration.md#eip1559mode)
- [eip1559gasStationUrl](verida_vda_did._internal_.Web3GasConfiguration.md#eip1559gasstationurl)
- [gasLimit](verida_vda_did._internal_.Web3GasConfiguration.md#gaslimit)
- [gasPrice](verida_vda_did._internal_.Web3GasConfiguration.md#gasprice)
- [maxFeePerGas](verida_vda_did._internal_.Web3GasConfiguration.md#maxfeepergas)
- [maxPriorityFeePerGas](verida_vda_did._internal_.Web3GasConfiguration.md#maxpriorityfeepergas)

## Properties

### eip1559Mode

• `Optional` **eip1559Mode**: [`EIP1559GasMode`](../modules/verida_vda_did._internal_.md#eip1559gasmode)

#### Defined in

packages/types/dist/Web3Interfaces.d.ts:24

___

### eip1559gasStationUrl

• `Optional` **eip1559gasStationUrl**: `string`

#### Defined in

packages/types/dist/Web3Interfaces.d.ts:25

___

### gasLimit

• `Optional` **gasLimit**: [`BigNumber`](../classes/verida_vda_did._internal_.BigNumber.md)

#### Defined in

packages/types/dist/Web3Interfaces.d.ts:28

___

### gasPrice

• `Optional` **gasPrice**: [`BigNumber`](../classes/verida_vda_did._internal_.BigNumber.md)

#### Defined in

packages/types/dist/Web3Interfaces.d.ts:29

___

### maxFeePerGas

• `Optional` **maxFeePerGas**: [`BigNumber`](../classes/verida_vda_did._internal_.BigNumber.md)

#### Defined in

packages/types/dist/Web3Interfaces.d.ts:26

___

### maxPriorityFeePerGas

• `Optional` **maxPriorityFeePerGas**: [`BigNumber`](../classes/verida_vda_did._internal_.BigNumber.md)

#### Defined in

packages/types/dist/Web3Interfaces.d.ts:27
