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
import * as localStorage from "store";


const VERIDA_SESSION_STORE_KEY = "_verida_sessions"

store.setState("globalDID", null);
store.setState("globalVeridaContext", null);

// We do this weird importing thing because Docusaurus attempts to do ServerSide Rendering and
// Verida components generalyl don't support that.
let Network = null;
let VaultAccount = null;
let Credentials = null;
let getSession = null;
let setSession = null;

if (ExecutionEnvironment.canUseDOM) {
  const veridaClient = require("@verida/client-ts");
  Network = veridaClient.Network;

  const veridaWebVault = require("@verida/account-web-vault");
  VaultAccount = veridaWebVault.VaultAccount;


  const veridaVerifiableCredentials = require("@verida/verifiable-credentials");
  Credentials = veridaVerifiableCredentials.Credentials;

  // Locally store the Verida context which is enough to reconnect. Pass falsey to delete it
  setSession = async function(contextName, context) {
    let storedSessions = localStorage.get(VERIDA_SESSION_STORE_KEY);
    if (!storedSessions) {
      storedSessions = {}
    }

    if (!context) {
      delete storedSessions[contextName];
    } else {
      // we can't just store the context or the account because of circular references
      // Instead we store enough to reconstruct the account and the Network
      const dataToStore = {
        ACCOUNT_CONFIG: context.account.config,
        ENVIRONMENT: context.client.environment,
        CONTEXT_NAME: context.contextName
      }
      storedSessions[contextName] = dataToStore;
    }

    // write to local storage
    localStorage.set(VERIDA_SESSION_STORE_KEY, storedSessions);
  }

  tutorialOutput = function(props) {
    const e = React.createElement;

    if (props.status !== null) {    
      statusMessage = e("div", 
                        {className: "tutorial-status tutorial-status admonition admonition-info alert alert--info"}, 
                        props.status);
    } else {
      statusMessage = e("div", null);
    }

  }

  

  getSession = async function(contextName) {

    const isLoggedIn = veridaWebVault.hasSession(contextName);
    if (isLoggedIn) {
      // we are logged in.

      // get the array of contexts stored 
      let storedClientConfigs = localStorage.get(VERIDA_SESSION_STORE_KEY);
      if (!storedClientConfigs) {
        // apparently not correctly logged in! Try again
        return undefined;
      } else if (!storedClientConfigs.hasOwnProperty(contextName)) {
        // there are some contexts stored, but not this one
        // Apparently we aren't logged in properly. Try again
        return undefined;
      } else {
        // we have a context stored for this name
        const storedData = storedClientConfigs[contextName];

        // first reconstruct the account from the config
        const account = new VaultAccount(storedData.ACCOUNT_CONFIG);

        // now reconstruct and connect the Network
        const context = await Network.connect({
          client: {
            environment: storedData.ENVIRONMENT
          },
          account: account,
          context: {
            name: storedData.CONTEXT_NAME
          },
        });

        return context;
      }

    } else {
      // we aren't logged in
      return undefined;
    }
  };
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
  getSession,
  setSession,
};

export default ReactLiveScope;
