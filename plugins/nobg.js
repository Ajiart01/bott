const { getBuffer } = require('../lib/myfunc')
const util = require('util')
const fs = require('fs')
const ffmpeg = require('fluent-ffmpeg')
const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')
const { removeBackgroundFromImageFile } = require('remove.bg')
const { exec } = require('child_process')

let handler = async (m, { conn, text, args, usedPrefix, command }) => {

  try {
  await m.reply('Sedang Membuat...')
    const type = Object.keys(m.message)[0]
    const content = JSON.stringify(m.message)
    const isMedia = (type === 'imageMessage' || type === 'videoMessage')
    const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
    const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
    if ((isMedia && !m.message.videoMessage || isQuotedImage || !isQuotedImage) && args.length == 0) {
      const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(m).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : m
      const media = await conn.downloadAndSaveMediaMessage(encmedia)
      let ranp = getRandom('.png')
      let apirnobg = ['jhbA4XDVqg3iAtkLvEGZE1Uc','FHgytFnHCCdGu2p7LacHM12c','oTNPTmxMvLTK6RNLqBZW5Xph','7CZTX4TPaRJMqtsWvCknxPjr','kZBgT1RJog2VoDUNtWtwX5NA','N2E4cPPk9aSfvdnZCsZovK3J','CfokWte2G3MA8VhSbbVNFrcM','autPZ5MDDz8FiXHx48AXFt6w','eFLczbFsCP9TdzrHKkVQjsbj','H9cB4Xi6wTWUvFr4XMbLCnKb','kqAQdGcH41MPPb4NBXme7MVX','9cA8Di2SbZE625LTDKxNKgVk','KZsBhhSMfGkhVhi6quNHk61y','EEtwbupiFLDZuHqeFUDfZcyX','3fUasRGXzzQf9hiLqyJfXZVs','9DHMHnTjnVBC9sVMnEX3AvjY','YjTWziFkV1ttTHmKnwZHpvFi','RLUmMzmyUBUyLmsdLbPjjEaB','uVhRB1iiDqMHifx8Yzp89aHv','xvfUwmL4ep65pBUvkKvMEC75','D2pZpta1AaQ9GNYq6Z1gZNnT','gMRAeseciTiakfLA78mHTPC1','Drj6QAYjEKEowJT8FBWYREKk','swKk5tn1QJVeVwbFT16iYBXA','G87W68UcyhKvmFcTmg9by5FW','xnhu8uE2WcMg1MTNnC2C41n9','s39hWHhJ9751zQNWao3BLxDh','U8JuTym5bajbKZ7xVFwXFtiv','KMokWsYUpiG1ufuUmATpPy9H']
	    let randomapi = apirnobg[Math.floor(Math.random() * apirnobg.length)]
      await removeBackgroundFromImageFile({ path: media, apiKey: randomapi, size: 'auto', type: 'auto', ranp }).then(res => {
        fs.unlinkSync(media)
        let buffer = Buffer.from(res.base64img, 'base64')
        fs.writeFileSync(ranp, buffer, (e) => {
          if (e) return m.reply('Gagal, Terjadi kesalahan, silahkan coba beberapa saat lagi.')
        })
           // m.reply('Nihh')
         //  let stiker = sticker(false, buffer, packname, author)

		   // conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
		  conn.sendStickerAll(m.chat, buffer, m, {packname:packname, author:author })
          // conn.sendFile(m.chat, buffer, 'nobg.png', '', m, false, { asDocument: true })
        fs.unlinkSync(ranp)
      })
    } else {
      m.reply(`Kirim Perintah ${usedPrefix + command} dengan caption atau reply media gambar yang tersedia.`)
    }
  } catch (e) {
 m.reply('Fotonya mana?')
  }
}
handler.help = ['nobg (reply/caption)']
handler.tags = ['tools']
handler.command = /^(nobg)$/i

handler.fail = null
handler.limit = true
handler.premium = true
module.exports = handler

const getRandom = (ext) => {
  return `${Math.floor(Math.random() * 10000)}${ext}`
}
