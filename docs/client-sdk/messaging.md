---
sidebar_position: 7
description: A short description of this page
image: https://uploads-ssl.webflow.com/60e8365cd5794f8db04151ed/6107868980521e0acf27b2d9_favicon.svg
keywords: [keywords, describing, the main topics]
---
# Messaging

Every application has a built-in inbox for receiving messages and an outbox for sending messages. This allows users and applications to send data between each other knowing nothing than the other user’s DID and application name.

Learn more about the messaging architecture.

# Open messaging

You can simply open the messaging capabilities for the currently connected application `context` as follows:

```tsx
const messaging = await context.getMessaging()
```

# Inbox

## Get messages

You can retreive the 20 most recent messages:

```tsx
const messages = await messaging.getMessages()
```

Alternatively, specify optional `filter` and `options` parameters:

```tsx
const filter = {
    type: 'inbox/dataRequest'
}
const options = {
  limit: 20,
  skip: 0,
  sort: [{ sentAt: 'desc' }]
}
const messages = await messaging.getMessages(filter, options)
```

## Listen for messages

Your application can register a callback function to listen for new inbox messages:

```tsx
const listener = await messaging.onMessage(function(inboxEntry) {
    console.log('New inbox message received', inboxEntry)
})
```

The `inboxEntry` object utilises the [inbox/entry schema](https://core.schemas.verida.io/inbox/entry/latest/schema.json). The two most important properties are:

- `type` — The type of inbox entry. This references a full schema URL.
- `data` — The data contained in the inbox entry. This will be an object adhering to the schema specified in `type`. [See a list of currently supported inbox types](https://github.com/verida/schemas/tree/master/schemas/inbox/type).

You can stop listening:

```tsx
listener.cancel()
```

# Outbox

Your application can send messages to other accounts on the Verida network.

This example sends a contact record to a user’s Verida Vault:

```tsx
const did = 'did:vda:0x6B2a1bE81ee770cbB4648801e343E135e8D2Aa6F'
const type = 'inbox/type/dataSend'

// Generate an inbox message containing an array of data
const data = {
    data: [
        {
            firstName: 'Vitalik',
            lastName: 'Buterin',
            email: 'me@vitalik.eth',
            schema: 'https://common.schemas.verida.io/social/contact/v0.1.0/schema.json'
        }
    ]
}
const message = 'Sending you a contact'
const config = {
    recipientContextName: 'Verida: Vault'
}

messaging.send(did, type, data, message, config)
```

This could be used in two scenarios:

- A user sending their own data from one application they control to another
- A user sending data to another user within the same application

<aside>
💡 The Verida account must have already logged in and created the application context before you can send it an inbox message. For example, assume you are sending an inbox message to an application context called “Verida: Documents”. If the recipient account has never logged into that context the inbox message will fail because that account has no inbox available.

</aside>

# Built-in Message Types

See [core schemas repository](https://github.com/verida/schemas-core) for details on each supported inbox message type.

- [dataSend](https://github.com/verida/schemas-core/tree/develop/inbox/type/dataSend) — Send one or many pieces of data to a user
- [dataRequest](https://github.com/verida/schemas-core/tree/develop/inbox/type/dataRequest) — Request data from a user, supports optional filters and conditions around user’s selecting data
- [message](https://github.com/verida/schemas-core/tree/develop/inbox/type/message) — Send a generic message / notification to a user

# Examples

## Sending data

Data can be sent to an account (see Outbox example above)

## Requesting data

Data can be requested from an account:

```tsx
const did = 'did:vda:0x6B2a1bE81ee770cbB4648801e343E135e8D2Aa6F'
const type = 'inbox/type/dataRequest'

// Generate an inbox message containing an array of data
const data = {
    requestSchema: 'https://common.schemas.verida.io/social/contact/v0.1.0/schema.json',
    filter: {},
    userSelect: true
}
const message = 'Please share your contact details'
const config = {
    recipientContextName: 'Verida: Vault'
}

messaging.send(did, type, data, message, config)
```

Options:

- `filter`: A JSON filter to apply to the search when locating suitable data to share
- `userSelect`: Boolean value indicating if the user can select the data to be returned. If `false` all matching data will be returned.
- `userSelectLimit`: Integer limiting how many records a user can select.