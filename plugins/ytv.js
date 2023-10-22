/*let limit = 30
const fetch = require('node-fetch')
// const { servers, ytv } = require('../lib/y2mate')
const { youtubedl, youtubedlv2 } = require('@bochilteam/scraper')
let handler = async (m, { conn, args, isPrems, isOwner }) => {
  if (!args || !args[0]) throw 'Uhm... urlnya mana?'
  let chat = global.db.data.chats[m.chat]
  let isY = /y(es)/gi.test(args[1])
  const { thumbnail, video: _video, title } = await youtubedl(args[0]).catch(async _ => await youtubedlv2(args[0]))
  let video, link = '', lastError
  for (let i in _video) {
    try {
      video = _video[i]
      link = await video.download()
      if (link) break
    } catch (e) {
      lastError = e
      continue
    }
  }
  if (!link) throw lastError
  let isLimit = (isPrems || isOwner ? 99 : limit) * 1024 < video.fileSize
  if (!isY) conn.sendFile(m.chat, thumbnail, 'thumbnail.jpg', `
📌*Title:* ${title}
🗎 *Filesize:* ${video.fileSizeH}
*${isLimit ? 'Pakai ' : ''}Link:* ${link}
`.trim(), m)
  let _thumb = {}
  try { _thumb = { thumbnail: await (await fetch(thumbnail)).buffer() } }
  catch (e) { }
  if (!isLimit) conn.sendFile(m.chat, link, title + '.mp4', `
📌 *Title:* ${title}
🗎 *Filesize:* ${video.fileSizeH}
`.trim(), m, false, {
    ..._thumb,
    asDocument: chat.useDocument
  })
}
handler.help = ['mp4', 'v', ''].map(v => 'yt' + v + ` <url> <without message>`)
handler.tags = ['downloader']
handler.command = /^yt(v|mp4)?$/i

handler.exp = 0
module.exports = handler*/




// let limit = 30
// let fetch = require('node-fetch')
// const { servers, ytv } = require('../lib/y2mate')
// let handler = async (m, { conn, args, isPrems, isOwner }) => {
//   if (!args || !args[0]) throw 'Uhm... urlnya mana?'
//   let link = (args[0]).replace("youtube.com/watch?v=", "youtu.be/").replace("youtube.com/shorts", "youtu.be").split("?")[0]
//   let chat = db.data.chats[m.chat]
//   let server = (args[1] || servers[0]).toLowerCase()
//   let { dl_link, thumb, title, filesize, filesizeF} = await ytv(link, servers.includes(server) ? server : servers[0])
//   let isLimit = (isPrems || isOwner ? 99 : limit) * 1024 < filesize
//   conn.sendFile(m.chat, thumb, 'thumbnail.jpg', `
// *Title:* ${title}
// *Filesize:* ${filesizeF}
// *${isLimit ? 'Pakai ': ''}Link:* ${await shortlink(dl_link)}
// `.trim(), m)
//   let _thumb = {}
//   try { _thumb = { thumbnail: await (await fetch(thumb)).buffer() } }
//   catch (e) { }
//   if (!isLimit) conn.sendFile(m.chat, dl_link, title + '.mp4', `
// *Title:* ${title}
// *Filesize:* ${filesizeF}
// `.trim(), m, false, {
//   ..._thumb,
//   asDocument: chat.useDocument
// })
// }
// handler.help = ['ytmp4']
// handler.tags = ['downloader']
// handler.command = /^ytv|ytvideo|ytmp4$/i

// handler.group = true
// handler.fail = null
// handler.exp = 0
// handler.limit = true

// module.exports = handler

// async function shortlink(url) {
// isurl = /https?:\/\//.test(url)
// return isurl ? (await require('axios').get('https://tinyurl.com/api-create.php?url='+encodeURIComponent(url))).data : ''
// }

// const fetch = require('node-fetch')
// const axios = require('axios')
// const { youtubedl, youtubedlv2, youtubedlv3 } = require('@bochilteam/scraper')
// const db = require('../lib/database.js')

// let limit = 500
// let handler = async (m, { conn, args, isPrems, isOwner }) => {
//   if (!args || !args[0]) throw 'Uhm... urlnya mana?'
//   let chat = db.data.chats[m.chat]
//   // const isY = /y(es)/gi.test(args[1])
//   const { thumbnail, video: _video, title } = await youtubedl(args[0]).catch(async _ => await youtubedlv2(args[0])).catch(async _ => await youtubedlv3(args[0]))
//   const limitedSize = (isPrems || isOwner ? 99 : limit) * 1024
//   let video, source, res, link, lastError, isLimit
//   for (let i in _video) {
//     try {
//       video = _video[i]
//       if (isNaN(video.fileSize)) continue
//       isLimit = limitedSize < video.fileSize
//       if (isLimit) continue
//       link = await video.download()
//       if (link) res = await fetch(link)
//       isLimit = res?.headers.get('content-length') && parseInt(res.headers.get('content-length')) < limitedSize
//       if (isLimit) continue
//       if (res) source = await res.arrayBuffer()
//       if (source instanceof ArrayBuffer) break
//     } catch (e) {
//       video = source = link = null
//       lastError = e
//     }
//   }
//   if ((!(source instanceof ArrayBuffer) || !link || !res.ok) && !isLimit) throw 'Error: ' + (lastError || 'Can\'t download video')
//   let wes = {
//       "key": {
//          "remoteJid": "status@broadcast",
//              "participant": "0@s.whatsapp.net",
//          "fromMe": false,
//          "id": ""
//        },
//       "message": {
//             thumbnail: await (await fetch(thumbnail)).buffer(),
//          "conversation": "Play Music 🎵"
//        }
//       }
//     let AdReply = {
//         externalAdReply: {
//         title: 'RaisaBot',
//         body: 'Play Music 🎵',
//         mediaType: 1,
//         thumbnail: await (await fetch(thumbnail)).buffer(),
//         thumbnailUrl: thumbnail,
//         renderLargerThumbnail: true, 
//         sourceUrl: thumbnail,
//         mediaUrl: thumbnail,
//       }
//     }
//     await conn.reply(m.chat, `YOUTUBE DOWNLOADER\n
// 📌Title: ${title}
// 📁 Filesize: ${video.fileSizeH}
// 🔗 Link: ${await shortlink(link)}`, wes, { contextInfo: AdReply })
//   /*conn.sendFile(m.chat, thumbnail, 'thumbnail.jpg', `
// 📌Title: ${title}
// 📁 Filesize: ${video.fileSizeH}
// 🔗 Link: ${await shortlink(link)}
// `.trim(), m)*/
// await conn.sendFile(m.chat, link, title + '.mp4', `
// 📌Title: ${title}
// 📁 Filesize: ${video.fileSizeH}
// 🔗 Link: ${await shortlink(link)}
// `.trim(), m, false, {
//     asDocument: chat.useDocument
//   })
// }
// handler.help = ['ytmp4 <url>']
// handler.tags = ['downloader']
// handler.command = /^ytv|ytmp4$/i
// handler.limit = true
// handler.group = false

// module.exports = handler

// async function shortlink(url){
// var isurl = /https?:\/\//.test(url)
// return isurl ? (await axios.get('https://tinyurl.com/api-create.php?url='+encodeURIComponent(url))).data : ''
// }

const fetch = require('node-fetch')
const axios = require('axios')
const { youtubedl, youtubedlv2, youtubedlv3 } = require('@bochilteam/scraper')

let limit = 500
let handler = async (m, { conn, args, isPrems, isOwner }) => {
  if (!args || !args[0]) throw 'Uhm... urlnya mana?'
  let chat = db.data.chats[m.chat]
  // const isY = /y(es)/gi.test(args[1])
  const { thumbnail, video: _video, title } = await youtubedl(args[0]).catch(async _ => await youtubedlv2(args[0])).catch(async _ => await youtubedlv3(args[0]))
  const limitedSize = (isPrems || isOwner ? 99 : limit) * 1024
  let video, source, res, link, lastError, isLimit
  for (let i in _video) {
    try {
      video = _video[i]
      if (isNaN(video.fileSize)) continue
      isLimit = limitedSize < video.fileSize
      if (isLimit) continue
      link = await video.download()
      if (link) res = await fetch(link)
      isLimit = res?.headers.get('content-length') && parseInt(res.headers.get('content-length')) < limitedSize
      if (isLimit) continue
      if (res) source = await res.arrayBuffer()
      if (source instanceof ArrayBuffer) break
    } catch (e) {
      video = source = link = null
      lastError = e
    }
  }
  if ((!(source instanceof ArrayBuffer) || !link || !res.ok) && !isLimit) throw 'Error: ' + (lastError || 'Can\'t download video')
  m.reply('Sedang di proses!!')
let wes = {
      "key": {
         "remoteJid": "status@broadcast",
             "participant": "0@s.whatsapp.net",
         "fromMe": false,
         "id": ""
       },
      "message": {
            thumbnail: await (await fetch(thumbnail)).buffer(),
         "conversation": "Follow IG @zinyut_"
       }
      }
    let AdReply = {
        externalAdReply: {
        title: 'RaisaBot',
        body: 'Follow ig @zinyut_',
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
📁 Filesize: ${video.fileSizeH}
🔗 Link: ${await shortlink(link)}`, wes, { contextInfo: AdReply })
//   conn.sendFile(m.chat, thumbnail, 'thumbnail.jpg', `
// 📌Title: ${title}
// 📁 Filesize: ${video.fileSizeH}
// 🔗 Link: ${await shortlink(link)}
// ` .trim(), m)
await conn.sendFile(m.chat, link, title + '.mp4', `
📌Title: ${title}
📁 Filesize: ${video.fileSizeH}
🔗 Link: ${await shortlink(link)}
`.trim(), m, false, {
    asDocument: chat.useDocument
  })
}
handler.help = ['ytmp4 <url>']
handler.tags = ['downloader']
handler.command = /^ytv|ytmp4$/i
handler.limit = true
handler.group = true

module.exports = handler

async function shortlink(url) {
isurl = /https?:\/\//.test(url)
return isurl ? (await require('axios').get('https://tinyurl.com/api-create.php?url='+encodeURIComponent(url))).data : ''
}