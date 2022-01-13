/**
 * 按天生成文档提交记录日志
 * @author ostwindli
 */
const umi = require('umi-request');

const cp = require('child_process');
const fs = require('fs');
const path = require('path');
const extendRequest = umi.extend({ timeout: 5000 });

getNodeSDKChangelog();
getPythonSDKChangelog();
getDocsChangelog();

/**
 * 同步nodesdk更新日志
 */
async function getNodeSDKChangelog() {
  const nodesdkChangelogPath = path.join(__dirname, '../docs/develop/nodesdk/changelog/README.md');
  try {
    let res = await extendRequest(
      'https://raw.githubusercontent.com/tencent-connect/bot-node-sdk/main/CHANGELOG.md',
    );
    res = res.replace('# Changelog', '# NodeSDK更新日志');
    fs.writeFileSync(nodesdkChangelogPath, res);
    console.log('\nNodeSDK Changelog同步完成\n');
  } catch (error) {
    console.log('\nNodeSDK Changelog文件更新失败\n', error.message);
  }
}

/**
 * 获取PythonSDK更新日志
 */
async function getPythonSDKChangelog() {
  try {
    const docsPath = path.join(__dirname, '..');
    const pythonSDKPath = path.join(docsPath, 'botpy');

    if (fs.existsSync(path.join(pythonSDKPath, 'README.md'))) {
      //已经存在
      cp.execSync(`
      cd ${pythonSDKPath}
      git pull
    `);
    } else {
      cp.execSync(`
      cd ${docsPath}
      rm -rf botpy
      git clone git@github.com:tencent-connect/botpy.git
    `);
    }

    const pythonChangelogPath = path.join(
      __dirname,
      '../docs/develop/pythonsdk/changelog/README.md',
    );

    const content = getChangelogByGit(
      pythonSDKPath,
      'https://github.com/tencent-connect/botpy/commit',
      [`# PythonSDK更新日志`],
    );
    fs.writeFileSync(pythonChangelogPath, content);
    console.log('\nPythonSDK Changelog同步完成\n');
  } catch (error) {
    console.log('\nPythonSDK Changelog文件更新失败\n', error.message);
  }
}

/**
 * 获取文档的更新日志
 */
async function getDocsChangelog() {
  try {
    const docChangelogPath = path.join(__dirname, '../docs/changelog/README.md');
    const docsPath = path.join(__dirname, '..');
    const content = getChangelogByGit(
      docsPath,
      'https://github.com/tencent-connect/bot-docs/commit',
      [`---\nsidebar: auto\n---\n`, `# 文档更新日志`],
    );
    fs.writeFileSync(docChangelogPath, content);
    console.log('\n文档 Changelog更新日志同步完成\n');
  } catch (error) {
    console.log('\n文档 Changelog更新失败\n', error.message);
  }
}

/**
 * 根据git项目，获取changelog
 * @param {String} projectPath eg: /Users/xxx/bot-docs
 * @param {String} gitRepo eg: https://github.com/tencent-connect/bot-docs/commit
 * @param {Array} changelogTitle 插入到文档头部的内容数组
 */
function getChangelogByGit(projectPath, gitRepo, changelogTitle) {
  try {
    if (!fs.existsSync(projectPath)) {
      console.log(`\ngetChangelogByGit路径${projectPath}不存在\n`);
      process.exit(-1);
    }
    // 取出所有git log
    // 格式：'0a06a93550771de2624f1b0bcdf0246cad7c8b44----2021-12-20 15:21:00 +0800----doc: 完善文档描述'
    let res = cp
      .execSync(
        `
    cd ${projectPath}
    git log --format='%H----%ai----%s'`,
      )
      .toString()
      .trim();
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
          resObj[date].push(assembleMsg(msg, hash, gitRepo));
        } else {
          resObj[date] = [assembleMsg(msg, hash, gitRepo)];
        }
      });

    //开始组装markdown内容
    let resArr = [...changelogTitle];
    Object.keys(resObj)
      .sort((a, b) => a - b)
      .forEach(date => {
        // 增加换行
        resArr.push(`\n## ${date}\n`);
        resArr = resArr.concat(resObj[date]);
      });

    return resArr.join('\n');
  } catch (error) {
    console.log(error);
    process.exit(-1);
  }
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
function assembleMsg(msg, hash, gitRepo) {
  return `* ${msg} ([${hash.substr(0, 7)}](${gitRepo}/${hash}))`;
}
