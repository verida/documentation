---
title: Vue Components
sidebar_position: 2
description: Verida Developer Documentation
keywords: [Verida, Web3, Developers, Verifiable Credentials]
---


### Using the @verida/vue-account Vue components

Verida supplies open source Vue components for easy app development. See the [Verida Vue Components repo](https://github.com/verida/verida-vue-components/tree/develop/components/account) for comprahensive documentation all options. 


:::info
This component can be customized to suite your application styles and themes. See [the available props](https://github.com/verida/verida-vue-components/tree/develop/components/account#props)
:::

NB: This supports Vue 3 only

## Usage

Create a base vue project using the command below

```
 vue create myapp
```

install our verida package.
```
yarn add  @verida/vue-account
```

The `@verida/vue-account` component library registration  enables the `vda-account` and `vda-login` component to be accessed across your application.

```js title="main.js"
import { createApp } from 'vue';
import App from './App.vue';
import Account from '@verida/vue-account';


const app = createApp(App);

app.use(Account);

app.mount('#app');

```

- NOTE : You can retrieve the user application `context` from the parameter of the `onConnected` event emitter pass to the component .

This works for both the `vda-login` and `vda-account`

### Using the `vda-login` component

This component is used to handle SSO (Single Sign on) login it leverages our `@verida/client-ts` and `@verida/account-web-vault` packages under the hood.

```jsx title="Home.vue"
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

This component is used to display a logged-in user profile details such as `name`, `did` and `avatar`. If the user is not logged in it will supply a login link and generate the SSO (Single Sign On) login form in the same way the the `vda-login` component.


- Example code:

```jsx title="Login.vue"
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
