[root](../README.md) / [Modules](../modules.md) / [@verida/web-helpers](../modules/verida_web_helpers.md) / [<internal\>](../modules/verida_web_helpers._internal_.md) / Context

# Class: Context

[@verida/web-helpers](../modules/verida_web_helpers.md).[<internal\>](../modules/verida_web_helpers._internal_.md).Context

## Hierarchy

- [`EventEmitter`](verida_web_helpers._internal_.EventEmitter-1.md)

  ↳ **`Context`**

## Implements

- [`IContext`](../interfaces/verida_web_helpers._internal_.IContext.md)

## Table of contents

### Constructors

- [constructor](verida_web_helpers._internal_.Context.md#constructor)

### Properties

- [account](verida_web_helpers._internal_.Context.md#account)
- [client](verida_web_helpers._internal_.Context.md#client)
- [contextName](verida_web_helpers._internal_.Context.md#contextname)
- [databaseCache](verida_web_helpers._internal_.Context.md#databasecache)
- [databaseEngines](verida_web_helpers._internal_.Context.md#databaseengines)
- [dbRegistry](verida_web_helpers._internal_.Context.md#dbregistry)
- [didContextManager](verida_web_helpers._internal_.Context.md#didcontextmanager)
- [messagingEngine](verida_web_helpers._internal_.Context.md#messagingengine)
- [notificationEngine](verida_web_helpers._internal_.Context.md#notificationengine)
- [captureRejectionSymbol](verida_web_helpers._internal_.Context.md#capturerejectionsymbol)
- [captureRejections](verida_web_helpers._internal_.Context.md#capturerejections)
- [defaultMaxListeners](verida_web_helpers._internal_.Context.md#defaultmaxlisteners)
- [errorMonitor](verida_web_helpers._internal_.Context.md#errormonitor)

### Methods

- [addEndpoint](verida_web_helpers._internal_.Context.md#addendpoint)
- [addListener](verida_web_helpers._internal_.Context.md#addlistener)
- [clearDatabaseCache](verida_web_helpers._internal_.Context.md#cleardatabasecache)
- [close](verida_web_helpers._internal_.Context.md#close)
- [deleteDatabase](verida_web_helpers._internal_.Context.md#deletedatabase)
- [disconnect](verida_web_helpers._internal_.Context.md#disconnect)
- [emit](verida_web_helpers._internal_.Context.md#emit)
- [eventNames](verida_web_helpers._internal_.Context.md#eventnames)
- [getAccount](verida_web_helpers._internal_.Context.md#getaccount)
- [getAuthContext](verida_web_helpers._internal_.Context.md#getauthcontext)
- [getClient](verida_web_helpers._internal_.Context.md#getclient)
- [getContextConfig](verida_web_helpers._internal_.Context.md#getcontextconfig)
- [getContextName](verida_web_helpers._internal_.Context.md#getcontextname)
- [getDatabaseEngine](verida_web_helpers._internal_.Context.md#getdatabaseengine)
- [getDbRegistry](verida_web_helpers._internal_.Context.md#getdbregistry)
- [getDidContextManager](verida_web_helpers._internal_.Context.md#getdidcontextmanager)
- [getMaxListeners](verida_web_helpers._internal_.Context.md#getmaxlisteners)
- [getMessaging](verida_web_helpers._internal_.Context.md#getmessaging)
- [getNotification](verida_web_helpers._internal_.Context.md#getnotification)
- [info](verida_web_helpers._internal_.Context.md#info)
- [listenerCount](verida_web_helpers._internal_.Context.md#listenercount)
- [listeners](verida_web_helpers._internal_.Context.md#listeners)
- [off](verida_web_helpers._internal_.Context.md#off)
- [on](verida_web_helpers._internal_.Context.md#on)
- [once](verida_web_helpers._internal_.Context.md#once)
- [openDatabase](verida_web_helpers._internal_.Context.md#opendatabase)
- [openDatastore](verida_web_helpers._internal_.Context.md#opendatastore)
- [openExternalDatabase](verida_web_helpers._internal_.Context.md#openexternaldatabase)
- [openExternalDatastore](verida_web_helpers._internal_.Context.md#openexternaldatastore)
- [openProfile](verida_web_helpers._internal_.Context.md#openprofile)
- [prependListener](verida_web_helpers._internal_.Context.md#prependlistener)
- [prependOnceListener](verida_web_helpers._internal_.Context.md#prependoncelistener)
- [rawListeners](verida_web_helpers._internal_.Context.md#rawlisteners)
- [removeAllListeners](verida_web_helpers._internal_.Context.md#removealllisteners)
- [removeListener](verida_web_helpers._internal_.Context.md#removelistener)
- [setMaxListeners](verida_web_helpers._internal_.Context.md#setmaxlisteners)
- [getEventListeners](verida_web_helpers._internal_.Context.md#geteventlisteners)
- [listenerCount](verida_web_helpers._internal_.Context.md#listenercount)
- [on](verida_web_helpers._internal_.Context.md#on)
- [once](verida_web_helpers._internal_.Context.md#once)

## Constructors

### constructor

• **new Context**(`client`, `contextName`, `didContextManager`, `account?`)

Instantiate a new context.

**Do not use directly**. Use `client.openContext()` or `Network.connect()`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](verida_web_helpers._internal_.Client.md) |
| `contextName` | `string` |
| `didContextManager` | [`DIDContextManager`](verida_web_helpers._internal_.DIDContextManager.md) |
| `account?` | [`IAccount`](../interfaces/verida_web_helpers._internal_.IAccount.md) |

#### Overrides

[EventEmitter](verida_web_helpers._internal_.EventEmitter-1.md).[constructor](verida_web_helpers._internal_.EventEmitter-1.md#constructor)

#### Defined in

packages/client-ts/dist/context/context.d.ts:42

## Properties

### account

• `Private` `Optional` **account**: `any`

#### Defined in

packages/client-ts/dist/context/context.d.ts:24

___

### client

• `Private` **client**: `any`

#### Defined in

packages/client-ts/dist/context/context.d.ts:23

___

### contextName

• `Private` **contextName**: `any`

#### Defined in

packages/client-ts/dist/context/context.d.ts:27

___

### databaseCache

• `Private` **databaseCache**: `any`

#### Defined in

packages/client-ts/dist/context/context.d.ts:31

___

### databaseEngines

• `Private` **databaseEngines**: `any`

#### Defined in

packages/client-ts/dist/context/context.d.ts:29

___

### dbRegistry

• `Private` **dbRegistry**: `any`

#### Defined in

packages/client-ts/dist/context/context.d.ts:30

___

### didContextManager

• `Private` **didContextManager**: `any`

#### Defined in

packages/client-ts/dist/context/context.d.ts:28

___

### messagingEngine

• `Private` `Optional` **messagingEngine**: `any`

#### Defined in

packages/client-ts/dist/context/context.d.ts:25

___

### notificationEngine

• `Private` `Optional` **notificationEngine**: `any`

#### Defined in

packages/client-ts/dist/context/context.d.ts:26

___

### captureRejectionSymbol

▪ `Static` `Readonly` **captureRejectionSymbol**: typeof [`captureRejectionSymbol`](../modules/verida_web_helpers.md#capturerejectionsymbol)

#### Inherited from

[EventEmitter](verida_web_helpers._internal_.EventEmitter-1.md).[captureRejectionSymbol](verida_web_helpers._internal_.EventEmitter-1.md#capturerejectionsymbol)

#### Defined in

node_modules/@types/node/events.d.ts:273

___

### captureRejections

▪ `Static` **captureRejections**: `boolean`

Sets or gets the default captureRejection value for all emitters.

#### Inherited from

[EventEmitter](verida_web_helpers._internal_.EventEmitter-1.md).[captureRejections](verida_web_helpers._internal_.EventEmitter-1.md#capturerejections)

#### Defined in

node_modules/@types/node/events.d.ts:278

___

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: `number`

#### Inherited from

[EventEmitter](verida_web_helpers._internal_.EventEmitter-1.md).[defaultMaxListeners](verida_web_helpers._internal_.EventEmitter-1.md#defaultmaxlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:279

___

### errorMonitor

▪ `Static` `Readonly` **errorMonitor**: typeof [`errorMonitor`](../modules/verida_web_helpers.md#errormonitor)

This symbol shall be used to install a listener for only monitoring `'error'`
events. Listeners installed using this symbol are called before the regular
`'error'` listeners are called.

Installing a listener using this symbol does not change the behavior once an
`'error'` event is emitted, therefore the process will still crash if no
regular `'error'` listener is installed.

#### Inherited from

[EventEmitter](verida_web_helpers._internal_.EventEmitter-1.md).[errorMonitor](verida_web_helpers._internal_.EventEmitter-1.md#errormonitor)

#### Defined in

node_modules/@types/node/events.d.ts:272

## Methods

### addEndpoint

▸ **addEndpoint**(`engineType`, `endpointUri`): `Promise`<`void`\>

Emits `progress` event when adding the endpoint has progressed (ie: replicating databases to the new endpoint).

#### Parameters

| Name | Type |
| :------ | :------ |
| `engineType` | [`ContextEngineType`](../enums/verida_web_helpers._internal_.ContextEngineType.md) |
| `endpointUri` | `string` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[IContext](../interfaces/verida_web_helpers._internal_.IContext.md).[addEndpoint](../interfaces/verida_web_helpers._internal_.IContext.md#addendpoint)

#### Defined in

packages/client-ts/dist/context/context.d.ts:123

___

### addListener

▸ **addListener**(`eventName`, `listener`): [`Context`](verida_web_helpers._internal_.Context.md)

Alias for `emitter.on(eventName, listener)`.

**`since`** v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Context`](verida_web_helpers._internal_.Context.md)

#### Inherited from

[EventEmitter](verida_web_helpers._internal_.EventEmitter-1.md).[addListener](verida_web_helpers._internal_.EventEmitter-1.md#addlistener)

#### Defined in

node_modules/@types/node/events.d.ts:299

___

### clearDatabaseCache

▸ **clearDatabaseCache**(`did`, `databaseName`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `string` |
| `databaseName` | `string` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[IContext](../interfaces/verida_web_helpers._internal_.IContext.md).[clearDatabaseCache](../interfaces/verida_web_helpers._internal_.IContext.md#cleardatabasecache)

#### Defined in

packages/client-ts/dist/context/context.d.ts:130

___

### close

▸ **close**(`options?`): `Promise`<`void`\>

Close this context.

Closes all open database connections, returns resources, cancels event listeners

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ContextCloseOptions`](../interfaces/verida_web_helpers._internal_.ContextCloseOptions.md) |

#### Returns

`Promise`<`void`\>

#### Implementation of

[IContext](../interfaces/verida_web_helpers._internal_.IContext.md).[close](../interfaces/verida_web_helpers._internal_.IContext.md#close)

#### Defined in

packages/client-ts/dist/context/context.d.ts:129

___

### deleteDatabase

▸ **deleteDatabase**(`databaseName`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `databaseName` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/client-ts/dist/context/context.d.ts:91

___

### disconnect

▸ **disconnect**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

#### Implementation of

[IContext](../interfaces/verida_web_helpers._internal_.IContext.md).[disconnect](../interfaces/verida_web_helpers._internal_.IContext.md#disconnect)

#### Defined in

packages/client-ts/dist/context/context.d.ts:48

___

### emit

▸ **emit**(`eventName`, ...`args`): `boolean`

Synchronously calls each of the listeners registered for the event named`eventName`, in the order they were registered, passing the supplied arguments
to each.

Returns `true` if the event had listeners, `false` otherwise.

```js
const EventEmitter = require('events');
const myEmitter = new EventEmitter();

// First listener
myEmitter.on('event', function firstListener() {
  console.log('Helloooo! first listener');
});
// Second listener
myEmitter.on('event', function secondListener(arg1, arg2) {
  console.log(`event with parameters ${arg1}, ${arg2} in second listener`);
});
// Third listener
myEmitter.on('event', function thirdListener(...args) {
  const parameters = args.join(', ');
  console.log(`event with parameters ${parameters} in third listener`);
});

console.log(myEmitter.listeners('event'));

myEmitter.emit('event', 1, 2, 3, 4, 5);

// Prints:
// [
//   [Function: firstListener],
//   [Function: secondListener],
//   [Function: thirdListener]
// ]
// Helloooo! first listener
// event with parameters 1, 2 in second listener
// event with parameters 1, 2, 3, 4, 5 in third listener
```

**`since`** v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `...args` | `any`[] |

#### Returns

`boolean`

#### Inherited from

[EventEmitter](verida_web_helpers._internal_.EventEmitter-1.md).[emit](verida_web_helpers._internal_.EventEmitter-1.md#emit)

#### Defined in

node_modules/@types/node/events.d.ts:555

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Returns an array listing the events for which the emitter has registered
listeners. The values in the array are strings or `Symbol`s.

```js
const EventEmitter = require('events');
const myEE = new EventEmitter();
myEE.on('foo', () => {});
myEE.on('bar', () => {});

const sym = Symbol('symbol');
myEE.on(sym, () => {});

console.log(myEE.eventNames());
// Prints: [ 'foo', 'bar', Symbol(symbol) ]
```

**`since`** v6.0.0

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

[EventEmitter](verida_web_helpers._internal_.EventEmitter-1.md).[eventNames](verida_web_helpers._internal_.EventEmitter-1.md#eventnames)

#### Defined in

node_modules/@types/node/events.d.ts:614

___

### getAccount

▸ **getAccount**(): [`IAccount`](../interfaces/verida_web_helpers._internal_.IAccount.md)

#### Returns

[`IAccount`](../interfaces/verida_web_helpers._internal_.IAccount.md)

#### Implementation of

[IContext](../interfaces/verida_web_helpers._internal_.IContext.md).[getAccount](../interfaces/verida_web_helpers._internal_.IContext.md#getaccount)

#### Defined in

packages/client-ts/dist/context/context.d.ts:45

___

### getAuthContext

▸ **getAuthContext**(`authConfig?`, `authType?`): `Promise`<[`AuthContext`](../interfaces/verida_web_helpers._internal_.AuthContext.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `authConfig?` | [`AuthTypeConfig`](../interfaces/verida_web_helpers._internal_.AuthTypeConfig.md) |
| `authType?` | `string` |

#### Returns

`Promise`<[`AuthContext`](../interfaces/verida_web_helpers._internal_.AuthContext.md)\>

#### Implementation of

[IContext](../interfaces/verida_web_helpers._internal_.IContext.md).[getAuthContext](../interfaces/verida_web_helpers._internal_.IContext.md#getauthcontext)

#### Defined in

packages/client-ts/dist/context/context.d.ts:116

___

### getClient

▸ **getClient**(): [`Client`](verida_web_helpers._internal_.Client.md)

#### Returns

[`Client`](verida_web_helpers._internal_.Client.md)

#### Implementation of

[IContext](../interfaces/verida_web_helpers._internal_.IContext.md).[getClient](../interfaces/verida_web_helpers._internal_.IContext.md#getclient)

#### Defined in

packages/client-ts/dist/context/context.d.ts:47

___

### getContextConfig

▸ **getContextConfig**(`did?`, `forceCreate?`, `customContextName?`): `Promise`<[`SecureContextConfig`](../interfaces/verida_web_helpers._internal_.SecureContextConfig.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did?` | `string` |
| `forceCreate?` | `boolean` |
| `customContextName?` | `string` |

#### Returns

`Promise`<[`SecureContextConfig`](../interfaces/verida_web_helpers._internal_.SecureContextConfig.md)\>

#### Implementation of

[IContext](../interfaces/verida_web_helpers._internal_.IContext.md).[getContextConfig](../interfaces/verida_web_helpers._internal_.IContext.md#getcontextconfig)

#### Defined in

packages/client-ts/dist/context/context.d.ts:43

___

### getContextName

▸ **getContextName**(): `string`

#### Returns

`string`

#### Implementation of

[IContext](../interfaces/verida_web_helpers._internal_.IContext.md).[getContextName](../interfaces/verida_web_helpers._internal_.IContext.md#getcontextname)

#### Defined in

packages/client-ts/dist/context/context.d.ts:44

___

### getDatabaseEngine

▸ **getDatabaseEngine**(`did`, `createContext?`): `Promise`<[`IStorageEngine`](../interfaces/verida_web_helpers._internal_.IStorageEngine.md)\>

Get a storage engine for a given DID and this contextName

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `string` |
| `createContext?` | `boolean` |

#### Returns

`Promise`<[`IStorageEngine`](../interfaces/verida_web_helpers._internal_.IStorageEngine.md)\>

#### Implementation of

[IContext](../interfaces/verida_web_helpers._internal_.IContext.md).[getDatabaseEngine](../interfaces/verida_web_helpers._internal_.IContext.md#getdatabaseengine)

#### Defined in

packages/client-ts/dist/context/context.d.ts:55

___

### getDbRegistry

▸ **getDbRegistry**(): [`DbRegistry`](verida_web_helpers._internal_.DbRegistry.md)

#### Returns

[`DbRegistry`](verida_web_helpers._internal_.DbRegistry.md)

#### Implementation of

[IContext](../interfaces/verida_web_helpers._internal_.IContext.md).[getDbRegistry](../interfaces/verida_web_helpers._internal_.IContext.md#getdbregistry)

#### Defined in

packages/client-ts/dist/context/context.d.ts:109

___

### getDidContextManager

▸ **getDidContextManager**(): [`DIDContextManager`](verida_web_helpers._internal_.DIDContextManager.md)

#### Returns

[`DIDContextManager`](verida_web_helpers._internal_.DIDContextManager.md)

#### Implementation of

[IContext](../interfaces/verida_web_helpers._internal_.IContext.md).[getDidContextManager](../interfaces/verida_web_helpers._internal_.IContext.md#getdidcontextmanager)

#### Defined in

packages/client-ts/dist/context/context.d.ts:46

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to [defaultMaxListeners](verida_web_helpers._internal_.Context.md#defaultmaxlisteners).

**`since`** v1.0.0

#### Returns

`number`

#### Inherited from

[EventEmitter](verida_web_helpers._internal_.EventEmitter-1.md).[getMaxListeners](verida_web_helpers._internal_.EventEmitter-1.md#getmaxlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:471

___

### getMessaging

▸ **getMessaging**(`messageConfig?`): `Promise`<[`IMessaging`](../interfaces/verida_web_helpers._internal_.IMessaging.md)\>

Get a messaging instance for this application context.

Allows you to send and receive messages as the currently connected account.

#### Parameters

| Name | Type |
| :------ | :------ |
| `messageConfig?` | [`MessagesConfig`](../interfaces/verida_web_helpers._internal_.MessagesConfig.md) |

#### Returns

`Promise`<[`IMessaging`](../interfaces/verida_web_helpers._internal_.IMessaging.md)\>

Messaging instance

#### Implementation of

[IContext](../interfaces/verida_web_helpers._internal_.IContext.md).[getMessaging](../interfaces/verida_web_helpers._internal_.IContext.md#getmessaging)

#### Defined in

packages/client-ts/dist/context/context.d.ts:63

___

### getNotification

▸ **getNotification**(`did`, `contextName`): `Promise`<`undefined` \| [`INotification`](../interfaces/verida_web_helpers._internal_.INotification.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `string` |
| `contextName` | `string` |

#### Returns

`Promise`<`undefined` \| [`INotification`](../interfaces/verida_web_helpers._internal_.INotification.md)\>

#### Implementation of

[IContext](../interfaces/verida_web_helpers._internal_.IContext.md).[getNotification](../interfaces/verida_web_helpers._internal_.IContext.md#getnotification)

#### Defined in

packages/client-ts/dist/context/context.d.ts:64

___

### info

▸ **info**(): `Promise`<[`ContextInfo`](../interfaces/verida_web_helpers._internal_.ContextInfo.md)\>

Get the status of this context for databases, their connected endpoints and databases

#### Returns

`Promise`<[`ContextInfo`](../interfaces/verida_web_helpers._internal_.ContextInfo.md)\>

#### Implementation of

[IContext](../interfaces/verida_web_helpers._internal_.IContext.md).[info](../interfaces/verida_web_helpers._internal_.IContext.md#info)

#### Defined in

packages/client-ts/dist/context/context.d.ts:115

___

### listenerCount

▸ **listenerCount**(`eventName`): `number`

Returns the number of listeners listening to the event named `eventName`.

**`since`** v3.2.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event being listened for |

#### Returns

`number`

#### Inherited from

[EventEmitter](verida_web_helpers._internal_.EventEmitter-1.md).[listenerCount](verida_web_helpers._internal_.EventEmitter-1.md#listenercount)

#### Defined in

node_modules/@types/node/events.d.ts:561

___

### listeners

▸ **listeners**(`eventName`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
console.log(util.inspect(server.listeners('connection')));
// Prints: [ [Function] ]
```

**`since`** v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

[EventEmitter](verida_web_helpers._internal_.EventEmitter-1.md).[listeners](verida_web_helpers._internal_.EventEmitter-1.md#listeners)

#### Defined in

node_modules/@types/node/events.d.ts:484

___

### off

▸ **off**(`eventName`, `listener`): [`Context`](verida_web_helpers._internal_.Context.md)

Alias for `emitter.removeListener()`.

**`since`** v10.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Context`](verida_web_helpers._internal_.Context.md)

#### Inherited from

[EventEmitter](verida_web_helpers._internal_.EventEmitter-1.md).[off](verida_web_helpers._internal_.EventEmitter-1.md#off)

#### Defined in

node_modules/@types/node/events.d.ts:444

___

### on

▸ **on**(`eventName`, `listener`): [`Context`](verida_web_helpers._internal_.Context.md)

Adds the `listener` function to the end of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`and `listener` will result in the `listener` being added, and called, multiple
times.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The`emitter.prependListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
const myEE = new EventEmitter();
myEE.on('foo', () => console.log('a'));
myEE.prependListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

**`since`** v0.1.101

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`Context`](verida_web_helpers._internal_.Context.md)

#### Inherited from

[EventEmitter](verida_web_helpers._internal_.EventEmitter-1.md).[on](verida_web_helpers._internal_.EventEmitter-1.md#on)

#### Defined in

node_modules/@types/node/events.d.ts:330

___

### once

▸ **once**(`eventName`, `listener`): [`Context`](verida_web_helpers._internal_.Context.md)

Adds a **one-time**`listener` function for the event named `eventName`. The
next time `eventName` is triggered, this listener is removed and then invoked.

```js
server.once('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The`emitter.prependOnceListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
const myEE = new EventEmitter();
myEE.once('foo', () => console.log('a'));
myEE.prependOnceListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

**`since`** v0.3.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`Context`](verida_web_helpers._internal_.Context.md)

#### Inherited from

[EventEmitter](verida_web_helpers._internal_.EventEmitter-1.md).[once](verida_web_helpers._internal_.EventEmitter-1.md#once)

#### Defined in

node_modules/@types/node/events.d.ts:359

___

### openDatabase

▸ **openDatabase**(`databaseName`, `config?`): `Promise`<[`IDatabase`](../interfaces/verida_web_helpers._internal_.IDatabase.md)\>

Open a database owned by this account.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `databaseName` | `string` | Name of the database to open |
| `config?` | [`DatabaseOpenConfig`](../interfaces/verida_web_helpers._internal_.DatabaseOpenConfig.md) | - |

#### Returns

`Promise`<[`IDatabase`](../interfaces/verida_web_helpers._internal_.IDatabase.md)\>

#### Implementation of

[IContext](../interfaces/verida_web_helpers._internal_.IContext.md).[openDatabase](../interfaces/verida_web_helpers._internal_.IContext.md#opendatabase)

#### Defined in

packages/client-ts/dist/context/context.d.ts:81

___

### openDatastore

▸ **openDatastore**(`schemaUri`, `config?`): `Promise`<[`Datastore`](verida_web_helpers._internal_.Datastore.md)\>

Open a dataastore owned by this account.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `schemaUri` | `string` | URI of the schema to open (ie: https://common.schemas.verida.io/health/activity/latest/schema.json) |
| `config?` | [`DatastoreOpenConfig`](../interfaces/verida_web_helpers._internal_.DatastoreOpenConfig.md) | Optional datastore configuration |

#### Returns

`Promise`<[`Datastore`](verida_web_helpers._internal_.Datastore.md)\>

#### Implementation of

[IContext](../interfaces/verida_web_helpers._internal_.IContext.md).[openDatastore](../interfaces/verida_web_helpers._internal_.IContext.md#opendatastore)

#### Defined in

packages/client-ts/dist/context/context.d.ts:99

___

### openExternalDatabase

▸ **openExternalDatabase**(`databaseName`, `did`, `config?`): `Promise`<[`IDatabase`](../interfaces/verida_web_helpers._internal_.IDatabase.md)\>

Open an external database owned by an account that isn't the currently connected account.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `databaseName` | `string` | Name of the database to open |
| `did` | `string` | DID of the external account that owns the database |
| `config?` | [`DatabaseOpenConfig`](../interfaces/verida_web_helpers._internal_.DatabaseOpenConfig.md) | - |

#### Returns

`Promise`<[`IDatabase`](../interfaces/verida_web_helpers._internal_.IDatabase.md)\>

#### Implementation of

[IContext](../interfaces/verida_web_helpers._internal_.IContext.md).[openExternalDatabase](../interfaces/verida_web_helpers._internal_.IContext.md#openexternaldatabase)

#### Defined in

packages/client-ts/dist/context/context.d.ts:90

___

### openExternalDatastore

▸ **openExternalDatastore**(`schemaUri`, `did`, `options?`): `Promise`<[`Datastore`](verida_web_helpers._internal_.Datastore.md)\>

Open an external datastore owned by an account that isn't the currently connected account.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `schemaUri` | `string` | URI of the schema to open (ie: https://common.schemas.verida.io/health/activity/latest/schema.json) |
| `did` | `string` | DID of the external account that owns the database |
| `options?` | [`DatastoreOpenConfig`](../interfaces/verida_web_helpers._internal_.DatastoreOpenConfig.md) | Optional database configuration |

#### Returns

`Promise`<[`Datastore`](verida_web_helpers._internal_.Datastore.md)\>

#### Implementation of

[IContext](../interfaces/verida_web_helpers._internal_.IContext.md).[openExternalDatastore](../interfaces/verida_web_helpers._internal_.IContext.md#openexternaldatastore)

#### Defined in

packages/client-ts/dist/context/context.d.ts:108

___

### openProfile

▸ **openProfile**(`profileName?`, `did?`): `Promise`<`undefined` \| [`Profile`](verida_web_helpers._internal_.Profile.md)\>

Get a user's profile.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `profileName?` | `string` | string Name of the Verida profile schema to load |
| `did?` | `string` | string DID of the profile to get. Leave blank to fetch a read/write profile for the currently authenticated user |

#### Returns

`Promise`<`undefined` \| [`Profile`](verida_web_helpers._internal_.Profile.md)\>

#### Implementation of

[IContext](../interfaces/verida_web_helpers._internal_.IContext.md).[openProfile](../interfaces/verida_web_helpers._internal_.IContext.md#openprofile)

#### Defined in

packages/client-ts/dist/context/context.d.ts:72

___

### prependListener

▸ **prependListener**(`eventName`, `listener`): [`Context`](verida_web_helpers._internal_.Context.md)

Adds the `listener` function to the _beginning_ of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`and `listener` will result in the `listener` being added, and called, multiple
times.

```js
server.prependListener('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`since`** v6.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`Context`](verida_web_helpers._internal_.Context.md)

#### Inherited from

[EventEmitter](verida_web_helpers._internal_.EventEmitter-1.md).[prependListener](verida_web_helpers._internal_.EventEmitter-1.md#prependlistener)

#### Defined in

node_modules/@types/node/events.d.ts:579

___

### prependOnceListener

▸ **prependOnceListener**(`eventName`, `listener`): [`Context`](verida_web_helpers._internal_.Context.md)

Adds a **one-time**`listener` function for the event named `eventName` to the_beginning_ of the listeners array. The next time `eventName` is triggered, this
listener is removed, and then invoked.

```js
server.prependOnceListener('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`since`** v6.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`Context`](verida_web_helpers._internal_.Context.md)

#### Inherited from

[EventEmitter](verida_web_helpers._internal_.EventEmitter-1.md).[prependOnceListener](verida_web_helpers._internal_.EventEmitter-1.md#prependoncelistener)

#### Defined in

node_modules/@types/node/events.d.ts:595

___

### rawListeners

▸ **rawListeners**(`eventName`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`,
including any wrappers (such as those created by `.once()`).

```js
const emitter = new EventEmitter();
emitter.once('log', () => console.log('log once'));

// Returns a new Array with a function `onceWrapper` which has a property
// `listener` which contains the original listener bound above
const listeners = emitter.rawListeners('log');
const logFnWrapper = listeners[0];

// Logs "log once" to the console and does not unbind the `once` event
logFnWrapper.listener();

// Logs "log once" to the console and removes the listener
logFnWrapper();

emitter.on('log', () => console.log('log persistently'));
// Will return a new Array with a single function bound by `.on()` above
const newListeners = emitter.rawListeners('log');

// Logs "log persistently" twice
newListeners[0]();
emitter.emit('log');
```

**`since`** v9.4.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

[EventEmitter](verida_web_helpers._internal_.EventEmitter-1.md).[rawListeners](verida_web_helpers._internal_.EventEmitter-1.md#rawlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:514

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`Context`](verida_web_helpers._internal_.Context.md)

Removes all listeners, or those of the specified `eventName`.

It is bad practice to remove listeners added elsewhere in the code,
particularly when the `EventEmitter` instance was created by some other
component or module (e.g. sockets or file streams).

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`since`** v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`Context`](verida_web_helpers._internal_.Context.md)

#### Inherited from

[EventEmitter](verida_web_helpers._internal_.EventEmitter-1.md).[removeAllListeners](verida_web_helpers._internal_.EventEmitter-1.md#removealllisteners)

#### Defined in

node_modules/@types/node/events.d.ts:455

___

### removeListener

▸ **removeListener**(`eventName`, `listener`): [`Context`](verida_web_helpers._internal_.Context.md)

Removes the specified `listener` from the listener array for the event named`eventName`.

```js
const callback = (stream) => {
  console.log('someone connected!');
};
server.on('connection', callback);
// ...
server.removeListener('connection', callback);
```

`removeListener()` will remove, at most, one instance of a listener from the
listener array. If any single listener has been added multiple times to the
listener array for the specified `eventName`, then `removeListener()` must be
called multiple times to remove each instance.

Once an event is emitted, all listeners attached to it at the
time of emitting are called in order. This implies that any`removeListener()` or `removeAllListeners()` calls _after_ emitting and_before_ the last listener finishes execution will
not remove them from`emit()` in progress. Subsequent events behave as expected.

```js
const myEmitter = new MyEmitter();

const callbackA = () => {
  console.log('A');
  myEmitter.removeListener('event', callbackB);
};

const callbackB = () => {
  console.log('B');
};

myEmitter.on('event', callbackA);

myEmitter.on('event', callbackB);

// callbackA removes listener callbackB but it will still be called.
// Internal listener array at time of emit [callbackA, callbackB]
myEmitter.emit('event');
// Prints:
//   A
//   B

// callbackB is now removed.
// Internal listener array [callbackA]
myEmitter.emit('event');
// Prints:
//   A
```

Because listeners are managed using an internal array, calling this will
change the position indices of any listener registered _after_ the listener
being removed. This will not impact the order in which listeners are called,
but it means that any copies of the listener array as returned by
the `emitter.listeners()` method will need to be recreated.

When a single function has been added as a handler multiple times for a single
event (as in the example below), `removeListener()` will remove the most
recently added instance. In the example the `once('ping')`listener is removed:

```js
const ee = new EventEmitter();

function pong() {
  console.log('pong');
}

ee.on('ping', pong);
ee.once('ping', pong);
ee.removeListener('ping', pong);

ee.emit('ping');
ee.emit('ping');
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`since`** v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Context`](verida_web_helpers._internal_.Context.md)

#### Inherited from

[EventEmitter](verida_web_helpers._internal_.EventEmitter-1.md).[removeListener](verida_web_helpers._internal_.EventEmitter-1.md#removelistener)

#### Defined in

node_modules/@types/node/events.d.ts:439

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`Context`](verida_web_helpers._internal_.Context.md)

By default `EventEmitter`s will print a warning if more than `10` listeners are
added for a particular event. This is a useful default that helps finding
memory leaks. The `emitter.setMaxListeners()` method allows the limit to be
modified for this specific `EventEmitter` instance. The value can be set to`Infinity` (or `0`) to indicate an unlimited number of listeners.

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`since`** v0.3.5

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`Context`](verida_web_helpers._internal_.Context.md)

#### Inherited from

[EventEmitter](verida_web_helpers._internal_.EventEmitter-1.md).[setMaxListeners](verida_web_helpers._internal_.EventEmitter-1.md#setmaxlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:465

___

### getEventListeners

▸ `Static` **getEventListeners**(`emitter`, `name`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`.

For `EventEmitter`s this behaves exactly the same as calling `.listeners` on
the emitter.

For `EventTarget`s this is the only way to get the event listeners for the
event target. This is useful for debugging and diagnostic purposes.

```js
const { getEventListeners, EventEmitter } = require('events');

{
  const ee = new EventEmitter();
  const listener = () => console.log('Events are fun');
  ee.on('foo', listener);
  getEventListeners(ee, 'foo'); // [listener]
}
{
  const et = new EventTarget();
  const listener = () => console.log('Events are fun');
  et.addEventListener('foo', listener);
  getEventListeners(et, 'foo'); // [listener]
}
```

**`since`** v15.2.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | [`DOMEventTarget`](../interfaces/verida_web_helpers._internal_.DOMEventTarget.md) \| `EventEmitter` |
| `name` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

[EventEmitter](verida_web_helpers._internal_.EventEmitter-1.md).[getEventListeners](verida_web_helpers._internal_.EventEmitter-1.md#geteventlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:262

___

### listenerCount

▸ `Static` **listenerCount**(`emitter`, `eventName`): `number`

A class method that returns the number of listeners for the given `eventName`registered on the given `emitter`.

```js
const { EventEmitter, listenerCount } = require('events');
const myEmitter = new EventEmitter();
myEmitter.on('event', () => {});
myEmitter.on('event', () => {});
console.log(listenerCount(myEmitter, 'event'));
// Prints: 2
```

**`since`** v0.9.12

**`deprecated`** Since v3.2.0 - Use `listenerCount` instead.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | `EventEmitter` | The emitter to query |
| `eventName` | `string` \| `symbol` | The event name |

#### Returns

`number`

#### Inherited from

[EventEmitter](verida_web_helpers._internal_.EventEmitter-1.md).[listenerCount](verida_web_helpers._internal_.EventEmitter-1.md#listenercount)

#### Defined in

node_modules/@types/node/events.d.ts:234

___

### on

▸ `Static` **on**(`emitter`, `eventName`, `options?`): [`AsyncIterableIterator`](../interfaces/verida_web_helpers._internal_.AsyncIterableIterator.md)<`any`\>

```js
const { on, EventEmitter } = require('events');

(async () => {
  const ee = new EventEmitter();

  // Emit later on
  process.nextTick(() => {
    ee.emit('foo', 'bar');
    ee.emit('foo', 42);
  });

  for await (const event of on(ee, 'foo')) {
    // The execution of this inner block is synchronous and it
    // processes one event at a time (even with await). Do not use
    // if concurrent execution is required.
    console.log(event); // prints ['bar'] [42]
  }
  // Unreachable here
})();
```

Returns an `AsyncIterator` that iterates `eventName` events. It will throw
if the `EventEmitter` emits `'error'`. It removes all listeners when
exiting the loop. The `value` returned by each iteration is an array
composed of the emitted event arguments.

An `AbortSignal` can be used to cancel waiting on events:

```js
const { on, EventEmitter } = require('events');
const ac = new AbortController();

(async () => {
  const ee = new EventEmitter();

  // Emit later on
  process.nextTick(() => {
    ee.emit('foo', 'bar');
    ee.emit('foo', 42);
  });

  for await (const event of on(ee, 'foo', { signal: ac.signal })) {
    // The execution of this inner block is synchronous and it
    // processes one event at a time (even with await). Do not use
    // if concurrent execution is required.
    console.log(event); // prints ['bar'] [42]
  }
  // Unreachable here
})();

process.nextTick(() => ac.abort());
```

**`since`** v13.6.0, v12.16.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | `EventEmitter` | - |
| `eventName` | `string` | The name of the event being listened for |
| `options?` | [`StaticEventEmitterOptions`](../interfaces/verida_web_helpers._internal_.StaticEventEmitterOptions.md) | - |

#### Returns

[`AsyncIterableIterator`](../interfaces/verida_web_helpers._internal_.AsyncIterableIterator.md)<`any`\>

that iterates `eventName` events emitted by the `emitter`

#### Inherited from

[EventEmitter](verida_web_helpers._internal_.EventEmitter-1.md).[on](verida_web_helpers._internal_.EventEmitter-1.md#on)

#### Defined in

node_modules/@types/node/events.d.ts:217

___

### once

▸ `Static` **once**(`emitter`, `eventName`, `options?`): `Promise`<`any`[]\>

Creates a `Promise` that is fulfilled when the `EventEmitter` emits the given
event or that is rejected if the `EventEmitter` emits `'error'` while waiting.
The `Promise` will resolve with an array of all the arguments emitted to the
given event.

This method is intentionally generic and works with the web platform[EventTarget](https://dom.spec.whatwg.org/#interface-eventtarget) interface, which has no special`'error'` event
semantics and does not listen to the `'error'` event.

```js
const { once, EventEmitter } = require('events');

async function run() {
  const ee = new EventEmitter();

  process.nextTick(() => {
    ee.emit('myevent', 42);
  });

  const [value] = await once(ee, 'myevent');
  console.log(value);

  const err = new Error('kaboom');
  process.nextTick(() => {
    ee.emit('error', err);
  });

  try {
    await once(ee, 'myevent');
  } catch (err) {
    console.log('error happened', err);
  }
}

run();
```

The special handling of the `'error'` event is only used when `events.once()`is used to wait for another event. If `events.once()` is used to wait for the
'`error'` event itself, then it is treated as any other kind of event without
special handling:

```js
const { EventEmitter, once } = require('events');

const ee = new EventEmitter();

once(ee, 'error')
  .then(([err]) => console.log('ok', err.message))
  .catch((err) => console.log('error', err.message));

ee.emit('error', new Error('boom'));

// Prints: ok boom
```

An `AbortSignal` can be used to cancel waiting for the event:

```js
const { EventEmitter, once } = require('events');

const ee = new EventEmitter();
const ac = new AbortController();

async function foo(emitter, event, signal) {
  try {
    await once(emitter, event, { signal });
    console.log('event emitted!');
  } catch (error) {
    if (error.name === 'AbortError') {
      console.error('Waiting for the event was canceled!');
    } else {
      console.error('There was an error', error.message);
    }
  }
}

foo(ee, 'foo', ac.signal);
ac.abort(); // Abort waiting for the event
ee.emit('foo'); // Prints: Waiting for the event was canceled!
```

**`since`** v11.13.0, v10.16.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | [`NodeEventTarget`](../interfaces/verida_web_helpers._internal_.NodeEventTarget.md) |
| `eventName` | `string` \| `symbol` |
| `options?` | [`StaticEventEmitterOptions`](../interfaces/verida_web_helpers._internal_.StaticEventEmitterOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Inherited from

[EventEmitter](verida_web_helpers._internal_.EventEmitter-1.md).[once](verida_web_helpers._internal_.EventEmitter-1.md#once)

#### Defined in

node_modules/@types/node/events.d.ts:157

▸ `Static` **once**(`emitter`, `eventName`, `options?`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | [`DOMEventTarget`](../interfaces/verida_web_helpers._internal_.DOMEventTarget.md) |
| `eventName` | `string` |
| `options?` | [`StaticEventEmitterOptions`](../interfaces/verida_web_helpers._internal_.StaticEventEmitterOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Inherited from

[EventEmitter](verida_web_helpers._internal_.EventEmitter-1.md).[once](verida_web_helpers._internal_.EventEmitter-1.md#once)

#### Defined in

node_modules/@types/node/events.d.ts:158
