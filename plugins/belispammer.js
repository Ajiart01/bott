let handler = (m, { conn, usedPrefix, command, text }) => {

   let user = db.data.users[m.sender]
   if (user.limitspam == 0) return m.reply('*Pastikan kamu memiliki limit spam*')
   if (user.limitspam > 0) {
   user.limitspam -= 1
   user.spammer = undefined
   conn.reply(m.chat, `Reset durasi waktu spammerall *0* time\nSisah limit spammerall *${user.limitspam}*\n\nSilahkan lanjutkan ketik *${usedPrefix}spammerall*\nContoh: *${usedPrefix}spammerall 81234567890*`, m)
   } else m.reply(`Pastikan kamu memiliki 1 limit spam untuk melakukan spammerall`)
}
// handler.help = ['belispammer']
// handler.tags = ['xp']
handler.command = /^(belispammer)$/i
handler.limit = true
handler.group = false
module.exports = handler
