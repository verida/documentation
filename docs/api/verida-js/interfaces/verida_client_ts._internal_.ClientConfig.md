[root](../README.md) / [Modules](../modules.md) / [@verida/client-ts](../modules/verida_client_ts.md) / [<internal\>](../modules/verida_client_ts._internal_.md) / ClientConfig

# Interface: ClientConfig

[@verida/client-ts](../modules/verida_client_ts.md).[<internal\>](../modules/verida_client_ts._internal_.md).ClientConfig

Interface for ClientConfig

## Table of contents

### Properties

- [didClientConfig](verida_client_ts._internal_.ClientConfig.md#didclientconfig)
- [environment](verida_client_ts._internal_.ClientConfig.md#environment)
- [schemaPaths](verida_client_ts._internal_.ClientConfig.md#schemapaths)
- [vaultAppName](verida_client_ts._internal_.ClientConfig.md#vaultappname)

## Properties

### didClientConfig

• `Optional` **didClientConfig**: [`DIDClientConfig`](verida_client_ts._internal_.DIDClientConfig.md)

#### Defined in

packages/types/dist/NetworkInterfaces.d.ts:39

___

### environment

• `Optional` **environment**: [`EnvironmentType`](../enums/verida_client_ts._internal_.EnvironmentType.md)

Environment to load by default.

Environment configuration can still be overridden by config items.

#### Defined in

packages/types/dist/NetworkInterfaces.d.ts:38

___

### schemaPaths

• `Optional` **schemaPaths**: `object`

Specify custom schema paths (typically for local development).

#### Defined in

packages/types/dist/NetworkInterfaces.d.ts:43

___

### vaultAppName

• `Optional` **vaultAppName**: `string`

Specify client's App name.

#### Defined in

packages/types/dist/NetworkInterfaces.d.ts:32
