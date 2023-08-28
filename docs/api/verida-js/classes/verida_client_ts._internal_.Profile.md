[root](../README.md) / [Modules](../modules.md) / [@verida/client-ts](../modules/verida_client_ts.md) / [<internal\>](../modules/verida_client_ts._internal_.md) / Profile

# Class: Profile

[@verida/client-ts](../modules/verida_client_ts.md).[<internal\>](../modules/verida_client_ts._internal_.md).Profile

## Hierarchy

- [`EventEmitter`](../modules/verida_client_ts._internal_.md#eventemitter)

  ↳ **`Profile`**

## Implements

- [`IProfile`](../interfaces/verida_client_ts._internal_.IProfile.md)

## Table of contents

### Constructors

- [constructor](verida_client_ts._internal_.Profile.md#constructor)

### Properties

- [context](verida_client_ts._internal_.Profile.md#context)
- [did](verida_client_ts._internal_.Profile.md#did)
- [errors](verida_client_ts._internal_.Profile.md#errors)
- [isPrivate](verida_client_ts._internal_.Profile.md#isprivate)
- [profileName](verida_client_ts._internal_.Profile.md#profilename)
- [store](verida_client_ts._internal_.Profile.md#store)
- [writeAccess](verida_client_ts._internal_.Profile.md#writeaccess)

### Methods

- [delete](verida_client_ts._internal_.Profile.md#delete)
- [get](verida_client_ts._internal_.Profile.md#get)
- [getMany](verida_client_ts._internal_.Profile.md#getmany)
- [getRecord](verida_client_ts._internal_.Profile.md#getrecord)
- [init](verida_client_ts._internal_.Profile.md#init)
- [listen](verida_client_ts._internal_.Profile.md#listen)
- [saveRecord](verida_client_ts._internal_.Profile.md#saverecord)
- [set](verida_client_ts._internal_.Profile.md#set)
- [setMany](verida_client_ts._internal_.Profile.md#setmany)

## Constructors

### constructor

• **new Profile**(`context`, `did`, `profileName`, `writeAccess`, `isPrivate?`)

Create a new user profile.

**Do not instantiate directly.**

Access the current user's profile via {@link App.profile}

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `context` | [`Context`](verida_client_ts.Context.md) | `undefined` |
| `did` | `string` | `undefined` |
| `profileName` | `string` | `undefined` |
| `writeAccess` | `boolean` | `undefined` |
| `isPrivate` | `boolean` | `false` |

#### Overrides

EventEmitter.constructor

#### Defined in

[packages/client-ts/src/context/profiles/profile.ts:40](https://github.com/verida/verida-js/blob/a690f60/packages/client-ts/src/context/profiles/profile.ts#L40)

## Properties

### context

• `Private` **context**: [`Context`](verida_client_ts.Context.md)

#### Defined in

[packages/client-ts/src/context/profiles/profile.ts:21](https://github.com/verida/verida-js/blob/a690f60/packages/client-ts/src/context/profiles/profile.ts#L21)

___

### did

• `Private` **did**: `string`

#### Defined in

[packages/client-ts/src/context/profiles/profile.ts:22](https://github.com/verida/verida-js/blob/a690f60/packages/client-ts/src/context/profiles/profile.ts#L22)

___

### errors

• **errors**: `object`

#### Defined in

[packages/client-ts/src/context/profiles/profile.ts:30](https://github.com/verida/verida-js/blob/a690f60/packages/client-ts/src/context/profiles/profile.ts#L30)

___

### isPrivate

• `Private` **isPrivate**: `boolean`

#### Defined in

[packages/client-ts/src/context/profiles/profile.ts:28](https://github.com/verida/verida-js/blob/a690f60/packages/client-ts/src/context/profiles/profile.ts#L28)

___

### profileName

• `Private` **profileName**: `string`

#### Defined in

[packages/client-ts/src/context/profiles/profile.ts:24](https://github.com/verida/verida-js/blob/a690f60/packages/client-ts/src/context/profiles/profile.ts#L24)

___

### store

• `Private` `Optional` **store**: [`Datastore`](verida_client_ts._internal_.Datastore.md)

#### Defined in

[packages/client-ts/src/context/profiles/profile.ts:25](https://github.com/verida/verida-js/blob/a690f60/packages/client-ts/src/context/profiles/profile.ts#L25)

___

### writeAccess

• `Private` **writeAccess**: `boolean`

#### Defined in

[packages/client-ts/src/context/profiles/profile.ts:27](https://github.com/verida/verida-js/blob/a690f60/packages/client-ts/src/context/profiles/profile.ts#L27)

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

[IProfile](../interfaces/verida_client_ts._internal_.IProfile.md).[delete](../interfaces/verida_client_ts._internal_.IProfile.md#delete)

#### Defined in

[packages/client-ts/src/context/profiles/profile.ts:86](https://github.com/verida/verida-js/blob/a690f60/packages/client-ts/src/context/profiles/profile.ts#L86)

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

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `key` | `string` | `undefined` | Profile key to get (ie: `email`) |
| `options?` | `any` | `undefined` |  |
| `extended` | `boolean` | `false` |  |

#### Returns

`Promise`<`any`\>

Database record for this profile key. Object has keys [`key`, `value`, `_id`, `_rev`].

#### Implementation of

[IProfile](../interfaces/verida_client_ts._internal_.IProfile.md).[get](../interfaces/verida_client_ts._internal_.IProfile.md#get)

#### Defined in

[packages/client-ts/src/context/profiles/profile.ts:70](https://github.com/verida/verida-js/blob/a690f60/packages/client-ts/src/context/profiles/profile.ts#L70)

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

[IProfile](../interfaces/verida_client_ts._internal_.IProfile.md).[getMany](../interfaces/verida_client_ts._internal_.IProfile.md#getmany)

#### Defined in

[packages/client-ts/src/context/profiles/profile.ts:102](https://github.com/verida/verida-js/blob/a690f60/packages/client-ts/src/context/profiles/profile.ts#L102)

___

### getRecord

▸ `Private` **getRecord**(): `Promise`<[`ProfileDocument`](../interfaces/verida_client_ts._internal_.ProfileDocument.md)\>

#### Returns

`Promise`<[`ProfileDocument`](../interfaces/verida_client_ts._internal_.ProfileDocument.md)\>

#### Defined in

[packages/client-ts/src/context/profiles/profile.ts:162](https://github.com/verida/verida-js/blob/a690f60/packages/client-ts/src/context/profiles/profile.ts#L162)

___

### init

▸ `Private` **init**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/client-ts/src/context/profiles/profile.ts:196](https://github.com/verida/verida-js/blob/a690f60/packages/client-ts/src/context/profiles/profile.ts#L196)

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

[IProfile](../interfaces/verida_client_ts._internal_.IProfile.md).[listen](../interfaces/verida_client_ts._internal_.IProfile.md#listen)

#### Defined in

[packages/client-ts/src/context/profiles/profile.ts:148](https://github.com/verida/verida-js/blob/a690f60/packages/client-ts/src/context/profiles/profile.ts#L148)

___

### saveRecord

▸ `Private` **saveRecord**(`record`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `record` | `object` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[packages/client-ts/src/context/profiles/profile.ts:185](https://github.com/verida/verida-js/blob/a690f60/packages/client-ts/src/context/profiles/profile.ts#L185)

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

[IProfile](../interfaces/verida_client_ts._internal_.IProfile.md).[set](../interfaces/verida_client_ts._internal_.IProfile.md#set)

#### Defined in

[packages/client-ts/src/context/profiles/profile.ts:123](https://github.com/verida/verida-js/blob/a690f60/packages/client-ts/src/context/profiles/profile.ts#L123)

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

[IProfile](../interfaces/verida_client_ts._internal_.IProfile.md).[setMany](../interfaces/verida_client_ts._internal_.IProfile.md#setmany)

#### Defined in

[packages/client-ts/src/context/profiles/profile.ts:134](https://github.com/verida/verida-js/blob/a690f60/packages/client-ts/src/context/profiles/profile.ts#L134)
