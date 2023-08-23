// @ts-nocheck
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: "Verida Developers",
	tagline: "Welcome to your Web3 toolkit!",
	url: "https://developers.verida.io",
	baseUrl: "/",
	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",
	favicon: "img/new_favicon.ico",
	organizationName: "verida", // Usually your GitHub org/user name.
	projectName: "verida", // Usually your repo name.
	trailingSlash: false,
	themes: ["@docusaurus/theme-live-codeblock"],
	presets: [
		[
			"@docusaurus/preset-classic",
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: require.resolve("./sidebars.js"),
					remarkPlugins: [
						(require("@docusaurus/remark-plugin-npm2yarn"), { sync: true }),
					],
				},
				sitemap: {
					changefreq: "weekly",
					priority: 0.5,
				},
				pages: {
					remarkPlugins: [require("@docusaurus/remark-plugin-npm2yarn")],
				},
				blog: false,
				theme: {
					customCss: require.resolve("./src/css/custom.css"),
				},
			}),
		],
	],
	scripts: [
		{
			src: "https://plausible.io/js/plausible.js",  defer: true, 'data-domain': 'developers.verida.network'
		},
	],
	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			colorMode: {
				defaultMode: "light",
				disableSwitch: true,
				respectPrefersColorScheme: false,
			},
			metadata: [
				{ name: "keywords", content: "verida, personal data" },
				{ name: "robots", content: "max-image-preview:large" },
			],
			navbar: {
				//title: 'Verida',
				logo: {
					alt: "Verida Logo",
					src: "img/new_logo.svg",
				},
				items: [
					{
						type: "doc",
						docId: "intro",
						position: "left",
						label: "Documentation",
					},
					{
						href: "https://verida.io",
						label: "Verida Homepage",
						position: "left",
					},
					// {to: '/blog', label: 'Blog', position: 'left'},
					{
						href: "https://github.com/verida",
						label: "GitHub",
						position: "right",
					},
				],
			},
			image: "img/verida_social_preview2.png",
			footer: {
				style: "light",
				links: [
					{
						title: "Product",
						items: [
							{ label: "Solutions", href: "https://www.verida.io/solutions" },
							{ label: "Get App", href: "https://www.verida.io/user-vault" },
						],
					},
					{
						title: "Company",
						items: [
							{ label: "About", href: "https://www.verida.io/about-us" },
							{ label: "Careers", href: "https://www.verida.io/careers" },
							{ label: "Blog", href: "https://news.verida.io" },
						],
					},
					{
						title: "Community",
						items: [
							{ label: "Telegram", href: "https://t.me/verida_community" },
							{ label: "Twitter", href: "https://twitter.com/verida_io" },
							{ label: "Discord", href: "https://discord.com/invite/qb6vS43" },
							{ label: "Medium", href: "https://medium.com/verida" },
							{
								label: "LinkedIn",
								href: "https://www.linkedin.com/company/verida-technology/",
							},
						],
					},
					{
						title: "Developer",
						items: [
							{
								label: "Develop with verida",
								href: "https://www.verida.io/verida-developers",
							},
							{
								label: "Whitepaper",
								href: "https://www.verida.io/whitepaper?utm=devfooter",
							},
							{ label: "Documentation", href: "https://developers.verida.io/" },
							{ label: "Github", href: "https://github.com/verida/" },
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
		"./webpack_plugin",
	],
};

module.exports = config;
