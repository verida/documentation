import React from "react";
import Head from "@docusaurus/Head";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import BrowserOnly from "@docusaurus/BrowserOnly";
import ExternalLink from "@site/static/img/external-link.svg";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import ContentCard from "../components/cards/ContentCard";
import DiscordCard from "../components/cards/DiscordCard";
import PartnerShipCard from "../components/cards/PartnershipCard";
import GithubCard from "../components/cards/GithubCard";
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
		icon: <ReadDocsIcon title='icon' />,
		link: "/docs/intro",
		externalLink: false,
	},
	{
		title: "See API Documentation",
		icon: <ExploreAPiICon title='icon' />,
		link: "/docs/api/verida-js/",
		externalLink: true,
	},
	{
		title: "Interactive Tutorial",
		description: `Check out the interactive tutorials for an introduction to Verida's Web3 APIs`,
		icon: <IntTutorialIcon title='icon' />,
		link: "/docs/tutorial/introduction",
		externalLink: false,
	},
	{
		title: "Demos",
		description: "Explore Verida technologies with demo applications",
		icon: <DemosIcon title='icon' />,
		link: "/docs/demos",
		externalLink: false,
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
							<div className={styles.vaultDL}>
								<h1>Download the Verida Vault (Developer Preview)</h1>
							</div>
							<div className={styles.storeButtons}>
								<a href={APPLE_STORE_LINK}>
									<img
										className={styles.appstorebutton}
										src='/img/AppStore_button.svg'
									/>
								</a>
								<a href={GOOGLE_PLAY_STORE_LINK}>
									<img
										className={styles.appstorebutton}
										src='/img/GooglePlayCOMINGSOON.svg'
									/>
								</a>
							</div>
							<DiscordCard />
							<PartnerShipCard />
							<div className={styles.githubCardSection}>
								<h2>GitHub Repositories</h2>
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
