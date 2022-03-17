/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

 import React from 'react';
 import { useState, useEffect } from "react"
 import { store, useGlobalState } from 'state-pool';
 import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
 
 
 store.setState("globalDID", null);
 store.setState("globalVeridaContext", null);
 
 // We do this weird importing thing because Docusaurus attempts to do ServerSide Rendering and
 // Verida components generalyl don't support that.
 let Network = null;
 let VaultAccount = null;
 let Credentials = null;
 let hasSession = null;
 
 if (ExecutionEnvironment.canUseDOM) {
     const veridaClient = require("@verida/client-ts");
     Network = veridaClient.Network;
 
     const veridaWebVault = require("@verida/account-web-vault");
     VaultAccount = veridaWebVault.VaultAccount;
     hasSession = veridaWebVault.hasSession;

     const veridaVerifiableCredentials = require("@verida/verifiable-credentials")
     Credentials = veridaVerifiableCredentials.Credentials
 }
 
 const  ReactLiveScope = {
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
 };
 
 
 export default ReactLiveScope;
 
 
 