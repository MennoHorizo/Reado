const { server } = require('../connection')

module.exports = {
    createSprint(duration, offset, serverid, channelname) {
        try {
            server.set(`sprint://${serverid}/${channelname}`, '', (err, reply) => {
                if (err) throw err;
                console.log(reply);
            })
        } catch (err) {
            return err
        }
    }
}