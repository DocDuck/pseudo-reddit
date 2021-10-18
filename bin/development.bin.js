// const express = require('express');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config');
const nodemon = require('nodemon');
const path = require('path');

const webpackCompiler = webpack(webpackConfig);

webpackCompiler.run((err) => {
    if (err) {
        console.error('Compilation failed:', err);
    }

    // webpackCompiler.watch({}, (err) => {
    //     if (err) {
    //         console.error('Compilation failed:', err);
    //     }
    //     console.log('Compilation successful');
    // })

    nodemon({
        script: path.resolve(__dirname, '../dist/server/server.js'),
        watch: [
            path.resolve(__dirname, '../dist/client'),
            path.resolve(__dirname, '../dist/server')
        ]
    })
});
