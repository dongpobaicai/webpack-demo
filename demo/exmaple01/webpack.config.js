const path = require("path");

// 默认配置项
// module.exports = {
//   mode: 'development',
//   entry: './src/home.js',
//   output: {
//     path: path.join(__dirname, '/dist'),
//     filename: 'module.js'
//   },
//   module: {
//     rules: []
//   },
//   plugins: []
// }

// 改进配置多个入口
// module.exports = {
//   mode: 'development',
//   entry: {
//     home: './src/home.js',
//     search: './src/search.js'
//   },
//   output: {
//     path: path.join(__dirname, '/dist'),
//     filename: 'module_[name].js'
//   },
//   module: {
//     rules: []
//   },
//   plugins: []
// }

// 对css进行处理  css-loader  style-loader

module.exports = {
  watch: true,
  watchOptions: {
    ignored: /node_modules/,
    aggregateTimeout: 300, // 更新延迟时间
    poll: 1000, // 轮询时间
  }, // 配置文件监听
  mode: "development",
  entry: {
    home: "./src/home.js",
    search: "./src/search.js",
  },
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "module_[name].js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"], // loader执行顺序从右到左
      },
      {
        test: /\.jsx|\.js$/,
        use: ["babel-loader"], // loader执行顺序从右到左
        exclude: /node_modules/,
      },
      {
        test: /\.ttf$/,
        use: ["file-loader"],
      },
      {
        test: /\.png|\.jpg|\.gif$/,
        use: [
          {
            loader: "file-loader",
            options: {
              esModule: false,
            },
          },
        ],
      },
    ],
  },
  plugins: [],
};
