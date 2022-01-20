const { server } = require('../connection')

module.exports = {
    async check (serverid, channelname, userid) {
        const sprintData = await server.get(`sprint://${serverid}/${channelname}`)
        if (sprintData == '') {
            return false
        }
        let cleanA = sprintData.split('/').filter(Boolean);
        for (let i =0; i < cleanA.length; i++) {
            cleanA[i] = cleanA[i].replace(/;/g, ",");
            cleanA[i] = JSON.parse(cleanA[i]);
            if (cleanA[i].userid == userid) {
                return true
            } else return false
        }
    }   
}