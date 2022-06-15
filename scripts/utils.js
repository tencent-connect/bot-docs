const chalk = require('chalk');
const umi = require('umi-request');
const extendRequest = umi.extend({ timeout: 2000 });

// 检测是否内网
async function isAtTencent() {
  let is = false;
  try {
    console.log(chalk.green('--------检测是否为腾讯内网 start--------'));
    const res = await extendRequest('http://8000.woa.com'); // ostwindli's devCloud
    is = !!res;
    console.log(chalk.blue(`检测结果:  ${is}`));
  } catch (error) {
    console.log(chalk.blue('检测结果:  false'));
    console.log(chalk.blue(`错误信息:  ${error.message}`));
  }

  console.log(chalk.green('--------检测是否为腾讯内网 end--------'));
  return is;
}

module.exports = {
  isAtTencent,
};
