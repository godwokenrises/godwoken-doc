/**
 * @type {import('@docusaurus/types').DocusaurusConfig}
 * 
 * @see https://docusaurus.io/docs/api/docusaurus-config
 */
module.exports = {
  title: "Godwoken Docs",
  tagline: "It's built with various articles about Godwoken, from simple concept explanations and step-by-step tutorials, to deep dives into how Godwoken actually works, all waiting for you to explore.",
  url: "https://docs.godwoken.io",
  baseUrl: "/",
  trailingSlash: false,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "godwokenrises", // Usually your GitHub org/user name.
  projectName: "godwoken-doc",       // Usually your repo name.
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        // options: https://github.com/easyops-cn/docusaurus-search-local#theme-options
        indexBlog: false,
        docsRouteBasePath: '/',
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
      }),
    ],
  ],
  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      disableSwitch: false,
      respectPrefersColorScheme: false,
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
          href: "https://github.com/godwokenrises/godwoken-doc",
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
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
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
      }
    ], [
      '@docusaurus/theme-classic',
      {
        customCss: require.resolve("./src/css/custom.css"),
      },
    ],
  ]
};
