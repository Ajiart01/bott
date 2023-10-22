/*let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
    pepe = 'https://telegra.ph/file/bb510a0cec483ef0e550d.jpg'
    baper = await fetch(pepe).then(a => a.buffer())
    let listMessage = {
        "title": "OTAV",
        "description": `
...: 📩 *JUAL OTAV* 📩 :...

Jual jasa *OTAV* (One Time Account Verification)
• Harga sangat terjangkau (paling murah SE-INDONESIA)
• Garansi berlaku apabila *OTAV* gagal terkirim

Harga: mulai dari 20-30k (Tergantung negara) 🌐

⚠️ PERHATIAN! ⚠️
• Harga dibawah merupakan harga *OTAV* untuk WhatsApp 
harga akan berbeda jika anda ingin melakukan *OTAV* untuk aplikasi lain (misalnya Discord,Telegram,Tinder,OLX,dll)

Semua nomor 20rb terjamin aman dari banned
Hubungi: wa.me/62895330379186

tertarik? hubungi:
@62895330379186 (Ridwan)
`.trim(),
        "listType": "PRODUCT_LIST",
        "productListInfo": {
            "productSections": [
                {
                    "title": "Klik untuk melihat harga",
                    "products": [
                        {
                            "productId": "4788288254617174"
                        }
                    ]
                }
            ],
            "headerImage": {
                "productId": "4788288254617174",
                "jpegThumbnail": baper
            },
            "businessOwnerJid": "6289654360447@s.whatsapp.net"
        },
        "footerText": "wa.me/62895330379186"
    }
    conn.sendMessage(m.chat, listMessage, 'listMessage', { quoted: m, contextInfo: { mentionedJid: conn.parseMention(listMessage.description) } })
}
//handler.help = ['sewabot']
//handler.tags = ['main']
handler.command = /^otav$/i

module.exports = handler*/