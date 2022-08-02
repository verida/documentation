import React from "react";
import styles from "./card.module.css";
import DiscordLogo from "@site/static/img/discord-logo.svg";
import Link from "@docusaurus/Link";

const DiscordCard = () => {
	return (
		<Link href='https://discord.verida.io'>
			<div className={styles.communityBanner}>
				<div>
					<DiscordLogo
						className={styles.communityBannerSvg}
						title='DiscordLogo'
					/>
				</div>
				<div className={styles.communityBannerContent}>
					<h3>Join our Discord Community</h3>
					<p>
						We would love to hear from you! Let us know what you're building or
						if you need any assistance getting started.
					</p>
				</div>
			</div>
		</Link>
	);
};

export default DiscordCard;
