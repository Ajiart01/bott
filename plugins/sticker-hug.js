let fetch = require("node-fetch")
const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async(m, { conn }) => {
  let nama = conn.getName(m.sender)
  let res = await fetch(global.API('https://api.waifu.pics', '/sfw/hug'))
  let json = await res.json()
  let stiker = await sticker(null, json.url, `Made with ❤ by`, nama)
  if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, false, { asSticker: true })
  throw stiker.toString()
}
handler.help = ['stickerhug']
handler.tags = ['sticker']
handler.command = /^hug|stickerhug|stikerhug$/i
handler.limit = true

module.exports = handler

