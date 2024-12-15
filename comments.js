//create web server
const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');
const comments = [];

const server = http.createServer((req, res) => {
    const parseUrl = url.parse(req.url);
    const path = parseUrl.pathname;
    const query = querystring.parse(parseUrl.query);
    if (path === '/') {
        fs.readFile('./index.html', (err, data) => {
            if (err) {
                res.end('404 not found');
            } else {
                res.end(data);
            }
        });
    } else if (path === '/comment') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        if (query.op === 'push') {
            comments.push(query.comment);
            res.end(JSON.stringify({ status: 'success' }));
        } else if (query.op === 'list') {
            res.end(JSON.stringify(comments));
        }
    } else {
        res.end('404 not found');
    }
});

server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});