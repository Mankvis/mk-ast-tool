/**
 @Time    : 2022/6/21 11:06
 @Author  : MANKVIS
 @Email   : chzzbeck@gmail.com
 @File    : UnicodeEscapeSequenceB.js
 @Software: WebStorm
 */

const types = require("@babel/types");

const HexEscapeSequenceB = {
  StringLiteral(path) {
    fix(path);
  },
  NumericLiteral(path) {
    fix(path);
  }
}


function fix(path) {
  const node = path.node;
  if (types.isNumericLiteral(node)) {
    if (node.extra && /^0[obx]/i.test(node.extra.raw)) {
      node.extra = undefined;
    }
  }
  if (types.isStringLiteral(node)) {
    if (node.extra && /\\[ux]/gi.test(node.extra.raw)) {
      node.extra = undefined;
    }
  }
}

exports.fix = HexEscapeSequenceB;
