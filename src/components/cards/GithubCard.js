import React from "react";
import styles from "./card.module.css";
import Link from "@docusaurus/Link";
import GithubLogo from "@site/static/img/github.svg";

const GithubCard = ({ link, title }) => {
	return (
		<div className={styles.githubLink}>
			<div>
				<GithubLogo className={styles.githubLinkImg} title='github' />
			</div>
			<div>
				<span className={styles.githubLinkText}>
					{" "}
					<Link href={link}>{title}</Link>{" "}
				</span>
			</div>
		</div>
	);
};

export default GithubCard;
