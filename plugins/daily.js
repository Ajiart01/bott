const free = 5000
const prem = 10000
const moneyfree = 5000
const moneyprem = 10000
const timeout = 86400000

let handler = async (m, { conn, isPrems }) => {
    let time = db.data.users[m.sender].lastclaim + 86400000
  if (new Date - db.data.users[m.sender].lastclaim < 86400000) throw `Anda sudah mengklaim, klaim harian hari ini\ntunggu selama ${msToTime(time - new Date())} lagi`
      //  conn.reply(m.chat, `Anda sudah mengklaim dan mendapatkan :`, m)
        db.data.users[m.sender].exp += isPrems ? prem : free
        db.data.users[m.sender].money += isPrems ? moneyprem : moneyfree
       // global.db.data.users[m.sender].potion += 5
        conn.sendButton(m.chat, `Selamat kamu mendapatkan:\n\n+${isPrems ? prem : free} Exp\n+${isPrems ? moneyprem : moneyfree} Money`, wm, 'https://telegra.ph/file/04f940e2cb6d34f02bbf0.jpg', [['WEEKLY', '.weekly'], ['MONTHLY', '.monthly']], m, { asLocation: true })
        // conn.reply(m.chat, `Selamat kamu mendapatkan:\n\n+${isPrems ? prem : free} Exp\n+${isPrems ? moneyprem : moneyfree} Money`, m)
        db.data.users[m.sender].lastclaim = new Date * 1
        setTimeout(() => {
		 conn.reply(m.chat, `Daily sudah bisa di dapatkan kembali`, m)
		}, timeout)
    } 
handler.help = ['daily']
handler.tags = ['rpgabsen']
handler.command = /^(daily)$/i

handler.fail = null
handler.limit = true

module.exports = handler

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
    
  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return hours + " jam " + minutes + " menit " + seconds + " detik"
}
