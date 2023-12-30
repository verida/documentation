[root](../README.md) / [Modules](../modules.md) / [@verida/types](../modules/verida_types.md) / AuthClientConfig

# Interface: AuthClientConfig

[@verida/types](../modules/verida_types.md).AuthClientConfig

## Table of contents

### Properties

- [appName](verida_types.AuthClientConfig.md#appname)
- [canvasId](verida_types.AuthClientConfig.md#canvasid)
- [deeplinkId](verida_types.AuthClientConfig.md#deeplinkid)
- [loginUri](verida_types.AuthClientConfig.md#loginuri)
- [request](verida_types.AuthClientConfig.md#request)
- [schemeUri](verida_types.AuthClientConfig.md#schemeuri)
- [serverUri](verida_types.AuthClientConfig.md#serveruri)

### Methods

- [callback](verida_types.AuthClientConfig.md#callback)
- [callbackRejected](verida_types.AuthClientConfig.md#callbackrejected)

## Properties

### appName

• **appName**: `string`

#### Defined in

[packages/types/src/AccountInterfaces.ts:90](https://github.com/verida/verida-js/blob/5040472/packages/types/src/AccountInterfaces.ts#L90)

___

### canvasId

• `Optional` **canvasId**: `string`

#### Defined in

[packages/types/src/AccountInterfaces.ts:93](https://github.com/verida/verida-js/blob/5040472/packages/types/src/AccountInterfaces.ts#L93)

___

### deeplinkId

• `Optional` **deeplinkId**: `string`

#### Defined in

[packages/types/src/AccountInterfaces.ts:95](https://github.com/verida/verida-js/blob/5040472/packages/types/src/AccountInterfaces.ts#L95)

___

### loginUri

• `Optional` **loginUri**: `string`

#### Defined in

[packages/types/src/AccountInterfaces.ts:92](https://github.com/verida/verida-js/blob/5040472/packages/types/src/AccountInterfaces.ts#L92)

___

### request

• `Optional` **request**: [`AccountVaultRequest`](verida_types.AccountVaultRequest.md)

#### Defined in

[packages/types/src/AccountInterfaces.ts:96](https://github.com/verida/verida-js/blob/5040472/packages/types/src/AccountInterfaces.ts#L96)

___

### schemeUri

• `Optional` **schemeUri**: `string`

#### Defined in

[packages/types/src/AccountInterfaces.ts:94](https://github.com/verida/verida-js/blob/5040472/packages/types/src/AccountInterfaces.ts#L94)

___

### serverUri

• **serverUri**: `string`

#### Defined in

[packages/types/src/AccountInterfaces.ts:91](https://github.com/verida/verida-js/blob/5040472/packages/types/src/AccountInterfaces.ts#L91)

## Methods

### callback

▸ **callback**(`response`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | [`AuthResponse`](verida_types.AuthResponse.md) |

#### Returns

`void`

#### Defined in

[packages/types/src/AccountInterfaces.ts:97](https://github.com/verida/verida-js/blob/5040472/packages/types/src/AccountInterfaces.ts#L97)

___

### callbackRejected

▸ `Optional` **callbackRejected**(): `void`

#### Returns

`void`

#### Defined in

[packages/types/src/AccountInterfaces.ts:98](https://github.com/verida/verida-js/blob/5040472/packages/types/src/AccountInterfaces.ts#L98)
