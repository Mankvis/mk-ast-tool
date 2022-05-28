/**
 @Time    : 2022/5/26 15:31
 @Author  : MANKVIS
 @Email   : chzzbeck@gmail.com
 @File    : ReplaceUnicode.js
 @Software: WebStorm
 */

/**
 * 还原JS代码中的十六进制、Unicode字符
 */

const traverseReplaceUnicode = {
  StringLiteral(path) {
    fix(path);
  },
};

function fix(path) {
  const node = path.node;
  if (node.extra === undefined) {
    return;
  }
  delete node.extra;
}

exports.fix = traverseReplaceUnicode;
