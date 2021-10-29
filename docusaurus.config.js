/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Godwoken Documentation',
  tagline: 'Godwoken Documentation',
  url: 'https://github.com/xying21/godwoken',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'xying21', // Usually your GitHub org/user name.
  projectName: 'godwoken', // Usually your repo name.
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
      },
      items: [

        {
          href: 'https://github.com/xying21/godwoken',
          label: 'GitHub',
          position: 'right',
        },
		{
          label: 'Discord',
          href: 'https://discord.gg/ScAcjJmG8g',
		  position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
/*       links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/ScAcjJmG8g',
            },
          ],
        },
      ], */
      copyright: `Copyright © ${new Date().getFullYear()} Nervos Foundation. All Rights Reserved.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
		routeBasePath: '/',
		//homePageId: 'docs/godwoken',
          //sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
/*           editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/', */
        },
       /* blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },*/
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
