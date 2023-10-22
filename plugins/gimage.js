let { promisify } = require('util')
let _gis = require('g-i-s')
let gis = promisify(_gis)

let handler  = async (m, { conn, args, text }) => {
  if (text === 'memek') {
      m.reply('*Jangan mencari hall aneh, ketahuan owner anda akan terblokir..🙄*')
      throw false
  }
  if (text === 'kontol') {
      m.reply('*Jangan mencari hall aneh, ketahuan owner anda akan terblokir..🙄*')
      throw false
  }
  if (text === 'ngentot') {
      m.reply('*Jangan mencari hall aneh, ketahuan owner anda akan terblokir..🙄*')
      throw false
  }
  if (text === 'ngewe') {
      m.reply('*Jangan mencari hall aneh, ketahuan owner anda akan terblokir..🙄*')
      throw false
  }
  if (text === 'hentai') {
      m.reply('*Jangan mencari hall aneh, ketahuan owner anda akan terblokir..🙄*')
      throw false
  }
  if (text === 'bugil') {
      m.reply('*Jangan mencari hall aneh, ketahuan owner anda akan terblokir..🙄*')
      throw false
  }
  if (text === 'bokep') {
      m.reply('*Jangan mencari hall aneh, ketahuan owner anda akan terblokir..🙄*')
      throw false
  }
  if (text === 'cewek bugil') {
      m.reply('*Jangan mencari hall aneh, ketahuan owner anda akan terblokir..🙄*')
      throw false
  }
  if (text === 'bkp') {
      m.reply('*Jangan mencari hall aneh, ketahuan owner anda akan terblokir..🙄*')
      throw false
  }
  if (text === 'kontl') {
      m.reply('*Jangan mencari hall aneh, ketahuan owner anda akan terblokir..🙄*')
      throw false
  }
  if (text === 'kntl') {
      m.reply('*Jangan mencari hall aneh, ketahuan owner anda akan terblokir..🙄*')
      throw false
  }
  if (text === 'mmk') {
      m.reply('*Jangan mencari hall aneh, ketahuan owner anda akan terblokir..🙄*')
      throw false
  }
  if (text === 'memk') {
      m.reply('*Jangan mencari hall aneh, ketahuan owner anda akan terblokir..🙄*')
      throw false
  }
  if (text === 'mmek') {
      m.reply('*Jangan mencari hall aneh, ketahuan owner anda akan terblokir..🙄*')
      throw false
  }
  if (text === 'ngntt') {
      m.reply('*Jangan mencari hall aneh, ketahuan owner anda akan terblokir..🙄*')
      throw false
  }
  if (text === 'ngentod') {
      m.reply('*Jangan mencari hall aneh, ketahuan owner anda akan terblokir..🙄*')
      throw false
  }
  if (text === 'sange') {
      m.reply('*Jangan mencari hall aneh, ketahuan owner anda akan terblokir..🙄*')
      throw false
  }
  if (text === 'telanjang') {
      m.reply('*Jangan mencari hall aneh, ketahuan owner anda akan terblokir..🙄*')
      throw false
  }
  if (!text) throw 'Cari apa?'
  let results = await gis(text) || []
  let { url, width, height } = pickRandom(results) || {}
  if (!url) throw '404 Not Found'
  conn.sendFile(m.chat, url, 'gimage', `
*── 「 GOOGLE IMAGE 」 ──*

${text}
➸ *width*: ${width}
➸ *height*: ${height}
`.trim(), m)
}
handler.help = ['gimage <search>']
handler.tags = ['internet']
handler.command = /^(gimage|image)$/i
handler.limit = true
handler.group = true
module.exports = handler

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}
