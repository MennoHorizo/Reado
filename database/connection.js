const redis = require('redis');
const server = redis.createClient({
    host: 'redis-16346.c2.eu-west-1-3.ec2.cloud.redislabs.com',
    port: '16346',
    password: process.env.REDIS_PASSWORD
});

server.on('error', err => {
    console.log('Error ' + err);
});
module.exports = { server, redis }