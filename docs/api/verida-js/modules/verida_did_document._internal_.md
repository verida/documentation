[root](../README.md) / [Modules](../modules.md) / [@verida/did-document](verida_did_document.md) / <internal\>

# Namespace: <internal\>

[@verida/did-document](verida_did_document.md).<internal\>

## Table of contents

### Classes

- [default](../classes/verida_did_document._internal_.default.md)

### Interfaces

- [JsonWebKey](../interfaces/verida_did_document._internal_.JsonWebKey.md)
- [ServiceEndpoint](../interfaces/verida_did_document._internal_.ServiceEndpoint.md)
- [VerificationMethod](../interfaces/verida_did_document._internal_.VerificationMethod.md)

### Type aliases

- [DIDDocument](verida_did_document._internal_.md#diddocument)
- [Extensible](verida_did_document._internal_.md#extensible)
- [KeyCapabilitySection](verida_did_document._internal_.md#keycapabilitysection)
- [Record](verida_did_document._internal_.md#record)

## Type aliases

### DIDDocument

Ƭ **DIDDocument**: { `@context?`: ``"https://www.w3.org/ns/did/v1"`` \| `string` \| `string`[] ; `alsoKnownAs?`: `string`[] ; `controller?`: `string` \| `string`[] ; `id`: `string` ; `publicKey?`: [`VerificationMethod`](../interfaces/verida_did_document._internal_.VerificationMethod.md)[] ; `service?`: [`ServiceEndpoint`](../interfaces/verida_did_document._internal_.ServiceEndpoint.md)[] ; `verificationMethod?`: [`VerificationMethod`](../interfaces/verida_did_document._internal_.VerificationMethod.md)[]  } & { [x in KeyCapabilitySection]?: (string \| VerificationMethod)[] }

#### Defined in

packages/did-document/node_modules/did-resolver/lib/resolver.d.ts:25

___

### Extensible

Ƭ **Extensible**: [`Record`](verida_did_document._internal_.md#record)<`string`, `any`\>

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
