let handler = async (m, { conn, text, args, usedPrefix, command }) => {
const sections = [
    {
	rows: [
	    {title: "Clear Chat Group", rowId: `.clearchatgroup`, description: "Membersihkan semua pesan group"},
	    {title: "Clear Chat Pribadi", rowId: `.clearchatpribadi`, description: "Membersihkan semua pesan chat pribadi"},
	]
    },
]

const listMessage = {
  text: "Fitur ini untuk membersihkan pesan",
  footer: `Made by ♡ with Aine`,
  title: "Clear Chat Pribadi & Group",
  buttonText: "List Clear",
  sections
}

const sendMsg = await conn.sendMessage(m.chat, listMessage)
}

handler.help = ['clearchat']
handler.tags = ['owner']
handler.command = /^clearchat$/i
handler.owner = true 

module.exports = handler
