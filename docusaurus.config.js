/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Godwoken Documentation',
  tagline: 'Godwoken Documentation',
  url: 'http://docs.godwoken.io/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'nervosnetwork', // Usually your GitHub org/user name.
  projectName: 'godwoken-doc', // Usually your repo name.
  plugins: [
    'docusaurus-plugin-matomo',
  ],
  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
	hideOnScroll: true,
      title: '',
      logo: {
        alt: 'Nervos',
        src: 'img/favicon.png',
		href: 'https://www.nervos.org/',
      },
      items: [
        {
          type: 'docsVersionDropdown',
          position: 'right'
        },

        {
          href: 'https://github.com/nervosnetwork/godwoken',
          label: 'GitHub',
          position: 'right',
        },
		{
          label: 'Discord',
          href: 'https://discord.gg/Rk62Qmnpfg',
		  position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Nervos Foundation. All Rights Reserved.`,
    },
    matomo: {
      matomoUrl: 'https://cryptapeblog.matomo.cloud/',
      siteId: '2',
      phpLoader: 'matomo.php',
      jsLoader: 'matomo.js',
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        googleAnalytics: {
          trackingID: 'UA-215912231-1',
          anonymizeIP: true,
        },
        docs: {
			path: 'docs',
			sidebarPath: require.resolve('./sidebars.js'),
			routeBasePath: '/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
