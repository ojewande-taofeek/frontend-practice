const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const WebpackDashboard = require("webpack-dashboard/plugin");

module.exports = {
    entry: {
        index: "./src/index.js",
    },
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "bundle.js",
        assetModuleFilename: "images/[hash][ext][query]",
    },
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        static: {
          directory: path.join(__dirname, '../dist'),
        },
        compress: true,
        port: 3000,
        hot: true,
    },
    module: {
        rules: [
            { test: /\.css$/i, use: ["style-loader", "css-loader"] },
            { test: /\.(png|jpe?g|gif|svg)$/i, type: "asset/resource" },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                        plugins: ["@babel/plugin-transform-runtime"],
                    },
                },
            },
        ],
    },
    resolve: {
        extensions: [".*", ".js", ".jsx"], 
    },
    plugins: [
        new HTMLWebpackPlugin({
            title: "React-Tutorial",
            template: "./dist/index.html",
        }),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ['!./dist/index.html', '!./dist/favicon.ico'],
        }), 
        new WebpackDashboard(),
    ],
    performance: {
        maxAssetSize: 1000000,
    },
    optimization: {
        minimizer: [
            "...",
            new ImageMinimizerPlugin({
                minimizer: {
                    implementation: ImageMinimizerPlugin.imageminMinify,
                    options: {
                        plugins: [
                            ["gifsicle", { interlaced: true, optimizationLevel: 3 }],
                            ["jpegtran", { progressive: true }],
                            ["optipng", { optimizationLevel: 7 }],
                            ["mozjpeg", { quality: 70 }],
                            ["pngquant", { quality: [0.6, 0.8], speed: 1 }],
                            [
                                "svgo",
                                {
                                    plugins: [
                                        {
                                            name: "preset-default",
                                            params: {
                                                overrides: {
                                                    removeViewBox: false,
                                                    addAttributesToSVGElement: {
                                                        params: {
                                                            attributes: [
                                                                { xmlns: "http://www.w3.org/2000/svg" },
                                                            ],
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                    ],
                                },
                            ],
                        ],
                    },
                },
            }),
        ],
    },
};
