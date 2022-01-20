import React from 'react';
import styles from './card.module.css';
import Link from '@docusaurus/Link';

const ContentCard = ({ icon, isExternalLink, link }) => {


	return (
		<>
			{
				isExternalLink ? <Link href={link}>
					<div className={styles.contentCard}>
						<div>{icon}</div>
					</div>
				</Link> :
					<Link to={link}>
						<div className={styles.contentCard}>
							<div>{icon}</div>
						</div>
					</Link>
			}
		</>
	);
};

export default ContentCard;
