[root](../README.md) / [Modules](../modules.md) / [@verida/verifiable-credentials](../modules/verida_verifiable_credentials.md) / [<internal\>](../modules/verida_verifiable_credentials._internal_.md) / INotification

# Interface: INotification

[@verida/verifiable-credentials](../modules/verida_verifiable_credentials.md).[<internal\>](../modules/verida_verifiable_credentials._internal_.md).INotification

Interface for notifications

## Table of contents

### Methods

- [getErrors](verida_verifiable_credentials._internal_.INotification.md#geterrors)
- [init](verida_verifiable_credentials._internal_.INotification.md#init)
- [ping](verida_verifiable_credentials._internal_.INotification.md#ping)

## Methods

### getErrors

▸ **getErrors**(): `string`[]

#### Returns

`string`[]

#### Defined in

packages/types/dist/INotification.d.ts:16

___

### init

▸ **init**(): `Promise`<`void`\>

Initialize notifications for the connected user

(ie; connect to a notification server)

#### Returns

`Promise`<`void`\>

#### Defined in

packages/types/dist/INotification.d.ts:10

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

packages/types/dist/INotification.d.ts:15
