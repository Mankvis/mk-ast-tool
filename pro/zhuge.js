/**
 @Time    : 2022/6/20 09:52
 @Author  : MANKVIS
 @Email   : chzzbeck@gmail.com
 @File    : zhuge.js
 @Software: WebStorm
 */

const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const generator = require("@babel/generator").default;

/** 公共插件 */
const ReplaceUnicode = require("../plugins/common/ReplaceUnicode");


function fixHandle(sourceContent) {
  const ast = parser.parse(sourceContent);

  traverse(ast, ReplaceUnicode.fix);

  const opts = {
    jsescOption: { "minimal": true }
  }

  return generator(ast, opts).code;

}

exports.execute = fixHandle;
