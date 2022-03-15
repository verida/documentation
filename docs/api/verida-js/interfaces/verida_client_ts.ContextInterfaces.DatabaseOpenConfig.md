[root](../README.md) / [Modules](../modules.md) / [@verida/client-ts](../modules/verida_client_ts.md) / [ContextInterfaces](../modules/verida_client_ts.ContextInterfaces.md) / DatabaseOpenConfig

# Interface: DatabaseOpenConfig

[@verida/client-ts](../modules/verida_client_ts.md).[ContextInterfaces](../modules/verida_client_ts.ContextInterfaces.md).DatabaseOpenConfig

Interface for any DatabaseOpenConfig

## Table of contents

### Properties

- [contextName](verida_client_ts.ContextInterfaces.DatabaseOpenConfig.md#contextname)
- [createContext](verida_client_ts.ContextInterfaces.DatabaseOpenConfig.md#createcontext)
- [did](verida_client_ts.ContextInterfaces.DatabaseOpenConfig.md#did)
- [dsn](verida_client_ts.ContextInterfaces.DatabaseOpenConfig.md#dsn)
- [encryptionKey](verida_client_ts.ContextInterfaces.DatabaseOpenConfig.md#encryptionkey)
- [isOwner](verida_client_ts.ContextInterfaces.DatabaseOpenConfig.md#isowner)
- [permissions](verida_client_ts.ContextInterfaces.DatabaseOpenConfig.md#permissions)
- [readOnly](verida_client_ts.ContextInterfaces.DatabaseOpenConfig.md#readonly)
- [saveDatabase](verida_client_ts.ContextInterfaces.DatabaseOpenConfig.md#savedatabase)
- [signingContext](verida_client_ts.ContextInterfaces.DatabaseOpenConfig.md#signingcontext)

## Properties

### contextName

• `Optional` **contextName**: `string`

Optionally specify an external context to open

#### Defined in

[client-ts/src/context/interfaces.ts:56](https://github.com/verida/verida-js/blob/a39619b/packages/client-ts/src/context/interfaces.ts#L56)

___

### createContext

• `Optional` **createContext**: `boolean`

Create an application context if it doesn't already exist for the connected account.

#### Defined in

[client-ts/src/context/interfaces.ts:51](https://github.com/verida/verida-js/blob/a39619b/packages/client-ts/src/context/interfaces.ts#L51)

___

### did

• `Optional` **did**: `string`

Specify the DID that owns the database.

This ensures the Verida client connects to the correct database server hosting the data for the specified `did`.

#### Defined in

[client-ts/src/context/interfaces.ts:17](https://github.com/verida/verida-js/blob/a39619b/packages/client-ts/src/context/interfaces.ts#L17)

___

### dsn

• `Optional` **dsn**: `string`

Specify a specific database connection string to use when opening the database.

#### Defined in

[client-ts/src/context/interfaces.ts:22](https://github.com/verida/verida-js/blob/a39619b/packages/client-ts/src/context/interfaces.ts#L22)

___

### encryptionKey

• `Optional` **encryptionKey**: `string`

An optional encryption key to use for encyrpting / decrypting data.

This encryption key will not apply if the database is marked as `public`.

#### Defined in

[client-ts/src/context/interfaces.ts:46](https://github.com/verida/verida-js/blob/a39619b/packages/client-ts/src/context/interfaces.ts#L46)

___

### isOwner

• `Optional` **isOwner**: `boolean`

Boolean indicating if it's expected the current connected account is the owner of this database.

#### Defined in

[client-ts/src/context/interfaces.ts:39](https://github.com/verida/verida-js/blob/a39619b/packages/client-ts/src/context/interfaces.ts#L39)

___

### permissions

• `Optional` **permissions**: [`PermissionsConfig`](verida_client_ts.ContextInterfaces.PermissionsConfig.md)

Specify the permissions to use when opening this database.

#### Defined in

[client-ts/src/context/interfaces.ts:10](https://github.com/verida/verida-js/blob/a39619b/packages/client-ts/src/context/interfaces.ts#L10)

___

### readOnly

• `Optional` **readOnly**: `boolean`

Open the database in read-only mode.

This is useful when opening a database owned by an external `did` where the current authenticated account has no write access.

#### Defined in

[client-ts/src/context/interfaces.ts:34](https://github.com/verida/verida-js/blob/a39619b/packages/client-ts/src/context/interfaces.ts#L34)

___

### saveDatabase

• `Optional` **saveDatabase**: `boolean`

Save this database into the user's master list of opened databases.

#### Defined in

[client-ts/src/context/interfaces.ts:27](https://github.com/verida/verida-js/blob/a39619b/packages/client-ts/src/context/interfaces.ts#L27)

___

### signingContext

• `Optional` **signingContext**: [`Context`](../classes/verida_client_ts.Context.md)

Optionally specify the context used to sign data

#### Defined in

[client-ts/src/context/interfaces.ts:61](https://github.com/verida/verida-js/blob/a39619b/packages/client-ts/src/context/interfaces.ts#L61)
