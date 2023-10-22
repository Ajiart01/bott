let { instagramdl, instagramdlv2, instagramdlv3, instagramdlv4 } = require('@bochilteam/scraper')
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `*Perintah ini untuk mengunduh postingan ig/reel/tv/stories*\n\ncontoh:\n${usedPrefix + command} https://www.instagram.com/p/BmjK1KOD_UG/?utm_medium=copy_link`
    try {
    const results = await instagramdl(args[0])
        .catch(async _ => await instagramdlv2(args[0]))
        .catch(async _ => await instagramdlv3(args[0]))
        .catch(async _ => await instagramdlv4(args[0]))
    for (const { url } of results) await conn.sendFile(m.chat, "https://"+url.split("apphttps://")[1], 'instagram.mp4', `*${wm}*\n🔗 *Url:* ${await shortlink("https://"+url.split("apphttps://")[1])}`, m)
    } catch {
       throw 'Data sedang error\nAtau kesalahan program\nHarap coba kembali..'
    }
}
handler.help = ['ig'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(ig|igdl|instagram)$/i
handler.limit = true
handler.group = true

module.exports = handler

async function shortlink(url) {
isurl = /https?:\/\//.test(url)
return isurl ? (await require('axios').get('https://tinyurl.com/api-create.php?url='+encodeURIComponent(url))).data : ''
}







/*let instagramUrl = require('fg-ig')
let instagramGetUrl = require('instagram-url-direct')
let { instagramdl, instagramdlv2, instagramdlv3, instagramdlv4 } = require('@bochilteam/scraper')
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `*Perintah ini untuk mengunduh postingan ig/reel/tv/stories*\n\ncontoh:\n${usedPrefix + command} https://www.instagram.com/p/BmjK1KOD_UG/?utm_medium=copy_link`
  // if (!args[0].match(/https:\/\/www.instagram.com\/(p|reel|tv|stories)/gi)) throw `*Link salah! Perintah ini untuk mengunduh postingan ig/reel/tv, bukan untuk highlight/story!*\n\ncontoh:\n${usedPrefix + command} https://www.instagram.com/p/BmjK1KOD_UG/?utm_medium=copy_link`
 try {
     let response = (await instagramGetUrl(args[0])).url_list[0]

    // for (let data of response.url_list) {
      await conn.sendFile(m.chat, response, 'instagram.mp4', `🔗 *Url:* ${await shortlink(response)}\n*${wm}*`, m)
     // }
 } catch {
    try {
        const results = await instagramdl(args[0]).catch(async _ => await instagramdlv2(args[0])).catch(async _ => await instagramdlv3(args[0])).catch(async _ => await instagramdlv4(args[0]))
        for (const { url } of results) await conn.sendFile(m.chat, url, 'instagram.mp4', `🔗 *Url:* ${await shortlink(url)}\n*${wm}*`, m)
    } catch {
       try {
           let result = (await instagramUrl(args[0])).url_list[0]
           await conn.sendFile(m.chat, result, 'instagram.mp4', `🔗 *Url:* ${await shortlink(result)}\n*${wm}*`, m)
       } catch (e) {
         throw e
      }
    }
  }
}

handler.help = ['ig'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(ig|igdl|instagram)$/i
handler.limit = true
handler.group = true

module.exports = handler

async function shortlink(url) {
isurl = /https?:\/\//.test(url)
return isurl ? (await require('axios').get('https://tinyurl.com/api-create.php?url='+encodeURIComponent(url))).data : ''
}*/






/*let instagramGetUrl = require('instagram-url-direct')
let handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) throw `*Perintah ini untuk mengunduh postingan ig/reel/tv/stories*\n\ncontoh:\n${usedPrefix + command} https://www.instagram.com/p/BmjK1KOD_UG/?utm_medium=copy_link`
  // if (!args[0].match(/https:\/\/www.instagram.com\/(p|reel|tv|stories)/gi)) throw `*Link salah! Perintah ini untuk mengunduh postingan ig/reel/tv, bukan untuk highlight/story!*\n\ncontoh:\n${usedPrefix + command} https://www.instagram.com/p/BmjK1KOD_UG/?utm_medium=copy_link`
   let response = await instagramGetUrl(args[0])

for (let data of response.url_list) {
await conn.sendFile(m.chat, data, 'instagram.mp4', `🔗 *Url:* ${await shortlink(data)}\n*${global.wm}*`, m)
}
}

handler.help = ['ig'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(ig|igdl|instagram)$/i
handler.limit = true
handler.group = true

module.exports = handler

async function shortlink(url) {
isurl = /https?:\/\//.test(url)
return isurl ? (await require('axios').get('https://tinyurl.com/api-create.php?url='+encodeURIComponent(url))).data : ''
}*/



/*
let { instagramdl, instagramdlv2, instagramdlv3, instagramdlv4 } = require('@bochilteam/scraper')
let handler = async (m, { conn, args, usedPrefix, command }) => {

    if (!args[0]) throw `*Perintah ini untuk mengunduh postingan ig/reel/tv, bukan untuk highlight/story!*\n\ncontoh:\n${usedPrefix + command} https://www.instagram.com/p/BmjK1KOD_UG/?utm_medium=copy_link`
    if (!args[0].match(/https:\/\/www.instagram.com\/(p|reel|tv)/gi)) throw `*Link salah! Perintah ini untuk mengunduh postingan ig/reel/tv, bukan untuk highlight/story!*\n\ncontoh:\n${usedPrefix + command} https://www.instagram.com/p/BmjK1KOD_UG/?utm_medium=copy_link`
    const results = await instagramdl(args[0])
.catch(async _ => await instagramdlv2(args[0]))
.catch(async _ => await instagramdlv3(args[0]))
.catch(async _ => await instagramdlv4(args[0]))
    for (const { url } of results) await conn.sendFile(m.chat, url, 'instagram.mp4', `🔗 *Url:* ${await shortlink(url)}\n*${global.wm}*`, m)
}

handler.help = ['ig'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(ig|igdl|instagram)$/i
handler.limit = true
handler.group = true

module.exports = handler

async function shortlink(url) {
isurl = /https?:\/\//.test(url)
return isurl ? (await require('axios').get('https://tinyurl.com/api-create.php?url='+encodeURIComponent(url))).data : ''
}
*/
