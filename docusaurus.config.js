// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Technical Tutorial",
  tagline: "My Study Notes, this project is still under development",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/TechnicalTutorial/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "PFTian", // Usually your GitHub org/user name.
  projectName: "TechnicalTutorial", // Usually your repo name.

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: false,
          // Please change this to your repo.
          path: "./resume",
          routeBasePath: 'resume',
          blogSidebarTitle: 'My Experience',
          blogSidebarCount: 'ALL'
        },
        
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Technical Skills",
        logo: {
          alt: "Technical Skills",
          src: "img/logo.svg",
        },
        items: [
          {
            type: 'doc',
            docId: 'scrum/scrum-concepts',
            position: 'left',
            label: 'Scrum',
          },
          {
            type: 'doc',
            docId: 'languages/intro',
            position: 'left',
            label: 'Languages',
          },
          {
            type: 'doc',
            docId: 'cloud-infrastructure/intro',
            position: 'left',
            label: 'Cloud Infrastructure',
          },
          {
            type: 'doc',
            docId: 'devops/intro',
            position: 'left',
            label: 'DevOps',
          },
          {
            type: 'doc',
            docId: 'dataops/intro',
            position: 'left',
            label: 'DataOps',
          },
          {
            type: 'doc',
            docId: 'software-development/intro',
            position: 'left',
            label: 'Software Development',
          },
          {
            type: 'doc',
            docId: 'ides-and-dev-tools/intro',
            position: 'left',
            label: 'IDEs & Dev Tools',
          },
          { to: "/resume", label: "Resume", position: "right" },
          {
            href: "https://github.com/PFTian/",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/docusaurus",
              },
              {
                label: "Discord",
                href: "https://discordapp.com/invite/docusaurus",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/docusaurus",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Resume",
                to: "/resume",
              },
              {
                label: "GitHub",
                href: "https://github.com/PFTian/TechnicalTutorials",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

module.exports = config;
