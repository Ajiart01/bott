let handler = async (m, { conn, text, usedPrefix, command }) => {
let dapat = (Math.floor(Math.random() * 100000))
let nomors = m.sender
  let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw 'Tag salah satu lah'
  if (typeof db.data.users[who] == 'undefined') throw 'Pengguna tidak ada didalam data base'
  let __timers = (new Date - db.data.users[m.sender].lastrob)
  let _timers = (3600000 - __timers) 
  let timers = clockString(_timers)
  let users = db.data.users
  if (new Date - db.data.users[m.sender].lastrob > 3600000){
  if (10000 > users[who].money) throw 'Target Gaada Uang bodoh, Kismin dia'
  users[who].money -= dapat * 1
  users[m.sender].money += dapat * 1
  db.data.users[m.sender].lastrob = new Date * 1
 // conn.reply(m.chat, `Berhasil Merampok Money Target Sebesar ${dapat}`, m)

 conn.sendButton(m.chat, `Berhasil Merampok Money Target Sebesar ${dapat}`, wm, 'https://telegra.ph/file/3d7826e4f361ee053aeb7.jpg', [['ATM', '.atmall']], m, { asLocation: true })


}else conn.reply(m.chat, `Anda Sudah merampok dan berhasil sembunyi , tunggu ${timers} untuk merampok lagi`, m)
}
handler.help = ['merampok *@tag*']
handler.tags = ['rpg']
handler.command = /^merampok$/
handler.limit = true
handler.group = true

module.exports = handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
