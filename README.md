# webpack-demo

webpack 搭建的简易 demo，react 编写前端代码，redux 用来进行数据管理

├─.babelrc
├─public
├─app 总体完整示例
├─demo/exmaple01 基本配置示例

### demo 使用 react 写界面

- `react`
- `react-dom`

### 设置转码规则和插件

.babelrc 文件中
{
"presets": ["react", "env"]
}
转码使用以下两个规则

- react 转码规则 `babel-preset-react`
- ES2015 转码规则 `babel-preset-env` 好处在于，可以进行额外配置，指定 node 版本
- babel-core babel 的核心包
- babel-loader babel 的 loader 包

### 分析 webpack.config.js

```javascript
module.exports = {
  devtool: "source-map", // 打包的方式 最快生成source map的方法
  entry: __dirname + "/app/main.js", // 已多次提及的唯一入口文件
  output: {
    path: __dirname + "/build", // 打包后的文件存放的地方
    filename: "bundle.js", // 打包后输出文件的文件名
  },
  devServer: {
    contentBase: "./build", // 本地服务器所加载的页面所在的目录
    historyApiFallback: true, // 不跳转
    inline: true, // 实时刷新
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/, // 需要处理的文件
        use: {
          loader: "babel-loader", // 使用哪个loader进行处理
        },
        exclude: /node_modules/, // 排除的文件
      },
      {
        test: /\.css$/, // 一个刷选出需要处理文件的正则表达式
        use: [
          {
            loader: "style-loader", // 将计算过后的样式加入页面中，能够使用类似@import和url(...)的方法实现require()的功能
          },
          {
            loader: "css-loader", // 加载.css文件
            options: {
              modules: true, // 指定启用css modules
              localIdentName: "[name]_[local]--[hash:base64:5]", // 指定css的类名格式
            },
          },
        ],
      },
      {
        test: /\.less$/,
        use: [
          "style-loader",
          { loader: "css-loader", options: { importLoaders: 1 } },
          "less-loader",
        ],
      },
    ],
  },
  plugins: [
    new webpack.BannerPlugin("版权所有，翻版必究"),
    new HtmlWebpackPlugin({
      title: "webpack插件配置的标题",
      template: __dirname + "/app/index.tmpl.html", //new 一个这个插件的实例，并传入相关的参数
    }),
  ],
};
```

#### loader

loader 让 webpack 能够去处理那些非 JavaScript 文件（webpack 自身只理解 JavaScript）。loader 可以将所有类型的文件转换为 webpack 能够处理的有效模块，然后你就可以利用 webpack 的打包能力，对它们进行处理。
loader 配置在 module 属性中，可以对项目配置多条处理规则。对应配置中 rules 数组

#### plugins

插件的范围包括，从打包优化和压缩，一直到重新定义环境中的变量。插件接口功能极其强大，可以用来处理各种各样的任务。

#### 问题

webpack 如果使用 4+以上版本，需要安装 webpack-cli，并且是 3.1.1 版本以上或更新即可
webpack-cli 此工具用于在命令行中运行 webpack

### 新增 redux，用作数据管理

```
public/
  index.html                     #根页面，渲染模板
app/                             #源码的文件夹
  actions                        #描述数据变化
  components                     #组件
  constants                      #常量，目前包含action类型文件
  containers                     #store数据注入组件
  reducers                       #执行数据变化
  store                          #store初始化文件
  main.js                        #项目入口文件
```
