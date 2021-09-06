//which npm run task just ran, npm run dev? or npm run build?
const currentTask = process.env.npm_lifecycle_event
const path = require('path')
//delete all from dist so we have the freshest copy
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
//extract css from the main js file, leverage in 2 places
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
//minimize or compress the extracted stylesheet
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
//copy over html files which know the names to the files needed, leverage for both dev and build tasks.
const HtmlWebpackPlugin = require('html-webpack-plugin')
//copy over multiple html files if needed fs-xtra 
const fse = require('fs-extra')

const postCSSPlugins = [
    require('postcss-simple-vars'),
    require('postcss-nested'),
    require('postcss-mixins'),
    require('autoprefixer'),
    require("postcss-import")
]

//can run any task besides just copying over the images folder.
class RunAfterCompile {
    apply(compiler) {
        compiler.hooks.done.tap('Copy images', function() {
            fse.copySync('./app/assets/images', './dist/assets/images')
        })
    }
}

let cssConfig = {
    test: /\.css$/i,
    use: ['css-loader?url=false', {loader: 'postcss-loader', options: {postcssOptions: {plugins: postCSSPlugins}}}]
}

//an array html plugin once for each html file we have
//return an array with all files ending in html
let pages = fse.readdirSync('./app').filter(function(file) {
    return file.endsWith('.html')
// map will return a new array of multiple html webpack plugins
//use once for each html templates
}).map(function(page){
    return new HtmlWebpackPlugin({
        filename: page,
        template: `./app/${page}`
    })
})

//shared.. any configuration that can be shared with dev and build here
let config = {
    entry: './app/assets/scripts/App.js',
    plugins: pages,
    module: {
        rules: [
            cssConfig
        ]
    }
}


//setup unique tasks for the dev statement
if(currentTask == 'dev') {
    //push onto the array 
    cssConfig.use.unshift('style-loader')
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
    // push onto array, but we want to use loader we just downloaded
    cssConfig.use.unshift(MiniCssExtractPlugin.loader)
    config.output = {
        //previouslly 'bundled.js'
        filename: '[name].[chunkhash].js',
        chunkFilename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'dist')
    }
    config.mode = "production"
    //save users data, copies over vendor js code as a separate file.
    config.optimization = {
        splitChunks: {chunks: 'all'},
        minimize: true,
        //... use default built in webpack minimizer, but b is our plugin
        minimizer: [`...`, new CssMinimizerPlugin()]
    }
    //delete everything in the dist folder so we have the freshest copies.
    //set things up so each plugin call is on a new line.
    config.plugins.push(
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({filename: 'styles.[chunkhash].css'}),
        new RunAfterCompile()
    )
}


module.exports = config