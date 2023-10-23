[root](../README.md) / [Modules](../modules.md) / @verida/web-helpers

# Module: @verida/web-helpers

## Table of contents

### Namespaces

- [&lt;internal\&gt;](verida_web_helpers._internal_.md)

### Interfaces

- [WebUserConfig](../interfaces/verida_web_helpers.WebUserConfig.md)
- [WebUserMessage](../interfaces/verida_web_helpers.WebUserMessage.md)
- [WebUserMessageLink](../interfaces/verida_web_helpers.WebUserMessageLink.md)
- [WebUserProfile](../interfaces/verida_web_helpers.WebUserProfile.md)

### Events

- [WebUser](verida_web_helpers.md#webuser)

## Events

### WebUser

• **WebUser**: `Object`

Usage:

1. Create a new instance of this class with the required configuration.
2. Check if the user is logged in with this.isConnected()
3. Log the user in with this.connect()
4. Listen to when the user has logged in with this.on('connected')
5. Listen to when the user updates their profile with this.on('profileUpdated')
5. Listen to when the user logs out with this.on('disconnected')

#### Defined in

[packages/web-helpers/src/WebUser.ts:48](https://github.com/verida/verida-js/blob/032961c/packages/web-helpers/src/WebUser.ts#L48)
