/**
 @Time    : 2022/5/27 19:15
 @Author  : MANKVIS
 @Email   : chzzbeck@gmail.com
 @File    : RemoveUseless.js
 @Software: WebStorm
 */

const types = require("@babel/types");

const traverseRemoveUseLess = {
  ExpressionStatement(path) {
    fix(path);
  }
};


function fix(path) {
  const node = path.node;
  if (types.isExpressionStatement(node)) {
    // 删除无用函数
    if (node.expression !== undefined && node.expression.left !== undefined
      && node.expression.left
      && node.expression.left.property
      && (node.expression.left.property.name === headCallArray[0]
      || node.expression.left.property.name === headCallArray[1]
      || node.expression.left.property.name === headCallArray[2]
      || node.expression.left.property.name === headCallArray[3])) {
      path.remove();
    }
  }
}

exports.fix = traverseRemoveUseLess;
