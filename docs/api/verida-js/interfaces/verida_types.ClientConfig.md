[root](../README.md) / [Modules](../modules.md) / [@verida/types](../modules/verida_types.md) / ClientConfig

# Interface: ClientConfig

[@verida/types](../modules/verida_types.md).ClientConfig

Interface for ClientConfig

## Table of contents

### Properties

- [didClientConfig](verida_types.ClientConfig.md#didclientconfig)
- [environment](verida_types.ClientConfig.md#environment)
- [schemaPaths](verida_types.ClientConfig.md#schemapaths)
- [vaultAppName](verida_types.ClientConfig.md#vaultappname)

## Properties

### didClientConfig

• `Optional` **didClientConfig**: [`DIDClientConfig`](verida_types.DIDClientConfig.md)

#### Defined in

[packages/types/src/NetworkInterfaces.ts:46](https://github.com/verida/verida-js/blob/a690f60/packages/types/src/NetworkInterfaces.ts#L46)

___

### environment

• `Optional` **environment**: [`EnvironmentType`](../enums/verida_types.EnvironmentType.md)

Environment to load by default.

Environment configuration can still be overridden by config items.

#### Defined in

[packages/types/src/NetworkInterfaces.ts:44](https://github.com/verida/verida-js/blob/a690f60/packages/types/src/NetworkInterfaces.ts#L44)

___

### schemaPaths

• `Optional` **schemaPaths**: `object`

Specify custom schema paths (typically for local development).

#### Defined in

[packages/types/src/NetworkInterfaces.ts:51](https://github.com/verida/verida-js/blob/a690f60/packages/types/src/NetworkInterfaces.ts#L51)

___

### vaultAppName

• `Optional` **vaultAppName**: `string`

Specify client's App name.

#### Defined in

[packages/types/src/NetworkInterfaces.ts:37](https://github.com/verida/verida-js/blob/a690f60/packages/types/src/NetworkInterfaces.ts#L37)
