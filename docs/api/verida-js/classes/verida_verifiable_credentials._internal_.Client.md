[root](../README.md) / [Modules](../modules.md) / [@verida/verifiable-credentials](../modules/verida_verifiable_credentials.md) / [<internal\>](../modules/verida_verifiable_credentials._internal_.md) / Client

# Class: Client

[@verida/verifiable-credentials](../modules/verida_verifiable_credentials.md).[<internal\>](../modules/verida_verifiable_credentials._internal_.md).Client

## Table of contents

### Constructors

- [constructor](verida_verifiable_credentials._internal_.Client.md#constructor)

### Properties

- [account](verida_verifiable_credentials._internal_.Client.md#account)
- [config](verida_verifiable_credentials._internal_.Client.md#config)
- [did](verida_verifiable_credentials._internal_.Client.md#did)
- [didClient](verida_verifiable_credentials._internal_.Client.md#didclient)
- [didContextManager](verida_verifiable_credentials._internal_.Client.md#didcontextmanager)
- [environment](verida_verifiable_credentials._internal_.Client.md#environment)

### Methods

- [connect](verida_verifiable_credentials._internal_.Client.md#connect)
- [getConfig](verida_verifiable_credentials._internal_.Client.md#getconfig)
- [getContextConfig](verida_verifiable_credentials._internal_.Client.md#getcontextconfig)
- [getSchema](verida_verifiable_credentials._internal_.Client.md#getschema)
- [getValidDataSignatures](verida_verifiable_credentials._internal_.Client.md#getvaliddatasignatures)
- [isConnected](verida_verifiable_credentials._internal_.Client.md#isconnected)
- [openContext](verida_verifiable_credentials._internal_.Client.md#opencontext)
- [openExternalContext](verida_verifiable_credentials._internal_.Client.md#openexternalcontext)
- [openPublicProfile](verida_verifiable_credentials._internal_.Client.md#openpublicprofile)

## Constructors

### constructor

• **new Client**(`userConfig?`)

Create a client connection to the Verida network

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userConfig?` | [`ClientConfig`](../interfaces/verida_verifiable_credentials._internal_.ClientConfig.md) | ClientConfig Configuration for establishing a connection to the Verida network |

#### Defined in

packages/client-ts/dist/client.d.ts:42

## Properties

### account

• `Private` `Optional` **account**: `any`

Connected account instance

#### Defined in

packages/client-ts/dist/client.d.ts:24

___

### config

• `Private` **config**: `any`

Current configuration for this client

#### Defined in

packages/client-ts/dist/client.d.ts:36

___

### did

• `Private` `Optional` **did**: `any`

DID of connected account

#### Defined in

packages/client-ts/dist/client.d.ts:28

___

### didClient

• **didClient**: [`default`](verida_verifiable_credentials._internal_.default-1.md)

Connection to the Verida DID Registry

#### Defined in

packages/client-ts/dist/client.d.ts:16

___

### didContextManager

• `Private` **didContextManager**: `any`

Helper instance to manage DID contexts

#### Defined in

packages/client-ts/dist/client.d.ts:20

___

### environment

• `Private` **environment**: `any`

Currently selected environment

#### Defined in

packages/client-ts/dist/client.d.ts:32

## Methods

### connect

▸ **connect**(`account`): `Promise`<`void`\>

Connect an Account to this client.

Sets the account owner who can then create storage contexts,
authenticate with databases, send messages etc.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `account` | [`default`](verida_verifiable_credentials._internal_.default.md) | AccountInterface |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/client-ts/dist/client.d.ts:51

___

### getConfig

▸ **getConfig**(): [`DefaultClientConfig`](../interfaces/verida_verifiable_credentials._internal_.DefaultClientConfig.md)

#### Returns

[`DefaultClientConfig`](../interfaces/verida_verifiable_credentials._internal_.DefaultClientConfig.md)

#### Defined in

packages/client-ts/dist/client.d.ts:83

___

### getContextConfig

▸ **getContextConfig**(`did`, `contextName`): `Promise`<`undefined` \| [`SecureContextConfig`](../interfaces/verida_verifiable_credentials._internal_.SecureContextConfig.md)\>

Get the storage configuration of an application context for a given DID.

This provides the public details about the database, storage and messaging endpoints stored on did-client/did-document  for the requested `did`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `did` | `string` |  |
| `contextName` | `string` | The name of the context OR a context hash (starting with 0x) |

#### Returns

`Promise`<`undefined` \| [`SecureContextConfig`](../interfaces/verida_verifiable_credentials._internal_.SecureContextConfig.md)\>

SecureContextConfig | undefined

#### Defined in

packages/client-ts/dist/client.d.ts:82

___

### getSchema

▸ **getSchema**(`schemaUri`): `Promise`<[`Schema`](verida_verifiable_credentials._internal_.Schema.md)\>

Get a Schama instance by URL.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `schemaUri` | `string` | URL of the schema |

#### Returns

`Promise`<[`Schema`](verida_verifiable_credentials._internal_.Schema.md)\>

Schema A schema object

#### Defined in

packages/client-ts/dist/client.d.ts:114

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

packages/client-ts/dist/client.d.ts:107

___

### isConnected

▸ **isConnected**(): `boolean`

Check if an account is connected to this client.

#### Returns

`boolean`

boolean True of an account is connected

#### Defined in

packages/client-ts/dist/client.d.ts:57

___

### openContext

▸ **openContext**(`contextName`, `forceCreate?`): `Promise`<`undefined` \| [`Context`](verida_verifiable_credentials._internal_.Context.md)\>

Open a storage context for the current account.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `contextName` | `string` | string Name of the `context` to open. |
| `forceCreate?` | `boolean` | boolean If the `context` doesn't already exist for the connected account, create it. Depending on the type of `Account` connected, this may open a prompt for the user to confirm (and sign). |

#### Returns

`Promise`<`undefined` \| [`Context`](verida_verifiable_credentials._internal_.Context.md)\>

Context | undefined

#### Defined in

packages/client-ts/dist/client.d.ts:65

___

### openExternalContext

▸ **openExternalContext**(`contextName`, `did`): `Promise`<[`Context`](verida_verifiable_credentials._internal_.Context.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `contextName` | `string` | The name of the context OR a context hash (starting with 0x) |
| `did` | `string` |  |

#### Returns

`Promise`<[`Context`](verida_verifiable_credentials._internal_.Context.md)\>

#### Defined in

packages/client-ts/dist/client.d.ts:72

___

### openPublicProfile

▸ **openPublicProfile**(`did`, `contextName`, `profileName?`): `Promise`<`undefined` \| [`Profile`](verida_verifiable_credentials._internal_.Profile.md)\>

Open the public profile of any user in read only mode.

Every application context has the ability to have it's own public profiles.

You most likely want to request the `Verida: Vault` context.

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `string` |
| `contextName` | `string` |
| `profileName?` | `string` |

#### Returns

`Promise`<`undefined` \| [`Profile`](verida_verifiable_credentials._internal_.Profile.md)\>

`<Profile | undefined>`

#### Defined in

packages/client-ts/dist/client.d.ts:95
