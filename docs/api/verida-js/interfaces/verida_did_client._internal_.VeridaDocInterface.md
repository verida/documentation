[root](../README.md) / [Modules](../modules.md) / [@verida/did-client](../modules/verida_did_client.md) / [<internal\>](../modules/verida_did_client._internal_.md) / VeridaDocInterface

# Interface: VeridaDocInterface

[@verida/did-client](../modules/verida_did_client.md).[<internal\>](../modules/verida_did_client._internal_.md).VeridaDocInterface

## Hierarchy

- [`DIDDocument`](../modules/verida_did_client._internal_.md#diddocument)

  ↳ **`VeridaDocInterface`**

## Table of contents

### Properties

- [@context](verida_did_client._internal_.VeridaDocInterface.md#@context)
- [alsoKnownAs](verida_did_client._internal_.VeridaDocInterface.md#alsoknownas)
- [assertionMethod](verida_did_client._internal_.VeridaDocInterface.md#assertionmethod)
- [authentication](verida_did_client._internal_.VeridaDocInterface.md#authentication)
- [capabilityDelegation](verida_did_client._internal_.VeridaDocInterface.md#capabilitydelegation)
- [capabilityInvocation](verida_did_client._internal_.VeridaDocInterface.md#capabilityinvocation)
- [controller](verida_did_client._internal_.VeridaDocInterface.md#controller)
- [created](verida_did_client._internal_.VeridaDocInterface.md#created)
- [deactivated](verida_did_client._internal_.VeridaDocInterface.md#deactivated)
- [id](verida_did_client._internal_.VeridaDocInterface.md#id)
- [keyAgreement](verida_did_client._internal_.VeridaDocInterface.md#keyagreement)
- [proof](verida_did_client._internal_.VeridaDocInterface.md#proof)
- [publicKey](verida_did_client._internal_.VeridaDocInterface.md#publickey)
- [service](verida_did_client._internal_.VeridaDocInterface.md#service)
- [updated](verida_did_client._internal_.VeridaDocInterface.md#updated)
- [verificationMethod](verida_did_client._internal_.VeridaDocInterface.md#verificationmethod)
- [versionId](verida_did_client._internal_.VeridaDocInterface.md#versionid)

## Properties

### @context

• `Optional` **@context**: `string` \| `string`[]

#### Inherited from

DocInterface.@context

#### Defined in

node_modules/did-resolver/lib/resolver.d.ts:61

___

### alsoKnownAs

• `Optional` **alsoKnownAs**: `string`[]

#### Inherited from

DocInterface.alsoKnownAs

#### Defined in

node_modules/did-resolver/lib/resolver.d.ts:63

___

### assertionMethod

• **assertionMethod**: `undefined` \| (`string` \| [`VerificationMethod`](verida_did_client._internal_.VerificationMethod.md))[]

#### Inherited from

DocInterface.assertionMethod

___

### authentication

• **authentication**: `undefined` \| (`string` \| [`VerificationMethod`](verida_did_client._internal_.VerificationMethod.md))[]

#### Inherited from

DocInterface.authentication

___

### capabilityDelegation

• **capabilityDelegation**: `undefined` \| (`string` \| [`VerificationMethod`](verida_did_client._internal_.VerificationMethod.md))[]

#### Inherited from

DocInterface.capabilityDelegation

___

### capabilityInvocation

• **capabilityInvocation**: `undefined` \| (`string` \| [`VerificationMethod`](verida_did_client._internal_.VerificationMethod.md))[]

#### Inherited from

DocInterface.capabilityInvocation

___

### controller

• `Optional` **controller**: `string` \| `string`[]

#### Inherited from

DocInterface.controller

#### Defined in

node_modules/did-resolver/lib/resolver.d.ts:64

___

### created

• `Optional` **created**: `string`

#### Defined in

packages/types/dist/DocumentInterfaces.d.ts:39

___

### deactivated

• `Optional` **deactivated**: `string`

#### Defined in

packages/types/dist/DocumentInterfaces.d.ts:41

___

### id

• **id**: `string`

#### Inherited from

DocInterface.id

#### Defined in

node_modules/did-resolver/lib/resolver.d.ts:62

___

### keyAgreement

• **keyAgreement**: `undefined` \| (`string` \| [`VerificationMethod`](verida_did_client._internal_.VerificationMethod.md))[]

#### Inherited from

DocInterface.keyAgreement

___

### proof

• `Optional` **proof**: [`ProofInterface`](verida_did_client._internal_.ProofInterface.md)

#### Defined in

packages/types/dist/DocumentInterfaces.d.ts:42

___

### publicKey

• `Optional` **publicKey**: [`VerificationMethod`](verida_did_client._internal_.VerificationMethod.md)[]

**`deprecated`**

#### Inherited from

DocInterface.publicKey

#### Defined in

node_modules/did-resolver/lib/resolver.d.ts:70

___

### service

• `Optional` **service**: [`Service`](verida_did_client._internal_.Service.md)[]

#### Inherited from

DocInterface.service

#### Defined in

node_modules/did-resolver/lib/resolver.d.ts:66

___

### updated

• `Optional` **updated**: `string`

#### Defined in

packages/types/dist/DocumentInterfaces.d.ts:40

___

### verificationMethod

• `Optional` **verificationMethod**: [`VerificationMethod`](verida_did_client._internal_.VerificationMethod.md)[]

#### Inherited from

DocInterface.verificationMethod

#### Defined in

node_modules/did-resolver/lib/resolver.d.ts:65

___

### versionId

• **versionId**: `number`

#### Defined in

packages/types/dist/DocumentInterfaces.d.ts:38
