[root](../README.md) / [Modules](../modules.md) / [@verida/account-node](../modules/verida_account_node.md) / VeridaDatabaseAuthType

# Class: VeridaDatabaseAuthType

[@verida/account-node](../modules/verida_account_node.md).VeridaDatabaseAuthType

## Hierarchy

- [`AuthType`](verida_account_node._internal_.AuthType.md)

  ↳ **`VeridaDatabaseAuthType`**

## Table of contents

### Constructors

- [constructor](verida_account_node.VeridaDatabaseAuthType.md#constructor)

### Properties

- [account](verida_account_node.VeridaDatabaseAuthType.md#account)
- [contextAuth](verida_account_node.VeridaDatabaseAuthType.md#contextauth)
- [contextName](verida_account_node.VeridaDatabaseAuthType.md#contextname)
- [serviceEndpoint](verida_account_node.VeridaDatabaseAuthType.md#serviceendpoint)
- [signKey](verida_account_node.VeridaDatabaseAuthType.md#signkey)
- [timeout](verida_account_node.VeridaDatabaseAuthType.md#timeout)

### Methods

- [disconnectDevice](verida_account_node.VeridaDatabaseAuthType.md#disconnectdevice)
- [getAuthContext](verida_account_node.VeridaDatabaseAuthType.md#getauthcontext)
- [getAxios](verida_account_node.VeridaDatabaseAuthType.md#getaxios)
- [setAuthContext](verida_account_node.VeridaDatabaseAuthType.md#setauthcontext)

## Constructors

### constructor

• **new VeridaDatabaseAuthType**(`account`, `contextName`, `serviceEndpoint`, `signKey`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | [`default`](verida_account_node._internal_.default.md) |
| `contextName` | `string` |
| `serviceEndpoint` | [`ServiceEndpoint`](../modules/verida_account_node._internal_.md#serviceendpoint) |
| `signKey` | [`SecureContextPublicKey`](../interfaces/verida_account_node._internal_.SecureContextPublicKey.md) |

#### Overrides

[AuthType](verida_account_node._internal_.AuthType.md).[constructor](verida_account_node._internal_.AuthType.md#constructor)

#### Defined in

[packages/account-node/src/authTypes/VeridaDatabase.ts:15](https://github.com/verida/verida-js/blob/032961c/packages/account-node/src/authTypes/VeridaDatabase.ts#L15)

## Properties

### account

• `Protected` **account**: [`AutoAccount`](verida_account_node.AutoAccount.md)

#### Overrides

[AuthType](verida_account_node._internal_.AuthType.md).[account](verida_account_node._internal_.AuthType.md#account)

#### Defined in

[packages/account-node/src/authTypes/VeridaDatabase.ts:11](https://github.com/verida/verida-js/blob/032961c/packages/account-node/src/authTypes/VeridaDatabase.ts#L11)

___

### contextAuth

• `Protected` `Optional` **contextAuth**: [`VeridaDatabaseAuthContext`](../interfaces/verida_account_node._internal_.VeridaDatabaseAuthContext.md)

#### Overrides

[AuthType](verida_account_node._internal_.AuthType.md).[contextAuth](verida_account_node._internal_.AuthType.md#contextauth)

#### Defined in

[packages/account-node/src/authTypes/VeridaDatabase.ts:10](https://github.com/verida/verida-js/blob/032961c/packages/account-node/src/authTypes/VeridaDatabase.ts#L10)

___

### contextName

• `Protected` **contextName**: `string`

#### Inherited from

[AuthType](verida_account_node._internal_.AuthType.md).[contextName](verida_account_node._internal_.AuthType.md#contextname)

#### Defined in

packages/account/dist/auth-type.d.ts:7

___

### serviceEndpoint

• `Protected` **serviceEndpoint**: [`ServiceEndpoint`](../modules/verida_account_node._internal_.md#serviceendpoint)

#### Inherited from

[AuthType](verida_account_node._internal_.AuthType.md).[serviceEndpoint](verida_account_node._internal_.AuthType.md#serviceendpoint)

#### Defined in

packages/account/dist/auth-type.d.ts:8

___

### signKey

• `Protected` **signKey**: [`SecureContextPublicKey`](../interfaces/verida_account_node._internal_.SecureContextPublicKey.md)

#### Inherited from

[AuthType](verida_account_node._internal_.AuthType.md).[signKey](verida_account_node._internal_.AuthType.md#signkey)

#### Defined in

packages/account/dist/auth-type.d.ts:9

___

### timeout

• `Protected` **timeout**: `number` = `10000`

#### Defined in

[packages/account-node/src/authTypes/VeridaDatabase.ts:13](https://github.com/verida/verida-js/blob/032961c/packages/account-node/src/authTypes/VeridaDatabase.ts#L13)

## Methods

### disconnectDevice

▸ **disconnectDevice**(`deviceId?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `deviceId` | `string` | `"Test device"` |

#### Returns

`Promise`<`boolean`\>

#### Overrides

[AuthType](verida_account_node._internal_.AuthType.md).[disconnectDevice](verida_account_node._internal_.AuthType.md#disconnectdevice)

#### Defined in

[packages/account-node/src/authTypes/VeridaDatabase.ts:133](https://github.com/verida/verida-js/blob/032961c/packages/account-node/src/authTypes/VeridaDatabase.ts#L133)

___

### getAuthContext

▸ **getAuthContext**(`config?`): `Promise`<[`VeridaDatabaseAuthContext`](../interfaces/verida_account_node._internal_.VeridaDatabaseAuthContext.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`VeridaDatabaseAuthTypeConfig`](../interfaces/verida_account_node._internal_.VeridaDatabaseAuthTypeConfig.md) |

#### Returns

`Promise`<[`VeridaDatabaseAuthContext`](../interfaces/verida_account_node._internal_.VeridaDatabaseAuthContext.md)\>

#### Overrides

[AuthType](verida_account_node._internal_.AuthType.md).[getAuthContext](verida_account_node._internal_.AuthType.md#getauthcontext)

#### Defined in

[packages/account-node/src/authTypes/VeridaDatabase.ts:20](https://github.com/verida/verida-js/blob/032961c/packages/account-node/src/authTypes/VeridaDatabase.ts#L20)

___

### getAxios

▸ `Private` **getAxios**(`storageContext`, `accessToken?`): [`AxiosInstance`](../interfaces/verida_account_node._internal_.AxiosInstance.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `storageContext` | `string` |
| `accessToken?` | `string` |

#### Returns

[`AxiosInstance`](../interfaces/verida_account_node._internal_.AxiosInstance.md)

#### Defined in

[packages/account-node/src/authTypes/VeridaDatabase.ts:162](https://github.com/verida/verida-js/blob/032961c/packages/account-node/src/authTypes/VeridaDatabase.ts#L162)

___

### setAuthContext

▸ **setAuthContext**(`contextAuth`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `contextAuth` | [`AuthContext`](../interfaces/verida_account_node._internal_.AuthContext.md) |

#### Returns

`void`

#### Inherited from

[AuthType](verida_account_node._internal_.AuthType.md).[setAuthContext](verida_account_node._internal_.AuthType.md#setauthcontext)

#### Defined in

packages/account/dist/auth-type.d.ts:12
