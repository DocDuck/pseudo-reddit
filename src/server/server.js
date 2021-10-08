import express from 'express';
import ReactDOM from 'react-dom/server';
import Header from '../shared/Header';

import template from './template';

const ssrServer = express();

ssrServer.use('/static', express.static('./dist/client'));

ssrServer.get('/', (req, res) => {
    res.send(template(ReactDOM.renderToString(Header())))
});

ssrServer.listen(3000, () => {
    console.log('SSR server started on localhost:3000')
});