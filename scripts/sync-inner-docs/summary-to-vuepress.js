// 转换 gitbook 的 summary 为 vuepress 的 sidebar

const fs = require('fs');
const path = require('path');

// 1=prefix blank 3=link title 5=md name without .md 6=normal title
const reg = /(\s*)?\*\s(\[(.*)\])?(\((.*)\.md\))?(.*)/;

let sidebarDepth = 0;
let collapsable = false;

module.exports.convertSummary = function (path, depth = 0, collapse = false) {
  sidebarDepth = depth;
  collapsable = collapse;
  // console.log('read summary: ' + path);
  let arr = readFileToArr(path);
  let sidebars = [''];

  parseFileToObject(arr).forEach(function (o) {
    sidebars.push(o);
  });
  return sidebars;
};

// 读取文件并按行拆分
function readFileToArr(path) {
  const pa = fs.readFileSync(path);
  return pa.toString().split('\n');
}

// 按行解析文件生成 objs
function parseFileToObject(arr = []) {
  let objs = [];
  let topLevel = 0;
  arr.forEach(function (l) {
    let matches = reg.exec(l);
    if (matches == null) {
      return;
    }
    let obj = {
      title: getTitle(matches),
      collapsable: collapsable,
      sidebarDepth: sidebarDepth,
      children: [],
    };
    if (matches[1] == undefined) {
      matches[1] = '';
    }
    // top level
    if (objs.length == 0) {
      objs.push(obj);
      topLevel = matches[1].length;
      return;
    }
    // 跟topLevel元素同级
    if (matches[1].length == topLevel) {
      objs.push(obj);
      return;
    }
    // 比 topLevel 要低，追加到 toplevel 元素的子元素
    if (matches[1].length > topLevel) {
      objs[objs.length - 1].children.push(matches[5]);
      return;
    }
  });
  return objs;
}

function getTitle(matches = []) {
  return matches[6] == undefined ? matches[3] : matches[6];
}

//test
// const innerDocsTempPath = path.join(__dirname, '../../.temp_docs/docs/SUMMARY-PUBLIC.md');
// const res = module.exports.convertSummary(innerDocsTempPath, 1, true)
// console.log(res);
// fs.writeFileSync()
