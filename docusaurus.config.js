// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Trophy Cat Games',
  tagline: '2D Platformer coming 2023 on Kickstarter.',
  favicon: 'img/favicon.ico',



  // Production URL for site:
  url: 'https://trophycat.games',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'TrophyCatGames', // Usually your GitHub org/user name.
  projectName: 'tcg-website', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [

      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true
      },
      image: 'img/2dPlatformer_social.jpg',
      navbar: {
        title: 'Trophy Cat Games',
        logo: {
          alt: 'Trophy Cat Games Logo',
          src: 'img/logo.svg',
        },
        items: [
          {to: '/blog', label: 'Blog', position: 'left'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Desktop Platform',
            items: [
              {
                label: 'Steam',
                href: 'https://steamcommunity.com/id/trophycatgames/',
              },
              {
                label: 'GOG',
                href: 'https://www.gog.com/u/TrophyCatGames',
              },
            ],
          },
          // {
          //   title: 'Console Platform',
          //   items: [
          //     {
          //       label: 'Nintendo',
          //       href: 'https://nintendo.com',
          //     },
          //     {
          //       label: 'Playstation',
          //       href: 'https://steam.com',
          //     },
          //     {
          //       label: 'Xbox',
          //       href: 'https://nintendo.com',
          //     },
          //   ],
          // },

          
          {
            title: 'Mobile Platform',
            items: [
              // {
              //   label: 'Amazon Appstore',
              //   href: 'https://www.amazon.com/gp/mas/get/android',
              // },
              // {
              //   label: 'Apple App Store',
              //   href: 'https://www.apple.com/app-store/',
              // },
              {
                label: 'Google Play Store',
                href: 'https://play.google.com/store/apps/dev?id=5731946363590295486&pli=1',
              },
            ],
          },
          {
            title: 'Support Us',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/2tMaMkpy8G',
              },
              {
                label: 'Patreon',
                href: 'https://patreon.com/TrophyCatGamesLLC',
              },
              {
                label: 'Kickstarter',
                href: 'https://www.kickstarter.com/profile/hsmith-dev/about',
              },
            ],
          },
          {
            title: 'Social',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/trophycatgamesllc/',
              },
              {
                image: 'img/Digital-Patreon-Wordmark_WhiteOnFieryCoral-Sm.jpg',
                label: 'Instagram',
                href: 'https://instagram.com/trophycatgames',
              },
              {
                label: 'TikTok',
                href: 'https://tiktok.com/@trophycatgames',
              },
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/@trophycatgames',
              },
              
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} HSmithDev LLC dba Trophy Cat Games. Website Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
