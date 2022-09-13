const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        index: './src/js/index.js',
        project: './src/js/project.js',
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, './dist'),
        /* Needs Webpack version > 5.20 */
        clean: true,
        // clean: {
        //     dry: true, // Will just tell you which file to remove
        //     keep: /\.css/, // Defines files will keep
        // },
    },
    mode: 'none',
    module: {
        rules: [
            {
                test: /\.(png|jpg|ico|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'images/[name].[ext]',
                        },
                    },
                ],
                /* Bundle image file into the files under the build folder; more http requests */
                // type: 'asset/resource',
                /* Bundle image file into the inline; increase JS bundle file size  */
                // type: 'asset/inline',
                /* Webpack choose asset/inline(< 8kb in default) or asset/resource based(> 8kb in default) on image size*/
                // type: 'asset',
                // parser: {
                //     dataUrlCondition: {
                //         maxSize: 3 * 1024, // set img size threshold in kilobytes
                //     },
                // },
            },
            /* Read content of the file and inject the string directly into the JS bundle */
            // {
            //     test: /\.txt/,
            //     type: 'asset/source',
            // },
            {
                test: /\.json$/,
                type: 'asset/source',
            },
            {
                test: /\.css$/,
                // use: ['style-loader', 'css-loader'],
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
        ],
    },
    plugins: [
        /* Minification of the resulting JS file bundle */
        new TerserPlugin(),
        /* Extracting CSS into a separate bundle */
        new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' }),
        new HtmlWebpackPlugin({
            title: 'index',
            filename: 'index.html',
            template: 'src/index.html',
            /* Specify which entry js to load */
            chunks: ['index'],
        }),
        new HtmlWebpackPlugin({
            title: 'project',
            filename: 'project/index.html',
            template: 'src/html/project.html',
            /* Specify which entry js to load */
            chunks: ['project'],
        }),
        /* Clean build folder(defined in output.path) before generating new bundles */
        // new CleanWebpackPlugin({
        //     cleanOnceBeforeBuildPatterns: [
        //         'put other paths you want to remove',
        //     ],
        // }),
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
