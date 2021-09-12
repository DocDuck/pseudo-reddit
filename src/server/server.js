import express from 'express';
import ReactDOM from 'react-dom/server';
import Header from '../shared/Header';

import template from './template';

const app = express(); 

app.get('/', (req, res) => {
    res.send(template(ReactDOM.renderToString(Header())))
})

app.listen(3000, () => {
    console.log('server started on localhost:3000')
})