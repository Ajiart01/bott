let handler = async (m, { conn, args, usedPrefix, command }) => {
const q = {
	"key": {
		"remoteJid": "status@broadcast",
                "participant":"0@s.whatsapp.net",
		"fromMe": false,
		"id": ""
	},
	"message": {
		"conversation": `kak ${await conn.getName(m.sender)} baik banget ❤`
	 }
 }
conn.sendFile(m.chat, 'https://telegra.ph/file/992201ee181ffbe24a821.jpg', '', `💌 Kak ${await conn.getName(m.sender)} mau donasi? baik banget! 💌 scan aja Code qr nya klo mau donasi.\n\nMETODE LAINNYA:\nDana: 085163999446 \n\nPulsa:085163999446 `, q) // Tambah sendiri kalo mau
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
