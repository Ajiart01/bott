const { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn, text, usedPrefix }) => {
     if (!text) return conn.reply(m.chat, 'Silahkan masukan nomor yang akan dikirim', m)
     let korban = `${text}`
     let a = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
     let b = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
     let c = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
     let d = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
     let e = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
     let f = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
     let aa = a[Math.floor(Math.random() * a.length)]
     let bb = b[Math.floor(Math.random() * b.length)]
     let cc = c[Math.floor(Math.random() * c.length)]
     let dd = d[Math.floor(Math.random() * d.length)]
     let ee = e[Math.floor(Math.random() * e.length)]
     let ff = f[Math.floor(Math.random() * f.length)]
     
     let spam = `Konfirmasi kode otp *${aa}${bb}${cc} ${dd}${ee}${ff}*\nJangan memberitahu kode otp kamu..`
     conn.sendMessage(korban + '@s.whatsapp.net', { text : spam })
     let logs = `[!] Berhasil mengirim pesan wa ke nomor ${korban}`
         conn.reply(m.chat, logs, m)
}
handler.command = /^(sendotp)$/i
handler.owner = true

handler.fail = null

module.exports = handler