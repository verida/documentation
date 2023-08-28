[root](../README.md) / [Modules](../modules.md) / [@verida/account-node](../modules/verida_account_node.md) / [<internal\>](../modules/verida_account_node._internal_.md) / VerificationMethod

# Interface: VerificationMethod

[@verida/account-node](../modules/verida_account_node.md).[<internal\>](../modules/verida_account_node._internal_.md).VerificationMethod

Represents the properties of a Verification Method listed in a DID document.

This data type includes public key representations that are no longer present in the spec but are still used by
several DID methods / resolvers and kept for backward compatibility.

**`see`** [https://www.w3.org/TR/did-core/#verification-methods](https://www.w3.org/TR/did-core/#verification-methods)

**`see`** [https://www.w3.org/TR/did-core/#verification-method-properties](https://www.w3.org/TR/did-core/#verification-method-properties)

## Table of contents

### Properties

- [blockchainAccountId](verida_account_node._internal_.VerificationMethod.md#blockchainaccountid)
- [controller](verida_account_node._internal_.VerificationMethod.md#controller)
- [ethereumAddress](verida_account_node._internal_.VerificationMethod.md#ethereumaddress)
- [id](verida_account_node._internal_.VerificationMethod.md#id)
- [publicKeyBase58](verida_account_node._internal_.VerificationMethod.md#publickeybase58)
- [publicKeyBase64](verida_account_node._internal_.VerificationMethod.md#publickeybase64)
- [publicKeyHex](verida_account_node._internal_.VerificationMethod.md#publickeyhex)
- [publicKeyJwk](verida_account_node._internal_.VerificationMethod.md#publickeyjwk)
- [publicKeyMultibase](verida_account_node._internal_.VerificationMethod.md#publickeymultibase)
- [type](verida_account_node._internal_.VerificationMethod.md#type)

## Properties

### blockchainAccountId

• `Optional` **blockchainAccountId**: `string`

#### Defined in

node_modules/did-resolver/lib/resolver.d.ts:133

___

### controller

• **controller**: `string`

#### Defined in

node_modules/did-resolver/lib/resolver.d.ts:127

___

### ethereumAddress

• `Optional` **ethereumAddress**: `string`

#### Defined in

node_modules/did-resolver/lib/resolver.d.ts:134

___

### id

• **id**: `string`

#### Defined in

node_modules/did-resolver/lib/resolver.d.ts:125

___

### publicKeyBase58

• `Optional` **publicKeyBase58**: `string`

#### Defined in

node_modules/did-resolver/lib/resolver.d.ts:128

___

### publicKeyBase64

• `Optional` **publicKeyBase64**: `string`

#### Defined in

node_modules/did-resolver/lib/resolver.d.ts:129

___

### publicKeyHex

• `Optional` **publicKeyHex**: `string`

#### Defined in

node_modules/did-resolver/lib/resolver.d.ts:131

___

### publicKeyJwk

• `Optional` **publicKeyJwk**: [`JsonWebKey`](verida_account_node._internal_.JsonWebKey.md)

#### Defined in

node_modules/did-resolver/lib/resolver.d.ts:130

___

### publicKeyMultibase

• `Optional` **publicKeyMultibase**: `string`

#### Defined in

node_modules/did-resolver/lib/resolver.d.ts:132

___

### type

• **type**: `string`

#### Defined in

node_modules/did-resolver/lib/resolver.d.ts:126
