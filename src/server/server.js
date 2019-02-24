// PACKAGES
const express = require('express');
const next = require('next');
// ROUTES
const routes = require('./routes');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dir: './src', dev });
const handle = app.getRequestHandler();

app.prepare()
    .then(() => {
        const server = express();

        Object.keys(routes).forEach((key) => {
            const route = routes[key];
            server.get(route.path, (req, res) => {
                app.render(req, res, `/${route.page}`, Object.assign({}, req.params, req.query));
            });
        });

        server.get('*', (req, res) => {
            return handle(req, res);
        });

        server.listen(3000, (err) => {
            if (err) {
                throw err;
            }
            console.log('> Ready on http://localhost:3000'); // eslint-disable-line
        });
    })
    .catch((ex) => {
        console.error(ex.stack);
        process.exit(1);
    });
