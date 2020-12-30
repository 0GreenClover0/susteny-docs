module.exports = {
  title: 'Susteny',
  tagline: 'Thriller game by Clovermike created with Unity',
  url: 'https://github.com/0GreenClover0/susteny-docs',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Clovermike', // Usually your GitHub org/user name.
  projectName: 'Susteny', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Main',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          href: 'https://github.com/MikeMG-PL/Susteny',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          editUrl:
            'https://github.com/0GreenClover0/susteny-docs/tree/master',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/MikeMG-PL/Susteny',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
