let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    if (typeof db.data.users[who] == 'undefined') throw 'Pengguna tidak ada didalam data base'
    m.reply(`${db.data.users[who].limit} Limit Left ಥ_ಥ`)
    // conn.sendHydrated(m.chat, `${global.db.data.users[who].limit} Limit Left ಥ_ಥ`, 'Regards by Aine', null, `https://www.whatsapp.com/otp/copy/${global.db.data.users[who].limit}`, 'Copy Your Limit', null, null, [[null,null]], m)
}
handler.help = ['limit [@user]']
handler.tags = ['xp']
handler.command = /^(limit)$/i
module.exports = handler
