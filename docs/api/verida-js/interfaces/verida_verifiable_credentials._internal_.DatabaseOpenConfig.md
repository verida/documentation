[root](../README.md) / [Modules](../modules.md) / [@verida/verifiable-credentials](../modules/verida_verifiable_credentials.md) / [<internal\>](../modules/verida_verifiable_credentials._internal_.md) / DatabaseOpenConfig

# Interface: DatabaseOpenConfig

[@verida/verifiable-credentials](../modules/verida_verifiable_credentials.md).[<internal\>](../modules/verida_verifiable_credentials._internal_.md).DatabaseOpenConfig

Interface for any DatabaseOpenConfig

## Table of contents

### Properties

- [contextName](verida_verifiable_credentials._internal_.DatabaseOpenConfig.md#contextname)
- [createContext](verida_verifiable_credentials._internal_.DatabaseOpenConfig.md#createcontext)
- [did](verida_verifiable_credentials._internal_.DatabaseOpenConfig.md#did)
- [dsn](verida_verifiable_credentials._internal_.DatabaseOpenConfig.md#dsn)
- [encryptionKey](verida_verifiable_credentials._internal_.DatabaseOpenConfig.md#encryptionkey)
- [isOwner](verida_verifiable_credentials._internal_.DatabaseOpenConfig.md#isowner)
- [permissions](verida_verifiable_credentials._internal_.DatabaseOpenConfig.md#permissions)
- [readOnly](verida_verifiable_credentials._internal_.DatabaseOpenConfig.md#readonly)
- [saveDatabase](verida_verifiable_credentials._internal_.DatabaseOpenConfig.md#savedatabase)
- [signingContext](verida_verifiable_credentials._internal_.DatabaseOpenConfig.md#signingcontext)

## Properties

### contextName

• `Optional` **contextName**: `string`

Optionally specify an external context to open

#### Defined in

packages/client-ts/dist/context/interfaces.d.ts:47

___

### createContext

• `Optional` **createContext**: `boolean`

Create an application context if it doesn't already exist for the connected account.

#### Defined in

packages/client-ts/dist/context/interfaces.d.ts:43

___

### did

• `Optional` **did**: `string`

Specify the DID that owns the database.

This ensures the Verida client connects to the correct database server hosting the data for the specified `did`.

#### Defined in

packages/client-ts/dist/context/interfaces.d.ts:15

___

### dsn

• `Optional` **dsn**: `string`

Specify a specific database connection string to use when opening the database.

#### Defined in

packages/client-ts/dist/context/interfaces.d.ts:19

___

### encryptionKey

• `Optional` **encryptionKey**: `string`

An optional encryption key to use for encyrpting / decrypting data.

This encryption key will not apply if the database is marked as `public`.

#### Defined in

packages/client-ts/dist/context/interfaces.d.ts:39

___

### isOwner

• `Optional` **isOwner**: `boolean`

Boolean indicating if it's expected the current connected account is the owner of this database.

#### Defined in

packages/client-ts/dist/context/interfaces.d.ts:33

___

### permissions

• `Optional` **permissions**: [`PermissionsConfig`](verida_verifiable_credentials._internal_.PermissionsConfig.md)

Specify the permissions to use when opening this database.

#### Defined in

packages/client-ts/dist/context/interfaces.d.ts:9

___

### readOnly

• `Optional` **readOnly**: `boolean`

Open the database in read-only mode.

This is useful when opening a database owned by an external `did` where the current authenticated account has no write access.

#### Defined in

packages/client-ts/dist/context/interfaces.d.ts:29

___

### saveDatabase

• `Optional` **saveDatabase**: `boolean`

Save this database into the user's master list of opened databases.

#### Defined in

packages/client-ts/dist/context/interfaces.d.ts:23

___

### signingContext

• `Optional` **signingContext**: [`Context`](../classes/verida_verifiable_credentials._internal_.Context.md)

Optionally specify the context used to sign data

#### Defined in

packages/client-ts/dist/context/interfaces.d.ts:51
