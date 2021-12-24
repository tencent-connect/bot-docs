
本仓库是 QQ 机器人文档项目，基于[vuepress](https://vuepress.vuejs.org/zh/)构建。对应文档网站是 <https://bot.q.qq.com/wiki>。

## 本地开发

通过以下任何一种方式进行本地开发

### 1、Gitpod 在线开发

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/tencent-connect/bot-docs)

### 2、本地克隆代码开发

```sh
$ git clone git@github.com:tencent-connect/bot-docs.git
$ cd bot-docs
$ npm i
$ npm run dev
```

## 参与共建 [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

- 👏如果您有针对文档的错误修复，请以分支`fix/xxx`向`main`分支发 PR
- 👏如果您有新的内容贡献，请以分支`feature/xxx`向`main`分支发起 PR
- 👏如果您有相关的建议或意见，请提[issues](https://github.com/tencent-connect/bot-docs/issues)

## 文档结构参考

```
docs
├── .vuepress/   # vuepress相关文件
├── business/    # 运营规范文档
├── develop/     # 开发文档
│   ├── api/     # api文档
│   └── nodesdk/ # nodesdk文档
└── README.md    # 主页文档
```

## 贡献者

todo
