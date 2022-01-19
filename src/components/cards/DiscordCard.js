import React from 'react';
import styles from './card.module.css';
import DiscordLogo from '@site/static/img/discord-logo.svg';

const DiscordCard = () => {
    return (
        <div className={styles.discordBanner}>
            <div><DiscordLogo title="DiscordLogo" /></div>
            <div className={styles.discordBannerContent}>
                <h3>Join our Discord Community</h3>
                <p>
                    We would love to hear from you! Let us know what you're building or if you need any assistance getting started.
                </p>
            </div>
        </div>
    );
};

export default DiscordCard;
