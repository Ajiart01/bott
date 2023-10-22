async function handler(m, { conn }) {
try {
let groups = Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats && !chat.metadata?.read_only && !chat.metadata?.announce).map(v => v[0])
for (let id of groups)
conn.chatModify({
delete: true,
lastMessages: [{key: m.key, messageTimestamp: m.messageTimestamp}]
},
id)
m.reply("Membersihkan semua pesan group..")
} catch {
m.reply("Yaahh.. gagal menghapus semua pesan group.. :(")
}

}
handler.command = /^clearchatgroup$/i
handler.owner = true
module.exports = handler
