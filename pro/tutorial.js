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

function fixHandle(sourceContent) {

  const ast = parser.parse(sourceContent);

  /** 对象访问方式混淆 */
  // traverse(ast, ObjectVisitA.fix);
  /** 还原对象访问方式混淆 */
  // traverse(ast, ObjectVisitB.fix);

  /** 系统内置对象访问方式混淆 */
  // traverse(ast, InnerObjectVisitA.fix);
  /** 还原系统内置对象访问方式混淆 */
  traverse(ast, InnerObjectVisitB.fix);

  return generator(ast).code;
}

exports.execute = fixHandle;
