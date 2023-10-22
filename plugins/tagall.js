let handler = async(m, { conn, text, participants }) => {
  let teks = `${text ? text : ' '}\n\n`
		      	for (let mem of participants) {
		            teks += `@${mem.id.split('@')[0]}\n`
				}
				conn.sendButton(m.chat, teks, wm, 'https://telegra.ph/file/7cbec1fb46c6556b7ced1.jpg', [['Menu', '.menu']], m, { asLocation: true, mentions: participants.map(a => a.id)  })
                // conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <pesan>']
handler.tags = ['group']
handler.command = /^(tagall)$/i

handler.group = true
handler.admin = true

module.exports = handler

