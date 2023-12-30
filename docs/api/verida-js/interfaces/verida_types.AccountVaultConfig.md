[root](../README.md) / [Modules](../modules.md) / [@verida/types](../modules/verida_types.md) / AccountVaultConfig

# Interface: AccountVaultConfig

[@verida/types](../modules/verida_types.md).AccountVaultConfig

## Table of contents

### Properties

- [canvasId](verida_types.AccountVaultConfig.md#canvasid)
- [deeplinkId](verida_types.AccountVaultConfig.md#deeplinkid)
- [environment](verida_types.AccountVaultConfig.md#environment)
- [loginUri](verida_types.AccountVaultConfig.md#loginuri)
- [request](verida_types.AccountVaultConfig.md#request)
- [schemeUri](verida_types.AccountVaultConfig.md#schemeuri)
- [serverUri](verida_types.AccountVaultConfig.md#serveruri)

### Methods

- [callback](verida_types.AccountVaultConfig.md#callback)
- [callbackRejected](verida_types.AccountVaultConfig.md#callbackrejected)

## Properties

### canvasId

• `Optional` **canvasId**: `string`

#### Defined in

[packages/types/src/AccountInterfaces.ts:80](https://github.com/verida/verida-js/blob/5040472/packages/types/src/AccountInterfaces.ts#L80)

___

### deeplinkId

• `Optional` **deeplinkId**: `string`

#### Defined in

[packages/types/src/AccountInterfaces.ts:82](https://github.com/verida/verida-js/blob/5040472/packages/types/src/AccountInterfaces.ts#L82)

___

### environment

• `Optional` **environment**: [`EnvironmentType`](../enums/verida_types.EnvironmentType.md)

#### Defined in

[packages/types/src/AccountInterfaces.ts:84](https://github.com/verida/verida-js/blob/5040472/packages/types/src/AccountInterfaces.ts#L84)

___

### loginUri

• `Optional` **loginUri**: `string`

#### Defined in

[packages/types/src/AccountInterfaces.ts:79](https://github.com/verida/verida-js/blob/5040472/packages/types/src/AccountInterfaces.ts#L79)

___

### request

• `Optional` **request**: [`AccountVaultRequest`](verida_types.AccountVaultRequest.md)

#### Defined in

[packages/types/src/AccountInterfaces.ts:83](https://github.com/verida/verida-js/blob/5040472/packages/types/src/AccountInterfaces.ts#L83)

___

### schemeUri

• `Optional` **schemeUri**: `string`

#### Defined in

[packages/types/src/AccountInterfaces.ts:81](https://github.com/verida/verida-js/blob/5040472/packages/types/src/AccountInterfaces.ts#L81)

___

### serverUri

• `Optional` **serverUri**: `string`

#### Defined in

[packages/types/src/AccountInterfaces.ts:78](https://github.com/verida/verida-js/blob/5040472/packages/types/src/AccountInterfaces.ts#L78)

## Methods

### callback

▸ `Optional` **callback**(`response`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | [`AuthResponse`](verida_types.AuthResponse.md) |

#### Returns

`void`

#### Defined in

[packages/types/src/AccountInterfaces.ts:85](https://github.com/verida/verida-js/blob/5040472/packages/types/src/AccountInterfaces.ts#L85)

___

### callbackRejected

▸ `Optional` **callbackRejected**(): `void`

#### Returns

`void`

#### Defined in

[packages/types/src/AccountInterfaces.ts:86](https://github.com/verida/verida-js/blob/5040472/packages/types/src/AccountInterfaces.ts#L86)
