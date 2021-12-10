// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Verida Developers',
    tagline: 'Welcome to your Web3 toolkit!',
    url: 'https://www.verida.io/',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/new_favicon.ico',
    organizationName: 'facebook', // Usually your GitHub org/user name.
    projectName: 'docusaurus', // Usually your repo name.
    themes: ['@docusaurus/theme-live-codeblock'],
    presets: [
        [
            '@docusaurus/preset-classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    // editUrl: null,
                },
                sitemap: {
                    changefreq: 'weekly',
                    priority: 0.5,
                    trailingSlash: false,
                },
                // blog: {
                //   showReadingTime: true,
                //   // Please change this to your repo.
                //   editUrl:
                //     'https://github.com/facebook/docusaurus/edit/main/website/blog/',
                // },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            metadata: [{ name: 'keywords', content: 'verida, personal data' }],
            navbar: {
                //title: 'Verida',
                logo: {
                    alt: 'Verida Logo',
                    src: 'img/new_logo.svg',
                },
                items: [
                    {
                        type: 'doc',
                        docId: 'intro',
                        position: 'left',
                        label: 'Documentation',
                    },
                    {
                        href: 'https://verida.io',
                        label: 'Main',
                        position: 'left',
                    },
                    // {to: '/blog', label: 'Blog', position: 'left'},
                    {
                        href: 'https://github.com/verida',
                        label: 'GitHub',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Docs',
                        items: [
                            {
                                label: 'Verida Developers',
                                to: '/docs/intro',
                            },
                            {
                                label: 'Verida Client SDK',
                                href: 'https://apidocs.verida.io/index.html',
                            },
                        ],
                    },
                    {
                        title: 'Community',
                        items: [
                            {
                                label: 'Discord',
                                href: 'https://discord.com/invite/gBzTSzMCNA',
                            },
                        ],
                    },
                    {
                        title: 'More',
                        items: [
                            // {
                            //   label: 'Blog',
                            //   to: '/blog',
                            // },
                            {
                                label: 'GitHub',
                                href: 'https://github.com/verida',
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} Verida. Built with Docusaurus.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
            algolia: {
                // If Algolia did not provide you any appId, use 'BH4D9OD16A'
                appId: 'YOUR_APP_ID',

                // Public API key: it is safe to commit it
                apiKey: 'YOUR_SEARCH_API_KEY',

                indexName: 'YOUR_INDEX_NAME',

                // Optional: see doc section below
                contextualSearch: true,

                // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
                externalUrlRegex: 'external\\.com|domain\\.com',

                // Optional: see doc section below
                appId: 'YOUR_APP_ID',

                // Optional: Algolia search parameters
                searchParameters: {},

                //... other Algolia params
            },
        }),
};

module.exports = config;
