import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Anapaya Knowledge Base',
  tagline: 'Anapaya - The SCION company',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://anapaya-docs-poc.netlify.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs',
          routeBasePath: '/docs',
          sidebarPath: './sidebars.ts',
        },
        pages: {
          path: 'pages',
          routeBasePath: '/',
          include: ['index.js'],
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Anapaya Knowledge Base',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'productsSideBar',
          position: 'left',
          label: 'Products & Use Cases',
        },
        {
          type: 'docSidebar',
          sidebarId: 'technicalDocsSideBar',
          position: 'left',
          label: 'Technical Documentation',
        },
        {
          type: 'docSidebar',
          sidebarId: 'scionSideBar',
          position: 'left',
          label: 'Understanding SCION',
        },
        {
          type: 'docSidebar',
          sidebarId: 'glossarySideBar',
          position: 'left',
          label: 'Glossary & FAQ',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'More',
          items: [
            {
              label: 'Anapaya',
              href: 'https://www.anapaya.net',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Anapaya Systems AG`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
