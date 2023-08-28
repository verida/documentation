[root](../README.md) / [Modules](../modules.md) / @verida/helpers

# Module: @verida/helpers

## Table of contents

### Namespaces

- [&lt;internal\&gt;](verida_helpers._internal_.md)

### Interfaces

- [DIDParts](../interfaces/verida_helpers.DIDParts.md)

### Functions

- [buildVeridaUri](verida_helpers.md#buildveridauri)
- [decodeUri](verida_helpers.md#decodeuri)
- [encodeUri](verida_helpers.md#encodeuri)
- [explodeDID](verida_helpers.md#explodedid)
- [explodeVeridaUri](verida_helpers.md#explodeveridauri)
- [fetchVeridaUri](verida_helpers.md#fetchveridauri)
- [wrapUri](verida_helpers.md#wrapuri)

## Functions

### buildVeridaUri

▸ **buildVeridaUri**(`did`, `contextName`, `databaseName`, `itemId?`, `deepAttributes?`, `params?`): `string`

Build a URI that represents a specific record in a database

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `string` |
| `contextName` | `string` |
| `databaseName` | `string` |
| `itemId?` | `string` |
| `deepAttributes?` | `string`[] |
| `params?` | `Object` |
| `params.key?` | `string` |

#### Returns

`string`

#### Defined in

[packages/helpers/src/Utils.ts:16](https://github.com/verida/verida-js/blob/a690f60/packages/helpers/src/Utils.ts#L16)

___

### decodeUri

▸ **decodeUri**(`encodedVeridaUri`): `string`

Decode a Verida URI from base58 to it's `verida://` URI format

#### Parameters

| Name | Type |
| :------ | :------ |
| `encodedVeridaUri` | `string` |

#### Returns

`string`

#### Defined in

[packages/helpers/src/Utils.ts:170](https://github.com/verida/verida-js/blob/a690f60/packages/helpers/src/Utils.ts#L170)

___

### encodeUri

▸ **encodeUri**(`veridaUri`): `any`

Encode a Verida URI in base58 to create a unique string reference on the network

#### Parameters

| Name | Type |
| :------ | :------ |
| `veridaUri` | `string` |

#### Returns

`any`

#### Defined in

[packages/helpers/src/Utils.ts:161](https://github.com/verida/verida-js/blob/a690f60/packages/helpers/src/Utils.ts#L161)

___

### explodeDID

▸ **explodeDID**(`did`): `Object`

Get the `network` and `address` parts of a DID

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `network` | `string` |

#### Defined in

[packages/helpers/src/Utils.ts:186](https://github.com/verida/verida-js/blob/a690f60/packages/helpers/src/Utils.ts#L186)

___

### explodeVeridaUri

▸ **explodeVeridaUri**(`uri`): [`FetchUriParams`](../interfaces/verida_helpers._internal_.FetchUriParams.md)

Explode a Verida URI into it's individual pieces

#### Parameters

| Name | Type |
| :------ | :------ |
| `uri` | `string` |

#### Returns

[`FetchUriParams`](../interfaces/verida_helpers._internal_.FetchUriParams.md)

#### Defined in

[packages/helpers/src/Utils.ts:54](https://github.com/verida/verida-js/blob/a690f60/packages/helpers/src/Utils.ts#L54)

___

### fetchVeridaUri

▸ **fetchVeridaUri**(`uri`, `client`): `Promise`<`any`\>

Fetch the data accessible from a Verida URI

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `uri` | `string` | Verida URI of the record to access. If `key` is in the query parameters, it is used as a (hex) encryption key to decode the data |
| `client` | [`IClient`](../interfaces/verida_helpers._internal_.IClient.md) | - |

#### Returns

`Promise`<`any`\>

#### Defined in

[packages/helpers/src/Utils.ts:90](https://github.com/verida/verida-js/blob/a690f60/packages/helpers/src/Utils.ts#L90)

___

### wrapUri

▸ **wrapUri**(`veridaUri`, `wrapperUri?`): `string`

Wrap a Verida URI in a wrapper URI that handles fetching the record and returning it.

ie: wrapUri('http://data.verida.network', ...)

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `veridaUri` | `string` | `undefined` | Verida URI |
| `wrapperUri` | `string` | `'https://data.verida.network'` | HTTP(s) endpoint that fetches a Verida URI |

#### Returns

`string`

#### Defined in

[packages/helpers/src/Utils.ts:150](https://github.com/verida/verida-js/blob/a690f60/packages/helpers/src/Utils.ts#L150)
