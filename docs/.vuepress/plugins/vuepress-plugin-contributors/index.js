const { path } = require('@vuepress/shared-utils')

module.exports = (options = {}, ctx) => ({
  extendPageData($page) {
    const { repo, docsRepo, docsBranch = 'main', docsDir } =
      ctx.themeConfig || {}

    $page.contributors = {
      docsRepo: docsRepo || repo,
      docsBranch,
      docsDir,
      ...options
    }
  },
  enhanceAppFiles: [path.resolve(__dirname, 'enhanceAppFile.js')]
})
