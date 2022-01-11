const { server } = require('../connection')

module.exports = {
    addUserToSprint(userid, username, starting_lc, serverid, channelname) {
        try {
            //getting previous users added if there are any
            let values = server.get(`sprint://${serverid}/${channelname}`);

            //add new one into the array
            values = [...values, {"userid": userid, "username": username, "lc": starting_lc}]
            let stringValues = values.toString();

            //sets it in the db
            server.set(`sprint://${serverid}/${channelname}`, stringValues, (err, reply) => {
                if (err) throw err;
                console.log(reply);
            })
        } catch (err) {
            return err
        }
    }
}