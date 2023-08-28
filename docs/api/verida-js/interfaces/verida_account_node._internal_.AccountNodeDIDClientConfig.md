[root](../README.md) / [Modules](../modules.md) / [@verida/account-node](../modules/verida_account_node.md) / [<internal\>](../modules/verida_account_node._internal_.md) / AccountNodeDIDClientConfig

# Interface: AccountNodeDIDClientConfig

[@verida/account-node](../modules/verida_account_node.md).[<internal\>](../modules/verida_account_node._internal_.md).AccountNodeDIDClientConfig

Client configuration required for AccountNode that will support creating a DID
on chain, if required

## Hierarchy

- [`Omit`](../modules/verida_account_node._internal_.md#omit)<[`DIDClientConfig`](verida_account_node._internal_.DIDClientConfig.md), ``"network"``\>

  ↳ **`AccountNodeDIDClientConfig`**

## Table of contents

### Properties

- [callType](verida_account_node._internal_.AccountNodeDIDClientConfig.md#calltype)
- [didEndpoints](verida_account_node._internal_.AccountNodeDIDClientConfig.md#didendpoints)
- [rpcUrl](verida_account_node._internal_.AccountNodeDIDClientConfig.md#rpcurl)
- [timeout](verida_account_node._internal_.AccountNodeDIDClientConfig.md#timeout)
- [web3Config](verida_account_node._internal_.AccountNodeDIDClientConfig.md#web3config)

## Properties

### callType

• **callType**: [`Web3CallType`](../modules/verida_account_node._internal_.md#web3calltype)

#### Defined in

packages/types/dist/AccountInterfaces.d.ts:44

___

### didEndpoints

• `Optional` **didEndpoints**: `string`[]

#### Defined in

packages/types/dist/AccountInterfaces.d.ts:46

___

### rpcUrl

• `Optional` **rpcUrl**: `string`

#### Inherited from

Omit.rpcUrl

#### Defined in

packages/types/dist/NetworkInterfaces.d.ts:22

___

### timeout

• `Optional` **timeout**: `number`

#### Inherited from

Omit.timeout

#### Defined in

packages/types/dist/NetworkInterfaces.d.ts:23

___

### web3Config

• **web3Config**: [`Web3MetaTransactionConfig`](verida_account_node._internal_.Web3MetaTransactionConfig.md) \| [`Web3SelfTransactionConfig`](verida_account_node._internal_.Web3SelfTransactionConfig.md)

#### Defined in

packages/types/dist/AccountInterfaces.d.ts:45
