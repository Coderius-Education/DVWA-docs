// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const organizationName = "Coderius-Education";
const projectName = "DVWA";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DVWA Security Training — Leer Websecurity — Coderius',
  tagline: 'Oefen websecurity met DVWA direct in je browser',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'description',
        content: 'Oefen websecurity met DVWA direct in je browser. Geen installatie nodig. Leer SQL-injectie, XSS, command injection en meer.',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'keywords',
        content: 'dvwa tutorial, dvwa zonder installatie, websecurity oefenen, sql injectie leren, command injection tutorial, ethical hacking browser',
      },
    },
  ],

  // Set the production url of your site here
  url: `https://dvwa.coderius.nl`,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: `/`,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Coderius-Education', // Usually your GitHub org/username.
	projectName: 'DVWA', // Usually your repo name.

  onBrokenLinks: 'throw',


  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'nl',
    locales: ['nl'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        // Default instance for the existing 'docs' folder
        docs: {
          id: 'default',
          path: 'docs',
          routeBasePath: 'docs',
          sidebarPath: './sidebars.js',
          editUrl: `https://github.com/${organizationName}/${projectName}/tree/main/`,
        },
        blog: false, // I see you don't have a blog, so we can disable it.
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  clientModules: [
    require.resolve('@xterm/xterm/css/xterm.css'),
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'dvwa_tutorial', // Unique ID for this instance
        path: 'dvwa_tutorial', // Path to the new docs folder
        routeBasePath: 'dvwa_tutorial', // URL base path for this section
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Coderius-DVWA',
        items: [
          {
            to: '/docs/linux_leren',
            label: 'Linux leren',
            position: 'left',
          },
          {
            to: '/docs/installatie',
            label: 'WSL installeren',
            position: 'left',
          },
          {
            to: '/docs/dvwa_installatie',
            label: 'DVWA installeren',
            position: 'left',
          },

          {
            to: '/dvwa_tutorial/',
            label: 'DVWA Challenges',
            position: 'left',
            items: [
              { to: '/dvwa_tutorial/', label: '→ Begin hier' },
              { type: 'doc', docId: 'brute-force/low', docsPluginId: 'dvwa_tutorial', label: 'Brute Force' },
              { type: 'doc', docId: 'command-injection/low', docsPluginId: 'dvwa_tutorial', label: 'Command Injection' },
              { type: 'doc', docId: 'authorization-bypass/low', docsPluginId: 'dvwa_tutorial', label: 'Authorization Bypass' },
              { type: 'doc', docId: 'sql-injection/low', docsPluginId: 'dvwa_tutorial', label: 'SQL Injection' },
              { type: 'doc', docId: 'sql-injection-blind/low', docsPluginId: 'dvwa_tutorial', label: 'SQL Injection (Blind)' },
              { type: 'doc', docId: 'xss-reflected/low', docsPluginId: 'dvwa_tutorial', label: 'XSS (Reflected)' },
              { type: 'doc', docId: 'xss-stored/low', docsPluginId: 'dvwa_tutorial', label: 'XSS (Stored)' },
              { type: 'doc', docId: 'xss-dom/low', docsPluginId: 'dvwa_tutorial', label: 'XSS (DOM)' },
              { type: 'doc', docId: 'csrf/low', docsPluginId: 'dvwa_tutorial', label: 'CSRF' },
              { type: 'doc', docId: 'file-inclusion/low', docsPluginId: 'dvwa_tutorial', label: 'File Inclusion' },
              { type: 'doc', docId: 'file-upload/low', docsPluginId: 'dvwa_tutorial', label: 'File Upload' },
              { type: 'doc', docId: 'weak-session-ids/low', docsPluginId: 'dvwa_tutorial', label: 'Weak Session IDs' },
              { type: 'doc', docId: 'csp-bypass/low', docsPluginId: 'dvwa_tutorial', label: 'CSP Bypass' },
              { type: 'doc', docId: 'javascript-attacks/low', docsPluginId: 'dvwa_tutorial', label: 'JavaScript Attacks' },
              { type: 'doc', docId: 'word-de-developer', docsPluginId: 'dvwa_tutorial', label: '🏆 Word de Developer' },
            ],
          },

          {
            to: '/docs/cheatsheet',
            label: 'Cheatsheet',
            position: 'left',
          },
          {
            href: 'https://github.com/Coderius-Education/DVWA',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Meer van Coderius',
            items: [
              { label: 'Leer Python', href: 'https://python.coderius.nl' },
              { label: 'CTF Challenges', href: 'https://ctf.coderius.nl' },
              { label: 'Fullstack Development', href: 'https://fullstack.coderius.nl' },
            ],
          },
        ],
        copyright: `Licensed under Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['php'],
      },
    }),
};

export default config;
