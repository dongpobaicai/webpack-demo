'use strict'

var path = require('path')

module.exports = {
    entry: "./src/index",
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    mode: "production",
    module: {
        rules: [{
            test: /.js$/,
            use: 'babel-loader'
        }]
    }
}