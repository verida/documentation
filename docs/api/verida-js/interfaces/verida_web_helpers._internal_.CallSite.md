[root](../README.md) / [Modules](../modules.md) / [@verida/web-helpers](../modules/verida_web_helpers.md) / [<internal\>](../modules/verida_web_helpers._internal_.md) / CallSite

# Interface: CallSite

[@verida/web-helpers](../modules/verida_web_helpers.md).[<internal\>](../modules/verida_web_helpers._internal_.md).CallSite

## Table of contents

### Methods

- [getColumnNumber](verida_web_helpers._internal_.CallSite.md#getcolumnnumber)
- [getEvalOrigin](verida_web_helpers._internal_.CallSite.md#getevalorigin)
- [getFileName](verida_web_helpers._internal_.CallSite.md#getfilename)
- [getFunction](verida_web_helpers._internal_.CallSite.md#getfunction)
- [getFunctionName](verida_web_helpers._internal_.CallSite.md#getfunctionname)
- [getLineNumber](verida_web_helpers._internal_.CallSite.md#getlinenumber)
- [getMethodName](verida_web_helpers._internal_.CallSite.md#getmethodname)
- [getThis](verida_web_helpers._internal_.CallSite.md#getthis)
- [getTypeName](verida_web_helpers._internal_.CallSite.md#gettypename)
- [isConstructor](verida_web_helpers._internal_.CallSite.md#isconstructor)
- [isEval](verida_web_helpers._internal_.CallSite.md#iseval)
- [isNative](verida_web_helpers._internal_.CallSite.md#isnative)
- [isToplevel](verida_web_helpers._internal_.CallSite.md#istoplevel)

## Methods

### getColumnNumber

▸ **getColumnNumber**(): ``null`` \| `number`

Current column number [if this function was defined in a script]

#### Returns

``null`` \| `number`

#### Defined in

node_modules/@types/node/globals.d.ts:154

___

### getEvalOrigin

▸ **getEvalOrigin**(): `undefined` \| `string`

A call site object representing the location where eval was called
[if this function was created using a call to eval]

#### Returns

`undefined` \| `string`

#### Defined in

node_modules/@types/node/globals.d.ts:160

___

### getFileName

▸ **getFileName**(): ``null`` \| `string`

Name of the script [if this function was defined in a script]

#### Returns

``null`` \| `string`

#### Defined in

node_modules/@types/node/globals.d.ts:144

___

### getFunction

▸ **getFunction**(): `undefined` \| `Function`

Current function

#### Returns

`undefined` \| `Function`

#### Defined in

node_modules/@types/node/globals.d.ts:126

___

### getFunctionName

▸ **getFunctionName**(): ``null`` \| `string`

Name of the current function, typically its name property.
If a name property is not available an attempt will be made to try
to infer a name from the function's context.

#### Returns

``null`` \| `string`

#### Defined in

node_modules/@types/node/globals.d.ts:133

___

### getLineNumber

▸ **getLineNumber**(): ``null`` \| `number`

Current line number [if this function was defined in a script]

#### Returns

``null`` \| `number`

#### Defined in

node_modules/@types/node/globals.d.ts:149

___

### getMethodName

▸ **getMethodName**(): ``null`` \| `string`

Name of the property [of "this" or one of its prototypes] that holds
the current function

#### Returns

``null`` \| `string`

#### Defined in

node_modules/@types/node/globals.d.ts:139

___

### getThis

▸ **getThis**(): `unknown`

Value of "this"

#### Returns

`unknown`

#### Defined in

node_modules/@types/node/globals.d.ts:113

___

### getTypeName

▸ **getTypeName**(): ``null`` \| `string`

Type of "this" as a string.
This is the name of the function stored in the constructor field of
"this", if available.  Otherwise the object's [[Class]] internal
property.

#### Returns

``null`` \| `string`

#### Defined in

node_modules/@types/node/globals.d.ts:121

___

### isConstructor

▸ **isConstructor**(): `boolean`

Is this a constructor call?

#### Returns

`boolean`

#### Defined in

node_modules/@types/node/globals.d.ts:180

___

### isEval

▸ **isEval**(): `boolean`

Does this call take place in code defined by a call to eval?

#### Returns

`boolean`

#### Defined in

node_modules/@types/node/globals.d.ts:170

___

### isNative

▸ **isNative**(): `boolean`

Is this call in native V8 code?

#### Returns

`boolean`

#### Defined in

node_modules/@types/node/globals.d.ts:175

___

### isToplevel

▸ **isToplevel**(): `boolean`

Is this a toplevel invocation, that is, is "this" the global object?

#### Returns

`boolean`

#### Defined in

node_modules/@types/node/globals.d.ts:165
