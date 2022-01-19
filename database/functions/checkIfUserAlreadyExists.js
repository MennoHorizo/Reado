const { server } = require('../connection')

module.exports = {
    async checkForUser (userid, serverid, channelname) {
        const sprintData = await server.get(`sprint://${serverid}/${channelname}`)
        console.log(sprintData)
    }   
}