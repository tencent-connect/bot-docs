module.exports = {convertSummary:convertSummary}

const fs = require('fs')

// 1=prefix blank 3=link title 5=md name without .md 6=normal title
const reg = /(\s*)?\*\s(\[(.*)\])?(\((.*)\.md\))?(.*)/

let sidebarDepth = 0
let collapsable = false


// 转换 gitbook 的 summary 为 vuepress 的 sidebar
function convertSummary(path, hidden = [], depth = 0, collapse = false) {
    sidebarDepth = depth
    collapsable = collapse
    console.log("read summary: " + path)
    let arr = readFileToArr(path)
    let sidebars = [""]
    if(hidden === ""){// 不渲染默认readme
        sidebars = [];
        hidden = []
    }
    
    parseFileToObject(arr, hidden).forEach(function (o) {
        sidebars.push(o)
    })
    return sidebars
}

// 读取文件并按行拆分
function readFileToArr(path){
    const pa = fs.readFileSync(path);
    return pa.toString().split("\n")
}

// 按行解析文件生成 objs
function parseFileToObject(arr = [], hidden = []) {
    let objs = []
    let topLevel = 0
    arr.forEach(function (l) {
        let matches = reg.exec(l)
        if (matches == null) {
            return
        }
        let obj = {
            title: getTitle(matches),
            collapsable:collapsable,
            sidebarDepth:sidebarDepth,
            children:[]
        }
        if (matches[1] == undefined) {
            matches[1] = ""
        }
        // top level
        if (objs.length == 0) {
            objs.push(obj)
            topLevel = matches[1].length
            return
        }
        // 跟topLevel元素同级
        if (matches[1].length == topLevel) {
            objs.push(obj)
            return
        }
        // 比 topLevel 要低，追加到 toplevel 元素的子元素
        if (matches[1].length > topLevel) {
            if (hidden.indexOf(matches[5]) >= 0) {
                return
            }
            objs[objs.length-1].children.push(matches[5])
            return
        }
    })
    return objs
}

function getTitle(matches = []) {
    return matches[6] == undefined ? matches[3] : matches[6]
}