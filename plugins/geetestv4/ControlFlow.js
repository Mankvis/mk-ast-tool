const types = require("@babel/types");
/**
 @Time    : 2022/5/27 19:05
 @Author  : MANKVIS
 @Email   : chzzbeck@gmail.com
 @File    : ControlFlow.js
 @Software: WebStorm
 */

const traverseControlFlow = {
  ForStatement(path) {
    fix(path);
  }
};

function fix(path) {
  const node = path.node;
  if (types.isForStatement(node)) {
    // 处理控制流平坦化
    const prevSibling = path.getPrevSibling();
    const prevSiblingNode = prevSibling.node;
    if (prevSiblingNode && prevSiblingNode.declarations && prevSiblingNode.declarations.length === 1
      && prevSiblingNode.declarations[0].init
      && prevSiblingNode.declarations[0].init.object !== undefined) {
      const switchBody = node.body.body;
      if (!types.isSwitchStatement(switchBody[0])) {
        return;
      }
      if (!types.isIdentifier(switchBody[0].discriminant)) {
        return;
      }
      // 初始值
      let initValueNode = prevSiblingNode.declarations[0].init;
      let initValueNodeLeft = initValueNode.object.property.value;
      let initValueNodeRight = initValueNode.property.value;
      let initValue = myObj['fourth']()[initValueNodeLeft][initValueNodeRight];

      // 退出条件
      let breakValueNode = node.test;
      let breakValueNodeLeft = breakValueNode.right.object.property.value;
      let breakValueRight = breakValueNode.right.property.value;
      let breakValue = myObj['fourth']()[breakValueNodeLeft][breakValueRight];

      // 所有case节点
      const caseArray = switchBody[0].cases;
      let result = [];

      for (let i = 0; i < caseArray.length; i++) {
        for (; initValue !== breakValue;) {
          // 当前case的值
          let caseValueLeft = caseArray[i].test.object.property.value;
          let caseValueRight = caseArray[i].test.property.value;
          let caseValue = myObj['fourth']()[caseValueLeft][caseValueRight];
          if (initValue === caseValue) {
            const caseBody = caseArray[i].consequent;
            // 删除break节点以及break上一个节点
            if (types.isBreakStatement(caseBody[caseBody.length - 1])
              && types.isExpressionStatement(caseBody[caseBody.length - 2])
              && caseBody[caseBody.length - 2].expression.right.object.object.callee.object.name === headObjName) {
              // 新的case值
              let newInitValueLeft = caseBody[caseBody.length - 2].expression.right.object.property.value;
              let newInitValueRight = caseBody[caseBody.length - 2].expression.right.property.value;
              // 修改控制流的值
              initValue = myObj['fourth']()[newInitValueLeft][newInitValueRight];

              caseBody.pop(); // 删除break节点
              caseBody.pop(); // 删除break上一个节点,也就是新值赋值的节点
            } else if (types.isBreakStatement(caseBody[caseBody.length - 1])) {
              caseBody.pop();
            }
            result = result.concat(caseBody);
            break;
          } else {
            break;
          }
        }
      }
      // 把顺序代码拼接后替换原来的节点
      path.replaceWithMultiple(result);
      // 移除上一个节点
      prevSibling.remove();
    }
  }
}


exports.fix = traverseControlFlow;
