/**
 @Time    : 2022/5/31 16:35
 @Author  : MANKVIS
 @Email   : chzzbeck@gmail.com
 @File    : ObjectVisitConfusion.js.js
 @Software: WebStorm
 */
Date.prototype.format = function (formatStr) {
  let str = formatStr;
  let Week = ['日', '一', '二', '三', '四', '五', '六']
  str = str.replace(/yyyy|YYYY/, this.getFullYear());
  str = str.replace(/MM/, (this.getMonth() + 1) > 9 ? (this.getMonth() + 1).toString() : '0' + (this.getMonth() + 1));
  str = str.replace(/dd|DD/, (this.getDate() + 1) > 9 ? (this.getDate() + 1).toString() : '0' + this.getDate());
  return str;
};

console.log(new Date().format('yyyy-MM-dd'));
