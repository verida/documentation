[root](../README.md) / [Modules](../modules.md) / [@verida/types](../modules/verida_types.md) / IMessaging

# Interface: IMessaging

[@verida/types](../modules/verida_types.md).IMessaging

Interface Messaging

## Table of contents

### Methods

- [connectAccount](verida_types.IMessaging.md#connectaccount)
- [getInbox](verida_types.IMessaging.md#getinbox)
- [getMessages](verida_types.IMessaging.md#getmessages)
- [init](verida_types.IMessaging.md#init)
- [offMessage](verida_types.IMessaging.md#offmessage)
- [onMessage](verida_types.IMessaging.md#onmessage)
- [send](verida_types.IMessaging.md#send)

## Methods

### connectAccount

▸ **connectAccount**(`account`): `Promise`<`void`\>

Connect an account to this messaging instance.

Used internally.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `account` | [`IAccount`](verida_types.IAccount.md) | Account |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/types/src/IMessaging.ts:74](https://github.com/verida/verida-js/blob/5040472/packages/types/src/IMessaging.ts#L74)

___

### getInbox

▸ **getInbox**(): `Promise`<`any`\>

Get the underlying inbox instance specific for the message storage type.

#### Returns

`Promise`<`any`\>

any Currently returns a `Datastore` instance.

#### Defined in

[packages/types/src/IMessaging.ts:65](https://github.com/verida/verida-js/blob/5040472/packages/types/src/IMessaging.ts#L65)

___

### getMessages

▸ **getMessages**(`filter?`, `options?`): `Promise`<`any`\>

Get messages from this inbox.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filter?` | `object` | object An optional datastore filter |
| `options?` | `any` | object An optional list of datastore options |

#### Returns

`Promise`<`any`\>

#### Defined in

[packages/types/src/IMessaging.ts:58](https://github.com/verida/verida-js/blob/5040472/packages/types/src/IMessaging.ts#L58)

___

### init

▸ **init**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/types/src/IMessaging.ts:9](https://github.com/verida/verida-js/blob/5040472/packages/types/src/IMessaging.ts#L9)

___

### offMessage

▸ **offMessage**(`callback`): `Promise`<`void`\>

Unregister a callback to fire when a new message is received

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | `any` |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/types/src/IMessaging.ts:50](https://github.com/verida/verida-js/blob/5040472/packages/types/src/IMessaging.ts#L50)

___

### onMessage

▸ **onMessage**(`callback`): `Promise`<[`EventEmitter`](../classes/verida_types._internal_.EventEmitter-1.md)\>

Register a callback to fire when a new message is received from another DID or application.

Usage:

```
// configure the listener
const callback = (msg) => { console.log(msg) }
const emitter = messaging.onMessage(callback)
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | `any` |

#### Returns

`Promise`<[`EventEmitter`](../classes/verida_types._internal_.EventEmitter-1.md)\>

Returns an event emitter

#### Defined in

[packages/types/src/IMessaging.ts:43](https://github.com/verida/verida-js/blob/5040472/packages/types/src/IMessaging.ts#L43)

___

### send

▸ **send**(`did`, `type`, `data`, `message`, `config`): `Promise`<``null`` \| `object`\>

Send a message to another DID on the network.

**`todo:`** Link to documentation

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `did` | `string` | string DID to receive the message |
| `type` | `string` | string Type of inbox message (See https://github.com/verida/schemas/tree/master/schemas/inbox/type). ie: `dataSend` |
| `data` | `object` | object Data to send. Structure of data will depend on the inbox message type. |
| `message` | `string` | string A human readable message that will be displayed to the user upon receipt of the message. Similar to an email subject. |
| `config` | [`MessageSendConfig`](verida_types.MessageSendConfig.md) | object Optional configuration. |

#### Returns

`Promise`<``null`` \| `object`\>

#### Defined in

[packages/types/src/IMessaging.ts:22](https://github.com/verida/verida-js/blob/5040472/packages/types/src/IMessaging.ts#L22)
