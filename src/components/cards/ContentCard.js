import React from 'react';
import styles from './card.module.css';

const ContentCard = ({ icon }) => {
	return (
		<div className={styles.contentCard}>
			<div>{icon}</div>
		</div>
	);
};

export default ContentCard;
