import React from "react";
import Link from "@docusaurus/Link";
import styles from "./card.module.css";

const CommunityBannerCard = ({ link, headerTitle, bodyText, icon }) => {
	return (
		<Link href={link}>
			<div className={styles.communityBanner}>
				<div>{icon}</div>
				<div className={styles.communityBannerContent}>
					<h3>{headerTitle}</h3>
					<p>{bodyText}</p>
				</div>
			</div>
		</Link>
	);
};

export default CommunityBannerCard;
