[root](../README.md) / [Modules](../modules.md) / @verida/vda-common-test

# Module: @verida/vda-common-test

## Table of contents

### Interfaces

- [DidInterface](../interfaces/verida_vda_common_test.DidInterface.md)

### Variables

- [DID\_LIST](verida_vda_common_test.md#did_list)
- [RECIPIENT\_WALLET](verida_vda_common_test.md#recipient_wallet)
- [TRUSTED\_SIGNER](verida_vda_common_test.md#trusted_signer)
- [ZERO\_ADDRESS](verida_vda_common_test.md#zero_address)

### Functions

- [getBlockchainAPIConfiguration](verida_vda_common_test.md#getblockchainapiconfiguration)
- [sleep](verida_vda_common_test.md#sleep)

## Variables

### DID\_LIST

• `Const` **DID\_LIST**: [`DidInterface`](../interfaces/verida_vda_common_test.DidInterface.md)[]

#### Defined in

[packages/vda-common-test/src/const.ts:9](https://github.com/verida/verida-js/blob/a690f60/packages/vda-common-test/src/const.ts#L9)

___

### RECIPIENT\_WALLET

• `Const` **RECIPIENT\_WALLET**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `privateKey` | `string` |
| `publicKey` | `string` |

#### Defined in

[packages/vda-common-test/src/const.ts:43](https://github.com/verida/verida-js/blob/a690f60/packages/vda-common-test/src/const.ts#L43)

___

### TRUSTED\_SIGNER

• `Const` **TRUSTED\_SIGNER**: [`DidInterface`](../interfaces/verida_vda_common_test.DidInterface.md)

#### Defined in

[packages/vda-common-test/src/const.ts:37](https://github.com/verida/verida-js/blob/a690f60/packages/vda-common-test/src/const.ts#L37)

___

### ZERO\_ADDRESS

• `Const` **ZERO\_ADDRESS**: `string` = `ethers.ZeroAddress`

#### Defined in

[packages/vda-common-test/src/const.ts:49](https://github.com/verida/verida-js/blob/a690f60/packages/vda-common-test/src/const.ts#L49)

## Functions

### getBlockchainAPIConfiguration

▸ **getBlockchainAPIConfiguration**(`privateKey`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `privateKey` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `callType` | ``"gasless"`` \| ``"web3"`` |
| `web3Options` | {} |

#### Defined in

[packages/vda-common-test/src/utils.ts:9](https://github.com/verida/verida-js/blob/a690f60/packages/vda-common-test/src/utils.ts#L9)

___

### sleep

▸ **sleep**(`ms`): `Promise`<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ms` | `number` |

#### Returns

`Promise`<`unknown`\>

#### Defined in

[packages/vda-common-test/src/utils.ts:3](https://github.com/verida/verida-js/blob/a690f60/packages/vda-common-test/src/utils.ts#L3)
