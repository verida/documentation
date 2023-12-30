[root](../README.md) / [Modules](../modules.md) / @verida/client-ts

# Module: @verida/client-ts

## Table of contents

### Namespaces

- [&lt;internal\&gt;](verida_client_ts._internal_.md)

### Modules Classes

- [Client](../classes/verida_client_ts.Client.md)
- [Context](../classes/verida_client_ts.Context.md)
- [Network](../classes/verida_client_ts.Network.md)

### Functions

- [migrateContext](verida_client_ts.md#migratecontext)
- [migrateDatabase](verida_client_ts.md#migratedatabase)

## Functions

### migrateContext

▸ **migrateContext**(`sourceContext`, `destinationContext`): [`EventEmitter`](../classes/verida_client_ts._internal_.EventEmitter-1.md)

Note: May need the ability to force override the DID if migrating data between testnet -> mainnet?

#### Parameters

| Name | Type |
| :------ | :------ |
| `sourceContext` | [`IContext`](../interfaces/verida_client_ts._internal_.IContext.md) |
| `destinationContext` | [`IContext`](../interfaces/verida_client_ts._internal_.IContext.md) |

#### Returns

[`EventEmitter`](../classes/verida_client_ts._internal_.EventEmitter-1.md)

#### Defined in

[packages/client-ts/src/utils/migration.ts:13](https://github.com/verida/verida-js/blob/5040472/packages/client-ts/src/utils/migration.ts#L13)

___

### migrateDatabase

▸ **migrateDatabase**(`sourceDb`, `destinationDb`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `sourceDb` | [`IDatabase`](../interfaces/verida_client_ts._internal_.IDatabase.md) |
| `destinationDb` | [`IDatabase`](../interfaces/verida_client_ts._internal_.IDatabase.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/client-ts/src/utils/migration.ts:72](https://github.com/verida/verida-js/blob/5040472/packages/client-ts/src/utils/migration.ts#L72)
