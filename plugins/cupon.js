let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    if (typeof db.data.users[who] == 'undefined') throw 'Pengguna tidak ada didalam data base'
   // m.reply(`${db.data.users[who].cupon} Your cupon\nCupon ini adalah sebuah hadiah dari owner\n\nCara menggunakan:\n/open cupon 1`)
    conn.sendButton(m.chat, `${db.data.users[who].cupon} Your cupon\nCupon ini adalah sebuah hadiah dari owner\n\nCara menggunakan:\n/open cupon 1`, wm, 'https://telegra.ph/file/20a3e47971af3be347811.jpg', [['Open Coupon', '.open cupon 1']], m, { asLocation: true })
}
handler.help = ['cupon [@user]']
handler.tags = ['xp']
handler.command = /^(cupon)$/i
handler.limit = true

module.exports = handler
