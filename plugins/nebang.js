const timeout = 3600000

                                     let handler = async (m, { conn, usedPrefix, text }) => {
	                                 let aqua = db.data.users[m.sender].aqua
	                                 let time = db.data.users[m.sender].lastnebang + 3600000
                                     if (aqua == 0) return m.reply(`*Pastikan kamu memiliki semua aqua*\nKetik :\n${usedPrefix}shop buy aqua 5`)
                                     if (new Date - db.data.users[m.sender].lastnebang< 3600000) throw `Anda sudah menebang\nMohon tunggu hasil tebangan mu\nTunggu selama ${msToTime(time - new Date())} lagi`
                                     if (db.data.users[m.sender].aqua > 9) {
                                     let kayus = `${Math.floor(Math.random() * 1000)}`.trim()
                                     let aquas = `${Math.floor(Math.random() * 10)}`.trim()
                                     db.data.users[m.sender].kayu += kayus * 1
                                     db.data.users[m.sender].tiketcoin += 1
                                     db.data.users[m.sender].aqua  -= aquas * 1
                                     db.data.users[m.sender].lastnebang = new Date * 1
                                     // m.reply(`Selamat kamu mendapatkan : \n+${kayus} Kayu\n+1 Tiketcoin\n\nKamu sudah menghabiskan aqua\n-${aquas} Aqua`)
                                     conn.sendButton(m.chat, `Selamat kamu mendapatkan : \n+${kayus} Kayu\n+1 Tiketcoin\n\nKamu sudah menghabiskan aqua\n-${aquas} Aqua`, wm, 'https://telegra.ph/file/e4392f22b761678bc6f64.jpg', [['DONASI', '.donasi']], m, { asLocation: true })
                                     setTimeout(() => {
					                      conn.reply(m.chat, `Waktunya nebang pohon lagi kak 😅`, m)
					                  }, timeout)
                              } else m.reply(`Pastikan aqua kamu *10* untuk bisa nebang, Karena menguras tenaga`)
                         }
handler.help = ['nebang']
handler.tags = ['rpg']
handler.command = /^(nebang)/i

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
