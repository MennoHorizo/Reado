//const { client } = require('../connection')

module.exports = {
    createSprint(duration, offset, serverid, channelname) {
        try {
            client.set(`sprint://${serverid}/${channelname}`, '', (err, reply) => {
                if (err) throw err;
                console.log(reply);
            })
        } catch (err) {
            return err
        }
    }
}