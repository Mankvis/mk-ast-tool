/**
 @Time    : 2022/5/26 15:02
 @Author  : MANKVIS
 @Email   : chzzbeck@gmail.com
 @File    : geetest.js
 @Software: WebStorm
 */

const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const generator = require("@babel/generator").default;

/** 公共插件 */
const ReplaceUnicode = require("../plugins/common/ReplaceUnicode");
/** 项目插件 */
const CallExpressionToString = require("../plugins/geetestv4/CallExpressionToString");
const ControlFlow = require("../plugins/geetestv4/ControlFlow");
const RemoveUseLess = require("../plugins/geetestv4/RemoveUseless");

function fixHandle(sourceContent) {

  const ast = parser.parse(sourceContent);

  traverse(ast, ReplaceUnicode.fix);
  traverse(ast, CallExpressionToString.fix);
  traverse(ast, ControlFlow.fix);
  traverse(ast, RemoveUseLess.fix);

  const opts = {
    jsescOption: { "minimal": true }
  }

  return generator(ast, opts).code;

}

exports.execute = fixHandle;
