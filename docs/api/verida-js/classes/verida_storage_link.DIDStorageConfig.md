[root](../README.md) / [Modules](../modules.md) / [@verida/storage-link](../modules/verida_storage_link.md) / DIDStorageConfig

# Class: DIDStorageConfig

[@verida/storage-link](../modules/verida_storage_link.md).DIDStorageConfig

## Table of contents

### Constructors

- [constructor](verida_storage_link.DIDStorageConfig.md#constructor)

### Methods

- [generate](verida_storage_link.DIDStorageConfig.md#generate)

## Constructors

### constructor

• **new DIDStorageConfig**()

## Methods

### generate

▸ `Static` **generate**(`account`, `contextName`, `servicesConfig`): `Promise`<[`SecureContextConfig`](../interfaces/verida_storage_link._internal_.SecureContextConfig.md)\>

Generate a storage link for an existing DID

**`todo:`** Update `account` to specify `AccountInterface` (once moved into its own package)

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `any` |
| `contextName` | `string` |
| `servicesConfig` | [`SecureContextServices`](../interfaces/verida_storage_link._internal_.SecureContextServices.md) |

#### Returns

`Promise`<[`SecureContextConfig`](../interfaces/verida_storage_link._internal_.SecureContextConfig.md)\>

#### Defined in

[packages/storage-link/src/did-storage-config.ts:13](https://github.com/verida/verida-js/blob/5040472/packages/storage-link/src/did-storage-config.ts#L13)
