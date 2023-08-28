[root](../README.md) / [Modules](../modules.md) / [@verida/vda-did-resolver](verida_vda_did_resolver.md) / <internal\>

# Namespace: <internal\>

[@verida/vda-did-resolver](verida_vda_did_resolver.md).<internal\>

## Table of contents

### Enumerations

- [EnvironmentType](../enums/verida_vda_did_resolver._internal_.EnvironmentType.md)

### Interfaces

- [DIDDocumentMetadata](../interfaces/verida_vda_did_resolver._internal_.DIDDocumentMetadata.md)
- [DIDResolutionMetadata](../interfaces/verida_vda_did_resolver._internal_.DIDResolutionMetadata.md)
- [DIDResolutionOptions](../interfaces/verida_vda_did_resolver._internal_.DIDResolutionOptions.md)
- [DIDResolutionResult](../interfaces/verida_vda_did_resolver._internal_.DIDResolutionResult.md)
- [JsonWebKey](../interfaces/verida_vda_did_resolver._internal_.JsonWebKey.md)
- [Params](../interfaces/verida_vda_did_resolver._internal_.Params.md)
- [ParsedDID](../interfaces/verida_vda_did_resolver._internal_.ParsedDID.md)
- [Resolvable](../interfaces/verida_vda_did_resolver._internal_.Resolvable.md)
- [Service](../interfaces/verida_vda_did_resolver._internal_.Service.md)
- [VerificationMethod](../interfaces/verida_vda_did_resolver._internal_.VerificationMethod.md)
- [Web3ResolverConfigurationOptions](../interfaces/verida_vda_did_resolver._internal_.Web3ResolverConfigurationOptions.md)

### Type aliases

- [DIDDocument](verida_vda_did_resolver._internal_.md#diddocument)
- [DIDResolver](verida_vda_did_resolver._internal_.md#didresolver)
- [Extensible](verida_vda_did_resolver._internal_.md#extensible)
- [KeyCapabilitySection](verida_vda_did_resolver._internal_.md#keycapabilitysection)
- [Record](verida_vda_did_resolver._internal_.md#record)
- [ServiceEndpoint](verida_vda_did_resolver._internal_.md#serviceendpoint)

## Type aliases

### DIDDocument

Ƭ **DIDDocument**: { `@context?`: ``"https://www.w3.org/ns/did/v1"`` \| `string` \| `string`[] ; `alsoKnownAs?`: `string`[] ; `controller?`: `string` \| `string`[] ; `id`: `string` ; `publicKey?`: [`VerificationMethod`](../interfaces/verida_vda_did_resolver._internal_.VerificationMethod.md)[] ; `service?`: [`Service`](../interfaces/verida_vda_did_resolver._internal_.Service.md)[] ; `verificationMethod?`: [`VerificationMethod`](../interfaces/verida_vda_did_resolver._internal_.VerificationMethod.md)[]  } & { [x in KeyCapabilitySection]?: (string \| VerificationMethod)[] }

Represents a DID document.

**`see`** [https://www.w3.org/TR/did-core/#did-document-properties](https://www.w3.org/TR/did-core/#did-document-properties)

#### Defined in

node_modules/did-resolver/lib/resolver.d.ts:60

___

### DIDResolver

Ƭ **DIDResolver**: (`did`: `string`, `parsed`: [`ParsedDID`](../interfaces/verida_vda_did_resolver._internal_.ParsedDID.md), `resolver`: [`Resolvable`](../interfaces/verida_vda_did_resolver._internal_.Resolvable.md), `options`: [`DIDResolutionOptions`](../interfaces/verida_vda_did_resolver._internal_.DIDResolutionOptions.md)) => `Promise`<[`DIDResolutionResult`](../interfaces/verida_vda_did_resolver._internal_.DIDResolutionResult.md)\>

#### Type declaration

▸ (`did`, `parsed`, `resolver`, `options`): `Promise`<[`DIDResolutionResult`](../interfaces/verida_vda_did_resolver._internal_.DIDResolutionResult.md)\>

The DID resolution function that DID Resolver implementations must implement.

##### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `string` |
| `parsed` | [`ParsedDID`](../interfaces/verida_vda_did_resolver._internal_.ParsedDID.md) |
| `resolver` | [`Resolvable`](../interfaces/verida_vda_did_resolver._internal_.Resolvable.md) |
| `options` | [`DIDResolutionOptions`](../interfaces/verida_vda_did_resolver._internal_.DIDResolutionOptions.md) |

##### Returns

`Promise`<[`DIDResolutionResult`](../interfaces/verida_vda_did_resolver._internal_.DIDResolutionResult.md)\>

#### Defined in

node_modules/did-resolver/lib/resolver.d.ts:163

___

### Extensible

Ƭ **Extensible**: [`Record`](verida_vda_did_resolver._internal_.md#record)<`string`, `any`\>

Defines an object type that can be extended with other properties.

#### Defined in

node_modules/did-resolver/lib/resolver.d.ts:4

___

### KeyCapabilitySection

Ƭ **KeyCapabilitySection**: ``"authentication"`` \| ``"assertionMethod"`` \| ``"keyAgreement"`` \| ``"capabilityInvocation"`` \| ``"capabilityDelegation"``

Represents the Verification Relationship between a DID subject and a Verification Method.

**`see`** [https://www.w3.org/TR/did-core/#verification-relationships](https://www.w3.org/TR/did-core/#verification-relationships)

#### Defined in

node_modules/did-resolver/lib/resolver.d.ts:54

___

### Record

Ƭ **Record**<`K`, `T`\>: { [P in K]: T }

Construct a type with a set of properties K of type T

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `any` |
| `T` | `T` |

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1499

___

### ServiceEndpoint

Ƭ **ServiceEndpoint**: `string` \| [`Record`](verida_vda_did_resolver._internal_.md#record)<`string`, `any`\>

Represents an endpoint of a Service entry in a DID document.

**`see`** [https://www.w3.org/TR/did-core/#dfn-serviceendpoint](https://www.w3.org/TR/did-core/#dfn-serviceendpoint)

**`see`** [https://www.w3.org/TR/did-core/#services](https://www.w3.org/TR/did-core/#services)

#### Defined in

node_modules/did-resolver/lib/resolver.d.ts:92
