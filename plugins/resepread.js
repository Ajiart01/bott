let ds = require('dandi-api')
let handler = async(m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `Harap masukan link resep makanan yg ingin dilihat\n\nContoh : ${ usedPrefix + command } https://resepkoki.id/resep/resep-nasi-goreng-shirataki/`
    let res = await ds.ResepRead(args[0])
    let makan = `*Resep:* ${res.data.judul}
*Tingkat Kesulitan:* ${res.data.tingkat_kesulitan}
*Waktu Masak:* ${res.data.waktu_masak}
*Hasil:* ${res.data.hasil}
*Bahan:* ${res.data.bahan}`.trim()
conn.sendFile(m.chat, res.data.thumb, '', makan, m)
}
handler.help = ['resepread <url>']
handler.tags = ['internet']
handler.command = /^(resepread|bacaresep)$/i

handler.limit = true

module.exports = handler