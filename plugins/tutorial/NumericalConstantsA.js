/**
 @Time    : 2022/07/07 09:19
 @Author  : MANKVIS
 @Email   : chzzbeck@gmail.com
 @File    : NumericalConstantsA.js
 @Software: WebStorm
 */

const types = require("@babel/types");


const NumericalConstantsA = {
  NumericLiteral(path) {
    fix(path);
  }
}

function fix(path) {
  const node = path.node;
  let value = node.value;
  let key = parseInt(Math.random() * (999999 - 100000) + 100000, 10);
  let cipherNum = value ^ key;
  path.replaceWith(types.binaryExpression(
    '^',
    types.numericLiteral(cipherNum),
    types.numericLiteral(key)
  ));
  // 替换后的节点里面也是 NumericLiteral 节点，会造成死循环，因此这里需要加入 path.skip()
  path.skip();
}

exports.fix = NumericalConstantsA;
