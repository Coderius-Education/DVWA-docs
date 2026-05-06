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
            to: 'dvwa_tutorial/brute-force/low',
            label: 'DVWA Challenges',
            position: 'left',
            items: [
              { to: 'dvwa_tutorial/brute-force/low', label: 'Brute Force' },
              { to: 'dvwa_tutorial/command-injection/low', label: 'Command Injection' },
              { to: 'dvwa_tutorial/authorization-bypass/low', label: 'Authorization Bypass' },
              { to: 'dvwa_tutorial/sql-injection/low', label: 'SQL Injection' },
              { to: 'dvwa_tutorial/sql-injection-blind/low', label: 'SQL Injection (Blind)' },
              { to: 'dvwa_tutorial/xss-reflected/low', label: 'XSS (Reflected)' },
              { to: 'dvwa_tutorial/xss-stored/low', label: 'XSS (Stored)' },
              { to: 'dvwa_tutorial/xss-dom/low', label: 'XSS (DOM)' },
              { to: 'dvwa_tutorial/csrf/low', label: 'CSRF' },
              { to: 'dvwa_tutorial/file-inclusion/low', label: 'File Inclusion' },
              { to: 'dvwa_tutorial/file-upload/low', label: 'File Upload' },
              { to: 'dvwa_tutorial/weak-session-ids/low', label: 'Weak Session IDs' },
              { to: 'dvwa_tutorial/csp-bypass/low', label: 'CSP Bypass' },
              { to: 'dvwa_tutorial/javascript-attacks/low', label: 'JavaScript Attacks' },
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
