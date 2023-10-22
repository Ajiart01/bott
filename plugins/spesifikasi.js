const ds = require('dandi-api')
let handler = async (m, { conn, text, usedPrefix, command }) => {
   if (!text) throw `Contoh: ${ usedPrefix + command } Infinix Hot 10s`
   let res = await ds.GSMArena(text)
   let more = String.fromCharCode(8206)
   let readMore = more.repeat(4001)
   let pic = res.result.thumb
   let data = `*${res.result.judul}*
   
Rilis: ${res.result.rilis}
Ukuran: ${res.result.ukuran}
Type: ${res.result.type}
Storage: ${res.result.storage}
Ram: ${res.result.ram}
Display: ${res.result.display}
Ukuran: ${res.result.inchi}
Kamera: ${res.result.pixel}
Video: ${res.result.videoPixel}
Chipset: ${res.result.chipset}
Baterai: ${res.result.batrai} ${res.result.merek_batre}
${readMore}Detail: ${res.result.detail}`.trim()
   await conn.sendFile(m.chat, pic, '', data, m)
}
handler.help = ['spesifikasi'].map(v => v + ' <query>')
handler.tags = ['internet']
handler.limit = true
handler.group = true
handler.command = /^(spek|spesifikasi)$/i

module.exports = handler
