const fs = require('fs')
const { generateProfilePicture } = require('../lib/myfunc')
let handler = async (m, { conn, isROwner }) => {
// if (!isROwner) throw false
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
var media = await q.download()
            var { img } = await generateProfilePicture(media)
            await conn.query({
            tag: 'iq',
            attrs: {
            to: m.chat,
            type:'set',
            xmlns: 'w:profile:picture'
            },
            content: [
            {
            tag: 'picture',
            attrs: { type: 'image' },
            content: img
            }
            ]
            })
            m.reply(`Sukses`)
}
handler.help = ['setppgroup']
handler.tags = ['group']

handler.command = /^setpp(group|grup|gc)?$/i

handler.group = true
handler.admin = true
handler.botAdmin = true
module.exports = handler
