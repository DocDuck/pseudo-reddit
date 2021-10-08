const express = require('express');
const webpack = require('webpack');
const [webpackClientConfig, webpackServerConfig] = require('../webpack.config');
const nodemon = require('nodemon');
const path = require('path');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const webpackClientCompiler = webpack(webpackClientConfig);
const webpackServerCompiler = webpack(webpackServerConfig);

const hmrServer = express();

hmrServer.use(webpackDevMiddleware(webpackClientCompiler, {
    publicPath: webpackClientConfig.output.publicPath,
    serverSideRender: true,
    noInfo: true,
    watchOptions: {
        ignore: /dist/,
    },
    writeToDisk: true,
    stats: 'error-only'
}));
hmrServer.use(webpackHotMiddleware(webpackClientCompiler, {
    path: '/static/__webpack_hmr'
}))
hmrServer.listen(3001, () => {
    console.log('HMR server started on localhost:3001')
})

webpackServerCompiler.run((err) => {
    if (err) {
        console.error('Compilation failed:', err);
    }

    webpackServerCompiler.watch({}, (err) => {
        if (err) {
            console.error('Compilation failed:', err);
        }
        console.log('Compilation successful');
    })

    nodemon({
        script: path.resolve(__dirname, '../dist/server/server.js'),
        watch: [
            path.resolve(__dirname, '../dist/client'),
            path.resolve(__dirname, '../dist/server')
        ]
    })
});
