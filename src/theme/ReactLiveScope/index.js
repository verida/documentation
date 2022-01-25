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
 
 let Network = null
 let VaultAccount = null
 
 if (ExecutionEnvironment.canUseDOM) {
     const veridaClient = require("@verida/client-ts") 
     Network = veridaClient.Network
 
     const veridaWebVault = require("@verida/account-web-vault")
     VaultAccount = veridaWebVault.VaultAccount
 }
 
 const  ReactLiveScope = {
     React,
     ...React,
     useState,
     useEffect,
     Network,
     VaultAccount,
 
     store,
     useGlobalState
 };
 
 
 export default ReactLiveScope;
 
 
 