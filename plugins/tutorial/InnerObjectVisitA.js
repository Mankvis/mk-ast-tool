/**
 @Time    : 2022/5/31 16:13
 @Author  : MANKVIS
 @Email   : chzzbeck@gmail.com
 @File    : ObjectVisitConfusion.js
 @Software: WebStorm
 */

/*
只拿部分内置函数举例
 */

const types = require("@babel/types");

const InnerObjectVisitA = {
  Identifier(path) {
    fix(path);
  },
}

function fix(path) {
  const node = path.node;
  let name = node.name;
  if ('eval|parseInt|encodeURIComponent|Object|Function|Boolean|Number|Math|Date|String|RegExp|Array'.indexOf(name) !== -1) {
    path.replaceWith(types.memberExpression(
      types.identifier('window'),
      types.stringLiteral(name),
      true
    ));
  }
}

exports.fix = InnerObjectVisitA;
