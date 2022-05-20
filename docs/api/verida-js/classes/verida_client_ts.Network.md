[root](../README.md) / [Modules](../modules.md) / [@verida/client-ts](../modules/verida_client_ts.md) / Network

# Class: Network

[@verida/client-ts](../modules/verida_client_ts.md).Network

## Table of contents

### Constructors

- [constructor](verida_client_ts.Network.md#constructor)

### Methods

- [connect](verida_client_ts.Network.md#connect)

## Constructors

### constructor

• **new Network**()

## Methods

### connect

▸ `Static` **connect**(`config`): `Promise`<`undefined` \| [`Context`](verida_client_ts.Context.md)\>

Opens a new application context to provide encrypted storage and messaging to an application.

This is a quicker alternative to generating a `client` connection to the Verida network
and then opening a context.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | [`NetworkConnectionConfig`](../interfaces/verida_client_ts._internal_.NetworkConnectionConfig.md) | NetworkConnectionConfig Configuration |

#### Returns

`Promise`<`undefined` \| [`Context`](verida_client_ts.Context.md)\>

If the user logs in a valid `Context` object is returned. If an unexpected error occurs or the user cancels the login attempt then nothing is returned.

#### Defined in

[packages/client-ts/src/network.ts:19](https://github.com/verida/verida-js/blob/039856c/packages/client-ts/src/network.ts#L19)
