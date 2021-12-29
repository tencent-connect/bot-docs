# 贡献者插件

基于<https://github.com/kidonng/vuepress-plugin-contributors>做二次开发，感谢原作者


## 配置参数

`.vuepress/config.js`

```js
module.exports = {
  plugins: [
    [
      require('./plugins/vuepress-plugin-contributors/index'),
      {
        docsRepo: 'tencent-connect/bot-docs', //github仓库路径
        docsBranch: 'main', // 分支
        docsDir: 'docs', // 文档目录 默认`themeConfig.docsDir`
        label: '贡献者',
        // test： https://api.xuann.wang/api/github-file-contributors?user=tencent-connect&repo=bot-docs&tree=main&path=docs/README.md
        api: 'https://api.xuann.wang/api/github-file-contributors', // API接口 todo
        disableRoutes: ['/develop/api/'], //需要忽略的路径
      },
    ],
  ],
  // i18n
  themeConfig: {
    locales: {
      '/': { contributorsLabel: 'Contributors' },
      '/zh/': { contributorsLabel: '贡献者' },
    },
  },
};
```
