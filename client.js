const WebSocket = require('ws');

const ws = new WebSocket('ws://127.0.0.1:8080');
let id = process.argv[2];

ws.on('open', function open() {
});

ws.on('message', function incoming(message) {
  console.log('received: %s', message);
});

var stdin = process.openStdin();
stdin.addListener("data", function(d) {
  var msg = [0, id, d.toString().trim()];
  var jsonMsg = JSON.stringify(msg);
  ws.send(jsonMsg);
});