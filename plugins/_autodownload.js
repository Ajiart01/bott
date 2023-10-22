const ds = require('dandi-api')
const axios = require('axios')
const cheerio = require('cheerio')
const { MessageType } = require('@adiwajshing/baileys')
const instagramGetUrl = require('instagram-url-direct')
const { ytIdRegex, servers, yta, ytv } = require('../lib/y2mate')
const { tiktok } = require('../lib/tiktok')
const { tiktokdlv3, instagramdl, instagramdlv2, instagramdlv3, instagramdlv4 } = require('@bochilteam/scraper')

let handler = m => m

handler.before = async function (m, { isPrems }) {
    let chat = db.data.chats[m.chat]
    let user = db.data.users[m.sender]
    if (m.chat.endsWith('broadcast')) return
    if (chat.isBanned || user.banned || !chat.download || m.isBaileys) return 

    if (/https?:\/\/(www\.|v(t|m)\.|t\.)?tiktok\.com/i.test(m.text)) {
        await m.reply('Sedang diproses..')
        try {
        tiktok(m.text).then(async (r) => {
            for (let i = 0; i < r.media.length; i++) {
               conn.sendFile(m.chat, r.media[1].url, '', `*${wm}*`, m)
             }
         })
        } catch (e) {
        m.reply('Error!')
        throw false
       }
    }

    if (/https?:\/\/(fb\.watch|(www\.|web\.|m\.)?facebook\.com)/i.test(m.text)) {
        await m.reply('Sedang diproses..')
        try {
        ds.Facebook(m.text).then(r => { 
        let vid = r.data[0].url
        conn.sendFile(m.chat, vid, '', `*${wm}*`, m)
        })
        } catch (e) {
        m.reply('Error!')
        throw false
       }
    }

    if (/https?:\/\/(www\.)?instagram\.com\/(p|reel|stories|tv)/i.test(m.text)) {
        await m.reply('Sedang diproses..')
        try {
        const results = await instagramdl(m.text)
        .catch(async _ => await instagramdlv2(m.text))
        .catch(async _ => await instagramdlv3(m.text))
        .catch(async _ => await instagramdlv4(m.text))
    for (const { url } of results) await conn.sendFile(m.chat, "https://"+url.split("apphttps://")[1], 'instagram.mp4', `*${wm}*\n🔗 *Url:* ${await shortlink("https://"+url.split("apphttps://")[1])}`, m)
        } catch (e) {
        m.reply('Error!')
        throw false
       }
    }  
    
    if (/https?:\/\/(www\.)?soundcloud\.com/i.test(m.text)) {
        await m.reply('Sedang diproses..')
        try {
        let res = await soundcloud(m.text)
        let json = JSON.parse(JSON.stringify(res))
        let pesan = `
*Judul:* ${json.title}
*Link:* ${await shortlink(json.mp3)}

*Made by* ❤️`.trim()
        conn.sendFile(m.chat, json.image, 'error.jpg', pesan, m)
        conn.sendMessage(m.chat, { audio: { url: json.mp3}, mimetype: 'audio/mp4' }, {quoted: m})
        } catch (e) {
        m.reply('Error!')
        throw false
       }
    }  
    
    /*if (ytIdRegex.test(m.text) || ytIdRegex.test(m.selectedButtonId)) {
        let yt = false
        let usedServer = servers[0]
        for (let i in servers) {
            let server = servers[i]
            try {
                yt = await yta(vid.url, server)
                yt2 = await ytv(vid.url, server)
                usedServer = server
                break
            } catch (e) {
                m.reply(`Server ${server} error!${servers.length >= i + 1 ? '' : '\nmencoba server lain...'}`)
            }
        }
        if (yt === false) return m.reply(eror)
        if (yt2 === false) return m.reply(eror)
        let { dl_link, thumb, title, filesize, filesizeF } = yt
        await this.sendButton(m.chat, `
*Judul:* ${title}
*Ukuran File Audio:* ${filesizeF}
*Ukuran File Video:* ${yt2.filesizeF}
*Server y2mate:* ${usedServer}
`.trim(), wm, thumb, [[`📽 VIDEO ${yt2.filesizeF}`, `.ytmp4 ${vid.url}`],[`🎵 AUDIO ${filesizeF}`, `.ytmp3 ${vid.url}`]], m)
    }*/
}

handler.limit = true
handler.group = true
module.exports = handler

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
				mp3: $('#dlMP3').attr('onclick').split(`downloadFile('`)[1].split(`',`)[0],
				image: $('#header > div > div > div.col-lg-8 > div > table > tbody > tr > td:nth-child(1) > img').attr('src'),
				title: $('#header > div > div > div.col-lg-8 > div > table > tbody > tr > td:nth-child(2)').text()
			}
			resolve(result)
		}).catch(reject)
    })
}
