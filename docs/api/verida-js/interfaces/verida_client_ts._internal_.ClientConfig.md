[root](../README.md) / [Modules](../modules.md) / [@verida/client-ts](../modules/verida_client_ts.md) / [<internal\>](../modules/verida_client_ts._internal_.md) / ClientConfig

# Interface: ClientConfig

[@verida/client-ts](../modules/verida_client_ts.md).[<internal\>](../modules/verida_client_ts._internal_.md).ClientConfig

Interface for ClientConfig

## Table of contents

### Properties

- [didServerUrl](verida_client_ts._internal_.ClientConfig.md#didserverurl)
- [environment](verida_client_ts._internal_.ClientConfig.md#environment)
- [schemaPaths](verida_client_ts._internal_.ClientConfig.md#schemapaths)
- [vaultAppName](verida_client_ts._internal_.ClientConfig.md#vaultappname)

## Properties

### didServerUrl

• `Optional` **didServerUrl**: `string`

URL of Verida DID Server node to use.

#### Defined in

[packages/client-ts/src/interfaces.ts:23](https://github.com/verida/verida-js/blob/039856c/packages/client-ts/src/interfaces.ts#L23)

___

### environment

• `Optional` **environment**: [`EnvironmentType`](../enums/verida_client_ts.EnvironmentType.md)

Environment to load by default.

Environment configuration can still be overriden by config items.

#### Defined in

[packages/client-ts/src/interfaces.ts:18](https://github.com/verida/verida-js/blob/039856c/packages/client-ts/src/interfaces.ts#L18)

___

### schemaPaths

• `Optional` **schemaPaths**: `object`

Specify custom schema paths (typicaly for local development).

#### Defined in

[packages/client-ts/src/interfaces.ts:28](https://github.com/verida/verida-js/blob/039856c/packages/client-ts/src/interfaces.ts#L28)

___

### vaultAppName

• `Optional` **vaultAppName**: `string`

Specify client's App name.

#### Defined in

[packages/client-ts/src/interfaces.ts:12](https://github.com/verida/verida-js/blob/039856c/packages/client-ts/src/interfaces.ts#L12)
