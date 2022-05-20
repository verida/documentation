[root](../README.md) / [Modules](../modules.md) / [@verida/account-node](verida_account_node.md) / <internal\>

# Namespace: <internal\>

[@verida/account-node](verida_account_node.md).<internal\>

## Table of contents

### Enumerations

- [EndpointType](../enums/verida_account_node._internal_.EndpointType.md)
- [EnvironmentType](../enums/verida_account_node._internal_.EnvironmentType.md)

### Classes

- [default](../classes/verida_account_node._internal_.default.md)
- [default](../classes/verida_account_node._internal_.default-1.md)
- [default](../classes/verida_account_node._internal_.default-2.md)
- [default](../classes/verida_account_node._internal_.default-3.md)
- [default](../classes/verida_account_node._internal_.default-4.md)

### Interfaces

- [AccountConfig](../interfaces/verida_account_node._internal_.AccountConfig.md)
- [DIDDocumentStruct](../interfaces/verida_account_node._internal_.DIDDocumentStruct.md)
- [Endpoints](../interfaces/verida_account_node._internal_.Endpoints.md)
- [JsonWebKey](../interfaces/verida_account_node._internal_.JsonWebKey.md)
- [NodeAccountConfig](../interfaces/verida_account_node._internal_.NodeAccountConfig.md)
- [Proof](../interfaces/verida_account_node._internal_.Proof.md)
- [SecureContextConfig](../interfaces/verida_account_node._internal_.SecureContextConfig.md)
- [SecureContextEndpoint](../interfaces/verida_account_node._internal_.SecureContextEndpoint.md)
- [SecureContextEndpoint](../interfaces/verida_account_node._internal_.SecureContextEndpoint-1.md)
- [SecureContextPublicKey](../interfaces/verida_account_node._internal_.SecureContextPublicKey.md)
- [SecureContextServices](../interfaces/verida_account_node._internal_.SecureContextServices.md)
- [SecureStorageContextPublicKeys](../interfaces/verida_account_node._internal_.SecureStorageContextPublicKeys.md)
- [ServiceEndpoint](../interfaces/verida_account_node._internal_.ServiceEndpoint.md)
- [VerificationMethod](../interfaces/verida_account_node._internal_.VerificationMethod.md)

### Type aliases

- [DIDDocument](verida_account_node._internal_.md#diddocument)
- [Extensible](verida_account_node._internal_.md#extensible)
- [KeyCapabilitySection](verida_account_node._internal_.md#keycapabilitysection)
- [Record](verida_account_node._internal_.md#record)

## Type aliases

### DIDDocument

Ƭ **DIDDocument**: { `@context?`: ``"https://www.w3.org/ns/did/v1"`` \| `string` \| `string`[] ; `alsoKnownAs?`: `string`[] ; `controller?`: `string` \| `string`[] ; `id`: `string` ; `publicKey?`: [`VerificationMethod`](../interfaces/verida_account_node._internal_.VerificationMethod.md)[] ; `service?`: [`ServiceEndpoint`](../interfaces/verida_account_node._internal_.ServiceEndpoint.md)[] ; `verificationMethod?`: [`VerificationMethod`](../interfaces/verida_account_node._internal_.VerificationMethod.md)[]  } & { [x in KeyCapabilitySection]?: (string \| VerificationMethod)[] }

#### Defined in

packages/did-document/node_modules/did-resolver/lib/resolver.d.ts:25

___

### Extensible

Ƭ **Extensible**: [`Record`](verida_account_node._internal_.md#record)<`string`, `any`\>

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
