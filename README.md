
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

* ObjectVisit 对象属性访问
* InnerObjectVisit 系统内置对象属性访问

