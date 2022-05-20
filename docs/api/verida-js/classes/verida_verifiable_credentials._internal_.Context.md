[root](../README.md) / [Modules](../modules.md) / [@verida/verifiable-credentials](../modules/verida_verifiable_credentials.md) / [<internal\>](../modules/verida_verifiable_credentials._internal_.md) / Context

# Class: Context

[@verida/verifiable-credentials](../modules/verida_verifiable_credentials.md).[<internal\>](../modules/verida_verifiable_credentials._internal_.md).Context

## Table of contents

### Constructors

- [constructor](verida_verifiable_credentials._internal_.Context.md#constructor)

### Properties

- [account](verida_verifiable_credentials._internal_.Context.md#account)
- [client](verida_verifiable_credentials._internal_.Context.md#client)
- [contextName](verida_verifiable_credentials._internal_.Context.md#contextname)
- [databaseEngines](verida_verifiable_credentials._internal_.Context.md#databaseengines)
- [dbRegistry](verida_verifiable_credentials._internal_.Context.md#dbregistry)
- [didContextManager](verida_verifiable_credentials._internal_.Context.md#didcontextmanager)
- [getDatabaseEngine](verida_verifiable_credentials._internal_.Context.md#getdatabaseengine)
- [messagingEngine](verida_verifiable_credentials._internal_.Context.md#messagingengine)
- [notificationEngine](verida_verifiable_credentials._internal_.Context.md#notificationengine)

### Methods

- [disconnect](verida_verifiable_credentials._internal_.Context.md#disconnect)
- [getAccount](verida_verifiable_credentials._internal_.Context.md#getaccount)
- [getClient](verida_verifiable_credentials._internal_.Context.md#getclient)
- [getContextConfig](verida_verifiable_credentials._internal_.Context.md#getcontextconfig)
- [getContextName](verida_verifiable_credentials._internal_.Context.md#getcontextname)
- [getDbRegistry](verida_verifiable_credentials._internal_.Context.md#getdbregistry)
- [getDidContextManager](verida_verifiable_credentials._internal_.Context.md#getdidcontextmanager)
- [getMessaging](verida_verifiable_credentials._internal_.Context.md#getmessaging)
- [getNotification](verida_verifiable_credentials._internal_.Context.md#getnotification)
- [openDatabase](verida_verifiable_credentials._internal_.Context.md#opendatabase)
- [openDatastore](verida_verifiable_credentials._internal_.Context.md#opendatastore)
- [openExternalDatabase](verida_verifiable_credentials._internal_.Context.md#openexternaldatabase)
- [openExternalDatastore](verida_verifiable_credentials._internal_.Context.md#openexternaldatastore)
- [openProfile](verida_verifiable_credentials._internal_.Context.md#openprofile)

## Constructors

### constructor

• **new Context**(`client`, `contextName`, `didContextManager`, `account?`)

Instantiate a new context.

**Do not use directly**. Use `client.openContext()` or `Network.connect()`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](verida_verifiable_credentials._internal_.Client.md) |
| `contextName` | `string` |
| `didContextManager` | [`DIDContextManager`](verida_verifiable_credentials._internal_.DIDContextManager.md) |
| `account?` | [`default`](verida_verifiable_credentials._internal_.default.md) |

#### Defined in

packages/client-ts/dist/context/context.d.ts:44

## Properties

### account

• `Private` `Optional` **account**: `any`

#### Defined in

packages/client-ts/dist/context/context.d.ts:27

___

### client

• `Private` **client**: `any`

#### Defined in

packages/client-ts/dist/context/context.d.ts:26

___

### contextName

• `Private` **contextName**: `any`

#### Defined in

packages/client-ts/dist/context/context.d.ts:30

___

### databaseEngines

• `Private` **databaseEngines**: `any`

#### Defined in

packages/client-ts/dist/context/context.d.ts:32

___

### dbRegistry

• `Private` **dbRegistry**: `any`

#### Defined in

packages/client-ts/dist/context/context.d.ts:33

___

### didContextManager

• `Private` **didContextManager**: `any`

#### Defined in

packages/client-ts/dist/context/context.d.ts:31

___

### getDatabaseEngine

• `Private` **getDatabaseEngine**: `any`

Get a storage engine for a given DID and this contextName

**`param`**

**`returns`**

#### Defined in

packages/client-ts/dist/context/context.d.ts:57

___

### messagingEngine

• `Private` `Optional` **messagingEngine**: `any`

#### Defined in

packages/client-ts/dist/context/context.d.ts:28

___

### notificationEngine

• `Private` `Optional` **notificationEngine**: `any`

#### Defined in

packages/client-ts/dist/context/context.d.ts:29

## Methods

### disconnect

▸ **disconnect**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

#### Defined in

packages/client-ts/dist/context/context.d.ts:50

___

### getAccount

▸ **getAccount**(): [`default`](verida_verifiable_credentials._internal_.default.md)

#### Returns

[`default`](verida_verifiable_credentials._internal_.default.md)

#### Defined in

packages/client-ts/dist/context/context.d.ts:47

___

### getClient

▸ **getClient**(): [`Client`](verida_verifiable_credentials._internal_.Client.md)

#### Returns

[`Client`](verida_verifiable_credentials._internal_.Client.md)

#### Defined in

packages/client-ts/dist/context/context.d.ts:49

___

### getContextConfig

▸ **getContextConfig**(`did?`, `forceCreate?`, `customContextName?`): `Promise`<[`SecureContextConfig`](../interfaces/verida_verifiable_credentials._internal_.SecureContextConfig.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did?` | `string` |
| `forceCreate?` | `boolean` |
| `customContextName?` | `string` |

#### Returns

`Promise`<[`SecureContextConfig`](../interfaces/verida_verifiable_credentials._internal_.SecureContextConfig.md)\>

#### Defined in

packages/client-ts/dist/context/context.d.ts:45

___

### getContextName

▸ **getContextName**(): `string`

#### Returns

`string`

#### Defined in

packages/client-ts/dist/context/context.d.ts:46

___

### getDbRegistry

▸ **getDbRegistry**(): [`DbRegistry`](verida_verifiable_credentials._internal_.DbRegistry.md)

#### Returns

[`DbRegistry`](verida_verifiable_credentials._internal_.DbRegistry.md)

#### Defined in

packages/client-ts/dist/context/context.d.ts:110

___

### getDidContextManager

▸ **getDidContextManager**(): [`DIDContextManager`](verida_verifiable_credentials._internal_.DIDContextManager.md)

#### Returns

[`DIDContextManager`](verida_verifiable_credentials._internal_.DIDContextManager.md)

#### Defined in

packages/client-ts/dist/context/context.d.ts:48

___

### getMessaging

▸ **getMessaging**(`messageConfig?`): `Promise`<[`default`](../interfaces/verida_verifiable_credentials._internal_.default-7.md)\>

Get a messaging instance for this application context.

Allows you to send and receive messages as the currently connected account.

#### Parameters

| Name | Type |
| :------ | :------ |
| `messageConfig?` | [`MessagesConfig`](../interfaces/verida_verifiable_credentials._internal_.MessagesConfig.md) |

#### Returns

`Promise`<[`default`](../interfaces/verida_verifiable_credentials._internal_.default-7.md)\>

Messaging instance

#### Defined in

packages/client-ts/dist/context/context.d.ts:65

___

### getNotification

▸ **getNotification**(): `Promise`<`undefined` \| [`default`](../interfaces/verida_verifiable_credentials._internal_.default-8.md)\>

#### Returns

`Promise`<`undefined` \| [`default`](../interfaces/verida_verifiable_credentials._internal_.default-8.md)\>

#### Defined in

packages/client-ts/dist/context/context.d.ts:66

___

### openDatabase

▸ **openDatabase**(`databaseName`, `config?`): `Promise`<[`default`](../interfaces/verida_verifiable_credentials._internal_.default-9.md)\>

Open a database owned by this account.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `databaseName` | `string` | Name of the database to open |
| `config?` | [`DatabaseOpenConfig`](../interfaces/verida_verifiable_credentials._internal_.DatabaseOpenConfig.md) | - |

#### Returns

`Promise`<[`default`](../interfaces/verida_verifiable_credentials._internal_.default-9.md)\>

#### Defined in

packages/client-ts/dist/context/context.d.ts:83

___

### openDatastore

▸ **openDatastore**(`schemaUri`, `config?`): `Promise`<[`Datastore`](verida_verifiable_credentials._internal_.Datastore.md)\>

Open a dataastore owned by this account.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `schemaUri` | `string` | URI of the schema to open (ie: https://common.schemas.verida.io/health/activity/latest/schema.json) |
| `config?` | [`DatastoreOpenConfig`](../interfaces/verida_verifiable_credentials._internal_.DatastoreOpenConfig.md) | Optional datastore configuration |

#### Returns

`Promise`<[`Datastore`](verida_verifiable_credentials._internal_.Datastore.md)\>

#### Defined in

packages/client-ts/dist/context/context.d.ts:100

___

### openExternalDatabase

▸ **openExternalDatabase**(`databaseName`, `did`, `config?`): `Promise`<[`default`](../interfaces/verida_verifiable_credentials._internal_.default-9.md)\>

Open an external database owned by an account that isn't the currently connected account.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `databaseName` | `string` | Name of the database to open |
| `did` | `string` | DID of the external account that owns the database |
| `config?` | [`DatabaseOpenConfig`](../interfaces/verida_verifiable_credentials._internal_.DatabaseOpenConfig.md) | - |

#### Returns

`Promise`<[`default`](../interfaces/verida_verifiable_credentials._internal_.default-9.md)\>

#### Defined in

packages/client-ts/dist/context/context.d.ts:92

___

### openExternalDatastore

▸ **openExternalDatastore**(`schemaUri`, `did`, `options?`): `Promise`<[`Datastore`](verida_verifiable_credentials._internal_.Datastore.md)\>

Open an external datastore owned by an account that isn't the currently connected account.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `schemaUri` | `string` | URI of the schema to open (ie: https://common.schemas.verida.io/health/activity/latest/schema.json) |
| `did` | `string` | DID of the external account that owns the database |
| `options?` | [`DatastoreOpenConfig`](../interfaces/verida_verifiable_credentials._internal_.DatastoreOpenConfig.md) | Optional database configuration |

#### Returns

`Promise`<[`Datastore`](verida_verifiable_credentials._internal_.Datastore.md)\>

#### Defined in

packages/client-ts/dist/context/context.d.ts:109

___

### openProfile

▸ **openProfile**(`profileName?`, `did?`, `writeAccess?`): `Promise`<`undefined` \| [`Profile`](verida_verifiable_credentials._internal_.Profile.md)\>

Get a user's profile.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `profileName?` | `string` | string Name of the Verida profile schema to load |
| `did?` | `string` | string DID of the profile to get. Leave blank to fetch a read/write profile for the currently authenticated user |
| `writeAccess?` | `boolean` | - |

#### Returns

`Promise`<`undefined` \| [`Profile`](verida_verifiable_credentials._internal_.Profile.md)\>

#### Defined in

packages/client-ts/dist/context/context.d.ts:74
