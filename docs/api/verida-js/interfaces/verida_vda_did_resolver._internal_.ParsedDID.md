[root](../README.md) / [Modules](../modules.md) / [@verida/vda-did-resolver](../modules/verida_vda_did_resolver.md) / [<internal\>](../modules/verida_vda_did_resolver._internal_.md) / ParsedDID

# Interface: ParsedDID

[@verida/vda-did-resolver](../modules/verida_vda_did_resolver.md).[<internal\>](../modules/verida_vda_did_resolver._internal_.md).ParsedDID

An object containing the results of parsing a DID URI string.

This is forwarded to implementations of particular DID resolvers when calling the `resolve` method.

**`see`** [Resolver](../classes/verida_did_client._internal_.Resolver.md)

**`see`** [Resolvable.resolve](verida_vda_did_resolver._internal_.Resolvable.md#resolve)

## Table of contents

### Properties

- [did](verida_vda_did_resolver._internal_.ParsedDID.md#did)
- [didUrl](verida_vda_did_resolver._internal_.ParsedDID.md#didurl)
- [fragment](verida_vda_did_resolver._internal_.ParsedDID.md#fragment)
- [id](verida_vda_did_resolver._internal_.ParsedDID.md#id)
- [method](verida_vda_did_resolver._internal_.ParsedDID.md#method)
- [params](verida_vda_did_resolver._internal_.ParsedDID.md#params)
- [path](verida_vda_did_resolver._internal_.ParsedDID.md#path)
- [query](verida_vda_did_resolver._internal_.ParsedDID.md#query)

## Properties

### did

• **did**: `string`

#### Defined in

node_modules/did-resolver/lib/resolver.d.ts:151

___

### didUrl

• **didUrl**: `string`

#### Defined in

node_modules/did-resolver/lib/resolver.d.ts:152

___

### fragment

• `Optional` **fragment**: `string`

#### Defined in

node_modules/did-resolver/lib/resolver.d.ts:156

___

### id

• **id**: `string`

#### Defined in

node_modules/did-resolver/lib/resolver.d.ts:154

___

### method

• **method**: `string`

#### Defined in

node_modules/did-resolver/lib/resolver.d.ts:153

___

### params

• `Optional` **params**: [`Params`](verida_vda_did_resolver._internal_.Params.md)

#### Defined in

node_modules/did-resolver/lib/resolver.d.ts:158

___

### path

• `Optional` **path**: `string`

#### Defined in

node_modules/did-resolver/lib/resolver.d.ts:155

___

### query

• `Optional` **query**: `string`

#### Defined in

node_modules/did-resolver/lib/resolver.d.ts:157
