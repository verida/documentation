[root](../README.md) / [Modules](../modules.md) / [@verida/web-helpers](../modules/verida_web_helpers.md) / [<internal\>](../modules/verida_web_helpers._internal_.md) / Profile

# Class: Profile

[@verida/web-helpers](../modules/verida_web_helpers.md).[<internal\>](../modules/verida_web_helpers._internal_.md).Profile

## Hierarchy

- [`EventEmitter`](../modules/verida_web_helpers._internal_.md#eventemitter)

  ↳ **`Profile`**

## Implements

- [`IProfile`](../interfaces/verida_web_helpers._internal_.IProfile.md)

## Table of contents

### Constructors

- [constructor](verida_web_helpers._internal_.Profile.md#constructor)

### Properties

- [context](verida_web_helpers._internal_.Profile.md#context)
- [did](verida_web_helpers._internal_.Profile.md#did)
- [errors](verida_web_helpers._internal_.Profile.md#errors)
- [getRecord](verida_web_helpers._internal_.Profile.md#getrecord)
- [init](verida_web_helpers._internal_.Profile.md#init)
- [isPrivate](verida_web_helpers._internal_.Profile.md#isprivate)
- [profileName](verida_web_helpers._internal_.Profile.md#profilename)
- [saveRecord](verida_web_helpers._internal_.Profile.md#saverecord)
- [store](verida_web_helpers._internal_.Profile.md#store)
- [writeAccess](verida_web_helpers._internal_.Profile.md#writeaccess)

### Methods

- [delete](verida_web_helpers._internal_.Profile.md#delete)
- [get](verida_web_helpers._internal_.Profile.md#get)
- [getMany](verida_web_helpers._internal_.Profile.md#getmany)
- [listen](verida_web_helpers._internal_.Profile.md#listen)
- [set](verida_web_helpers._internal_.Profile.md#set)
- [setMany](verida_web_helpers._internal_.Profile.md#setmany)
- [verifyWebsite](verida_web_helpers._internal_.Profile.md#verifywebsite)

## Constructors

### constructor

• **new Profile**(`context`, `did`, `profileName`, `writeAccess`, `isPrivate?`)

Create a new user profile.

**Do not instantiate directly.**

Access the current user's profile via {@link App.profile}

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`Context`](verida_web_helpers._internal_.Context.md) |
| `did` | `string` |
| `profileName` | `string` |
| `writeAccess` | `boolean` |
| `isPrivate?` | `boolean` |

#### Overrides

EventEmitter.constructor

#### Defined in

packages/client-ts/dist/context/profiles/profile.d.ts:29

## Properties

### context

• `Private` **context**: `any`

#### Defined in

packages/client-ts/dist/context/profiles/profile.d.ts:13

___

### did

• `Private` **did**: `any`

#### Defined in

packages/client-ts/dist/context/profiles/profile.d.ts:14

___

### errors

• **errors**: `object`

#### Defined in

packages/client-ts/dist/context/profiles/profile.d.ts:19

___

### getRecord

• `Private` **getRecord**: `any`

#### Defined in

packages/client-ts/dist/context/profiles/profile.d.ts:87

___

### init

• `Private` **init**: `any`

#### Defined in

packages/client-ts/dist/context/profiles/profile.d.ts:89

___

### isPrivate

• `Private` **isPrivate**: `any`

#### Defined in

packages/client-ts/dist/context/profiles/profile.d.ts:18

___

### profileName

• `Private` **profileName**: `any`

#### Defined in

packages/client-ts/dist/context/profiles/profile.d.ts:15

___

### saveRecord

• `Private` **saveRecord**: `any`

#### Defined in

packages/client-ts/dist/context/profiles/profile.d.ts:88

___

### store

• `Private` `Optional` **store**: `any`

#### Defined in

packages/client-ts/dist/context/profiles/profile.d.ts:16

___

### writeAccess

• `Private` **writeAccess**: `any`

#### Defined in

packages/client-ts/dist/context/profiles/profile.d.ts:17

## Methods

### delete

▸ **delete**(`key`): `Promise`<`boolean`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | Profile key to delete (ie: `email`) |

#### Returns

`Promise`<`boolean`\>

Boolean indicating if the delete was successful

#### Implementation of

[IProfile](../interfaces/verida_web_helpers._internal_.IProfile.md).[delete](../interfaces/verida_web_helpers._internal_.IProfile.md#delete)

#### Defined in

packages/client-ts/dist/context/profiles/profile.d.ts:50

___

### get

▸ **get**(`key`, `options?`, `extended?`): `Promise`<`any`\>

Get a profile value by key

**`example`**
let emailDoc = app.wallet.profile.get('email');

// key = email
// value = john@doe.com
console.log(emailDoc.key, emailDoc.value);

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | Profile key to get (ie: `email`) |
| `options?` | `any` |  |
| `extended?` | `boolean` |  |

#### Returns

`Promise`<`any`\>

Database record for this profile key. Object has keys [`key`, `value`, `_id`, `_rev`].

#### Implementation of

[IProfile](../interfaces/verida_web_helpers._internal_.IProfile.md).[get](../interfaces/verida_web_helpers._internal_.IProfile.md#get)

#### Defined in

packages/client-ts/dist/context/profiles/profile.d.ts:44

___

### getMany

▸ **getMany**(`filter`, `options`): `Promise`<`any`\>

Get many profile values.

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter` | `any` |
| `options` | `any` |

#### Returns

`Promise`<`any`\>

#### Implementation of

[IProfile](../interfaces/verida_web_helpers._internal_.IProfile.md).[getMany](../interfaces/verida_web_helpers._internal_.IProfile.md#getmany)

#### Defined in

packages/client-ts/dist/context/profiles/profile.d.ts:57

___

### listen

▸ **listen**(`callback`): `Promise`<`any`\>

Listen for changes to the public profile

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | `any` |

#### Returns

`Promise`<`any`\>

#### Implementation of

[IProfile](../interfaces/verida_web_helpers._internal_.IProfile.md).[listen](../interfaces/verida_web_helpers._internal_.IProfile.md#listen)

#### Defined in

packages/client-ts/dist/context/profiles/profile.d.ts:85

___

### set

▸ **set**(`key`, `value`): `Promise`<`any`\>

Set a profile value by key

**`example`**
// Set a profile value by key
app.wallet.profile.set('name', 'John');

// Update a profile value from an existing document
let emailDoc = app.wallet.profile.get('email');
app.wallet.profile.set(emailDoc, 'john@doe.com');

// Update a profile profile by key
app.wallet.profile.set('email', 'john@doe.com');

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | Profile key to set (ie: `email`) |
| `value` | `any` | Value to save |

#### Returns

`Promise`<`any`\>

Boolean indicating if the save was successful

#### Implementation of

[IProfile](../interfaces/verida_web_helpers._internal_.IProfile.md).[set](../interfaces/verida_web_helpers._internal_.IProfile.md#set)

#### Defined in

packages/client-ts/dist/context/profiles/profile.d.ts:75

___

### setMany

▸ **setMany**(`data`): `Promise`<`any`\>

Set many profile key / values at once

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`Promise`<`any`\>

#### Implementation of

[IProfile](../interfaces/verida_web_helpers._internal_.IProfile.md).[setMany](../interfaces/verida_web_helpers._internal_.IProfile.md#setmany)

#### Defined in

packages/client-ts/dist/context/profiles/profile.d.ts:81

___

### verifyWebsite

▸ **verifyWebsite**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

#### Defined in

packages/client-ts/dist/context/profiles/profile.d.ts:86
