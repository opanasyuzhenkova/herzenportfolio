const express = require('express');
const bodyParser = require('body-parser');
const busboy = require('busboy');
const crypto = require('crypto');
const cors = require('cors');

const app = express();
let key;
let secret;

app
    .use(cors())
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({extended: true}))
    .all('/decypher', (req, res) => {
        if (req.method === 'POST'){
            const bb = busboy({headers: req.headers});
            bb.on('file', (name, file) => {
                file.on('data', (data) => {
                    if (name == 'key'){
                        key = String(data);
                    }
                    else if (name == 'secret'){
                        secret = data;
                    }
                });
            });
            bb.on('close', () => {
                console.log(String(crypto.privateDecrypt(key, secret)));
                res.send(String(crypto.privateDecrypt(key, secret)));
            });
            req.pipe(bb);
        }
    })
    .get('/sample/', r => r.res.send('function task(x) { return x * Math.pow(x, 2); }')) 
    .listen();
