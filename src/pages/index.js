import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faInstagram,
  faDiscord,
  faTiktok,
  faPatreon,
  faKickstarterK,
  faMicroblog,
  faSteamSquare,
  faAppStoreIos,
  faGooglePlay,
  faEmail,
  faXbox,
} from "@fortawesome/free-brands-svg-icons";

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h3 className="hero__title">Indie Game Studio</h3>
        <p className="hero__subtitle">Follow Us On Social Media</p>
        
        <div>
          <p className="social-container">
           <a
              href="/blog"
              className="blog social"
              alt="Blog"
            >
              <FontAwesomeIcon icon={faMicroblog} size="2x" color="white" />
            </a>
            <a
              href="https://www.youtube.com/@trophycatgames"
              className="youtube social"
              alt="YouTube"
            >
              <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>

            <a
              href="mailto://contact@hsmith.dev"
              className="email social"
              alt="Email"
            >
              <FontAwesomeIcon icon={faEmail} size="2x" />
            </a>
          </p>
       
        </div>
        <div >
          <p text-align="center">
           <a
              href="https://steamcommunity.com/id/trophycatgames/"
              className="steam social"
              alt="Steam"
            >
              <FontAwesomeIcon icon={faSteamSquare} size="2x" color="white" />
            </a>
            <a
              href="https://apple.com"
              className="appstore social"
              alt="App Store iOS"
            >
              <FontAwesomeIcon icon={faAppStoreIos} size="2x" color="white" />
            </a>
            <a
              href="https://play.google.com/store/apps/dev?id=6337965776600126713"
              className="googleplay social"
              alt="Google Play Store"
            >
              <FontAwesomeIcon icon={faGooglePlay} size="2x" color="white" />
            </a>
          </p>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`HSmithDev LLC`}
      description="Software Development Company based in Salt Lake City, Utah.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
