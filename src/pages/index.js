import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import HeaderImage from '../../static/img/header.svg';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div>
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
    const HeaderImage = require('../../static/img/header.svg').default;

  return (
      <Layout
          title={siteConfig.title}
          description="Description will go into a meta tag in <head />"
      >
          <img src="img/header.svg" style={{ width: '100%' }} />
          <HomepageHeader />
          <main>
              <p style={{ margin: '0px 300px 50px 300px', textAlign: 'left' }}>
                  Verida is a network of personal data owned and controlled by users. Users are
                  incentivized to unlock their data stored on centralized platforms. Builders access
                  this data for new exciting use cases such as trusted storage, decentralized
                  messaging and single sign on. User's private data can be used as inputs into smart
                  contracts, enabling connectivity to multiple blockchains.
                  <br />
                  <br /> We believe it’s a fundamental human right that individuals have ownership
                  and control over their personal data. We believe everyone has a right to control
                  their identity through decentralisation, giving citizens control over how they
                  interact with the digital world.
                  <br />
                  <br /> Explore the Verida Developer's Portal to get started with our developer
                  documentation, explore our demos, try out our interactive tutorials and connect
                  with the Web3 developer community.
                  <br />
                  <br />
                  <a href="https://learn.verida.io/">Try Verida now with an interactive tutorial</a>
                  <br />
                  <a href="./docs/intro">Explore the docs</a>
                  <br />
                  <a href="https://apidocs.verida.io/index.html">See the API Docs</a>
                  <br />
                  <a href="https://discord.com/invite/gBzTSzMCNA">
                      Join our Developer Community on Discord
                  </a>
              </p>
          </main>
      </Layout>
  );
}
