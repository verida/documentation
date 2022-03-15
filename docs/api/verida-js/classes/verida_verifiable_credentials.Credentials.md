[root](../README.md) / [Modules](../modules.md) / [@verida/verifiable-credentials](../modules/verida_verifiable_credentials.md) / Credentials

# Class: Credentials

[@verida/verifiable-credentials](../modules/verida_verifiable_credentials.md).Credentials

## Table of contents

### Constructors

- [constructor](verida_verifiable_credentials.Credentials.md#constructor)

### Properties

- [context](verida_verifiable_credentials.Credentials.md#context)
- [errors](verida_verifiable_credentials.Credentials.md#errors)

### Methods

- [createCredentialJWT](verida_verifiable_credentials.Credentials.md#createcredentialjwt)
- [createIssuer](verida_verifiable_credentials.Credentials.md#createissuer)
- [createVerifiableCredential](verida_verifiable_credentials.Credentials.md#createverifiablecredential)
- [createVerifiablePresentation](verida_verifiable_credentials.Credentials.md#createverifiablepresentation)
- [getErrors](verida_verifiable_credentials.Credentials.md#geterrors)
- [getResolver](verida_verifiable_credentials.Credentials.md#getresolver)
- [verifyCredential](verida_verifiable_credentials.Credentials.md#verifycredential)
- [verifyPresentation](verida_verifiable_credentials.Credentials.md#verifypresentation)

## Constructors

### constructor

• **new Credentials**(`context`)

Initialize a new credential issuer and verifier instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `context` | `Context` | The context (must have an account connected) that will issue any new credentials |

#### Defined in

[verifiable-credentials/src/credentials.ts:37](https://github.com/verida/verida-js/blob/a39619b/packages/verifiable-credentials/src/credentials.ts#L37)

## Properties

### context

• `Private` **context**: `Context`

#### Defined in

[verifiable-credentials/src/credentials.ts:29](https://github.com/verida/verida-js/blob/a39619b/packages/verifiable-credentials/src/credentials.ts#L29)

___

### errors

• `Private` **errors**: `string`[] = `[]`

#### Defined in

[verifiable-credentials/src/credentials.ts:30](https://github.com/verida/verida-js/blob/a39619b/packages/verifiable-credentials/src/credentials.ts#L30)

## Methods

### createCredentialJWT

▸ **createCredentialJWT**(`subjectId`, `data`, `options?`): `Promise`<`object`\>

Create a new credential DID-JWT for a given object.

A new property `didJwtVc` is added to the data and included in the response

#### Parameters

| Name | Type |
| :------ | :------ |
| `subjectId` | `string` |
| `data` | `any` |
| `options?` | `credentialDateOptions` |

#### Returns

`Promise`<`object`\>

#### Defined in

[verifiable-credentials/src/credentials.ts:168](https://github.com/verida/verida-js/blob/a39619b/packages/verifiable-credentials/src/credentials.ts#L168)

___

### createIssuer

▸ `Private` **createIssuer**(): `Promise`<`Issuer`\>

Create an Issuer object that can issue Verifiable Credentials

#### Returns

`Promise`<`Issuer`\>

Verifiable Credential Issuer

#### Defined in

[verifiable-credentials/src/credentials.ts:140](https://github.com/verida/verida-js/blob/a39619b/packages/verifiable-credentials/src/credentials.ts#L140)

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

[verifiable-credentials/src/credentials.ts:47](https://github.com/verida/verida-js/blob/a39619b/packages/verifiable-credentials/src/credentials.ts#L47)

___

### createVerifiablePresentation

▸ **createVerifiablePresentation**(`vcJwts`, `issuer?`): `Promise`<`string`\>

Create a verifiable presentation that combines an array of Verifiable
Credential DID-JWT's

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vcJwts` | `string`[] | Array of Verifiable Credential DID-JWT's |
| `issuer?` | `any` | A credential issuer object obtained by calling `createIssuer(user)` |

#### Returns

`Promise`<`string`\>

#### Defined in

[verifiable-credentials/src/credentials.ts:66](https://github.com/verida/verida-js/blob/a39619b/packages/verifiable-credentials/src/credentials.ts#L66)

___

### getErrors

▸ **getErrors**(): `string`[]

#### Returns

`string`[]

#### Defined in

[verifiable-credentials/src/credentials.ts:253](https://github.com/verida/verida-js/blob/a39619b/packages/verifiable-credentials/src/credentials.ts#L253)

___

### getResolver

▸ `Private` **getResolver**(): `any`

#### Returns

`any`

#### Defined in

[verifiable-credentials/src/credentials.ts:248](https://github.com/verida/verida-js/blob/a39619b/packages/verifiable-credentials/src/credentials.ts#L248)

___

### verifyCredential

▸ **verifyCredential**(`vcJwt`, `currentDateTime?`): `Promise`<`any`\>

Verify a Verifiable Credential DID-JWT

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vcJwt` | `string` |  |
| `currentDateTime?` | `string` | to allow the client to migrate cases where the datetime is incorrect on the local computer |

#### Returns

`Promise`<`any`\>

#### Defined in

[verifiable-credentials/src/credentials.ts:101](https://github.com/verida/verida-js/blob/a39619b/packages/verifiable-credentials/src/credentials.ts#L101)

___

### verifyPresentation

▸ **verifyPresentation**(`vpJwt`): `Promise`<`unknown`\>

Verify a Verifiable Presentation DID-JWT

#### Parameters

| Name | Type |
| :------ | :------ |
| `vpJwt` | `string` |

#### Returns

`Promise`<`unknown`\>

#### Defined in

[verifiable-credentials/src/credentials.ts:90](https://github.com/verida/verida-js/blob/a39619b/packages/verifiable-credentials/src/credentials.ts#L90)
