[root](../README.md) / [Modules](../modules.md) / [@verida/account](verida_account.md) / <internal\>

# Namespace: <internal\>

[@verida/account](verida_account.md).<internal\>

## Table of contents

### Classes

- [default](../classes/verida_account._internal_.default.md)

### Interfaces

- [AccountConfig](../interfaces/verida_account._internal_.AccountConfig.md)
- [AuthContext](../interfaces/verida_account._internal_.AuthContext.md)
- [AuthTypeConfig](../interfaces/verida_account._internal_.AuthTypeConfig.md)
- [IAccount](../interfaces/verida_account._internal_.IAccount.md)
- [IKeyring](../interfaces/verida_account._internal_.IKeyring.md)
- [KeyringPublicKeys](../interfaces/verida_account._internal_.KeyringPublicKeys.md)
- [SecureContextConfig](../interfaces/verida_account._internal_.SecureContextConfig.md)
- [SecureContextEndpoint](../interfaces/verida_account._internal_.SecureContextEndpoint.md)
- [SecureContextPublicKey](../interfaces/verida_account._internal_.SecureContextPublicKey.md)
- [SecureContextServices](../interfaces/verida_account._internal_.SecureContextServices.md)
- [SecureStorageContextPublicKeys](../interfaces/verida_account._internal_.SecureStorageContextPublicKeys.md)

### Type aliases

- [Record](verida_account._internal_.md#record)
- [ServiceEndpoint](verida_account._internal_.md#serviceendpoint)

## Type aliases

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

Ƭ **ServiceEndpoint**: `string` \| [`Record`](verida_account._internal_.md#record)<`string`, `any`\>

Represents an endpoint of a Service entry in a DID document.

**`see`** [https://www.w3.org/TR/did-core/#dfn-serviceendpoint](https://www.w3.org/TR/did-core/#dfn-serviceendpoint)

**`see`** [https://www.w3.org/TR/did-core/#services](https://www.w3.org/TR/did-core/#services)

#### Defined in

node_modules/did-resolver/lib/resolver.d.ts:92
