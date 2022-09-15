const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        index: './src/js/index.js',
        project: './src/js/project.js',
    },
    output: {
        filename: '[contenthash].bundle.js',
        path: path.resolve(__dirname, './dist'),
        clean: true,
    },
    mode: 'production',
    optimization: {
        splitChunks: {
            chunks: 'all',
            minSize: 3000,
        },
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg|ico|gif)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/images/[contenthash][ext]',
                },
            },

            {
                test: /\.json$/,
                type: 'asset/source',
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.htaccess$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '.htaccess',
                        },
                    },
                ],
            },
            {
                test: /\.(woff)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/fonts/[contenthash][ext]',
                },
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[contenthash].min.css',
        }),
        new HtmlWebpackPlugin({
            title: 'index',
            filename: 'index.html',
            template: 'src/index.html',
            chunks: ['index'],
        }),
        new HtmlWebpackPlugin({
            title: 'project',
            filename: 'project/index.html',
            template: 'src/html/project.html',
            chunks: ['project'],
        }),
    ],
    experiments: {
        topLevelAwait: true,
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 8080,
    },
};
