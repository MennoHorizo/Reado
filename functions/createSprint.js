const registerNewSprint = require('../database/functions/registerNewSprint')

module.exports = {
    createSprint (duration, offset, serverid, channelname) {
        try {
            registerNewSprint.createSprint(duration, offset, serverid, channelname)
        } catch (err) {
            return err
        }
    }
}