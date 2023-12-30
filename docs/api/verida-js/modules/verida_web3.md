[root](../README.md) / [Modules](../modules.md) / @verida/web3

# Module: @verida/web3

## Table of contents

### Namespaces

- [&lt;internal\&gt;](verida_web3._internal_.md)

### Classes

- [VeridaContract](../classes/verida_web3.VeridaContract.md)

### Functions

- [getVeridaContract](verida_web3.md#getveridacontract)

## Functions

### getVeridaContract

▸ **getVeridaContract**(`type`, `config`): [`VeridaContract`](../classes/verida_web3.VeridaContract.md)

Create VeridaContract instance - that is verida-web3-sdk instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | [`Web3CallType`](verida_web3._internal_.md#web3calltype) | Smart contract interaction mode |
| `config` | [`VeridaWeb3Config`](verida_web3._internal_.md#veridaweb3config) | Configuration to create Verida-web3-sdk instance |

#### Returns

[`VeridaContract`](../classes/verida_web3.VeridaContract.md)

VeridaContract instance

#### Defined in

[packages/vda-web3-client/src/index.ts:11](https://github.com/verida/verida-js/blob/5040472/packages/vda-web3-client/src/index.ts#L11)
