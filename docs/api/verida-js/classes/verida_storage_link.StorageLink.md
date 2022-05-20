[root](../README.md) / [Modules](../modules.md) / [@verida/storage-link](../modules/verida_storage_link.md) / StorageLink

# Class: StorageLink

[@verida/storage-link](../modules/verida_storage_link.md).StorageLink

Class representing the link between a DID and Storage context

## Table of contents

### Constructors

- [constructor](verida_storage_link.StorageLink.md#constructor)

### Methods

- [\_findHash](verida_storage_link.StorageLink.md#_findhash)
- [buildSecureContexts](verida_storage_link.StorageLink.md#buildsecurecontexts)
- [getLink](verida_storage_link.StorageLink.md#getlink)
- [getLinks](verida_storage_link.StorageLink.md#getlinks)
- [setContextService](verida_storage_link.StorageLink.md#setcontextservice)
- [setLink](verida_storage_link.StorageLink.md#setlink)
- [standardizeUrl](verida_storage_link.StorageLink.md#standardizeurl)
- [unlink](verida_storage_link.StorageLink.md#unlink)

## Constructors

### constructor

• **new StorageLink**()

## Methods

### \_findHash

▸ `Static` **_findHash**(`contexts`, `hash`): `undefined` \| [`SecureContextConfig`](../interfaces/verida_storage_link.Interfaces.SecureContextConfig.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `contexts` | `any`[] |
| `hash` | `string` |

#### Returns

`undefined` \| [`SecureContextConfig`](../interfaces/verida_storage_link.Interfaces.SecureContextConfig.md)

#### Defined in

[packages/storage-link/src/storage-link.ts:130](https://github.com/verida/verida-js/blob/039856c/packages/storage-link/src/storage-link.ts#L130)

___

### buildSecureContexts

▸ `Static` **buildSecureContexts**(`didDocument`): [`SecureContextConfig`](../interfaces/verida_storage_link.Interfaces.SecureContextConfig.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `didDocument` | [`default`](verida_storage_link._internal_.default-1.md) |

#### Returns

[`SecureContextConfig`](../interfaces/verida_storage_link.Interfaces.SecureContextConfig.md)[]

#### Defined in

[packages/storage-link/src/storage-link.ts:138](https://github.com/verida/verida-js/blob/039856c/packages/storage-link/src/storage-link.ts#L138)

___

### getLink

▸ `Static` **getLink**(`didClient`, `did`, `context`, `contextIsName?`): `Promise`<`undefined` \| [`SecureContextConfig`](../interfaces/verida_storage_link.Interfaces.SecureContextConfig.md)\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `didClient` | [`default`](verida_storage_link._internal_.default.md) | `undefined` |
| `did` | `string` | `undefined` |
| `context` | `string` | `undefined` |
| `contextIsName` | `boolean` | `true` |

#### Returns

`Promise`<`undefined` \| [`SecureContextConfig`](../interfaces/verida_storage_link.Interfaces.SecureContextConfig.md)\>

SecureStorageContextConfig | undefined (if not found)

#### Defined in

[packages/storage-link/src/storage-link.ts:32](https://github.com/verida/verida-js/blob/039856c/packages/storage-link/src/storage-link.ts#L32)

___

### getLinks

▸ `Static` **getLinks**(`didClient`, `did`): `Promise`<[`SecureContextConfig`](../interfaces/verida_storage_link.Interfaces.SecureContextConfig.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `didClient` | [`default`](verida_storage_link._internal_.default.md) |
| `did` | `string` |

#### Returns

`Promise`<[`SecureContextConfig`](../interfaces/verida_storage_link.Interfaces.SecureContextConfig.md)[]\>

#### Defined in

[packages/storage-link/src/storage-link.ts:12](https://github.com/verida/verida-js/blob/039856c/packages/storage-link/src/storage-link.ts#L12)

___

### setContextService

▸ `Static` **setContextService**(`didClient`, `contextName`, `endpointType`, `serverType`, `endpointUri`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `didClient` | [`default`](verida_storage_link._internal_.default.md) |
| `contextName` | `string` |
| `endpointType` | [`EndpointType`](../enums/verida_storage_link._internal_.EndpointType.md) |
| `serverType` | `string` |
| `endpointUri` | `string` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[packages/storage-link/src/storage-link.ts:90](https://github.com/verida/verida-js/blob/039856c/packages/storage-link/src/storage-link.ts#L90)

___

### setLink

▸ `Static` **setLink**(`didClient`, `storageConfig`): `Promise`<`boolean`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `didClient` | [`default`](verida_storage_link._internal_.default.md) |  |
| `storageConfig` | [`SecureContextConfig`](../interfaces/verida_storage_link.Interfaces.SecureContextConfig.md) | (Must have .id as the contextName) |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[packages/storage-link/src/storage-link.ts:49](https://github.com/verida/verida-js/blob/039856c/packages/storage-link/src/storage-link.ts#L49)

___

### standardizeUrl

▸ `Static` **standardizeUrl**(`url`): `string`

Ensure the URL has a trailing slash

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

`string`

#### Defined in

[packages/storage-link/src/storage-link.ts:231](https://github.com/verida/verida-js/blob/039856c/packages/storage-link/src/storage-link.ts#L231)

___

### unlink

▸ `Static` **unlink**(`didClient`, `contextName`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `didClient` | [`default`](verida_storage_link._internal_.default.md) |
| `contextName` | `string` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[packages/storage-link/src/storage-link.ts:111](https://github.com/verida/verida-js/blob/039856c/packages/storage-link/src/storage-link.ts#L111)
