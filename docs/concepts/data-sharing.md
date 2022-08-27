---
title: Data Sharing
sidebar_position: 9
description: Verida Developer Documentation
keywords: [Verida, Web3, Developers]
---

# Data Sharing

The Verida protocol offers a lot of flexibility and controls around data access and encryption.

This guide provides a deeper insight on how these tools can be helpful to build powerful and secure decentralized applications on the Verida network.

## Sending private data to a user (Incoming data)

**Scenario:** _Your application has personal data about an individual that you want to securely share with them as a once off._

**Example:** _You may generate a contact (name, phone) for a user in a centralized system and wish to securely send the contact to an individual so they can message them in the future._

**Assumptions:** _The personal data being shared is a single record and could be stored anywhere (either in a Verida storage node or a centralized database)_

### Developers

- [Data message sending tutorial](../tutorial/messaging)
- [Data message documentation](../client-sdk/messaging#sending-messages-outbox)

<aside>
💡 This model can be used to share more than one record, but is only suitable for a small amount of data as it involves copying each data record via an encrypted Verida message.

</aside>

## Requesting private data from a user (Data request)

**Scenario:** A user has personal data about themselves that your applications wants consent to obtain a copy of._

**Example:** You may request a copy of a drivers license credential from a user._

**Assumptions:** The personal data is a single record and is stored in a Verida storage node on the Verida network._

### Developers

- [Requesting data documentation](../client-sdk/messaging#requesting-data)

### Examples

- Request a copy of a credential (ie: proof of address, KYC)
- Request a user’s profile / preference record (dietary preferences, contact details, health preferences etc.)

## Creating an application data silo (Context data)

**Scenario:** _An application wants to create a secure collection of databases where the data is owned and controlled by the end user_

**Example:** _A developer creates a decentralized game and wants to create a custom database of game metadata to store for the user. The game metadata can only be unlocked by the user via a consent sign in message in the Verida Vault_

**Assumptions:** _The data is proprietary to the application and a user is unlikely to want that data to be shared / used by other applications._

Access to this data is typically “unlocked” in real time by sending a “Verida Connect” request to the user’s Vault, but the data isn’t visible by default in the Verida Vault.

### Developers

- [Verida Connect tutorial](../tutorial/SSO)
- [Read / write application data tutorial](../tutorial/datastores)

## Sharing access to lots of private data (Data synchronization)

**Scenario:** _A user has a lot of personal data stored in their Verida Vault that your application wants consent to securely read and write._

**Example:** _You may operate a medical practice that stores a patient's medical records and you wish to regularly read and write the patient’s medical data._

### Developers

Documentation examples will be coming shortly.

### Examples

- A medical practioner can synchronize a patient’s last 6 months of health records
- A decentralized advertising network can request read only access to a live stream of a user’s social media posts and personal preferences
- A user can update their phone number and it will be automatically updated with all third party applications that have synchronized access to the user’s private profile

<aside>
💡 This strategy can also be used to setup a real-time synchronization of private data from one application to another. This can also be extended to synchronize a sub-set of data by applying a realtime filter on the synchronized data.

</aside>

An example of this is coming soon in the [Verida Tutorial](../tutorial/introduction).

### Data synchronization options

There is a lot of flexibility in how this data synchronization is configured. An application can request access to:

- A read and / or write stream of all data of a particular type
- Once off data syncronization
- Permanent sync (until the user disables)
- A filtered stream of data based on a query