
module.exports = {
  cdnBase: 'https://abc-pcweb-1251316161.file.myqcloud.com/',
  cdnPath: typeof process !== 'undefined' && process.env && process.env.BUILD_ENV === 'test' ? 'qq-test-channel/' : 'qq-channel/',
};
