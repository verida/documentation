[root](../README.md) / [Modules](../modules.md) / [@verida/did-document](verida_did_document.md) / <internal\>

# Namespace: <internal\>

[@verida/did-document](verida_did_document.md).<internal\>

## Table of contents

### Enumerations

- [SecureContextEndpointType](../enums/verida_did_document._internal_.SecureContextEndpointType.md)

### Interfaces

- [IDIDDocument](../interfaces/verida_did_document._internal_.IDIDDocument.md)
- [IKeyring](../interfaces/verida_did_document._internal_.IKeyring.md)
- [JsonWebKey](../interfaces/verida_did_document._internal_.JsonWebKey.md)
- [KeyringPublicKeys](../interfaces/verida_did_document._internal_.KeyringPublicKeys.md)
- [ProofInterface](../interfaces/verida_did_document._internal_.ProofInterface.md)
- [SecureContextEndpoint](../interfaces/verida_did_document._internal_.SecureContextEndpoint.md)
- [SecureContextEndpoints](../interfaces/verida_did_document._internal_.SecureContextEndpoints.md)
- [Service](../interfaces/verida_did_document._internal_.Service.md)
- [VeridaDocInterface](../interfaces/verida_did_document._internal_.VeridaDocInterface.md)
- [VerificationMethod](../interfaces/verida_did_document._internal_.VerificationMethod.md)

### Type aliases

- [DIDDocument](verida_did_document._internal_.md#diddocument)
- [Extensible](verida_did_document._internal_.md#extensible)
- [KeyCapabilitySection](verida_did_document._internal_.md#keycapabilitysection)
- [Record](verida_did_document._internal_.md#record)
- [ServiceEndpoint](verida_did_document._internal_.md#serviceendpoint)

## Type aliases

### DIDDocument

Ƭ **DIDDocument**: { `@context?`: ``"https://www.w3.org/ns/did/v1"`` \| `string` \| `string`[] ; `alsoKnownAs?`: `string`[] ; `controller?`: `string` \| `string`[] ; `id`: `string` ; `publicKey?`: [`VerificationMethod`](../interfaces/verida_did_document._internal_.VerificationMethod.md)[] ; `service?`: [`Service`](../interfaces/verida_did_document._internal_.Service.md)[] ; `verificationMethod?`: [`VerificationMethod`](../interfaces/verida_did_document._internal_.VerificationMethod.md)[]  } & { [x in KeyCapabilitySection]?: (string \| VerificationMethod)[] }

Represents a DID document.

**`see`** [https://www.w3.org/TR/did-core/#did-document-properties](https://www.w3.org/TR/did-core/#did-document-properties)

#### Defined in

node_modules/did-resolver/lib/resolver.d.ts:60

___

### Extensible

Ƭ **Extensible**: [`Record`](verida_did_document._internal_.md#record)<`string`, `any`\>

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

Ƭ **ServiceEndpoint**: `string` \| [`Record`](verida_did_document._internal_.md#record)<`string`, `any`\>

Represents an endpoint of a Service entry in a DID document.

**`see`** [https://www.w3.org/TR/did-core/#dfn-serviceendpoint](https://www.w3.org/TR/did-core/#dfn-serviceendpoint)

**`see`** [https://www.w3.org/TR/did-core/#services](https://www.w3.org/TR/did-core/#services)

#### Defined in

node_modules/did-resolver/lib/resolver.d.ts:92
