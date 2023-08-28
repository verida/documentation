[root](../README.md) / [Modules](../modules.md) / [@verida/web3](../modules/verida_web3.md) / [<internal\>](../modules/verida_web3._internal_.md) / Description

# Class: Description<T\>

[@verida/web3](../modules/verida_web3.md).[<internal\>](../modules/verida_web3._internal_.md).Description

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

## Hierarchy

- **`Description`**

  ↳ [`Indexed`](verida_web3._internal_.Indexed.md)

  ↳ [`TransactionDescription`](verida_web3._internal_.TransactionDescription.md)

  ↳ [`LogDescription`](verida_web3._internal_.LogDescription.md)

  ↳ [`ErrorDescription`](verida_web3._internal_.ErrorDescription.md)

  ↳ [`ForkEvent`](verida_web3._internal_.ForkEvent.md)

## Table of contents

### Constructors

- [constructor](verida_web3._internal_.Description.md#constructor)

## Constructors

### constructor

• **new Description**<`T`\>(`info`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `info` | { [K in string \| number \| symbol]: T[K] } |

#### Defined in

node_modules/@ethersproject/properties/lib/index.d.ts:13
