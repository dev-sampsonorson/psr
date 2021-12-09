const { Compilation } = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const extractStyleEntries = require("./extractStyleEntries.js");


// const result = extractStyleEntries("./src/**/*.component.ts");

module.exports = (env, argv) => {
    const LIB_PATH = process.env.LIB_PATH;
    const result = extractStyleEntries(path.resolve('.'), path.resolve('.', 'src/**/*.component.ts'));

    return {
        entry: {
            ...result.styleEntries
        },
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                        },
                        { loader: 'css-loader' },
                        {
                            loader: 'postcss-loader',
                            options: {
                                postcssOptions: {
                                    config: path.resolve(__dirname, "postcss.config.js"),
                                },
                            },
                        },
                        { loader: 'sass-loader' },
                    ],
                },
            ],
        },
        resolve: {
            extensions: ['.html', '.scss', '.css', '.js', '.tsx', '.ts']
        },
        output: {
            path: path.resolve('.', "temp"),
            filename: "[name].js",
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: '[name].css',
            }),
            new CopyPlugin({
                patterns: [
                    { from: path.resolve(__dirname, LIB_PATH + '/styles.css'), to: '.' },
                    {
                        // from: path.resolve(__dirname, 'src'),
                        from: path.resolve('.', 'src'),
                        /* filter: async (resourcePath) => {
                          return resourcePath.indexOf("src/index.ts") === -1;
                        }, */
                        globOptions: {
                            dot: true,
                            gitignore: true,
                            ignore: ["**/lib/**/*.scss"],
                        },
                        to: './src', transform(content) {
                            return content.toString().replace(/styleUrls: \['[./\a-zA-z-]*(.scss)'\]/g, function (match, g1, g2) {
                                return (g1 === '.scss') ? match.replace('.scss', '.css') : match;
                            });
                        }
                    },
                    { from: path.resolve(__dirname, LIB_PATH + '/karma.conf.js'), to: '.' },
                    {
                        from: path.resolve(__dirname, LIB_PATH + '/ng-package.json'), to: '.', transform(content) {
                            return content.toString().replace(/(\.\.\/){2}/g, '../../../');
                        }
                    },
                    { from: path.resolve(__dirname, LIB_PATH + '/package-lock.json'), to: '.' },
                    {
                        from: path.resolve(__dirname, LIB_PATH + '/package.json'), to: '.', transform(content) {
                            return content.toString()
                                .replace(/"scripts":[\s\S]*?\}/g, '')
                                .replace(/"devDependencies":[\s\S]*?\}/g, '')
                                .replace(/,\n*\s*,/g, ',')
                                .replace(/,\n*\s*\}/g, '\n}');
                        }
                    },
                    { from: path.resolve(__dirname, LIB_PATH + '/README.md'), to: '.' },
                    {
                        from: path.resolve(__dirname, LIB_PATH + '/tsconfig.lib.json'), to: '.', transform(content) {
                            return content.toString().replace(/(\.\.\/){2}/g, '../../../');
                        }
                    },
                    { from: path.resolve(__dirname, LIB_PATH + '/tsconfig.lib.prod.json'), to: '.' },
                    {
                        from: path.resolve(__dirname, LIB_PATH + '/tsconfig.spec.json'), to: '.', transform(content) {
                            return content.toString().replace(/(\.\.\/){2}/g, '../../../');
                        }
                    },
                ],
            }),
            {
                apply(compiler) {
                    compiler.hooks.compilation.tap('DeleteUnwatedBundleFiles', (compilation) => {
                        compilation.hooks.processAssets.tap(
                            {
                                name: 'DeleteUnwatedBundleFiles',
                                stage: Compilation.PROCESS_ASSETS_STAGE_ADDITIONS
                            },
                            (assets) => {
                                delete assets['index.js'];
                                delete assets['styles.js'];
                                result.jsToDelete.forEach(item => {
                                    delete assets[item];
                                });
                            }
                        );
                    })
                },
            },
        ],
        optimization: {
            runtimeChunk: false,
            removeEmptyChunks: true,
            splitChunks: {
                cacheGroups: {}
            }
        }

    };
}
