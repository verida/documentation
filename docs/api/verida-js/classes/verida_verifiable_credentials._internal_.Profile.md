[root](../README.md) / [Modules](../modules.md) / [@verida/verifiable-credentials](../modules/verida_verifiable_credentials.md) / [<internal\>](../modules/verida_verifiable_credentials._internal_.md) / Profile

# Class: Profile

[@verida/verifiable-credentials](../modules/verida_verifiable_credentials.md).[<internal\>](../modules/verida_verifiable_credentials._internal_.md).Profile

## Hierarchy

- [`EventEmitter`](../modules/verida_verifiable_credentials._internal_.md#eventemitter)

  ↳ **`Profile`**

## Table of contents

### Constructors

- [constructor](verida_verifiable_credentials._internal_.Profile.md#constructor)

### Properties

- [context](verida_verifiable_credentials._internal_.Profile.md#context)
- [did](verida_verifiable_credentials._internal_.Profile.md#did)
- [errors](verida_verifiable_credentials._internal_.Profile.md#errors)
- [getRecord](verida_verifiable_credentials._internal_.Profile.md#getrecord)
- [init](verida_verifiable_credentials._internal_.Profile.md#init)
- [isPrivate](verida_verifiable_credentials._internal_.Profile.md#isprivate)
- [profileName](verida_verifiable_credentials._internal_.Profile.md#profilename)
- [saveRecord](verida_verifiable_credentials._internal_.Profile.md#saverecord)
- [store](verida_verifiable_credentials._internal_.Profile.md#store)
- [writeAccess](verida_verifiable_credentials._internal_.Profile.md#writeaccess)

### Methods

- [delete](verida_verifiable_credentials._internal_.Profile.md#delete)
- [get](verida_verifiable_credentials._internal_.Profile.md#get)
- [getMany](verida_verifiable_credentials._internal_.Profile.md#getmany)
- [listen](verida_verifiable_credentials._internal_.Profile.md#listen)
- [set](verida_verifiable_credentials._internal_.Profile.md#set)
- [setMany](verida_verifiable_credentials._internal_.Profile.md#setmany)

## Constructors

### constructor

• **new Profile**(`context`, `did`, `profileName`, `writeAccess`, `isPrivate?`)

Create a new user profile.

**Do not instantiate directly.**

Access the current user's profile via {@link App.profile}

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`Context`](verida_verifiable_credentials._internal_.Context.md) |
| `did` | `string` |
| `profileName` | `string` |
| `writeAccess` | `boolean` |
| `isPrivate?` | `boolean` |

#### Overrides

EventEmitter.constructor

#### Defined in

packages/client-ts/dist/context/profiles/profile.d.ts:28

## Properties

### context

• `Private` **context**: `any`

#### Defined in

packages/client-ts/dist/context/profiles/profile.d.ts:12

___

### did

• `Private` **did**: `any`

#### Defined in

packages/client-ts/dist/context/profiles/profile.d.ts:13

___

### errors

• **errors**: `object`

#### Defined in

packages/client-ts/dist/context/profiles/profile.d.ts:18

___

### getRecord

• `Private` **getRecord**: `any`

#### Defined in

packages/client-ts/dist/context/profiles/profile.d.ts:85

___

### init

• `Private` **init**: `any`

#### Defined in

packages/client-ts/dist/context/profiles/profile.d.ts:87

___

### isPrivate

• `Private` **isPrivate**: `any`

#### Defined in

packages/client-ts/dist/context/profiles/profile.d.ts:17

___

### profileName

• `Private` **profileName**: `any`

#### Defined in

packages/client-ts/dist/context/profiles/profile.d.ts:14

___

### saveRecord

• `Private` **saveRecord**: `any`

#### Defined in

packages/client-ts/dist/context/profiles/profile.d.ts:86

___

### store

• `Private` `Optional` **store**: `any`

#### Defined in

packages/client-ts/dist/context/profiles/profile.d.ts:15

___

### writeAccess

• `Private` **writeAccess**: `any`

#### Defined in

packages/client-ts/dist/context/profiles/profile.d.ts:16

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

#### Defined in

packages/client-ts/dist/context/profiles/profile.d.ts:49

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

#### Defined in

packages/client-ts/dist/context/profiles/profile.d.ts:43

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

#### Defined in

packages/client-ts/dist/context/profiles/profile.d.ts:56

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

#### Defined in

packages/client-ts/dist/context/profiles/profile.d.ts:84

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

#### Defined in

packages/client-ts/dist/context/profiles/profile.d.ts:74

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

#### Defined in

packages/client-ts/dist/context/profiles/profile.d.ts:80
