import React from 'react';
import styles from './footer.module.css';

const NewsLetter = () => {
	return (
		<div className={styles.newsLetter}>
			<div>
				<h5>Sign up to our newsletter</h5>
				<p>
					A monthly digest of the latest news, updates and goings-on in the
					teaching world
				</p>
			</div>
			<div>
				<form className={styles.form}>
					<input type='text' placeholder='email address' />
					<button>Subscribe</button>
				</form>
			</div>
		</div>
	);
};

export default NewsLetter;
