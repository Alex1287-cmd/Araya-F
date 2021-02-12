let fetch = require('node-fetch')

let handler = async(m, { conn, args, usedPrefix }) => {
    if (args.length == 0) return conn.reply(m.chat, `Untuk menggunakan ${usedPrefix}kpop\nSilahkan ketik: ${usedPrefix}kpop [query]\nContoh: ${usedPrefix}kpop bts\n\nquery yang tersedia:\nblackpink, exo, bts`, m)
    if (args[0] == 'blackpink' || args[0] == 'exo' || args[0] == 'bts') {

        fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/kpop/' + args[0] + '.txt')
            .then(res => res.text())
            .then(body => {
                let randomkpop = body.split('\n')
                let randomkpopx = randomkpop[Math.floor(Math.random() * randomkpop.length)]
                conn.sendFile(m.chat, randomkpopx, '', 'Nee', m)
            })
            .catch(() => {
                conn.reply(m.chat, 'Ada yang Error!', m)
            })
    } else {
        conn.reply(m.chat, `Maaf query tidak tersedia. Silahkan ketik ${usedPrefix}anime untuk melihat list query`, m)
    }

}

handler.help = ['kpop'].map(v => v + ' <query>')
handler.tags = ['wallpaper']
handler.command = /^(kpop)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = false

module.exports = handler
