let fetch = require("node-fetch")
let axios = require("axios")
const { sticker } = require('../lib/sticker')
let handler = async (m, { conn, text }) => {
    try {
       let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
       conn.sendFile(m.chat, API('xteam', '/attp', { file: '', text: teks }), 'attp.webp', '', m, false, { asSticker: true })
    } catch {
       let res = await getBuffer(`https://restapi.frteam.xyz/attp?text=${text}&apikey=Hrbot`)
       await m.reply(res)
   }
}
handler.help = ['attp <teks>']
handler.tags = ['sticker']
handler.command = /^attp$/i
handler.limit = true

module.exports = handler

const fetchJson = (url, options) => new Promise(async (resolve, reject) => {
    fetch(url, options)
        .then(response => response.json())
        .then(json => {
            // console.log(json)
            resolve(json)
        })
        .catch((err) => {
            reject(err)
        })
})


const getBuffer = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
                    'User-Agent': 'GoogleBot',
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (e) {
		throw e
	}
}
