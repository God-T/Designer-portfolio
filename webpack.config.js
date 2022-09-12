const path = require('path');

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'index.bundle.js',
        path: path.resolve(__dirname, './dist'),
    },
    mode: 'none',
    module: {
        rules: [
            {
                test: /\.(png|jpg)$/,
                type: 'asset/resource',
            },
            {
                test: /\.json$/,
                type: 'asset/resource',
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    experiments: {
        topLevelAwait: true,
    },
};
