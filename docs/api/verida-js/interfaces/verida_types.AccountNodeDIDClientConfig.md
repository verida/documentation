[root](../README.md) / [Modules](../modules.md) / [@verida/types](../modules/verida_types.md) / AccountNodeDIDClientConfig

# Interface: AccountNodeDIDClientConfig

[@verida/types](../modules/verida_types.md).AccountNodeDIDClientConfig

Client configuration required for AccountNode that will support creating a DID
on chain, if required

## Hierarchy

- [`Omit`](../modules/verida_types._internal_.md#omit)<[`DIDClientConfig`](verida_types.DIDClientConfig.md), ``"network"``\>

  ↳ **`AccountNodeDIDClientConfig`**

## Table of contents

### Properties

- [callType](verida_types.AccountNodeDIDClientConfig.md#calltype)
- [didEndpoints](verida_types.AccountNodeDIDClientConfig.md#didendpoints)
- [rpcUrl](verida_types.AccountNodeDIDClientConfig.md#rpcurl)
- [timeout](verida_types.AccountNodeDIDClientConfig.md#timeout)
- [web3Config](verida_types.AccountNodeDIDClientConfig.md#web3config)

## Properties

### callType

• **callType**: [`Web3CallType`](../modules/verida_types.md#web3calltype)

#### Defined in

[packages/types/src/AccountInterfaces.ts:55](https://github.com/verida/verida-js/blob/5040472/packages/types/src/AccountInterfaces.ts#L55)

___

### didEndpoints

• `Optional` **didEndpoints**: `string`[]

#### Defined in

[packages/types/src/AccountInterfaces.ts:57](https://github.com/verida/verida-js/blob/5040472/packages/types/src/AccountInterfaces.ts#L57)

___

### rpcUrl

• `Optional` **rpcUrl**: `string`

#### Inherited from

Omit.rpcUrl

#### Defined in

[packages/types/src/NetworkInterfaces.ts:26](https://github.com/verida/verida-js/blob/5040472/packages/types/src/NetworkInterfaces.ts#L26)

___

### timeout

• `Optional` **timeout**: `number`

#### Inherited from

Omit.timeout

#### Defined in

[packages/types/src/NetworkInterfaces.ts:27](https://github.com/verida/verida-js/blob/5040472/packages/types/src/NetworkInterfaces.ts#L27)

___

### web3Config

• **web3Config**: [`Web3SelfTransactionConfig`](verida_types.Web3SelfTransactionConfig.md) \| [`Web3MetaTransactionConfig`](verida_types.Web3MetaTransactionConfig.md)

#### Defined in

[packages/types/src/AccountInterfaces.ts:56](https://github.com/verida/verida-js/blob/5040472/packages/types/src/AccountInterfaces.ts#L56)
