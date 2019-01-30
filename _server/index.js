const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const open = require("open");

const port = '8083'
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false,
}));

app.use(express.static(path.resolve(__dirname, './dist')));

app.get('*', function (req, res) {
    const html = fs.readFileSync(path.resolve(__dirname, './dist/index.html'), 'utf-8');
    res.send(html);
});

app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT,GET,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.listen(port);
console.log('You can open in the browser.');
console.log(`http://localhost:${port}/`);
open(`http://localhost:${port}/`);