const uploadFile = require('../lib/uploadFile')
const uploadImage = require('../lib/uploadImage')

let handler = async (m) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'No media found'
  let media = await q.download()
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4\/webp/.test(mime)
  let link = await (isTele ? uploadImage : uploadFile)(media)
  m.reply(`*${wm}*

${link}
${media.length} Byte(s)
${isTele ? '(No Expiry Date)' : '(Unknown)'}`)
/*conn.sendHydrated(m.chat, `*${wm}*

${media.length} Byte(s)
${isTele ? '(No Expiry Date)' : '(Unknown)'}`, 'Regards by Aine', null, `https://www.whatsapp.com/otp/copy/${link}`, 'Copy Link', null, null, [[null,null]], m)*/
}
handler.help = ['upload (caption|reply media)']
handler.tags = ['tools']
handler.command = /^upload$/i
handler.limit = true

module.exports = handler
