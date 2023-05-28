const path = require("path");
const dotenv = require("dotenv");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

dotenv.config();

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, '/build'),
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        alias: {
            '@': path.resolve(__dirname, '../src')
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.svg$/,
                type: 'asset/inline'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: `${path.resolve(__dirname, '../public')}/index.html`
        }),
        new CleanWebpackPlugin({})
    ]
}