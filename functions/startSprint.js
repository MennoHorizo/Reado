const startSprint = require('../database/functions/startSprint')

module.exports = {
    async startSprint (serverid, channelname) {
        startSprint.startSprint(serverid, channelname, sprintid, duration)
    }
}