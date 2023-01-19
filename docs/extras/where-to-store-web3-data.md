---
sidebar_position: 2
title: Storing Web3 Data
description: Where should Web3 data be stored
keywords: [Verida, Web3, Data, Storage]
---

import ReactPlayer from "react-player";

# Where should Web3 Data be stored?

A challenge all web3 developers need to address when building applications is where the data is stored.
Historically, most web3 developers have chosen to use either blockchain storage or IPFS and sometimes resort to traditional centralized database (eg MongoDB, Postgres) for some types of data. Verida provides a decentralized replacement for those traditional databases, and a better option for some of the things developers are currently using blockchain storage or IPFS for.

## Choosing data storage

In the flowchart below we show some of the key decisions a developer must make when choosing storage.
Firstly, look at your data and decide if it is structured or unstructured. Examples of structured data include data that you would keep in a spreadsheet, a JSON or XML file or a Notion database. Unstructured data includes images, movies or other multimedia.

Secondly, is your data public or private? By public we mean it can be accessed without access control mechanisms. Note that encryption on its own is not an access control mechanism because access cannot be revoked if a key leaks.

Finally, do you need to update or delete data? Be careful here - some storage systems implement deletion as the removal of a reference to data that is stored elsewhere. In these cases the data is still there and anyone who recorded that reference can easily access it. Both deletion and updates should be implemented in such a way that all copies of the data are irrevocably modified.

![Data Storage Choice](/img/storage-choice-flowchart.png)

## Limitations of Current Web3 Data Storage Solutions

Blockchain storage is the first type of storage most web3 developers use. However, it doesn't take long to realize this is best suited for very specific types of data such as links to external data like NFTs. The nature of a blockchain makes it expensive and inefficient to store more than small amounts of data and the immutable, public nature of the data means it is unsuitable for many applications.

Many developers discover these limitations and switch to using [IPFS](https://ipfs.io/). IPFS is a globally accessible content addressable file storage network, where files are referenced by the hash of their content. This makes it very well suited to "flat file" type storage, and it has had great success as storage for NFT images. In broad terms IPFS is used in a similar way to how AWS S3 is used in Web2 development - to make files available to people and applications.

The next limitation Web3 developers find is around private data and managing access permissions to that data. Users want self-sovereignty over personal data so they can control their own information. How do you store things like a user's interests or even things like health information in a way that doesn't make it publicly available to anyone for data mining or identity theft?

Many developers resort to trying to encrypt data and store it either on-chain or in encrypted files on IPFS. There are a number of serious problems with this:

- Most developers are not cryptographers and often make mistakes in how they implement their encryption, putting user data at risk.
- Both blockchains and IPFS are immutable storage systems, meaning that any mistake either in implementation or by a user accidentally leaking an encryption key means their data is globally public forever with no way to fix it.
- The lack of a proper query mechanism leads to badly performing apps. Either applications load large files into memory and developers find data inside them or there are many small files each of which must be requested each time it is needed.
- Updates and deletes are implemented by copying all data to a new version of the file and re-saving it. This is both expensive and slow.
- No control over the physical storage location of data which is often important for legal or policy reasons.

Verida exists to solve these problems. The [Verida DbStore](https://github.com/verida/documentation/blob/feature/where-to-store-web3-data/docs/concepts/data-storage) is a decentralized, end-to-end (E2E) encrypted document database.

Because it is a database, developers get strong query capabilities. Data updates are trivial and fast which means correcting any errors in the data is simple. Databases are both encrypted (so storage node operators can never see the data) and protected by an authentication system (so they are inaccessible to non-authorized users).

Verida [storage nodes](https://github.com/verida/documentation/blob/feature/where-to-store-web3-data/docs/network/storage-node) are open source and can be self-hosted. Users can choose what node to store their data on, meaning that the legal and policy issues around data sovereignty are easily addressed. Data can be replicated to multiple non-related nodes for better availability and performance.

The table below is an easy to use reference to look at when comparing the three methods:

<table className="web3-compare-table">
<thead>
    <tr>
        <th></th>
        <th>On Chain</th>
        <th>IPFS</th>
        <th>Verida</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td>Web 2 Analogy</td>
        <td>N/A</td>
        <td>AWS S3</td>
        <td>MongoDB</td>
    </tr>
    <tr>
        <td>Storage Type</td>
        <td>Immutable, globally replicated blockchain</td>
        <td>Content Addressable File Store</td>
        <td>Encrypted Decentralized Document Database</td>
    </tr>
    <tr>
        <td>Storage Abstraction</td>
        <td>Write-once data field</td>
        <td>Write-once flat file</td>
        <td>Database API with create, read, update and delete mechanisms</td>
    </tr>
    <tr>
        <td>Storage Location</td>
        <td>Replicated everywhere</td>
        <td>Replicated everywhere</td>
        <td>Controlled by user</td>
    </tr>
    <tr>
        <td>Privacy</td>
        <td>Never Private</td>
        <td>Never Private</td>
        <td>Private by default (data can selectively be made public or shared with specific users)</td>
    </tr>
    <tr>
        <td>Encryption</td>
        <td>None</td>
        <td>None</td>
        <td>Built in end to end (E2E) encryption</td>
    </tr>
    <tr>
        <td>Authentication</td>
        <td>None</td>
        <td>None</td>
        <td>Per-user authentication</td>
    </tr>
    <tr>
        <td>Access Management</td>
        <td>None</td>
        <td>None</td>
        <td>A user-centric consent based framework for identity, access management and data sharing</td>
    </tr>

</tbody>

</table>

## Conclusion

Verida DbStore is a new type of Web3 storage that provides capabilities that are important to many applications.
It is fast, resilient and easy to use.

## Additional Resources

- [Self-sovereign data storage concepts](https://developers.verida.io/docs/concepts/data-storage)
- [Verida data sharing technical documentation](https://developers.verida.io/docs/concepts/data-sharing)
- [Verida DbStore technical documentation](https://developers.verida.io/docs/network/storage-node)
- [Interactive tutorial on Verida data storage](https://developers.verida.io/docs/tutorial/databases)
- [Join our Discord to ask the team questions](https://discord.verida.io)
- [Follow us on Twitter](https://twitter.com/Verida_io)

### Video walk-through of Verida Data Storage

<ReactPlayer
	light='/img/data_storage_title_screen.png'
	controls={true}
	playing={false}
	loop={false}
	volume={1}
	muted={false}
	url='https://www.youtube.com/watch?v=jmWtvvkk4WE'
/>
