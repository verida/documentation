[root](../README.md) / [Modules](../modules.md) / [@verida/verifiable-credentials](../modules/verida_verifiable_credentials.md) / [<internal\>](../modules/verida_verifiable_credentials._internal_.md) / IMessaging

# Interface: IMessaging

[@verida/verifiable-credentials](../modules/verida_verifiable_credentials.md).[<internal\>](../modules/verida_verifiable_credentials._internal_.md).IMessaging

Interface Messaging

## Table of contents

### Methods

- [connectAccount](verida_verifiable_credentials._internal_.IMessaging.md#connectaccount)
- [getInbox](verida_verifiable_credentials._internal_.IMessaging.md#getinbox)
- [getMessages](verida_verifiable_credentials._internal_.IMessaging.md#getmessages)
- [init](verida_verifiable_credentials._internal_.IMessaging.md#init)
- [offMessage](verida_verifiable_credentials._internal_.IMessaging.md#offmessage)
- [onMessage](verida_verifiable_credentials._internal_.IMessaging.md#onmessage)
- [send](verida_verifiable_credentials._internal_.IMessaging.md#send)

## Methods

### connectAccount

▸ **connectAccount**(`account`): `Promise`<`void`\>

Connect an account to this messaging instance.

Used internally.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `account` | [`IAccount`](verida_verifiable_credentials._internal_.IAccount.md) | Account |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/types/dist/IMessaging.d.ts:62

___

### getInbox

▸ **getInbox**(): `Promise`<`any`\>

Get the underlying inbox instance specific for the message storage type.

#### Returns

`Promise`<`any`\>

any Currently returns a `Datastore` instance.

#### Defined in

packages/types/dist/IMessaging.d.ts:54

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

packages/types/dist/IMessaging.d.ts:48

___

### init

▸ **init**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

packages/types/dist/IMessaging.d.ts:9

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

packages/types/dist/IMessaging.d.ts:41

___

### onMessage

▸ **onMessage**(`callback`): `Promise`<[`EventEmitter`](../classes/verida_verifiable_credentials._internal_.EventEmitter-1.md)\>

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

`Promise`<[`EventEmitter`](../classes/verida_verifiable_credentials._internal_.EventEmitter-1.md)\>

Returns an event emitter

#### Defined in

packages/types/dist/IMessaging.d.ts:35

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
| `config` | [`MessageSendConfig`](verida_verifiable_credentials._internal_.MessageSendConfig.md) | object Optional configuration. |

#### Returns

`Promise`<``null`` \| `object`\>

#### Defined in

packages/types/dist/IMessaging.d.ts:21
