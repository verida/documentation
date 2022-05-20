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
| `context` | [`Context`](verida_verifiable_credentials._internal_.Context.md) |

#### Defined in

[packages/verifiable-credentials/src/sharing-credential.ts:20](https://github.com/verida/verida-js/blob/039856c/packages/verifiable-credentials/src/sharing-credential.ts#L20)

## Properties

### context

• **context**: [`Context`](verida_verifiable_credentials._internal_.Context.md)

#### Defined in

[packages/verifiable-credentials/src/sharing-credential.ts:18](https://github.com/verida/verida-js/blob/039856c/packages/verifiable-credentials/src/sharing-credential.ts#L18)

## Methods

### issueEncryptedPresentation

▸ **issueEncryptedPresentation**(`item`): `Promise`<`any`\>

Method to encrypt and issue credential

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `any` |

#### Returns

`Promise`<`any`\>

#### Defined in

[packages/verifiable-credentials/src/sharing-credential.ts:29](https://github.com/verida/verida-js/blob/039856c/packages/verifiable-credentials/src/sharing-credential.ts#L29)

___

### issuePublicPresentation

▸ **issuePublicPresentation**(`did`, `item`, `contextName`, `options`): `Promise`<`unknown`\>

 Method for for publishing an encrypted credential data

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `string` |
| `item` | `any` |
| `contextName` | `string` |
| `options` | `any` |

#### Returns

`Promise`<`unknown`\>

#### Defined in

[packages/verifiable-credentials/src/sharing-credential.ts:51](https://github.com/verida/verida-js/blob/039856c/packages/verifiable-credentials/src/sharing-credential.ts#L51)
