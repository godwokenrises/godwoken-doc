/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Godwoken Docs",
  tagline: "Godwoken Docs",
  url: "https://docs.godwoken.io",
  baseUrl: "/",
  trailingSlash: false,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "godwokenrises", // Usually your GitHub org/user name.
  projectName: "godwoken-doc", // Usually your repo name.


  themeConfig: {
    colorMode: {
      defaultMode: "light",
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    algolia: {
      appId: "W0P1A076NN",
      apiKey: "0180602fbb3e258d02a3c959074d3b04",
      indexName: "godwoken",
    },
    navbar: {
      hideOnScroll: true,
      title: "Godwoken Docs",
      style: "dark",
      logo: {
        alt: "Godwoken",
        src: "img/favicon.ico"
      },
      items: [
        {
          type: "docsVersionDropdown",
          position: "right",
        },
        {
          href: "https://github.com/godwokenrises/godwoken",
          label: "GitHub",
          position: "right",
        },
        {
          label: "Discord",
          href: "https://discord.gg/TfC9rExfHh",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} Godwoken. All Rights Reserved.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        googleAnalytics: {
          trackingID: "UA-215912231-1",
          anonymizeIP: true,
        },
        docs: {
          path: "docs",
          lastVersion: 'current',
          versions: {
            current: {
              label: 'Latest',
              path: '/'
            }
          },
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
