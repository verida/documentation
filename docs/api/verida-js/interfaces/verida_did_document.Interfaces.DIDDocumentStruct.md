[root](../README.md) / [Modules](../modules.md) / [@verida/did-document](../modules/verida_did_document.md) / [Interfaces](../modules/verida_did_document.Interfaces.md) / DIDDocumentStruct

# Interface: DIDDocumentStruct

[@verida/did-document](../modules/verida_did_document.md).[Interfaces](../modules/verida_did_document.Interfaces.md).DIDDocumentStruct

## Hierarchy

- `DIDDocument`

  ↳ **`DIDDocumentStruct`**

## Table of contents

### Properties

- [@context](verida_did_document.Interfaces.DIDDocumentStruct.md#@context)
- [alsoKnownAs](verida_did_document.Interfaces.DIDDocumentStruct.md#alsoknownas)
- [assertionMethod](verida_did_document.Interfaces.DIDDocumentStruct.md#assertionmethod)
- [authentication](verida_did_document.Interfaces.DIDDocumentStruct.md#authentication)
- [capabilityDelegation](verida_did_document.Interfaces.DIDDocumentStruct.md#capabilitydelegation)
- [capabilityInvocation](verida_did_document.Interfaces.DIDDocumentStruct.md#capabilityinvocation)
- [controller](verida_did_document.Interfaces.DIDDocumentStruct.md#controller)
- [id](verida_did_document.Interfaces.DIDDocumentStruct.md#id)
- [keyAgreement](verida_did_document.Interfaces.DIDDocumentStruct.md#keyagreement)
- [proof](verida_did_document.Interfaces.DIDDocumentStruct.md#proof)
- [publicKey](verida_did_document.Interfaces.DIDDocumentStruct.md#publickey)
- [service](verida_did_document.Interfaces.DIDDocumentStruct.md#service)
- [verificationMethod](verida_did_document.Interfaces.DIDDocumentStruct.md#verificationmethod)

## Properties

### @context

• `Optional` **@context**: `string` \| `string`[]

#### Inherited from

DD.@context

#### Defined in

did-document/node_modules/did-resolver/lib/resolver.d.ts:26

___

### alsoKnownAs

• `Optional` **alsoKnownAs**: `string`[]

#### Inherited from

DD.alsoKnownAs

#### Defined in

did-document/node_modules/did-resolver/lib/resolver.d.ts:28

___

### assertionMethod

• **assertionMethod**: `undefined` \| (`string` \| `VerificationMethod`)[]

#### Inherited from

DD.assertionMethod

___

### authentication

• **authentication**: `undefined` \| (`string` \| `VerificationMethod`)[]

#### Inherited from

DD.authentication

___

### capabilityDelegation

• **capabilityDelegation**: `undefined` \| (`string` \| `VerificationMethod`)[]

#### Inherited from

DD.capabilityDelegation

___

### capabilityInvocation

• **capabilityInvocation**: `undefined` \| (`string` \| `VerificationMethod`)[]

#### Inherited from

DD.capabilityInvocation

___

### controller

• `Optional` **controller**: `string` \| `string`[]

#### Inherited from

DD.controller

#### Defined in

did-document/node_modules/did-resolver/lib/resolver.d.ts:29

___

### id

• **id**: `string`

#### Inherited from

DD.id

#### Defined in

did-document/node_modules/did-resolver/lib/resolver.d.ts:27

___

### keyAgreement

• **keyAgreement**: `undefined` \| (`string` \| `VerificationMethod`)[]

#### Inherited from

DD.keyAgreement

___

### proof

• `Optional` **proof**: [`Proof`](verida_did_document.Interfaces.Proof.md)

#### Defined in

[did-document/src/interfaces.ts:17](https://github.com/verida/verida-js/blob/7bffc4e/packages/did-document/src/interfaces.ts#L17)

___

### publicKey

• `Optional` **publicKey**: `VerificationMethod`[]

**`deprecated`**

#### Inherited from

DD.publicKey

#### Defined in

did-document/node_modules/did-resolver/lib/resolver.d.ts:35

___

### service

• `Optional` **service**: `ServiceEndpoint`[]

#### Inherited from

DD.service

#### Defined in

did-document/node_modules/did-resolver/lib/resolver.d.ts:31

___

### verificationMethod

• `Optional` **verificationMethod**: `VerificationMethod`[]

#### Inherited from

DD.verificationMethod

#### Defined in

did-document/node_modules/did-resolver/lib/resolver.d.ts:30
