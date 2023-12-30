[root](../README.md) / [Modules](../modules.md) / [@verida/types](../modules/verida_types.md) / INotification

# Interface: INotification

[@verida/types](../modules/verida_types.md).INotification

Interface for notifications

## Table of contents

### Methods

- [getErrors](verida_types.INotification.md#geterrors)
- [init](verida_types.INotification.md#init)
- [ping](verida_types.INotification.md#ping)

## Methods

### getErrors

▸ **getErrors**(): `string`[]

#### Returns

`string`[]

#### Defined in

[packages/types/src/INotification.ts:19](https://github.com/verida/verida-js/blob/5040472/packages/types/src/INotification.ts#L19)

___

### init

▸ **init**(): `Promise`<`void`\>

Initialize notifications for the connected user

(ie; connect to a notification server)

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/types/src/INotification.ts:11](https://github.com/verida/verida-js/blob/5040472/packages/types/src/INotification.ts#L11)

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

[packages/types/src/INotification.ts:17](https://github.com/verida/verida-js/blob/5040472/packages/types/src/INotification.ts#L17)
