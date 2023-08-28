[root](../README.md) / [Modules](../modules.md) / [@verida/client-ts](../modules/verida_client_ts.md) / [<internal\>](../modules/verida_client_ts._internal_.md) / JsonWebKey

# Interface: JsonWebKey

[@verida/client-ts](../modules/verida_client_ts.md).[<internal\>](../modules/verida_client_ts._internal_.md).JsonWebKey

Encapsulates a JSON web key type that includes only the public properties that
can be used in DID documents.

The private properties are intentionally omitted to discourage the use
(and accidental disclosure) of private keys in DID documents.

**`see`** [RFC7517 JsonWebKey (JWK)](https://www.rfc-editor.org/rfc/rfc7517)

## Hierarchy

- [`Extensible`](../modules/verida_client_ts._internal_.md#extensible)

  ↳ **`JsonWebKey`**

## Table of contents

### Properties

- [alg](verida_client_ts._internal_.JsonWebKey.md#alg)
- [crv](verida_client_ts._internal_.JsonWebKey.md#crv)
- [e](verida_client_ts._internal_.JsonWebKey.md#e)
- [ext](verida_client_ts._internal_.JsonWebKey.md#ext)
- [key\_ops](verida_client_ts._internal_.JsonWebKey.md#key_ops)
- [kid](verida_client_ts._internal_.JsonWebKey.md#kid)
- [kty](verida_client_ts._internal_.JsonWebKey.md#kty)
- [n](verida_client_ts._internal_.JsonWebKey.md#n)
- [use](verida_client_ts._internal_.JsonWebKey.md#use)
- [x](verida_client_ts._internal_.JsonWebKey.md#x)
- [y](verida_client_ts._internal_.JsonWebKey.md#y)

## Properties

### alg

• `Optional` **alg**: `string`

#### Defined in

node_modules/did-resolver/lib/resolver.d.ts:103

___

### crv

• `Optional` **crv**: `string`

#### Defined in

node_modules/did-resolver/lib/resolver.d.ts:104

___

### e

• `Optional` **e**: `string`

#### Defined in

node_modules/did-resolver/lib/resolver.d.ts:105

___

### ext

• `Optional` **ext**: `boolean`

#### Defined in

node_modules/did-resolver/lib/resolver.d.ts:106

___

### key\_ops

• `Optional` **key\_ops**: `string`[]

#### Defined in

node_modules/did-resolver/lib/resolver.d.ts:107

___

### kid

• `Optional` **kid**: `string`

#### Defined in

node_modules/did-resolver/lib/resolver.d.ts:108

___

### kty

• **kty**: `string`

#### Defined in

node_modules/did-resolver/lib/resolver.d.ts:109

___

### n

• `Optional` **n**: `string`

#### Defined in

node_modules/did-resolver/lib/resolver.d.ts:110

___

### use

• `Optional` **use**: `string`

#### Defined in

node_modules/did-resolver/lib/resolver.d.ts:111

___

### x

• `Optional` **x**: `string`

#### Defined in

node_modules/did-resolver/lib/resolver.d.ts:112

___

### y

• `Optional` **y**: `string`

#### Defined in

node_modules/did-resolver/lib/resolver.d.ts:113
