[root](../README.md) / [Modules](../modules.md) / [@verida/did-client](../modules/verida_did_client.md) / [<internal\>](../modules/verida_did_client._internal_.md) / Resolver

# Class: Resolver

[@verida/did-client](../modules/verida_did_client.md).[<internal\>](../modules/verida_did_client._internal_.md).Resolver

This implementation of [Resolvable](../interfaces/verida_did_client._internal_.Resolvable.md) bundles together multiple implementations of [DIDResolver](../modules/verida_did_client._internal_.md#didresolver) and
presents a single function call to users.

## Implements

- [`Resolvable`](../interfaces/verida_did_client._internal_.Resolvable.md)

## Table of contents

### Constructors

- [constructor](verida_did_client._internal_.Resolver.md#constructor)

### Properties

- [cache](verida_did_client._internal_.Resolver.md#cache)
- [registry](verida_did_client._internal_.Resolver.md#registry)

### Methods

- [resolve](verida_did_client._internal_.Resolver.md#resolve)

## Constructors

### constructor

• **new Resolver**(`registry?`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `registry?` | [`ResolverRegistry`](../modules/verida_did_client._internal_.md#resolverregistry) |
| `options?` | [`ResolverOptions`](../interfaces/verida_did_client._internal_.ResolverOptions.md) |

#### Defined in

node_modules/did-resolver/lib/resolver.d.ts:198

## Properties

### cache

• `Private` `Readonly` **cache**: `any`

#### Defined in

node_modules/did-resolver/lib/resolver.d.ts:197

___

### registry

• `Private` `Readonly` **registry**: `any`

#### Defined in

node_modules/did-resolver/lib/resolver.d.ts:196

## Methods

### resolve

▸ **resolve**(`didUrl`, `options?`): `Promise`<[`DIDResolutionResult`](../interfaces/verida_did_client._internal_.DIDResolutionResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `didUrl` | `string` |
| `options?` | [`DIDResolutionOptions`](../interfaces/verida_did_client._internal_.DIDResolutionOptions.md) |

#### Returns

`Promise`<[`DIDResolutionResult`](../interfaces/verida_did_client._internal_.DIDResolutionResult.md)\>

#### Implementation of

[Resolvable](../interfaces/verida_did_client._internal_.Resolvable.md).[resolve](../interfaces/verida_did_client._internal_.Resolvable.md#resolve)

#### Defined in

node_modules/did-resolver/lib/resolver.d.ts:199
