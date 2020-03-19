const http = require('http');
const fs = require('fs');
const url = require('url');
const spawn = require('child_process').spawn;

http.createServer((req, res) => {
    let fileName = '';
    let u = url.parse(req.url, true);
    console.log(u.pathname);

    if (u.pathname === '/eu') {
        let collectedData = '';
        let parsed = u.query;
        let proc = spawn(`extendedEu\\x64\\Debug\\extendedEu.exe`, [parsed.p1, parsed.p2]);
        proc.stdout.on('data', (data) => {
            collectedData += data;
        });

        proc.on('exit', () => {
            res.writeHead(200, { 'Content-type': 'text/plain' });
            res.end(collectedData);
        });
    } else {
        if (u.pathname === '/') {
            fileName = 'index.html';
        } else {
            fileName = u.pathname;
            fileName = fileName.slice(1, fileName.length)
        }

        try {
            let fileData = fs.readFileSync(fileName);
            res.writeHead(200);
            res.end(fileData);
        } catch (e) {
            res.writeHead(404);
            res.end();
        }
    }
}).listen(3000);

console.log('Started at http://localhost:3000');