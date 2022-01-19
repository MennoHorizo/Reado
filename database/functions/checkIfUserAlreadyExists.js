const { server } = require('../connection')

module.exports = {
    async check (serverid, channelname, userid) {
        const sprintData = await server.get(`sprint://${serverid}/${channelname}`)
        if (sprintData == '') {
            return false
        }
        let cleanA = sprintData.split('/').filter(Boolean);
        for (let i =0; i < cleanA.length; i++) {
            console.log('i = ', i)
            console.log(cleanA[i])
            cleanA[i] = cleanA[i].replace(';', ',')
            console.log(cleanA[i])
        }
        console.log(cleanA)
        let newData = []
        console.log(userid)
        console.log('newData: ', newData)
        let userIsIn = newData.filter(function (str) { return str.indexOf(userid) === -1; });
        if (userIsIn != undefined || userIsIn != '' || userIsIn != null || userIsIn != NaN) {
            return true;
        } else return false;
    }   
}