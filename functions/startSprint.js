const startSprint = require('../database/functions/startSprint')

module.exports = {
    async startSprint (serverid, channelname, sprintid, duration) {
        startSprint.startSprint(serverid, channelname, sprintid, duration)
    }
}