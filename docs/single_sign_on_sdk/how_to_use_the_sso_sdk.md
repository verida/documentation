# How to use the SSO SDK

Initialize a connection to the Verida network using a private key stored on the user’s mobile device using the Verida Vault.

This easy to use integration method allows a user to scan a QR code to sign into your application. If the user doesn’t have the Verida Vault installed, they will be prompted to install it. Existing users will be prompted to authorize your application to access encrypted storage for that application.

# Installation

This requires installing the `@verida/account-web-vault` dependency:

```bash
yarn add @verida/account-web-vault
```

# Usage

Here’s how you initialize an application context:

```jsx
import { Network, EnvironmentType } from '@verida/client-ts'
import { VaultAccount } from '@verida/account-web-vault'

const VERIDA_ENVIRONMENT = EnvironmentType.TESTNET
const CONTEXT_NAME = 'My Application Context Name'
const VERIDA_TESTNET_DEFAULT_SERVER = 'https://db.testnet.verida.io:5002/'
const SSO_CONFIG = {}

const account = new VaultAccount({
    defaultDatabaseServer: {
        type: 'VeridaDatabase',
        endpointUri: VERIDA_TESTNET_DEFAULT_SERVER
    },
    defaultMessageServer: {
        type: 'VeridaMessage',
        endpointUri: VERIDA_TESTNET_DEFAULT_SERVER
    },
        vaultConfig: SSO_CONFIG
})

const context = Network.connect({
    client: {
        environment: VERIDA_ENVIRONMENT
    },
    account: account,
    context: {
        name: CONTEXT_NAME
    }
})
if (!context) {
    console.log("User cancelled login attempt by closing the QR code modal or an unexpected error occurred")
}
```

# Configuration

Various configuration options can be set (via `vaultConfig` parameter in `VaultAccount`) for the single sign-on SDK.

These (all optional) config options include:

- `serverUri?` — A string representing the WSS URI
- `loginUri?` — The login URI or page where the user will be sent to login using the app; ie: vault.verida.io.
- `canvasId?` — A string representing the DOM id where the QR code canvas will be injected
- `request?` — An object representing an authorization request that matches https://schemas.verida.io/auth/request/schema.json
- `callback?` — A callback function when the auth response is received.
- `logoUrl?` — The URL of a logo to display in the vault
- `deeplinkId?` — The HTML element ID of a link that should have the deeplink URI attached to the `href` property