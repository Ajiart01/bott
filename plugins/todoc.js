let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw 'Nama file'
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if(!mime) throw "reply atau kirim media"
await conn.sendMediaFile(m.chat, await q.download(), text, '_*Done..*_', m, false, {asDocument:true})
}
handler.help = ['todoc', 'todocument'].map(v =>  v + ` <namafile> <reply chat>`)
handler.tags = ['tools']
handler.command = /^to(doc|document)$/i
handler.limit = true

module.exports = handler
