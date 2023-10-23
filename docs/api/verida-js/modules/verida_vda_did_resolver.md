[root](../README.md) / [Modules](../modules.md) / @verida/vda-did-resolver

# Module: @verida/vda-did-resolver

## Table of contents

### Namespaces

- [&lt;internal\&gt;](verida_vda_did_resolver._internal_.md)

### Classes

- [VdaDidResolver](../classes/verida_vda_did_resolver.VdaDidResolver.md)

### Variables

- [RPC\_URLS](verida_vda_did_resolver.md#rpc_urls)

### Functions

- [activeDIDCount](verida_vda_did_resolver.md#activedidcount)
- [getDIDs](verida_vda_did_resolver.md#getdids)
- [getResolver](verida_vda_did_resolver.md#getresolver)
- [lookup](verida_vda_did_resolver.md#lookup)

## Variables

### RPC\_URLS

• `Const` **RPC\_URLS**: [`Record`](verida_vda_did_resolver._internal_.md#record)<`string`, `string` \| ``null``\>

#### Defined in

packages/vda-common/dist/rpc.d.ts:1

## Functions

### activeDIDCount

▸ **activeDIDCount**(`network`): `Promise`<`number`\>

Call lookUp() function of DIDRegistry contract

#### Parameters

| Name | Type |
| :------ | :------ |
| `network` | `string` |

#### Returns

`Promise`<`number`\>

#### Defined in

[packages/vda-did-resolver/src/activeDIDCount.ts:11](https://github.com/verida/verida-js/blob/032961c/packages/vda-did-resolver/src/activeDIDCount.ts#L11)

___

### getDIDs

▸ **getDIDs**(`network`, `startIndex?`, `count?`, `mostRecent?`): `Promise`<`string`[]\>

Call lookUp() function of DIDRegistry contract

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `network` | [`EnvironmentType`](../enums/verida_vda_did_resolver._internal_.EnvironmentType.md) | `undefined` | Verida network to retreieve DIDs for |
| `startIndex` | `number` | `0` | Index to start |
| `count` | `number` | `20` | Total number of results to fetch |
| `mostRecent` | `boolean` | `true` | - |

#### Returns

`Promise`<`string`[]\>

#### Defined in

[packages/vda-did-resolver/src/getDIDs.ts:14](https://github.com/verida/verida-js/blob/032961c/packages/vda-did-resolver/src/getDIDs.ts#L14)

___

### getResolver

▸ **getResolver**(`options?`): [`Record`](verida_vda_did_resolver._internal_.md#record)<`string`, [`DIDResolver`](verida_vda_did_resolver._internal_.md#didresolver)\>

Create a VdaDidResolver instance and return it

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`Web3ResolverConfigurationOptions`](../interfaces/verida_vda_did_resolver._internal_.Web3ResolverConfigurationOptions.md) | Configurations |

#### Returns

[`Record`](verida_vda_did_resolver._internal_.md#record)<`string`, [`DIDResolver`](verida_vda_did_resolver._internal_.md#didresolver)\>

VdaDidResolver instance

#### Defined in

[packages/vda-did-resolver/src/resolver.ts:20](https://github.com/verida/verida-js/blob/032961c/packages/vda-did-resolver/src/resolver.ts#L20)

___

### lookup

▸ **lookup**(`didAddress`, `network`, `rpcUrl`): `Promise`<`string`[]\>

Call lookUp() function of DIDRegistry contract

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `didAddress` | `string` | DID address to lookup |
| `network` | `string` | - |
| `rpcUrl` | `string` | URL |

#### Returns

`Promise`<`string`[]\>

#### Defined in

[packages/vda-did-resolver/src/lookup.ts:11](https://github.com/verida/verida-js/blob/032961c/packages/vda-did-resolver/src/lookup.ts#L11)
