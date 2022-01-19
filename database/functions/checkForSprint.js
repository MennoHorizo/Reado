const { server } = require('../connection')

module.exports = {
    async check (serverid, channelname) {
        const data = await server.get(`sprint://${serverid}/${channelname}`);
        if (data != null) {return true} else {return false}
    }
}