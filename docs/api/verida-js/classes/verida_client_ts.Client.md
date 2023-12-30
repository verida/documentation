[root](../README.md) / [Modules](../modules.md) / [@verida/client-ts](../modules/verida_client_ts.md) / Client

# Class: Client

[@verida/client-ts](../modules/verida_client_ts.md).Client

## Implements

- [`IClient`](../interfaces/verida_client_ts._internal_.IClient.md)

## Table of contents

### Constructors

- [constructor](verida_client_ts.Client.md#constructor)

### Properties

- [account](verida_client_ts.Client.md#account)
- [config](verida_client_ts.Client.md#config)
- [did](verida_client_ts.Client.md#did)
- [didClient](verida_client_ts.Client.md#didclient)
- [didContextManager](verida_client_ts.Client.md#didcontextmanager)
- [environment](verida_client_ts.Client.md#environment)
- [nameClient](verida_client_ts.Client.md#nameclient)

### Methods

- [connect](verida_client_ts.Client.md#connect)
- [destroyAccount](verida_client_ts.Client.md#destroyaccount)
- [destroyContext](verida_client_ts.Client.md#destroycontext)
- [getConfig](verida_client_ts.Client.md#getconfig)
- [getContextConfig](verida_client_ts.Client.md#getcontextconfig)
- [getContextNameFromHash](verida_client_ts.Client.md#getcontextnamefromhash)
- [getDID](verida_client_ts.Client.md#getdid)
- [getSchema](verida_client_ts.Client.md#getschema)
- [getUsernames](verida_client_ts.Client.md#getusernames)
- [getValidDataSignatures](verida_client_ts.Client.md#getvaliddatasignatures)
- [isConnected](verida_client_ts.Client.md#isconnected)
- [openContext](verida_client_ts.Client.md#opencontext)
- [openExternalContext](verida_client_ts.Client.md#openexternalcontext)
- [openPublicProfile](verida_client_ts.Client.md#openpublicprofile)
- [parseDid](verida_client_ts.Client.md#parsedid)

## Constructors

### constructor

• **new Client**(`userConfig`)

Create a client connection to the Verida network

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userConfig` | [`ClientConfig`](../interfaces/verida_client_ts._internal_.ClientConfig.md) | ClientConfig Configuration for establishing a connection to the Verida network |

#### Defined in

[packages/client-ts/src/client.ts:56](https://github.com/verida/verida-js/blob/5040472/packages/client-ts/src/client.ts#L56)

## Properties

### account

• `Private` `Optional` **account**: [`IAccount`](../interfaces/verida_client_ts._internal_.IAccount.md)

Connected account instance

#### Defined in

[packages/client-ts/src/client.ts:32](https://github.com/verida/verida-js/blob/5040472/packages/client-ts/src/client.ts#L32)

___

### config

• `Private` **config**: [`DefaultClientConfig`](../interfaces/verida_client_ts._internal_.DefaultClientConfig.md)

Current configuration for this client

#### Defined in

[packages/client-ts/src/client.ts:49](https://github.com/verida/verida-js/blob/5040472/packages/client-ts/src/client.ts#L49)

___

### did

• `Private` `Optional` **did**: `string`

DID of connected account

#### Defined in

[packages/client-ts/src/client.ts:37](https://github.com/verida/verida-js/blob/5040472/packages/client-ts/src/client.ts#L37)

___

### didClient

• **didClient**: [`DIDClient`](verida_client_ts._internal_.DIDClient.md)

Connection to the Verida DID Registry

#### Defined in

[packages/client-ts/src/client.ts:22](https://github.com/verida/verida-js/blob/5040472/packages/client-ts/src/client.ts#L22)

___

### didContextManager

• `Private` **didContextManager**: [`DIDContextManager`](verida_client_ts._internal_.DIDContextManager.md)

Helper instance to manage DID contexts

#### Defined in

[packages/client-ts/src/client.ts:27](https://github.com/verida/verida-js/blob/5040472/packages/client-ts/src/client.ts#L27)

___

### environment

• `Private` **environment**: [`EnvironmentType`](../enums/verida_client_ts._internal_.EnvironmentType.md)

Currently selected environment

#### Defined in

[packages/client-ts/src/client.ts:42](https://github.com/verida/verida-js/blob/5040472/packages/client-ts/src/client.ts#L42)

___

### nameClient

• `Private` **nameClient**: [`VeridaNameClient`](verida_client_ts._internal_.VeridaNameClient.md)

#### Defined in

[packages/client-ts/src/client.ts:44](https://github.com/verida/verida-js/blob/5040472/packages/client-ts/src/client.ts#L44)

## Methods

### connect

▸ **connect**(`account`): `Promise`<`void`\>

Connect an Account to this client.

Sets the account owner who can then create storage contexts,
authenticate with databases, send messages etc.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `account` | [`IAccount`](../interfaces/verida_client_ts._internal_.IAccount.md) | AccountInterface |

#### Returns

`Promise`<`void`\>

#### Implementation of

[IClient](../interfaces/verida_client_ts._internal_.IClient.md).[connect](../interfaces/verida_client_ts._internal_.IClient.md#connect)

#### Defined in

[packages/client-ts/src/client.ts:95](https://github.com/verida/verida-js/blob/5040472/packages/client-ts/src/client.ts#L95)

___

### destroyAccount

▸ **destroyAccount**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/client-ts/src/client.ts:311](https://github.com/verida/verida-js/blob/5040472/packages/client-ts/src/client.ts#L311)

___

### destroyContext

▸ **destroyContext**(`contextName`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `contextName` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[packages/client-ts/src/client.ts:361](https://github.com/verida/verida-js/blob/5040472/packages/client-ts/src/client.ts#L361)

___

### getConfig

▸ **getConfig**(): [`DefaultClientConfig`](../interfaces/verida_client_ts._internal_.DefaultClientConfig.md)

#### Returns

[`DefaultClientConfig`](../interfaces/verida_client_ts._internal_.DefaultClientConfig.md)

#### Defined in

[packages/client-ts/src/client.ts:207](https://github.com/verida/verida-js/blob/5040472/packages/client-ts/src/client.ts#L207)

___

### getContextConfig

▸ **getContextConfig**(`did`, `contextName`): `Promise`<`undefined` \| [`SecureContextConfig`](../interfaces/verida_client_ts._internal_.SecureContextConfig.md)\>

Get the storage configuration of an application context for a given DID.

This provides the public details about the database, storage and messaging endpoints stored on did-client/did-document  for the requested `did`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `did` | `string` |  |
| `contextName` | `string` | The name of the context OR a context hash (starting with 0x) |

#### Returns

`Promise`<`undefined` \| [`SecureContextConfig`](../interfaces/verida_client_ts._internal_.SecureContextConfig.md)\>

SecureContextConfig | undefined

#### Implementation of

[IClient](../interfaces/verida_client_ts._internal_.IClient.md).[getContextConfig](../interfaces/verida_client_ts._internal_.IClient.md#getcontextconfig)

#### Defined in

[packages/client-ts/src/client.ts:199](https://github.com/verida/verida-js/blob/5040472/packages/client-ts/src/client.ts#L199)

___

### getContextNameFromHash

▸ **getContextNameFromHash**(`contextHash`, `didDocument?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `contextHash` | `string` |
| `didDocument?` | [`default`](verida_client_ts._internal_.default-1.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[packages/client-ts/src/client.ts:417](https://github.com/verida/verida-js/blob/5040472/packages/client-ts/src/client.ts#L417)

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

[packages/client-ts/src/client.ts:500](https://github.com/verida/verida-js/blob/5040472/packages/client-ts/src/client.ts#L500)

___

### getSchema

▸ **getSchema**(`schemaUri`): `Promise`<[`Schema`](verida_client_ts._internal_.Schema.md)\>

Get a Schama instance by URL.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `schemaUri` | `string` | URL of the schema |

#### Returns

`Promise`<[`Schema`](verida_client_ts._internal_.Schema.md)\>

Schema A schema object

#### Implementation of

[IClient](../interfaces/verida_client_ts._internal_.IClient.md).[getSchema](../interfaces/verida_client_ts._internal_.IClient.md#getschema)

#### Defined in

[packages/client-ts/src/client.ts:473](https://github.com/verida/verida-js/blob/5040472/packages/client-ts/src/client.ts#L473)

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

[packages/client-ts/src/client.ts:510](https://github.com/verida/verida-js/blob/5040472/packages/client-ts/src/client.ts#L510)

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

[IClient](../interfaces/verida_client_ts._internal_.IClient.md).[getValidDataSignatures](../interfaces/verida_client_ts._internal_.IClient.md#getvaliddatasignatures)

#### Defined in

[packages/client-ts/src/client.ts:258](https://github.com/verida/verida-js/blob/5040472/packages/client-ts/src/client.ts#L258)

___

### isConnected

▸ **isConnected**(): `boolean`

Check if an account is connected to this client.

#### Returns

`boolean`

boolean True of an account is connected

#### Implementation of

[IClient](../interfaces/verida_client_ts._internal_.IClient.md).[isConnected](../interfaces/verida_client_ts._internal_.IClient.md#isconnected)

#### Defined in

[packages/client-ts/src/client.ts:110](https://github.com/verida/verida-js/blob/5040472/packages/client-ts/src/client.ts#L110)

___

### openContext

▸ **openContext**(`contextName`, `forceCreate?`): `Promise`<`undefined` \| [`IContext`](../interfaces/verida_client_ts._internal_.IContext.md)\>

Open a storage context for the current account.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `contextName` | `string` | `undefined` | string Name of the `context` to open. |
| `forceCreate` | `boolean` | `true` | boolean If the `context` doesn't already exist for the connected account, create it. Depending on the type of `Account` connected, this may open a prompt for the user to confirm (and sign). |

#### Returns

`Promise`<`undefined` \| [`IContext`](../interfaces/verida_client_ts._internal_.IContext.md)\>

Context | undefined

#### Implementation of

[IClient](../interfaces/verida_client_ts._internal_.IClient.md).[openContext](../interfaces/verida_client_ts._internal_.IClient.md#opencontext)

#### Defined in

[packages/client-ts/src/client.ts:121](https://github.com/verida/verida-js/blob/5040472/packages/client-ts/src/client.ts#L121)

___

### openExternalContext

▸ **openExternalContext**(`contextName`, `did`): `Promise`<[`IContext`](../interfaces/verida_client_ts._internal_.IContext.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `contextName` | `string` | The name of the context OR a context hash (starting with 0x) |
| `did` | `string` |  |

#### Returns

`Promise`<[`IContext`](../interfaces/verida_client_ts._internal_.IContext.md)\>

#### Implementation of

[IClient](../interfaces/verida_client_ts._internal_.IClient.md).[openExternalContext](../interfaces/verida_client_ts._internal_.IClient.md#openexternalcontext)

#### Defined in

[packages/client-ts/src/client.ts:172](https://github.com/verida/verida-js/blob/5040472/packages/client-ts/src/client.ts#L172)

___

### openPublicProfile

▸ **openPublicProfile**(`did`, `contextName`, `profileName?`, `fallbackContext?`): `Promise`<`undefined` \| [`IProfile`](../interfaces/verida_client_ts._internal_.IProfile.md)\>

Open the public profile of any user in read only mode.

Every application context has the ability to have it's own public profiles.

You most likely want to request the `Verida: Vault` context.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `did` | `string` | `undefined` |
| `contextName` | `string` | `undefined` |
| `profileName` | `string` | `"basicProfile"` |
| `fallbackContext` | ``null`` \| `string` | `"Verida: Vault"` |

#### Returns

`Promise`<`undefined` \| [`IProfile`](../interfaces/verida_client_ts._internal_.IProfile.md)\>

`<Profile | undefined>`

#### Implementation of

[IClient](../interfaces/verida_client_ts._internal_.IClient.md).[openPublicProfile](../interfaces/verida_client_ts._internal_.IClient.md#openpublicprofile)

#### Defined in

[packages/client-ts/src/client.ts:222](https://github.com/verida/verida-js/blob/5040472/packages/client-ts/src/client.ts#L222)

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

[packages/client-ts/src/client.ts:484](https://github.com/verida/verida-js/blob/5040472/packages/client-ts/src/client.ts#L484)
