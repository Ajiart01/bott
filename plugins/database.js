let handler = async (m) => {
    let totalreg = Object.keys(db.data.users).length
    let rtotalreg = Object.values(db.data.users).filter(user => user.registered == true).length
    m.reply(`*Jumlah pengguna database saat ini adalah ${totalreg} user*`)
}
handler.help = ['database', 'user']
handler.tags = ['info']
handler.command = /^(database|jumlahdatabase|user)$/i
handler.limit = true

module.exports = handler
