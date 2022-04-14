[root](../README.md) / [Modules](../modules.md) / [@verida/client-ts](../modules/verida_client_ts.md) / Context

# Class: Context

[@verida/client-ts](../modules/verida_client_ts.md).Context

## Table of contents

### Constructors

- [constructor](verida_client_ts.Context.md#constructor)

### Properties

- [account](verida_client_ts.Context.md#account)
- [client](verida_client_ts.Context.md#client)
- [contextName](verida_client_ts.Context.md#contextname)
- [databaseEngines](verida_client_ts.Context.md#databaseengines)
- [dbRegistry](verida_client_ts.Context.md#dbregistry)
- [didContextManager](verida_client_ts.Context.md#didcontextmanager)
- [messagingEngine](verida_client_ts.Context.md#messagingengine)
- [notificationEngine](verida_client_ts.Context.md#notificationengine)

### Methods

- [disconnect](verida_client_ts.Context.md#disconnect)
- [getAccount](verida_client_ts.Context.md#getaccount)
- [getClient](verida_client_ts.Context.md#getclient)
- [getContextConfig](verida_client_ts.Context.md#getcontextconfig)
- [getContextName](verida_client_ts.Context.md#getcontextname)
- [getDatabaseEngine](verida_client_ts.Context.md#getdatabaseengine)
- [getDbRegistry](verida_client_ts.Context.md#getdbregistry)
- [getDidContextManager](verida_client_ts.Context.md#getdidcontextmanager)
- [getMessaging](verida_client_ts.Context.md#getmessaging)
- [getNotification](verida_client_ts.Context.md#getnotification)
- [openDatabase](verida_client_ts.Context.md#opendatabase)
- [openDatastore](verida_client_ts.Context.md#opendatastore)
- [openExternalDatabase](verida_client_ts.Context.md#openexternaldatabase)
- [openExternalDatastore](verida_client_ts.Context.md#openexternaldatastore)
- [openProfile](verida_client_ts.Context.md#openprofile)

## Constructors

### constructor

• **new Context**(`client`, `contextName`, `didContextManager`, `account?`)

Instantiate a new context.

**Do not use directly**. Use `client.openContext()` or `Network.connect()`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](verida_client_ts.Client.md) |
| `contextName` | `string` |
| `didContextManager` | `DIDContextManager` |
| `account?` | `default` |

#### Defined in

[client-ts/src/context/context.ts:71](https://github.com/verida/verida-js/blob/039856c/packages/client-ts/src/context/context.ts#L71)

## Properties

### account

• `Private` `Optional` **account**: `default`

#### Defined in

[client-ts/src/context/context.ts:52](https://github.com/verida/verida-js/blob/039856c/packages/client-ts/src/context/context.ts#L52)

___

### client

• `Private` **client**: [`Client`](verida_client_ts.Client.md)

#### Defined in

[client-ts/src/context/context.ts:51](https://github.com/verida/verida-js/blob/039856c/packages/client-ts/src/context/context.ts#L51)

___

### contextName

• `Private` **contextName**: `string`

#### Defined in

[client-ts/src/context/context.ts:56](https://github.com/verida/verida-js/blob/039856c/packages/client-ts/src/context/context.ts#L56)

___

### databaseEngines

• `Private` **databaseEngines**: `DatabaseEngines` = `{}`

#### Defined in

[client-ts/src/context/context.ts:58](https://github.com/verida/verida-js/blob/039856c/packages/client-ts/src/context/context.ts#L58)

___

### dbRegistry

• `Private` **dbRegistry**: `DbRegistry`

#### Defined in

[client-ts/src/context/context.ts:59](https://github.com/verida/verida-js/blob/039856c/packages/client-ts/src/context/context.ts#L59)

___

### didContextManager

• `Private` **didContextManager**: `DIDContextManager`

#### Defined in

[client-ts/src/context/context.ts:57](https://github.com/verida/verida-js/blob/039856c/packages/client-ts/src/context/context.ts#L57)

___

### messagingEngine

• `Private` `Optional` **messagingEngine**: [`Messaging`](../interfaces/verida_client_ts.Messaging.md)

#### Defined in

[client-ts/src/context/context.ts:53](https://github.com/verida/verida-js/blob/039856c/packages/client-ts/src/context/context.ts#L53)

___

### notificationEngine

• `Private` `Optional` **notificationEngine**: `default`

#### Defined in

[client-ts/src/context/context.ts:54](https://github.com/verida/verida-js/blob/039856c/packages/client-ts/src/context/context.ts#L54)

## Methods

### disconnect

▸ **disconnect**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

#### Defined in

[client-ts/src/context/context.ts:120](https://github.com/verida/verida-js/blob/039856c/packages/client-ts/src/context/context.ts#L120)

___

### getAccount

▸ **getAccount**(): `default`

#### Returns

`default`

#### Defined in

[client-ts/src/context/context.ts:108](https://github.com/verida/verida-js/blob/039856c/packages/client-ts/src/context/context.ts#L108)

___

### getClient

▸ **getClient**(): [`Client`](verida_client_ts.Client.md)

#### Returns

[`Client`](verida_client_ts.Client.md)

#### Defined in

[client-ts/src/context/context.ts:116](https://github.com/verida/verida-js/blob/039856c/packages/client-ts/src/context/context.ts#L116)

___

### getContextConfig

▸ **getContextConfig**(`did?`, `forceCreate?`, `customContextName?`): `Promise`<`SecureContextConfig`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did?` | `string` |
| `forceCreate?` | `boolean` |
| `customContextName?` | `string` |

#### Returns

`Promise`<`SecureContextConfig`\>

#### Defined in

[client-ts/src/context/context.ts:84](https://github.com/verida/verida-js/blob/039856c/packages/client-ts/src/context/context.ts#L84)

___

### getContextName

▸ **getContextName**(): `string`

#### Returns

`string`

#### Defined in

[client-ts/src/context/context.ts:104](https://github.com/verida/verida-js/blob/039856c/packages/client-ts/src/context/context.ts#L104)

___

### getDatabaseEngine

▸ `Private` **getDatabaseEngine**(`did`, `createContext?`): `Promise`<`BaseStorageEngine`\>

Get a storage engine for a given DID and this contextName

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `string` |
| `createContext?` | `boolean` |

#### Returns

`Promise`<`BaseStorageEngine`\>

#### Defined in

[client-ts/src/context/context.ts:136](https://github.com/verida/verida-js/blob/039856c/packages/client-ts/src/context/context.ts#L136)

___

### getDbRegistry

▸ **getDbRegistry**(): `DbRegistry`

#### Returns

`DbRegistry`

#### Defined in

[client-ts/src/context/context.ts:412](https://github.com/verida/verida-js/blob/039856c/packages/client-ts/src/context/context.ts#L412)

___

### getDidContextManager

▸ **getDidContextManager**(): `DIDContextManager`

#### Returns

`DIDContextManager`

#### Defined in

[client-ts/src/context/context.ts:112](https://github.com/verida/verida-js/blob/039856c/packages/client-ts/src/context/context.ts#L112)

___

### getMessaging

▸ **getMessaging**(`messageConfig?`): `Promise`<[`Messaging`](../interfaces/verida_client_ts.Messaging.md)\>

Get a messaging instance for this application context.

Allows you to send and receive messages as the currently connected account.

#### Parameters

| Name | Type |
| :------ | :------ |
| `messageConfig` | [`MessagesConfig`](../interfaces/verida_client_ts.ContextInterfaces.MessagesConfig.md) |

#### Returns

`Promise`<[`Messaging`](../interfaces/verida_client_ts.Messaging.md)\>

Messaging instance

#### Defined in

[client-ts/src/context/context.ts:178](https://github.com/verida/verida-js/blob/039856c/packages/client-ts/src/context/context.ts#L178)

___

### getNotification

▸ **getNotification**(): `Promise`<`undefined` \| `default`\>

#### Returns

`Promise`<`undefined` \| `default`\>

#### Defined in

[client-ts/src/context/context.ts:211](https://github.com/verida/verida-js/blob/039856c/packages/client-ts/src/context/context.ts#L211)

___

### openDatabase

▸ **openDatabase**(`databaseName`, `config?`): `Promise`<`default`\>

Open a database owned by this account.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `databaseName` | `string` | Name of the database to open |
| `config` | [`DatabaseOpenConfig`](../interfaces/verida_client_ts.ContextInterfaces.DatabaseOpenConfig.md) | - |

#### Returns

`Promise`<`default`\>

#### Defined in

[client-ts/src/context/context.ts:280](https://github.com/verida/verida-js/blob/039856c/packages/client-ts/src/context/context.ts#L280)

___

### openDatastore

▸ **openDatastore**(`schemaUri`, `config?`): `Promise`<`Datastore`\>

Open a dataastore owned by this account.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `schemaUri` | `string` | URI of the schema to open (ie: https://common.schemas.verida.io/health/activity/latest/schema.json) |
| `config` | [`DatastoreOpenConfig`](../interfaces/verida_client_ts.ContextInterfaces.DatastoreOpenConfig.md) | Optional datastore configuration |

#### Returns

`Promise`<`Datastore`\>

#### Defined in

[client-ts/src/context/context.ts:372](https://github.com/verida/verida-js/blob/039856c/packages/client-ts/src/context/context.ts#L372)

___

### openExternalDatabase

▸ **openExternalDatabase**(`databaseName`, `did`, `config?`): `Promise`<`default`\>

Open an external database owned by an account that isn't the currently connected account.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `databaseName` | `string` | Name of the database to open |
| `did` | `string` | DID of the external account that owns the database |
| `config` | [`DatabaseOpenConfig`](../interfaces/verida_client_ts.ContextInterfaces.DatabaseOpenConfig.md) | - |

#### Returns

`Promise`<`default`\>

#### Defined in

[client-ts/src/context/context.ts:318](https://github.com/verida/verida-js/blob/039856c/packages/client-ts/src/context/context.ts#L318)

___

### openExternalDatastore

▸ **openExternalDatastore**(`schemaUri`, `did`, `options?`): `Promise`<`Datastore`\>

Open an external datastore owned by an account that isn't the currently connected account.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `schemaUri` | `string` | URI of the schema to open (ie: https://common.schemas.verida.io/health/activity/latest/schema.json) |
| `did` | `string` | DID of the external account that owns the database |
| `options` | [`DatastoreOpenConfig`](../interfaces/verida_client_ts.ContextInterfaces.DatastoreOpenConfig.md) | Optional database configuration |

#### Returns

`Promise`<`Datastore`\>

#### Defined in

[client-ts/src/context/context.ts:392](https://github.com/verida/verida-js/blob/039856c/packages/client-ts/src/context/context.ts#L392)

___

### openProfile

▸ **openProfile**(`profileName?`, `did?`, `writeAccess?`): `Promise`<`undefined` \| `Profile`\>

Get a user's profile.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `profileName` | `string` | `"basicProfile"` | string Name of the Verida profile schema to load |
| `did?` | `string` | `undefined` | string DID of the profile to get. Leave blank to fetch a read/write profile for the currently authenticated user |
| `writeAccess?` | `boolean` | `undefined` | - |

#### Returns

`Promise`<`undefined` \| `Profile`\>

#### Defined in

[client-ts/src/context/context.ts:252](https://github.com/verida/verida-js/blob/039856c/packages/client-ts/src/context/context.ts#L252)
