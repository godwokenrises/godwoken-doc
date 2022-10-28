/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Godwoken Documentation",
  tagline: "Godwoken Documentation",
  url: "https://docs.godwoken.io/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/godwoken.png",
  organizationName: "godwokenrises", // Usually your GitHub org/user name.
  projectName: "godwoken-doc", // Usually your repo name.
  plugins: ["docusaurus-plugin-matomo"],
  themeConfig: {
    colorMode: {
      defaultMode: "light",
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    algolia: {
      appId: "W0P1A076NN",
      apiKey: "4a00c5457da3a6e940925cf7cb834418",
      indexName: "godwoken",
    },
    navbar: {
      hideOnScroll: true,
      title: "Godwoken Documentation",
      style: "dark",
      logo: {
        alt: "Nervos",
        src: "img/godwoken.png",
        href: "https://www.nervos.org/godwoken/",
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
      copyright: `Copyright © ${new Date().getFullYear()} Nervos Foundation. All Rights Reserved.`,
    },
    matomo: {
      matomoUrl: "https://cryptapeblog.matomo.cloud/",
      siteId: "2",
      phpLoader: "matomo.php",
      jsLoader: "matomo.js",
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
