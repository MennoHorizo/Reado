async function startConnection () {
    const {server} = require('../connection')
    await server.connect();
}
module.exports = { startConnection }