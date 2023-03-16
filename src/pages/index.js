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
  faPlaystation,
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
              href="https://discord.gg/2tMaMkpy8G"
              className="discord social"
              alt="Discord"
            >
              <FontAwesomeIcon icon={faDiscord} size="2x" />
            </a>
            <a
              href="https://www.facebook.com/trophycatgamesllc/"
              className="facebook social"
              alt="Facebook"
            >
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a
              href="https://instagram.com/trophycatgames"
              className="instagram social"
              alt="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a
              href="https://instagram.com/trophycatgames"
              className="kickstarter social"
              alt="Kickstarter"
            >
              <FontAwesomeIcon icon={faKickstarterK} size="2x" />
            </a>
            <a
              href="https://www.patreon.com/TrophyCatGamesLLC"
              className="patreon social"
              alt="Patreon"
            >
              <FontAwesomeIcon icon={faPatreon} size="2x" />
            </a>
            <a
              href="https://tiktok.com/@trophycatgames"
              className="tiktok social"
              alt="Tiktok"
            >
              <FontAwesomeIcon icon={faTiktok} size="2x" />
            </a>
            <a
              href="https://www.youtube.com/@trophycatgames"
              className="youtube social"
              alt="YouTube"
            >
              <FontAwesomeIcon icon={faYoutube} size="2x" />
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
              href="https://play.google.com/store/apps/dev?id=5731946363590295486&pli=1"
              className="googleplay social"
              alt="Google Play Store"
            >
              <FontAwesomeIcon icon={faGooglePlay} size="2x" color="white" />
            </a>
            <a
              href="https://playstation.com"
              className="playstation social"
              alt="Playstation"
            >
              <FontAwesomeIcon icon={faPlaystation} size="2x" color="white" />
            </a>
            <a
              href="https://xbox.com"
              className="xbox social"
              alt="Xbox"
            >
              <FontAwesomeIcon icon={faXbox} size="2x" color="white" />
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
      title={`Indie Game Development`}
      description="Trophy Cat Games LLC is an indie game development studio based in Utah.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
