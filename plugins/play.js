// const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
// const { servers, yta, ytv } = require('../lib/y2mate')
// let limit = 30
// let fs = require('fs')
// let yts = require('yt-search')
// let fetch = require('node-fetch')
// let handler = async (m, { conn, command, text, usedPrefix, isPrems, isOwner}) => {
//   let nama = conn.getName(m.sender)
//   if (!text) throw `uhm.. kak *${nama}* cari apa?\n\ncontoh:\n${usedPrefix + command} jedag jedug cringe pingral tiktod pull bazz`
//   let chat = global.db.data.chats[m.chat]
//   let results = await yts(text)
//   let vid = results.all.find(video => video.seconds < 3600)
//   if (!vid) throw 'Konten Tidak ditemukan'
//   let isVideo = /2$/.test(command)
//   let yt = false
//   let yt2 = false
//   let usedServer = servers[0]
//   for (let i in servers) {
//     let server = servers[i]
//     try {
//       yt = await yta(vid.url, server)
//       yt2 = await ytv(vid.url, server)
//       usedServer = server
//       break
//     } catch (e) {
//       m.reply(`Server ${server} error!${servers.length >= i + 1 ? '' : '\nmencoba server lain...'}`)
//     }
//   }
//   if (yt === false) throw 'semua server gagal'
//   if (yt2 === false) throw 'semua server gagal'
//   let { dl_link, thumb, title, filesize, filesizeF } = yt
//   let isLimit = (isPrems || isOwner ? 99 : limit) * 1024 < filesize
// let anu =  `
// *Title:* ${title}
// *Ukuran File Audio:* ${filesizeF}
// *Ukuran File Video:* ${yt2.filesizeF}
// *Source:* ${vid.url}
// *${isLimit ? 'Pakai ': ''}Link:* ${await shortlink(dl_link)}
// *Server y2mate:* ${usedServer}
// `
// conn.sendButton(m.chat, anu, wm, thumb, [[`📽 VIDEO ${yt2.filesizeF}`, `.ytmp4 ${vid.url}`],[`🎵 AUDIO ${filesizeF}`, `.ytmp3 ${vid.url}`]], m)
// }
// handler.help = ['play'].map(v => v + ' <pencarian>')
// handler.tags = ['downloader']
// handler.command = /^play$/i

// handler.limit = true

// module.exports = handler

// async function shortlink(url) {
// isurl = /https?:\/\//.test(url)
// return isurl ? (await require('axios').get('https://tinyurl.com/api-create.php?url='+encodeURIComponent(url))).data : ''
// }


const { youtubeSearch } = require('@bochilteam/scraper')

let handler = async (m, { conn, command, text, usedPrefix }) => {
let nama = conn.getName(m.sender)
  let teks = text
  if (!teks) throw `Use example ${usedPrefix}${command} Alan walker Alone\n• Reply Text`
  try {
  let vid = (await youtubeSearch(teks)).video[0]
  // if (!vid) throw 'Video/Audio Tidak ditemukan'
  let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
  const url = 'https://www.youtube.com/watch?v=' + videoId

   /*conn.sendHydrated(m.chat, `*PLAY DOWNLOADER
   
📌 Title: ${title}
🔗 Url: ${url}
📄 Description: ${description}
⏲️ Published: ${publishedTime}
⌚ Duration: ${durationH}
👁️ Views: ${viewH}
`.trim(), author, thumbnail, url, '📺Go To Youtube!', null, null, [
    ['Audio 🎧', `${usedPrefix}yta ${url}`],
    ['Video 🎥', `${usedPrefix}ytv ${url}`]
  ], m, { viewOnce: true})*/
  
  conn.sendButton(m.chat, `PLAY DOWNLOADER
   
📌 Title: ${title}
🔗 Url: ${url}
📄 Description: ${description}
⏲️ Published: ${publishedTime}
⌚ Duration: ${durationH}
👁️ Views: ${viewH}
`.trim(), `Join dong kak ${nama}\nhttps://chat.whatsapp.com/JBxHEnj0nPcAxymIgE0046`, thumbnail + '.png', [[`📽 VIDEO`, `.ytv ${url}`],[`🎵 AUDIO`, `.yta ${url}`]], m)
    } catch {
       throw 'Pencarian tidak ditemukan,\nAtau kesalahan program!\n\nDiharapkan untuk mencari hal baru..'
    }
}
handler.help = ['play', 'play2'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^play2?$/i

handler.exp = 0
handler.limit = true

module.exports = handler