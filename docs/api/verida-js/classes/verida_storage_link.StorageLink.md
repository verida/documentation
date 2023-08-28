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
- [standardizeUrls](verida_storage_link.StorageLink.md#standardizeurls)
- [unlink](verida_storage_link.StorageLink.md#unlink)

## Constructors

### constructor

• **new StorageLink**()

## Methods

### \_findHash

▸ `Static` **_findHash**(`contexts`, `hash`): `undefined` \| [`SecureContextConfig`](../interfaces/verida_storage_link._internal_.SecureContextConfig.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `contexts` | `any`[] |
| `hash` | `string` |

#### Returns

`undefined` \| [`SecureContextConfig`](../interfaces/verida_storage_link._internal_.SecureContextConfig.md)

#### Defined in

[packages/storage-link/src/storage-link.ts:135](https://github.com/verida/verida-js/blob/a690f60/packages/storage-link/src/storage-link.ts#L135)

___

### buildSecureContexts

▸ `Static` **buildSecureContexts**(`didDocument`): [`SecureContextConfig`](../interfaces/verida_storage_link._internal_.SecureContextConfig.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `didDocument` | [`default`](verida_storage_link._internal_.default.md) |

#### Returns

[`SecureContextConfig`](../interfaces/verida_storage_link._internal_.SecureContextConfig.md)[]

#### Defined in

[packages/storage-link/src/storage-link.ts:143](https://github.com/verida/verida-js/blob/a690f60/packages/storage-link/src/storage-link.ts#L143)

___

### getLink

▸ `Static` **getLink**(`didClient`, `did`, `context`, `contextIsName?`): `Promise`<`undefined` \| [`SecureContextConfig`](../interfaces/verida_storage_link._internal_.SecureContextConfig.md)\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `didClient` | [`DIDClient`](verida_storage_link._internal_.DIDClient.md) | `undefined` |
| `did` | `string` | `undefined` |
| `context` | `string` | `undefined` |
| `contextIsName` | `boolean` | `true` |

#### Returns

`Promise`<`undefined` \| [`SecureContextConfig`](../interfaces/verida_storage_link._internal_.SecureContextConfig.md)\>

SecureStorageContextConfig | undefined (if not found)

#### Defined in

[packages/storage-link/src/storage-link.ts:34](https://github.com/verida/verida-js/blob/a690f60/packages/storage-link/src/storage-link.ts#L34)

___

### getLinks

▸ `Static` **getLinks**(`didClient`, `did`): `Promise`<[`SecureContextConfig`](../interfaces/verida_storage_link._internal_.SecureContextConfig.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `didClient` | [`DIDClient`](verida_storage_link._internal_.DIDClient.md) |
| `did` | `string` |

#### Returns

`Promise`<[`SecureContextConfig`](../interfaces/verida_storage_link._internal_.SecureContextConfig.md)[]\>

#### Defined in

[packages/storage-link/src/storage-link.ts:13](https://github.com/verida/verida-js/blob/a690f60/packages/storage-link/src/storage-link.ts#L13)

___

### setContextService

▸ `Static` **setContextService**(`didClient`, `contextName`, `endpointType`, `serverType`, `endpointUris`): `Promise`<[`VdaDidEndpointResponses`](../modules/verida_storage_link._internal_.md#vdadidendpointresponses)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `didClient` | [`DIDClient`](verida_storage_link._internal_.DIDClient.md) |
| `contextName` | `string` |
| `endpointType` | [`SecureContextEndpointType`](../enums/verida_storage_link._internal_.SecureContextEndpointType.md) |
| `serverType` | `string` |
| `endpointUris` | `string`[] |

#### Returns

`Promise`<[`VdaDidEndpointResponses`](../modules/verida_storage_link._internal_.md#vdadidendpointresponses)\>

#### Defined in

[packages/storage-link/src/storage-link.ts:89](https://github.com/verida/verida-js/blob/a690f60/packages/storage-link/src/storage-link.ts#L89)

___

### setLink

▸ `Static` **setLink**(`didClient`, `storageConfig`, `keyring`, `privateKey`): `Promise`<[`VdaDidEndpointResponses`](../modules/verida_storage_link._internal_.md#vdadidendpointresponses)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `didClient` | [`DIDClient`](verida_storage_link._internal_.DIDClient.md) |  |
| `storageConfig` | [`SecureContextConfig`](../interfaces/verida_storage_link._internal_.SecureContextConfig.md) | (Must have .id as the contextName) |
| `keyring` | [`IKeyring`](../interfaces/verida_storage_link._internal_.IKeyring.md) | - |
| `privateKey` | `string` | - |

#### Returns

`Promise`<[`VdaDidEndpointResponses`](../modules/verida_storage_link._internal_.md#vdadidendpointresponses)\>

#### Defined in

[packages/storage-link/src/storage-link.ts:51](https://github.com/verida/verida-js/blob/a690f60/packages/storage-link/src/storage-link.ts#L51)

___

### standardizeUrls

▸ `Static` **standardizeUrls**(`endpoints`): [`ServiceEndpoint`](../modules/verida_storage_link._internal_.md#serviceendpoint)[]

Ensure the URL has a trailing slash and appropriate port set

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoints` | [`ServiceEndpoint`](../modules/verida_storage_link._internal_.md#serviceendpoint)[] |

#### Returns

[`ServiceEndpoint`](../modules/verida_storage_link._internal_.md#serviceendpoint)[]

#### Defined in

[packages/storage-link/src/storage-link.ts:235](https://github.com/verida/verida-js/blob/a690f60/packages/storage-link/src/storage-link.ts#L235)

___

### unlink

▸ `Static` **unlink**(`didClient`, `contextName`): `Promise`<`boolean` \| [`VdaDidEndpointResponses`](../modules/verida_storage_link._internal_.md#vdadidendpointresponses)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `didClient` | [`DIDClient`](verida_storage_link._internal_.DIDClient.md) |
| `contextName` | `string` |

#### Returns

`Promise`<`boolean` \| [`VdaDidEndpointResponses`](../modules/verida_storage_link._internal_.md#vdadidendpointresponses)\>

#### Defined in

[packages/storage-link/src/storage-link.ts:113](https://github.com/verida/verida-js/blob/a690f60/packages/storage-link/src/storage-link.ts#L113)
