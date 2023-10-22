const { happymodSearch } = require("../lib/happymod.js")
let handler = async (m, { text,usedPrefix,command }) => {
  if (!text) return m.reply('Cari apa?\nmisal\n'+usedPrefix+command+' coc')
var a = await happymodSearch(text)
var b = a.map((v, i) => `_*DATA KE ${i + 1}*_\n\n*📜 Title:* ${v.title}\n*⭐ Rating :* ${v.rating}\n*🌐 Link:* ${v.link}`).join('\n\n*_===================================_*\n\n')
  m.reply(b)
}
handler.help = ['happymod [text]']
handler.tags = ['internet']
handler.command = /^happymod$/i

module.exports = handler
