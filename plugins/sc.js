let handler = async (m, { conn, usedPrefix }) => {
const q = {
	"key": {
		"remoteJid": "status@broadcast",
                "participant":"0@s.whatsapp.net",
		"fromMe": false,
		"id": ""
	},
	"message": {
		"conversation": `hehe`
	 }
 }
 conn.sendMessage(m.chat, { text: 'SC RaisaBot:\n\nhttps://shareduit.pw/scainenoenc'}, q)

}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(sc)$/i

module.exports = handler