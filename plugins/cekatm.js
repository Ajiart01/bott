let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    if (typeof db.data.users[who] == 'undefined') throw 'Pengguna tidak ada didalam data base'
    let mani = global.db.data.users[m.sender].bank
    let pplerr = `Sisa saldo BRI lu Rp${mani}`
    m.reply(`${mani ? pplerr : 'Sisa saldo BRI lu Rp0 Yahaha miskinnnn, ngepet yuk bang biar jadi soeltan :V' }`)
}
handler.help = ['dompet [@user]']
handler.tags = ['xp']
handler.command = /^(cekatm|bri)$/i
module.exports = handler