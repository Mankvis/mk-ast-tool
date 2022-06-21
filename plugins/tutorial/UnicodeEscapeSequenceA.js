/**
 @Time    : 2022/6/21 11:06
 @Author  : MANKVIS
 @Email   : chzzbeck@gmail.com
 @File    : UnicodeEscapeSequenceA.js
 @Software: WebStorm
 */


const UnicodeEscapeSequenceA = {
  StringLiteral(path) {
    fix(path);
  },
}

function fix(path) {
  const node = path.node;
  let value = node.value;
  if (node.extra && (/\\[ux]/gi.test(node.extra.raw) === false)) {
    value = str2unicode(value);
    node.extra.raw = '"' + value + '"';
  }
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

exports.fix = UnicodeEscapeSequenceA;
