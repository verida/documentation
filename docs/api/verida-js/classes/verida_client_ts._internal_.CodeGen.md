[root](../README.md) / [Modules](../modules.md) / [@verida/client-ts](../modules/verida_client_ts.md) / [<internal\>](../modules/verida_client_ts._internal_.md) / CodeGen

# Class: CodeGen

[@verida/client-ts](../modules/verida_client_ts.md).[<internal\>](../modules/verida_client_ts._internal_.md).CodeGen

## Table of contents

### Constructors

- [constructor](verida_client_ts._internal_.CodeGen.md#constructor)

### Properties

- [\_blockNode](verida_client_ts._internal_.CodeGen.md#_blocknode)
- [\_blockStarts](verida_client_ts._internal_.CodeGen.md#_blockstarts)
- [\_constants](verida_client_ts._internal_.CodeGen.md#_constants)
- [\_def](verida_client_ts._internal_.CodeGen.md#_def)
- [\_elseNode](verida_client_ts._internal_.CodeGen.md#_elsenode)
- [\_endBlockNode](verida_client_ts._internal_.CodeGen.md#_endblocknode)
- [\_extScope](verida_client_ts._internal_.CodeGen.md#_extscope)
- [\_for](verida_client_ts._internal_.CodeGen.md#_for)
- [\_leafNode](verida_client_ts._internal_.CodeGen.md#_leafnode)
- [\_nodes](verida_client_ts._internal_.CodeGen.md#_nodes)
- [\_scope](verida_client_ts._internal_.CodeGen.md#_scope)
- [\_values](verida_client_ts._internal_.CodeGen.md#_values)
- [opts](verida_client_ts._internal_.CodeGen.md#opts)

### Accessors

- [\_currNode](verida_client_ts._internal_.CodeGen.md#_currnode)
- [\_root](verida_client_ts._internal_.CodeGen.md#_root)

### Methods

- [add](verida_client_ts._internal_.CodeGen.md#add)
- [assign](verida_client_ts._internal_.CodeGen.md#assign)
- [block](verida_client_ts._internal_.CodeGen.md#block)
- [break](verida_client_ts._internal_.CodeGen.md#break)
- [code](verida_client_ts._internal_.CodeGen.md#code)
- [const](verida_client_ts._internal_.CodeGen.md#const)
- [else](verida_client_ts._internal_.CodeGen.md#else)
- [elseIf](verida_client_ts._internal_.CodeGen.md#elseif)
- [endBlock](verida_client_ts._internal_.CodeGen.md#endblock)
- [endFor](verida_client_ts._internal_.CodeGen.md#endfor)
- [endFunc](verida_client_ts._internal_.CodeGen.md#endfunc)
- [endIf](verida_client_ts._internal_.CodeGen.md#endif)
- [for](verida_client_ts._internal_.CodeGen.md#for)
- [forIn](verida_client_ts._internal_.CodeGen.md#forin)
- [forOf](verida_client_ts._internal_.CodeGen.md#forof)
- [forRange](verida_client_ts._internal_.CodeGen.md#forrange)
- [func](verida_client_ts._internal_.CodeGen.md#func)
- [getScopeValue](verida_client_ts._internal_.CodeGen.md#getscopevalue)
- [if](verida_client_ts._internal_.CodeGen.md#if)
- [label](verida_client_ts._internal_.CodeGen.md#label)
- [let](verida_client_ts._internal_.CodeGen.md#let)
- [name](verida_client_ts._internal_.CodeGen.md#name)
- [object](verida_client_ts._internal_.CodeGen.md#object)
- [optimize](verida_client_ts._internal_.CodeGen.md#optimize)
- [return](verida_client_ts._internal_.CodeGen.md#return)
- [scopeCode](verida_client_ts._internal_.CodeGen.md#scopecode)
- [scopeName](verida_client_ts._internal_.CodeGen.md#scopename)
- [scopeRefs](verida_client_ts._internal_.CodeGen.md#scoperefs)
- [scopeValue](verida_client_ts._internal_.CodeGen.md#scopevalue)
- [throw](verida_client_ts._internal_.CodeGen.md#throw)
- [toString](verida_client_ts._internal_.CodeGen.md#tostring)
- [try](verida_client_ts._internal_.CodeGen.md#try)
- [var](verida_client_ts._internal_.CodeGen.md#var)

## Constructors

### constructor

• **new CodeGen**(`extScope`, `opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `extScope` | [`ValueScope`](verida_client_ts._internal_.ValueScope.md) |
| `opts?` | [`CodeGenOptions`](../interfaces/verida_client_ts._internal_.CodeGenOptions.md) |

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/codegen/index.d.ts:33

## Properties

### \_blockNode

• `Private` **\_blockNode**: `any`

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/codegen/index.d.ts:70

___

### \_blockStarts

• `Private` `Readonly` **\_blockStarts**: `any`

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/codegen/index.d.ts:30

___

### \_constants

• `Private` `Readonly` **\_constants**: `any`

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/codegen/index.d.ts:31

___

### \_def

• `Private` **\_def**: `any`

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/codegen/index.d.ts:41

___

### \_elseNode

• `Private` **\_elseNode**: `any`

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/codegen/index.d.ts:72

___

### \_endBlockNode

• `Private` **\_endBlockNode**: `any`

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/codegen/index.d.ts:71

___

### \_extScope

• `Readonly` **\_extScope**: [`ValueScope`](verida_client_ts._internal_.ValueScope.md)

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/codegen/index.d.ts:27

___

### \_for

• `Private` **\_for**: `any`

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/codegen/index.d.ts:53

___

### \_leafNode

• `Private` **\_leafNode**: `any`

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/codegen/index.d.ts:69

___

### \_nodes

• `Private` `Readonly` **\_nodes**: `any`

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/codegen/index.d.ts:29

___

### \_scope

• `Readonly` **\_scope**: [`Scope`](verida_client_ts._internal_.Scope.md)

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/codegen/index.d.ts:26

___

### \_values

• `Readonly` **\_values**: [`ScopeValueSets`](../modules/verida_client_ts._internal_.md#scopevaluesets)

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/codegen/index.d.ts:28

___

### opts

• `Private` `Readonly` **opts**: `any`

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/codegen/index.d.ts:32

## Accessors

### \_currNode

• `Private` `get` **_currNode**(): `any`

#### Returns

`any`

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/codegen/index.d.ts:74

• `Private` `set` **_currNode**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`void`

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/codegen/index.d.ts:75

___

### \_root

• `Private` `get` **_root**(): `any`

#### Returns

`any`

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/codegen/index.d.ts:73

## Methods

### add

▸ **add**(`lhs`, `rhs`): [`CodeGen`](verida_client_ts._internal_.CodeGen.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `lhs` | [`Code`](../modules/verida_client_ts._internal_.md#code) |
| `rhs` | [`SafeExpr`](../modules/verida_client_ts._internal_.md#safeexpr) |

#### Returns

[`CodeGen`](verida_client_ts._internal_.CodeGen.md)

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/codegen/index.d.ts:46

___

### assign

▸ **assign**(`lhs`, `rhs`, `sideEffects?`): [`CodeGen`](verida_client_ts._internal_.CodeGen.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `lhs` | [`Code`](../modules/verida_client_ts._internal_.md#code) |
| `rhs` | [`SafeExpr`](../modules/verida_client_ts._internal_.md#safeexpr) |
| `sideEffects?` | `boolean` |

#### Returns

[`CodeGen`](verida_client_ts._internal_.CodeGen.md)

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/codegen/index.d.ts:45

___

### block

▸ **block**(`body?`, `nodeCount?`): [`CodeGen`](verida_client_ts._internal_.CodeGen.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `body?` | [`Block`](../modules/verida_client_ts._internal_.md#block) |
| `nodeCount?` | `number` |

#### Returns

[`CodeGen`](verida_client_ts._internal_.CodeGen.md)

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/codegen/index.d.ts:64

___

### break

▸ **break**(`label?`): [`CodeGen`](verida_client_ts._internal_.CodeGen.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `label?` | [`Code`](../modules/verida_client_ts._internal_.md#code) |

#### Returns

[`CodeGen`](verida_client_ts._internal_.CodeGen.md)

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/codegen/index.d.ts:60

___

### code

▸ **code**(`c`): [`CodeGen`](verida_client_ts._internal_.CodeGen.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | ``null`` \| `number` \| `boolean` \| [`Name`](verida_client_ts._internal_.Name.md) \| [`_Code`](verida_client_ts._internal_._Code.md) \| () => `void` |

#### Returns

[`CodeGen`](verida_client_ts._internal_.CodeGen.md)

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/codegen/index.d.ts:47

___

### const

▸ **const**(`nameOrPrefix`, `rhs`, `_constant?`): [`Name`](verida_client_ts._internal_.Name.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrPrefix` | `string` \| [`Name`](verida_client_ts._internal_.Name.md) |
| `rhs` | [`SafeExpr`](../modules/verida_client_ts._internal_.md#safeexpr) |
| `_constant?` | `boolean` |

#### Returns

[`Name`](verida_client_ts._internal_.Name.md)

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/codegen/index.d.ts:42

___

### else

▸ **else**(): [`CodeGen`](verida_client_ts._internal_.CodeGen.md)

#### Returns

[`CodeGen`](verida_client_ts._internal_.CodeGen.md)

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/codegen/index.d.ts:51

___

### elseIf

▸ **elseIf**(`condition`): [`CodeGen`](verida_client_ts._internal_.CodeGen.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `condition` | `boolean` \| [`Code`](../modules/verida_client_ts._internal_.md#code) |

#### Returns

[`CodeGen`](verida_client_ts._internal_.CodeGen.md)

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/codegen/index.d.ts:50

___

### endBlock

▸ **endBlock**(`nodeCount?`): [`CodeGen`](verida_client_ts._internal_.CodeGen.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeCount?` | `number` |

#### Returns

[`CodeGen`](verida_client_ts._internal_.CodeGen.md)

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/codegen/index.d.ts:65

___

### endFor

▸ **endFor**(): [`CodeGen`](verida_client_ts._internal_.CodeGen.md)

#### Returns

[`CodeGen`](verida_client_ts._internal_.CodeGen.md)

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/codegen/index.d.ts:58

___

### endFunc

▸ **endFunc**(): [`CodeGen`](verida_client_ts._internal_.CodeGen.md)

#### Returns

[`CodeGen`](verida_client_ts._internal_.CodeGen.md)

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/codegen/index.d.ts:67

___

### endIf

▸ **endIf**(): [`CodeGen`](verida_client_ts._internal_.CodeGen.md)

#### Returns

[`CodeGen`](verida_client_ts._internal_.CodeGen.md)

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/codegen/index.d.ts:52

___

### for

▸ **for**(`iteration`, `forBody?`): [`CodeGen`](verida_client_ts._internal_.CodeGen.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `iteration` | [`Code`](../modules/verida_client_ts._internal_.md#code) |
| `forBody?` | [`Block`](../modules/verida_client_ts._internal_.md#block) |

#### Returns

[`CodeGen`](verida_client_ts._internal_.CodeGen.md)

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/codegen/index.d.ts:54

___

### forIn

▸ **forIn**(`nameOrPrefix`, `obj`, `forBody`, `varKind?`): [`CodeGen`](verida_client_ts._internal_.CodeGen.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrPrefix` | `string` \| [`Name`](verida_client_ts._internal_.Name.md) |
| `obj` | [`Code`](../modules/verida_client_ts._internal_.md#code) |
| `forBody` | (`item`: [`Name`](verida_client_ts._internal_.Name.md)) => `void` |
| `varKind?` | [`Code`](../modules/verida_client_ts._internal_.md#code) |

#### Returns

[`CodeGen`](verida_client_ts._internal_.CodeGen.md)

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/codegen/index.d.ts:57

___

### forOf

▸ **forOf**(`nameOrPrefix`, `iterable`, `forBody`, `varKind?`): [`CodeGen`](verida_client_ts._internal_.CodeGen.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrPrefix` | `string` \| [`Name`](verida_client_ts._internal_.Name.md) |
| `iterable` | [`Code`](../modules/verida_client_ts._internal_.md#code) |
| `forBody` | (`item`: [`Name`](verida_client_ts._internal_.Name.md)) => `void` |
| `varKind?` | [`Code`](../modules/verida_client_ts._internal_.md#code) |

#### Returns

[`CodeGen`](verida_client_ts._internal_.CodeGen.md)

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/codegen/index.d.ts:56

___

### forRange

▸ **forRange**(`nameOrPrefix`, `from`, `to`, `forBody`, `varKind?`): [`CodeGen`](verida_client_ts._internal_.CodeGen.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrPrefix` | `string` \| [`Name`](verida_client_ts._internal_.Name.md) |
| `from` | [`SafeExpr`](../modules/verida_client_ts._internal_.md#safeexpr) |
| `to` | [`SafeExpr`](../modules/verida_client_ts._internal_.md#safeexpr) |
| `forBody` | (`index`: [`Name`](verida_client_ts._internal_.Name.md)) => `void` |
| `varKind?` | [`Code`](../modules/verida_client_ts._internal_.md#code) |

#### Returns

[`CodeGen`](verida_client_ts._internal_.CodeGen.md)

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/codegen/index.d.ts:55

___

### func

▸ **func**(`name`, `args?`, `async?`, `funcBody?`): [`CodeGen`](verida_client_ts._internal_.CodeGen.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | [`Name`](verida_client_ts._internal_.Name.md) |
| `args?` | [`Code`](../modules/verida_client_ts._internal_.md#code) |
| `async?` | `boolean` |
| `funcBody?` | [`Block`](../modules/verida_client_ts._internal_.md#block) |

#### Returns

[`CodeGen`](verida_client_ts._internal_.CodeGen.md)

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/codegen/index.d.ts:66

___

### getScopeValue

▸ **getScopeValue**(`prefix`, `keyOrRef`): `undefined` \| [`ValueScopeName`](verida_client_ts._internal_.ValueScopeName.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `prefix` | `string` |
| `keyOrRef` | `unknown` |

#### Returns

`undefined` \| [`ValueScopeName`](verida_client_ts._internal_.ValueScopeName.md)

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/codegen/index.d.ts:38

___

### if

▸ **if**(`condition`, `thenBody?`, `elseBody?`): [`CodeGen`](verida_client_ts._internal_.CodeGen.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `condition` | `boolean` \| [`Code`](../modules/verida_client_ts._internal_.md#code) |
| `thenBody?` | [`Block`](../modules/verida_client_ts._internal_.md#block) |
| `elseBody?` | [`Block`](../modules/verida_client_ts._internal_.md#block) |

#### Returns

[`CodeGen`](verida_client_ts._internal_.CodeGen.md)

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/codegen/index.d.ts:49

___

### label

▸ **label**(`label`): [`CodeGen`](verida_client_ts._internal_.CodeGen.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `label` | [`Name`](verida_client_ts._internal_.Name.md) |

#### Returns

[`CodeGen`](verida_client_ts._internal_.CodeGen.md)

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/codegen/index.d.ts:59

___

### let

▸ **let**(`nameOrPrefix`, `rhs?`, `_constant?`): [`Name`](verida_client_ts._internal_.Name.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrPrefix` | `string` \| [`Name`](verida_client_ts._internal_.Name.md) |
| `rhs?` | [`SafeExpr`](../modules/verida_client_ts._internal_.md#safeexpr) |
| `_constant?` | `boolean` |

#### Returns

[`Name`](verida_client_ts._internal_.Name.md)

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/codegen/index.d.ts:43

___

### name

▸ **name**(`prefix`): [`Name`](verida_client_ts._internal_.Name.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `prefix` | `string` |

#### Returns

[`Name`](verida_client_ts._internal_.Name.md)

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/codegen/index.d.ts:35

___

### object

▸ **object**(...`keyValues`): [`_Code`](verida_client_ts._internal_._Code.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...keyValues` | [`string` \| [`Name`](verida_client_ts._internal_.Name.md), `string` \| [`SafeExpr`](../modules/verida_client_ts._internal_.md#safeexpr)][] |

#### Returns

[`_Code`](verida_client_ts._internal_._Code.md)

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/codegen/index.d.ts:48

___

### optimize

▸ **optimize**(`n?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `n?` | `number` |

#### Returns

`void`

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/codegen/index.d.ts:68

___

### return

▸ **return**(`value`): [`CodeGen`](verida_client_ts._internal_.CodeGen.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | ``null`` \| `number` \| `boolean` \| [`Name`](verida_client_ts._internal_.Name.md) \| [`_Code`](verida_client_ts._internal_._Code.md) \| () => `void` |

#### Returns

[`CodeGen`](verida_client_ts._internal_.CodeGen.md)

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/codegen/index.d.ts:61

___

### scopeCode

▸ **scopeCode**(): [`Code`](../modules/verida_client_ts._internal_.md#code)

#### Returns

[`Code`](../modules/verida_client_ts._internal_.md#code)

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/codegen/index.d.ts:40

___

### scopeName

▸ **scopeName**(`prefix`): [`ValueScopeName`](verida_client_ts._internal_.ValueScopeName.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `prefix` | `string` |

#### Returns

[`ValueScopeName`](verida_client_ts._internal_.ValueScopeName.md)

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/codegen/index.d.ts:36

___

### scopeRefs

▸ **scopeRefs**(`scopeName`): [`Code`](../modules/verida_client_ts._internal_.md#code)

#### Parameters

| Name | Type |
| :------ | :------ |
| `scopeName` | [`Name`](verida_client_ts._internal_.Name.md) |

#### Returns

[`Code`](../modules/verida_client_ts._internal_.md#code)

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/codegen/index.d.ts:39

___

### scopeValue

▸ **scopeValue**(`prefixOrName`, `value`): [`Name`](verida_client_ts._internal_.Name.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `prefixOrName` | `string` \| [`ValueScopeName`](verida_client_ts._internal_.ValueScopeName.md) |
| `value` | [`NameValue`](../interfaces/verida_client_ts._internal_.NameValue.md) |

#### Returns

[`Name`](verida_client_ts._internal_.Name.md)

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/codegen/index.d.ts:37

___

### throw

▸ **throw**(`error`): [`CodeGen`](verida_client_ts._internal_.CodeGen.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | [`Code`](../modules/verida_client_ts._internal_.md#code) |

#### Returns

[`CodeGen`](verida_client_ts._internal_.CodeGen.md)

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/codegen/index.d.ts:63

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/codegen/index.d.ts:34

___

### try

▸ **try**(`tryBody`, `catchCode?`, `finallyCode?`): [`CodeGen`](verida_client_ts._internal_.CodeGen.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tryBody` | [`Block`](../modules/verida_client_ts._internal_.md#block) |
| `catchCode?` | (`e`: [`Name`](verida_client_ts._internal_.Name.md)) => `void` |
| `finallyCode?` | [`Block`](../modules/verida_client_ts._internal_.md#block) |

#### Returns

[`CodeGen`](verida_client_ts._internal_.CodeGen.md)

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/codegen/index.d.ts:62

___

### var

▸ **var**(`nameOrPrefix`, `rhs?`, `_constant?`): [`Name`](verida_client_ts._internal_.Name.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrPrefix` | `string` \| [`Name`](verida_client_ts._internal_.Name.md) |
| `rhs?` | [`SafeExpr`](../modules/verida_client_ts._internal_.md#safeexpr) |
| `_constant?` | `boolean` |

#### Returns

[`Name`](verida_client_ts._internal_.Name.md)

#### Defined in

packages/client-ts/node_modules/ajv/dist/compile/codegen/index.d.ts:44
