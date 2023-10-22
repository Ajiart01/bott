const fetch = require("node-fetch")
const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, text }) => {
  let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
  try { 
     let stiker = await sticker(null, API('xteam', '/ttp', { file: '', text: teks }), packname, author)
     if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, false, { asSticker: true })
     throw stiker.toString()
  } catch {
     try {
        let rese = await (await fetch(`https://rest-api-aiinne.herokuapp.com/api/maker/ttp?text=${text}`)).buffer()
        let stiker = await sticker(null, rese, packname, author)
        if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, false, { asSticker: true })
        throw stiker.toString()
     } catch {
        try {
           let res = await (await fetch(`https://raterian.sirv.com/New%20Project.png?text.0.text=${text}&text.0.position.y=-35%25&text.0.color=ffffff&text.0.font.family=Poppins&text.0.font.weight=600&text.0.outline.color=000000&text.0.outline.width=1`)).buffer()
           let stiker = await sticker(null, res, packname, author)
           if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, false, { asSticker: true })
           throw stiker.toString()
       } catch (e) {
          throw e 
        }
     }
  }
}
handler.help = ['ttp <teks>']
handler.tags = ['sticker']
handler.command = /^ttp$/i
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
		console.log(`Error : ${e}`)
	}
}






/*const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, text }) => {
  let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
  let stiker = await sticker(null, API('xteam', '/ttp', { file: '', text: teks }), packname, author)
  if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, false, { asSticker: true })
  throw stiker.toString()
}
handler.help = ['ttp <teks>']
handler.tags = ['sticker']
handler.command = /^ttp$/i
handler.limit = true

module.exports = handler*/
