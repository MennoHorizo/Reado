const redis = require('redis');
const server = redis.createClient();

server.on('connect', () => {
  console.log('Redis server trying to connect.');
  server.flushAll()
});

server.on('ready', () => {
  console.log('Redis server is online!');
})

server.on('reconnecting', () => {
  console.log(`Redis server trying to reconnect!`)
});


server.on('error', (err) => {
  console.log('Redis server error: ', err)
});

server.on('quit', () => {
  console.log('Redis server quited.')
});

module.exports = {server}