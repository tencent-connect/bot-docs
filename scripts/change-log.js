/**
 * 按天生成文档提交记录日志
 * @author ostwindli
 */
const umi = require('umi-request');

const cp = require('child_process');
const fs = require('fs');
const path = require('path');
const extendRequest = umi.extend({ timeout: 5000 });

const docChangelogPath = path.join(__dirname, '../docs/changelog/README.md');
const nodesdkChangelogPath = path.join(__dirname, '../docs/develop/nodesdk/changelog/README.md');


try {
  // 取出所有git log
  // 格式：'0a06a93550771de2624f1b0bcdf0246cad7c8b44----2021-12-20 15:21:00 +0800----doc: 完善文档描述'
  let res = cp.execSync(`git log --format='%H----%ai----%s'`).toString().trim();
  // 转换成数组
  res = res.split('\n');

  const resObj = {};
  res
    // 过滤掉无效提交记录
    .filter(r => !r.includes('Merge pull request #') && !r.includes('Merge branch'))
    .forEach(r => {
      // 拿到提交日期、hash、提交内容
      let { date, hash, msg } = getBaseInfo(r);
      // 以日期为维度
      if (resObj[date]) {
        resObj[date].push(assembleMsg(msg, hash));
      } else {
        resObj[date] = [assembleMsg(msg, hash)];
      }
    });

  //开始组装markdown内容
  let resArr = [`---\nsidebar: auto\n---\n`, '# 文档更新日志'];
  Object.keys(resObj)
    .sort((a, b) => a - b)
    .forEach(date => {
      // 增加换行
      resArr.push(`\n## ${date}\n`);
      resArr = resArr.concat(resObj[date]);
    });

  fs.writeFileSync(docChangelogPath, resArr.join('\n'));
  console.log('\n文档更新日志同步完成\n');
  getNodeSDKChangelog()

} catch (error) {
  console.log(error);
  process.exit(-1);
}

/**
 *拆解msg
 * @param {*} msg eg: '0a06a93550771de2624f1b0bcdf0246cad7c8b44----2021-12-20 15:21:00 +0800----doc: 完善文档描述'
 * @returns {
 *  hash: '0a06a93550771de2624f1b0bcdf0246cad7c8b44',
 *  date: '2021-12-20',
 *  msg:  'doc: 完善文档描述',
 * }
 */
function getBaseInfo(msg) {
  const res = msg.split('----');
  return {
    hash: res[0],
    date: res[1].split(' ')[0],
    msg: res[2],
  };
}

/**
 * 组装msg
 * @param {*} msg eg: 'init: 文档项目开源初始化'
 * @param {*} hash eg: 'f5835b66de8c35bbe0291da2be68cdfbb1204967'
 * @returns '* init: 文档项目开源初始化 ([f5835b6](https://github.com/tencent-connect/bot-docs/commit/f5835b66de8c35bbe0291da2be68cdfbb1204967))'
 */
function assembleMsg(msg, hash) {
  return `* ${msg} ([${hash.substr(
    0,
    7,
  )}](https://github.com/tencent-connect/bot-docs/commit/${hash}))`;
}

/**
 * 同步nodesdk日志
 */
async function getNodeSDKChangelog() {
  try {
    let res = await extendRequest('https://raw.githubusercontent.com/tencent-connect/bot-node-sdk/main/CHANGELOG.md');
    res = res.replace('# Changelog', '# 更新日志')
    fs.writeFileSync(nodesdkChangelogPath, res)
    console.log('\nNodeSDK更新日志同步完成\n')
  } catch (error) {
    console.log('\nNodeSDK Changelog文件更新失败\n', error.message)
  }

}
