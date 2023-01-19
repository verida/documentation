import React from "react";
import Head from "@docusaurus/Head";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import BrowserOnly from "@docusaurus/BrowserOnly";
import ExternalLink from "@site/static/img/external-link.svg";
import DiscordLogo from "@site/static/img/discord-logo.svg";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import ContentCard from "../components/cards/ContentCard";
import GithubCard from "../components/cards/GithubCard";
import CommunityBannerCard from "../components/cards/CommunityBannerCard";
import Footer from "../components/Footer";
import ReadDocsIcon from "@site/static/img/read_docs.svg";
import ExploreAPiICon from "@site/static/img/explore_api.svg";
import IntTutorialIcon from "@site/static/img/interactive_tutorial.svg";
import DemosIcon from "@site/static/img/demos.svg";
import {
	APPLE_STORE_LINK,
	GITHUB_LINKS,
	GOOGLE_PLAY_STORE_LINK,
	HOME_HEAD_DESCRIPTION,
} from "../constant";

const CONTENT_CARD_LIST = [
	{
		title: "Read the Documentation",
		icon: (
			<ReadDocsIcon
				title='icon'
				style={{
					width: "85%",
				}}
			/>
		),
		link: "/docs/intro",
		subText:
			"Learn about the core concepts of the Verida protocol, the network and more",
	},
	{
		title: "See API Documentation",
		icon: (
			<ExploreAPiICon
				title='icon'
				style={{
					width: "85%",
				}}
			/>
		),
		link: "/docs/api/verida-js/",
		subText: "Detailed documentation of the Verida JS library",
	},
	{
		title: "Interactive Tutorial",
		icon: (
			<IntTutorialIcon
				title='icon'
				style={{
					width: "85%",
				}}
			/>
		),
		link: "/docs/tutorial/introduction",
		subText:
			"Try the interactive tutorial to get you coding with Verida as quickly as possible.",
	},
	{
		title: "Demos",
		icon: (
			<DemosIcon
				title='icon'
				style={{
					width: "85%",
				}}
			/>
		),
		link: "/docs/demos",
		subText: "Test our demo applications to interact with the Verida protocol",
	},
];

export default function Home() {
	const { siteConfig } = useDocusaurusContext();

	return (
		<BrowserOnly
			fallback={
				<div>
					<main className={styles.mainSection}>Loading...</main>
				</div>
			}
		>
			{() => (
				<Layout
					noFooter={window.location.pathname === "/"}
					title={siteConfig.title}
					description='Verida enables the development of secure, decentralized applications that allow users to own and control how their data is used and shared.'
				>
					<Head>
						<title>Verida Developer Portal</title>
						<meta name='title' content='Verida Developer Portal' />
						<meta name='description' content={HOME_HEAD_DESCRIPTION} />
						<meta property='og:type' content='website' />
						<meta property='og:url' content='https://developers.verida.io/' />
						<meta property='og:title' content='Verida Developer Portal' />
						<meta property='og:description' content={HOME_HEAD_DESCRIPTION} />
						<meta property='twitter:card' content='summary_large_image' />
						<meta
							property='twitter:url'
							content='https://developers.verida.io/'
						/>
						<meta property='twitter:title' content='Verida Developer Portal' />
						<meta
							property='twitter:description'
							content={HOME_HEAD_DESCRIPTION}
						/>
					</Head>
					<main className={styles.mainSection}>
						<section className={styles.heroSection}>
							<h1>Welcome to the Verida Developer Portal</h1>
							<div>
								Verida is a multi-chain protocol for interoperable database
								storage and messaging built on decentralized identity.
							</div>
						</section>
						<section className={styles.cardSection}>
							<div className={styles.contentCard}>
								{CONTENT_CARD_LIST.map((item) => (
									<ContentCard key={item.title} {...item} />
								))}
							</div>
							<div className={styles.sectionTitle}>
								<h2>Getting Started</h2>
							</div>
							<div className={styles.gettingStartedCardContainer}>
								<a href={APPLE_STORE_LINK}>
									<img src='/img/app_store_apple.svg' />
								</a>
								<a href={GOOGLE_PLAY_STORE_LINK}>
									<img src='/img/play_store_google.svg' />
								</a>
							</div>
							<CommunityBannerCard
								link='https://discord.verida.io'
								headerTitle='Join our Discord Community'
								icon={<DiscordLogo title='DiscordLogo' />}
								bodyText={`We would love to hear from you! Let us know what you're building or if you need any assistance getting started.`}
							/>
							<CommunityBannerCard
								link='https://www.verida.io/ecosystem#partner'
								headerTitle='Verida Early Adopter Program'
								bodyText={`Join the growing ecosystem of partners building the future of web3.`}
							/>
							<div className={styles.githubCardSection}>
								<div className={styles.sectionTitle}>
									<h2>GitHub Repositories</h2>
								</div>
								<p>
									The Verida protocol is comprised of an ecosystem of open
									source components
								</p>
								<div className={styles.githubCard}>
									{GITHUB_LINKS.map((item) => (
										<GithubCard key={item.title} {...item} />
									))}
								</div>
								<span className={styles.githubCardSectionSpan}>
									<Link
										href='https://github.com/orgs/verida/repositories'
										target='_blank'
									>
										{" "}
										View all on GitHub <ExternalLink title='link' />
									</Link>
								</span>
							</div>
						</section>
					</main>
					{window.location.pathname === "/" && <Footer />}
				</Layout>
			)}
		</BrowserOnly>
	);
}
