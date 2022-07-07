/**
 @Time    : 2022/6/21 11:06
 @Author  : MANKVIS
 @Email   : chzzbeck@gmail.com
 @File    : UnicodeEscapeSequence.js
 @Software: WebStorm
 */

Date.prototype.format = function (formatStr) {
  let str = formatStr;
  let Week = ["\u65e5", "\u4e00", "\u4e8c", "\u4e09", "\u56db", "\u4e94", "\u516d"];
  str = str.replace(/yyyy|YYYY/, this.getFullYear());
  str = str.replace(/MM/, this.getMonth() + 0x1 > 0x9 ? (this.getMonth() + 0x1).toString() : "\x30" + (this.getMonth() + 0x1));
  str = str.replace(/dd|DD/, this.getDate() + 0x1 > 0x9 ? (this.getDate() + 0x1).toString() : "\x30" + this.getDate());
  return str;
};

console.log(new Date().format("\x79\x79\x79\x79\x2d\x4d\x4d\x2d\x64\x64"));
