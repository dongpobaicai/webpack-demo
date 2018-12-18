// __dirname  它指向当前执行脚本所在的目录
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	devtool: 'source-map', // 打包的方式 最快生成source map的方法
	entry: __dirname + "/app/main.js", // 已多次提及的唯一入口文件
	output: {
		path: __dirname + "/build",  // 打包后的文件存放的地方
		filename: 'bundle.js' // 打包后输出文件的文件名
	},
	devServer: {
		contentBase: './build', // 本地服务器所加载的页面所在的目录
		historyApiFallback: true,// 不跳转
		inline: true// 实时刷新
	},
	module: {
		rules: [{
			test: /(\.jsx|\.js)$/, // 需要处理的文件
			use: {
				loader: 'babel-loader',
			},
			exclude: /node_modules/
		}, {
			test: /\.css$/, // 一个刷选出需要处理文件的正则表达式
			use: [{
				loader: 'style-loader', // 将计算过后的样式加入页面中，能够使用类似@import和url(...)的方法实现require()的功能
			}, {
				loader: 'css-loader',// 加载.css文件
				options: {
					modules: true, // 指定启用css modules
					localIdentName: '[name]_[local]--[hash:base64:5]', // 指定css的类名格式
				}
			}],
		}, {
	        test: /\.less$/,
	        use: [
	          'style-loader',
	          { loader: 'css-loader', options: { importLoaders: 1 } },
	          'less-loader'
	        ]
		}],
	},
	plugins: [ 
	    new webpack.BannerPlugin('版权所有，翻版必究'),
        new HtmlWebpackPlugin({
			title: 'webpack插件配置的标题',
            template: __dirname + "/app/index.tmpl.html"  //new 一个这个插件的实例，并传入相关的参数
        })
	]
};