const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

let i = 0;

var handleData = (socket) => {
  return function(data) {
    var message = JSON.parse(data.toString());

    if (message[0] === 0) {
      console.log(`${message[1]}: ${message[2]}`);
      wss.clients.forEach(client => {
        client.send(data);
      });
    }
  }
}

wss.on('connection', function connection(ws) {
  ws.on('message', handleData(ws));
});