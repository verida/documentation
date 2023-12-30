[root](../README.md) / [Modules](../modules.md) / [@verida/types](../modules/verida_types.md) / DefaultClientConfig

# Interface: DefaultClientConfig

[@verida/types](../modules/verida_types.md).DefaultClientConfig

## Hierarchy

- [`DefaultEnvironmentConfig`](verida_types.DefaultEnvironmentConfig.md)

  ↳ **`DefaultClientConfig`**

## Table of contents

### Properties

- [defaultDatabaseServerUrl](verida_types.DefaultClientConfig.md#defaultdatabaseserverurl)
- [defaultMessageServerUrl](verida_types.DefaultClientConfig.md#defaultmessageserverurl)
- [environment](verida_types.DefaultClientConfig.md#environment)
- [environments](verida_types.DefaultClientConfig.md#environments)
- [schemaPaths](verida_types.DefaultClientConfig.md#schemapaths)
- [vaultAppName](verida_types.DefaultClientConfig.md#vaultappname)

## Properties

### defaultDatabaseServerUrl

• `Optional` **defaultDatabaseServerUrl**: `string`

#### Inherited from

[DefaultEnvironmentConfig](verida_types.DefaultEnvironmentConfig.md).[defaultDatabaseServerUrl](verida_types.DefaultEnvironmentConfig.md#defaultdatabaseserverurl)

#### Defined in

[packages/types/src/NetworkInterfaces.ts:13](https://github.com/verida/verida-js/blob/5040472/packages/types/src/NetworkInterfaces.ts#L13)

___

### defaultMessageServerUrl

• `Optional` **defaultMessageServerUrl**: `string`

#### Inherited from

[DefaultEnvironmentConfig](verida_types.DefaultEnvironmentConfig.md).[defaultMessageServerUrl](verida_types.DefaultEnvironmentConfig.md#defaultmessageserverurl)

#### Defined in

[packages/types/src/NetworkInterfaces.ts:14](https://github.com/verida/verida-js/blob/5040472/packages/types/src/NetworkInterfaces.ts#L14)

___

### environment

• **environment**: [`EnvironmentType`](../enums/verida_types.EnvironmentType.md)

#### Defined in

[packages/types/src/NetworkInterfaces.ts:19](https://github.com/verida/verida-js/blob/5040472/packages/types/src/NetworkInterfaces.ts#L19)

___

### environments

• **environments**: [`Record`](../modules/verida_types._internal_.md#record)<`string`, [`DefaultEnvironmentConfig`](verida_types.DefaultEnvironmentConfig.md)\>

#### Defined in

[packages/types/src/NetworkInterfaces.ts:20](https://github.com/verida/verida-js/blob/5040472/packages/types/src/NetworkInterfaces.ts#L20)

___

### schemaPaths

• `Optional` **schemaPaths**: [`Record`](../modules/verida_types._internal_.md#record)<`string`, `string`\>

#### Inherited from

[DefaultEnvironmentConfig](verida_types.DefaultEnvironmentConfig.md).[schemaPaths](verida_types.DefaultEnvironmentConfig.md#schemapaths)

#### Defined in

[packages/types/src/NetworkInterfaces.ts:15](https://github.com/verida/verida-js/blob/5040472/packages/types/src/NetworkInterfaces.ts#L15)

___

### vaultAppName

• **vaultAppName**: `string`

#### Defined in

[packages/types/src/NetworkInterfaces.ts:21](https://github.com/verida/verida-js/blob/5040472/packages/types/src/NetworkInterfaces.ts#L21)
