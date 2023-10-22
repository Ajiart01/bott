let handler = async (m, { conn, args }) => {
	let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(conn.store.presences[id]), conn.user.jid]
                    conn.reply(m.chat, 'List Online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })

}
handler.help = ['listonline']
handler.tags = ['group']
handler.command = /^(here|listonline|online)$/i
handler.group = true
handler.limit = true
handler.fail = null

module.exports = handler
