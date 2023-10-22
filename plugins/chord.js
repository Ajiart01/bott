let handler = async(m, {conn, text, usedPrefix, command }) => {
if (!text)  throw `Judul lagu nya mana\nContoh: ${usedPrefix + command} cinta monet`
let isi = (await require("rizfurr-api").search.chordlagu(text)).result.content
let id =  (await require("rizfurr-api").search.chordlagu(text)).result.id
let author = (await require("rizfurr-api").search.chordlagu(text)).result.title

conn.reply(m.chat, `Id : *${id}*
Title : *${author}*

${isi}
`, m)
}
handler.help = ['chordlagu']
handler.tags = ['internet']
handler.command = /^(chordlagu|cl)$/i
handler.limit = true

module.exports = handler
