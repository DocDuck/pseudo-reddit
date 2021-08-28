const path = require('path');

/** CONSTANTS */
const PORT = 3000;
const NODE_ENV = process.env.NODE_ENV;

module.exports = {
    target: 'node',
    resolve: {
        extensions: ['.js', '.jsx', 'ts', 'tsx', 'json']  
    },
    mode: NODE_ENV ? NODE_ENV : 'development',
    entry: path.resolve(__dirname, '../src/server/server.js'),
    output: {
        path: path.resolve(__dirname, '../dist/server'),
        filename: 'server.js'
    },
    module: {
        rules: [{
            test: /\.[tj]sx?$/,
            use: ['ts-loader']
        }]
    }
}