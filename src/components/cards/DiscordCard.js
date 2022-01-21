import React from 'react';
import styles from './card.module.css';
import DiscordLogo from '@site/static/img/discord-logo.svg';
import Link from '@docusaurus/Link';

const DiscordCard = () => {
    return (
        <Link className={styles.discordBannerLink} href="https://discord.com/invite/qb6vS43">
            <div className={styles.discordBanner}>
                <div><DiscordLogo className={styles.discordBannerSvg} title="DiscordLogo" /></div>
                <div className={styles.discordBannerContent}>
                    <h3>Join our Discord Community</h3>
                    <p>
                        We would love to hear from you! Let us know what you're building or if you need any assistance getting started.
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default DiscordCard;
