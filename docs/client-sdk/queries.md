---
sidebar_position: 5
description: Verida Developer Documentation
keywords: [Verida, Web3, Developers]
---
# Queries

The majority of decentralised data solutions in the Web3 space provide simple `key` / `value` storage options as querying distributed and / or encrypted databases is a significantly *hard* problem.

The Verida Client SDK architecture has the following features that facilitate querying of encrypted data in a consistent manner across many distributed databases:

- Using `CouchDB`compatible database syncronisation and merging
- Using common JSON schemas to ensure data consistency between distributed applications
- Encrypt / Decrypt data on the fly between multiple `CouchDB` compliant database backends, with different encryption keys for each

As a result, all applications implementing the Verida Client SDK support querying user data as you would expect from a typical NoSQL database.

Example: Fetch all runs a user has completed in 2018

```tsx
const employmentData = database.getMany("https://common.schemas.verida.io/health/activity/v0.1.0/schema.json", {
  type: "run",
  date: {
    "$gte": "2018-01-01"
  }
});
```

# Query data

Databases and datastores support a full range of query functionality. This includes; filters, limit, offset and sort:

```tsx
const filter = {
  organization: 'Google'
}

const options = {
  limit: 20,
  skip: 0,
  sort: [{'firstName': 'desc'}]
}

const results = contacts.getMany(filter, options)
console.log(results)
```

You can learn more about the query functionality in the official [PouchDB documentation](https://pouchdb.com/api.html#query_index).

Here's another example using a regular expression to match all records with a name that has `ri`:

```tsx
const filter = {
	name: {
		$regex: ".*ri.*"
	}
}
const results = contacts.getMany(filter, options)
```

<aside>
💡 Sorting only works if an index has been defined for the field being sorted. Indexes are defined in the datastore schema. See [schemas](../concepts/schemas.md) and [queries / indexes](queries.md) for more details.

</aside>

# Pagination

The following strategies allows you to paginate data for a user based on a `name` field:

```tsx
// Configure our page size (10) and start position (lastId), then sort documents by name

let lastId = null
const currentPageResults = await datastore.getMany({
  _id: {$gt: lastId}
}, {
  limit: 10,
  sort:['name']
})
```

We receive the first 10 documents sorted by name. We can continue paginating by using the last value as our next starting point. At any given point in time, we will only have 10 documents stored in the memory, which is great for performance.

# Indexes

You can manually create **database indexes** by utilising the underlying [PouchDB index API methods](https://pouchdb.com/api.html#create_index):

```tsx
const veridaDb = await context.openDatabase('test_db')
const pouchDb = await veridaDb.getDb()
await pouchDb.createIndex({
  index: {
    fields: ['foo']
  }
})
```

<aside>
💡 Datastore indexes are defined in the underlying JSON schema document for the datastore. These indexes are automatically managed by Verida Datastore. See [schemas](../concepts/schemas.md) and [queries / indexes](queries.md) for more details.

</aside>