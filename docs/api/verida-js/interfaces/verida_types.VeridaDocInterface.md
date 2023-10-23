[root](../README.md) / [Modules](../modules.md) / [@verida/types](../modules/verida_types.md) / VeridaDocInterface

# Interface: VeridaDocInterface

[@verida/types](../modules/verida_types.md).VeridaDocInterface

## Hierarchy

- [`DIDDocument`](../modules/verida_types._internal_.md#diddocument)

  ↳ **`VeridaDocInterface`**

## Table of contents

### Properties

- [@context](verida_types.VeridaDocInterface.md#@context)
- [alsoKnownAs](verida_types.VeridaDocInterface.md#alsoknownas)
- [assertionMethod](verida_types.VeridaDocInterface.md#assertionmethod)
- [authentication](verida_types.VeridaDocInterface.md#authentication)
- [capabilityDelegation](verida_types.VeridaDocInterface.md#capabilitydelegation)
- [capabilityInvocation](verida_types.VeridaDocInterface.md#capabilityinvocation)
- [controller](verida_types.VeridaDocInterface.md#controller)
- [created](verida_types.VeridaDocInterface.md#created)
- [deactivated](verida_types.VeridaDocInterface.md#deactivated)
- [id](verida_types.VeridaDocInterface.md#id)
- [keyAgreement](verida_types.VeridaDocInterface.md#keyagreement)
- [proof](verida_types.VeridaDocInterface.md#proof)
- [publicKey](verida_types.VeridaDocInterface.md#publickey)
- [service](verida_types.VeridaDocInterface.md#service)
- [updated](verida_types.VeridaDocInterface.md#updated)
- [verificationMethod](verida_types.VeridaDocInterface.md#verificationmethod)
- [versionId](verida_types.VeridaDocInterface.md#versionid)

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

• **assertionMethod**: `undefined` \| (`string` \| [`VerificationMethod`](verida_types._internal_.VerificationMethod.md))[]

#### Inherited from

DocInterface.assertionMethod

___

### authentication

• **authentication**: `undefined` \| (`string` \| [`VerificationMethod`](verida_types._internal_.VerificationMethod.md))[]

#### Inherited from

DocInterface.authentication

___

### capabilityDelegation

• **capabilityDelegation**: `undefined` \| (`string` \| [`VerificationMethod`](verida_types._internal_.VerificationMethod.md))[]

#### Inherited from

DocInterface.capabilityDelegation

___

### capabilityInvocation

• **capabilityInvocation**: `undefined` \| (`string` \| [`VerificationMethod`](verida_types._internal_.VerificationMethod.md))[]

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

[packages/types/src/DocumentInterfaces.ts:48](https://github.com/verida/verida-js/blob/032961c/packages/types/src/DocumentInterfaces.ts#L48)

___

### deactivated

• `Optional` **deactivated**: `string`

#### Defined in

[packages/types/src/DocumentInterfaces.ts:50](https://github.com/verida/verida-js/blob/032961c/packages/types/src/DocumentInterfaces.ts#L50)

___

### id

• **id**: `string`

#### Inherited from

DocInterface.id

#### Defined in

node_modules/did-resolver/lib/resolver.d.ts:62

___

### keyAgreement

• **keyAgreement**: `undefined` \| (`string` \| [`VerificationMethod`](verida_types._internal_.VerificationMethod.md))[]

#### Inherited from

DocInterface.keyAgreement

___

### proof

• `Optional` **proof**: [`ProofInterface`](verida_types.ProofInterface.md)

#### Defined in

[packages/types/src/DocumentInterfaces.ts:51](https://github.com/verida/verida-js/blob/032961c/packages/types/src/DocumentInterfaces.ts#L51)

___

### publicKey

• `Optional` **publicKey**: [`VerificationMethod`](verida_types._internal_.VerificationMethod.md)[]

**`deprecated`**

#### Inherited from

DocInterface.publicKey

#### Defined in

node_modules/did-resolver/lib/resolver.d.ts:70

___

### service

• `Optional` **service**: [`Service`](verida_types._internal_.Service.md)[]

#### Inherited from

DocInterface.service

#### Defined in

node_modules/did-resolver/lib/resolver.d.ts:66

___

### updated

• `Optional` **updated**: `string`

#### Defined in

[packages/types/src/DocumentInterfaces.ts:49](https://github.com/verida/verida-js/blob/032961c/packages/types/src/DocumentInterfaces.ts#L49)

___

### verificationMethod

• `Optional` **verificationMethod**: [`VerificationMethod`](verida_types._internal_.VerificationMethod.md)[]

#### Inherited from

DocInterface.verificationMethod

#### Defined in

node_modules/did-resolver/lib/resolver.d.ts:65

___

### versionId

• **versionId**: `number`

#### Defined in

[packages/types/src/DocumentInterfaces.ts:47](https://github.com/verida/verida-js/blob/032961c/packages/types/src/DocumentInterfaces.ts#L47)
