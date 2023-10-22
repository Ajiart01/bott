let handler = async (m, { conn, participants, isPrems }) => {
	const free = 250000
	const prem = 100000
    const ekpi = 100000
    let xpi =  [Math.floor(Math.random() * ekpi)] 
    let duit = [Math.floor(Math.random() * prem)] 
	let who
    if (!m.isGroup) {
        let member = [m.sender, conn.user.jid]
        who = member[Math.floor(Math.random() * member.length)]
    } else {
        let member = participants.map(u => u.id)
        who = member[Math.floor(Math.random() * member.length)]
    }
//global.db.data.users[m.sender].money += isPrems ? prem : free
global.db.data.users[m.sender].money += duit
global.db.data.users[m.sender].exp += xpi
await m.reply(`_Mencari customer...._`)
conn.delay(2000)
await m.reply(`Berhasil menemukan customer!\n\n@${who.split`@`[0]} adalah customer mu!`)
conn.delay(3000)
await m.reply(`Tujuan customer adalah Neraka`)
conn.delay(4000)
await m.reply(`Mengantarkan @${who.split`@`[0]} ke Neraka!`)
conn.delay(5000)
   // await m.reply(`berhasil mengantar @${who.split`@`[0]} sampai tujuan.\n\nKamu mendapatkan saldo BRI sebesar: Rp ${isPrems ? prem : free}`)
   await m.reply(`berhasil mengantar @${who.split`@`[0]} sampai tujuan.\n\nKamu mendapatkan saldo BRI sebesar: Rp ${duit}\n\nDan ${xpi}Xp `)
}
handler.help = ['ojek']
handler.tags = ['kerang']
handler.command = /^ojek$/
handler.limit = true

module.exports = handler