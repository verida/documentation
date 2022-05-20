[root](../README.md) / [Modules](../modules.md) / [@verida/client-ts](../modules/verida_client_ts.md) / Notification

# Interface: Notification

[@verida/client-ts](../modules/verida_client_ts.md).Notification

Interface for notifications

## Table of contents

### Methods

- [getErrors](verida_client_ts.Notification.md#geterrors)
- [init](verida_client_ts.Notification.md#init)
- [ping](verida_client_ts.Notification.md#ping)

## Methods

### getErrors

▸ **getErrors**(): `string`[]

#### Returns

`string`[]

#### Defined in

[packages/client-ts/src/context/notification.ts:21](https://github.com/verida/verida-js/blob/039856c/packages/client-ts/src/context/notification.ts#L21)

___

### init

▸ **init**(): `Promise`<`void`\>

Initialize notifications for the connected user

(ie; connect to a notification server)

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/client-ts/src/context/notification.ts:13](https://github.com/verida/verida-js/blob/039856c/packages/client-ts/src/context/notification.ts#L13)

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

[packages/client-ts/src/context/notification.ts:19](https://github.com/verida/verida-js/blob/039856c/packages/client-ts/src/context/notification.ts#L19)
