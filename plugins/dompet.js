let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    if (typeof db.data.users[who] == 'undefined') throw 'Pengguna tidak ada didalam data base'
    //m.reply(`${db.data.users[who].money} Your money`)
    conn.sendButton(m.chat, `${db.data.users[who].money} Your money`, wm, 'https://telegra.ph/file/5503516373d69763fa2a1.jpg', [['ATM ALL', '.atmall'], ['PULL ALL', '.pullall']], m, { asLocation: true })
    //conn.sendHydrated(m.chat, `${global.db.data.users[who].money} Your money`, 'Regards by Aine', null, `https://www.whatsapp.com/otp/copy/${global.db.data.users[who].money}`, 'Copy Your Money', null, null, [[null,null]], m)
}
handler.help = ['dompet [@user]']
handler.tags = ['xp']
handler.command = /^(dompet)$/i
handler.group = true
module.exports = handler
