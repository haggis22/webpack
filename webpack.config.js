const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {

    entry: { index: path.resolve(__dirname, "src/client/poker", "poker.js") },
    output: { path: path.resolve(__dirname, "dist/poker") },

    module: {
        rules: [

            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", 'sass-loader']
            }

        ]
    },

    optimization: {
        splitChunks: { chunks: "all" }
    },

    plugins: [

        new HtmlWebpackPlugin({ template: path.resolve(__dirname, "src/client/poker", "index.html")})
    ],

    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        }
    }

};