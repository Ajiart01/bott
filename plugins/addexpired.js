let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `Penggunaan:\n${usedPrefix + command} <angka> [jid]\n\nContoh:\n${usedPrefix + command} 30`
    let who
    if (m.isGroup) who = args[1] ? args[1] : m.chat
    else who = args[1]
    var jumlahHari = 86400000 * args[0]
    var now = new Date() * 1
    let chat = db.data.chats[who]
    if (now < chat.expired) chat.expired += jumlahHari
    else chat.expired = now + jumlahHari
    const q = {
	"key": {
		"remoteJid": "status@broadcast",
                "participant":"0@s.whatsapp.net",
		"fromMe": false,
		"id": ""
	},
	"message": {
		"conversation": "Berhasil menambahkan expired group"
	}
    }
    //conn.reply(who, `Hitung mundur: ${conn.msToDate(chat.expired - now)}`)
    conn.reply(who, `Berhasil menetapkan hari kedaluarsa untuk ${await conn.getName(who)} selama ${args[0]} hari.\n\nHitung Mundur : ${conn.msToDate(chat.expired - now)}`, q)
}
handler.help = ['addexpired <angka> [jid]']
handler.tags = ['owner']
handler.command = /^(addexpired)$/i

handler.owner = true

module.exports = handler
