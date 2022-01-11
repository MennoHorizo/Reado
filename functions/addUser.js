const addNewUserToSprint = require('../database/functions/addNewUserToSprint')

module.exports = {
    addUser (userid, username, starting_lc, serverid, channelname) {
        try {
            addNewUserToSprint.addUserToSprint(userid, username, starting_lc, serverid, channelname)
        } catch (err) {
            return err
        }
    }
}