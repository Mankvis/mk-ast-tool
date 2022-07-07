/**
 @Time    : 2022/6/21 11:06
 @Author  : MANKVIS
 @Email   : chzzbeck@gmail.com
 @File    : UnicodeEscapeSequence.js
 @Software: WebStorm
 */

/** 混淆结果 */
Date.prototype.format = function (formatStr) {
  let str = formatStr;
  let Week = ['日', '一', '二', '三', '四', '五', '六'];
  str = str.replace(/yyyy|YYYY/, this.getFullYear());
  str = str.replace(/MM/, this.getMonth() + (569102 ^ 569103) > (254052 ^ 254061) ? (this.getMonth() + (579869 ^ 579868)).toString() : '0' + (this.getMonth() + (860542 ^ 860543)));
  str = str.replace(/dd|DD/, this.getDate() + (535136 ^ 535137) > (352269 ^ 352260) ? (this.getDate() + (784641 ^ 784640)).toString() : '0' + this.getDate());
  return str;
};

console.log(new Date().format('yyyy-MM-dd'));

/** 还原结果 */
Date.prototype.format = function (formatStr) {
  let str = formatStr;
  let Week = ['日', '一', '二', '三', '四', '五', '六']
  str = str.replace(/yyyy|YYYY/, this.getFullYear());
  str = str.replace(/MM/, (this.getMonth() + 1) > 9 ? (this.getMonth() + 1).toString() : '0' + (this.getMonth() + 1));
  str = str.replace(/dd|DD/, (this.getDate() + 1) > 9 ? (this.getDate() + 1).toString() : '0' + this.getDate());
  return str;
};


console.log(new Date().format('yyyy-MM-dd'));
