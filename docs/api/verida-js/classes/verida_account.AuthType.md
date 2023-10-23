[root](../README.md) / [Modules](../modules.md) / [@verida/account](../modules/verida_account.md) / AuthType

# Class: AuthType

[@verida/account](../modules/verida_account.md).AuthType

## Table of contents

### Constructors

- [constructor](verida_account.AuthType.md#constructor)

### Properties

- [account](verida_account.AuthType.md#account)
- [contextAuth](verida_account.AuthType.md#contextauth)
- [contextName](verida_account.AuthType.md#contextname)
- [serviceEndpoint](verida_account.AuthType.md#serviceendpoint)
- [signKey](verida_account.AuthType.md#signkey)

### Methods

- [disconnectDevice](verida_account.AuthType.md#disconnectdevice)
- [getAuthContext](verida_account.AuthType.md#getauthcontext)
- [setAuthContext](verida_account.AuthType.md#setauthcontext)

## Constructors

### constructor

• **new AuthType**(`account`, `contextName`, `serviceEndpoint`, `signKey`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | [`Account`](verida_account.Account.md) |
| `contextName` | `string` |
| `serviceEndpoint` | [`ServiceEndpoint`](../modules/verida_account._internal_.md#serviceendpoint) |
| `signKey` | [`SecureContextPublicKey`](../interfaces/verida_account._internal_.SecureContextPublicKey.md) |

#### Defined in

[packages/account/src/auth-type.ts:13](https://github.com/verida/verida-js/blob/032961c/packages/account/src/auth-type.ts#L13)

## Properties

### account

• `Protected` **account**: [`Account`](verida_account.Account.md)

#### Defined in

[packages/account/src/auth-type.ts:8](https://github.com/verida/verida-js/blob/032961c/packages/account/src/auth-type.ts#L8)

___

### contextAuth

• `Protected` `Optional` **contextAuth**: [`AuthContext`](../interfaces/verida_account._internal_.AuthContext.md)

#### Defined in

[packages/account/src/auth-type.ts:7](https://github.com/verida/verida-js/blob/032961c/packages/account/src/auth-type.ts#L7)

___

### contextName

• `Protected` **contextName**: `string`

#### Defined in

[packages/account/src/auth-type.ts:9](https://github.com/verida/verida-js/blob/032961c/packages/account/src/auth-type.ts#L9)

___

### serviceEndpoint

• `Protected` **serviceEndpoint**: [`ServiceEndpoint`](../modules/verida_account._internal_.md#serviceendpoint)

#### Defined in

[packages/account/src/auth-type.ts:10](https://github.com/verida/verida-js/blob/032961c/packages/account/src/auth-type.ts#L10)

___

### signKey

• `Protected` **signKey**: [`SecureContextPublicKey`](../interfaces/verida_account._internal_.SecureContextPublicKey.md)

#### Defined in

[packages/account/src/auth-type.ts:11](https://github.com/verida/verida-js/blob/032961c/packages/account/src/auth-type.ts#L11)

## Methods

### disconnectDevice

▸ **disconnectDevice**(`deviceId?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `deviceId` | `string` | `"Test device"` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[packages/account/src/auth-type.ts:28](https://github.com/verida/verida-js/blob/032961c/packages/account/src/auth-type.ts#L28)

___

### getAuthContext

▸ **getAuthContext**(`config`): `Promise`<[`AuthContext`](../interfaces/verida_account._internal_.AuthContext.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`AuthTypeConfig`](../interfaces/verida_account._internal_.AuthTypeConfig.md) |

#### Returns

`Promise`<[`AuthContext`](../interfaces/verida_account._internal_.AuthContext.md)\>

#### Defined in

[packages/account/src/auth-type.ts:20](https://github.com/verida/verida-js/blob/032961c/packages/account/src/auth-type.ts#L20)

___

### setAuthContext

▸ **setAuthContext**(`contextAuth`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `contextAuth` | [`AuthContext`](../interfaces/verida_account._internal_.AuthContext.md) |

#### Returns

`void`

#### Defined in

[packages/account/src/auth-type.ts:24](https://github.com/verida/verida-js/blob/032961c/packages/account/src/auth-type.ts#L24)
