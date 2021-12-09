---
sidebar_position: 8
---
# Profiles

# Open my profile

Open your own profile for the current context:

```jsx
const myProfile = await context.openProfile("public")
await myProfile.set('name', 'Stevie')
const name = await myProfile.get('name', 'Stevie')

const profileData = await myProfile.getMany()
await myProfile.delete('name')

const listener = await myProfile.listen(function(row) {
    console.log(`${row.key} = ${row.value}`)
})
listener.cancel()
```

# Open an external profile

Open an external profile for any context using an instance of the `client` object.

For example, open a user’s public profile created in the `Verida: Vault` mobile application:

```tsx
const did = 'did:vda:0x6B2a1bE81ee770cbB4648801e343E135e8D2Aa6F'
const publicProfile = await client.openPublicProfile(did, 'Verida: Vault')
```

It’s also possible to open external profile for the current context:

```tsx
const did = 'did:vda:0x6B2a1bE81ee770cbB4648801e343E135e8D2Aa6F'
const externalProfile = await context.openProfile("public", did)
```