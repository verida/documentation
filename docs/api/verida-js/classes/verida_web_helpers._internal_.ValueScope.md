[root](../README.md) / [Modules](../modules.md) / [@verida/web-helpers](../modules/verida_web_helpers.md) / [<internal\>](../modules/verida_web_helpers._internal_.md) / ValueScope

# Class: ValueScope

[@verida/web-helpers](../modules/verida_web_helpers.md).[<internal\>](../modules/verida_web_helpers._internal_.md).ValueScope

## Hierarchy

- [`Scope`](verida_web_helpers._internal_.Scope.md)

  ↳ **`ValueScope`**

## Table of contents

### Constructors

- [constructor](verida_web_helpers._internal_.ValueScope.md#constructor)

### Properties

- [\_names](verida_web_helpers._internal_.ValueScope.md#_names)
- [\_parent](verida_web_helpers._internal_.ValueScope.md#_parent)
- [\_prefixes](verida_web_helpers._internal_.ValueScope.md#_prefixes)
- [\_reduceValues](verida_web_helpers._internal_.ValueScope.md#_reducevalues)
- [\_scope](verida_web_helpers._internal_.ValueScope.md#_scope)
- [\_values](verida_web_helpers._internal_.ValueScope.md#_values)
- [opts](verida_web_helpers._internal_.ValueScope.md#opts)

### Methods

- [\_newName](verida_web_helpers._internal_.ValueScope.md#_newname)
- [get](verida_web_helpers._internal_.ValueScope.md#get)
- [getValue](verida_web_helpers._internal_.ValueScope.md#getvalue)
- [name](verida_web_helpers._internal_.ValueScope.md#name)
- [scopeCode](verida_web_helpers._internal_.ValueScope.md#scopecode)
- [scopeRefs](verida_web_helpers._internal_.ValueScope.md#scoperefs)
- [toName](verida_web_helpers._internal_.ValueScope.md#toname)
- [value](verida_web_helpers._internal_.ValueScope.md#value)

## Constructors

### constructor

• **new ValueScope**(`opts`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ValueScopeOptions`](../interfaces/verida_web_helpers._internal_.ValueScopeOptions.md) |

#### Overrides

[Scope](verida_web_helpers._internal_.Scope.md).[constructor](verida_web_helpers._internal_.Scope.md#constructor)

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/codegen/scope.d.ts:70

## Properties

### \_names

• `Protected` `Readonly` **\_names**: `Object`

#### Inherited from

[Scope](verida_web_helpers._internal_.Scope.md).[_names](verida_web_helpers._internal_.Scope.md#_names)

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/codegen/scope.d.ts:41

___

### \_parent

• `Protected` `Optional` `Readonly` **\_parent**: [`Scope`](verida_web_helpers._internal_.Scope.md)

#### Inherited from

[Scope](verida_web_helpers._internal_.Scope.md).[_parent](verida_web_helpers._internal_.Scope.md#_parent)

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/codegen/scope.d.ts:45

___

### \_prefixes

• `Protected` `Optional` `Readonly` **\_prefixes**: `Set`<`string`\>

#### Inherited from

[Scope](verida_web_helpers._internal_.Scope.md).[_prefixes](verida_web_helpers._internal_.Scope.md#_prefixes)

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/codegen/scope.d.ts:44

___

### \_reduceValues

• `Private` **\_reduceValues**: `any`

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/codegen/scope.d.ts:77

___

### \_scope

• `Protected` `Readonly` **\_scope**: [`ScopeStore`](../modules/verida_web_helpers._internal_.md#scopestore)

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/codegen/scope.d.ts:68

___

### \_values

• `Protected` `Readonly` **\_values**: [`ScopeValues`](../modules/verida_web_helpers._internal_.md#scopevalues)

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/codegen/scope.d.ts:67

___

### opts

• `Readonly` **opts**: [`VSOptions`](../interfaces/verida_web_helpers._internal_.VSOptions.md)

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/codegen/scope.d.ts:69

## Methods

### \_newName

▸ `Protected` **_newName**(`prefix`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `prefix` | `string` |

#### Returns

`string`

#### Inherited from

[Scope](verida_web_helpers._internal_.Scope.md).[_newName](verida_web_helpers._internal_.Scope.md#_newname)

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/codegen/scope.d.ts:49

___

### get

▸ **get**(): [`ScopeStore`](../modules/verida_web_helpers._internal_.md#scopestore)

#### Returns

[`ScopeStore`](../modules/verida_web_helpers._internal_.md#scopestore)

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/codegen/scope.d.ts:71

___

### getValue

▸ **getValue**(`prefix`, `keyOrRef`): `undefined` \| [`ValueScopeName`](verida_web_helpers._internal_.ValueScopeName.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `prefix` | `string` |
| `keyOrRef` | `unknown` |

#### Returns

`undefined` \| [`ValueScopeName`](verida_web_helpers._internal_.ValueScopeName.md)

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/codegen/scope.d.ts:74

___

### name

▸ **name**(`prefix`): [`ValueScopeName`](verida_web_helpers._internal_.ValueScopeName.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `prefix` | `string` |

#### Returns

[`ValueScopeName`](verida_web_helpers._internal_.ValueScopeName.md)

#### Overrides

[Scope](verida_web_helpers._internal_.Scope.md).[name](verida_web_helpers._internal_.Scope.md#name)

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/codegen/scope.d.ts:72

___

### scopeCode

▸ **scopeCode**(`values?`, `usedValues?`, `getCode?`): [`Code`](../modules/verida_web_helpers._internal_.md#code)

#### Parameters

| Name | Type |
| :------ | :------ |
| `values?` | [`ScopeValues`](../modules/verida_web_helpers._internal_.md#scopevalues) \| [`ScopeValueSets`](../modules/verida_web_helpers._internal_.md#scopevaluesets) |
| `usedValues?` | [`UsedScopeValues`](../modules/verida_web_helpers._internal_.md#usedscopevalues) |
| `getCode?` | (`n`: [`ValueScopeName`](verida_web_helpers._internal_.ValueScopeName.md)) => `undefined` \| [`Code`](../modules/verida_web_helpers._internal_.md#code) |

#### Returns

[`Code`](../modules/verida_web_helpers._internal_.md#code)

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/codegen/scope.d.ts:76

___

### scopeRefs

▸ **scopeRefs**(`scopeName`, `values?`): [`Code`](../modules/verida_web_helpers._internal_.md#code)

#### Parameters

| Name | Type |
| :------ | :------ |
| `scopeName` | [`Name`](verida_web_helpers._internal_.Name.md) |
| `values?` | [`ScopeValues`](../modules/verida_web_helpers._internal_.md#scopevalues) \| [`ScopeValueSets`](../modules/verida_web_helpers._internal_.md#scopevaluesets) |

#### Returns

[`Code`](../modules/verida_web_helpers._internal_.md#code)

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/codegen/scope.d.ts:75

___

### toName

▸ **toName**(`nameOrPrefix`): [`Name`](verida_web_helpers._internal_.Name.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrPrefix` | `string` \| [`Name`](verida_web_helpers._internal_.Name.md) |

#### Returns

[`Name`](verida_web_helpers._internal_.Name.md)

#### Inherited from

[Scope](verida_web_helpers._internal_.Scope.md).[toName](verida_web_helpers._internal_.Scope.md#toname)

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/codegen/scope.d.ts:47

___

### value

▸ **value**(`nameOrPrefix`, `value`): [`ValueScopeName`](verida_web_helpers._internal_.ValueScopeName.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrPrefix` | `string` \| [`ValueScopeName`](verida_web_helpers._internal_.ValueScopeName.md) |
| `value` | [`NameValue`](../interfaces/verida_web_helpers._internal_.NameValue.md) |

#### Returns

[`ValueScopeName`](verida_web_helpers._internal_.ValueScopeName.md)

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/codegen/scope.d.ts:73
