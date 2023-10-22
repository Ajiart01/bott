async function handler(m, { conn }) {
try {
let chats = Object.entries(conn.chats).filter(([_, chat]) => chat.isChats).map(v => v[0])
for (let id of chats)
conn.chatModify({
delete: true,
lastMessages: [{key: m.key, messageTimestamp: m.messageTimestamp}]
},
id)
m.reply("Membersihkan semua pesan pribadi..")
} catch {
m.reply("Yaahh.. gagal menghapus semua pesan pribadi.. :(")
}
}
handler.command = /^clearchatpribadi$/i
handler.owner = true
module.exports = handler
