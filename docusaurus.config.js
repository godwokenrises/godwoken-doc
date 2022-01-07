/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Godwoken Documentation',
  tagline: 'Godwoken Documentation',
  url: 'https://github.com/nervosnetwork/godwoken-doc',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'nervosnetwork', // Usually your GitHub org/user name.
  projectName: 'godwoken-doc', // Usually your repo name.
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
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
		googleAnalytics: {
          trackingID: 'G-L967PT7NQ0',
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
