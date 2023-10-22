const { facebookdlv3, facebookdlv2 } = require('@bochilteam/scraper')
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `Linknya mana?\n\ncontoh:\n${usedPrefix}${command} https://www.facebook.com/juankcortavarriaoficial/videos/218237676749570/`
    const { result } = await facebookdlv2(args[0])
    //const { url } = result
    if (!result[0].url) return m.reply(fail)
    await conn.sendFile(m.chat, result[0].url, `facebook.mp4`,`Kualitas: ${result[0].quality}\n*© Aine*`, m)
}
handler.help = ['facebook <url>']
handler.tags = ['downloader']
handler.command = /^fb|fbdl|facebook|facebookdl$/i
handler.limit = true
handler.group = true

module.exports = handler


/*const ds = require('dandi-api')

let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) return m.reply(`Linknya mana?\n\ncontoh:\n${usedPrefix}${command} https://www.facebook.com/juankcortavarriaoficial/videos/218237676749570/`)
  await m.reply('Sedang di proses..')
  ds.Facebook(args[0]).then(r => { 
  let vid = r.data[0].url
    conn.sendFile(m.chat, vid, '', `*${wm}*`, m)
  })
}

handler.help = ['facebook <url>']
handler.tags = ['downloader']
handler.command = /^(fb|fbdl|facebook)$/i
handler.limit = true
handler.group = true
module.exports = handler*/


/*let fetch = require('node-fetch')
const getFBInfo = require('fb-downloader')
let handler = async (m, { conn, args, usedPrefix, command }) => {
   if (!args[0]) return m.reply(`Masukkan link!!\n\nContoh: ${usedPrefix}${command} https://www.facebook.com/juankcortavarriaoficial/videos/218237676749570/`)
   const { url, hd, sd, title, thumbnail } = await getFBInfo(args[0])
 conn.sendFile(m.chat, hd, 'fb.mp4', wm, m)
}
handler.help = ['facebook'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^f((b|acebook)(dl|download)?(er)?)$/i
handler.limit = true
module.exports = handler*/


/*let fetch = require('node-fetch')
const {
    MessageType
} = require('@adiwajshing/baileys')

let handler = async (m, { conn, args, usedPrefix }) => {
	if (!args[0]) return m.reply('Putting *URL* Facebook..')
    if (!args[0].includes("facebook")) return m.reply(`Url is wrong..\n\n*Example:*\n${usedPrefix}fb https://www.facebook.com/juankcortavarriaoficial/videos/218237676749570/`)
	// let res = await fetch(`https://masgimenz.my.id/facebook/?url=` + args[0])
	let res = await fetch(`https://api.violetics.pw/api/downloader/facebook?apikey=f9f2-4657-e43f&url=` + args[0])
	//if (res.status !== 200) throw `Coba Lagi`
	let json = await res.json()
	//if (!json.result) throw `Media tidak ditemukan atau postingan mungkin diprivate`
	let url = json.result.hd.url
	m.reply('Sedang diproses...')
	if (url) await conn.sendFile(m.chat, url, 'fb.mp4', author, m)
	//if (url) await conn.sendMessage(m.chat, url, MessageType.video, {mimetype: 'video/mp4', quoted: m, caption: wm})
	else m.reply('Link download tidak ditemukan')
	}

handler.help = ['fb'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^f((b|acebook)(dl|download)?(er)?)$/i
handler.limit = true
handler.group = true
handler.premium = false

module.exports = handler*/


/*let fetch = require('node-fetch')
const {
    MessageType
} = require('@adiwajshing/baileys')

let handler = async (m, { conn, args, usedPrefix }) => {
	if (!args[0]) return m.reply('Putting *URL* Facebook..')
    if (!args[0].includes("facebook")) return m.reply(`Url is wrong..\n\n*Example:*\n${usedPrefix}fb https://www.facebook.com/juankcortavarriaoficial/videos/218237676749570/`)
	let res = await fetch(`https://masgimenz.my.id/facebook/?url=` + args[0])
	//if (res.status !== 200) throw `Coba Lagi`
	let json = await res.json()
	//if (!json.result) throw `Media tidak ditemukan atau postingan mungkin diprivate`
	let url = json.videoUrl
	m.reply('Sedang diproses...')
	if (url) await conn.sendFile(m.chat, url, 'fb.mp4', wm, m)
	//if (url) await conn.sendMessage(m.chat, url, MessageType.video, {mimetype: 'video/mp4', quoted: m, caption: wm})
	else m.reply('Link download tidak ditemukan')
	}

handler.help = ['fb'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^f((b|acebook)(dl|download)?(er)?)$/i
handler.limit = true
handler.group = true
handler.premium = false

module.exports = handler*/
