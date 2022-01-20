const { server } = require('../connection')

module.exports = {
    async cancel (serverid, channelname) {
        await server.del(`sprint://${serverid}/${channelname}`)
    }
}