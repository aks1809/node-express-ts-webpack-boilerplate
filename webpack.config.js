const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: './src/index.ts', // Entry point of your application
    target: 'node', // Set the target environment to Node.js
    externals: [nodeExternals()], // Exclude external modules
    output: {
        filename: 'index.js', // Output filename
        path: path.resolve(__dirname, 'dist'), // Output directory
    },
    resolve: {
        extensions: ['.ts', '.js'], // File extensions to resolve
        alias: {
            '@config': path.resolve(__dirname, 'src/config'),
            '@controller': path.resolve(__dirname, 'src/controller'),
            '@dao': path.resolve(__dirname, 'src/dao'),
            '@database': path.resolve(__dirname, 'src/database'),
            '@routes': path.resolve(__dirname, 'src/routes'),
            '@schema': path.resolve(__dirname, 'src/schema'),
            '@service': path.resolve(__dirname, 'src/service'),
            '@utils': path.resolve(__dirname, 'src/utils'),
        },
    },
    watchOptions: {
        ignored: /node_modules/,
        aggregateTimeout: 300, // default value
        poll: 1000 // default value
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/, // Apply babel-loader and ts-loader for .ts and .tsx files
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', '@babel/preset-typescript']
                        }
                    },
                    {
                        loader: 'ts-loader'
                    }
                ]
            }
        ]
    }
};
