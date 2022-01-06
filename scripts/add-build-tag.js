// 在构建完的index.html里增加标志
const path = require('path');
const fs = require('fs');
const chalk = require('chalk');
const cheerio = require('cheerio');


console.log()
console.log(chalk.green('--------添加构建标志 start--------'));

const args = process.argv[2]

const htmlPath = path.join(__dirname, '../dist/index.html');
let htmlString = fs.readFileSync(htmlPath).toString();

const $ = cheerio.load(htmlString);
$('body').append(`<script>console.log('构建标志：${args}')</script>`);

fs.writeFileSync(htmlPath, $.html());

console.log('构建标志：', args)

console.log(chalk.green('--------添加构建标志 end--------'));