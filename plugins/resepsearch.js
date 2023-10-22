let ds = require('dandi-api')
let handler = async(m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `Harap masukan resep makanan yg ingin dicari\n\nContoh : ${ usedPrefix + command } nasi goreng`
    let res = await ds.ResepSearch(text)
    let makan = res.data.map((v, i) => `#${i + 1}. \n*Judul:* ${v.judul}\n*Link:* ${v.link}\n────────────────────\n`).join('\n') 
    m.reply(makan)
}
handler.help = ['resepsearch <query>']
handler.tags = ['internet']
handler.command = /^(cariresep|resepsearch)$/i

handler.limit = true

module.exports = handler