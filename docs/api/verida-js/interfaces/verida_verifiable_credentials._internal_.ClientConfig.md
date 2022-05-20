[root](../README.md) / [Modules](../modules.md) / [@verida/verifiable-credentials](../modules/verida_verifiable_credentials.md) / [<internal\>](../modules/verida_verifiable_credentials._internal_.md) / ClientConfig

# Interface: ClientConfig

[@verida/verifiable-credentials](../modules/verida_verifiable_credentials.md).[<internal\>](../modules/verida_verifiable_credentials._internal_.md).ClientConfig

Interface for ClientConfig

## Table of contents

### Properties

- [didServerUrl](verida_verifiable_credentials._internal_.ClientConfig.md#didserverurl)
- [environment](verida_verifiable_credentials._internal_.ClientConfig.md#environment)
- [schemaPaths](verida_verifiable_credentials._internal_.ClientConfig.md#schemapaths)
- [vaultAppName](verida_verifiable_credentials._internal_.ClientConfig.md#vaultappname)

## Properties

### didServerUrl

• `Optional` **didServerUrl**: `string`

URL of Verida DID Server node to use.

#### Defined in

packages/client-ts/dist/interfaces.d.ts:21

___

### environment

• `Optional` **environment**: [`EnvironmentType`](../enums/verida_verifiable_credentials._internal_.EnvironmentType.md)

Environment to load by default.

Environment configuration can still be overriden by config items.

#### Defined in

packages/client-ts/dist/interfaces.d.ts:17

___

### schemaPaths

• `Optional` **schemaPaths**: `object`

Specify custom schema paths (typicaly for local development).

#### Defined in

packages/client-ts/dist/interfaces.d.ts:25

___

### vaultAppName

• `Optional` **vaultAppName**: `string`

Specify client's App name.

#### Defined in

packages/client-ts/dist/interfaces.d.ts:11
