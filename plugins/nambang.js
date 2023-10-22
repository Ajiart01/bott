const timeout = 28800000
let handler = async (m, { conn, usedPrefix, text }) => {
   let time = db.data.users[m.sender].lastnambang + 28800000
   if (new Date - db.data.users[m.sender].lastnambang< 28800000) throw `Anda sudah menambang\nMohon tunggu hasil pertambangan mu\nTunggu selama ${msToTime(time - new Date())} lagi`
    let berlians = `${Math.floor(Math.random() * 3)}`.trim()
    let emasbiasas = `${Math.floor(Math.random() * 4)}`.trim()
    let emasbatangs = `${Math.floor(Math.random() * 3)}`.trim()
    db.data.users[m.sender].berlian += berlians * 1
    db.data.users[m.sender].emas += emasbiasas * 1
    db.data.users[m.sender].diamond += emasbatangs * 1
    db.data.users[m.sender].tiketcoin += 1
	db.data.users[m.sender].lastnambang = new Date * 1
    conn.sendButton(m.chat, `Selamat kamu mendapatkan : \n+${berlians} Berlian\n+${emasbiasas} Emas\n+${emasbatangs} Diamond\n\n+1 Tiketcoin`, wm, 'https://telegra.ph/file/1a2ae91e70000c0a62dab.jpg', [['Donasi', '.donasi']], m, { asLocation: true })
// m.reply(`Selamat kamu mendapatkan : \n+${berlians} Berlian\n+${emasbiasas} Emas\n+${emasbatangs} Diamond\n\n+1 Tiketcoin`)
    setTimeout(() => {
	     conn.reply(m.chat, `Waktunya nambang lagi kak 😅`, m)
	}, timeout)
}
handler.help = ['nambang']
handler.tags = ['rpg']
handler.command = /^(nambang)/i
handler.group = true
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
