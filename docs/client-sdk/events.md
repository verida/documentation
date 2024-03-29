---
title: Events
sidebar_position: 9
description: Verida Developer Documentation
keywords: [Verida, Web3, Developers]
---
Your application can listen to events for when data changes in your application.

## Data changes

Once a `datastore` or `database` is opened, you can listen to changes to automatically update your application:

```tsx
const filter = {
    status: 'active'
}
const listener = await database.changes(function(row) {
  console.log("Row changed", row)
}, filter)
```

Try this out with your own profile data in the browser in our [tutorial](../tutorial/events.mdx).

Options:

- `filter`: An optional JSON object. The listener will only raise events if the data in the object matches the supplied filter.

You can cancel the event listener:

```tsx
listener.cancel()
```

Similarly you can call:

```tsx
const listener = await datastore.changes(function(row) { ... })
```

## Inbox messages

You can be notified when a new inbox message arrives for your application:

```tsx
const messaging = await context.getMessaging()
messaging.onMessage(function(message) { console.log('New message!', message)})
```

## Database sync changes

Data is automatically synchronized from remote encrypted servers to the local client. It’s possible to listen to events related to this syncing behavior:

```tsx
const listener = database.onSync('error', (err) => { console.log(err) })
listener.cancel()
```

A full list of events is available via the [PouchDB Documentation](https://pouchdb.com/api.html#sync)