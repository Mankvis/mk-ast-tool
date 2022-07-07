/**
 @Time    : 2022/07/07 09:19
 @Author  : MANKVIS
 @Email   : chzzbeck@gmail.com
 @File    : NumericalConstantsB.js
 @Software: WebStorm
 */

const types = require("@babel/types");

const NumericalConstantsB = {
  BinaryExpression(path) {
    fix(path);
  }
};


function fix(path) {
  const node = path.node;
  let left = node.left;
  let right = node.right;
  if (types.isNumericLiteral(left) && types.isNumericLiteral(right)) {
    let { confident, value } = path.evaluate();
    confident && path.replaceWith(types.valueToNode(value));
  }
}

exports.fix = NumericalConstantsB;

