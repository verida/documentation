---
sidebar_position: 9
description: A short description of this page
image: https://uploads-ssl.webflow.com/60e8365cd5794f8db04151ed/6107868980521e0acf27b2d9_favicon.svg
keywords: [keywords, describing, the main topics]
---
# Events

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

Data is automatically syncronized from remote encrypted servers to the local client. It’s possible to listen to events related to this syncing behaviour:

```tsx
const listener = database.onSync('error', (err) => { console.log(err) })
listener.cancel()
```

A full list of events is available via the [PouchDB Documentation](https://pouchdb.com/api.html#sync)