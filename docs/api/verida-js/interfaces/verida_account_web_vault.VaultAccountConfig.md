[root](../README.md) / [Modules](../modules.md) / [@verida/account-web-vault](../modules/verida_account_web_vault.md) / VaultAccountConfig

# Interface: VaultAccountConfig

[@verida/account-web-vault](../modules/verida_account_web_vault.md).VaultAccountConfig

## Table of contents

### Properties

- [canvasId](verida_account_web_vault.VaultAccountConfig.md#canvasid)
- [deeplinkId](verida_account_web_vault.VaultAccountConfig.md#deeplinkid)
- [loginUri](verida_account_web_vault.VaultAccountConfig.md#loginuri)
- [request](verida_account_web_vault.VaultAccountConfig.md#request)
- [schemeUri](verida_account_web_vault.VaultAccountConfig.md#schemeuri)
- [serverUri](verida_account_web_vault.VaultAccountConfig.md#serveruri)

### Methods

- [callback](verida_account_web_vault.VaultAccountConfig.md#callback)
- [callbackRejected](verida_account_web_vault.VaultAccountConfig.md#callbackrejected)

## Properties

### canvasId

• `Optional` **canvasId**: `string`

#### Defined in

[packages/account-web-vault/src/interfaces.ts:11](https://github.com/verida/verida-js/blob/c03b336/packages/account-web-vault/src/interfaces.ts#L11)

___

### deeplinkId

• `Optional` **deeplinkId**: `string`

#### Defined in

[packages/account-web-vault/src/interfaces.ts:13](https://github.com/verida/verida-js/blob/c03b336/packages/account-web-vault/src/interfaces.ts#L13)

___

### loginUri

• `Optional` **loginUri**: `string`

#### Defined in

[packages/account-web-vault/src/interfaces.ts:10](https://github.com/verida/verida-js/blob/c03b336/packages/account-web-vault/src/interfaces.ts#L10)

___

### request

• `Optional` **request**: [`VaultAccountRequest`](verida_account_web_vault._internal_.VaultAccountRequest.md)

#### Defined in

[packages/account-web-vault/src/interfaces.ts:14](https://github.com/verida/verida-js/blob/c03b336/packages/account-web-vault/src/interfaces.ts#L14)

___

### schemeUri

• `Optional` **schemeUri**: `string`

#### Defined in

[packages/account-web-vault/src/interfaces.ts:12](https://github.com/verida/verida-js/blob/c03b336/packages/account-web-vault/src/interfaces.ts#L12)

___

### serverUri

• `Optional` **serverUri**: `string`

#### Defined in

[packages/account-web-vault/src/interfaces.ts:9](https://github.com/verida/verida-js/blob/c03b336/packages/account-web-vault/src/interfaces.ts#L9)

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

[packages/account-web-vault/src/interfaces.ts:15](https://github.com/verida/verida-js/blob/c03b336/packages/account-web-vault/src/interfaces.ts#L15)

___

### callbackRejected

▸ `Optional` **callbackRejected**(): `void`

#### Returns

`void`

#### Defined in

[packages/account-web-vault/src/interfaces.ts:16](https://github.com/verida/verida-js/blob/c03b336/packages/account-web-vault/src/interfaces.ts#L16)
