[root](../README.md) / [Modules](../modules.md) / [@verida/verifiable-credentials](../modules/verida_verifiable_credentials.md) / [<internal\>](../modules/verida_verifiable_credentials._internal_.md) / default

# Interface: default

[@verida/verifiable-credentials](../modules/verida_verifiable_credentials.md).[<internal\>](../modules/verida_verifiable_credentials._internal_.md).default

Interface Messaging

## Table of contents

### Methods

- [connectAccount](verida_verifiable_credentials._internal_.default-7.md#connectaccount)
- [getInbox](verida_verifiable_credentials._internal_.default-7.md#getinbox)
- [getMessages](verida_verifiable_credentials._internal_.default-7.md#getmessages)
- [init](verida_verifiable_credentials._internal_.default-7.md#init)
- [offMessage](verida_verifiable_credentials._internal_.default-7.md#offmessage)
- [onMessage](verida_verifiable_credentials._internal_.default-7.md#onmessage)
- [send](verida_verifiable_credentials._internal_.default-7.md#send)

## Methods

### connectAccount

▸ **connectAccount**(`account`): `Promise`<`void`\>

Connect an account to this messaging instance.

Used internally.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `account` | [`default`](../classes/verida_verifiable_credentials._internal_.default.md) | Account |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/client-ts/dist/context/messaging.d.ts:66

___

### getInbox

▸ **getInbox**(): `Promise`<`any`\>

Get the underlying inbox instance specific for the message storage type.

#### Returns

`Promise`<`any`\>

any Currently returns a `Datastore` instance.

#### Defined in

packages/client-ts/dist/context/messaging.d.ts:58

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

packages/client-ts/dist/context/messaging.d.ts:52

___

### init

▸ **init**(): `Promise`<`void`\>

Initialize messaging for the connected user

(ie; create an empty database or anything else required to start receiving messages)

#### Returns

`Promise`<`void`\>

#### Defined in

packages/client-ts/dist/context/messaging.d.ts:13

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

packages/client-ts/dist/context/messaging.d.ts:45

___

### onMessage

▸ **onMessage**(`callback`): `Promise`<[`EventEmitter`](verida_verifiable_credentials._internal_.EventEmitter.md)\>

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

`Promise`<[`EventEmitter`](verida_verifiable_credentials._internal_.EventEmitter.md)\>

Returns an event emitter

#### Defined in

packages/client-ts/dist/context/messaging.d.ts:39

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

packages/client-ts/dist/context/messaging.d.ts:25
