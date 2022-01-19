const {server} = require('../connection')

module.exports = {
    async createSprint(duration, offset, serverid, channelname) {
        try {
            console.log('hello')
            if (await server.get(`sprint://${serverid}/${channelname}`) != null) {
                await client.del(`sprint://${serverid}/${channelname}`, function(err, response) {
                    if (response == 1) {
                        console.log("Deleted Successfully!")
                    } else{
                        console.log("Cannot delete")
                    }
                 })
            }
            console.log('uifkjba')
            setTimeout(() => {console.log('Timeout over.')}, 360)
            await server.set(`sprint://${serverid}/${channelname}`, '', function (err, reply) {
                console.log('haii')
                if (err) throw err;
                console.log(reply);
            })
        } catch (err) {
            console.log(err)
        }
    }
}