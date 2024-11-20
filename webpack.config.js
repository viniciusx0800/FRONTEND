const HtmlWebpackPlugin = require("html-webpack-plugin");
const { resolve } = require("path");

module.exports = {
    devtool: "source-map", // Corrigido
    entry: "./src/index.js", // Corrigido
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/, // Corrigido
                use: { loader: "babel-loader" }
            },
            {
                test: /\.html$/,
                use: { loader: "html-loader" }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|jpg?g|gif)$/i,
                use: ["file-loader"]
            },
        ]
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    plugins: [ // Corrigido
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
};
