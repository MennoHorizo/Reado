const registerNewSprint = require('../database/functions/registerNewSprint')

module.exports = {
    createSprint (duration, offset, serverid, channelname, sprintid) {
        try {
            registerNewSprint.createSprint(duration, offset, serverid, channelname)
        } catch (err) {
            return err
        }
    }
}