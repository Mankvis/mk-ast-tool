/**
 @Time    : 2022/6/21 13:17
 @Author  : MANKVIS
 @Email   : chzzbeck@gmail.com
 @File    : UnicodeEscapeSequence.js
 @Software: WebStorm
 */

/** 还原前 */
Date.prototype.format = function (formatStr) {
  let str = formatStr;
  let Week = ["\u65e5", "\u4e00", "\u4e8c", "\u4e09", "\u56db", "\u4e94", "\u516d"];
  str = str.replace(/yyyy|YYYY/, this.getFullYear());
  str = str.replace(/MM/, this.getMonth() + 1 > 9 ? (this.getMonth() + 1).toString() : "\u0030" + (this.getMonth() + 1));
  str = str.replace(/dd|DD/, this.getDate() + 1 > 9 ? (this.getDate() + 1).toString() : "\u0030" + (this.getDate() + 1));
  return str;
};

console.log(new Date().format("\u0079\u0079\u0079\u0079\u002d\u004d\u004d\u002d\u0064\u0064"));

/** 还原后 */
Date.prototype.format = function (formatStr) {
  let str = formatStr;
  let Week = ["日", "一", "二", "三", "四", "五", "六"];
  str = str.replace(/yyyy|YYYY/, this.getFullYear());
  str = str.replace(/MM/, this.getMonth() + 1 > 9 ? (this.getMonth() + 1).toString() : "0" + (this.getMonth() + 1));
  str = str.replace(/dd|DD/, this.getDate() + 1 > 9 ? (this.getDate() + 1).toString() : "0" + (this.getDate() + 1));
  return str;
};

console.log(new Date().format("yyyy-MM-dd"));
