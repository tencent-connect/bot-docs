
module.exports = {
  cdnBase: 'https://mpqq.gtimg.cn/',
  cdnPath: typeof process !== 'undefined' && process.env && process.env.BUILD_ENV === 'test' ? 'bot-wiki/test/' : 'bot-wiki/online/',
};
