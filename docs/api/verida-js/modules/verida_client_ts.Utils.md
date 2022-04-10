[root](../README.md) / [Modules](../modules.md) / [@verida/client-ts](verida_client_ts.md) / Utils

# Namespace: Utils

[@verida/client-ts](verida_client_ts.md).Utils

## Table of contents

### Functions

- [buildVeridaUri](verida_client_ts.Utils.md#buildveridauri)
- [explodeVeridaUri](verida_client_ts.Utils.md#explodeveridauri)
- [fetchVeridaUri](verida_client_ts.Utils.md#fetchveridauri)

## Functions

### buildVeridaUri

▸ **buildVeridaUri**(`did`, `contextName`, `databaseName`, `itemId?`, `params?`): `string`

Build a URI that represents a specific record in a database

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `string` |
| `contextName` | `string` |
| `databaseName` | `string` |
| `itemId?` | `string` |
| `params?` | `Object` |
| `params.key?` | `string` |

#### Returns

`string`

#### Defined in

[client-ts/src/utils.ts:18](https://github.com/verida/verida-js/blob/a39619b/packages/client-ts/src/utils.ts#L18)

___

### explodeVeridaUri

▸ **explodeVeridaUri**(`uri`): `FetchUriParams`

Explode a Verida URI into it's individual pieces

#### Parameters

| Name | Type |
| :------ | :------ |
| `uri` | `string` |

#### Returns

`FetchUriParams`

#### Defined in

[client-ts/src/utils.ts:51](https://github.com/verida/verida-js/blob/a39619b/packages/client-ts/src/utils.ts#L51)

___

### fetchVeridaUri

▸ **fetchVeridaUri**(`uri`, `context`): `Promise`<`string`\>

Fetch the data accessible from a Verida URI

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `uri` | `string` | Verida URI of the record to access |
| `context` | [`Context`](../classes/verida_client_ts.Context.md) | An existing context used to open the external database |

#### Returns

`Promise`<`string`\>

#### Defined in

[client-ts/src/utils.ts:83](https://github.com/verida/verida-js/blob/a39619b/packages/client-ts/src/utils.ts#L83)
