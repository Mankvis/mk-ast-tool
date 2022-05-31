/**
 @Time    : 2022/5/31 16:13
 @Author  : MANKVIS
 @Email   : chzzbeck@gmail.com
 @File    : ObjectVisitConfusion.js
 @Software: WebStorm
 */

const types = require("@babel/types");

const ObjectVisitA = {
  MemberExpression(path) {
    fix(path);
  },
}

function fix(path) {
  const node = path.node;
  if (types.isIdentifier(node.property)) {
    let name = node.property.name;
    node.property = types.stringLiteral(name);
  }
  node.computed = true;
}

exports.fix = ObjectVisitA;
