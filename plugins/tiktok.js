/*const { tiktokdlv3 } = require('@bochilteam/scraper')
let handler = async (m, { conn, args, usedPrefix, command, isOwner }) => {
	if (!args[0]) throw `Link tiktoknya mana?\n\ncontoh:\n${usedPrefix}${command} https://vm.tiktok.com/ZGJAmhSrp/`
    tiktokdlv3(args[0]).then(r => {
    let video = r.video.no_watermark
    conn.sendFile(m.chat, video, '', `*${wm}*`, m)
    })
}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.limit = true
handler.group = true

handler.command = /^(tt|tiktok|tik)$/i

module.exports = handler*/


// const { tiktok } = require('../lib/tiktok')
// let handler = async (m, { conn, args, usedPrefix, command, isOwner }) => {
// 	if (!args[0]) throw `Link tiktoknya mana?\n\ncontoh:\n${usedPrefix}${command} https://vm.tiktok.com/ZGJAmhSrp/`
// 	await m.reply('Sedang di proses..')
//     tiktok(args[0]).then(async (r) => {
//     conn.sendFile(m.chat, r.media[1].url, '', `*${wm}*`, m)
//   })
// }
// handler.help = ['tiktok'].map(v => v + ' <url>')
// handler.tags = ['downloader']
// handler.command = /^ttdl|tiktok|tiktokdl$/i
// handler.limit = true
// handler.group = true

// module.exports = handler

let axios = require('axios')
let cheerio = require('cheerio')
let fs = require('fs')
let fetch = require("node-fetch")
let vm = require("node:vm")
let { tiktokdlv3 } = require("@bochilteam/scraper")
let handler = async (m, { conn, args, usedPrefix, command }) => {
    let nama = conn.getName(m.sender)
if (!args[0]) throw `Link tiktoknya mana kak ${nama}\n\ncontoh:\n${usedPrefix}${command} https://www.tiktok.com/@naurabngs/video/7162774215798574362?is_from_webapp=1&sender_device=mobile&sender_web_id=7162765239884187138`
//
    let res = ( await savefrom(args[0])).url[0]
    let result = await savefrom(args[0])
   
   let { title, source, duration } = result.meta
   let { url } = res
   if (!url) throw 'Can\'t download video!'
   await  conn.sendFile(m.chat, url, 'tiktok.mp4', `
${title ? "*Title:* "+ title : "Untitled"}
${source ? "*Source:* " + source : "unsource"}
${duration ? "*Duration:* " + duration : "null"}

Follow me on Instagram: https://instagram.com/zinyut_
`.trim(), m)
let anu = `${title ? "*Title:* "+ title : "Untitled"}
${source ? "*Source:* " + source : "unsource"}
${duration ? "*Duration:* " + duration : "null"}

Follow me on Instagram: https://instagram.com/zinyut_
`
conn.sendButton(m.chat, anu, wm, url, [[`🎵 AUDIO`, `.tomp3`]], m)
}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^tiktok|tiktokdl|ttdl|tt$/i
handler.limit = true
handler.group = false

module.exports = handler

//Savefrom
async function savefrom() {
    let body = new URLSearchParams({
        "sf_url": encodeURI(arguments[0]),
        "sf_submit": "",
        "new": 2,
        "lang": "id",
        "app": "",
        "country": "id",
        "os": "Windows",
        "browser": "Chrome",
        "channel": " main",
        "sf-nomad": 1
    });
    let {
        data
    } = await axios({
        "url": "https://worker.sf-tools.com/savefrom.php",
        "method": "POST",
        "data": body,
        "headers": {
            "content-type": "application/x-www-form-urlencoded",
            "origin": "https://id.savefrom.net",
            "referer": "https://id.savefrom.net/",
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.74 Safari/537.36"
        }
    });
    let exec = '[]["filter"]["constructor"](b).call(a);';
    data = data.replace(exec, `\ntry {\ni++;\nif (i === 2) scriptResult = ${exec.split(".call")[0]}.toString();\nelse (\n${exec.replace(/;/, "")}\n);\n} catch {}`);
    let context = {
        "scriptResult": "",
        "i": 0
    };
    vm.createContext(context);
    new vm.Script(data).runInContext(context);
    return JSON.parse(context.scriptResult.split("window.parent.sf.videoResult.show(")?.[1].split(");")?.[0])
}
/*const ds = require('dandi-api')
let handler = async (m, { conn, args, usedPrefix, command, isOwner }) => {
	if (!args[0]) throw `Link tiktoknya mana?\n\ncontoh:\n${usedPrefix}${command} https://vm.tiktok.com/ZGJAmhSrp/`
    ds.Tt2(args[0]).then(r => {
    conn.sendFile(m.chat, r.data.video, '', `*${wm}*`, m)
    })
}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tt|tiktok|tik)$/i
handler.group = true
handler.limit = true

module.exports = handler
*/

/*const { tiktokdl, tiktokdlv2 } = require('@bochilteam/scraper')
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `Use example ${usedPrefix}${command} https://www.tiktok.com/@omagadsus/video/7025456384175017243`
    const { author: { nickname }, video, description } = await tiktokdl(args[0]).catch(async _ => await tiktokdlv2(args[0]))
    const url = video.no_watermark || video.no_watermark_hd || video.with_watermark || video.no_watermark_raw
    if (!url) throw 'Can\'t download video!'
    conn.sendFile(m.chat, url, 'tiktok.mp4', `
🔗 *Url:* ${url}
🧏 *Nickname:* ${nickname}${description ? `🖹 *Description:* ${description}` : ''}
`.trim(), m)
}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^(tik(tok)?(dl)?)$/i

module.exports = handler*/

/*
const hxz = require("hxz-api")
let handler = async(m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `*Perintah ini untuk mengunduh video tiktok dengan link*\n\ncontoh:\n${usedPrefix + command} https://vm.tiktok.com/ZGJAmhSrp/`
if (!args[0].match(/tiktok/gi)) throw `*Link salah! Perintah ini untuk mengunduh video tiktok dengan link*\n\ncontoh:\n${usedPrefix + command} https://vm.tiktok.com/ZGJAmhSrp/`
let p = await  hxz.ttdownloader(args[0])
const { nowm, wm, audio } = p
// made by aine
 conn.sendFile(m.chat, nowm, 'tiktok.mp4', `*${global.wm}*`, m)
}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tiktok|tiktokdl)$/i
handler.limit = true
handler.group = true
module.exports = handler
*/

/*
const { tiktokdl, tiktokdlv2 } = require('@bochilteam/scraper')
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `*Perintah ini untuk mengunduh video tiktok dengan link*\n\ncontoh:\n${usedPrefix + command} https://vm.tiktok.com/ZGJAmhSrp/`
    if (!args[0].match(/tiktok/gi)) throw `*Link salah! Perintah ini untuk mengunduh video tiktok dengan link*\n\ncontoh:\n${usedPrefix + command} https://vm.tiktok.com/ZGJAmhSrp/`
    const { author: { nickname }, video, description } = await tiktokdl(args[0]).catch(async _ => await tiktokdlv2(args[0]))
    const url = video.no_watermark || video.no_watermark_hd || video.with_watermark || video.no_watermark_raw
    if (!url) throw 'Can\'t download video!'
    m.reply('Sedang diproses...')
    conn.sendFile(m.chat, url, 'tiktok.mp4', `*© Aine*
`.trim(), m)
}
handler.help = ['tiktok <url>']
handler.tags = ['downloader']

handler.command = /^(tik|tt|tiktok)$/i
handler.limit = true
handler.group = true

module.exports = handler*/
