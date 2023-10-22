// let { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys')
// let limit = 50
// const { servers, yta } = require('../lib/y2mate')
// let handler = async(m, { conn, args, isPrems, isOwner }) => {
//     let nama = conn.getName(m.sender)
//     if (!args || !args[0]) return conn.reply(m.chat, `Link nya mana kak *${nama}* cakeepppp`, m)
//     let chat = db.data.chats[m.chat]
//     let server = (args[1] || servers[0]).toLowerCase()
//     let { dl_link, thumb, title, filesize, filesizeF } = await yta(args[0], servers.includes(server) ? server : servers[0])
//     let isLimit = (isPrems || isOwner ? 99 : limit) * 10024 < filesize
//     conn.sendFile(m.chat, thumb, 'thumbnail.jpg', `
// *Title:* ${title}
// *Filesize:* ${filesizeF}
// *${isLimit ? 'Pakai ': ''}Link:* ${await shortlink(dl_link)}
// `.trim(), m)
//     if (!isLimit) await conn.sendMessage(m.chat, { audio: { url: dl_link }, mimetype: 'audio/mp4' }, {quoted: m})
//         conn.sendFile(m.chat, dl_link, '', '', m, true)
// }
// handler.help = ['ytmp3']
// handler.tags = ['downloader']
// handler.command = /^yta|ytaudio|ytmp3$/i
// handler.limit = true
// handler.group = true 
// module.exports = handler

// async function shortlink(url) {
// isurl = /https?:\/\//.test(url)
// return isurl ? (await require('axios').get('https://tinyurl.com/api-create.php?url='+encodeURIComponent(url))).data : ''
// }

const fetch = require('node-fetch')
const axios = require('axios')
const { youtubedl, youtubedlv2, youtubedlv3 } = require('@bochilteam/scraper')
//const db = require('../lib/database.js')

let limit = 100
let handler = async (m, { conn, args, isPrems, isOwner }) => {
if (!args || !args[0]) throw 'Uhm... urlnya mana?'
let chat = db.data.chats[m.chat]
const { thumbnail, audio: _audio, title } = await youtubedl(args[0]).catch(async _ => await youtubedlv2(args[0])).catch(async _ => await youtubedlv3(args[0]))
const limitedSize = (isPrems || isOwner ? 2000 : limit) * 1024
let audio, source, res, link, lastError, isLimit
for (let i in _audio) {

try {
audio = _audio[i]
if (isNaN(audio.fileSize)) continue
isLimit = limitedSize < audio.fileSize
if (isLimit) continue
link = await audio.download()
if (link) res = await fetch(link)
isLimit = res?.headers.get('content-length') && parseInt(res.headers.get('content-length')) < limitedSize
if (isLimit) continue
if (res) source = await res.arrayBuffer()
if (source instanceof ArrayBuffer) break
} catch (e) {
audio = link = source = null
lastError = e
}
}
try {
if ((!(source instanceof ArrayBuffer) || !link || !res.ok) && !isLimit) throw 'Error: ' + (lastError || 'Can\'t download audio')
let wes = {
    "key": {
         "remoteJid": "status@broadcast",
 "participant": "0@s.whatsapp.net",
         "fromMe": false,
         "id": ""
     },
    "message": {
    thumbnail: await (await fetch(thumbnail)).buffer(),
         "conversation": "Play Music 🎵"
     }
}
    let AdReply = {
externalAdReply: {
title: 'RaisaBot',
body: 'Play Music 🎵',
mediaType: 1,
thumbnail: await (await fetch(thumbnail)).buffer(),
thumbnailUrl: thumbnail,
renderLargerThumbnail: true, 
sourceUrl: 'https://chat.whatsapp.com/KqKeQYaeP4R0oqMFBDQGua',
mediaUrl: thumbnail,
}
}
await conn.reply(m.chat, `YOUTUBE DOWNLOADER\n
📌Title: ${title}
📁 Filesize: ${audio.fileSizeH}
🔗 Link: ${await shortlink(link)}`, wes, { contextInfo: AdReply })
 /await conn.sendFile(m.chat, thumbnail, 'thumbnail.jpg', `*YOUTUBE DOWNLOADER\n
📌Title: ${title}
📁 Filesize: ${audio.fileSizeH}
🔗 Link: ${await shortlink(link)}
`.trim(), m)
await conn.sendMessage(m.chat, { audio: { url: link }, mimetype: 'audio/mp4' }, {quoted: m})
} catch {
  throw 'Pencarian sedang dalam error atau kesalahan program'
}
}
handler.help = ['ytmp3 <url>']
handler.tags = ['downloader']
handler.command = /^yta|ytmp3$/i
handler.group = false
handler.limit = true

module.exports = handler

async function shortlink(url){
var isurl = /https?:\/\//.test(url)
return isurl ? (await axios.get('https://tinyurl.com/api-create.php?url='+encodeURIComponent(url))).data : ''
}