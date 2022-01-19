const { server } = require('../connection')

module.exports = {
    async startSprint (serverid, channelname) {
        console.log(`sprint://${serverid}/${channelname}`)
        console.log(await server.get(`sprint://${serverid}/${channelname}`))
    }
}