import React from 'react';
import Layout from '@theme/Layout';
import BrowserOnly from '@docusaurus/BrowserOnly';
import ExternalLink from '@site/static/img/external-link.svg';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import ContentCard from '../components/cards/ContentCard';
import DiscordCard from '../components/cards/DiscordCard';
import GithubCard from '../components/cards/GithubCard';
import Footer from '../components/Footer';
import ReadDocsIcon from '@site/static/img/read_docs.svg';
import ExploreAPiICon from '@site/static/img/explore_api.svg';
import IntTutorialIcon from '@site/static/img/interactive_tutorial.svg';
import DemosIcon from '@site/static/img/demos.svg';

const contentCards = [
	{
		title: 'Read the Documentation',
		description: 'Start here to learn the basic documentation',
		icon: <ReadDocsIcon title='icon' />,
	},
	{
		title: 'See API Documentation',
		description:
			'Explore these docs to learn more about Verida API documentation',
		icon: <ExploreAPiICon title='icon' />,
	},
	{
		title: 'Interactive Tutorial',
		description: `Check out the interactive tutorials for an introduction to Verida's Web3 APIs`,
		icon: <IntTutorialIcon title='icon' />,
	},
	{
		title: 'Demos',
		description: 'Explore Verida technologies with demo applications',
		icon: <DemosIcon title='icon' />,
	},
];

const githubLinks = [
	{
		title: 'Verida-Js',
		link: 'https://github.com/verida/verida-js',
	},
	{
		title: 'Schemas-common',
		link: 'https://github.com/verida/schemas-common',
	},
	{
		title: 'Documentation',
		link: 'https://github.com/verida/documentation',
	},
	{
		title: 'Schemas-core',
		link: 'https://github.com/verida/schemas-core',
	},
	{
		title: 'Account Explorer',
		link: 'https://github.com/verida/account-explorer',
	},
	{
		title: 'Generic-demo',
		link: 'https://github.com/verida/generic-demo',
	},
];
export default function Home() {
	const { siteConfig } = useDocusaurusContext();

	return (
		<BrowserOnly>
			{() => <Layout
				noFooter={window.location.pathname === '/'}
				title={siteConfig.title}
				description='Verida enables the development of secure, decentralized applications that allow users to own and control how their data is used and shared.'
			>
				<main className={styles.mainSection}>
					<section className={styles.heroSection}>
						<h1>Welcome to your Web3 toolkit!</h1>
						<p>
							Explore the Verida Developer's Portal to get started with our
							developer documentation, <br /> explore our demos, try out our
							interactive tutorials and connect with the Web3 developer community.
						</p>
					</section>
					<section className={styles.cardSection}>
						<div className={styles.contentCard}>
							{contentCards.map((item) => (
								<ContentCard key={item.title} {...item} />
							))}
						</div>
						<DiscordCard />
						<div className={styles.githubCardSection}>
							<h2>GitHub Repositories</h2>
							<div className={styles.githubCard}>
								{githubLinks.map((item) => (
									<GithubCard key={item.title} {...item} />
								))}
							</div>
							<span className={styles.githubCardSectionSpan}>
								View all on GitHub <ExternalLink title='link' />
							</span>
						</div>
					</section>
				</main>
				{window.location.pathname === '/' && <Footer />}
			</Layout>}
		</BrowserOnly>

	);
}
