[root](../README.md) / [Modules](../modules.md) / [@verida/web-helpers](../modules/verida_web_helpers.md) / [<internal\>](../modules/verida_web_helpers._internal_.md) / Client

# Class: Client

[@verida/web-helpers](../modules/verida_web_helpers.md).[<internal\>](../modules/verida_web_helpers._internal_.md).Client

## Implements

- [`IClient`](../interfaces/verida_web_helpers._internal_.IClient.md)

## Table of contents

### Constructors

- [constructor](verida_web_helpers._internal_.Client.md#constructor)

### Properties

- [account](verida_web_helpers._internal_.Client.md#account)
- [config](verida_web_helpers._internal_.Client.md#config)
- [did](verida_web_helpers._internal_.Client.md#did)
- [didClient](verida_web_helpers._internal_.Client.md#didclient)
- [didContextManager](verida_web_helpers._internal_.Client.md#didcontextmanager)
- [environment](verida_web_helpers._internal_.Client.md#environment)
- [nameClient](verida_web_helpers._internal_.Client.md#nameclient)

### Methods

- [connect](verida_web_helpers._internal_.Client.md#connect)
- [getConfig](verida_web_helpers._internal_.Client.md#getconfig)
- [getContextConfig](verida_web_helpers._internal_.Client.md#getcontextconfig)
- [getDID](verida_web_helpers._internal_.Client.md#getdid)
- [getSchema](verida_web_helpers._internal_.Client.md#getschema)
- [getUsernames](verida_web_helpers._internal_.Client.md#getusernames)
- [getValidDataSignatures](verida_web_helpers._internal_.Client.md#getvaliddatasignatures)
- [isConnected](verida_web_helpers._internal_.Client.md#isconnected)
- [openContext](verida_web_helpers._internal_.Client.md#opencontext)
- [openExternalContext](verida_web_helpers._internal_.Client.md#openexternalcontext)
- [openPublicProfile](verida_web_helpers._internal_.Client.md#openpublicprofile)
- [parseDid](verida_web_helpers._internal_.Client.md#parsedid)

## Constructors

### constructor

• **new Client**(`userConfig`)

Create a client connection to the Verida network

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userConfig` | [`ClientConfig`](../interfaces/verida_web_helpers._internal_.ClientConfig.md) | ClientConfig Configuration for establishing a connection to the Verida network |

#### Defined in

packages/client-ts/dist/client.d.ts:39

## Properties

### account

• `Private` `Optional` **account**: `any`

Connected account instance

#### Defined in

packages/client-ts/dist/client.d.ts:20

___

### config

• `Private` **config**: `any`

Current configuration for this client

#### Defined in

packages/client-ts/dist/client.d.ts:33

___

### did

• `Private` `Optional` **did**: `any`

DID of connected account

#### Defined in

packages/client-ts/dist/client.d.ts:24

___

### didClient

• **didClient**: [`DIDClient`](verida_web_helpers._internal_.DIDClient.md)

Connection to the Verida DID Registry

#### Defined in

packages/client-ts/dist/client.d.ts:12

___

### didContextManager

• `Private` **didContextManager**: `any`

Helper instance to manage DID contexts

#### Defined in

packages/client-ts/dist/client.d.ts:16

___

### environment

• `Private` **environment**: `any`

Currently selected environment

#### Defined in

packages/client-ts/dist/client.d.ts:28

___

### nameClient

• `Private` **nameClient**: `any`

#### Defined in

packages/client-ts/dist/client.d.ts:29

## Methods

### connect

▸ **connect**(`account`): `Promise`<`void`\>

Connect an Account to this client.

Sets the account owner who can then create storage contexts,
authenticate with databases, send messages etc.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `account` | [`IAccount`](../interfaces/verida_web_helpers._internal_.IAccount.md) | AccountInterface |

#### Returns

`Promise`<`void`\>

#### Implementation of

[IClient](../interfaces/verida_web_helpers._internal_.IClient.md).[connect](../interfaces/verida_web_helpers._internal_.IClient.md#connect)

#### Defined in

packages/client-ts/dist/client.d.ts:48

___

### getConfig

▸ **getConfig**(): [`DefaultClientConfig`](../interfaces/verida_web_helpers._internal_.DefaultClientConfig.md)

#### Returns

[`DefaultClientConfig`](../interfaces/verida_web_helpers._internal_.DefaultClientConfig.md)

#### Defined in

packages/client-ts/dist/client.d.ts:80

___

### getContextConfig

▸ **getContextConfig**(`did`, `contextName`): `Promise`<`undefined` \| [`SecureContextConfig`](../interfaces/verida_web_helpers._internal_.SecureContextConfig.md)\>

Get the storage configuration of an application context for a given DID.

This provides the public details about the database, storage and messaging endpoints stored on did-client/did-document  for the requested `did`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `did` | `string` |  |
| `contextName` | `string` | The name of the context OR a context hash (starting with 0x) |

#### Returns

`Promise`<`undefined` \| [`SecureContextConfig`](../interfaces/verida_web_helpers._internal_.SecureContextConfig.md)\>

SecureContextConfig | undefined

#### Implementation of

[IClient](../interfaces/verida_web_helpers._internal_.IClient.md).[getContextConfig](../interfaces/verida_web_helpers._internal_.IClient.md#getcontextconfig)

#### Defined in

packages/client-ts/dist/client.d.ts:79

___

### getDID

▸ **getDID**(`username`): `Promise`<`string`\>

Get the DID linked to a username

#### Parameters

| Name | Type |
| :------ | :------ |
| `username` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

packages/client-ts/dist/client.d.ts:126

___

### getSchema

▸ **getSchema**(`schemaUri`): `Promise`<[`Schema`](verida_web_helpers._internal_.Schema.md)\>

Get a Schama instance by URL.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `schemaUri` | `string` | URL of the schema |

#### Returns

`Promise`<[`Schema`](verida_web_helpers._internal_.Schema.md)\>

Schema A schema object

#### Implementation of

[IClient](../interfaces/verida_web_helpers._internal_.IClient.md).[getSchema](../interfaces/verida_web_helpers._internal_.IClient.md#getschema)

#### Defined in

packages/client-ts/dist/client.d.ts:111

___

### getUsernames

▸ **getUsernames**(`did`): `Promise`<`string`[]\>

Get an array of usernames linked to a DID

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `string` |

#### Returns

`Promise`<`string`[]\>

#### Defined in

packages/client-ts/dist/client.d.ts:133

___

### getValidDataSignatures

▸ **getValidDataSignatures**(`data`, `did?`): `Promise`<`string`[]\>

Get the valid data signatures for a given database record.

Iterates through all the signatures attached to a database record and validates each signature.

Only returns the signatures that are valid.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `any` | A single database record |
| `did?` | `string` | An optional did to filter the results by |

#### Returns

`Promise`<`string`[]\>

string[] Array of DIDs that have validly signed the data

#### Implementation of

[IClient](../interfaces/verida_web_helpers._internal_.IClient.md).[getValidDataSignatures](../interfaces/verida_web_helpers._internal_.IClient.md#getvaliddatasignatures)

#### Defined in

packages/client-ts/dist/client.d.ts:104

___

### isConnected

▸ **isConnected**(): `boolean`

Check if an account is connected to this client.

#### Returns

`boolean`

boolean True of an account is connected

#### Implementation of

[IClient](../interfaces/verida_web_helpers._internal_.IClient.md).[isConnected](../interfaces/verida_web_helpers._internal_.IClient.md#isconnected)

#### Defined in

packages/client-ts/dist/client.d.ts:54

___

### openContext

▸ **openContext**(`contextName`, `forceCreate?`): `Promise`<`undefined` \| [`IContext`](../interfaces/verida_web_helpers._internal_.IContext.md)\>

Open a storage context for the current account.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `contextName` | `string` | string Name of the `context` to open. |
| `forceCreate?` | `boolean` | boolean If the `context` doesn't already exist for the connected account, create it. Depending on the type of `Account` connected, this may open a prompt for the user to confirm (and sign). |

#### Returns

`Promise`<`undefined` \| [`IContext`](../interfaces/verida_web_helpers._internal_.IContext.md)\>

Context | undefined

#### Implementation of

[IClient](../interfaces/verida_web_helpers._internal_.IClient.md).[openContext](../interfaces/verida_web_helpers._internal_.IClient.md#opencontext)

#### Defined in

packages/client-ts/dist/client.d.ts:62

___

### openExternalContext

▸ **openExternalContext**(`contextName`, `did`): `Promise`<[`IContext`](../interfaces/verida_web_helpers._internal_.IContext.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `contextName` | `string` | The name of the context OR a context hash (starting with 0x) |
| `did` | `string` |  |

#### Returns

`Promise`<[`IContext`](../interfaces/verida_web_helpers._internal_.IContext.md)\>

#### Implementation of

[IClient](../interfaces/verida_web_helpers._internal_.IClient.md).[openExternalContext](../interfaces/verida_web_helpers._internal_.IClient.md#openexternalcontext)

#### Defined in

packages/client-ts/dist/client.d.ts:69

___

### openPublicProfile

▸ **openPublicProfile**(`did`, `contextName`, `profileName?`, `fallbackContext?`): `Promise`<`undefined` \| [`IProfile`](../interfaces/verida_web_helpers._internal_.IProfile.md)\>

Open the public profile of any user in read only mode.

Every application context has the ability to have it's own public profiles.

You most likely want to request the `Verida: Vault` context.

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `string` |
| `contextName` | `string` |
| `profileName?` | `string` |
| `fallbackContext?` | ``null`` \| `string` |

#### Returns

`Promise`<`undefined` \| [`IProfile`](../interfaces/verida_web_helpers._internal_.IProfile.md)\>

`<Profile | undefined>`

#### Implementation of

[IClient](../interfaces/verida_web_helpers._internal_.IClient.md).[openPublicProfile](../interfaces/verida_web_helpers._internal_.IClient.md#openpublicprofile)

#### Defined in

packages/client-ts/dist/client.d.ts:92

___

### parseDid

▸ **parseDid**(`didOrUsername`): `Promise`<`string`\>

Converts a string that may be either a valid DID or a valid Verida username into
a Verida username.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `didOrUsername` | `string` | DID string or Verida username string (ending in `.vda`) |

#### Returns

`Promise`<`string`\>

#### Defined in

packages/client-ts/dist/client.d.ts:119
