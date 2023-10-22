let handler = async (m, { conn, args, usedPrefix, command }) => {
  let nama = conn.getName(m.sender)
    let teks = `
 *NAIK JABATAN JADI RAKYAT BERDUIT*
        
1. Premium 31 hari
Rp 10.000,- Dana
Rp 20.000,- Pulsa 

2. Premium 65 Hari
Rp. 20.000 Dana
Rp. 25.000 Pulsa


chat owner jika minat:
wa.me/6285163999446


•  Ingin menggunakan pembayaran lain?
•  Hubungi owner..

Note: jangan klik tombol dibawah atau wa mu akan crash! chat owner aja jika minat!!
`.trim()
let pp = 'https://telegra.ph/file/6c4c61f93a9849f69678f.jpg'
 // conn.sendButton(m.chat, teks, wm, pp, [[`BUKTISS`, `.buktiss`]], m)
let baileys = require('@adiwajshing/baileys')
let money = 1
  let note = {
    "extendedTextMessage": {
      "text": teks
} 
  }
 let {key, message} = await baileys.generateWAMessageFromContent(m.chat, {
  "requestPaymentMessage": {
    "currencyCodeIso4217": "USD",
    "amount1000": money * 1000,
    "requestFrom": m.sender,
    "noteMessage": note,
    "expiryTimestamp": "0",
    "amount": {
      "value": money * 1000,
      "currencyCode": "USD"
    },
  }
}, {quoted:m})
 const q = {
  "key": {
    "remoteJid": "status@broadcast",
                "participant":"0@s.whatsapp.net",
    "fromMe": false,
    "id": ""
  },
  "message": {
    "conversation": `PREMIUM DI RAISA BOT ❤`
   }
 }
conn.sendFile(m.chat, 'https://telegra.ph/file/992201ee181ffbe24a821.jpg', '',  `*NAIK JABATAN JADI RAKYAT ELIT*
        
1. Premium 31 hari
Rp 10.000,- Dana
Rp 20.000,- Pulsa 

2. Premium 65 Hari
Rp. 20.000 Dana
Rp. 25.000 Pulsa


chat owner jika minat:
wa.me/6285163999446


Silahkan scan code QR di atas untuk melakukan pembayaran, Jika sudah silahkan kirim buktinya ke owner (wa.me/6285163999446)\n\nJika ingin menggunakan metode pembayaran lain silahkan chat owner.`, q) // Tambah sendiri kalo mau
//return conn.relayMessage(key.remoteJid, message, {messageId: key.id})
//conn.delay(3)
 //conn.sendMessage(m.chat, { text: `Chat @6285163999446 Jika ${nama} ingin naik jabatan dar rakyat gratisan menjadi rakyat berduit!`, mentions: ['6285163999446@s.whatsapp.net'] })
}
handler.help = ['sewa']
handler.tags = ['main']
handler.command = /^(sewa|buyprem|sewabot)$/i

module.exports = handler
