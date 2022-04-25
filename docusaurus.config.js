// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Technical Tutorial',
  tagline: 'My Study Notes',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
      navbar: {
        title: 'Technical Tutorials',
        logo: {
          alt: 'Technical Tutorials',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'devops/intro',
            position: 'left',
            label: 'DevOps',
          },
          {
            type: 'doc',
            docId: 'docker/docker-installation',
            position: 'left',
            label: 'Docker',
          },
          {
            type: 'doc',
            docId: 'git/tips',
            position: 'left',
            label: 'Git',
          },
          {
            type: 'doc',
            docId: 'java/tips',
            position: 'left',
            label: 'Java',
          },
          {
            type: 'doc',
            docId: 'nginx/intro',
            position: 'left',
            label: 'nginx',
          },
          {
            type: 'doc',
            docId: 'nodejs/intro',
            position: 'left',
            label: 'NodeJS',
          },
          {
            type: 'doc',
            docId: 'reactjs/eslint-prettier-reactjs',
            position: 'left',
            label: 'ReactJS',
          },
          {
            type: 'doc',
            docId: 'reactnative/tips',
            position: 'left',
            label: 'ReactNative',
          },
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'VSCode',
          },
          {
            type: 'doc',
            docId: 'others/iterm2/config-iterm2-on-mac',
            label: 'Others'
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/PFTian/TechnicalTutorials',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/PFTian/TechnicalTutorials',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
