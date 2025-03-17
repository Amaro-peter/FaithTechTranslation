import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "FaithTech Workbook",
  tagline: "Practicing Redemptive Technology Design",
  favicon: "/img/favicon.ico",

  // Set the production url of your site here
  url: "https://workbook.faithtech.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "faithtechcreate", // Usually your GitHub org/user name.
  projectName: "workbook", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "pt-br",
    locales: ["en", "pr-br"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/FaithTechCreate/workbook/blob/main",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
        gtag: {
          trackingID: "G-HC316DN259",
          anonymizeIP: true,
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "support",
        path: "support",
        routeBasePath: "support",
        editUrl: "https://github.com/FaithTechCreate/workbook/blob/main",
        sidebarPath: "./sidebarsSupport.ts",
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/faithtech-social-card.jpg",
    navbar: {
      title: "Livro Prático Fé & Tecnologia",
      logo: {
        alt: "FaithTech Logo",
        src: "img/logo.svg",
      },
      items: [
        { to: "/", label: "Documentos", position: "left" },
        { to: "/support", label: "Suporte", position: "left" },
        { to: "/blog", label: "Histórias", position: "left" },
        {
          href: "https://github.com/FaithTechCreate/workbook",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Documentos",
          items: [
            {
              label: "Visão Geral",
              to: "/",
            },
          ],
        },
        {
          title: "Comunidade",
          items: [
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/company/faithtechhub/",
            },
            {
              label: "Slack",
              href: "https://faithtechhub.slack.com",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/faithtechhub",
            },
          ],
        },
        {
          title: "Mais",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/FaithTechCreate/workbook",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} FaithTech, Inc. Feito com Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
