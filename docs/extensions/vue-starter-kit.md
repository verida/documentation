---
title: Vue starter Kit Demo
sidebar_position: 1
description: Verida Developer Documentation
keywords: [Verida, Web3, Developers, Verifiable Credentials]
---


### A Guide on how to use @verida/vue-account

Open Source Vue Components for Verida

- This component can be customized to suite your application styles and themes .

NB: This supports vue 3 only

## Usage

Create a base vue project using the command below

```
 vue create myapp
```

install our verida package.
```
yarn add  @verida/vue-account
```

The `@verida/vue-account` component library registration  enables the `vda-account` and vda-login` component to be accessed across your application.

main.js

```js
import { createApp } from 'vue';
import App from './App.vue';
import Account from '@verida/vue-account';


const app = createApp(App);

app.use(Account);

app.mount('#app');

```

- NOTE : You can retrieve the user application `context` from the parameter of the `onSuccess` function passed as a prop .

This works for both the `vda-login` and `vda-account`

### Using the `vda-login` component

This component is used to handle SSO (Single Sign on) login it leverages our `@verida/client-ts` and `@verida/account-web-vault` packages under the hood.

```js
<template>
  <div id="app">
    <vda-login
      @onError="onError"
      @onConnected="onSuccess"
      :contextName="contextName"
      :logo="logo"
      :loginText: 'LOGIN_TEXT',
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Login",
  data() {
    return {
      contextName: "Verida: Account Component",
      logo: "https://assets.verida.io/verida_login_request_logo_170x170.png",
    };
  },
  methods: {
    onSuccess(context) {
     console.log(context)
    },
    onError(error) {
      console.log("Login Error", error);
    },
  },
});
</script>

```

### Using the `vda-account` component

This component is used to display a logged-in user profile details such as `name` , `did`and  `avatar` this happens after the `vda-login` component has been used for performing and SSO (Single Sign on) Login.

- You can listen for an event `connected` after a successful SSO Login , see example code below  

- Example code :

```js
<template>
  <div id="app">
    <vda-account 
      :logo="logo"
      :contextName="contextName"
      @onLogout="onLogout" 
      @onError="onError"
      @onConnected="onSuccess"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Login",
  data() {
    return {
      contextName: "Verida: Account Component",
      logo: "https://assets.verida.io/verida_login_request_logo_170x170.png",
    };
  },
  methods: {
    onLogout() {
      console.log("Handle Logout");
    },
    onSuccess(response: any) {
      // The response is the application context of the connected user..
      console.log(response)
    },
    onError(error) {
      console.log("Login Error", error);
    },
  },
});
</script>

```
