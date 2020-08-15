const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
        entry: "./src/app.js",
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: "bundle.js"
        },
        module: {
            rules: [
                /*style and css loader*/
                {
                    test: /\.css$/,
                    use: [
                        {
                            loader: "style-loader"
                        },
                        {
                            loader: "css-loader"
                        }
                    ]
                    
                },
                {
                    test: /\.html$/,
                    use: [
                        {
                            loader: "html-loader"
                        }
                    ]
                },
                {
                    test: /\.(jpg|jpeg|png)$/,
                    use: [
                        {
                            loader: "file-loader",
                            options: {
                                name: "[name].[hash].[ext]",
                                outputPath: "imgs"
                            }
                        }
                    ]
                },
                /* babel loader */
                {
                    test: /\.js$/,
                    exclude: "/node_modules/",
                    use: [
                        {
                            loader: "babel-loader",
                            options: {
                                presets: ["@babel/preset-env"]
                            }
                        }
                    ]
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: "./src/index.html",
                filename: "index.html"
            })
        ]
}