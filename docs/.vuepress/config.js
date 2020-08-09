const path = require('path');

const projectRoot = process.cwd();
const alias = path.resolve(projectRoot, 'src');

module.exports = {
    configureWebpack(config) {
        config.devtool = false;
        config.resolve.alias['@'] = alias;
    },
    plugins: [
        ['vuepress-plugin-typescript', {
            tsLoaderOptions: {
                transpileOnly: true,
                compilerOptions: {
                    'target': 'ES2019',
                },
            },
        }],
    ],
    base: "/Panda-UI/",
    title: "P-UI",
    description: "一个极简的UI框架",
    themeConfig: {
        logo: "../public/favicon.ico",
        nav: [
            {text: "主页", link: "/"},
            {text: "文档", link: "/guide/"},
            {text: "交流", link: "https://google.com"},
        ],
        sidebar: [
            {
                title: "快速上手",
                children: ["/guide/install/"],
            },
            {
                title: "Components",
                children: [
                    "/guide/component/button",
                    "/guide/component/Input",
                    "/guide/component/Collapse",
                    "/guide/component/Column",
                    "/guide/component/Toast",
                    "/guide/component/Popover",
                ],
            },
        ],
    },
}