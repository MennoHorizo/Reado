module.exports = {
    async createTemplate (message, stacktrace, level) {
        let currentDate = new Date();
        let cDay = currentDate.getDate();
        let cMonth = currentDate.getMonth() + 1;
        let cYear = currentDate.getFullYear();
        const   date = `${cDay}/${cMonth}/${cYear}`, 
                time = `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}:${currentDate.getMilliseconds()}`;
        const messageTemplate = `
            [Reado-Shard-One]::::[${date}]::::[${time}] <<Info>> <
                Message: ${message}
                From: ${stacktrace}
                Level: ${level}
            >
        `
        return messageTemplate;
    },

    async createErrorTemplate (message, stacktrace, level, critical) {
        let currentDate = new Date();
        let cDay = currentDate.getDate();
        let cMonth = currentDate.getMonth() + 1;
        let cYear = currentDate.getFullYear();
        const   date = `${cDay}/${cMonth}/${cYear}`, 
                time = `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}:${currentDate.getMilliseconds()}`;
        const messageTemplate = `
            [Reado-Shard-One]::::[${date}]::::[${time}] <<ERROR>> <
                Message: ${message}
                From: ${stacktrace}
                Level: ${level}
                Critical: ${critical}
            >
        `
        return messageTemplate;
    },




    /**
     * @param {String} message The message of the log.
     * @param {String} color Defines which color the use if you use the console, disabled when using file.
     * @param {Boolean} CorF Defines to use the file or console, true is console, 
     *                       false is file. If wanted to use both, set true and in the options set the 
     *                       opion 'useBothLoggingOptions' to true.
     * @param {Obect} options List of options. (filePath, useBothLoggingOptions, useColors, levelOfMessage)
     */
    async log (message, color, CorF, options) {
        const template = this.createTemplate(message, 'Not avaible.', options.levelOfMessage)
    },
    /**
     * @param {String} message The message of the error.
     * @param {Boolean} critical Is the error critical or not?
     * @param {String} stacktrace Stacktrace of the error.
     * @param {Boolean} CorF Defines to use the file or console, true is console, 
     *                       false is file. If wanted to use both, set true and in the options set the 
     *                       opion 'useBothLoggingOptions' to true.
     * @param {Object} options List of options. (filePath, useBothLoggingOptions, useColors, levelOfMessage)
     */
    async error (message, critical, stacktrace, CorF, options) {
        const template = this.createTemplate(message, stacktrace, options.levelOfMessage)
    },
    //options is Object with:
    /*
    options = {
        filePath,
        useBothLoggingOptions,
        useColors,
        levelOfMessage,
        typeOfEventFired,
        eventListenersTriggerd,
        exactDate,
        exactTime
    }
    */
    async debug (message, stacktrace, color, CorF, options) {

    },
}