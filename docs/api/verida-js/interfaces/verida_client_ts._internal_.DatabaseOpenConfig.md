[root](../README.md) / [Modules](../modules.md) / [@verida/client-ts](../modules/verida_client_ts.md) / [<internal\>](../modules/verida_client_ts._internal_.md) / DatabaseOpenConfig

# Interface: DatabaseOpenConfig

[@verida/client-ts](../modules/verida_client_ts.md).[<internal\>](../modules/verida_client_ts._internal_.md).DatabaseOpenConfig

Interface for any DatabaseOpenConfig

## Table of contents

### Properties

- [contextName](verida_client_ts._internal_.DatabaseOpenConfig.md#contextname)
- [createContext](verida_client_ts._internal_.DatabaseOpenConfig.md#createcontext)
- [did](verida_client_ts._internal_.DatabaseOpenConfig.md#did)
- [encryptionKey](verida_client_ts._internal_.DatabaseOpenConfig.md#encryptionkey)
- [endpoints](verida_client_ts._internal_.DatabaseOpenConfig.md#endpoints)
- [ignoreCache](verida_client_ts._internal_.DatabaseOpenConfig.md#ignorecache)
- [isOwner](verida_client_ts._internal_.DatabaseOpenConfig.md#isowner)
- [permissions](verida_client_ts._internal_.DatabaseOpenConfig.md#permissions)
- [readOnly](verida_client_ts._internal_.DatabaseOpenConfig.md#readonly)
- [saveDatabase](verida_client_ts._internal_.DatabaseOpenConfig.md#savedatabase)
- [signingContext](verida_client_ts._internal_.DatabaseOpenConfig.md#signingcontext)
- [token](verida_client_ts._internal_.DatabaseOpenConfig.md#token)
- [verifyEncryptionKey](verida_client_ts._internal_.DatabaseOpenConfig.md#verifyencryptionkey)

## Properties

### contextName

• `Optional` **contextName**: `string`

Optionally specify an external context to open

#### Defined in

packages/types/dist/ContextInterfaces.d.ts:53

___

### createContext

• `Optional` **createContext**: `boolean`

Create an application context if it doesn't already exist for the connected account.

#### Defined in

packages/types/dist/ContextInterfaces.d.ts:49

___

### did

• `Optional` **did**: `string`

Specify the DID that owns the database.

This ensures the Verida client connects to the correct database server hosting the data for the specified `did`.

#### Defined in

packages/types/dist/ContextInterfaces.d.ts:17

___

### encryptionKey

• `Optional` **encryptionKey**: `Buffer`

An optional encryption key to use for encrypting / decrypting data.

This encryption key will not apply if the database is marked as `public`.

#### Defined in

packages/types/dist/ContextInterfaces.d.ts:45

___

### endpoints

• `Optional` **endpoints**: `string` \| `string`[]

Specify an array of possible database connection strings to use when opening the database.

#### Defined in

packages/types/dist/ContextInterfaces.d.ts:21

___

### ignoreCache

• `Optional` **ignoreCache**: `boolean`

Ignore any cached instance already created

#### Defined in

packages/types/dist/ContextInterfaces.d.ts:61

___

### isOwner

• `Optional` **isOwner**: `boolean`

Boolean indicating if it's expected the current connected account is the owner of this database.

#### Defined in

packages/types/dist/ContextInterfaces.d.ts:39

___

### permissions

• `Optional` **permissions**: [`DatabasePermissionsConfig`](verida_client_ts._internal_.DatabasePermissionsConfig.md)

Specify the permissions to use when opening this database.

#### Defined in

packages/types/dist/ContextInterfaces.d.ts:11

___

### readOnly

• `Optional` **readOnly**: `boolean`

Open the database in read-only mode.

This is useful when opening a database owned by an external `did` where the current authenticated account has no write access.

#### Defined in

packages/types/dist/ContextInterfaces.d.ts:35

___

### saveDatabase

• `Optional` **saveDatabase**: `boolean`

Save this database into the user's master list of opened databases.

#### Defined in

packages/types/dist/ContextInterfaces.d.ts:29

___

### signingContext

• `Optional` **signingContext**: [`IContext`](verida_client_ts._internal_.IContext.md)

Optionally specify the context used to sign data

#### Defined in

packages/types/dist/ContextInterfaces.d.ts:57

___

### token

• `Optional` **token**: `string`

Specify a JWT token to use when opening the database.

#### Defined in

packages/types/dist/ContextInterfaces.d.ts:25

___

### verifyEncryptionKey

• `Optional` **verifyEncryptionKey**: `boolean`

Verify the encryption key is correct when opening the database

#### Defined in

packages/types/dist/ContextInterfaces.d.ts:65
