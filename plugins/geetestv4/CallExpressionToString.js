/**
 @Time    : 2022/5/26 17:57
 @Author  : MANKVIS
 @Email   : chzzbeck@gmail.com
 @File    : CALLExpression2String.js
 @Software: WebStorm
 */

const types = require("@babel/types");
const generator = require("@babel/generator").default;


/**
 * 把指定函数调用转换成字符串
 * 例如：$_BHHHA(680) 转换为 "$_BBDj"
 * $_BHHGs(689) 转换为 "clientType"
 */

function myObj() {
}

/** 定义一个数组来存放所有的 */
let callArray = [];
global.callArray = [];

/** 定义一个数组来存放js文件首几个函数,用来后面执行计算结果 */
global.headCallArray = [];
global.headCallCode = "";
global.headObjName = "";
global.myObj = myObj;

const traverseCallExpressToString = {
  FunctionDeclaration(path) {
    fix(path);
  },
  VariableDeclaration(path) {
    fix(path);
  },
  CallExpression(path) {
    fix(path);
  }
};

function fix(path) {
  const node = path.node;

  if (types.isFunctionDeclaration(node) && types.isBlockStatement(node.body) && node.body.body.length === 0) {
    // 取出文件前四个方法, 替换名字方面后续调用, 记录每个索引到作用,后面调用
    const obj = node.id.name;
    const call4 = path.getPrevSibling();
    const call4Var = call4.node.expression.left.property.name;
    const call3 = call4.getPrevSibling();
    const call3Var = call3.node.expression.left.property.name;
    const call2 = call3.getPrevSibling();
    const call2Var = call2.node.expression.left.property.name;
    const call1 = call2.getPrevSibling();
    global.call1Var = call1.node.expression.left.property.name;
    global.headCallArray.push(call1Var, call2Var, call3Var, call4Var);
    global.headCallCode += call1.toString() + call2.toString() + call3.toString() + call4.toString();
    global.headCallCode = headCallCode.replaceAll(obj, myObj.name).replaceAll(call4Var, 'fourth')
      .replaceAll(call3Var, 'third').replaceAll(call2Var, 'second')
      .replaceAll(call1Var, 'first')
    eval(headCallCode)
    global.headObjName = obj;
  }
  // 把$_BHHHA(680) 形式的名字 $_BHHHA 放到一个数组里面
  else if (types.isVariableDeclaration(node) && node.kind === 'var' && node.declarations.length === 3 &&
    // 字符串还原
    node.declarations[0].init !== null && node.declarations[0].init["property"] !== undefined
  ) {
    let declarations = node?.declarations;
    if (declarations[0].init["property"].name !== headCallArray[2]) {
      return;
    }
    const name1 = declarations[0].id.name;
    const name2 = declarations[2].id.name;
    callArray.push(name1, name2);

    // 极验3代添加
    callArray.push(global.headCallArray[2])

    path.getNextSibling().remove();
    path.getNextSibling().remove();
    path.remove();
    // 把 $_BHHHA(16) 这样的调用转换成字符串
  } else if (types.isCallExpression(node) && ((node.callee !== undefined && node.callee.name !== undefined) || (
    // 极验3代添加
    node.callee !== undefined && node.callee.object && node.callee.object.name === global.headObjName
  ))) {

    let name = node.callee.name;
    if (node.callee.object && node.callee.object.name === global.headObjName) {
      if (!node.arguments) {
        return;
      }
      name = node.callee.property.name
    }

    // 如果当前节点callee.name不存在之前获取到call名字数组内,则忽略
    if (callArray.indexOf(name) === -1) {
      return;
    }
    // 调用函数获取计算后到值
    const value = myObj['third'](node.arguments[0].value);
    // 创建节点并替换当前节点
    const newStringLiteralNode = types.stringLiteral(value);
    path.replaceWith(newStringLiteralNode);
  }
}


exports.fix = traverseCallExpressToString;

