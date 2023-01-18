const fs = require('fs')
const path = require('path')
const webpack = require('webpack')

const eslintConfig = require('./eslint.config.js')

const projectRootDirectory = fs.realpathSync(process.cwd())

// PLUGINS
const ESLintWebpackPlugin = require('eslint-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const plugins = [
    new HtmlWebpackPlugin({
        template: path.resolve(projectRootDirectory, '_public/index.html'),
    }),
    new ESLintWebpackPlugin({
        cwd: projectRootDirectory,
        extensions: ['.jsx', '.js'],
        ignorePath: path.resolve(projectRootDirectory, 'config/.eslintignore'),
        baseConfig: eslintConfig,
        useEslintrc: false,
        emitError: true,
        emitWarning: true,
        failOnError: true,
        failOnWarning: false,
        cache: true,
        cacheLocation: path.resolve(projectRootDirectory, '.cache/.eslintcache'),
        outputReport: {
            filePath: path.resolve(projectRootDirectory, 'log/eslint.error.log'),
        },
    }),
]

// RULES
const javascriptRule = {
    test: /\.(js|jsx)$/,
    include: path.resolve(projectRootDirectory, 'src/'),
    exclude: /node_modules/,
    use: {
        loader: 'babel-loader',
        options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
        },
    },
}

const typescriptRule = {
    test: /\.(ts|tsx)$/,
    include: path.resolve(projectRootDirectory, 'src/'),
    exclude: /node_modules/,
    use: {
        loader: 'ts-loader',
        // loader configurations, for typescript config use tsconfig
        options: {
            configFile: path.resolve(projectRootDirectory, 'tsconfig.json'),
        },
    },
}

const imageRule = {
    test: /\.(bmp|jpe?g|png|svg|gif)$/,
    use: {
        loader: 'file-loader',
        options: {
            name: 'assets/[name].[ext]',
        },
    },
}

const fontRule = {
    test: /\.(eot|ttf|woff|woff2)$/,
    use: {
        loader: 'file-loader',
        options: {
            name: 'font/[name].[ext]',
        },
    },
}

const cssRule = {
    test: /\.css$/,
    use: ['style-loader', 'css-loader'],
}

// DEV SERCVER CONFIG
const devServerConfig = {
    // liveReload: false,
    hot: false, // enable HMR without page refresh as fallback in case of build failure
    open: true,
    port: '8080',
    compress: true, // enable gzip compression
    historyApiFallback: true,
    client: {
        progress: false,
        logging: 'info',
        overlay: {
            errors: true,
            warnings: false,
        },
    },
}

module.exports = {
    mode: 'development',
    context: path.resolve(projectRootDirectory),
    entry: path.resolve(projectRootDirectory, 'src/index.js'),

    output: {
        filename: '[name].[contenthash:8].js',
        path: path.resolve(projectRootDirectory, 'dist'),
        publicPath: '/',
        clean: true,
    },

    resolve: {
        extensions: ['.ts', '.tsx', '.jsx', '...'],
        alias: {
            '~': path.resolve(projectRootDirectory, 'src/'),
        },
    },

    module: {
        rules: [javascriptRule, typescriptRule, imageRule, fontRule, cssRule],
    },

    // HMR is not yet working as expected
    devServer: devServerConfig,
    devtool: 'inline-source-map',
    plugins: plugins,
}
