const { MessageType } = require('@adiwajshing/baileys')
async function handler(m, { conn, text, usedPrefix, command }) {
    this.anonymous = this.anonymous ? this.anonymous : {}
    if (!text) return conn.reply(m.chat, `Silahkan masukan menfessin kamu\n\nContoh:\n${usedPrefix + command} Hai kamu disana..\n\nLink Group Menffesin:\nhttps://chat.whatsapp.com/BVpilyNWNMD7nT1p2hJac6`, m)
    if(text.split(' ').length < 2) throw 'Minimal 2 kata!'
    let room = Object.values(this.anonymous).find(room => room.check(m.sender))
	if (room) throw 'Kamu masih berada di anonymous chat\nBerhenti mencari partner untuk menggunakan fitur ini'
    let username = conn.getName(m.sender) 
    const teks1 = `*${username.replace(/@.+/, '')}:* ${text}`
    conn.reply('6289654360447-1605198136@g.us', text)
    conn.reply(m.chat, '✔️ Berhasil terkirim group menffesin..', m)
}
handler.help = ['mfg <text>']
handler.tags = ['info']
handler.command = /^mfg|meffesin$/i
handler.private = true
handler.fail = null

module.exports = handler
