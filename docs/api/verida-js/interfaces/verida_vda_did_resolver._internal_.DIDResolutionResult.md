[root](../README.md) / [Modules](../modules.md) / [@verida/vda-did-resolver](../modules/verida_vda_did_resolver.md) / [<internal\>](../modules/verida_vda_did_resolver._internal_.md) / DIDResolutionResult

# Interface: DIDResolutionResult

[@verida/vda-did-resolver](../modules/verida_vda_did_resolver.md).[<internal\>](../modules/verida_vda_did_resolver._internal_.md).DIDResolutionResult

Defines the result of a DID resolution operation.

**`see`** [Resolvable.resolve](verida_vda_did_resolver._internal_.Resolvable.md#resolve)

**`see`** [https://www.w3.org/TR/did-core/#did-resolution](https://www.w3.org/TR/did-core/#did-resolution)

## Table of contents

### Properties

- [@context](verida_vda_did_resolver._internal_.DIDResolutionResult.md#@context)
- [didDocument](verida_vda_did_resolver._internal_.DIDResolutionResult.md#diddocument)
- [didDocumentMetadata](verida_vda_did_resolver._internal_.DIDResolutionResult.md#diddocumentmetadata)
- [didResolutionMetadata](verida_vda_did_resolver._internal_.DIDResolutionResult.md#didresolutionmetadata)

## Properties

### @context

• `Optional` **@context**: `string` \| `string`[]

#### Defined in

node_modules/did-resolver/lib/resolver.d.ts:12

___

### didDocument

• **didDocument**: ``null`` \| [`DIDDocument`](../modules/verida_vda_did_resolver._internal_.md#diddocument)

#### Defined in

node_modules/did-resolver/lib/resolver.d.ts:14

___

### didDocumentMetadata

• **didDocumentMetadata**: [`DIDDocumentMetadata`](verida_vda_did_resolver._internal_.DIDDocumentMetadata.md)

#### Defined in

node_modules/did-resolver/lib/resolver.d.ts:15

___

### didResolutionMetadata

• **didResolutionMetadata**: [`DIDResolutionMetadata`](verida_vda_did_resolver._internal_.DIDResolutionMetadata.md)

#### Defined in

node_modules/did-resolver/lib/resolver.d.ts:13
