let fetch = require('node-fetch')

let timeout = 180000
let poin = 1000
let tiketcoin = 1
let handler = async (m, { conn, usedPrefix }) => {
  conn.tebaklogo = conn.tebaklogo ? conn.tebaklogo : {}
  let id = m.chat
  if (id in conn.tebaklogo) {
    conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebaklogo[id][0])
    throw false
  }
  let src = await (await fetch('https://raw.githubusercontent.com/Aidils60/database/main/logoquizid.json')).json()
    let json = src[Math.floor(Math.random() * src.length)]
  // if (!json.status) throw json
  let caption = `
Soal: ${json.deskripsi}
Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}tego untuk clue
Bonus: ${poin} XP
TiketCoin: ${tiketcoin}
    `.trim()
  conn.tebaklogo[id] = [
    await conn.sendFile(m.chat, json.img, 'tebaklogo.jpg', caption, m, false, { thumbnail: Buffer.alloc(0) }),
    json, poin,
    setTimeout(() => {
      if (conn.tebaklogo[id]) conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, conn.tebaklogo[id][0])
      delete conn.tebaklogo[id]
    }, timeout)
  ]
}
handler.help = ['tebaklogo']
handler.tags = ['game']
handler.command = /^tebaklogo/i
handler.limit = true
handler.group = true

module.exports = handler