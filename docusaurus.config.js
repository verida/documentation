// @ts-nocheck
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
    organizationName: 'verida', // Usually your GitHub org/user name.
    projectName: 'verida', // Usually your repo name.
    trailingSlash: false,
    themes: ['@docusaurus/theme-live-codeblock'],
    presets: [
        [
            '@docusaurus/preset-classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    remarkPlugins: [
                        [require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }],
                    ],
                },
                sitemap: {
                    changefreq: 'weekly',
                    priority: 0.5,
                },
                pages: {
                    remarkPlugins: [require('@docusaurus/remark-plugin-npm2yarn')],
                },
                blog: false,
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],
    scripts: [
        {
            src: 'https://plausible.io/js/plausible.js',
        },
    ],
    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            colorMode: {
                defaultMode: 'light',
                disableSwitch: true,
                respectPrefersColorScheme: false,
                switchConfig: {

                },
            },
            metadata: [
                        { name: 'keywords', content: 'verida, personal data'},
                        {name: 'robots', content: 'max-image-preview:large'},
                    ],
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
                        label: 'Verida Homepage',
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
        }),
    plugins: [
        [
            require.resolve("@cmfcmf/docusaurus-search-local"),
            {
                // Options here
                indexBlog: false,
                indexPages: false,
            },
        ],
        './webpack_plugin',
    ],
};

module.exports = config;
