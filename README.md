
#MK-AST-TOOL

> 项目参考哲哥的开源项目, 项目地址: https://github.com/sml2h3/ast_tools

文件结构

项目里以极验四代JS为demo

```
plugins 插件目录
pro 项目目录
main.js 主程序
package.json Node依赖包
package-lock.json Node依赖包
```

项目使用

```
node main.js pro_name source_path [output_path]

pro_name: 项目名
source_path: 混淆文件路径
output_path(可选, 默认为"混淆文件名_output.js"): 文件输出路径

例子: node main.js geetestv4 xxx/mk-ast-tool/gcaptcha4.js, 输出文件名为: gcaptcha4_output.js
```

