/**
 @Time    : 2022/5/31 14:05
 @Author  : MANKVIS
 @Email   : chzzbeck@gmail.com
 @File    : tutorial.js
 @Software: WebStorm
 */

const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const generator = require("@babel/generator").default;

const ObjectVisitA = require("../plugins/tutorial/ObjectVisitA");
const ObjectVisitB = require("../plugins/tutorial/ObjectVisitB")
const InnerObjectVisitA = require("../plugins/tutorial/InnerObjectVisitA");
const InnerObjectVisitB = require("../plugins/tutorial/InnerObjectVisitB");
const UnicodeEscapeSequenceA = require("../plugins/tutorial/UnicodeEscapeSequenceA");
const UnicodeEscapeSequenceB = require("../plugins/tutorial/UnicodeEscapeSequenceB");
const HexEscapeSequenceA = require("../plugins/tutorial/HexEscapeSequenceA");
const HexEscapeSequenceB = require("../plugins/tutorial/HexEscapeSequenceB");


function fixHandle(sourceContent) {

  const ast = parser.parse(sourceContent);

  /** 对象访问方式混淆 */
  // traverse(ast, ObjectVisitA.fix);
  /** 还原对象访问方式混淆 */
  // traverse(ast, ObjectVisitB.fix);

  /** 系统内置对象访问方式混淆 */
  // traverse(ast, InnerObjectVisitA.fix);
  /** 还原系统内置对象访问方式混淆 */
  // traverse(ast, InnerObjectVisitB.fix);

  /** 字符串转unicode */
  // traverse(ast, UnicodeEscapeSequenceA.fix);
  /** 还原-字符串转unicode */
  // traverse(ast, UnicodeEscapeSequenceB.fix);

  /** 字符串转hex */
  // traverse(ast, HexEscapeSequenceA.fix);
  /** 还原-字符串转hex */
  traverse(ast, HexEscapeSequenceB.fix);


  const opts = {
    jsescOption: { "minimal": true }
  }

  return generator(ast, opts).code;
}

exports.execute = fixHandle;
