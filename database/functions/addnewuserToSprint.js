const { server } = require('../connection')

module.exports = {
    async addUserToSprint(userid, username, starting_lc, serverid, channelname) {
        try {
            //getting previous users added if there are any
            let values = await server.get(`sprint://${serverid}/${channelname}`);
            if (values != null && values != undefined && values != '') {
                const valuess = values.split(',')
                console.log(valuess)
                values = valuess;
                console.log('Types: ', typeof values)
                console.log('Types: ', typeof valuess)
            } else {
                values = [];
            }


            //add new one into the array
            values.push(`{userid: ${userid}; username: ${username}; lc: ${starting_lc}}/`)
            cleanArray = values.filter(Boolean);
            console.log(cleanArray)
            let stringValues = cleanArray.toString();
            await server.set(`sprint://${serverid}/${channelname}`, stringValues, (err, reply) => {
                if (err) throw err;
                console.log(reply);
            })
        } catch (err) {
            console.log(err)
        }
    }
}