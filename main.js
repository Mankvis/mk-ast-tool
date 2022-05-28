/**
 @Time    : 2022/5/26 14:23
 @Author  : MANKVIS
 @Email   : chzzbeck@gmail.com
 @File    : main.js
 @Software: WebStorm
 */


/** 系统依赖 */
const fs = require("fs");

/** 输入文件 (手动运行必填) */
let sourcePath = "C:/Users/MANKVIS/Desktop/mk-ast-tool/gcaptcha4.js";
let outputPath = "";

/** 修复pro (手动运行必填) */
let fixPro = "geetestv4";


/**
 * 获取参数
 * process全局对象, argv是一组包含命令行参数的数组, argv[0]为node路径
 * argv[1]是当前执行js的全路径, 所以使用splice(2)来分割
 */
const params = process.argv.splice(2);

if (params.length === 2) {
  fixPro = params[0]; // 还原handle
  sourcePath = params[1]; // 混淆文件路径
}
if (params.length === 3) {
  fixPro = params[0];
  sourcePath = params[1]; // 混淆文件路径
  outputPath = params[2]; // 输出文件路径
}

/** 输出文件 */
const filename = sourcePath.split('/').slice(-1)[0].split('.').slice(0)[0]
outputPath = `./${filename}_output.js`;

/** 信息输出 */
console.log(`sourcePath: ${sourcePath}\noutputPath: ${outputPath}`);

/** 读取sourcePath文件 */
const sourceContent = fs.readFileSync(sourcePath, { encoding: "utf-8" });

/** 对内容进行还原 */
const fix = require(`./pro/${fixPro}`);
const outputContent = fix.execute(sourceContent);

/** 写出文件 */
fs.writeFile(outputPath, outputContent, (err) => {
  if (err) {
    console.error(`文件写出失败!, ${err}`)
  } else {
    console.log(`文件写出成功! 文件路径: ${outputPath}`);
  }
})

