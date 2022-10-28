/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import { useState, useEffect } from "react";
import { store, useGlobalState } from "state-pool";
import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";


// We do this weird importing thing because Docusaurus attempts to do ServerSide Rendering and
// Verida components generalyl don't support that.
let Network = null;
let VaultAccount = null;
let Credentials = null;
let hasSession = null;
let globalAccount = null;
let globalLoginFunction = null;
let getCircularReplacer = null;
let WalletConnect = null


if (ExecutionEnvironment.canUseDOM) {
  const WalletConnectClient = require("@walletconnect/client")
  WalletConnect = WalletConnectClient

  const veridaClient = require("@verida/client-ts");
  Network = veridaClient.Network;

  const veridaWebVault = require("@verida/account-web-vault");
  VaultAccount = veridaWebVault.VaultAccount;
  hasSession = veridaWebVault.hasSession;

  const veridaVerifiableCredentials = require("@verida/verifiable-credentials");
  Credentials = veridaVerifiableCredentials.Credentials;

  const initWalletConnection = async () => {
    const bridgeURL = "https://bridge.walletconnect.org"

    const connector = new WalletConnect.default({
      bridge: bridgeURL,
    });

    if (!connector.connected) {
      // create new session
      await connector.createSession();
    }

    // Subscribe to connection events
    connector.on("connect", (error, payload) => {
      if (error) {
        console.error(error);
        return;
      }
      console.log("WalletConnect on connect payload:", payload);
    });
    connector.on("disconnect", (error, payload) => {
      if (error) {
        console.error(error);
        return;
      }
      console.log("WalletConnect on disconnect payload:", payload);
    });
  }

  globalLoginFunction = async function (contextName) {
    const DEFAULT_CHAIN_ID = "eip155:1"
    const connector = await initWalletConnection()

    globalAccount = new VaultAccount({
      request: {
        logoUrl:
          "https://developers.verida.io/img/tutorial_login_request_logo_170x170.png",
        walletConnect: {
          version: connector.version,
          uri: connector.uri,
          chainId: DEFAULT_CHAIN_ID,
        },
      },
    });

    const context = await Network.connect({
      client: {
        environment: "testnet",
      },
      account: globalAccount,
      context: {
        name: contextName,
      },
    })

    return context;
  }
}

const ReactLiveScope = {
  React,
  ...React,
  useState,
  useEffect,
  store,
  useGlobalState,
  Network,
  VaultAccount,
  Credentials,
  hasSession,
  WalletConnect,
  globalAccount,
  globalLoginFunction,
  getCircularReplacer
};

export default ReactLiveScope;
