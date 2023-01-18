---
title: How to use the Verida Connect SDK
description: Verida Developer Documentation
keywords: [Verida, Web3, Developers]
---

This easy to use integration method allows a user to scan a QR code to sign into your application. If the user doesn’t have the Verida Wallet installed, they will be prompted to install it. Existing users will be prompted to authorize your application to access encrypted storage for that application.

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

// (optional) Import WalletConnect if required
import WalletConnect from "@walletconnect/client";


const VERIDA_ENVIRONMENT = EnvironmentType.TESTNET;
const CONTEXT_NAME = 'My Application: Context Name';

// (optional) WalletConnect configuration
// See the WalletConnect section below
const DEFAULT_CHAIN_ID = "eip155:1"
connector = new WalletConnect({
    bridge: 'https://bridge.walletconnect.org',
});

// Logo for your application
// The LOGO_URL should be a 170x170 PNG file
const LOGO_URL = "https://assets.verida.io/verida_login_request_logo_170x170.png";

const account = new VaultAccount({
  request: {
    logoUrl: LOGO_URL,
    // An optional URL that will open a browser on the user's mobile device
    // after accepting the login request in the Verida Wallet mobile app
    openURL: window.location.href,
  },
  walletConnect: {
    version: connector.version,
    uri: connector.uri,
    chainId: DEFAULT_CHAIN_ID,
  },
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

Various configuration options can be set (as parameters in `VaultAccount`) for the Verida Connect SDK.

These (all optional) config options include:

- `request?` — An object representing an authorization request that matches https://vault.schemas.verida.io/auth/loginRequest/latest/schema.json
- `request?.logoUrl?` — The URL of a 170x170 PNG logo to display in the vault
- `request?.openUrl?` — An optional URL for the Vault to open in the default browser on the user's mobile device after login is accepted. This will automatically authorize the user in local storage so future page loads of your application will be authenticated.
- `request?.walletConnect?` — An optional configuration to automatically establish a wallet connection upon sign in. Required parameters; `version` (Wallet connect version; `1` or `2`), `uri` (WalletConnect bridging server), `chainId` (A CAIP chain ID such as `eip155:5` for Ethereum Goerli, see below)
- `callback?` — A callback function when the auth response is received.
- `deeplinkId?` — The HTML element ID of a link that should have the deeplink URI attached to the `href` property
- `serverUri?` — An optional string representing the WSS URI of the authentication server. Leave this blank to use a server hosted by Verida or host your own (See [Authentication server](./sso-authentication-server))
- `loginUri?` — The login URI or page where the user will be sent to login using the app; ie: vault.verida.io.
- `canvasId?` — A string representing the DOM id where the QR code canvas will be injected

When the user accepts the login request, an `accessToken` and a `refreshToken` are returned to the browser. If an `accessToken` expires, the SDK will automatically attempt to fetch a new `accessToken` using the `refreshToken`. If the `refreshToken` has expired, the SDK will re-open the QR code SSO modal and ask the user to re-login before continuing. Any existing network connections will be restored once the user logs in again.

### Open URL

Due to limitations with how mobile devices work, the redirection of the user, enabled by the `request?.openUrl?` option, will open a new tab in the default browser.

It is recommended to use the [hasSession](../api/verida-js/modules/verida_account_web_vault.md#hassession) method and a conditional `connect()` to optimise the user experience. An example of this pattern is shown in the [Single Sign On tutorial](../tutorial/SSO.mdx).

Authorization uses an `accessToken` and a `refreshToken`. If an `accessToken` expires, the SDK will automatically attempt to fetch a new `accessToken` using the `refreshToken`. If the `refreshToken` has expired, the SDK will re-open the QR code SSO modal and ask the user to re-login before continuing. Any existing network connections will be restored once the user logs in again.

### WalletConnect (v1 &amp; v2)

When the user authorizes a connection to your applicaiton they can also be prompted to establish a WalletConnect connection. The example above specifies a `walletConnect` configuration parameter when creating a `VaultAccount` instance.

```jsx
walletConnect: {
  version: connector.version,
  uri: connector.uri,
  chainId: DEFAULT_CHAIN_ID,
},
```

WalletConnect version 1 and version 2 are both supported.

#### Chain ID

The `chainId` must be a CAIP comptaible blockchain identifier (See [CAIP-2](https://github.com/ChainAgnostic/CAIPs/blob/master/CAIPs/caip-2.md)).

The Verida Wallet currently supports the following testnet networks:

1. `eip155:5` Ethereum Goerli Testnet
2. `eip155:80001` Polygon Mumbai Testnet
3. `algorand:SGO1GKSzyE7IEPItTxCByw9x8FmnrCDexi9/cOUJOiI=` Algorand Testnet
4. `near:testnet` NEAR Testnet