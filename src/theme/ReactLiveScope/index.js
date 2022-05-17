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


if (ExecutionEnvironment.canUseDOM) {
  const veridaClient = require("@verida/client-ts");
  Network = veridaClient.Network;

  const veridaWebVault = require("@verida/account-web-vault");
  VaultAccount = veridaWebVault.VaultAccount;
  hasSession = veridaWebVault.hasSession;
  

  const veridaVerifiableCredentials = require("@verida/verifiable-credentials");
  Credentials = veridaVerifiableCredentials.Credentials;

  globalAccount = new VaultAccount({
    request: {
      logoUrl:
        "https://developers.verida.io/img/tutorial_login_request_logo_170x170.png",
    },
  });

  globalLoginFunction = async function (contextName) {
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

  // getCircularReplacer = () => {
  //   const seen = new WeakSet();
  //   return (key, value) => {
  //     if (typeof value === "object" && value !== null) {
  //       if (seen.has(value)) {
  //         return;
  //       }
  //       seen.add(value);
  //     }
  //     return value;
  //   };
  // };


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
  globalAccount,
  globalLoginFunction,
  getCircularReplacer
};

export default ReactLiveScope;
