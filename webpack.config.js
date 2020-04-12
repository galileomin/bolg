const path = require('path')
var webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader');
module.exports={
        entry:path.join(__dirname,'./src/main.js'),
        output:{
            path:path.join(__dirname,'./dist'),
            filename:'bundle.js',
            publicPath:'dist/'},
        plugins:[
            new VueLoaderPlugin(),
            new webpack.ProvidePlugin({
                "$": "jquery",
                "jQuery": "jquery",
                "window.jQuery": "jquery"
            })
        ],
        module:{
            rules:[
                {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
                {test:/\.vue$/,use:'vue-loader'},
                {test:/\.css$/,use:['style-loader','css-loader']},
                {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},
                {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
                {test:/\.(jpg|png|gif|bmp|jpeg)$/,use:'url-loader'},
                {test:/\.(ttf|eot|svg|woff|woff2)$/,use:'url-loader'},
            ]
        }
}