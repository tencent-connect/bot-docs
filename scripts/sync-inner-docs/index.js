/**
 * 内网api文档同步工具
 * @author ostwindli
 */
const sh = require('shelljs');
const path = require('path');
const fs = require('fs-extra');
const chalk = require('chalk');
const utils = require('../utils.js');
const { convertSummary } = require('./summary-to-vuepress');
const apiDefaultConfig = require('./default-docs/config.js');

// api文档临时更新目录
const apiDocsTempPath = path.join(__dirname, '../../.temp_docs/');
// api文档临时更新目录-文档具体目录
const apiDocsTempPathBase = path.join(apiDocsTempPath, 'docs/');
// api文档要同步的位置
const apiDocsTargetPath = path.join(__dirname, '../../docs/develop/api/');
fs.ensureDirSync(apiDocsTargetPath);

// 默认api模板位置
const defaultApiTempPath = path.join(__dirname, 'default-docs/');

const apiGit = 'git@git.woa.com:bbteam_projects/group_pro/docs.git';

// api文档分支
const apiBranch = process.argv[2] || 'master';

syncDocs();

async function syncDocs() {
  // 蓝盾触发构建
  const isFromDevops =  process.argv[3]
  // 先检测下是内网还是外网
  const isAtTencent = await utils.isAtTencent();
  if (isFromDevops || isAtTencent) {
    getApiDocs();
    syncApiAssets();
  } else {
    // 外网下，区分下之前内网同步过，还是从没同步过
    // 之前同步过，则不做处理，直接用之前同步过的. 这种情况，一般是内部开发者
    console.log(chalk.green('\n--------外网api文档同步 start--------'));
    const apiDir = fs.readdirSync(apiDocsTargetPath);
    if (
      Array.isArray(apiDir) &&
      ['README.md', 'config.js', 'openapi', 'miniapp'].every(file => apiDir.includes(file))
    ) {
      console.log(chalk.blue('检测到你之前内网同步过，外网暂不同步！'));
    } else {
      // 从没同步过，则用默认模板，一般是外部用户使用，比如GitHub fork
      sh.rm('-rf', apiDocsTargetPath);
      fs.copySync(defaultApiTempPath, apiDocsTargetPath);
      console.log(chalk.blue('同步默认api模板！'));
    }
    console.log(chalk.green('--------外网api文档同步 end--------'));
  }
}

// 从工蜂获取文档
function getApiDocs() {
  if (fs.existsSync(path.join(apiDocsTempPathBase, 'SUMMARY-PUBLIC.md'))) {
    console.log(chalk.green('--------拉取最新内网API文档 start--------'));

    sh.cd(apiDocsTempPath);
    sh.exec(`git checkout ${apiBranch}`);
    sh.exec('git pull', { silent: true });

    console.log(chalk.blue('\n最新提交记录参考：'));
    sh.exec('git log --pretty=format:"%h %cd %an %s" -6');

    console.log(chalk.green('\n--------拉取最新内网API文档 end--------\n'));
  } else {
    console.log(chalk.green('--------clone内网API文档 start--------'));

    sh.rm('-rf', apiDocsTempPath);
    sh.exec(`git clone -b ${apiBranch} ${apiGit} ${apiDocsTempPath}`);

    console.log(chalk.green('--------clone内网API文档 end--------'));
  }
}

// 同步md和图片文件到目标目录 用于dev、build等
function syncApiAssets() {
  console.log(chalk.green('--------同步内网API文档 start--------'));

  // 从SUMMARY-PUBLIC.md转换为vuepress需要的格式
  const summaryPath = path.join(apiDocsTempPathBase, 'SUMMARY-PUBLIC.md');
  const apiLink = convertSummary(summaryPath, 1, true);

  console.log(chalk.blue('1、组装需要的api配置文件内容，并写入config.js文件'));
  apiDefaultConfig.sidebar[apiDefaultConfig.linkConst] = apiLink;
  // 然后写入文件
  fs.writeFileSync(
    path.join(apiDocsTargetPath, 'config.js'),
    `module.exports = ${JSON.stringify(apiDefaultConfig, null, 2)}`,
  );

  console.log(chalk.blue('2、同步README.md文件'));
  fs.copySync(
    path.join(apiDocsTempPathBase, 'README.md'),
    path.join(apiDocsTargetPath, 'README.md'),
  );
  console.log(chalk.blue('3、同步其他markdown文件'));
  apiLink.forEach(conf => {
    if (conf && conf.children) {
      conf.children.forEach(file => {
        let targetFile = file.split('/');
        targetFile.pop();
        targetFile = targetFile.join('/');
        targetFile = path.join(apiDocsTargetPath, targetFile);

        fs.ensureDirSync(targetFile);
        fs.copySync(
          path.join(apiDocsTempPathBase, `${file}.md`),
          path.join(apiDocsTargetPath, `${file}.md`),
        );
      });
    }
  });

  console.log(chalk.blue('4、同步所有图片文件'));
  const imgs = sh
    .find(apiDocsTempPathBase)
    .filter(file => !file.includes('docs/_book/') && file.match(/\.(png|jpg|gif|jpeg)$/));
  imgs.forEach(img => {
    fs.copySync(img, img.replace(apiDocsTempPathBase, apiDocsTargetPath));
  });

  console.log(chalk.green('--------同步内网API文档 end--------'));
}
