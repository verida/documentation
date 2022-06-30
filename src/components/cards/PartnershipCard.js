import React from "react";
import styles from "./card.module.css";
import Link from "@docusaurus/Link";

const PartnerShipCard = () => {
	return (
		<Link
			className={styles.discordBannerLink}
			href='https://www.verida.io/ecosystem#partner'
		>
			<div className={styles.discordBanner}>
				<div></div>
				<div className={styles.discordBannerContent}>
					<h3>Verida Early Adopter Program</h3>
					<p>
						Join the growing ecosystem of partners building the future of web3.
					</p>
				</div>
			</div>
		</Link>
	);
};

export default PartnerShipCard;
