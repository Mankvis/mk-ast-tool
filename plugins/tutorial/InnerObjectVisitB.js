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

const InnerObjectVisitB = {
  MemberExpression(path) {
    fix(path);
  },
}

function fix(path) {
  const node = path.node;
  let object = node?.object.name;

  if (types.isStringLiteral(node.property)) {
    let name = node.property.value;
    node.property = types.identifier(name);
  }

  if (object === 'window') {
    path.replaceWith(types.identifier(node.property.name));
  }

  node.computed = false;

}

exports.fix = InnerObjectVisitB;
