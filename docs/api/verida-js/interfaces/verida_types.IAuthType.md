[root](../README.md) / [Modules](../modules.md) / [@verida/types](../modules/verida_types.md) / IAuthType

# Interface: IAuthType

[@verida/types](../modules/verida_types.md).IAuthType

## Table of contents

### Methods

- [disconnectDevice](verida_types.IAuthType.md#disconnectdevice)
- [getAuthContext](verida_types.IAuthType.md#getauthcontext)
- [setAuthContext](verida_types.IAuthType.md#setauthcontext)

## Methods

### disconnectDevice

▸ **disconnectDevice**(`deviceId`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `deviceId` | `string` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[packages/types/src/IAuthType.ts:8](https://github.com/verida/verida-js/blob/5040472/packages/types/src/IAuthType.ts#L8)

___

### getAuthContext

▸ **getAuthContext**(`config`): `Promise`<[`AuthContext`](verida_types.AuthContext.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`AuthTypeConfig`](verida_types.AuthTypeConfig.md) |

#### Returns

`Promise`<[`AuthContext`](verida_types.AuthContext.md)\>

#### Defined in

[packages/types/src/IAuthType.ts:4](https://github.com/verida/verida-js/blob/5040472/packages/types/src/IAuthType.ts#L4)

___

### setAuthContext

▸ **setAuthContext**(`contextAuth`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `contextAuth` | [`AuthContext`](verida_types.AuthContext.md) |

#### Returns

`void`

#### Defined in

[packages/types/src/IAuthType.ts:6](https://github.com/verida/verida-js/blob/5040472/packages/types/src/IAuthType.ts#L6)
