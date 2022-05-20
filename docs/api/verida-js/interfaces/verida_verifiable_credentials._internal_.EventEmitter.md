[root](../README.md) / [Modules](../modules.md) / [@verida/verifiable-credentials](../modules/verida_verifiable_credentials.md) / [<internal\>](../modules/verida_verifiable_credentials._internal_.md) / EventEmitter

# Interface: EventEmitter

[@verida/verifiable-credentials](../modules/verida_verifiable_credentials.md).[<internal\>](../modules/verida_verifiable_credentials._internal_.md).EventEmitter

## Table of contents

### Methods

- [addListener](verida_verifiable_credentials._internal_.EventEmitter.md#addlistener)
- [emit](verida_verifiable_credentials._internal_.EventEmitter.md#emit)
- [eventNames](verida_verifiable_credentials._internal_.EventEmitter.md#eventnames)
- [getMaxListeners](verida_verifiable_credentials._internal_.EventEmitter.md#getmaxlisteners)
- [listenerCount](verida_verifiable_credentials._internal_.EventEmitter.md#listenercount)
- [listeners](verida_verifiable_credentials._internal_.EventEmitter.md#listeners)
- [on](verida_verifiable_credentials._internal_.EventEmitter.md#on)
- [once](verida_verifiable_credentials._internal_.EventEmitter.md#once)
- [prependListener](verida_verifiable_credentials._internal_.EventEmitter.md#prependlistener)
- [prependOnceListener](verida_verifiable_credentials._internal_.EventEmitter.md#prependoncelistener)
- [removeAllListeners](verida_verifiable_credentials._internal_.EventEmitter.md#removealllisteners)
- [removeListener](verida_verifiable_credentials._internal_.EventEmitter.md#removelistener)
- [setMaxListeners](verida_verifiable_credentials._internal_.EventEmitter.md#setmaxlisteners)

## Methods

### addListener

▸ **addListener**(`event`, `listener`): [`EventEmitter`](verida_verifiable_credentials._internal_.EventEmitter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | `Function` |

#### Returns

[`EventEmitter`](verida_verifiable_credentials._internal_.EventEmitter.md)

#### Defined in

node_modules/@types/pouchdb-core/index.d.ts:76

___

### emit

▸ **emit**(`event`, ...`args`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `...args` | `any`[] |

#### Returns

`boolean`

#### Defined in

node_modules/@types/pouchdb-core/index.d.ts:84

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

#### Returns

(`string` \| `symbol`)[]

#### Defined in

node_modules/@types/pouchdb-core/index.d.ts:88

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

#### Returns

`number`

#### Defined in

node_modules/@types/pouchdb-core/index.d.ts:82

___

### listenerCount

▸ **listenerCount**(`type`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `symbol` |

#### Returns

`number`

#### Defined in

node_modules/@types/pouchdb-core/index.d.ts:85

___

### listeners

▸ **listeners**(`event`): `Function`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Defined in

node_modules/@types/pouchdb-core/index.d.ts:83

___

### on

▸ **on**(`event`, `listener`): [`EventEmitter`](verida_verifiable_credentials._internal_.EventEmitter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | `Function` |

#### Returns

[`EventEmitter`](verida_verifiable_credentials._internal_.EventEmitter.md)

#### Defined in

node_modules/@types/pouchdb-core/index.d.ts:77

___

### once

▸ **once**(`event`, `listener`): [`EventEmitter`](verida_verifiable_credentials._internal_.EventEmitter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | `Function` |

#### Returns

[`EventEmitter`](verida_verifiable_credentials._internal_.EventEmitter.md)

#### Defined in

node_modules/@types/pouchdb-core/index.d.ts:78

___

### prependListener

▸ **prependListener**(`event`, `listener`): [`EventEmitter`](verida_verifiable_credentials._internal_.EventEmitter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | `Function` |

#### Returns

[`EventEmitter`](verida_verifiable_credentials._internal_.EventEmitter.md)

#### Defined in

node_modules/@types/pouchdb-core/index.d.ts:86

___

### prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): [`EventEmitter`](verida_verifiable_credentials._internal_.EventEmitter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | `Function` |

#### Returns

[`EventEmitter`](verida_verifiable_credentials._internal_.EventEmitter.md)

#### Defined in

node_modules/@types/pouchdb-core/index.d.ts:87

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`EventEmitter`](verida_verifiable_credentials._internal_.EventEmitter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`EventEmitter`](verida_verifiable_credentials._internal_.EventEmitter.md)

#### Defined in

node_modules/@types/pouchdb-core/index.d.ts:80

___

### removeListener

▸ **removeListener**(`event`, `listener`): [`EventEmitter`](verida_verifiable_credentials._internal_.EventEmitter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | `Function` |

#### Returns

[`EventEmitter`](verida_verifiable_credentials._internal_.EventEmitter.md)

#### Defined in

node_modules/@types/pouchdb-core/index.d.ts:79

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`EventEmitter`](verida_verifiable_credentials._internal_.EventEmitter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`EventEmitter`](verida_verifiable_credentials._internal_.EventEmitter.md)

#### Defined in

node_modules/@types/pouchdb-core/index.d.ts:81
