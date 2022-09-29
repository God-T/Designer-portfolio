const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.use('/static', express.static(path.resolve(__dirname, '../dist')));

app.get('/', function (_, res) {
    const indexHtmlPath = path.resolve(__dirname, '../dist/index.html');
    const content = fs.readFileSync(indexHtmlPath, 'utf-8');
    res.send(content);
});

app.get('/project/', function (_, res) {
    const indexHtmlPath = path.resolve(__dirname, '../dist/project/index.html');
    const content = fs.readFileSync(indexHtmlPath, 'utf-8');
    res.send(content);
});

app.get('/projects-list/', function (_, res) {
    const indexHtmlPath = path.resolve(
        __dirname,
        '../dist/projects-list/index.html'
    );
    const content = fs.readFileSync(indexHtmlPath, 'utf-8');
    res.send(content);
});

app.get('/photography/', function (_, res) {
    const indexHtmlPath = path.resolve(
        __dirname,
        '../dist/photography/index.html'
    );
    const content = fs.readFileSync(indexHtmlPath, 'utf-8');
    res.send(content);
});

app.get('/about/', function (_, res) {
    const indexHtmlPath = path.resolve(__dirname, '../dist/about/index.html');
    const content = fs.readFileSync(indexHtmlPath, 'utf-8');
    res.send(content);
});

app.listen(8080, function () {
    console.log('Server is running...');
});
