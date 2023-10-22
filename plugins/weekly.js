const free = 10000
const prem = 20000
const limitfree = 10
const limitprem = 20
const moneyfree = 10000
const moneyprem = 20000

let handler = async (m, { isPrems }) => {
    let time = db.data.users[m.sender].lastweekly + 604800000
  if (new Date - db.data.users[m.sender].lastweekly < 604800000) throw `Anda sudah mengklaim, klaim mingguan ini\ntunggu selama ${msToTime(time - new Date())} lagi`
    //    conn.reply(m.chat, `Anda sudah mengklaim dan mendapatkan :`, m)
        db.data.users[m.sender].exp += isPrems ? prem : free
        db.data.users[m.sender].money += isPrems ? moneyprem : moneyfree
        db.data.users[m.sender].limit += isPrems ? limitprem : limitfree
       // global.db.data.users[m.sender].legendary += 3
        conn.sendButton(m.chat, `Selamat kamu mendapatkan:\n\n+${isPrems ? prem : free} Exp\n+${isPrems ? moneyprem : moneyfree} Money\n+${isPrems ? limitprem : limitfree} Limit`, wm, 'https://telegra.ph/file/40e46980dc6fe2935d8a7.jpg', [['ATM ALL', '.atmall'], ['MONTHLY', '.monthly']], m, { asLocation: true })
        // conn.reply(m.chat, `Selamat kamu mendapatkan:\n\n+${isPrems ? prem : free} Exp\n+${isPrems ? moneyprem : moneyfree} Money\n+${isPrems ? limitprem : limitfree} Limit`, m)
        db.data.users[m.sender].lastweekly= new Date * 1
    }
    
handler.help = ['weekly']
handler.tags = ['rpgabsen']
handler.command = /^(weekly)$/i
handler.limit = true
handler.fail = null

module.exports = handler

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24),
    weeks = Math.floor((duration / (1000 * 60 * 60 * 24)) % 168)

  weeks  = (weeks < 10) ? "0" + weeks : weeks
  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return weeks + " hari " +  hours + " jam " + minutes + " menit"
}
