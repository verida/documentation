[root](../README.md) / [Modules](../modules.md) / [@verida/verifiable-credentials](../modules/verida_verifiable_credentials.md) / Credentials

# Class: Credentials

[@verida/verifiable-credentials](../modules/verida_verifiable_credentials.md).Credentials

A bare minimum class implementing the creation and verification of
Verifiable Credentials and Verifiable Presentations represented as
DID-JWT's

## Table of contents

### Constructors

- [constructor](verida_verifiable_credentials.Credentials.md#constructor)

### Properties

- [errors](verida_verifiable_credentials.Credentials.md#errors)

### Methods

- [buildProofs](verida_verifiable_credentials.Credentials.md#buildproofs)
- [createCredentialJWT](verida_verifiable_credentials.Credentials.md#createcredentialjwt)
- [createIssuer](verida_verifiable_credentials.Credentials.md#createissuer)
- [createVerifiableCredential](verida_verifiable_credentials.Credentials.md#createverifiablecredential)
- [createVerifiableCredentialRecord](verida_verifiable_credentials.Credentials.md#createverifiablecredentialrecord)
- [createVerifiablePresentation](verida_verifiable_credentials.Credentials.md#createverifiablepresentation)
- [getContextInfo](verida_verifiable_credentials.Credentials.md#getcontextinfo)
- [getCredentialSchema](verida_verifiable_credentials.Credentials.md#getcredentialschema)
- [getErrors](verida_verifiable_credentials.Credentials.md#geterrors)
- [getProofStrings](verida_verifiable_credentials.Credentials.md#getproofstrings)
- [verifyCredential](verida_verifiable_credentials.Credentials.md#verifycredential)
- [getResolver](verida_verifiable_credentials.Credentials.md#getresolver)
- [verifyPresentation](verida_verifiable_credentials.Credentials.md#verifypresentation)

## Constructors

### constructor

• **new Credentials**()

## Properties

### errors

• `Private` **errors**: `string`[] = `[]`

#### Defined in

[packages/verifiable-credentials/src/credentials.ts:27](https://github.com/verida/verida-js/blob/a690f60/packages/verifiable-credentials/src/credentials.ts#L27)

## Methods

### buildProofs

▸ `Private` **buildProofs**(`proofs`, `data`, `privateSignKey?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `proofs` | [`Record`](../modules/verida_verifiable_credentials._internal_.md#record)<`string`, `string`[]\> |
| `data` | [`Record`](../modules/verida_verifiable_credentials._internal_.md#record)<`string`, `string` \| `object`\> |
| `privateSignKey?` | `Uint8Array` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `payloadProofs` | `any` |
| `proofStrings` | `any` |

#### Defined in

[packages/verifiable-credentials/src/credentials.ts:319](https://github.com/verida/verida-js/blob/a690f60/packages/verifiable-credentials/src/credentials.ts#L319)

___

### createCredentialJWT

▸ **createCredentialJWT**(`data`): `Promise`<`string`\>

Create a new credential DID-JWT for a given object.

A new property `didJwtVc` is added to the data and included in the response

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`CreateCredentialJWT`](../interfaces/verida_verifiable_credentials.CreateCredentialJWT.md) |

#### Returns

`Promise`<`string`\>

A string DID-JWT representation

#### Defined in

[packages/verifiable-credentials/src/credentials.ts:203](https://github.com/verida/verida-js/blob/a690f60/packages/verifiable-credentials/src/credentials.ts#L203)

___

### createIssuer

▸ **createIssuer**(`context`): `Promise`<[`Issuer`](../interfaces/verida_verifiable_credentials._internal_.Issuer.md)\>

Create an Issuer object that can issue Verifiable Credentials

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`IContext`](../interfaces/verida_verifiable_credentials._internal_.IContext.md) |

#### Returns

`Promise`<[`Issuer`](../interfaces/verida_verifiable_credentials._internal_.Issuer.md)\>

Verifiable Credential Issuer

#### Defined in

[packages/verifiable-credentials/src/credentials.ts:168](https://github.com/verida/verida-js/blob/a690f60/packages/verifiable-credentials/src/credentials.ts#L168)

___

### createVerifiableCredential

▸ **createVerifiableCredential**(`vc`, `issuer`): `Promise`<`string`\>

Create a verifiable credential.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vc` | `any` | JSON representing a verifiable credential |
| `issuer` | `any` | A credential issuer object obtained by calling `createIssuer(user)` |

#### Returns

`Promise`<`string`\>

DID-JWT representation of the Verifiable Credential

#### Defined in

[packages/verifiable-credentials/src/credentials.ts:42](https://github.com/verida/verida-js/blob/a690f60/packages/verifiable-credentials/src/credentials.ts#L42)

___

### createVerifiableCredentialRecord

▸ **createVerifiableCredentialRecord**(`createCredentialData`, `name`, `summary?`, `icon?`): `Promise`<[`VeridaCredentialRecord`](../interfaces/verida_verifiable_credentials.VeridaCredentialRecord.md)\>

Create a Verifiable Credential record that can be saved into the
credential datastore.

#### Parameters

| Name | Type |
| :------ | :------ |
| `createCredentialData` | [`CreateCredentialJWT`](../interfaces/verida_verifiable_credentials.CreateCredentialJWT.md) |
| `name` | `string` |
| `summary?` | `string` |
| `icon?` | `string` |

#### Returns

`Promise`<[`VeridaCredentialRecord`](../interfaces/verida_verifiable_credentials.VeridaCredentialRecord.md)\>

#### Defined in

[packages/verifiable-credentials/src/credentials.ts:61](https://github.com/verida/verida-js/blob/a690f60/packages/verifiable-credentials/src/credentials.ts#L61)

___

### createVerifiablePresentation

▸ **createVerifiablePresentation**(`vcJwts`, `context`, `issuer?`): `Promise`<`string`\>

Create a verifiable presentation that combines an array of Verifiable
Credential DID-JWT's

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vcJwts` | `string`[] | Array of Verifiable Credential DID-JWT's |
| `context` | [`IContext`](../interfaces/verida_verifiable_credentials._internal_.IContext.md) | - |
| `issuer?` | `any` | A credential issuer object obtained by calling `createIssuer(user)` |

#### Returns

`Promise`<`string`\>

#### Defined in

[packages/verifiable-credentials/src/credentials.ts:89](https://github.com/verida/verida-js/blob/a690f60/packages/verifiable-credentials/src/credentials.ts#L89)

___

### getContextInfo

▸ **getContextInfo**(`context`): `Promise`<{ `did`: `string` ; `privateKey`: `any` = keys.signPrivateKey }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`IContext`](../interfaces/verida_verifiable_credentials._internal_.IContext.md) |

#### Returns

`Promise`<{ `did`: `string` ; `privateKey`: `any` = keys.signPrivateKey }\>

#### Defined in

[packages/verifiable-credentials/src/credentials.ts:181](https://github.com/verida/verida-js/blob/a690f60/packages/verifiable-credentials/src/credentials.ts#L181)

___

### getCredentialSchema

▸ **getCredentialSchema**(`schemaUrl`): `Promise`<[`VeridaCredentialSchema`](../interfaces/verida_verifiable_credentials.VeridaCredentialSchema.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `schemaUrl` | `string` |

#### Returns

`Promise`<[`VeridaCredentialSchema`](../interfaces/verida_verifiable_credentials.VeridaCredentialSchema.md)\>

#### Defined in

[packages/verifiable-credentials/src/credentials.ts:299](https://github.com/verida/verida-js/blob/a690f60/packages/verifiable-credentials/src/credentials.ts#L299)

___

### getErrors

▸ **getErrors**(): `string`[]

#### Returns

`string`[]

#### Defined in

[packages/verifiable-credentials/src/credentials.ts:295](https://github.com/verida/verida-js/blob/a690f60/packages/verifiable-credentials/src/credentials.ts#L295)

___

### getProofStrings

▸ **getProofStrings**(`credential`): `Promise`<[`Record`](../modules/verida_verifiable_credentials._internal_.md#record)<`string`, `string`[]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `credential` | [`VeridaCredentialRecord`](../interfaces/verida_verifiable_credentials.VeridaCredentialRecord.md) |

#### Returns

`Promise`<[`Record`](../modules/verida_verifiable_credentials._internal_.md#record)<`string`, `string`[]\>\>

#### Defined in

[packages/verifiable-credentials/src/credentials.ts:309](https://github.com/verida/verida-js/blob/a690f60/packages/verifiable-credentials/src/credentials.ts#L309)

___

### verifyCredential

▸ **verifyCredential**(`vcJwt`, `resolverConfig?`, `currentDateTime?`): `Promise`<`any`\>

Verify a Verifiable Credential DID-JWT

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vcJwt` | `string` |  |
| `resolverConfig?` | [`Web3ResolverConfigurationOptions`](../interfaces/verida_verifiable_credentials._internal_.Web3ResolverConfigurationOptions.md) | - |
| `currentDateTime?` | `string` | to allow the client to migrate cases where the datetime is incorrect on the local computer |

#### Returns

`Promise`<`any`\>

#### Defined in

[packages/verifiable-credentials/src/credentials.ts:127](https://github.com/verida/verida-js/blob/a690f60/packages/verifiable-credentials/src/credentials.ts#L127)

___

### getResolver

▸ `Static` `Private` **getResolver**(`resolverConfig?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `resolverConfig?` | [`Web3ResolverConfigurationOptions`](../interfaces/verida_verifiable_credentials._internal_.Web3ResolverConfigurationOptions.md) |

#### Returns

`any`

#### Defined in

[packages/verifiable-credentials/src/credentials.ts:289](https://github.com/verida/verida-js/blob/a690f60/packages/verifiable-credentials/src/credentials.ts#L289)

___

### verifyPresentation

▸ `Static` **verifyPresentation**(`vpJwt`, `resolverConfig`): `Promise`<`any`\>

Verify a Verifiable Presentation DID-JWT

#### Parameters

| Name | Type |
| :------ | :------ |
| `vpJwt` | `string` |
| `resolverConfig` | [`Web3ResolverConfigurationOptions`](../interfaces/verida_verifiable_credentials._internal_.Web3ResolverConfigurationOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[packages/verifiable-credentials/src/credentials.ts:115](https://github.com/verida/verida-js/blob/a690f60/packages/verifiable-credentials/src/credentials.ts#L115)
