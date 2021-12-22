# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Search 

Search is implemented using [Offline / Local Search for Docusaurus](https://github.com/cmfcmf/docusaurus-search-local). This is find for our site at the moment but may need to change as it grows. The search is only available from a complete build of the site so to test do this:

```
$ yarn build
$ yarn serve
```


### Deployment

Deployment is autimatically done via [AWS Amplify](https://us-east-2.console.aws.amazon.com/amplify/home?region=us-east-2#/) when changes are merged to the `main` branch.
