import React from 'react';
import styles from './card.module.css';
import ImgIcon from '@site/static/img/file-text.svg';

const ContentCard = ({ title, description, icon }) => {
	return (
		<div className={styles.contentCard}>
			<div>{icon}</div>
			<div className={styles.contentCardSection}>
				<h4>{title}</h4>
				<p>{description}</p>
			</div>
		</div>
	);
};

export default ContentCard;
