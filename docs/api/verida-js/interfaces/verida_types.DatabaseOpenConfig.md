[root](../README.md) / [Modules](../modules.md) / [@verida/types](../modules/verida_types.md) / DatabaseOpenConfig

# Interface: DatabaseOpenConfig

[@verida/types](../modules/verida_types.md).DatabaseOpenConfig

Interface for any DatabaseOpenConfig

## Table of contents

### Properties

- [contextName](verida_types.DatabaseOpenConfig.md#contextname)
- [createContext](verida_types.DatabaseOpenConfig.md#createcontext)
- [did](verida_types.DatabaseOpenConfig.md#did)
- [encryptionKey](verida_types.DatabaseOpenConfig.md#encryptionkey)
- [endpoints](verida_types.DatabaseOpenConfig.md#endpoints)
- [ignoreCache](verida_types.DatabaseOpenConfig.md#ignorecache)
- [isOwner](verida_types.DatabaseOpenConfig.md#isowner)
- [permissions](verida_types.DatabaseOpenConfig.md#permissions)
- [readOnly](verida_types.DatabaseOpenConfig.md#readonly)
- [saveDatabase](verida_types.DatabaseOpenConfig.md#savedatabase)
- [signingContext](verida_types.DatabaseOpenConfig.md#signingcontext)
- [token](verida_types.DatabaseOpenConfig.md#token)
- [verifyEncryptionKey](verida_types.DatabaseOpenConfig.md#verifyencryptionkey)

## Properties

### contextName

• `Optional` **contextName**: `string`

Optionally specify an external context to open

#### Defined in

[packages/types/src/ContextInterfaces.ts:61](https://github.com/verida/verida-js/blob/5040472/packages/types/src/ContextInterfaces.ts#L61)

___

### createContext

• `Optional` **createContext**: `boolean`

Create an application context if it doesn't already exist for the connected account.

#### Defined in

[packages/types/src/ContextInterfaces.ts:56](https://github.com/verida/verida-js/blob/5040472/packages/types/src/ContextInterfaces.ts#L56)

___

### did

• `Optional` **did**: `string`

Specify the DID that owns the database.

This ensures the Verida client connects to the correct database server hosting the data for the specified `did`.

#### Defined in

[packages/types/src/ContextInterfaces.ts:17](https://github.com/verida/verida-js/blob/5040472/packages/types/src/ContextInterfaces.ts#L17)

___

### encryptionKey

• `Optional` **encryptionKey**: `Buffer`

An optional encryption key to use for encrypting / decrypting data.

This encryption key will not apply if the database is marked as `public`.

#### Defined in

[packages/types/src/ContextInterfaces.ts:51](https://github.com/verida/verida-js/blob/5040472/packages/types/src/ContextInterfaces.ts#L51)

___

### endpoints

• `Optional` **endpoints**: `string` \| `string`[]

Specify an array of possible database connection strings to use when opening the database.

#### Defined in

[packages/types/src/ContextInterfaces.ts:22](https://github.com/verida/verida-js/blob/5040472/packages/types/src/ContextInterfaces.ts#L22)

___

### ignoreCache

• `Optional` **ignoreCache**: `boolean`

Ignore any cached instance already created

#### Defined in

[packages/types/src/ContextInterfaces.ts:71](https://github.com/verida/verida-js/blob/5040472/packages/types/src/ContextInterfaces.ts#L71)

___

### isOwner

• `Optional` **isOwner**: `boolean`

Boolean indicating if it's expected the current connected account is the owner of this database.

#### Defined in

[packages/types/src/ContextInterfaces.ts:44](https://github.com/verida/verida-js/blob/5040472/packages/types/src/ContextInterfaces.ts#L44)

___

### permissions

• `Optional` **permissions**: [`DatabasePermissionsConfig`](verida_types.DatabasePermissionsConfig.md)

Specify the permissions to use when opening this database.

#### Defined in

[packages/types/src/ContextInterfaces.ts:10](https://github.com/verida/verida-js/blob/5040472/packages/types/src/ContextInterfaces.ts#L10)

___

### readOnly

• `Optional` **readOnly**: `boolean`

Open the database in read-only mode.

This is useful when opening a database owned by an external `did` where the current authenticated account has no write access.

#### Defined in

[packages/types/src/ContextInterfaces.ts:39](https://github.com/verida/verida-js/blob/5040472/packages/types/src/ContextInterfaces.ts#L39)

___

### saveDatabase

• `Optional` **saveDatabase**: `boolean`

Save this database into the user's master list of opened databases.

#### Defined in

[packages/types/src/ContextInterfaces.ts:32](https://github.com/verida/verida-js/blob/5040472/packages/types/src/ContextInterfaces.ts#L32)

___

### signingContext

• `Optional` **signingContext**: [`IContext`](verida_types.IContext.md)

Optionally specify the context used to sign data

#### Defined in

[packages/types/src/ContextInterfaces.ts:66](https://github.com/verida/verida-js/blob/5040472/packages/types/src/ContextInterfaces.ts#L66)

___

### token

• `Optional` **token**: `string`

Specify a JWT token to use when opening the database.

#### Defined in

[packages/types/src/ContextInterfaces.ts:27](https://github.com/verida/verida-js/blob/5040472/packages/types/src/ContextInterfaces.ts#L27)

___

### verifyEncryptionKey

• `Optional` **verifyEncryptionKey**: `boolean`

Verify the encryption key is correct when opening the database

#### Defined in

[packages/types/src/ContextInterfaces.ts:76](https://github.com/verida/verida-js/blob/5040472/packages/types/src/ContextInterfaces.ts#L76)
