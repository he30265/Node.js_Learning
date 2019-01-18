/*

> npm 是世界上最大的开放源代码的生态系统，我们可以通过 npm 下载各种各样的包。

在我们安装 Node 的时候，它默认会顺带给你安装 npm。

![](https://upload-images.jianshu.io/upload_images/9373308-27c23d6d00388e4b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

常用命令：

- npm list：查看当前目录下都安装了哪些 npm 包。
- npm info 模块：查看该模块的版本及内容。
- npm i 模块@版本号：安装该模块的指定版本。

- i / install：安装。
- uninstall：卸载。
- g：全局安装，表明这个包将安装到你的计算机中，可以在你计算机的任何地方访问到它。
- --save / -s：通过该种方式安装的包的名称及版本号会出现在 package.json 中的 dependencies 中，dependencies 是需要发布在生成环境的，例如：ElementUI 是部署后还需要的，所以通过 -S 形式来安装。
- --save-dev / -D：通过该种方式安装的包的名称及版本号会出现在 package.json 中的 devDependencies 中，devDependencies 只在开发环境使用，例如：gulp 只是用来压缩代码、打包的工具，程序运行时并不需要，所以通过 -D 形式来安装。

例：

如果安装失败，可用 cnpm 安装。
```
cnpm install webpack-cli -D
cnpm i element-ui -S
```

![](https://upload-images.jianshu.io/upload_images/9373308-b678e9be71702c86.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

在当前目录下，多了一个 node_modules 目录和一个 package.json 文件，node_modules 里是安装的包，package.json 里是包的版本信息。

![](https://upload-images.jianshu.io/upload_images/9373308-cafbd6ea0db6f001.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


通过 package.json 管理 npm 包，在指定的包管理目录中通过以下命令生成：

- npm init：按步骤创建 package.json。
- npm init --yes：快速创建 package.json。

![](https://upload-images.jianshu.io/upload_images/9373308-e1a1d838c162dd8d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![](https://upload-images.jianshu.io/upload_images/9373308-018f32c8a898b346.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


 */