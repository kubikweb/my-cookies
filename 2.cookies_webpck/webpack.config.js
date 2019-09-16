const path = require("path");
const glob = require("glob");
const HtmlPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/main.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    watch: true,
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["env"]
                    }
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", {
                    loader: "css-loader",
                    // options: {
                    //     sourceMap: true,
                    // }
                }]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                    }
                ]
            },

        ]
    },
    plugins: [
        new HtmlPlugin({
            filename: "index.html",
            template: "./src/index.html"

        }),
    ]

};