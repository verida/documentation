import React from "react";
import styles from "./card.module.css";
import Link from "@docusaurus/Link";

const ContentCard = ({ icon, link, subText }) => {
	return (
		<div className={styles.contentCardBox}>
			<Link to={link} className={styles.contentCard}>
				{icon}
			</Link>
			<br />
			<span>{subText}</span>
		</div>
	);
};

export default ContentCard;
