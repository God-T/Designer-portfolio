const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
    {
        entry: 'about',
        dir: 'src/html',
    },
    {
        entry: 'photography',
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

module.exports = {
    entry: entries,
    output: {
        filename: '[contenthash].bundle.js',
        path: path.resolve(__dirname, '/dist'),
        publicPath: '/static/',
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
                test: /\.(mp4)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/videos/[contenthash][ext]',
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
        new MiniCssExtractPlugin({
            filename: '[contenthash].min.css',
        }),
        ...HtmlWebpackPlugins,
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
