const client = require('../connection')

module.exports = {
    async createSprint(duration, offset, serverid, channelname, sprintid) {
        try {
            await client.del(`sprint://${serverid}/${channelname}`);
            setTimeout(() => {}, 360)
            await client.set(`sprint://${serverid}/${channelname}`, '', (err, reply) => {
                console.log('haii')
                if (err) throw err;
                console.log(reply);
            })
        } catch (err) {
            return err
        }
    }
}