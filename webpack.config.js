module.exports = {
    mode: 'development',
    entry: './src/index.jsx',
    output: {
        filename: 'bundle.js',
        // publicPath:'/',
    },
    devServer: {
        static:
        { directory: 'dist' },
        compress: true,
        port: 3000,
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            use: ['babel-loader'],
        },
        {
            test: /\.(mp3)$/,
            use: [{ loader: 'file-loader' }],
        },
        {
            test: /\.(png|jpg|gif|svg)$/,
            type: 'asset/resource',
        },
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
        },
        ],
    },
}
