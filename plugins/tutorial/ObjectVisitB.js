/**
 @Time    : 2022/5/31 17:23
 @Author  : MANKVIS
 @Email   : chzzbeck@gmail.com
 @File    : ObjectVisitB.js
 @Software: WebStorm
 */

const types = require("@babel/types");

const ObjectVisitB = {
  MemberExpression(path) {
    fix(path);
  }
}

function fix(path) {
  const node = path.node;
  if (types.isStringLiteral(node.property)) {
    let name = node.property.value;
    node.property = types.identifier(name);
  }
  node.computed = false;
}

exports.fix = ObjectVisitB;
