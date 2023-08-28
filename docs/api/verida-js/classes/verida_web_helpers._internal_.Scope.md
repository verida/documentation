[root](../README.md) / [Modules](../modules.md) / [@verida/web-helpers](../modules/verida_web_helpers.md) / [<internal\>](../modules/verida_web_helpers._internal_.md) / Scope

# Class: Scope

[@verida/web-helpers](../modules/verida_web_helpers.md).[<internal\>](../modules/verida_web_helpers._internal_.md).Scope

## Hierarchy

- **`Scope`**

  ↳ [`ValueScope`](verida_web_helpers._internal_.ValueScope.md)

## Table of contents

### Constructors

- [constructor](verida_web_helpers._internal_.Scope.md#constructor)

### Properties

- [\_nameGroup](verida_web_helpers._internal_.Scope.md#_namegroup)
- [\_names](verida_web_helpers._internal_.Scope.md#_names)
- [\_parent](verida_web_helpers._internal_.Scope.md#_parent)
- [\_prefixes](verida_web_helpers._internal_.Scope.md#_prefixes)

### Methods

- [\_newName](verida_web_helpers._internal_.Scope.md#_newname)
- [name](verida_web_helpers._internal_.Scope.md#name)
- [toName](verida_web_helpers._internal_.Scope.md#toname)

## Constructors

### constructor

• **new Scope**(`__namedParameters?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters?` | [`ScopeOptions`](../interfaces/verida_web_helpers._internal_.ScopeOptions.md) |

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/codegen/scope.d.ts:46

## Properties

### \_nameGroup

• `Private` **\_nameGroup**: `any`

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/codegen/scope.d.ts:50

___

### \_names

• `Protected` `Readonly` **\_names**: `Object`

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/codegen/scope.d.ts:41

___

### \_parent

• `Protected` `Optional` `Readonly` **\_parent**: [`Scope`](verida_web_helpers._internal_.Scope.md)

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/codegen/scope.d.ts:45

___

### \_prefixes

• `Protected` `Optional` `Readonly` **\_prefixes**: `Set`<`string`\>

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/codegen/scope.d.ts:44

## Methods

### \_newName

▸ `Protected` **_newName**(`prefix`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `prefix` | `string` |

#### Returns

`string`

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/codegen/scope.d.ts:49

___

### name

▸ **name**(`prefix`): [`Name`](verida_web_helpers._internal_.Name.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `prefix` | `string` |

#### Returns

[`Name`](verida_web_helpers._internal_.Name.md)

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/codegen/scope.d.ts:48

___

### toName

▸ **toName**(`nameOrPrefix`): [`Name`](verida_web_helpers._internal_.Name.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrPrefix` | `string` \| [`Name`](verida_web_helpers._internal_.Name.md) |

#### Returns

[`Name`](verida_web_helpers._internal_.Name.md)

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/codegen/scope.d.ts:47
