const { server } = require('../connection')

module.exports = {
    async startSprint (serverid, channelname) {
        return await server.get(`sprint://${serverid}/${channelname}`);
    }
}