let { UploadFileUgu, webp2mp4File, TelegraPh } = require('../lib/uploader')
let { MessageType, Presence, MimeType } = require('@adiwajshing/baileys')
let ftype = require('file-type')
let fs = require('fs')
let util = require('util')

let handler = async(m, { conn, text, args, usedPrefix }) => {
	            let quoted = m.quoted ? m.quoted : m
                let mime = (quoted.msg || quoted).mimetype || ''
                let media = await conn.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    m.reply(util.format(anu))
                   //conn.sendHydrated(m.chat, `Copy a link..`, 'Regards by Aine', null, `https://www.whatsapp.com/otp/copy/${util.format(anu)}`, 'Copy Link', null, null, [[null,null]], m)
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                     m.reply(util.format(anu))
                    //conn.sendHydrated(m.chat, `Copy a link..`, 'Regards by Aine', null, `https://www.whatsapp.com/otp/copy/${util.format(anu)}`, 'Copy Link', null, null, [[null,null]], m)
                }
                await fs.unlinkSync(media)
}
handler.help = ['tourl']
handler.tags = ['tools']
handler.command = /^(tourl)$/i

handler.fail = null
handler.limit = true

module.exports = handler
