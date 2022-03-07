---
title: Verifiable Credentials
sidebar_position: 7
description: Verida Developer Documentation
keywords: [Verida, Web3, Developers]
---






Verifiable Credentials are are [W3C standard](https://www.w3.org/TR/vc-data-model/) used extensively within the Verida network. This page summarizes the Verida developer APIs and how they operate within the platform.

Our @verida/verifiable-credentials package enables you to Create and verify W3C Verifiable Credentials in a JWT format which be shared and across an application that integrates with our verida protocol. This package leverages the `did-jwt` and `did-jwt-vc` under to the hood.

### Prerequisites

You will have to authenticate a user to your application to create a `context` for the logged-in user.

There are two ways this can be done :

1. Using our [Single Sign-on SDK](https://www.notion.so/sso-sdk)
2. Using our [Account Node Package](https://www.notion.so/Authentication-ee83c8ec29224752a6f60a7ca7452ba6)

### Issue encrypted credential

This sample code can be used within the [Verida Web Sandbox](https://web-sandbox.demos.testnet.verida.io/):

```js
import { Credentials } from '@verida/verifiable-credentials';

const CONTEXT_NAME = "Verida: Credential Sample";


const account = new window.VaultAccount({
   logoUrl: 'https://assets.verida.io/verida_login_request_logo_170x170.png'
});

const context = await window.Network.connect({
  client: {
    environment: "testnet",
  },
  account: account,
  context: {
    name: CONTEXT_NAME,
 },
});

const did = await account.did();
const type = "inbox/type/dataSend";

const config = {
  recipientContextName: "Verida: Vault",
};

const credentialData = {
  name: "Sample Credential",
  summary: "This is a sample VC",
  fullName: "Lee Choi",
  dateOfBirth: "1992-01-30",
  schema: "https://assets.verida.io/documentation/sample_schema.json",
  testTimestamp: new Date().toISOString(),
  result: 'high-level'
}

const credential = new Credentials(context);

const didJwtVc = await credential.createCredentialJWT(subjectDID, test);

const data = {
  data: [
    {
      ...credentialData,
      didJwtVc,
    },
  ],
};
const message = "Sample Verifiable Credential";

const messaging = await context.getMessaging();

await messaging.send(did, type, data, message, config);

```

Descriptions the `credential.createCredentialJWT(subjectDID,credentialData,options)` params

- subjectDID : DID attached to the issuing credential
- credentialData : The data been issued following this  [W3C data model standard](https://www.w3.org/TR/vc-data-model/#example-a-simple-example-of-a-verifiable-credential)
- options: is an optional object that contains two values `expirationDate` and `issuanceDate`

The above credentialData object was created based on the schema field (schema) which has all the data fields this will enable this piece of data to be interoperable with other applications.
See [schemas](https://developers.verida.io/docs/concepts/schemas) to get started with schema.

### Sharing Credential

See the below code examples to issue an encrypted credential it will return a base64encode URI  which can be verified by the connected did account

```js

import { SharingCredential } from '@verida/verifiable-credentials';

const app = context;

const shareCredential = new SharingCredential(app);

//Item : This is the credential data returned from the credential.createCredentialJWT()

const data = await shareCredential.issueEncryptedPresentation(item);

```

### Verify a credential

See the below code examples to verify an  encrypted base64encode credential `URI` in order to retrieve credential data.

```js

  import { Credentials } from '@verida/verifiable-credentials';
  import { Utils } from '@verida/client-ts';

  const app = context;

  const credential = new Credentials(app);

  // Fetch and decode the presentation
  const decodedURI = Buffer.from(uri, 'base64').toString('utf8');

  const jwt = await Utils.fetchVeridaUri(decodedURI, app);

  const decodedPresentation = await credentials.verifyPresentation(jwt)

  // Retrieve the verifiable credential within the presentation

  const verifiableCredential = decodedPresentation.verifiablePresentation.verifiableCredential[0]

```

## Vault User Experience

When a Verida Vault user receives a credential sent using the code above their experience will as follows.

Firstly they will receive an operating system (iOS/Andorid) notification. The iOS notification looks like this:

![Untitled](verifiable_credentials/untitled.png)

`Sample Verifiable Credential` is the content of the `message` set here:

```jsx
const message = "Sample Verifiable Credential";
```

The new message will show up in their Vault inbox. Note that an upcoming release will give the ability to set the icon here.

![Untitled](verifiable_credentials/untitled1.png)

The user can click through to accept the message.

![Untitled](verifiable_credentials/untitled2.png)

Once accepted the credential will show up in the credential list.

![Untitled](verifiable_credentials/untitled3.png)

`This is a sample VC` is set in the `summary` field in `data` as follows: `summary: "This is a sample VC"`.

Clicking through to the credential will show the details. An upcoming release will allow another user to verify the credential themselves.

![Untitled](verifiable_credentials/untitled4.png)

The data on this screen comes from the following code:

```jsx
const test = {
  name: "Sample Credential",
  summary: "This is a sample VC",
 fullName: "Lee Choi",
 dateOfBirth: "1992-01-30",
 schema: "https://assets.verida.io/documentation/sample_schema.json",
 testTimestamp: new Date().toISOString(),
 result: 'high-level'
}
```

Currently the field names come directly from the data sent. Display field names are the names of the field, with spaces inserted on caseBreaks and the initial letter of each word upper cased.

 A future version will use the titles set in the [schema sent in the data message](https://assets.verida.io/documentation/sample_schema.json):

```json
    {
      "properties": {
        "result": {
          "title": "Level",
          "type": "string",
          "enum": ["base-level", "high-level"]
        },
        "name": {
          "title": "Credential Type",
          "type": "string"
        },
        "summary": {
          "title": "Summary of Credential",
          "type": "string"
        },
        "fullName": {
          "title": "Full Name",
          "type": "string"
        },
        "dateOfBirth": {
          "title": "Date of Birth",
          "type": "string"
        },
        "testTimestamp": {
          "title": "time stamp",
          "type": "string"
        }
      }
    }
```
