let handler = async (m, { conn, text, usedPrefix, command }) => {
let q = m.quoted ? m.quoted: m
  let img = 'https://telegra.ph/file/6638089b97e602de0c84c.jpg'
  if (!text) await conn.sendFile(m.chat, img, 'buktiss.png', `${usedPrefix}buktiss “Nih bukti pembayaran”\n“Link group: https://chat.whatsapp.com/Iz1uzyLOj5S1oqzGLxOGkg”\n\n\nKirim foto bukti\nDan link group\n\n*INI HANYALAH CONTOHNYA..*`, m) // throw 'Bukti harus berupa foto!'
  else if (q.mtype !== 'imageMessage' && !text) await conn.sendFile(m.chat, img, 'buktiss.png', `${usedPrefix}buktiss “Nih bukti pembayaran”\n“Link group: https://chat.whatsapp.com/Iz1uzyLOj5S1oqzGLxOGkg”\n\n\nKirim foto bukti\nDan link group\n\n*INI HANYALAH CONTOHNYA..*`, m) // throw 'Bukti harus berupa foto!'
  try {
await conn.sendFile(`${owner[0]}@s.whatsapp.net`, await q?.download(), null, `Pesan: ${(text ) + `\n\nHarap diproses segera\n*Jika ada bukti screenshot pembayaran*\nCara proses ketik: ${usedPrefix}addexpired 30 ${m.chat}\n` + readMore }「 Bukti SS dari ${m.sender.split`@`[0]} 」`, m)
await m.reply('Bukti ss diterima..\nTunggu *30 menit* paling lama,\nJika tidak ada pemberitahuan, harap kirim ulang..')
} catch { return }
}
handler.help = ['buktiss']
handler.tags = ['main']
handler.command = /^(buktiss)$/i

handler.owner = false

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

const randomID = length => require('crypto').randomBytes(Math.ceil(length * .5)).toString('hex').slice(0, length)
