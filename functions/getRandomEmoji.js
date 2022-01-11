module.exports = {
    randomEmoji () {
        try {
            const mapEmojis = [
                '💩💩💩',
                '💛💛💛',
                '💙💙💙',
                '🖤🖤🖤',
                '💣💣💣',
                '🌻🌻🌻',
                '🌵🌵🌵'
            ]
            const randomNum = Math.floor(Math.random() * (0 - mapEmojis.length + 1) ) + mapEmojis.length ;
            return mapEmojis[randomNum];
        } catch (err) {
            console.log(err)
        }
    }
}