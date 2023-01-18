---
title: Authentication Server
sidebar_position: 3
description: Verida Developer Documentation
keywords: [Verida, Web3, Developers]
---

## What is the authentication server?

The [vault auth server](https://github.com/verida/vault-auth-server/) is a web socket server that bridges connections between a mobile device and a web page to enable a secure authentication using private blockchain keys stored on the mobile device.

## How Authorization Works

This is the login flow:

1. The Verida Account makes a request to the storage node API to obtain an auth JWT to be signed (`/auth/generateAuthJwt`). This prevents replay attacks.
2. The Verida Account signs a consent message using their private key. This consent message proves the user wants to unlock a specific application context
3. The Verida Account submits the signed authorization request (`/auth/authenticate`). Assuming the signed AuthJWT is valid, the storage node returns a refresh token and an access token
4. The Verida Account can then use the access token to either; 1) make storage node requests (ie: create database) or 2) directly access CouchDB as an authenticated user (using `Bearer` token auth)
5. When the access token expires, the Verida Account can use the refresh token to request a new access token (`/auth/connect`)
6. If a refresh token is close to expiry, the Verida Account can use the active refresh token to obtain a new refresh token (`/auth/regenerateRefreshToken`)

When a Verida Account authenticates, it can designate an `authenticate` requst to be linked to a particular device by specifying the `deviceId` in the request.

This allows a specific device to be linked to a refresh token. A call to `/auth/invalidateDeviceId` can be used to invalidate any refresh tokens linked to the specified `deviceId`. This allows the Verida Wallet to remotely log out an application that previously logged in.

Note: This only invalidates the refresh token. The access token will remain valid until it expires. It's for this reason that access tokens are configured to have a short expiry (5 minutes by default). CouchDB does not support manually invalidating access tokens, so we have to take this timeout approach to invalidation.

### Usage

To start your application, use `npm run start`

### Configuration

Update `.env` / `AUTH_URI` to match the domain name / IP address of this server. You will also need to configure the Auth Client library to use this value as the `serverUri`.

You must configure each application this server will support by editing the `config/index.js` file.

The object key corresponds to the application name and the object properties correspond to the private key being used to sign authentication requests and the domain name initiating the sign on request.

## Security

The configuration file allows you to provide the private key of a valid blockchain account that can sign messages relating to the login process.

There is a `loginOrigin` property that, if specified, will check the `origin` HTTP header from each socket request to ensure it’s coming from the expected domain. This ensures third party websites can’t easily request valid authentication tokens. This also ensures third party websites can be prevented from using the resources of any auth server that is running.

Malicious third parties could obtain a token by spoofing the `origin` HTTP header and then presenting that to the user. However, this `loginOrigin` property is passed inside the encrypted payload to the Verida Wallet and is displayed to the user. This allows the user to visually verify the domain name they are currently on matches the domain name displayed on the Verida Wallet login screen. In the future, the Verida Trust Framework will add an additional layer of security by matching on chain metadata against the public key and domain name used to sign the payload.

# #Production

We recommend using [PM2](https://www.npmjs.com/package/pm2) package to manage running the server.

Starting the server:

```bash
$ cd <vault-auth-server-location>
$ pm2 start ~/.nvm/versions/node/v12.14.1/bin/yarn --name vault-auth-server -- serve
```

Restarting the server:

```bash
$ pm2 restart vault-auth-server -- serve
```

Stopping the server:

```bash
$ pm2 stop vault-auth-server -- serve
```

Monitoring the server:

```bash
$ pm2 monit
```

It’s also recommended to install `pm2-logrotate` which is useful to manage logs on the server.