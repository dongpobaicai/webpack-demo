# webpack-demo

> 全面学习webpack，从0到1的完整学习过程。
> [参照课件](https://time.geekbang.org/course/detail/100028901-97202)

## 初始用法

- 通过以下命令来指定运行配置文件： ``` webpack --config 配置文件名```
- webpack4零配置，默认存在entry，output
   - entry ./src/index.js
   - output ./dist/main.js

### 安装说明

- 详见demo1，最基础的webpack配置
- node环境
- webpack4将webpack和webpack-cli拆分，所以需要安装两个包
- 通过package.json中script脚本，会从.\node_modules\.bin\目录中找运行的命令

## 基础用法

### 基本结构

- entry可以配置单入口，也可以配置多入口
  - 单入口是字符串
  - 多入口是key/value的结构

- output导出目录，结构如下
```js
{
  filename: '[name].js',   // 通过占位符，配置多入口
  path: __dirname + '/dist'
}
```

- loader 用来支持其他类型转化成有效的模块
- 常见loader
  - babel-loader
  - css-loader
  - less-loader
  - ts-loader
  - file-loader
  - raw-loader 
  - thread-loader  多进程打包js和css
- loader结构如下
```js
module: {
  rules: [{
    test: '/\.txt$/', // 指定匹配规则
    use: 'raw-loader' // 使用对应的loader
  }]
}
```

- plugins 文件优化，资源管理和环境变量注入，作用于整个构建过程（也就是包含构建开始）
- 常见的plugins
   - CommonsChunkPlugin 将chunks相同的模块代码提取成公共js
   - CleanWebpackPlugin 清理构建目录
   - ExtractTextWebpackPlugin 将css从bunlde提取出独立的css
   - CopyWebpackPlugin 拷贝
   - HtmlWebpackPlugin
   - UglifyjsWebpackPlugin  压缩js
   - ZipWebpackPlugin  将打包资源压缩成一个zip包
- 使用，把插件放到plugins数组中就行 ```plugins: [ new HtmlWebpackPlugin({ template:  '' })]```

- mode 不同类型，开启不同内置函数功能
- process.env.NODE_ENV  来区分不同的环境

### 解析es6

- 使用babel-loader，@babel-core, @babel/preset-env，并配置.babelrc文件

  ```js
  ```

## 进阶用法


