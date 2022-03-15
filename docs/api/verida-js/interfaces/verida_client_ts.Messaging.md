[root](../README.md) / [Modules](../modules.md) / [@verida/client-ts](../modules/verida_client_ts.md) / Messaging

# Interface: Messaging

[@verida/client-ts](../modules/verida_client_ts.md).Messaging

Interface Messaging

## Table of contents

### Methods

- [connectAccount](verida_client_ts.Messaging.md#connectaccount)
- [getInbox](verida_client_ts.Messaging.md#getinbox)
- [getMessages](verida_client_ts.Messaging.md#getmessages)
- [init](verida_client_ts.Messaging.md#init)
- [offMessage](verida_client_ts.Messaging.md#offmessage)
- [onMessage](verida_client_ts.Messaging.md#onmessage)
- [send](verida_client_ts.Messaging.md#send)

## Methods

### connectAccount

▸ **connectAccount**(`account`): `Promise`<`void`\>

Connect an account to this messaging instance.

Used internally.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `account` | `default` | Account |

#### Returns

`Promise`<`void`\>

#### Defined in

[client-ts/src/context/messaging.ts:78](https://github.com/verida/verida-js/blob/a39619b/packages/client-ts/src/context/messaging.ts#L78)

___

### getInbox

▸ **getInbox**(): `Promise`<`any`\>

Get the underlying inbox instance specific for the message storage type.

#### Returns

`Promise`<`any`\>

any Currently returns a `Datastore` instance.

#### Defined in

[client-ts/src/context/messaging.ts:69](https://github.com/verida/verida-js/blob/a39619b/packages/client-ts/src/context/messaging.ts#L69)

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

[client-ts/src/context/messaging.ts:62](https://github.com/verida/verida-js/blob/a39619b/packages/client-ts/src/context/messaging.ts#L62)

___

### init

▸ **init**(): `Promise`<`void`\>

Initialize messaging for the connected user

(ie; create an empty database or anything else required to start receiving messages)

#### Returns

`Promise`<`void`\>

#### Defined in

[client-ts/src/context/messaging.ts:13](https://github.com/verida/verida-js/blob/a39619b/packages/client-ts/src/context/messaging.ts#L13)

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

[client-ts/src/context/messaging.ts:54](https://github.com/verida/verida-js/blob/a39619b/packages/client-ts/src/context/messaging.ts#L54)

___

### onMessage

▸ **onMessage**(`callback`): `Promise`<`EventEmitter`\>

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

`Promise`<`EventEmitter`\>

Returns an event emitter

#### Defined in

[client-ts/src/context/messaging.ts:47](https://github.com/verida/verida-js/blob/a39619b/packages/client-ts/src/context/messaging.ts#L47)

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
| `config` | [`MessageSendConfig`](verida_client_ts.ContextInterfaces.MessageSendConfig.md) | object Optional configuration. |

#### Returns

`Promise`<``null`` \| `object`\>

#### Defined in

[client-ts/src/context/messaging.ts:26](https://github.com/verida/verida-js/blob/a39619b/packages/client-ts/src/context/messaging.ts#L26)
