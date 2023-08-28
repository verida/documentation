[root](../README.md) / [Modules](../modules.md) / [@verida/did-client](../modules/verida_did_client.md) / [<internal\>](../modules/verida_did_client._internal_.md) / Resolvable

# Interface: Resolvable

[@verida/did-client](../modules/verida_did_client.md).[<internal\>](../modules/verida_did_client._internal_.md).Resolvable

The method signature implemented by this resolver.

## Implemented by

- [`Resolver`](../classes/verida_did_client._internal_.Resolver.md)

## Table of contents

### Methods

- [resolve](verida_did_client._internal_.Resolvable.md#resolve)

## Methods

### resolve

▸ **resolve**(`didUrl`, `options?`): `Promise`<[`DIDResolutionResult`](verida_did_client._internal_.DIDResolutionResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `didUrl` | `string` |
| `options?` | [`DIDResolutionOptions`](verida_did_client._internal_.DIDResolutionOptions.md) |

#### Returns

`Promise`<[`DIDResolutionResult`](verida_did_client._internal_.DIDResolutionResult.md)\>

#### Defined in

node_modules/did-resolver/lib/resolver.d.ts:189
