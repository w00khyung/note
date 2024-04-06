const express = require('express');
const app = express();

app.use('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(8080, () => console.log('server started!'));

app.get('/', () => {
  res.send('여긴 HTTP에요');
});

const WebSocket = require('ws');

const socket = new WebSocket.Server({
  port: 8081,
});

socket.on('connection', (ws, req) => {
  ws.on('message', (msg) => {
    console.log('user send: ' + msg);
    ws.send('누구세요');
  });
});
