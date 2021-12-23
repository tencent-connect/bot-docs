console.log({ BUILD_ENV: process.env.BUILD_ENV });
module.exports = {
  cdnBase: 'https://abc-pcweb-1251316161.file.myqcloud.com/',
  cdnPath: process.env.BUILD_ENV === 'test' ? 'qq-test-channel/' : 'qq-channel/',
};
