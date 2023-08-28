[root](../README.md) / [Modules](../modules.md) / [@verida/account-node](../modules/verida_account_node.md) / NodeSelector

# Class: NodeSelector

[@verida/account-node](../modules/verida_account_node.md).NodeSelector

## Table of contents

### Constructors

- [constructor](verida_account_node.NodeSelector.md#constructor)

### Properties

- [config](verida_account_node.NodeSelector.md#config)
- [nodeList](verida_account_node.NodeSelector.md#nodelist)

### Methods

- [fetchConfigJson](verida_account_node.NodeSelector.md#fetchconfigjson)
- [loadStorageNodes](verida_account_node.NodeSelector.md#loadstoragenodes)
- [nodesByCountry](verida_account_node.NodeSelector.md#nodesbycountry)
- [nodesByRegion](verida_account_node.NodeSelector.md#nodesbyregion)
- [notificationEndpoints](verida_account_node.NodeSelector.md#notificationendpoints)
- [selectEndpointUris](verida_account_node.NodeSelector.md#selectendpointuris)
- [selectNodesByCountry](verida_account_node.NodeSelector.md#selectnodesbycountry)
- [selectNodesByRegion](verida_account_node.NodeSelector.md#selectnodesbyregion)
- [selectNodesFromList](verida_account_node.NodeSelector.md#selectnodesfromlist)
- [verifyNodeAvailable](verida_account_node.NodeSelector.md#verifynodeavailable)

## Constructors

### constructor

• **new NodeSelector**(`config`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`NodeSelectorConfig`](../interfaces/verida_account_node.NodeSelectorConfig.md) |

#### Defined in

[packages/account-node/src/nodeSelector.ts:46](https://github.com/verida/verida-js/blob/a690f60/packages/account-node/src/nodeSelector.ts#L46)

## Properties

### config

• **config**: [`NodeSelectorConfig`](../interfaces/verida_account_node.NodeSelectorConfig.md)

#### Defined in

[packages/account-node/src/nodeSelector.ts:43](https://github.com/verida/verida-js/blob/a690f60/packages/account-node/src/nodeSelector.ts#L43)

___

### nodeList

• `Optional` **nodeList**: [`StorageNode`](../interfaces/verida_account_node.StorageNode.md)[]

#### Defined in

[packages/account-node/src/nodeSelector.ts:44](https://github.com/verida/verida-js/blob/a690f60/packages/account-node/src/nodeSelector.ts#L44)

## Methods

### fetchConfigJson

▸ `Private` **fetchConfigJson**(`url`): `Promise`<[`StorageNode`](../interfaces/verida_account_node.StorageNode.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

`Promise`<[`StorageNode`](../interfaces/verida_account_node.StorageNode.md)[]\>

#### Defined in

[packages/account-node/src/nodeSelector.ts:226](https://github.com/verida/verida-js/blob/a690f60/packages/account-node/src/nodeSelector.ts#L226)

___

### loadStorageNodes

▸ `Private` **loadStorageNodes**(`nodes?`): `Promise`<[`StorageNode`](../interfaces/verida_account_node.StorageNode.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodes?` | [`StorageNode`](../interfaces/verida_account_node.StorageNode.md)[] |

#### Returns

`Promise`<[`StorageNode`](../interfaces/verida_account_node.StorageNode.md)[]\>

#### Defined in

[packages/account-node/src/nodeSelector.ts:206](https://github.com/verida/verida-js/blob/a690f60/packages/account-node/src/nodeSelector.ts#L206)

___

### nodesByCountry

▸ **nodesByCountry**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

[packages/account-node/src/nodeSelector.ts:152](https://github.com/verida/verida-js/blob/a690f60/packages/account-node/src/nodeSelector.ts#L152)

___

### nodesByRegion

▸ **nodesByRegion**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

[packages/account-node/src/nodeSelector.ts:165](https://github.com/verida/verida-js/blob/a690f60/packages/account-node/src/nodeSelector.ts#L165)

___

### notificationEndpoints

▸ **notificationEndpoints**(): `string`[]

#### Returns

`string`[]

#### Defined in

[packages/account-node/src/nodeSelector.ts:181](https://github.com/verida/verida-js/blob/a690f60/packages/account-node/src/nodeSelector.ts#L181)

___

### selectEndpointUris

▸ **selectEndpointUris**(`countryCode?`, `numNodes?`): `Promise`<`string`[]\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `countryCode?` | `string` | `undefined` |
| `numNodes` | `number` | `3` |

#### Returns

`Promise`<`string`[]\>

#### Defined in

[packages/account-node/src/nodeSelector.ts:138](https://github.com/verida/verida-js/blob/a690f60/packages/account-node/src/nodeSelector.ts#L138)

___

### selectNodesByCountry

▸ **selectNodesByCountry**(`countryCode?`, `numNodes?`): `Promise`<[`StorageNode`](../interfaces/verida_account_node.StorageNode.md)[]\>

Select random nodes for a given country code

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `countryCode?` | `string` | `undefined` | 2-character country code |
| `numNodes` | `number` | `3` | Number of nodes to randomly select |

#### Returns

`Promise`<[`StorageNode`](../interfaces/verida_account_node.StorageNode.md)[]\>

Array of found storage nodes up to `numNodes` maximum

#### Defined in

[packages/account-node/src/nodeSelector.ts:56](https://github.com/verida/verida-js/blob/a690f60/packages/account-node/src/nodeSelector.ts#L56)

___

### selectNodesByRegion

▸ **selectNodesByRegion**(`region`, `ignoredNodes`, `numNodes?`): `Promise`<[`StorageNode`](../interfaces/verida_account_node.StorageNode.md)[]\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `region` | `string` | `undefined` |
| `ignoredNodes` | [`StorageNode`](../interfaces/verida_account_node.StorageNode.md)[] | `undefined` |
| `numNodes` | `number` | `3` |

#### Returns

`Promise`<[`StorageNode`](../interfaces/verida_account_node.StorageNode.md)[]\>

#### Defined in

[packages/account-node/src/nodeSelector.ts:87](https://github.com/verida/verida-js/blob/a690f60/packages/account-node/src/nodeSelector.ts#L87)

___

### selectNodesFromList

▸ `Private` **selectNodesFromList**(`possibleNodes`, `ignoredNodes`, `numNodes?`): `Promise`<[`StorageNode`](../interfaces/verida_account_node.StorageNode.md)[]\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `possibleNodes` | [`StorageNode`](../interfaces/verida_account_node.StorageNode.md)[] | `undefined` |
| `ignoredNodes` | [`StorageNode`](../interfaces/verida_account_node.StorageNode.md)[] | `undefined` |
| `numNodes` | `number` | `3` |

#### Returns

`Promise`<[`StorageNode`](../interfaces/verida_account_node.StorageNode.md)[]\>

#### Defined in

[packages/account-node/src/nodeSelector.ts:114](https://github.com/verida/verida-js/blob/a690f60/packages/account-node/src/nodeSelector.ts#L114)

___

### verifyNodeAvailable

▸ **verifyNodeAvailable**(`storageNode`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `storageNode` | [`StorageNode`](../interfaces/verida_account_node.StorageNode.md) |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[packages/account-node/src/nodeSelector.ts:185](https://github.com/verida/verida-js/blob/a690f60/packages/account-node/src/nodeSelector.ts#L185)
