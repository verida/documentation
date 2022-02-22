import React, { useState } from 'react';
import Link from '@docusaurus/Link';
import AppLogo from '@site/static/img/verida_logo_full.svg';
import styles from './footer.module.css';

export const products = [
    { title: "Solutions", link: "https://www.verida.io/solutions" },
    { title: "Get App", link: "https://www.verida.io/user-vault" },
];

export const company = [
    { title: "About", link: "https://www.verida.io/about-us" },
    { title: "Careers", link: "https://www.verida.io/careers" },
    { title: "Blog", link: "https://news.verida.io" },
];

export const developers = [
    {
        title: "Develop with verida",
        link: "https://www.verida.io/verida-developers",
    },
    {
        title: "Whitepaper",
        link: "https://www.verida.io/whitepaper?utm=devfooter",
    },
    { title: "Documentation", link: "https://developers.verida.io/" },
    { title: "Github", link: "https://github.com/verida/" },
];

export const community = [
    { title: "Telegram", link: "https://t.me/verida_community" },
    { title: "Twitter", link: "https://twitter.com/verida_io" },
    { title: "Discord", link: "https://discord.com/invite/qb6vS43" },
    { title: "Medium", link: "https://medium.com/verida" },
    {
        title: "LinkedIn",
        link: "https://www.linkedin.com/company/verida-technology/",
    },
];


const footerNav = {
    products: {
        title: "Products",
        list: products,
    },
    company: {
        title: "Company",
        list: company,
    },
    developers: {
        title: "For Developers",
        list: developers,
    },
    community: {
        title: "Community",
        list: community,
    },
}

const Footer = () => {
    const [state] = useState(footerNav)
    return (
        <footer className={styles.footer} >
            <div className={styles.footerSection}>
                <div class="footer-links-img">
                    <a href="https://verida.io" >
                        <AppLogo title="verida" />
                    </a>
                </div>

                <div class="footer-links-nav">
                    <h5>{state.products.title}</h5>
                    <ul >
                        {state.products.list.map(item => (
                            <li key={item.title}>
                                <Link href={item.link} >{item.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div >
                <div class="footer-links-nav">
                    <h5>{state.company.title}</h5>
                    <ul >
                        {state.products.list.map(item => (
                            <li key={item.title}>
                                <Link href={item.link} >{item.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div >
                <div class="footer-links-nav">
                    <h5>{state.developers.title}</h5>
                    <ul >
                        {state.developers.list.map(item => (
                            <li key={item.title}>
                                <Link href={item.link} >{item.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div >
                <div class="footer-links-nav">
                    <h5>{state.company.title}</h5>
                    <ul >
                        {state.company.list.map(item => (
                            <li key={item.title}>
                                <Link href={item.link} >{item.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div >
            </div>


            <div className={styles.footerBottom}>
                <hr className={styles.footerLine} />
                <div className={styles.footerBottomContent}>
                    <a class="text-white" href="##">@Verida{new Date().getFullYear()}</a>
                    <a class="text-white" href="##">Terms&Conditions</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
