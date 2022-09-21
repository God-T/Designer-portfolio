const path = require('path');
const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpack = [
    {
        entry: 'index',
        dir: 'src',
    },
    {
        entry: 'project',
        dir: 'src/html',
    },
    {
        entry: 'projects-list',
        dir: 'src/html',
    },
];

const HtmlWebpackPlugins = HtmlWebpack.map(
    i =>
        new HtmlWebpackPlugin({
            title: i.entry,
            filename:
                i.entry === 'index'
                    ? `${i.entry}.html`
                    : `${i.entry}/index.html`,
            template: `${i.dir}/${i.entry}.html`,
            /* Specify which entry js to load */
            chunks: [i.entry],
        })
);
const HtmlLoaderExclude = HtmlWebpack.filter(
    i => !i.dir.includes('common')
).map(i => path.resolve(__dirname, `${i.dir}/${i.entry}.html`));

const entries = () => {
    entry = {};
    HtmlWebpack.map(i => (entry[i.entry] = `./src/js/${i.entry}.js`));
    return entry;
};
/* Alternative way to set entries */
// const entries = glob.sync('./src/js/*.js').reduce((entries, entry) => {
//     const entryName = path.parse(entry).name;
//     entries[entryName] = entry;

//     return entries;
// }, {});

module.exports = {
    entry: entries,
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './dist'),
        /* Clean existing build files before build; needs Webpack version > 5.20 */
        clean: true,
        // clean: {
        //     dry: true, // Will just tell you which file to remove
        //     keep: /\.css/, // Defines files will keep
        // },
    },
    mode: 'development',
    devServer: {
        port: 8080,
        static: {
            directory: path.resolve(__dirname, './dist'),
        },
        devMiddleware: {
            index: 'index.html',
            writeToDisk: true /* Generate files to disk */,
        },
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg|ico|gif)$/,
                type: 'asset/resource',
                /* Specify output path for 'asset/resource' */
                generator: {
                    filename: 'assets/images/[name][ext]',
                },
                // use: [
                //     {
                //         loader: 'file-loader',
                //         options: {
                //             name: 'assets/images/[name].[ext]',
                //         },
                //     },
                // ],

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
                use: ['style-loader', 'css-loader'],
                // use: [MiniCssExtractPlugin.loader, 'css-loader'],
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
                /* Specify output path for 'asset/resource' */
                generator: {
                    filename: 'assets/fonts/[name][ext]',
                },
                // use: [
                //     {
                //         loader: 'file-loader',
                //         options: {
                //             name: 'assets/fonts/[contenthash].[ext]',
                //         },
                //     },
                // ],
            },
            {
                test: /\.html$/,
                exclude: [/(node_modules)/, ...HtmlLoaderExclude],
                use: {
                    loader: 'html-loader',
                },
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
    plugins: [
        ...HtmlWebpackPlugins,
        /* Minification of the resulting JS file bundle */
        // new TerserPlugin(),
        /* Extracting CSS into a separate bundle */
        // new MiniCssExtractPlugin({
        //     filename: '[name].min.css',
        // }),

        // new HtmlWebpackPlugin({
        //     title: 'index',
        //     filename: 'index.html',
        //     template: 'src/index.html',
        //     /* Specify which entry js to load */
        //     chunks: ['index'],
        // }),
        // new HtmlWebpackPlugin({
        //     title: 'project',
        //     filename: 'project/index.html',
        //     template: 'src/html/project.html',
        //     /* Specify which entry js to load */
        //     chunks: ['project'],
        // }),
        // new HtmlWebpackPlugin({
        //     title: 'placeHolder',
        //     filename: 'placeHolder/index.html',
        //     template: 'src/html/common/placeHolder.html',
        //     /* Specify which entry js to load */
        //     chunks: ['placeHolder'],
        // }),

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
