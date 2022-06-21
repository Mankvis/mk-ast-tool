/**
 @Time    : 2022/6/21 11:06
 @Author  : MANKVIS
 @Email   : chzzbeck@gmail.com
 @File    : UnicodeEscapeSequenceB.js
 @Software: WebStorm
 */

const UnicodeEscapeSequenceB = {
  StringLiteral(path) {
    fix(path);
  },
}


function fix(path) {
  const node = path.node;
  if (node.extra && /\\[ux]/gi.test(node.extra.raw)) {
    node.extra = undefined;
  }
}

exports.fix = UnicodeEscapeSequenceB;
