let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  let pepe = 'https://telegra.ph/file/b0366c277609da87d8455.jpg'
  let baper = await fetch(pepe).then(a => a.buffer())

  let aine = '6289654360447@s.whatsapp.net'
  let a = await conn.profilePictureUrl(conn.user.jid, 'image').catch((_) => "https://telegra.ph/file/24fa902ead26340f3df2c.png")
  let b = await conn.profilePictureUrl(owner[0]+'@s.whatsapp.net', 'image').catch((_) => "https://telegra.ph/file/24fa902ead26340f3df2c.png")
  let c = pickRandom([a, b])
  let d = await fetch(c).then(a => a.buffer())
  let prepare = await require('@adiwajshing/baileys').generateWAMessageFromContent(m.key.remoteJid,{listMessage:{
  title: `${await conn.getName(conn.user.jid)}`,
  description: ` *PANEL INI KHUSUS RUN BOT AGAR ON 24 JAM*
*PANEL INI TIDAK BUAT BOROS KUOTA*

*Link Panel*
https://panel.adhanhost.my.id/

*List Harga Panel*
1 Gb, 25% cpu 20k/Bulan
2 GB 50% cpu 25k/Bulan
3 GB 75% cpu 30k/Bulan
4 GB 80% cpu 35k/Bulan
5 Gb 150% cpu 45k/Bulan 

*1-3 GB Renew 15k*
*4&5 GB Renew 25k*

*Renew : Perpanjang*
*Renew dihitung per bulan*

wa.me/${owner[0]}
*Bukan Bot!!!*
*Owner ${conn.user.name}*
`,
  buttonText: 'Harga Sesuai Pasaran',
  listType: 2,
  productListInfo: {
  productSections: [{
  title:'Klik untuk order',
  products:[{productId:'5561128193931502'}]}],
  headerImage: { productId: '5561128193931502',
  jpegThumbnail: baper },
  businessOwnerJid: `6289654360447@s.whatsapp.net`
  },
  footerText: 'https://panel.adhanhost.my.id/',
  }},{})
  conn.relayMessage(prepare.key.remoteJid,prepare.message,{messageId:prepare.key.id})
  const data = global.owner.filter(([id, isCreator]) => id && isCreator)
  conn.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)

}
// handler.help = ['panel']
// handler.tags = ['main']
handler.command = /^(panel)$/i

module.exports = handler

function pickRandom(list) {
        return list[Math.floor(Math.random() * list.length)]
    }
