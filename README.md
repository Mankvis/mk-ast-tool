
# MK-AST-TOOL

> 项目参考哲哥的开源项目, 项目地址: https://github.com/sml2h3/ast_tools

## 文件结构

项目里以极验四代JS为demo

```
plugins 插件目录
pro 项目目录
main.js 主程序
package.json Node依赖包
package-lock.json Node依赖包
```

## 项目使用

```
node main.js pro_name source_path [output_path]

pro_name: 项目名
source_path: 混淆文件路径
output_path(可选, 默认为"混淆文件名_output.js"): 文件输出路径

例子: node main.js geetestv4 xxx/mk-ast-tool/gcaptcha4.js, 输出文件名为: gcaptcha4_output.js
```

## AST插件教程

`pro` 中有一个 `tutorial` 目录,里面的 `tutorial.js` 为插件教程的项目文件

`plugins` 目录里的`tutorial` 插件目录则是在教程中使用到的插件,以 `A` 结尾的文件则为 `正常代码->混淆代码`的 `混淆插件`, 以 `B` 结尾的文件则是 `混淆代码->正常代码` 的 `还原插件`。

（绕口令）根目录下的 `tutorial` 目录中, 不包含 `AB` 的文件则是没有混淆的正常 JavaScript 代码, 以 `A` 结尾的文件是由`plugins` 中以 `A` 结尾的混淆插件混淆后的代码, 以 `B` 结尾的文件是通过 `plugins` 中以 `B` 结尾的还原插件 还原当前目录 中对应以 `A` 结尾的混淆文件的正常代码。

当前教程案例如下：

> 具体的代码样子请看对应的文件

| 序号 | 插件名                                          | 插件代码                                                     | 代码对比                                                     | 文章                                                         |
| ---- | ----------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 1    | ObjectVisit - 更改对象属性访问方式              | [混淆插件A](https://github.com/Mankvis/mk-ast-tool/blob/main/plugins/tutorial/ObjectVisitA.js)｜[还原插件B](https://github.com/Mankvis/mk-ast-tool/blob/main/plugins/tutorial/ObjectVisitB.js) | [代码对比](https://github.com/Mankvis/mk-ast-tool/blob/main/tutorial/diff/ObjectVisit.js) | -                                                            |
| 2    | InnerObjectVisit - 更改系统内置对象属性访问方式 | [混淆插件A](https://github.com/Mankvis/mk-ast-tool/blob/main/plugins/tutorial/InnerObjectVisitA.js)｜[还原插件B](https://github.com/Mankvis/mk-ast-tool/blob/main/plugins/tutorial/InnerObjectVisitB.js) | [代码对比](https://github.com/Mankvis/mk-ast-tool/blob/main/tutorial/diff/InnerObjectVisit.js) | -                                                            |
| 3    | UnicodeEscapeSequence - 字符串与Unicode互相转换 | [混淆插件A](https://github.com/Mankvis/mk-ast-tool/blob/main/plugins/tutorial/UnicodeEscapeSequenceA.js)｜[还原插件B](https://github.com/Mankvis/mk-ast-tool/blob/main/plugins/tutorial/UnicodeEscapeSequenceB.js) | [代码对比](https://github.com/Mankvis/mk-ast-tool/blob/main/tutorial/diff/UnicodeEscapeSequence.js) | [[AST插件篇]还原代码中的Unicode与Hex字符串](https://mp.weixin.qq.com/s?__biz=MzU1NzYyNDUwNA==&mid=2247484241&idx=1&sn=bd63e5a1138d45e57e6866c894530c4d&chksm=fc33be86cb443790b565ef93e1b0af22acc96a29cc2a80506e29fad0321f1527987f1367f96c#rd) |
| 4    | HexEscapeSequence - 字符串、整数与Hex互相转换   | [混淆插件A](https://github.com/Mankvis/mk-ast-tool/blob/main/plugins/tutorial/HexEscapeSequenceA.js)｜[还原插件B](https://github.com/Mankvis/mk-ast-tool/blob/main/plugins/tutorial/HexEscapeSequenceB.js) | [代码对比](https://github.com/Mankvis/mk-ast-tool/blob/main/tutorial/diff/HexEscapeSequence.js) | [[AST插件篇]还原代码中的Unicode与Hex字符串](https://mp.weixin.qq.com/s?__biz=MzU1NzYyNDUwNA==&mid=2247484241&idx=1&sn=bd63e5a1138d45e57e6866c894530c4d&chksm=fc33be86cb443790b565ef93e1b0af22acc96a29cc2a80506e29fad0321f1527987f1367f96c#rd) |

