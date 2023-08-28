[root](../README.md) / [Modules](../modules.md) / [@verida/account-node](../modules/verida_account_node.md) / [<internal\>](../modules/verida_account_node._internal_.md) / AuthType

# Class: AuthType

[@verida/account-node](../modules/verida_account_node.md).[<internal\>](../modules/verida_account_node._internal_.md).AuthType

## Hierarchy

- **`AuthType`**

  ↳ [`VeridaDatabaseAuthType`](verida_account_node.VeridaDatabaseAuthType.md)

## Table of contents

### Constructors

- [constructor](verida_account_node._internal_.AuthType.md#constructor)

### Properties

- [account](verida_account_node._internal_.AuthType.md#account)
- [contextAuth](verida_account_node._internal_.AuthType.md#contextauth)
- [contextName](verida_account_node._internal_.AuthType.md#contextname)
- [serviceEndpoint](verida_account_node._internal_.AuthType.md#serviceendpoint)
- [signKey](verida_account_node._internal_.AuthType.md#signkey)

### Methods

- [disconnectDevice](verida_account_node._internal_.AuthType.md#disconnectdevice)
- [getAuthContext](verida_account_node._internal_.AuthType.md#getauthcontext)
- [setAuthContext](verida_account_node._internal_.AuthType.md#setauthcontext)

## Constructors

### constructor

• **new AuthType**(`account`, `contextName`, `serviceEndpoint`, `signKey`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | [`default`](verida_account_node._internal_.default.md) |
| `contextName` | `string` |
| `serviceEndpoint` | [`ServiceEndpoint`](../modules/verida_account_node._internal_.md#serviceendpoint) |
| `signKey` | [`SecureContextPublicKey`](../interfaces/verida_account_node._internal_.SecureContextPublicKey.md) |

#### Defined in

packages/account/dist/auth-type.d.ts:10

## Properties

### account

• `Protected` **account**: [`default`](verida_account_node._internal_.default.md)

#### Defined in

packages/account/dist/auth-type.d.ts:6

___

### contextAuth

• `Protected` `Optional` **contextAuth**: [`AuthContext`](../interfaces/verida_account_node._internal_.AuthContext.md)

#### Defined in

packages/account/dist/auth-type.d.ts:5

___

### contextName

• `Protected` **contextName**: `string`

#### Defined in

packages/account/dist/auth-type.d.ts:7

___

### serviceEndpoint

• `Protected` **serviceEndpoint**: [`ServiceEndpoint`](../modules/verida_account_node._internal_.md#serviceendpoint)

#### Defined in

packages/account/dist/auth-type.d.ts:8

___

### signKey

• `Protected` **signKey**: [`SecureContextPublicKey`](../interfaces/verida_account_node._internal_.SecureContextPublicKey.md)

#### Defined in

packages/account/dist/auth-type.d.ts:9

## Methods

### disconnectDevice

▸ **disconnectDevice**(`deviceId?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `deviceId?` | `string` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

packages/account/dist/auth-type.d.ts:13

___

### getAuthContext

▸ **getAuthContext**(`config`): `Promise`<[`AuthContext`](../interfaces/verida_account_node._internal_.AuthContext.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`AuthTypeConfig`](../interfaces/verida_account_node._internal_.AuthTypeConfig.md) |

#### Returns

`Promise`<[`AuthContext`](../interfaces/verida_account_node._internal_.AuthContext.md)\>

#### Defined in

packages/account/dist/auth-type.d.ts:11

___

### setAuthContext

▸ **setAuthContext**(`contextAuth`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `contextAuth` | [`AuthContext`](../interfaces/verida_account_node._internal_.AuthContext.md) |

#### Returns

`void`

#### Defined in

packages/account/dist/auth-type.d.ts:12
