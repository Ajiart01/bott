
const timeout = 1800000

let handler = async (m, { conn, usedPrefix, text }) => {
	let time = db.data.users[m.sender].lastmulung + 1800000
    if (new Date - db.data.users[m.sender].lastmulung< 1800000) throw `Anda sudah lelah untuk mulung\nTunggu selama ${msToTime(time - new Date())} lagi`
	let botolnye = `${Math.floor(Math.random() * 1000)}`.trim()
	let kalengnye = `${Math.floor(Math.random() * 1000)}`.trim()
	let kardusnye = `${Math.floor(Math.random() * 1000)}`.trim()
	db.data.users[m.sender].botol += botolnye * 1
	db.data.users[m.sender].kaleng += kalengnye * 1
	db.data.users[m.sender].kardus += kardusnye * 1
	db.data.users[m.sender].lastmulung = new Date * 1
	conn.sendButton(m.chat, `Selamat kamu mendapatkan : \n+${botolnye} Botol\n+${kardusnye} Kardus\n+${kalengnye} Kaleng`, wm, 'https://telegra.ph/file/f0e6d47f1bc452caedf23.jpg', [['Donasi', '.donasi']], m, { asLocation: true })
   // m.reply(`Selamat kamu mendapatkan : \n+${botolnye} Botol\n+${kardusnye} Kardus\n+${kalengnye} Kaleng`)
    setTimeout(() => {
		conn.reply(m.chat, `Yuk waktunya mulung lagi 😅`, m)
	}, timeout)
}
handler.help = ['mulung']
handler.tags = ['rpg']
handler.command = /^(mulung)/i

handler.group = true

handler.limit = true
handler.fail = null

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
