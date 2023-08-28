[root](../README.md) / [Modules](../modules.md) / [@verida/types](../modules/verida_types.md) / Web3ProviderConfiguration

# Interface: Web3ProviderConfiguration

[@verida/types](../modules/verida_types.md).Web3ProviderConfiguration

A configuration entry for an ethereum network
It should contain at least one of `name` or `chainId` AND one of `provider`, `web3`, or `rpcUrl`

**`example`** ```js
{ name: 'development', registry: '0x9af37603e98e0dc2b855be647c39abe984fc2445', rpcUrl: 'http://127.0.0.1:8545/' }
{ name: 'goerli', chainId: 5, provider: new InfuraProvider('goerli') }
{ name: 'rinkeby', provider: new AlchemyProvider('rinkeby') }
{ name: 'rsk:testnet', chainId: '0x1f', rpcUrl: 'https://public-node.testnet.rsk.co' }
```

## Indexable

▪ [index: `string`]: `any`

## Table of contents

### Properties

- [chainId](verida_types.Web3ProviderConfiguration.md#chainid)
- [provider](verida_types.Web3ProviderConfiguration.md#provider)
- [rpcUrl](verida_types.Web3ProviderConfiguration.md#rpcurl)
- [web3](verida_types.Web3ProviderConfiguration.md#web3)

## Properties

### chainId

• `Optional` **chainId**: `string` \| `number`

#### Defined in

[packages/types/src/Web3Interfaces.ts:83](https://github.com/verida/verida-js/blob/a690f60/packages/types/src/Web3Interfaces.ts#L83)

___

### provider

• `Optional` **provider**: [`Provider`](../classes/verida_types._internal_.Provider.md)

#### Defined in

[packages/types/src/Web3Interfaces.ts:81](https://github.com/verida/verida-js/blob/a690f60/packages/types/src/Web3Interfaces.ts#L81)

___

### rpcUrl

• `Optional` **rpcUrl**: `string`

#### Defined in

[packages/types/src/Web3Interfaces.ts:82](https://github.com/verida/verida-js/blob/a690f60/packages/types/src/Web3Interfaces.ts#L82)

___

### web3

• `Optional` **web3**: `any`

#### Defined in

[packages/types/src/Web3Interfaces.ts:85](https://github.com/verida/verida-js/blob/a690f60/packages/types/src/Web3Interfaces.ts#L85)
