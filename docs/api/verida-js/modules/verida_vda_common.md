[root](../README.md) / [Modules](../modules.md) / @verida/vda-common

# Module: @verida/vda-common

## Table of contents

### Namespaces

- [&lt;internal\&gt;](verida_vda_common._internal_.md)

### Interfaces

- [CONTRACT\_INFO](../interfaces/verida_vda_common.CONTRACT_INFO.md)

### Type aliases

- [CONTRACT\_NAMES](verida_vda_common.md#contract_names)

### Variables

- [CONTRACT\_ABI](verida_vda_common.md#contract_abi)
- [CONTRACT\_ADDRESS](verida_vda_common.md#contract_address)
- [RPC\_URLS](verida_vda_common.md#rpc_urls)

### Functions

- [getContractInfoForNetwork](verida_vda_common.md#getcontractinfofornetwork)
- [getDefaultRpcUrl](verida_vda_common.md#getdefaultrpcurl)
- [getVeridaSign](verida_vda_common.md#getveridasign)
- [getVeridaSignWithNonce](verida_vda_common.md#getveridasignwithnonce)
- [interpretIdentifier](verida_vda_common.md#interpretidentifier)

## Type aliases

### CONTRACT\_NAMES

Ƭ **CONTRACT\_NAMES**: ``"VeridaDIDRegistry"`` \| ``"NameRegistry"`` \| ``"SoulboundNFT"`` \| ``"VeridaDIDLinkage"`` \| ``"VeridaToken"`` \| ``"VDARewardContract"``

#### Defined in

[packages/vda-common/src/contract.ts:2](https://github.com/verida/verida-js/blob/a690f60/packages/vda-common/src/contract.ts#L2)

## Variables

### CONTRACT\_ABI

• `Const` **CONTRACT\_ABI**: [`Record`](verida_vda_common._internal_.md#record)<[`CONTRACT_NAMES`](verida_vda_common.md#contract_names), `any`\>

#### Defined in

[packages/vda-common/src/contract.ts:63](https://github.com/verida/verida-js/blob/a690f60/packages/vda-common/src/contract.ts#L63)

___

### CONTRACT\_ADDRESS

• `Const` **CONTRACT\_ADDRESS**: [`Record`](verida_vda_common._internal_.md#record)<[`CONTRACT_NAMES`](verida_vda_common.md#contract_names), [`Record`](verida_vda_common._internal_.md#record)<`string`, `string` \| ``null``\>\>

#### Defined in

[packages/vda-common/src/contract.ts:17](https://github.com/verida/verida-js/blob/a690f60/packages/vda-common/src/contract.ts#L17)

___

### RPC\_URLS

• `Const` **RPC\_URLS**: [`Record`](verida_vda_common._internal_.md#record)<`string`, `string` \| ``null``\>

#### Defined in

[packages/vda-common/src/rpc.ts:1](https://github.com/verida/verida-js/blob/a690f60/packages/vda-common/src/rpc.ts#L1)

## Functions

### getContractInfoForNetwork

▸ **getContractInfoForNetwork**(`name`, `chainNameOrId`): [`CONTRACT_INFO`](../interfaces/verida_vda_common.CONTRACT_INFO.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | [`CONTRACT_NAMES`](verida_vda_common.md#contract_names) |
| `chainNameOrId` | `string` |

#### Returns

[`CONTRACT_INFO`](../interfaces/verida_vda_common.CONTRACT_INFO.md)

#### Defined in

[packages/vda-common/src/contract.ts:73](https://github.com/verida/verida-js/blob/a690f60/packages/vda-common/src/contract.ts#L73)

___

### getDefaultRpcUrl

▸ **getDefaultRpcUrl**(`chainNameOrId`): ``null`` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chainNameOrId` | `any` |

#### Returns

``null`` \| `string`

#### Defined in

[packages/vda-common/src/rpc.ts:9](https://github.com/verida/verida-js/blob/a690f60/packages/vda-common/src/rpc.ts#L9)

___

### getVeridaSign

▸ **getVeridaSign**(`rawMsg`, `privateKey`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rawMsg` | `string` |
| `privateKey` | `string` |

#### Returns

`string`

#### Defined in

[packages/vda-common/src/utils.ts:38](https://github.com/verida/verida-js/blob/a690f60/packages/vda-common/src/utils.ts#L38)

___

### getVeridaSignWithNonce

▸ **getVeridaSignWithNonce**(`rawMsg`, `privateKey`, `nonce`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rawMsg` | `string` |
| `privateKey` | `string` |
| `nonce` | `number` |

#### Returns

`string`

#### Defined in

[packages/vda-common/src/utils.ts:29](https://github.com/verida/verida-js/blob/a690f60/packages/vda-common/src/utils.ts#L29)

___

### interpretIdentifier

▸ **interpretIdentifier**(`identifier`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `identifier` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `network?` | `string` |
| `publicKey?` | `string` |

#### Defined in

[packages/vda-common/src/utils.ts:6](https://github.com/verida/verida-js/blob/a690f60/packages/vda-common/src/utils.ts#L6)
