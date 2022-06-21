/**
 @Time    : 2022/6/21 13:20
 @Author  : MANKVIS
 @Email   : chzzbeck@gmail.com
 @File    : HexEscapeSequenceA.js
 @Software: WebStorm
 */

const types = require("@babel/types");


const HexEscapeSequenceA = {
  StringLiteral(path) {
    fix(path);
  },
  NumericLiteral(path) {
    fix(path);
  },
}

function fix(path) {
  const node = path.node;
  let value = node.value;
  if (types.isNumericLiteral(node)) {
    if (node.extra && (/^0[obx]/gi.test(node.extra.raw) === false)) {
      node.extra.raw = str2hex(value);
    }
  }
  if (types.isStringLiteral(node)) {
    if (node.extra && (/\\[ux]/gi.test(node.extra.raw) === false)) {
      node.extra.raw = '"' + str2hex(value) + '"';
    }
  }

}

function str2hex(str) {
  let hexStr = "", tmp;
  // 整数的情况
  if (typeof str === "number") {
    hexStr += str.toString(16);
    hexStr = '0x' + hexStr;
    return hexStr;
  }
  // 字符串
  for (const val of str) {
    if (/[\u4E00-\u9FA5]/g.test(val)) {
      hexStr += str2unicode(val);
    } else {
      tmp = val.codePointAt(0).toString(16);
      hexStr += "\\x" + tmp;
    }
  }
  return hexStr;
}

function str2unicode(str) {
  let unicodeStr = "", tmp;
  for (const val of str) {
    tmp = val.codePointAt(0).toString(16);
    while (tmp.length < 4) {
      tmp = '0' + tmp;
    }
    unicodeStr += "\\u" + tmp;
  }
  return unicodeStr;
}

exports.fix = HexEscapeSequenceA;
