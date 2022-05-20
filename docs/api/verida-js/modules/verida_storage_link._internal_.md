[root](../README.md) / [Modules](../modules.md) / [@verida/storage-link](verida_storage_link.md) / <internal\>

# Namespace: <internal\>

[@verida/storage-link](verida_storage_link.md).<internal\>

## Table of contents

### Enumerations

- [EndpointType](../enums/verida_storage_link._internal_.EndpointType.md)

### Classes

- [default](../classes/verida_storage_link._internal_.default.md)
- [default](../classes/verida_storage_link._internal_.default-1.md)
- [default](../classes/verida_storage_link._internal_.default-2.md)

### Interfaces

- [BoxKeyPair](../interfaces/verida_storage_link._internal_.BoxKeyPair.md)
- [DIDDocumentStruct](../interfaces/verida_storage_link._internal_.DIDDocumentStruct.md)
- [Endpoints](../interfaces/verida_storage_link._internal_.Endpoints.md)
- [JsonWebKey](../interfaces/verida_storage_link._internal_.JsonWebKey.md)
- [Proof](../interfaces/verida_storage_link._internal_.Proof.md)
- [SecureContextEndpoint](../interfaces/verida_storage_link._internal_.SecureContextEndpoint.md)
- [ServiceEndpoint](../interfaces/verida_storage_link._internal_.ServiceEndpoint.md)
- [SignKeyPair](../interfaces/verida_storage_link._internal_.SignKeyPair.md)
- [VerificationMethod](../interfaces/verida_storage_link._internal_.VerificationMethod.md)

### Type aliases

- [DIDDocument](verida_storage_link._internal_.md#diddocument)
- [Extensible](verida_storage_link._internal_.md#extensible)
- [KeyCapabilitySection](verida_storage_link._internal_.md#keycapabilitysection)
- [Record](verida_storage_link._internal_.md#record)

## Type aliases

### DIDDocument

Ƭ **DIDDocument**: { `@context?`: ``"https://www.w3.org/ns/did/v1"`` \| `string` \| `string`[] ; `alsoKnownAs?`: `string`[] ; `controller?`: `string` \| `string`[] ; `id`: `string` ; `publicKey?`: [`VerificationMethod`](../interfaces/verida_storage_link._internal_.VerificationMethod.md)[] ; `service?`: [`ServiceEndpoint`](../interfaces/verida_storage_link._internal_.ServiceEndpoint.md)[] ; `verificationMethod?`: [`VerificationMethod`](../interfaces/verida_storage_link._internal_.VerificationMethod.md)[]  } & { [x in KeyCapabilitySection]?: (string \| VerificationMethod)[] }

#### Defined in

packages/did-document/node_modules/did-resolver/lib/resolver.d.ts:25

___

### Extensible

Ƭ **Extensible**: [`Record`](verida_storage_link._internal_.md#record)<`string`, `any`\>

#### Defined in

packages/did-document/node_modules/did-resolver/lib/resolver.d.ts:1

___

### KeyCapabilitySection

Ƭ **KeyCapabilitySection**: ``"authentication"`` \| ``"assertionMethod"`` \| ``"keyAgreement"`` \| ``"capabilityInvocation"`` \| ``"capabilityDelegation"``

#### Defined in

packages/did-document/node_modules/did-resolver/lib/resolver.d.ts:24

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
