---
sidebar_position: 1
title: Storing Web3 data
description: Where should Web3 data be stored
keywords: [Verida, Web3, Data, Storage]
---



# Where should Web3 Data be stored?

One question that web3 developers have to address for their applications is where should the application data be stored.

Historically, most developers have chosen to use either blockchain storage or IPFS. Verida is a third option that fills a gap in the web3 developer's tool chest. 

Blockchain storage is the first type of storage most web3 developers use. However, it doesn't take long to realize this is best suited for very specific types of data. The nature of a blockchain makes it expensive to store more than small amounts of data and the immutable, public nature of the data means it is unsuitable for many applications.

Many developers discover these limitations and switch to using [IPFS](https://ipfs.io/). IPFS is a globally accessible content addressable file storage network, where files are referenced by the hash of their content. This makes it very well suited to "flat file" type storage, and it has had great success as storage for NFT images. In broad terms IPFS is used in a similar way to how AWS S3 is used in Web2 development - to make files available to people and applications. 

The next limiation Web3 developers find is around private data. User's want self-soverginty over personal data so they can control their own information. How do you store things like a user's interests or even things like health information in a way that doesn't make it publically available to anyone for datamining? 

Many developers restort to trying to encrypt data and store it either on-chain or in encrypted files on IPFS. There are a number of serious problems with this:

* Most developers are not cryptographers and often make mistakes in how they implement their encryption, putting user data at risk.
* Both blockchains and IPFS are immutable storage systems, meaning that any mistake either in implementation or by a user accidently leaking an encryption key means their data is globally public forever with no way to fix it.
* The lack of a proper query mechanism leads to badly performing apps. Either applications load large files into memory and developers find data inside them or there are many small files each of which must be requested each time it is needed. 
* Updates and deletes are implemented by copying all data to a new version of the file and resaving it. This is both expensive and slow. 
* No control over the physical storage location of data which is often important for legal or policy reasons. 

Verida exists to solve these problems. The [Verida Data Store](/docs/concepts/data-storage) is a decentralized, end-to-end (E2E) encrypted document database.

Because it is a database, developers get strong query capabilities. Data updates are trivial and fast which means correcting any errors in the data is simple. Databases are both encrypted (so storage node operators can never see the data) and protected by an authentication system (so they are inaccessible to non-authorised users).

Verida [storage nodes](/docs/network/storage-node) are open source and can be self-hosted. Users can choose what node to store their data on, meaning that the legal and policy issues around data sovereignty are easily addressed. 

![Data Storage Choice](/static/img/storage-choice-flowchart.png)


<table className="web3-compare-table">
<caption>Comparison of Web3 data storage methods</caption>
<colgroup>
    <col className="table-first-column" ></col>
</colgroup>
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
        <td>Write once data field</td>
        <td>Write once flat file</td>
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
        <td>Always Private</td>
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
    </tr>

</tbody>

</table>