[root](../README.md) / [Modules](../modules.md) / [@verida/client-ts](../modules/verida_client_ts.md) / [<internal\>](../modules/verida_client_ts._internal_.md) / default

# Interface: default

[@verida/client-ts](../modules/verida_client_ts.md).[<internal\>](../modules/verida_client_ts._internal_.md).default

Interface for notifications

## Table of contents

### Methods

- [getErrors](verida_client_ts._internal_.default-7.md#geterrors)
- [init](verida_client_ts._internal_.default-7.md#init)
- [ping](verida_client_ts._internal_.default-7.md#ping)

## Methods

### getErrors

▸ **getErrors**(): `string`[]

#### Returns

`string`[]

#### Defined in

[packages/client-ts/src/context/notification.ts:21](https://github.com/verida/verida-js/blob/c03b336/packages/client-ts/src/context/notification.ts#L21)

___

### init

▸ **init**(): `Promise`<`void`\>

Initialize notifications for the connected user

(ie; connect to a notification server)

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/client-ts/src/context/notification.ts:13](https://github.com/verida/verida-js/blob/c03b336/packages/client-ts/src/context/notification.ts#L13)

___

### ping

▸ **ping**(`recipientContextName`, `didToNotify`): `Promise`<`boolean`\>

Ping a notification server to fetch new messages
TODO: Change this

#### Parameters

| Name | Type |
| :------ | :------ |
| `recipientContextName` | `string` |
| `didToNotify` | `any` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[packages/client-ts/src/context/notification.ts:19](https://github.com/verida/verida-js/blob/c03b336/packages/client-ts/src/context/notification.ts#L19)
