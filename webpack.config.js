//which npm run task just ran, npm run dev? or npm run build?
const currentTask = process.env.npm_lifecycle_event

const path = require('path')

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
        filename: 'bundled.js',
        path: path.resolve(__dirname, 'dist')
    }
    config.mode = "production"
}


module.exports = config