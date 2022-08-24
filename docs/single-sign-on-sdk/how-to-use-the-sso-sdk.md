---
title: How to use the SSO SDK
description: Verida Developer Documentation
keywords: [Verida, Web3, Developers]
---

:::caution

The Verida Single Sign On APIs are subject to change during the developer preview phase. 

:::

Initialize a connection to the Verida network using a private key stored on the user’s mobile device using the Verida Vault.

This easy to use integration method allows a user to scan a QR code to sign into your application. If the user doesn’t have the Verida Vault installed, they will be prompted to install it. Existing users will be prompted to authorize your application to access encrypted storage for that application.

## Installation

This requires installing the `@verida/account-web-vault` dependency:

```bash npm2yarn
npm install  @verida/account-web-vault
```

## Usage

Here’s how you initialize an application context:

```jsx
import { Network, EnvironmentType } from '@verida/client-ts';
import { VaultAccount } from '@verida/account-web-vault';

const VERIDA_ENVIRONMENT = EnvironmentType.TESTNET;
const CONTEXT_NAME = 'My Application Context Name';

// The LOGO_URL should be a 170x170 PNG file
const LOGO_URL = "https://assets.verida.io/verida_login_request_logo_170x170.png";

const account = new VaultAccount({
  request: {
    logoUrl: "https://assets.verida.io/verida_login_request_logo_170x170.png",
    openURL: window.location.href, // will redirect the user to this same page after accepting the login request in the Vault app
  }
});

const context = Network.connect({
	client: {
		environment: VERIDA_ENVIRONMENT,
	},
	account: account,
	context: {
		name: CONTEXT_NAME,
	},
});
if (!context) {
	console.log(
		'User cancelled login attempt by closing the QR code modal or an unexpected error occurred'
	);
}
```

## Configuration

Various configuration options can be set (as parameters in `VaultAccount`) for the single sign-on SDK.

These (all optional) config options include:

- `serverUri?` — A string representing the WSS URI
- `loginUri?` — The login URI or page where the user will be sent to login using the app; ie: vault.verida.io.
- `canvasId?` — A string representing the DOM id where the QR code canvas will be injected
- `request?` — An object representing an authorization request that matches https://vault.schemas.verida.io/auth/loginRequest/latest/schema.json
- `request?.logoUrl?` — The URL of a 170x170 PNG logo to display in the vault
- `request?.openUrl?` — An optional URL for the Vault to open in the default browser on the user's mobile device after login is accepted. This will automatically authorize the user in local storage so future page loads of your application will be authenticated.
- `callback?` — A callback function when the auth response is received.
- `deeplinkId?` — The HTML element ID of a link that should have the deeplink URI attached to the `href` property

## Notes

Due to limitations, the redirection of the user, enabled by the `request?.openUrl?` option, will open a new tab in the default browser.

As a complement, it is recommended to use the [hasSession](../api/verida-js/modules/verida_account_web_vault.md#hassession) method and a conditional `connect()` to optimise the user experience. An example of this pattern is shown in the [Single Sign On tutorial](../tutorial/SSO.mdx).
