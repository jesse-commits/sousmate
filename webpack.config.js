//which npm run task just ran, npm run dev? or npm run build?
const currentTask = process.env.npm_lifecycle_event
const path = require('path')
//delete all from dist so we have the freshest copy
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
//extract css from the main js file
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const postCSSPlugins = [
    require('postcss-simple-vars'),
    require('postcss-nested'),
    require('postcss-mixins'),
    require('autoprefixer'),
    require("postcss-import")
]

//the same.. any configuration that can be shared with dev and build here
let config = {
    entry: './app/assets/scripts/App.js',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader?url=false', {loader: 'postcss-loader', options: {postcssOptions: {plugins: postCSSPlugins}}}]
            }
        ]
    }
}


//setup unique tasks for the dev statement
if(currentTask == 'dev') {
    config.output = {
        filename: 'bundled.js',
        path: path.resolve(__dirname, 'app')
    }
    config.devServer = {
        watchFiles: ['./app/**/*.html'],
        static: path.join(__dirname, 'app'),
        hot: true,
        port: 3000,
        host: "0.0.0.0"
    }
    config.mode = "development"
}

//setup unique tasks for the build statement
if(currentTask == 'build') {
    config.output = {
        //previouslly 'bundled.js'
        filename: '[name].[chunkhash].js',
        chunkFilename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'dist')
    }
    config.mode = "production"
    //save users data, copies over vendor js code as a separate file.
    config.optimization = {
        splitChunks: {chunks: 'all'}
    }
    //delete everything in the dist folder so we have the freshest copies.
    config.plugins = [new CleanWebpackPlugin()]
}


module.exports = config