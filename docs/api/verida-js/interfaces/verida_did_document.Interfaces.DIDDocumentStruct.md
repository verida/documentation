[root](../README.md) / [Modules](../modules.md) / [@verida/did-document](../modules/verida_did_document.md) / [Interfaces](../modules/verida_did_document.Interfaces.md) / DIDDocumentStruct

# Interface: DIDDocumentStruct

[@verida/did-document](../modules/verida_did_document.md).[Interfaces](../modules/verida_did_document.Interfaces.md).DIDDocumentStruct

## Hierarchy

- [`DIDDocument`](../modules/verida_did_document._internal_.md#diddocument)

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

packages/did-document/node_modules/did-resolver/lib/resolver.d.ts:26

___

### alsoKnownAs

• `Optional` **alsoKnownAs**: `string`[]

#### Inherited from

DD.alsoKnownAs

#### Defined in

packages/did-document/node_modules/did-resolver/lib/resolver.d.ts:28

___

### assertionMethod

• **assertionMethod**: `undefined` \| (`string` \| [`VerificationMethod`](verida_did_document._internal_.VerificationMethod.md))[]

#### Inherited from

DD.assertionMethod

___

### authentication

• **authentication**: `undefined` \| (`string` \| [`VerificationMethod`](verida_did_document._internal_.VerificationMethod.md))[]

#### Inherited from

DD.authentication

___

### capabilityDelegation

• **capabilityDelegation**: `undefined` \| (`string` \| [`VerificationMethod`](verida_did_document._internal_.VerificationMethod.md))[]

#### Inherited from

DD.capabilityDelegation

___

### capabilityInvocation

• **capabilityInvocation**: `undefined` \| (`string` \| [`VerificationMethod`](verida_did_document._internal_.VerificationMethod.md))[]

#### Inherited from

DD.capabilityInvocation

___

### controller

• `Optional` **controller**: `string` \| `string`[]

#### Inherited from

DD.controller

#### Defined in

packages/did-document/node_modules/did-resolver/lib/resolver.d.ts:29

___

### id

• **id**: `string`

#### Inherited from

DD.id

#### Defined in

packages/did-document/node_modules/did-resolver/lib/resolver.d.ts:27

___

### keyAgreement

• **keyAgreement**: `undefined` \| (`string` \| [`VerificationMethod`](verida_did_document._internal_.VerificationMethod.md))[]

#### Inherited from

DD.keyAgreement

___

### proof

• `Optional` **proof**: [`Proof`](verida_did_document.Interfaces.Proof.md)

#### Defined in

[packages/did-document/src/interfaces.ts:17](https://github.com/verida/verida-js/blob/039856c/packages/did-document/src/interfaces.ts#L17)

___

### publicKey

• `Optional` **publicKey**: [`VerificationMethod`](verida_did_document._internal_.VerificationMethod.md)[]

**`deprecated`**

#### Inherited from

DD.publicKey

#### Defined in

packages/did-document/node_modules/did-resolver/lib/resolver.d.ts:35

___

### service

• `Optional` **service**: [`ServiceEndpoint`](verida_did_document._internal_.ServiceEndpoint.md)[]

#### Inherited from

DD.service

#### Defined in

packages/did-document/node_modules/did-resolver/lib/resolver.d.ts:31

___

### verificationMethod

• `Optional` **verificationMethod**: [`VerificationMethod`](verida_did_document._internal_.VerificationMethod.md)[]

#### Inherited from

DD.verificationMethod

#### Defined in

packages/did-document/node_modules/did-resolver/lib/resolver.d.ts:30
