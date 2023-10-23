[root](../README.md) / [Modules](../modules.md) / [@verida/verifiable-credentials](../modules/verida_verifiable_credentials.md) / SharingCredential

# Class: SharingCredential

[@verida/verifiable-credentials](../modules/verida_verifiable_credentials.md).SharingCredential

## Table of contents

### Constructors

- [constructor](verida_verifiable_credentials.SharingCredential.md#constructor)

### Properties

- [context](verida_verifiable_credentials.SharingCredential.md#context)

### Methods

- [issueEncryptedPresentation](verida_verifiable_credentials.SharingCredential.md#issueencryptedpresentation)
- [issuePublicPresentation](verida_verifiable_credentials.SharingCredential.md#issuepublicpresentation)

## Constructors

### constructor

• **new SharingCredential**(`context`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`IContext`](../interfaces/verida_verifiable_credentials._internal_.IContext.md) |

#### Defined in

[packages/verifiable-credentials/src/sharing-credential.ts:21](https://github.com/verida/verida-js/blob/032961c/packages/verifiable-credentials/src/sharing-credential.ts#L21)

## Properties

### context

• **context**: [`IContext`](../interfaces/verida_verifiable_credentials._internal_.IContext.md)

#### Defined in

[packages/verifiable-credentials/src/sharing-credential.ts:19](https://github.com/verida/verida-js/blob/032961c/packages/verifiable-credentials/src/sharing-credential.ts#L19)

## Methods

### issueEncryptedPresentation

▸ **issueEncryptedPresentation**(`didJwtVc`): `Promise`<`any`\>

Method to encrypt and issue credential

#### Parameters

| Name | Type |
| :------ | :------ |
| `didJwtVc` | `any` |

#### Returns

`Promise`<`any`\>

#### Defined in

[packages/verifiable-credentials/src/sharing-credential.ts:30](https://github.com/verida/verida-js/blob/032961c/packages/verifiable-credentials/src/sharing-credential.ts#L30)

___

### issuePublicPresentation

▸ **issuePublicPresentation**(`did`, `didJwtVc`, `contextName`, `options`): `Promise`<`unknown`\>

 Method for for publishing an encrypted credential data

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `string` |
| `didJwtVc` | `any` |
| `contextName` | `string` |
| `options` | `any` |

#### Returns

`Promise`<`unknown`\>

#### Defined in

[packages/verifiable-credentials/src/sharing-credential.ts:52](https://github.com/verida/verida-js/blob/032961c/packages/verifiable-credentials/src/sharing-credential.ts#L52)
