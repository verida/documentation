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

- [createCredentialJWT](verida_verifiable_credentials.Credentials.md#createcredentialjwt)
- [createIssuer](verida_verifiable_credentials.Credentials.md#createissuer)
- [createVerifiableCredential](verida_verifiable_credentials.Credentials.md#createverifiablecredential)
- [createVerifiablePresentation](verida_verifiable_credentials.Credentials.md#createverifiablepresentation)
- [getErrors](verida_verifiable_credentials.Credentials.md#geterrors)
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

[packages/verifiable-credentials/src/credentials.ts:28](https://github.com/verida/verida-js/blob/039856c/packages/verifiable-credentials/src/credentials.ts#L28)

## Methods

### createCredentialJWT

▸ **createCredentialJWT**(`subjectId`, `data`, `context`, `options?`): `Promise`<`object`\>

Create a new credential DID-JWT for a given object.

A new property `didJwtVc` is added to the data and included in the response

#### Parameters

| Name | Type |
| :------ | :------ |
| `subjectId` | `string` |
| `data` | `any` |
| `context` | [`Context`](verida_verifiable_credentials._internal_.Context.md) |
| `options?` | [`credentialDateOptions`](../interfaces/verida_verifiable_credentials._internal_.credentialDateOptions.md) |

#### Returns

`Promise`<`object`\>

#### Defined in

[packages/verifiable-credentials/src/credentials.ts:167](https://github.com/verida/verida-js/blob/039856c/packages/verifiable-credentials/src/credentials.ts#L167)

___

### createIssuer

▸ **createIssuer**(`context`): `Promise`<[`Issuer`](../interfaces/verida_verifiable_credentials._internal_.Issuer.md)\>

Create an Issuer object that can issue Verifiable Credentials

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`Context`](verida_verifiable_credentials._internal_.Context.md) |

#### Returns

`Promise`<[`Issuer`](../interfaces/verida_verifiable_credentials._internal_.Issuer.md)\>

Verifiable Credential Issuer

#### Defined in

[packages/verifiable-credentials/src/credentials.ts:139](https://github.com/verida/verida-js/blob/039856c/packages/verifiable-credentials/src/credentials.ts#L139)

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

[packages/verifiable-credentials/src/credentials.ts:43](https://github.com/verida/verida-js/blob/039856c/packages/verifiable-credentials/src/credentials.ts#L43)

___

### createVerifiablePresentation

▸ **createVerifiablePresentation**(`vcJwts`, `context`, `issuer?`): `Promise`<`string`\>

Create a verifiable presentation that combines an array of Verifiable
Credential DID-JWT's

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vcJwts` | `string`[] | Array of Verifiable Credential DID-JWT's |
| `context` | [`Context`](verida_verifiable_credentials._internal_.Context.md) | - |
| `issuer?` | `any` | A credential issuer object obtained by calling `createIssuer(user)` |

#### Returns

`Promise`<`string`\>

#### Defined in

[packages/verifiable-credentials/src/credentials.ts:62](https://github.com/verida/verida-js/blob/039856c/packages/verifiable-credentials/src/credentials.ts#L62)

___

### getErrors

▸ **getErrors**(): `string`[]

#### Returns

`string`[]

#### Defined in

[packages/verifiable-credentials/src/credentials.ts:248](https://github.com/verida/verida-js/blob/039856c/packages/verifiable-credentials/src/credentials.ts#L248)

___

### verifyCredential

▸ **verifyCredential**(`vcJwt`, `environment`, `currentDateTime?`): `Promise`<`any`\>

Verify a Verifiable Credential DID-JWT

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vcJwt` | `string` |  |
| `environment` | [`EnvironmentType`](../enums/verida_verifiable_credentials._internal_.EnvironmentType.md) | - |
| `currentDateTime?` | `string` | to allow the client to migrate cases where the datetime is incorrect on the local computer |

#### Returns

`Promise`<`any`\>

#### Defined in

[packages/verifiable-credentials/src/credentials.ts:100](https://github.com/verida/verida-js/blob/039856c/packages/verifiable-credentials/src/credentials.ts#L100)

___

### getResolver

▸ `Static` `Private` **getResolver**(`environment`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `environment` | [`EnvironmentType`](../enums/verida_verifiable_credentials._internal_.EnvironmentType.md) |

#### Returns

`any`

#### Defined in

[packages/verifiable-credentials/src/credentials.ts:243](https://github.com/verida/verida-js/blob/039856c/packages/verifiable-credentials/src/credentials.ts#L243)

___

### verifyPresentation

▸ `Static` **verifyPresentation**(`vpJwt`, `environment`): `Promise`<`any`\>

Verify a Verifiable Presentation DID-JWT

#### Parameters

| Name | Type |
| :------ | :------ |
| `vpJwt` | `string` |
| `environment` | [`EnvironmentType`](../enums/verida_verifiable_credentials._internal_.EnvironmentType.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[packages/verifiable-credentials/src/credentials.ts:88](https://github.com/verida/verida-js/blob/039856c/packages/verifiable-credentials/src/credentials.ts#L88)
