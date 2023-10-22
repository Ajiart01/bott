const axios = require('axios')
const cheerio = require('cheerio')
const { MessageType } = require('@adiwajshing/baileys')
// const { soundcloud } = require('../lib/soundcloud')

let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `*Perintah ini untuk mencari lagu soundcloud berdasarkan url*\n\ncontoh:\n${usedPrefix + command} https://soundcloud.com/yohancarmelio/bella-poarch-build-a-bitch-yohan-carmelio-remix?utm_source=mobi&utm_campaign=social_sharing`
   // if (isUrl(args[0])) throw `*Perintah ini untuk mencari lagu joox berdasarkan pencarian bukan link*\n\ncontoh:\n${usedPrefix + command} akad`

    // soundcloud(args[0]).then(res => {
    let res = await soundcloud(args[0])
    let json = JSON.parse(JSON.stringify(res))
        // let soundcloud = JSON.stringify(res)
        // let jjson = JSON.parse(soundcloud)
        // let random = Math.floor(Math.random() * jjson.data.length)
        // let hasil = jjson.data[random]
        // let json = jjson
        let pesan = `
*Judul:* ${json.title}
*Link:* ${await shortlink(json.link)}

*Made by* ❤️`.trim()

        conn.sendFile(m.chat, json.thumb, 'error.jpg', pesan, m)
        conn.sendMessage(m.chat, { audio: { url: json.link}, mimetype: 'audio/mp4' }, {quoted: m})
   // })
}

handler.help = ['soundcloud']
handler.tags = ['downloader']

handler.command = /^soundcloud$/i
handler.limit = true
handler.premium = false

module.exports = handler

const isUrl = (text) => {
    return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
}

async function shortlink(url) {
isurl = /https?:\/\//.test(url)
return isurl ? (await require('axios').get('https://tinyurl.com/api-create.php?url='+encodeURIComponent(url))).data : ''

}

async function soundcloud(url) {
	return new Promise(async (resolve, reject) => {
		await axios.request({
			url: "https://www.klickaud.co/download.php",
			method: "POST",
			data: new URLSearchParams(Object.entries({'value': url, 'afae4540b697beca72538dccafd46ea2ce84bec29b359a83751f62fc662d908a' : '2106439ef3318091a603bfb1623e0774a6db38ca6579dae63bcbb57253d2199e'})),
			headers: {
				"content-type": "application/x-www-form-urlencoded",
				"user-agent": "Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36"
			}
		}).then(res => {
			const $ = cheerio.load(res.data)
			const result = {
				link: $('#dlMP3').attr('onclick').split(`downloadFile('`)[1].split(`',`)[0],
				thumb: $('#header > div > div > div.col-lg-8 > div > table > tbody > tr > td:nth-child(1) > img').attr('src'),
				title: $('#header > div > div > div.col-lg-8 > div > table > tbody > tr > td:nth-child(2)').text()
			}
			resolve(result)
		}).catch(reject)
    })
}
