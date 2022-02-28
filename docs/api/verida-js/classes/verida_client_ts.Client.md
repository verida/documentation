[root](../README.md) / [Modules](../modules.md) / [@verida/client-ts](../modules/verida_client_ts.md) / Client

# Class: Client

[@verida/client-ts](../modules/verida_client_ts.md).Client

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

### Methods

- [connect](verida_client_ts.Client.md#connect)
- [getConfig](verida_client_ts.Client.md#getconfig)
- [getContextConfig](verida_client_ts.Client.md#getcontextconfig)
- [getSchema](verida_client_ts.Client.md#getschema)
- [getValidDataSignatures](verida_client_ts.Client.md#getvaliddatasignatures)
- [isConnected](verida_client_ts.Client.md#isconnected)
- [openContext](verida_client_ts.Client.md#opencontext)
- [openExternalContext](verida_client_ts.Client.md#openexternalcontext)
- [openPublicProfile](verida_client_ts.Client.md#openpublicprofile)

## Constructors

### constructor

• **new Client**(`userConfig?`)

Create a client connection to the Verida network

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userConfig` | `ClientConfig` | ClientConfig Configuration for establishing a connection to the Verida network |

#### Defined in

[client-ts/src/client.ts:56](https://github.com/verida/verida-js/blob/7bffc4e/packages/client-ts/src/client.ts#L56)

## Properties

### account

• `Private` `Optional` **account**: `default`

Connected account instance

#### Defined in

[client-ts/src/client.ts:34](https://github.com/verida/verida-js/blob/7bffc4e/packages/client-ts/src/client.ts#L34)

___

### config

• `Private` **config**: `DefaultClientConfig`

Current configuration for this client

#### Defined in

[client-ts/src/client.ts:49](https://github.com/verida/verida-js/blob/7bffc4e/packages/client-ts/src/client.ts#L49)

___

### did

• `Private` `Optional` **did**: `string`

DID of connected account

#### Defined in

[client-ts/src/client.ts:39](https://github.com/verida/verida-js/blob/7bffc4e/packages/client-ts/src/client.ts#L39)

___

### didClient

• **didClient**: `default`

Connection to the Verida DID Registry

#### Defined in

[client-ts/src/client.ts:24](https://github.com/verida/verida-js/blob/7bffc4e/packages/client-ts/src/client.ts#L24)

___

### didContextManager

• `Private` **didContextManager**: `DIDContextManager`

Helper instance to manage DID contexts

#### Defined in

[client-ts/src/client.ts:29](https://github.com/verida/verida-js/blob/7bffc4e/packages/client-ts/src/client.ts#L29)

___

### environment

• `Private` **environment**: `string`

Currently selected environment

#### Defined in

[client-ts/src/client.ts:44](https://github.com/verida/verida-js/blob/7bffc4e/packages/client-ts/src/client.ts#L44)

## Methods

### connect

▸ **connect**(`account`): `Promise`<`void`\>

Connect an Account to this client.

Sets the account owner who can then create storage contexts,
authenticate with databases, send messages etc.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `account` | `default` | AccountInterface |

#### Returns

`Promise`<`void`\>

#### Defined in

[client-ts/src/client.ts:79](https://github.com/verida/verida-js/blob/7bffc4e/packages/client-ts/src/client.ts#L79)

___

### getConfig

▸ **getConfig**(): `DefaultClientConfig`

#### Returns

`DefaultClientConfig`

#### Defined in

[client-ts/src/client.ts:188](https://github.com/verida/verida-js/blob/7bffc4e/packages/client-ts/src/client.ts#L188)

___

### getContextConfig

▸ **getContextConfig**(`did`, `contextName`): `Promise`<`undefined` \| `SecureContextConfig`\>

Get the storage configuration of an application context for a given DID.

This provides the public details about the database, storage and messaging endpoints stored on did-client/did-document  for the requested `did`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `did` | `string` |  |
| `contextName` | `string` | The name of the context OR a context hash (starting with 0x) |

#### Returns

`Promise`<`undefined` \| `SecureContextConfig`\>

SecureContextConfig | undefined

#### Defined in

[client-ts/src/client.ts:181](https://github.com/verida/verida-js/blob/7bffc4e/packages/client-ts/src/client.ts#L181)

___

### getSchema

▸ **getSchema**(`schemaUri`): `Promise`<`Schema`\>

Get a Schama instance by URL.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `schemaUri` | `string` | URL of the schema |

#### Returns

`Promise`<`Schema`\>

Schema A schema object

#### Defined in

[client-ts/src/client.ts:281](https://github.com/verida/verida-js/blob/7bffc4e/packages/client-ts/src/client.ts#L281)

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

#### Defined in

[client-ts/src/client.ts:229](https://github.com/verida/verida-js/blob/7bffc4e/packages/client-ts/src/client.ts#L229)

___

### isConnected

▸ **isConnected**(): `boolean`

Check if an account is connected to this client.

#### Returns

`boolean`

boolean True of an account is connected

#### Defined in

[client-ts/src/client.ts:94](https://github.com/verida/verida-js/blob/7bffc4e/packages/client-ts/src/client.ts#L94)

___

### openContext

▸ **openContext**(`contextName`, `forceCreate?`): `Promise`<`undefined` \| [`Context`](verida_client_ts.Context.md)\>

Open a storage context for the current account.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `contextName` | `string` | `undefined` | string Name of the `context` to open. |
| `forceCreate` | `boolean` | `true` | boolean If the `context` doesn't already exist for the connected account, create it. Depending on the type of `Account` connected, this may open a prompt for the user to confirm (and sign). |

#### Returns

`Promise`<`undefined` \| [`Context`](verida_client_ts.Context.md)\>

Context | undefined

#### Defined in

[client-ts/src/client.ts:105](https://github.com/verida/verida-js/blob/7bffc4e/packages/client-ts/src/client.ts#L105)

___

### openExternalContext

▸ **openExternalContext**(`contextName`, `did`): `Promise`<[`Context`](verida_client_ts.Context.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `contextName` | `string` | The name of the context OR a context hash (starting with 0x) |
| `did` | `string` |  |

#### Returns

`Promise`<[`Context`](verida_client_ts.Context.md)\>

#### Defined in

[client-ts/src/client.ts:156](https://github.com/verida/verida-js/blob/7bffc4e/packages/client-ts/src/client.ts#L156)

___

### openPublicProfile

▸ **openPublicProfile**(`did`, `contextName`, `profileName?`): `Promise`<`undefined` \| `Profile`\>

Open the public profile of any user in read only mode.

Every application context has the ability to have it's own public profiles.

You most likely want to request the `Verida: Vault` context.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `did` | `string` | `undefined` |
| `contextName` | `string` | `undefined` |
| `profileName` | `string` | `"basicProfile"` |

#### Returns

`Promise`<`undefined` \| `Profile`\>

`<Profile | undefined>`

#### Defined in

[client-ts/src/client.ts:203](https://github.com/verida/verida-js/blob/7bffc4e/packages/client-ts/src/client.ts#L203)
