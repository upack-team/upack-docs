// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const { themes } = require('prism-react-renderer');

// @ts-ignore
const lightTheme = themes.github;
const darkCodeTheme = themes.dracula;

console.log(process.env.NODE_ENV)
    /** @type {import('@docusaurus/types').Config} */
const config = {
    title: process.env.SITE_TITLE || 'Steedos Docs',
    tagline: 'Open source alterative to Salesforce Platform.',
    favicon: 'img/favicon.png',

    // Set the production url of your site here
    url: process.env.SITE_URL || 'https://docs.steedos.com/',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',
    // baseUrl: '/upack-docs/',
    

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'Project-Instructions', // Usually your GitHub org/user name.
    projectName: 'upack-team.github.io', // Usually your repo name.
    // trailingSlash: true,

    onBrokenLinks: 'warn',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    // i18n: {
    //     defaultLocale: 'en', // ! 启动后默认是中文文档
    //     locales: ['en', 'zh-CN'],
    // },

    scripts: [
        // String format.
        // '/js/salesiq.js',
    ],
    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),  // ! 侧边
                    routeBasePath: "/", 
                    editUrl: 'https://github.com/upack-team/upack-docs/tree/main/',
                    editLocalizedFiles: true
                },
                theme: {
                    customCss: [
                        require.resolve('./src/css/custom.css'), // 英文文档时的 css 样式
                    ]
                },
                gtag: {
                    trackingID: 'G-XVSWFLK780',
                    anonymizeIP: true,
                },
            }),
        ],
    ],

    themes: [
        [
            // @ts-ignore
            "@easyops-cn/docusaurus-search-local",
            /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
            // @ts-ignore
            ({
                hashed: true,
                // language: ["en", "zh"],
                highlightSearchTermsOnTargetPage: true,
                explicitSearchResultPath: true,
                docsRouteBasePath: "/"
            }),
        ],
        '@docusaurus/theme-mermaid'
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
        // Replace with your project's social card
        image: 'img/docusaurus-social-card.jpg',
        colorMode: {
            defaultMode: 'light',
            disableSwitch: true,
            respectPrefersColorScheme: false,
        }, 
        navbar: {
            title: 'Upack',
            // style: 'dark',
            // logo: {
            //     alt: 'Upack',
            //     src: 'img/logo.png',
            // },
            items: [ 
                // 左侧
                {
                    type: 'docSidebar',
                    position: 'left',
                    sidebarId: 'platform',
                    label: 'Docs',
                },
                {
                    type: 'docSidebar',
                    position: 'left',
                    sidebarId: 'developer',
                    label: 'Developer',
                },
                {
                    type: 'docSidebar',
                    position: 'left',
                    sidebarId: 'solutions',
                    label: 'Solutions',
                },
                // 右侧
                {
                    type: 'search',
                    position: 'right',
                },  
                {
                    href: 'https://docs.steedos.com',
                    position: 'right',
                    html: 'English',
                },
                {
                    href: 'https://docs.steedos.cn',
                    position: 'right',
                    html: '中文',
                }, 
                {
                    href: 'https://github.com/upack-team/upack-docs',
                    position: 'right',
                    className: 'navbar-social-link navbar-github-logo',
                    'aria-label': 'GitHub repository',
                },

            ],
        },
        docs: {
            sidebar: {
                hideable: false,
            }
        },
        // footer: {   copyright: ` Copyright © ${new Date().getFullYear()} Upack Inc. ` },
        prism: {
            theme: darkCodeTheme,
            darkTheme: darkCodeTheme,
            additionalLanguages: ['bash', 'json', 'yaml'],
        },
    }),
    markdown: {
        mermaid: true,
    },
    plugins: [
        [
            '@docusaurus/plugin-pwa',
            {
                debug: true,
                offlineModeActivationStrategies: [
                    'appInstalled',
                    'standalone',
                    'queryString',
                ],
                pwaHead: [{
                        tagName: 'link',
                        rel: 'icon',
                        href: '/img/logo.png',
                    },
                    {
                        tagName: 'link',
                        rel: 'manifest',
                        href: '/manifest.json', // your PWA manifest
                    },
                    {
                        tagName: 'meta',
                        name: 'theme-color',
                        content: 'rgb(37, 194, 160)',
                    },
                ],
            },
        ],
    ],
};

module.exports = config;