[root](../README.md) / [Modules](../modules.md) / [@verida/account-web-vault](../modules/verida_account_web_vault.md) / [<internal\>](../modules/verida_account_web_vault._internal_.md) / AccountVaultConfig

# Interface: AccountVaultConfig

[@verida/account-web-vault](../modules/verida_account_web_vault.md).[<internal\>](../modules/verida_account_web_vault._internal_.md).AccountVaultConfig

## Table of contents

### Properties

- [canvasId](verida_account_web_vault._internal_.AccountVaultConfig.md#canvasid)
- [deeplinkId](verida_account_web_vault._internal_.AccountVaultConfig.md#deeplinkid)
- [environment](verida_account_web_vault._internal_.AccountVaultConfig.md#environment)
- [loginUri](verida_account_web_vault._internal_.AccountVaultConfig.md#loginuri)
- [request](verida_account_web_vault._internal_.AccountVaultConfig.md#request)
- [schemeUri](verida_account_web_vault._internal_.AccountVaultConfig.md#schemeuri)
- [serverUri](verida_account_web_vault._internal_.AccountVaultConfig.md#serveruri)

### Methods

- [callback](verida_account_web_vault._internal_.AccountVaultConfig.md#callback)
- [callbackRejected](verida_account_web_vault._internal_.AccountVaultConfig.md#callbackrejected)

## Properties

### canvasId

• `Optional` **canvasId**: `string`

#### Defined in

packages/types/dist/AccountInterfaces.d.ts:66

___

### deeplinkId

• `Optional` **deeplinkId**: `string`

#### Defined in

packages/types/dist/AccountInterfaces.d.ts:68

___

### environment

• `Optional` **environment**: [`EnvironmentType`](../enums/verida_account_web_vault._internal_.EnvironmentType.md)

#### Defined in

packages/types/dist/AccountInterfaces.d.ts:70

___

### loginUri

• `Optional` **loginUri**: `string`

#### Defined in

packages/types/dist/AccountInterfaces.d.ts:65

___

### request

• `Optional` **request**: [`AccountVaultRequest`](verida_account_web_vault._internal_.AccountVaultRequest.md)

#### Defined in

packages/types/dist/AccountInterfaces.d.ts:69

___

### schemeUri

• `Optional` **schemeUri**: `string`

#### Defined in

packages/types/dist/AccountInterfaces.d.ts:67

___

### serverUri

• `Optional` **serverUri**: `string`

#### Defined in

packages/types/dist/AccountInterfaces.d.ts:64

## Methods

### callback

▸ `Optional` **callback**(`response`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | [`AuthResponse`](verida_account_web_vault._internal_.AuthResponse.md) |

#### Returns

`void`

#### Defined in

packages/types/dist/AccountInterfaces.d.ts:71

___

### callbackRejected

▸ `Optional` **callbackRejected**(): `void`

#### Returns

`void`

#### Defined in

packages/types/dist/AccountInterfaces.d.ts:72
