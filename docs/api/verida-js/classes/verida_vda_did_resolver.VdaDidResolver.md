[root](../README.md) / [Modules](../modules.md) / [@verida/vda-did-resolver](../modules/verida_vda_did_resolver.md) / VdaDidResolver

# Class: VdaDidResolver

[@verida/vda-did-resolver](../modules/verida_vda_did_resolver.md).VdaDidResolver

## Table of contents

### Constructors

- [constructor](verida_vda_did_resolver.VdaDidResolver.md#constructor)

### Properties

- [defaultTimeout](verida_vda_did_resolver.VdaDidResolver.md#defaulttimeout)
- [options](verida_vda_did_resolver.VdaDidResolver.md#options)

### Methods

- [\_resolve](verida_vda_did_resolver.VdaDidResolver.md#_resolve)
- [build](verida_vda_did_resolver.VdaDidResolver.md#build)
- [fetchDocuments](verida_vda_did_resolver.VdaDidResolver.md#fetchdocuments)
- [resolve](verida_vda_did_resolver.VdaDidResolver.md#resolve)

## Constructors

### constructor

• **new VdaDidResolver**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`Web3ResolverConfigurationOptions`](../interfaces/verida_vda_did_resolver._internal_.Web3ResolverConfigurationOptions.md) |

#### Defined in

[packages/vda-did-resolver/src/resolver.ts:32](https://github.com/verida/verida-js/blob/032961c/packages/vda-did-resolver/src/resolver.ts#L32)

## Properties

### defaultTimeout

• `Private` **defaultTimeout**: `number` = `10000`

#### Defined in

[packages/vda-did-resolver/src/resolver.ts:30](https://github.com/verida/verida-js/blob/032961c/packages/vda-did-resolver/src/resolver.ts#L30)

___

### options

• `Private` **options**: [`Web3ResolverConfigurationOptions`](../interfaces/verida_vda_did_resolver._internal_.Web3ResolverConfigurationOptions.md)

#### Defined in

[packages/vda-did-resolver/src/resolver.ts:29](https://github.com/verida/verida-js/blob/032961c/packages/vda-did-resolver/src/resolver.ts#L29)

## Methods

### \_resolve

▸ **_resolve**(`parsed`): `Promise`<[`DIDDocument`](../modules/verida_vda_did_resolver._internal_.md#diddocument)\>

Resolve a DID Document

For performance, the latest version is fetched from endpoint. It is possible to fetch all versions
and verify them by using the `fullVerification` query param.

Supports query parameters:

`timestamp`: Return DID document that was valid at the specified timestamp
`fullVerification`: Verify every copy of the DID document instead of using consensus

#### Parameters

| Name | Type |
| :------ | :------ |
| `parsed` | `any` |

#### Returns

`Promise`<[`DIDDocument`](../modules/verida_vda_did_resolver._internal_.md#diddocument)\>

#### Defined in

[packages/vda-did-resolver/src/resolver.ts:83](https://github.com/verida/verida-js/blob/032961c/packages/vda-did-resolver/src/resolver.ts#L83)

___

### build

▸ **build**(): [`Record`](../modules/verida_vda_did_resolver._internal_.md#record)<`string`, [`DIDResolver`](../modules/verida_vda_did_resolver._internal_.md#didresolver)\>

#### Returns

[`Record`](../modules/verida_vda_did_resolver._internal_.md#record)<`string`, [`DIDResolver`](../modules/verida_vda_did_resolver._internal_.md#didresolver)\>

#### Defined in

[packages/vda-did-resolver/src/resolver.ts:143](https://github.com/verida/verida-js/blob/032961c/packages/vda-did-resolver/src/resolver.ts#L143)

___

### fetchDocuments

▸ `Private` **fetchDocuments**(`endpoints`): `Promise`<[`DIDDocument`](../modules/verida_vda_did_resolver._internal_.md#diddocument)[]\>

Fetch the latest DIDDocument stored at each endpoint

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoints` | `string`[] |

#### Returns

`Promise`<[`DIDDocument`](../modules/verida_vda_did_resolver._internal_.md#diddocument)[]\>

#### Defined in

[packages/vda-did-resolver/src/resolver.ts:119](https://github.com/verida/verida-js/blob/032961c/packages/vda-did-resolver/src/resolver.ts#L119)

___

### resolve

▸ **resolve**(`did`, `parsed`, `_unused`, `options`): `Promise`<[`DIDResolutionResult`](../interfaces/verida_vda_did_resolver._internal_.DIDResolutionResult.md)\>

Resolve a DIDDocument from a DID

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `string` |
| `parsed` | [`ParsedDID`](../interfaces/verida_vda_did_resolver._internal_.ParsedDID.md) |
| `_unused` | [`Resolvable`](../interfaces/verida_vda_did_resolver._internal_.Resolvable.md) |
| `options` | [`DIDResolutionOptions`](../interfaces/verida_vda_did_resolver._internal_.DIDResolutionOptions.md) |

#### Returns

`Promise`<[`DIDResolutionResult`](../interfaces/verida_vda_did_resolver._internal_.DIDResolutionResult.md)\>

#### Defined in

[packages/vda-did-resolver/src/resolver.ts:37](https://github.com/verida/verida-js/blob/032961c/packages/vda-did-resolver/src/resolver.ts#L37)
